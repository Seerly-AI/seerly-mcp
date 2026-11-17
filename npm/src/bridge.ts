import { UnauthorizedError } from "@modelcontextprotocol/sdk/client/auth.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ErrorCode,
  isJSONRPCRequest,
  isJSONRPCResultResponse,
  type JSONRPCMessage,
  type RequestId,
} from "@modelcontextprotocol/sdk/types.js";
import type { SeerlyOAuthProvider } from "./oauth-provider.js";

/**
 * Relays MCP messages between a local app on stdio and Seerly over Streamable HTTP. A message
 * Seerly turns away as unauthorized waits for the browser sign-in and goes again; a request that
 * fails for any other reason is answered with a JSON-RPC error, so the app never waits on it.
 */
export class Bridge {
  private readonly local = new StdioServerTransport();
  private readonly remote: StreamableHTTPClientTransport;
  private signingIn?: Promise<void>;
  private initializeId?: RequestId;

  constructor(
    serverUrl: URL,
    private readonly provider: SeerlyOAuthProvider,
  ) {
    this.remote = new StreamableHTTPClientTransport(serverUrl, { authProvider: provider });
  }

  async start(): Promise<void> {
    this.local.onmessage = (message) => void this.forward(message);
    this.local.onerror = (error) => console.error(`Seerly MCP: ${error.message}`);
    this.remote.onmessage = (message) => this.deliver(message);
    this.remote.onerror = (error) => {
      if (!(error instanceof UnauthorizedError)) console.error(`Seerly MCP: ${error.message}`);
    };
    await this.remote.start();
    await this.local.start();
  }

  close(): Promise<void> {
    return this.remote.close();
  }

  private async forward(message: JSONRPCMessage): Promise<void> {
    if (isJSONRPCRequest(message) && message.method === "initialize") this.initializeId = message.id;
    try {
      await this.sendSigningInIfNeeded(message);
    } catch (error) {
      this.answerWithError(message, error);
    }
  }

  private async sendSigningInIfNeeded(message: JSONRPCMessage): Promise<void> {
    try {
      await this.remote.send(message);
    } catch (error) {
      if (!(error instanceof UnauthorizedError)) throw error;
      await this.signIn();
      await this.remote.send(message);
    }
  }

  /** One browser sign-in at a time: messages turned away meanwhile wait for the same one. */
  private signIn(): Promise<void> {
    this.signingIn ??= this.provider
      .authorizationCode()
      .then((code) => this.remote.finishAuth(code))
      .finally(() => {
        this.signingIn = undefined;
      });
    return this.signingIn;
  }

  /** Later requests must carry the protocol version the server agreed to in initialize. */
  private deliver(message: JSONRPCMessage): void {
    if (isJSONRPCResultResponse(message) && message.id === this.initializeId) {
      this.remote.setProtocolVersion(String(message.result.protocolVersion));
      this.initializeId = undefined;
    }
    void this.local.send(message);
  }

  private answerWithError(message: JSONRPCMessage, error: unknown): void {
    if (!isJSONRPCRequest(message)) return;
    const text = error instanceof Error ? error.message : String(error);
    void this.local.send({ jsonrpc: "2.0", id: message.id, error: { code: ErrorCode.InternalError, message: text } });
  }
}

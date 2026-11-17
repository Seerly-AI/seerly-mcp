import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import type { AddressInfo } from "node:net";

const CALLBACK_PATH = "/callback";

interface PendingCode {
  promise: Promise<string>;
  resolve: (code: string) => void;
  reject: (error: Error) => void;
}

/**
 * The loopback page the browser sign-in redirects back to (RFC 8252 §7.3). It listens on a free
 * port for the life of the bridge, because the redirect URL is needed before any 401 arrives, and
 * accepts only the state of the latest sign-in.
 */
export class CallbackServer {
  private expectedState?: string;
  private pending?: PendingCode;

  private constructor(
    private readonly server: Server,
    readonly redirectUrl: string,
  ) {}

  static async listen(): Promise<CallbackServer> {
    const server = createServer();
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    server.unref();
    const { port } = server.address() as AddressInfo;
    const callback = new CallbackServer(server, `http://127.0.0.1:${port}${CALLBACK_PATH}`);
    server.on("request", (request, response) => callback.handle(request, response));
    return callback;
  }

  /** A new sign-in is starting with this state; its code goes to whoever already waits. */
  expect(state: string): void {
    this.expectedState = state;
    this.pending ??= createPendingCode();
  }

  nextCode(): Promise<string> {
    if (!this.pending) throw new Error("No Seerly sign-in is in progress.");
    return this.pending.promise;
  }

  private handle(request: IncomingMessage, response: ServerResponse): void {
    const url = new URL(request.url ?? "/", this.redirectUrl);
    if (url.pathname !== CALLBACK_PATH) return reply(response, 404, "Not found.");
    if (!this.expectedState || url.searchParams.get("state") !== this.expectedState) {
      return reply(response, 400, "This sign-in link has expired. Start again from your app.");
    }
    const error = url.searchParams.get("error");
    const code = url.searchParams.get("code");
    if (error || !code) {
      this.settle((pending) => pending.reject(new Error(url.searchParams.get("error_description") ?? error ?? "No code.")));
      return reply(response, 400, "Seerly sign-in did not complete. You can close this tab.");
    }
    this.settle((pending) => pending.resolve(code));
    reply(response, 200, "Signed in to Seerly. You can close this tab.");
  }

  private settle(outcome: (pending: PendingCode) => void): void {
    const pending = this.pending;
    this.pending = undefined;
    this.expectedState = undefined;
    if (pending) outcome(pending);
  }
}

function createPendingCode(): PendingCode {
  let resolve!: (code: string) => void;
  let reject!: (error: Error) => void;
  const promise = new Promise<string>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  // A refusal with nobody waiting must not crash the process; waiters still see the rejection.
  promise.catch(() => {});
  return { promise, resolve, reject };
}

function reply(response: ServerResponse, status: number, text: string): void {
  response.writeHead(status, { "content-type": "text/plain; charset=utf-8" }).end(text);
}

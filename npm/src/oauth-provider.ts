import { randomBytes } from "node:crypto";
import type { OAuthClientProvider } from "@modelcontextprotocol/sdk/client/auth.js";
import type {
  OAuthClientInformationMixed,
  OAuthClientMetadata,
  OAuthTokens,
} from "@modelcontextprotocol/sdk/shared/auth.js";
import type { CallbackServer } from "./callback-server.js";
import type { CredentialStore } from "./credential-store.js";
import { openBrowser } from "./open-browser.js";

/** Shown on Seerly's consent page. */
const CLIENT_NAME = "Seerly MCP (@seerly/mcp)";

type CredentialScope = "all" | "client" | "tokens" | "verifier" | "discovery";

/**
 * Seerly sign-in for the bridge: the SDK registers the client, runs PKCE and refreshes tokens; this
 * class keeps what it is handed and opens the browser. The client and tokens persist; the PKCE
 * verifier lives only as long as one sign-in.
 */
export class SeerlyOAuthProvider implements OAuthClientProvider {
  private verifier?: string;

  constructor(
    private readonly serverUrl: URL,
    private readonly store: CredentialStore,
    private readonly callback: CallbackServer,
  ) {}

  get redirectUrl(): string {
    return this.callback.redirectUrl;
  }

  get clientMetadata(): OAuthClientMetadata {
    return {
      client_name: CLIENT_NAME,
      redirect_uris: [this.callback.redirectUrl],
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
    };
  }

  state(): string {
    const state = randomBytes(16).toString("hex");
    this.callback.expect(state);
    return state;
  }

  clientInformation(): OAuthClientInformationMixed | undefined {
    return this.store.read().client;
  }

  saveClientInformation(client: OAuthClientInformationMixed): void {
    this.store.update({ client });
  }

  tokens(): OAuthTokens | undefined {
    return this.store.read().tokens;
  }

  saveTokens(tokens: OAuthTokens): void {
    this.store.update({ tokens });
  }

  /** Only Seerly's own sign-in page is ever opened, whatever the discovery documents say. */
  redirectToAuthorization(authorizationUrl: URL): void {
    if (authorizationUrl.origin !== this.serverUrl.origin) {
      throw new Error(`Refusing to open a sign-in page outside ${this.serverUrl.origin}: ${authorizationUrl.origin}`);
    }
    console.error(`Sign in to Seerly in your browser: ${authorizationUrl.href}`);
    openBrowser(authorizationUrl);
  }

  saveCodeVerifier(verifier: string): void {
    this.verifier = verifier;
  }

  codeVerifier(): string {
    if (!this.verifier) throw new Error("No Seerly sign-in is in progress.");
    return this.verifier;
  }

  invalidateCredentials(scope: CredentialScope): void {
    if (scope === "all" || scope === "client") this.store.update({ client: undefined });
    if (scope === "all" || scope === "tokens") this.store.update({ tokens: undefined });
    if (scope === "all" || scope === "verifier") this.verifier = undefined;
  }

  /** The authorization code of the sign-in that redirectToAuthorization opened. */
  authorizationCode(): Promise<string> {
    return this.callback.nextCode();
  }
}

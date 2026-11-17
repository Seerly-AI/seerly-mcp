import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import type { OAuthClientInformationMixed, OAuthTokens } from "@modelcontextprotocol/sdk/shared/auth.js";

export interface Credentials {
  client?: OAuthClientInformationMixed;
  tokens?: OAuthTokens;
}

const CREDENTIALS_DIR = join(homedir(), ".seerly", "mcp");

/**
 * The registered OAuth client and the tokens for one server URL, in a file only the user can read.
 * Read from disk on every use: Seerly rotates refresh tokens and revokes a sign-in whose old
 * refresh token comes back, so a second bridge process must always see the newest pair.
 */
export class CredentialStore {
  private readonly file: string;

  constructor(serverUrl: URL) {
    const key = createHash("sha256").update(serverUrl.href).digest("hex").slice(0, 16);
    this.file = join(CREDENTIALS_DIR, `${key}.json`);
  }

  read(): Credentials {
    try {
      return JSON.parse(readFileSync(this.file, "utf8")) as Credentials;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") return {};
      throw error;
    }
  }

  /** Merges the change in; a field set to undefined is dropped. Written whole, then renamed. */
  update(change: Credentials): void {
    mkdirSync(CREDENTIALS_DIR, { recursive: true, mode: 0o700 });
    const temporary = `${this.file}.${process.pid}.tmp`;
    writeFileSync(temporary, JSON.stringify({ ...this.read(), ...change }), { mode: 0o600 });
    renameSync(temporary, this.file);
  }
}

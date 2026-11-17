#!/usr/bin/env node
import { Bridge } from "./bridge.js";
import { CallbackServer } from "./callback-server.js";
import { CredentialStore } from "./credential-store.js";
import { SeerlyOAuthProvider } from "./oauth-provider.js";
import { resolveServerUrl } from "./server-url.js";

/** `npx @seerly/mcp [project]`: Seerly's MCP server for apps that run local (stdio) servers. */
async function main(): Promise<void> {
  const serverUrl = resolveServerUrl(process.argv[2], process.env);
  const callback = await CallbackServer.listen();
  const provider = new SeerlyOAuthProvider(serverUrl, new CredentialStore(serverUrl), callback);
  const bridge = new Bridge(serverUrl, provider);
  process.stdin.on("end", () => void bridge.close().finally(() => process.exit(0)));
  await bridge.start();
}

main().catch((error: Error) => {
  console.error(`Seerly MCP: ${error.message}`);
  process.exit(1);
});

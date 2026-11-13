import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { renderReference, type ListedTool } from "./render-reference.js";

const REFERENCES_DIR = join(import.meta.dirname, "..", "plugin", "skills", "seerly", "references");

/**
 * Rewrites the skill's references from a live server's tools/list, so the docs always match the
 * tools. Needs a Seerly access token for any account: SEERLY_TOKEN=... npm run references.
 */
async function main(): Promise<void> {
  const url = process.env.SEERLY_MCP_URL ?? "https://seerly.app/api/mcp";
  const token = process.env.SEERLY_TOKEN;
  if (!token) throw new Error("Set SEERLY_TOKEN to a Seerly access token.");

  const client = new Client({ name: "seerly-mcp-references", version: "0.1.0" });
  await client.connect(
    new StreamableHTTPClientTransport(new URL(url), { requestInit: { headers: { authorization: `Bearer ${token}` } } }),
  );
  const { tools } = await client.listTools();
  await client.close();
  writeReferences(tools as ListedTool[]);
  console.log(`Wrote ${tools.length} references from ${url}.`);
}

export function writeReferences(tools: readonly ListedTool[]): void {
  mkdirSync(REFERENCES_DIR, { recursive: true });
  for (const file of readdirSync(REFERENCES_DIR)) rmSync(join(REFERENCES_DIR, file));
  for (const tool of tools) writeFileSync(join(REFERENCES_DIR, `${tool.name}.md`), renderReference(tool));
}

if (process.argv[1] === import.meta.filename) {
  main().catch((error: Error) => {
    console.error(error.message);
    process.exit(1);
  });
}

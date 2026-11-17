const DEFAULT_SERVER_URL = "https://seerly.app/api/mcp";

/**
 * The Seerly MCP endpoint to bridge to. A project (domain, short id or id) pins every tool to it,
 * as `https://seerly.app/api/mcp/<project>` does. SEERLY_MCP_URL points at a staging slot.
 */
export function resolveServerUrl(project: string | undefined, env: NodeJS.ProcessEnv): URL {
  const base = (env.SEERLY_MCP_URL ?? DEFAULT_SERVER_URL).replace(/\/+$/, "");
  return new URL(project ? `${base}/${encodeURIComponent(project)}` : base);
}

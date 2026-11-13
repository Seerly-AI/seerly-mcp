# Seerly plugin

Seerly for Claude and for Codex and ChatGPT. Ask how AI engines (ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews) mention, cite and describe your brand, and turn the answers into pitches, prompt plans, content briefs, page fixes and PR shortlists.

The plugin holds no server code. It points at Seerly's MCP server, `https://seerly.app/api/mcp`, and adds a skill that teaches the model the tools. Sign-in is your Seerly login (OAuth); the plugin only ever sees your own projects.

## Install

**Claude Code**

```
/plugin marketplace add Seerly-AI/seerly-mcp
/plugin install seerly@seerly
```

Or the server alone: `claude mcp add --transport http seerly https://seerly.app/api/mcp`

**Codex**

```
codex plugin marketplace add Seerly-AI/seerly-mcp
```

Or the server alone, in `~/.codex/config.toml`, then `codex mcp login seerly`:

```toml
[mcp_servers.seerly]
url = "https://seerly.app/api/mcp"
```

**claude.ai and ChatGPT:** add Seerly from the connector or plugin directory, or add a custom connector with the URL above.

**One project only:** use `https://seerly.app/api/mcp/<your-domain>` and every tool works on that project.

## What it can do

| Job | Tools |
|---|---|
| Pitch or status update | `get_brand_snapshot`, `get_latest_brand_report`, `find_opportunities`, `rank_publications` |
| Prompts to track | `get_prompt_ideas`, then `add_prompts` |
| Content briefs and articles | `get_brief_inputs`, then `generate_article` |
| Pages to fix (E-E-A-T) | `get_pages_to_fix` |
| PR and paid placements | `rank_publications` |
| Anything narrower | `get_overview`, `get_visibility`, `get_citations`, `get_sentiment` and the other `get_*` tools |

`add_prompts` and `generate_article` change your data, and `generate_article` spends content credits. Both show a preview first and act only when you confirm.

## Layout

```
.claude-plugin/marketplace.json   Claude marketplace
.agents/plugins/marketplace.json  Codex marketplace
plugin/
  .claude-plugin/plugin.json      Claude manifest
  .mcp.json                       Claude's MCP config
  plugin.json                     Codex and ChatGPT manifest
  mcp.json                        Codex's MCP config
  skills/seerly/SKILL.md          job recipes and rules
  skills/seerly/references/       every tool's arguments, generated
scripts/
```

## Maintaining

- `SEERLY_TOKEN=<access token> npm run references` rewrites `references/` from the live server's tool list (set `SEERLY_MCP_URL` to use a staging slot). Run it whenever the tools change.
- `npm run package:openai` builds `dist/seerly-openai.zip` for the OpenAI plugin portal. It leaves out the MCP config, since the portal registers the server URL itself.

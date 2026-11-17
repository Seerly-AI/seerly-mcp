# @seerly/mcp

Seerly's MCP server for apps that run local (stdio) servers. Ask how AI engines (ChatGPT, Perplexity, Google AI Overviews and Gemini, plus Claude on Enterprise plans) mention, cite and describe your brand, and turn the answers into pitches, prompt plans, content briefs, page fixes and PR shortlists.

The package holds no Seerly data or logic. It relays your app's requests to `https://seerly.app/api/mcp` and signs you in with your Seerly login. If your app can add a remote MCP server by URL, add that URL directly instead; this package is for apps that can't.

## Setup

Add this to your app's MCP config (Claude Desktop: `claude_desktop_config.json`; Cursor: `~/.cursor/mcp.json`; Windsurf: `~/.codeium/windsurf/mcp_config.json`):

```json
{
  "mcpServers": {
    "seerly": {
      "command": "npx",
      "args": ["-y", "@seerly/mcp"]
    }
  }
}
```

The first request opens Seerly's sign-in page in your browser. After you allow access, the app sees only your own projects.

**One project only:** add your domain, `"args": ["-y", "@seerly/mcp", "acme.com"]`, and every tool works on that project.

## Sign-in

- Credentials stay on your machine in `~/.seerly/mcp/`, readable only by you. Delete that folder to sign out.
- Needs Node.js 20.11 or later.

## What it can do

See the tool list in the [Seerly plugin README](https://github.com/Seerly-AI/seerly-mcp#what-it-can-do). `add_prompts` and `generate_article` change your data and run only on the id of a preview you have seen.

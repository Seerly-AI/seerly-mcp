# Seerly

Seerly measures how AI engines (ChatGPT, Perplexity, Google AI Overviews and Gemini, plus Claude on Enterprise plans) mention, cite and describe your brand, against the competitors you track. This plugin connects Claude to your Seerly account, so you can ask about your own visibility data and turn it into pitches, prompt plans, content briefs, page fixes and PR shortlists.

## What it includes

- **The Seerly MCP server** at `https://seerly.app/api/mcp`. It is a remote server; the plugin runs no code on your machine.
- **The `seerly` skill**, which tells Claude which tool answers which question, how the tools chain, and the rules for the two tools that change data.

## What it sends and receives

- Every tool call goes over HTTPS to `https://seerly.app/api/mcp` with your Seerly access token, and returns data from your own Seerly projects. The plugin sends nothing anywhere else.
- You sign in with your Seerly login (OAuth). Claude keeps the access token; it never sees your password.
- Two tools change data. `add_prompts` adds prompts to tracking, which counts against your plan's prompt limit. `generate_article` writes an article, which spends content credits. Each shows a preview first and acts only after you confirm.

## Requirements

A Seerly account at [seerly.app](https://seerly.app). Tools follow your plan: anything your plan does not include is reported as unavailable rather than estimated.

## Support and privacy

- Support: [seerly.app/contact](https://seerly.app/contact)
- Privacy policy: [seerly.app/privacy](https://seerly.app/privacy)

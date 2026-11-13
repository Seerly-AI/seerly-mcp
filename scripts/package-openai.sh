#!/bin/sh
# The ZIP for the OpenAI plugin portal. The portal registers the MCP URL itself and rejects an
# upload that carries MCP config, so mcp.json and .mcp.json stay out, along with Claude's manifest.
set -eu
cd "$(dirname "$0")/.."
mkdir -p dist
rm -f dist/seerly-openai.zip
cd plugin
zip -r ../dist/seerly-openai.zip . -x "mcp.json" ".mcp.json" ".claude-plugin/*"
echo "Wrote dist/seerly-openai.zip"

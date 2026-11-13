# add_prompts: Add prompts to track

**Changes data.** Takes a previewId from `preview_add_prompts`; call it only after the user agrees to that preview.

Adds prompts for Seerly to track under a topic (an existing one, or a new one it creates). Skips prompts already tracked and stops at the plan's prompt limit. New prompts are measured from the next analysis run. Runs only with a previewId from preview_add_prompts, after the user has agreed to that preview; each previewId works once, for 15 minutes.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `previewId` | string | yes | The previewId preview_add_prompts returned, once the user has agreed to that preview. |

# add_prompts: Add prompts to track

**Changes data.** Call without `confirm` for a preview; call with `confirm=true` only after the user agrees.

Adds prompts for Seerly to track under a topic (an existing one, or a new one it creates). Skips prompts already tracked and stops at the plan's prompt limit. Call it first without confirm: it returns which prompts would be added and which skipped, and why. Show that to the user, and call again with confirm=true only after they agree. New prompts are measured from the next analysis run.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `topic` | string | yes | The topic to track them under: an existing topic's name (get_prompts action=topics) or a new one. |
| `type` | one of `discovery`, `sentiment` | no | discovery (does the brand get mentioned) or sentiment (how it is described). Default discovery. |
| `prompts` | array of object | yes | The prompts to start tracking. |
| `prompts[].text` | string | yes | The prompt, as a user would ask an AI engine. |
| `prompts[].anchorKeyword` | string | no | The keyword the prompt was written around. |
| `prompts[].searchVolume` | integer | no | The anchor keyword's monthly search volume. |
| `prompts[].keywordTier` | one of `fat_head`, `long_tail` | no | fat_head or long_tail, for the anchor keyword. |
| `confirm` | boolean | no | true only after the user has seen this tool's preview and agreed. Without it, nothing changes. |

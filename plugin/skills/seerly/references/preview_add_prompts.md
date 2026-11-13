# preview_add_prompts: Preview: Add prompts to track

Read-only.

Shows what add_prompts would do, and changes nothing: which prompts would be added and which skipped, and why. Returns a previewId. Show the preview to the user; if they agree, call add_prompts with that previewId.

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

# get_prompt_ideas: Prompt ideas

Read-only.

Everything needed to decide which prompts to track, in one call: current prompts with search volume, keyword tier (fat head or long tail) and performance; the scout's latest recommended adds, drops and swaps with reasons; keyword clusters with demand that no topic covers yet; topic trend labels; and the searches AI engines actually ran for the highest-volume prompts. Draft new prompts from this, then save the ones the user picks with add_prompts.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |

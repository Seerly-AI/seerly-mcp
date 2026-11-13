# get_brief_inputs: Brief inputs

Read-only.

Everything needed to write a content brief that closes one citation gap: the gap's questions and the URLs cited instead, gap keywords, the topic's target keywords with fat-head or long-tail tier, the formats AI engines cite, the brand's voice and brief, and content already suggested or drafted for it (so nothing is duplicated). Write the brief from this; generate_article can then draft it in Seerly.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `topicId` | string | yes | The gap topic's id, from find_opportunities (citation_gaps). |

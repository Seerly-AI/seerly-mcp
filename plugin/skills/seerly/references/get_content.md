# get_content: Content

Read-only.

Content suggestions with briefs, content strategies, and generated articles with their status.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `suggestions`, `strategy`, `strategies`, `article` | yes | Which data to return:<br>- suggestions: Content suggestions with brief, focus keyword, rationale and status.<br>- strategy: One content strategy. Needs id.<br>- strategies: Content strategies, newest first.<br>- article: One generated article with its status (generating, draft or failed) and its text. Needs contentId. |
| `status` | string | no | Filter by status. 'all' returns active, acted and dismissed; retired suggestions are only returned for 'expired'. Used by: suggestions, strategies. |
| `channel` | string | no | Filter by channel (e.g. 'blog'). Omit for all channels. Used by: suggestions. |
| `q` | string | no | Full-text search over title, brief, rationale, focus keyword. Used by: suggestions. |
| `from` | string | no | Inclusive lower bound (ISO date-time) on createdAt. Pair with `to` to filter by a day/range. Used by: suggestions. |
| `to` | string | no | Exclusive upper bound (ISO date-time) on createdAt. Used by: suggestions. |
| `page` | number | no | Zero-based page index. Used by: suggestions. |
| `pageSize` | number | no | Items per page (max 100). Used by: suggestions. |
| `tracked` | boolean | no | When true, return only tracked suggestions (for the Tracked Actions page). Used by: suggestions. |
| `id` | string | no | Strategy ID (UUID) Used by: strategy. |
| `limit` | number | no | Number of results to return Used by: strategies. |
| `offset` | number | no | Number of results to skip Used by: strategies. |
| `contentId` | string | no | Content ID (UUID) Used by: article. |

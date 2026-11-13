# get_prompts: Tracked prompts

Read-only.

The prompts Seerly tracks, with volume, keyword tier and performance; their topics; and the scout's recommended prompt changes with the reasons.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `list`, `all`, `recommendation_runs`, `recommendation_run`, `topics` | yes | Which data to return:<br>- list: Tracked prompts with volume, keyword tier and performance; page, search and group by topic.<br>- all: Every active prompt with its topic, without metrics. Use list for metrics.<br>- recommendation_runs: The scout's prompt recommendation runs.<br>- recommendation_run: One recommendation run: prompts to add, drop or swap, each with its rationale. Needs runId.<br>- topics: Topics with their stats and trend label. |
| `page` | number | no | Used by: list, recommendation_runs. |
| `pageSize` | number | no | Used by: list, recommendation_runs. |
| `type` | string | no | Used by: list, topics. |
| `search` | string | no | Used by: list. |
| `isArchived` | boolean | no | Used by: list. |
| `sortBy` | string | no | Used by: list. |
| `sortOrder` | string | no | Used by: list. |
| `groupBy` | string | no | Used by: list. |
| `status` | one of `new`, `reviewed`, `partially_applied`, `applied`, `dismissed`, `all`, `actionable` | no | Filter by run status. Use 'all' to return every status. Used by: recommendation_runs. |
| `from` | string | no | Inclusive lower bound (ISO date-time) on createdAt. Pair with `to` to filter by a day/range. Used by: recommendation_runs. |
| `to` | string | no | Exclusive upper bound (ISO date-time) on createdAt. Used by: recommendation_runs. |
| `runId` | string | no | The recommendation run ID Used by: recommendation_run. |

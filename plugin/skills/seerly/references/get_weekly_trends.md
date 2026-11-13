# get_weekly_trends: Weekly trends

Read-only.

This week against the previous one: visibility and sentiment changes, every competitor, head-to-head with one competitor, and the searches AI engines ran for a prompt (query fanouts).

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `visibility`, `visibility_fanouts`, `sentiment`, `sentiment_fanouts`, `head_to_head`, `competitors` | yes | Which data to return:<br>- visibility: This week's visibility against the previous 7 days, with 8 weeks of history.<br>- visibility_fanouts: The searches AI engines ran to answer one prompt this week, per engine, with related searches and People Also Ask. Needs promptId.<br>- sentiment: This week's sentiment report.<br>- sentiment_fanouts: The searches AI engines ran for one sentiment prompt this week. Needs promptId.<br>- head_to_head: The brand against one competitor (entityId from get_visibility action=entities), with an 8-week trend.<br>- competitors: The brand and every tracked competitor this week: share of voice, reach, rank and citations, with changes. |
| `llmProvider` | string | no | Filter by LLM provider: 'chatgpt' (OpenAI + Azure), 'claude', 'gemini', 'perplexity', or 'all' |
| `entityId` | string | no | Entity ID to view the weekly visibility report from that entity's perspective (typically the project brand). Optional: a project with no completed run yet has no entities to choose from, and omitting it returns an empty report that still reports whether an analysis is running. Used by: visibility, head_to_head. |
| `promptId` | string | no | The promptId to look up. Used by: visibility_fanouts, sentiment_fanouts. |
| `weekStart` | string | no | The week to show, as the yyyy-mm-dd `weekStart` of the dashboard's own response (weekly visibility for the visibility route, weekly sentiment for the sentiment route) or a `previousWeekStart` / `nextWeekStart` of this one. Absent = the dashboard's current week. 400 unless it is the dashboard's current week start or a whole number of weeks before it, at most 51. Used by: visibility_fanouts, sentiment_fanouts. |

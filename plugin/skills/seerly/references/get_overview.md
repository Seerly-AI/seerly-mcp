# get_overview: Seerly overview

Read-only.

The project's headline AI-search dashboard: GEO score, week-over-week deltas, trend series, AI-referral sessions, the competitor table, per-engine performance, and plan limits and credits.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `summary`, `kpis`, `timeseries`, `ai_sessions`, `competitors`, `llm_performance`, `plan` | yes | Which data to return:<br>- summary: Everything on the overview page in one response. Use this first.<br>- kpis: Only the KPI cards (GEO score, AI reach, AI sessions, sentiment), with week-over-week deltas.<br>- timeseries: Trend chart series.<br>- ai_sessions: Sessions arriving from AI engines over time.<br>- competitors: Where the brand ranks against tracked competitors this week, with share of voice and deltas.<br>- llm_performance: Performance index per AI engine.<br>- plan: Plan limits and usage: prompts, topics and content credits left, and what each content type costs. |

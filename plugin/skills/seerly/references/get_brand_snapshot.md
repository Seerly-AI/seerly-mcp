# get_brand_snapshot: Brand snapshot

Read-only.

The headline numbers for a pitch or status update in one call: GEO score and AI reach with week-over-week change, share of voice against each competitor, citation KPIs, sentiment, Google Search Console totals, the Smart Audit trend and domain rank. Lists anything unavailable (for example Google not connected). For the written monthly narrative use get_latest_brand_report; for where to grow use find_opportunities.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |

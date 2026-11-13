# get_brand: Brand

Read-only.

The Brand Hub (brief, voice, audience, differentiators, websites, aliases) and stored Brand Reports with their narrative, roadmap and next steps.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `hub`, `aliases`, `websites`, `reports`, `latest_report`, `report` | yes | Which data to return:<br>- hub: The Brand Hub: brand brief, voice, audience, differentiators and guidelines.<br>- aliases: Confirmed, pending and rejected brand aliases.<br>- websites: The brand's own websites.<br>- reports: Brand Report history.<br>- latest_report: The latest monthly Brand Report: headline, summary, sections, roadmap and next steps.<br>- report: One Brand Report. Needs id. |
| `kind` | string | no | Used by: reports. |
| `from` | string | no | Used by: reports. |
| `to` | string | no | Used by: reports. |
| `limit` | string | no | Used by: reports. |
| `offset` | string | no | Used by: reports. |
| `id` | string | no | The id to look up. Used by: report. |

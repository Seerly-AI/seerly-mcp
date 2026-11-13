# get_offsite: Backlinks and PR

Read-only.

Backlinks (PRO plans): domain rank, referring domains, the backlink gap against competitors, risks and history. PR media (PRO plans): article ideas with target publications, briefs and costs.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `backlinks`, `backlink_history`, `referring_domains`, `backlink_gap`, `backlink_risks`, `pr_recommendations` | yes | Which data to return:<br>- backlinks: Backlink KPIs: domain rank, referring domains, backlinks, and those that are also AI citations.<br>- backlink_history: Weekly backlink history.<br>- referring_domains: Referring domains with rank, spam score and outreach status.<br>- backlink_gap: Domains linking to competitors but not the brand, with rank, spam score and outreach notes.<br>- backlink_risks: Toxic and broken backlinks.<br>- pr_recommendations: PR article ideas with briefs and target publications: why each, contact, cost, and whether AI engines cite it. |
| `limit` | number | no | Used by: referring_domains, backlink_gap. |
| `offset` | number | no | Used by: referring_domains, backlink_gap. |
| `outreachStatus` | one of `reachable`, `not_reachable`, `competitor_owned`, `unknown` | no | Outreach statuses to include (default: reachable + unknown). Repeat the param for multiple. Used by: referring_domains, backlink_gap. |
| `search` | string | no | Filter by domain / URL substring Used by: referring_domains, backlink_gap, backlink_risks. |
| `sort` | string | no | Column key to sort by (validated per endpoint against an allowlist; unknown keys fall back to the endpoint default) Used by: referring_domains, backlink_gap. |
| `dir` | one of `asc`, `desc` | no | Used by: referring_domains, backlink_gap. |
| `status` | one of `live`, `all`, `lost`, `active`, `acted`, `dismissed` | no | Referring-domain status filter (referring-domains endpoint only) Used by: referring_domains, backlink_gap, pr_recommendations. |
| `spamSort` | string | no | Spam-domains sort column Used by: backlink_risks. |
| `spamDir` | one of `asc`, `desc` | no | Used by: backlink_risks. |
| `brokenSort` | string | no | Broken-links sort column Used by: backlink_risks. |
| `brokenDir` | one of `asc`, `desc` | no | Used by: backlink_risks. |
| `tracked` | boolean | no | Only tracked recommendations (for the Tracked Actions page). Used by: pr_recommendations. |
| `page` | number | no | Zero-based page index. Used by: pr_recommendations. |
| `pageSize` | number | no | Page size (max 100). Used by: pr_recommendations. |
| `articleType` | one of `thought_leadership`, `expert_commentary`, `data_study`, `announcement`, `interview`, `roundup_inclusion`, `sponsored_feature`, `all` | no | Filter by article type. Use 'all' for every type. Used by: pr_recommendations. |
| `trigger` | one of `proactive`, `reactive`, `all` | no | Filter by trigger. Use 'all' for both. Used by: pr_recommendations. |
| `q` | string | no | Free-text search across topic, headlines, brief and rationale. Used by: pr_recommendations. |
| `from` | string | no | Inclusive lower bound on createdAt (absolute ISO instant). Used by: pr_recommendations. |
| `to` | string | no | Exclusive upper bound on createdAt (absolute ISO instant). Used by: pr_recommendations. |

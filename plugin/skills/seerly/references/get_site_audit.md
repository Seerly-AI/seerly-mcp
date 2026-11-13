# get_site_audit: Site audit

Read-only.

Smart Audit of the project's pages: AI and SEO scores per page, failing checks (author, date, freshness and Article schema cover E-E-A-T), one check's failing URLs, history, and readiness checks.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `results`, `run_state`, `history`, `page_scores`, `page_scores_grouped`, `rule`, `readiness_checks`, `readiness_check` | yes | Which data to return:<br>- results: Audit results for the site: every check with pass and fail counts and the failing URLs.<br>- run_state: Whether an audit is queued or running.<br>- history: Audit scores over time.<br>- page_scores: AI and SEO scores and failure counts per page; paged and searchable.<br>- page_scores_grouped: Page scores grouped by URL pattern, e.g. all /blog/ pages.<br>- rule: One check in detail with its failing URLs, by ruleId. E-E-A-T checks: hasAuthor, hasDate, isFresh, hasArticleSchema. Needs ruleId.<br>- readiness_checks: Recent readiness checks: deep single-page reviews, including E-E-A-T.<br>- readiness_check: One readiness check in full: score, grade, overview and recommendations. Needs id. |
| `categories` | one of `ai`, `seo` | no | Filter by audit categories Used by: results. |
| `limit` | number or string | no | Used by: history, page_scores, page_scores_grouped. |
| `page` | number | no | Page number (1-indexed) Used by: page_scores, page_scores_grouped. |
| `search` | string | no | Search query to filter pages by URL Used by: page_scores, page_scores_grouped. |
| `sortBy` | one of `url`, `aiScore`, `seoScore`, `failureCount`, `issues`, `pattern`, `avgAiScore`, `avgSeoScore`, `totalFailures` | no | Sort field. 'issues' sorts by severity (critical > high > medium > low) Used by: page_scores, page_scores_grouped. |
| `sortOrder` | one of `asc`, `desc` | no | Sort order Used by: page_scores, page_scores_grouped. |
| `groupPattern` | string | no | Filter by group pattern (e.g., '/product/*' or '/other' for ungrouped pages) Used by: page_scores. |
| `locale` | string | no | Market scope for `groupPattern`. Must match the scope the group card was rendered in, otherwise '/<independent-pages>' opens the whole site's remainder instead of the market's. Used by: page_scores, page_scores_grouped. |
| `minGroupSize` | number | no | Minimum group size (default: 2) Used by: page_scores_grouped. |
| `ruleId` | string | no | The ruleId to look up. Used by: rule. |
| `id` | string | no | The id to look up. Used by: readiness_check. |

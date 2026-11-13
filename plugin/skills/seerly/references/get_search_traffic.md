# get_search_traffic: Google search and traffic

Read-only.

Google Search Console and Google Analytics for the project's site: queries, pages, positions, winners and losers, pages with the most upside, and AI-referred traffic. Needs Google connected.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `traffic`, `landing_pages`, `overview`, `queries`, `pages`, `page_insights`, `page_index_health`, `page_queries`, `convergence`, `keyword_insights`, `keyword_drilldown`, `position_drilldown`, `topic_drilldown`, `top_queries`, `tracked_links` | yes | Which data to return:<br>- traffic: Google Analytics traffic for the site, including sessions from AI engines.<br>- landing_pages: Landing pages by traffic source, including AI engines.<br>- overview: Search Console clicks, impressions, CTR and position, with the trend.<br>- queries: Search queries with clicks, impressions and position; paged and sortable.<br>- pages: Pages with clicks, impressions, AI citations and index status; paged and sortable.<br>- page_insights: Top pages, and the pages with the most missed clicks.<br>- page_index_health: Pages dropped from, added to or steady in Google, with the queries they lost.<br>- page_queries: The queries one page ranks for.<br>- convergence: Where AI visibility and Google search overlap or diverge, by topic.<br>- keyword_insights: Keyword winners, losers, new queries, opportunities and quick wins.<br>- keyword_drilldown: One query in depth.<br>- position_drilldown: The queries in one position range.<br>- topic_drilldown: One topic's queries.<br>- top_queries: Top queries.<br>- tracked_links: Tracked links with their traffic and search metrics. |
| `timeRange` | one of `7d`, `30d`, `90d` | no | Time range for analytics data |
| `country` | string | no | ISO 3166-1 alpha-2 Used by: traffic, landing_pages, overview, queries, pages, page_insights, page_queries, convergence, keyword_insights, keyword_drilldown, position_drilldown, topic_drilldown, top_queries. |
| `page` | number | no | Used by: landing_pages, queries, pages, tracked_links. |
| `limit` | number | no | Used by: landing_pages, queries, pages, page_index_health, top_queries, tracked_links. |
| `channel` | one of `all`, `ai`, `google`, `other-search`, `direct`, `paid`, `social`, `referral`, `other` | no | Used by: landing_pages. |
| `sort` | one of `sessions`, `engagementRate`, `viewsPerSession`, `avgTime`, `page`, `clicks`, `impressions`, `ctr`, `position` | no | Used by: landing_pages, queries, pages. |
| `order` | one of `asc`, `desc` | no | Used by: landing_pages, queries, pages. |
| `aiSource` | string | no | An AI assistant's display name. Only with channel=ai. Used by: landing_pages. |
| `search` | string | no | Case-insensitive substring of the page path Used by: landing_pages, queries, pages, tracked_links. |
| `source` | one of `google`, `bing`, `combined`, `manual`, `published` | no | Used by: overview, queries, pages, page_insights, page_index_health, page_queries, convergence, keyword_insights, keyword_drilldown, position_drilldown, topic_drilldown, top_queries, tracked_links. |
| `topicFilter` | string | no | Used by: queries. |
| `positionMin` | number | no | Used by: queries, position_drilldown. |
| `positionMax` | number | no | Used by: queries, position_drilldown. |
| `pageUrl` | string | no | The page's URL. Used by: page_queries. |
| `window` | one of `current`, `previous` | no | Which comparison window to read. 'previous' serves the Lost view, whose pages have no current-period queries by definition. Used by: page_queries. |
| `query` | string | no | Used by: keyword_drilldown. |
| `topic` | string | no | Used by: topic_drilldown. |
| `sortBy` | one of `searchImpressions`, `searchClicks`, `searchPosition`, `sessions` | no | Used by: tracked_links. |
| `sortOrder` | one of `asc`, `desc` | no | Used by: tracked_links. |

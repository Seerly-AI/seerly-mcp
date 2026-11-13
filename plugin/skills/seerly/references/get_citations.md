# get_citations: AI citations

Read-only.

The URLs AI engines cite: who cites the brand, what gets cited, new citations, gaps against competitors, and a browsable ledger.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `new`, `citation_prompt_runs`, `new_citation`, `entities`, `overview`, `whos_citing`, `what_works`, `competitive`, `browse`, `domain_insights`, `insights`, `critical_topics` | yes | Which data to return:<br>- new: Citations that are genuinely new for the brand in the chosen range.<br>- citation_prompt_runs: The prompt runs that cited one URL. Needs citationId.<br>- new_citation: Every occurrence of one new citation. Needs citationId.<br>- entities: The brand and competitors that appear in citations.<br>- overview: The citations page's overview tab.<br>- whos_citing: Who's Citing You: the sites AI engines cite in answers about the brand, and the overlap with competitors (domains citing them and not the brand).<br>- what_works: What Works: the formats, tones and structures of cited content that earn brand mentions.<br>- competitive: How You Compare: citation gaps against competitors, by topic.<br>- browse: Ledger of cited URLs, filterable and paged with limit and offset.<br>- domain_insights: Everything about one citing site: its cited pages, the prompts and the engines. Needs specificDomain.<br>- insights: Citation KPIs: totals and how many mention the brand, per period.<br>- critical_topics: Topics where the brand most needs citations. |
| `citationTypeFilter` | one of `discovery`, `sentiment`, `all` | no | Filter citations by prompt type |
| `entityId` | string | no | Entity to scope this response to — the project's brand or a competitor. Defaults to the project's brand entity. An id that does not appear in this project's prompt runs falls back to the brand rather than returning empty. |
| `dataScope` | one of `last-run`, `all` | no | Data scope: 'last-run' for latest workflow only, 'all' for all historical workflows |
| `limit` | number | no | Number of items to return for pagination |
| `offset` | number | no | Offset for pagination |
| `browseView` | one of `citations`, `domains` | no | Browse response view: 'citations' returns citation rows; 'domains' returns domain tiles |
| `filterByBrandEntity` | boolean | no | Filter domain links to only show citations mentioning the brand entity (used in Who's Citing You) |
| `includeAllTopics` | boolean | no | Include all topics in visibility gap, not just critical ones (used in Competitors page) |
| `range` | one of `week`, `latest-run`, `7d`, `30d` | no | Time range for genuinely new citations. A URL is included only if its first brand occurrence is within the selected range. "week": the weekly screens' week — the latest week with data (resolver-anchored, bucketed by workflow creation), with the previous week as the baseline. "7d"/"30d": trailing days from now. Absent means "latest-run", for older clients. On citation/:id/prompt-runs, "week" limits the runs to that week's workflows; other values leave that endpoint unchanged. |
| `period` | one of `week`, `month`, `all` | no | Who's Citing only: the period the listed sources, Citations, Responses and Reach are counted over. Every period ends where the latest week ends (the latest completed discovery run), never at now(). "week": the latest week, compared with the previous week. Absent means "week". "month": the 30 days ending there, compared with the 30 days before. "all": every completed run, with no comparison. Influence and Favoured by keep their all-runs basis in every period. Any other value is answered with a 400 (enforced by parseWhosCitingPeriod: this app has no global ValidationPipe). Ignored with dataScope=last-run. |
| `search` | string | no | Search new citations by title, URL, or domain |
| `sourceType` | string | no | Filter new citations by source type. Use 'social' for social domains. |
| `sentiment` | string | no | Filter the Browse ledger by sentiment. Matched against the row's most recent occurrence — the same value the row displays. Use 'unknown' for rows with no sentiment recorded. |
| `topicId` | string | no | Scope results to one topic (prompts.topicId). |
| `promptId` | string | no | Scope results to one prompt (prompt_runs.promptId). |
| `provider` | string | no | Scope results to one AI engine (prompt_runs.provider), e.g. 'openai'. |
| `citingDomain` | string | no | A citing site's domain (e.g. reddit.com) to filter by. |
| `recency` | one of `all`, `new`, `recurring`, `faded` | no | Recency bucket, resolved against the project's adaptive comparison window. Ignored when the project has fewer than 2 distinct run-days, since there is no baseline to define 'new' or 'faded' against. |
| `citationId` | string | no | The citationId to look up. Used by: citation_prompt_runs, new_citation. |
| `specificDomain` | string | no | The specificDomain to look up. Used by: domain_insights. |

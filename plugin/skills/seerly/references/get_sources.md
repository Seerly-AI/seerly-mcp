# get_sources: Cited publishers

Read-only.

Which publishers AI engines cite for the project's prompts: rank, share and change per publisher, citations per engine over time, and the topics and prompts a publisher is cited for.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `publishers`, `source_share`, `engine_citations`, `publisher_topics`, `publisher_prompts`, `topics_landscape`, `topic_prompts_landscape`, `run_details` | yes | Which data to return:<br>- publishers: Top publishers AI engines cite, with rank, share and week-over-week change, plus the project's own domain.<br>- source_share: Share of citations per publisher.<br>- engine_citations: Citations of one publisher per engine, with a daily trend.<br>- publisher_topics: The topics one publisher is cited for.<br>- publisher_prompts: The prompts where one publisher was cited.<br>- topics_landscape: Topics against the major publishers cited for them.<br>- topic_prompts_landscape: The prompts in one topic against the publishers cited for them. Needs topicId.<br>- run_details: The latest run of one prompt as it relates to one publisher. Needs promptId. |
| `llmProvider` | string | no | Filter by LLM provider: 'chatgpt' (OpenAI + Azure), 'claude', 'gemini', 'perplexity', or 'all' |
| `publisherKey` | string | no | Publisher key (registrable domain, e.g., 'bebeautiful.in'). Use the project's own domain for the 'you' perspective. Used by: engine_citations, publisher_topics, publisher_prompts, run_details. |
| `timeRange` | one of `7d`, `30d`, `90d` | no | Trend window length Used by: engine_citations. |
| `topicId` | string | no | The topicId to look up. Used by: topic_prompts_landscape. |
| `promptId` | string | no | The promptId to look up. Used by: run_details. |

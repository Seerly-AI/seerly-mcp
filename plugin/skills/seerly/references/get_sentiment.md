# get_sentiment: AI sentiment

Read-only.

How AI engines describe the brand: overall sentiment, per topic and prompt, and by aspect. Drill down: topics, then topic_prompts (topicId), then prompt_runs (promptId), then run_details (runId).

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `overview`, `topics`, `topic_prompts`, `prompt_runs`, `aspects`, `run_details` | yes | Which data to return:<br>- overview: Overall sentiment for the brand.<br>- topics: Sentiment per tracked topic.<br>- topic_prompts: Sentiment for each prompt in one topic. Needs topicId.<br>- prompt_runs: Individual runs of one prompt. Needs promptId.<br>- aspects: Sentiment by aspect: the attributes AI engines discuss about the brand, with the quotes behind them.<br>- run_details: One run in full. Needs runId. |
| `llmProvider` | one of `chatgpt`, `claude`, `gemini`, `all` | no | Filter by LLM provider (chatgpt includes both OpenAI and Azure OpenAI) Used by: topics, topic_prompts, prompt_runs, aspects. |
| `topicId` | string | no | The topicId to look up. Used by: topic_prompts, aspects. |
| `sentiment` | one of `positive`, `neutral`, `negative`, `mixed` | no | Only rows with this sentiment Used by: topic_prompts, prompt_runs. |
| `sortBy` | one of `promptText`, `sentimentScore`, `confidence`, `impact`, `executionDate` | no | Sort field Used by: topic_prompts, prompt_runs. |
| `order` | one of `asc`, `desc` | no | Sort order Used by: topic_prompts, prompt_runs. |
| `promptId` | string | no | The promptId to look up. Used by: prompt_runs. |
| `startDate` | string | no | Filter runs from this date (ISO 8601) Used by: prompt_runs. |
| `endDate` | string | no | Filter runs until this date (ISO 8601) Used by: prompt_runs. |
| `page` | number | no | Page to return (1-based). When absent the full list is returned, unpaged. Used by: prompt_runs. |
| `pageSize` | number | no | Runs per page; only read together with `page`. A value above 50 is served as 50. Used by: prompt_runs. |
| `scope` | one of `external`, `owned` | no | Which citations to aggregate. 'external' (default) excludes the brand's own sites — the sentiment that counts. 'owned' returns ONLY citations of the brand's own sites (self-description), with their stored sentiment, shown in a separate tab; they never move the score beyond a run backed only by them counting as one neutral vote. The brand's own sites are the project domain and the sites confirmed under Your websites, matched exactly: a namesake on another TLD is not the brand's own. Used by: aspects. |
| `period` | one of `week` | no | 'week' reads every successful sentiment run of the weekly Sentiment screen's current window (all workflows in it) instead of the latest completed analysis, and the response carries weekLabel. Ignored when workflowExecutionId is given. The per-aspect history stays run over run. Used by: aspects. |
| `runId` | string | no | The runId to look up. Used by: run_details. |

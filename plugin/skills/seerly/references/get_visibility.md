# get_visibility: AI visibility

Read-only.

How often and how prominently AI engines mention the brand for the tracked prompts. Drill down: topics, then topic_prompts (topicId), then prompt_runs (promptId), then run_details (runId) to read the actual AI answer.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `topics`, `topic_prompts`, `prompt_runs`, `prompt_series`, `run_details`, `trends`, `share_of_voice`, `entities`, `tracked_competitors` | yes | Which data to return:<br>- topics: Tracked topics with their visibility metrics.<br>- topic_prompts: Prompts in one topic, with visibility score, rank, average position and citation share. Needs topicId.<br>- prompt_runs: Individual runs of one prompt across engines and dates. Needs promptId.<br>- prompt_series: One point per run of a prompt, oldest first. Use for trend questions about one prompt. Needs promptId.<br>- run_details: One run in full: the AI answer, who was mentioned, positions and citations. Needs runId.<br>- trends: Discovery reach over time.<br>- share_of_voice: The brand's share of voice, mentions and citations against every other entity.<br>- entities: The brand and its competitors, with the ids other actions accept as entityId.<br>- tracked_competitors: The competitors the project tracks. |
| `llmProvider` | string | no | Filter by LLM provider: 'chatgpt' (OpenAI + Azure), 'claude', 'gemini', or 'all' Used by: topics, topic_prompts, prompt_runs, prompt_series, share_of_voice. |
| `entityId` | string | no | See the numbers from another entity's perspective, e.g. a competitor (ids from action=entities). Omit for the project's own brand. Used by: topics, topic_prompts, prompt_runs, prompt_series, run_details, trends, share_of_voice. |
| `topicId` | string | no | Topic UUID Used by: topic_prompts. |
| `sortBy` | one of `promptText`, `visibilityRank`, `visibilityScore`, `averagePosition`, `citationShare`, `executionDate`, `citationCount` | no | Sort field Used by: topic_prompts, prompt_runs. |
| `order` | one of `asc`, `desc` | no | Sort order Used by: topic_prompts, prompt_runs. |
| `promptId` | string | no | Prompt UUID Used by: prompt_runs, prompt_series. |
| `startDate` | string | no | Filter runs from this date Used by: prompt_runs, prompt_series. |
| `endDate` | string | no | Filter runs until this date Used by: prompt_runs, prompt_series. |
| `page` | number | no | Page to return (1-based). When absent the full list is returned, unpaged, with no `pagination` or `engines`. Used by: prompt_runs. |
| `pageSize` | number | no | Runs per page; only read together with `page`. A value above 50 is served as 50. Used by: prompt_runs. |
| `runId` | string | no | Run UUID Used by: run_details. |
| `timeRange` | one of `7d`, `30d`, `90d` | no | Time range for the chart data Used by: trends. |

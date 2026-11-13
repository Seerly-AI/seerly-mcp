# get_citation_gaps: Citation gaps

Read-only.

Where competitors are cited and the brand is not: open gaps by topic and question, the sources cited instead, gap keywords, and content already planned for each gap.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `gaps`, `topic`, `prompt_keywords`, `topic_evidence`, `sources`, `work` | yes | Which data to return:<br>- gaps: Open gaps by topic: where competitors are cited and the brand is not, on which engines, how many weeks open, and the suggested fix.<br>- topic: One gap topic: its questions and the evidence for each. Needs topicId.<br>- prompt_keywords: Gap keywords per question.<br>- topic_evidence: The URLs and domains cited instead of the brand for one gap topic. Needs topicId.<br>- sources: The sources cited instead of the brand across all gaps, by domain and page type.<br>- work: Content already planned for each gap (suggested, drafted or published), with its brief. |
| `provider` | string | no | Used by: gaps, topic, topic_evidence, sources. |
| `topicId` | string | no | The topicId to look up. Used by: topic, topic_evidence. |
| `promptIds` | string | no | Used by: prompt_keywords. |

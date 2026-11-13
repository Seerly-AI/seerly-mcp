# get_keywords: Keyword universe

Read-only.

The project's keyword universe: clusters with volume, head terms and their long-tail keywords, recommendations, and the keywords behind a topic.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `action` | one of `clusters`, `recommendations`, `site_keywords`, `summary`, `cluster_keywords`, `keywords`, `topic_keywords` | yes | Which data to return:<br>- clusters: Keyword clusters with total volume and whether they have long-tail terms; paged.<br>- recommendations: Recommended keywords with volume, opportunity score and whether each is a head term.<br>- site_keywords: Keywords Google associates with the site.<br>- summary: Keyword universe summary.<br>- cluster_keywords: The keyword tree of one cluster: head terms and their long-tail children. Needs clusterId.<br>- keywords: Flat keyword table with volume, intent and layer (L1 head terms, L3 long tail); sortable.<br>- topic_keywords: The keywords behind one topic, with volume and keyword tier. Needs topicId. |
| `excludeExistingTopics` | boolean | no | Used by: clusters. |
| `search` | string | no | Used by: clusters, cluster_keywords, keywords. |
| `preferActive` | boolean | no | Used by: clusters, summary, cluster_keywords, keywords. |
| `requireTail` | string | no | Used by: clusters, summary, keywords. |
| `searchMode` | one of `label`, `deep` | no | How `search` is matched. `label` (default) matches the cluster label only; `deep` also matches clusters containing a matching keyword. Used by: clusters. |
| `sortBy` | one of `volume`, `keywords`, `label`, `alignment`, `searchVolume`, `cpc`, `kd` | no | Used by: clusters, keywords. |
| `sortOrder` | one of `asc`, `desc` | no | Used by: clusters, keywords. |
| `alignment` | one of `all`, `on_brand`, `mostly_on_brand`, `mostly_off_brand` | no | Used by: clusters, summary, keywords. |
| `minVolume` | number | no | Used by: clusters, summary, keywords. |
| `pageSize` | number | no | Used by: clusters, cluster_keywords, keywords. |
| `page` | number | no | Used by: clusters, cluster_keywords, keywords. |
| `topicIds` | string | no | Used by: recommendations. |
| `promptIds` | string | no | Used by: recommendations. |
| `clusterLabels` | string | no | Used by: recommendations. |
| `limit` | number | no | Used by: recommendations, topic_keywords. |
| `clusterId` | string | no | The clusterId to look up. Used by: cluster_keywords, keywords. |
| `parentId` | string | no | Used by: cluster_keywords. |
| `kept` | one of `any`, `user`, `system` | no | Only kept keywords: all of them, or by who kept them. Used by: keywords. |
| `intent` | one of `informational`, `navigational`, `commercial`, `transactional` | no | Only keywords enriched with this search intent. Used by: keywords. |
| `topicId` | string | no | The topicId to look up. Used by: topic_keywords. |
| `q` | string | no | Substring match on the keyword text Used by: topic_keywords. |
| `tier` | one of `fat_head`, `long_tail` | no | Only keywords of this tier. Applied before `limit`, so a long-tail filter is not limited to the highest-volume window. Used by: topic_keywords. |

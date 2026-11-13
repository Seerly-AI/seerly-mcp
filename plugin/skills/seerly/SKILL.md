---
name: seerly
description: Answers questions about a brand's visibility in AI answers from its Seerly data, and turns that data into pitches, prompt plans, content briefs, page fixes and PR shortlists. Use when the user mentions Seerly, AI visibility, GEO, citations or share of voice in ChatGPT, Gemini, Claude, Perplexity or Google AI Overviews, or asks for one of those deliverables.
---

# Seerly

Seerly measures how AI engines mention, cite and describe a brand when they answer the prompts a project tracks, against the competitors it tracks. Every number comes from the user's own Seerly account.

## Pick the project

- A connection to `/api/mcp` works across projects: call `list_projects`, ask the user which one if it is not obvious, then pass `project` (domain, shortId or id) on every call.
- A connection to `/api/mcp/<project>` is pinned to one project; `get_project` names it.

## Job recipes

Start with the job tools. Each gathers what one task needs in a single call, and lists under `unavailable` whatever Seerly could not provide.

### A pitch or a status update

1. `get_brand_snapshot`: GEO score, AI reach, share of voice per competitor, citation KPIs, sentiment, Google totals, Smart Audit trend.
2. `get_latest_brand_report`: the monthly narrative, if one exists.
3. `find_opportunities`: citation gaps, keywords split into fat head and long tail, Google quick wins, backlink gaps.
4. `rank_publications`: the placements worth pursuing.

Structure it as: where the brand stands (with the competitor that leads), what it is missing, and a short plan. Use the numbers as the tools give them, with their time window.

### Which prompts to track

1. `get_prompt_ideas`: current prompts with volume and keyword tier, the scout's recommended changes, uncovered keyword clusters, and what AI engines actually searched.
2. Draft prompts the way a buyer would ask an AI engine; mix fat-head and long-tail anchors.
3. Let the user pick, then `preview_add_prompts`; show its preview, and `add_prompts` with its `previewId` once they agree.

### A content brief, then the article

1. `find_opportunities`: choose a gap and take its `topicId`.
2. `get_brief_inputs` with that `topicId`: the questions, the pages cited instead, target keywords, formats that get cited, the brand voice, and what is already planned.
3. Write the brief. If the user wants Seerly to draft it, `preview_generate_article` for the credit cost, then `generate_article` with its `previewId` once they agree.

### Pages to fix

`get_pages_to_fix`: the lowest-scoring pages, the pages failing each E-E-A-T check (author, published date, freshness, Article schema), pages missing Google clicks, and recent readiness checks. Join the lists by URL, rank the pages, and name the concrete edit each one needs.

### PR and paid placements

`rank_publications` classifies every site first; only real publications get a verdict.

- Present `worth_it` first and quote the `why` lines. Never upgrade a verdict.
- When a cost is unknown, say so and suggest asking for the rate card; never call it a good deal.
- Sites under `not_placements` (forums, social networks, review sites, marketplaces, reference sites) come with what to do there instead.

## Drill-downs

For a narrower question use the `get_*` tools (`get_overview`, `get_visibility`, `get_citations`, `get_sentiment`, `get_citation_gaps`, `get_weekly_trends`, `get_sources`, `get_search_traffic`, `get_site_audit`, `get_keywords`, `get_prompts`, `get_content`, `get_brand`, `get_offsite`). Each takes an `action`; the tool's description lists the actions and what each one needs. Ids chain: `topicId` from `get_visibility action=topics`, `promptId` from `action=topic_prompts`, `runId` from `action=prompt_runs`.

Every tool's arguments are in [references/](references/).

## Rules

- `generate_article` spends content credits and `add_prompts` adds tracked prompts. Each acts only on a `previewId` from its preview tool (`preview_generate_article`, `preview_add_prompts`). Show the user the preview (the credit cost, or which prompts are added and skipped), and call the action with that `previewId` only after they agree. A `previewId` works once, for 15 minutes; if it has expired, preview again.
- Anything under `unavailable` is not covered: say so, and never estimate it.
- A plan or subscription message means the user's plan does not include it: tell them, and do not retry.
- "Still computing" means an analysis is running: say so, and do not poll.
- Settings, new analyses and everything else Seerly does: send the user to https://seerly.app.

# get_pages_to_fix: Pages to fix

Read-only.

Which of the site's pages to fix first and why, in one call: the lowest-scoring pages with AI and SEO scores and failure counts; the pages failing each E-E-A-T check (author, publish date, freshness, Article schema); pages with the most missed Google clicks; and recent readiness checks with their E-E-A-T read. Join the lists by URL to rank pages, and name the concrete edits each one needs. Needs a completed Smart Audit.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |

# generate_article: Generate an article

**Changes data.** Takes a previewId from `preview_generate_article`; call it only after the user agrees to that preview.

Writes a blog article in Seerly from a brief, using the brand's voice and content strategy. Spends content credits. Seerly writes in the background; read the result with get_content action=article and the returned contentId. Runs only with a previewId from preview_generate_article, after the user has agreed to that preview; each previewId works once, for 15 minutes.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `previewId` | string | yes | The previewId preview_generate_article returned, once the user has agreed to that preview. |

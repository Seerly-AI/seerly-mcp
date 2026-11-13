# generate_article: Generate an article

**Changes data.** Call without `confirm` for a preview; call with `confirm=true` only after the user agrees.

Writes a blog article in Seerly from a brief, using the brand's voice and content strategy. Spends content credits. Call it first without confirm: it returns the credit cost and the credits left. Show that to the user, and call again with confirm=true only after they agree. Seerly writes in the background; read the result with get_content action=article and the returned contentId.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `project` | string | yes | Which Seerly project: its domain (e.g. acme.com), shortId or id, as listed by list_projects. |
| `title` | string | yes | The article's title, used verbatim. |
| `brief` | string | yes | The angle, outline and points to cover, from the brief. Seerly's writer follows it. |
| `contentType` | one of `article`, `tutorial`, `case_study`, `guide`, `announcement` | no | The kind of blog piece. Default article. |
| `focusKeyword` | string | no | The keyword the article targets. |
| `secondaryKeywords` | array of string | no | Related keywords to work in. |
| `promptIds` | array of string | no | Ids of the gap prompts the article should win, from get_brief_inputs. |
| `topicIds` | array of string | no | Ids of the topics the article belongs to. |
| `confirm` | boolean | no | true only after the user has seen this tool's preview and agreed. Without it, nothing changes. |

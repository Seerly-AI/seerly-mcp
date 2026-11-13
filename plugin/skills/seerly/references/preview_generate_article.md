# preview_generate_article: Preview: Generate an article

Read-only.

Shows what generate_article would do, and changes nothing: the credit cost and the credits left. Returns a previewId. Show the preview to the user; if they agree, call generate_article with that previewId.

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

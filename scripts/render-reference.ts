/** The parts of an MCP tools/list entry a reference page shows. */
export interface ListedTool {
  readonly name: string;
  readonly title?: string;
  readonly description?: string;
  readonly inputSchema: JsonSchema;
  readonly annotations?: { readonly readOnlyHint?: boolean };
}

export interface JsonSchema {
  readonly type?: string | readonly string[];
  readonly description?: string;
  readonly enum?: readonly (string | number)[];
  readonly items?: JsonSchema;
  readonly anyOf?: readonly JsonSchema[];
  readonly properties?: Readonly<Record<string, JsonSchema>>;
  readonly required?: readonly string[];
}

interface ArgumentRow {
  readonly name: string;
  readonly type: string;
  readonly required: boolean;
  readonly description: string;
}

/** One tool's reference page: what it does, whether it changes data, and every argument. */
export function renderReference(tool: ListedTool): string {
  const rows = argumentRows(tool.inputSchema, "");
  return [
    `# ${tool.name}${tool.title ? `: ${tool.title}` : ""}`,
    "",
    tool.annotations?.readOnlyHint === false
      ? `**Changes data.** Takes a previewId from \`preview_${tool.name}\`; call it only after the user agrees to that preview.`
      : "Read-only.",
    "",
    tool.description ?? "",
    "",
    "## Arguments",
    "",
    ...(rows.length === 0
      ? ["None."]
      : ["| Argument | Type | Required | Description |", "|---|---|---|---|", ...rows.map(renderRow)]),
    "",
  ].join("\n");
}

function argumentRows(schema: JsonSchema, prefix: string): ArgumentRow[] {
  const required = new Set(schema.required ?? []);
  return Object.entries(schema.properties ?? {}).flatMap(([name, property]) => {
    const path = `${prefix}${name}`;
    const row = { name: path, type: typeOf(property), required: required.has(name), description: property.description ?? "" };
    const nested = property.items?.properties ? argumentRows(property.items, `${path}[].`) : [];
    return [row, ...nested];
  });
}

function typeOf(schema: JsonSchema): string {
  if (schema.enum) return `one of ${schema.enum.map((value) => `\`${value}\``).join(", ")}`;
  if (schema.anyOf) return schema.anyOf.map(typeOf).join(" or ");
  if (schema.type === "array") return `array of ${schema.items ? typeOf(schema.items) : "values"}`;
  if (Array.isArray(schema.type)) return schema.type.join(" or ");
  return typeof schema.type === "string" ? schema.type : "any";
}

function renderRow(row: ArgumentRow): string {
  const description = row.description.replace(/\n+/g, "<br>").replace(/\|/g, "\\|");
  return `| \`${row.name}\` | ${row.type} | ${row.required ? "yes" : "no"} | ${description} |`;
}

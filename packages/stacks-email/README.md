# Stacks Email

Stack Overflow’s [MJML](https://mjml.io/) powered email compile engine with a tokenized component library and template library

- Primary docs/UI lives in `@stackoverflow/stacks-docs` under [`src/docs/public/email`](https://github.com/StackExchange/Stacks/tree/main/packages/stacks-docs/src/docs/public/email) or available on [stackoverflow.design/email](https://stackoverflow.design/email/).
- Full email preview gallery is available at [email.stackoverflow.design](https://email.stackoverflow.design).

## Component schema definitions

New components should use the schema helpers in `src/lib/schema.ts` so rendering,
defaults, validation, and generated docs stay in one place.

```ts
import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";

const headline = defineEmailComponent({
    slug: "headline",
    variants: {
        highlight: {
            highlight: true,
        },
    },
    optionsSchema: defineOptions([
        defineOption({
            name: "textClass",
            type: "string",
            initialValue: "s-email-text-headline",
            description: "Text styling class for the headline node.",
        }),
        defineOption({
            name: "highlight",
            type: "boolean",
            initialValue: false,
            description: "Applies inline highlighted text styling.",
        }),
        defineOption({
            name: "textAlign",
            type: "enum",
            values: mjmlAlignOptions,
            initialValue: "left",
            description: "MJML text alignment.",
        }),
    ]),
    render: ({ options }) => {
        // options.textClass is string
        // options.highlight is boolean
    },
});
```

- `defineOption` is the Sanity-style field declaration for component options.
- `initialValue` is the single source of truth for runtime defaults and the
  generated options table default.
- Use `type: "enum"` with a shared `values` tuple for constrained string values
  like MJML alignment. The generated schema validates the value and TypeScript
  infers the literal union.
- `optional: true` should only be used when omitted is meaningfully different
  from the initial value.
- The `default` variant is implied from schema defaults. Add entries in
  `variants` only for named variants that override option defaults. Variant
  values are plain option overrides.
- `defineOptions([...])` builds the underlying Zod schema, so API validation and
  render typing are derived from the option declarations.

## Template schema definitions

Templates should also export a single definition. The public template catalog,
preview text, and compiled MJML are derived from that default export.

```ts
import { z } from "zod/v4";

import { defineEmailTemplate, emailOption } from "../src/lib/schema";

const transactionalPropsSchema = z.object({
    headlineText: emailOption(z.string(), {
        type: "string",
        defaultValue: "From selected variant",
        renderDefaultValueAsCode: false,
        description: "Headline copy rendered near the top of the email.",
    }),
});

const transactional = defineEmailTemplate({
    slug: "transactional",
    defaultVariant: "short",
    variants: {
        short: {
            name: "Short",
            defaults: {
                headlineText: "Reset your password",
            },
        },
    },
    propsSchema: transactionalPropsSchema,
    preview: ({ props }) => ({
        previewText: props.headlineText,
    }),
    renderDocument: ({ props }) => ({
        tagName: "mjml",
        children: [
            // MJML document tree
        ],
    }),
});

export default transactional;
```

- Do not export separate `meta` or `document` values from template files.
- Template variants keep the richer `{ name, description, defaults }` shape
  because template variants need display metadata as well as prop defaults.
- `renderDocument` returns the full MJML document tree; the compile pipeline
  handles MJML serialization, shared config injection, token transformation, and
  HTML output.

## Run local sandbox

```bash
npm install
npm run dev -w @stackoverflow/stacks-email
```

## API auth (optional)

`POST /api/compile` supports an optional shared Bearer token.

- If `STACKS_EMAIL_AUTH_TOKEN` is not set: auth is disabled.
- If `STACKS_EMAIL_AUTH_TOKEN` is set: the request must include `Authorization: Bearer <token>`.

Example:

```bash
curl -X POST http://localhost:5173/api/compile \
  -H "Authorization: Bearer $STACKS_EMAIL_AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"template":"transactional","target":"preview","blocks":[{"type":"headline"}]}'
```

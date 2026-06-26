# Stacks Email

Stack Overflow’s [MJML](https://mjml.io/) powered email compile engine with a tokenized component library and template library

- Primary docs/UI lives in `@stackoverflow/stacks-docs` under [`src/docs/public/email`](https://github.com/StackExchange/Stacks/tree/main/packages/stacks-docs/src/docs/public/email) or available on [stackoverflow.design/email](https://stackoverflow.design/email/).
- Full email preview gallery is available at [email.stackoverflow.design](https://email.stackoverflow.design).

## Component schema definitions

New components should use the schema helpers in `src/lib/schema` so rendering,
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
        // Return a MJML JSON object
        // https://documentation.mjml.io/#using-mjml-in-json
        // options.textClass is string
        // options.highlight is boolean
    },
});

export const Headline = headline.component;
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
- `defineOptions([...])` builds the underlying [Zod](https://zod.dev/) schema, so API validation and
  render typing are derived from the option declarations.
- Export the `.component` as a PascalCase callable alongside the default export, so templates can compose components directly e.g., `Headline("highlight", { ... })`

## Template schema definitions

Templates use the same `defineOption` / `defineOptions` helpers as components,
so defaults, types, and generated docs come from a single schema. Variants are
plain prop overrides — the same shape used for component variants. The default
variant’s values live in the schema’s `initialValue`s; named variants list only
what they change.

```ts
import {
    defineEmailTemplate,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import { Headline } from "../components/headline";

const transactional = defineEmailTemplate({
    slug: "transactional",
    defaultVariant: "short",
    variants: {
        long: {
            headlineText: "Privacy Policy Update",
        },
    },
    propsSchema: defineOptions([
        defineOption({
            name: "headlineText",
            type: "string",
            initialValue: "Reset your password",
            description: "Headline copy rendered near the top of the email.",
        }),
    ]),
    preview: ({ props }) => ({
        previewText: props.headlineText,
    }),
    renderDocument: ({ variant, props }) => ({
        tagName: "mjml",
        children: [
            // Compose components via their named PascalCase exports.
            Headline(variant === "long" ? "default" : "highlight", {
                textContent: props.headlineText,
            }),
        ],
    }),
});

export default transactional;
```

`renderDocument` returns the full MJML document tree; the compile pipeline
handles MJML serialization, shared config injection, token transformation, and
HTML output.

## Run local sandbox

```bash
npm install
npm run dev -w @stackoverflow/stacks-email
```

## API

The compile engine can be used two ways: as a **deployed HTTP endpoint** that
any service can `POST` to, or as a **library imported directly** into another
app. Both paths run the same pipeline — schema validation, shared
config injection, token transformation, and HTML output — so a component or
template behaves identically however you reach it.

Every compile takes a `target`, which selects the set of token substitutions
applied to the output. Placeholders like `[[FIRST_NAME]]` or `[[UNSUBSCRIBE_URL]]`
are rewritten per target:

- `preview` — sample values for previewing in a browser or inbox test.
- `dotnet` — Razor model bindings (`@Model.FirstName`), for the .NET mailer.
- `braze` — Braze Liquid (`{{${first_name}}}`), for the Braze platform.

### As a deployed endpoint

The package is a SvelteKit app, so `npm run build` produces a deployable server
(via `@sveltejs/adapter-auto`) that exposes `POST /api/compile`. Use this when a
backend in another language or another service needs compiled email HTML without
embedding the engine itself.

The endpoint supports two request shapes:

- Compile any registered template by passing `template`, `target`, and optional
  `props`.
- Compose a transactional email from an ordered list of `blocks`. Each block
  names a component `type` (`headline`, `text`, `button`, `title`, `spacer`), an
  optional `variant`/`size`, and optional `props`. The header, footer, and
  surrounding spacing are added automatically.

```bash
curl -X POST https://email.stackoverflow.design/api/compile \
  -H "Content-Type: application/json" \
  --data '{
    "template": "newsletter",
    "target": "braze",
    "props": {
      "previewText": "The Stack Overflow Newsletter"
    }
  }'
```

```bash
curl -X POST https://email.stackoverflow.design/api/compile \
  -H "Content-Type: application/json" \
  --data '{
    "template": "transactional",
    "target": "braze",
    "previewText": "Reset your password",
    "blocks": [
      { "type": "headline", "props": { "textContent": "Reset your password" } },
      { "type": "text", "props": { "textContent": "Click below to continue." } },
      { "type": "button", "props": { "text": "Reset", "href": "[[BUTTON_URL]]" } }
    ]
  }'
```

The response is JSON and includes compiled `html`, final `mjml`,
`renderedMjml`, compile `errors`, and metadata such as `template` and `target`.
Block composition responses also include `blockCount`. Invalid bodies return
`400` with a human-readable `error` describing the failed field; compile
failures return `500`.

#### Auth (optional)

`POST /api/compile` supports an optional shared Bearer token.

- If `STACKS_EMAIL_AUTH_TOKEN` is not set: auth is disabled.
- If `STACKS_EMAIL_AUTH_TOKEN` is set: the request must include `Authorization: Bearer <token>` or it returns `401`.

```bash
curl -X POST http://localhost:5173/api/compile \
  -H "Authorization: Bearer $STACKS_EMAIL_AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"template":"transactional","target":"preview","blocks":[{"type":"headline"}]}'
```

### As a library in another app

The package’s main export (`@stackoverflow/stacks-email`) is a framework-agnostic
API surface — no SvelteKit required. Import it directly when you want to compile
in-process: a build script, a CMS, a queue worker, or your own HTTP server.

```ts
import {
    getEmailCatalog,
    compileEmailRenderable,
    compileEmailTemplate,
    compileEmailComponent,
} from "@stackoverflow/stacks-email";

// Discover what can be compiled — every component and template, with their
// variants, options, and the tokens each one exposes.
const { components, templates } = getEmailCatalog();

// Compile a full template for the Braze target.
const email = compileEmailTemplate({
    slug: "transactional",
    target: "braze",
    props: { headlineText: "Reset your password" },
});

console.log(email.html); // ready-to-send HTML

// Compile a single component (e.g. to render docs or a preview tile).
const button = compileEmailComponent({ slug: "button", target: "preview" });

console.log(button.componentHtml); // just the component’s markup

// Or dispatch by kind when the slug is dynamic.
const result = compileEmailRenderable({
    kind: "template",
    slug: "transactional",
    target: "dotnet",
});
```

Inputs are validated with Zod, so an unknown `slug` or an invalid `target`
throws with a descriptive message. `getEmailRenderableMeta(kind, slug)` returns
the catalog entry (name, description, tokens, options) without compiling, and
the lower-level `compileMjml` / `transformTokens` primitives are exported for
callers that already have their own MJML source.

A second export, `@stackoverflow/stacks-email/sveltekit`, provides ready-made
route handlers for serving the pre-compiled static email artifacts (used by
`@stackoverflow/stacks-docs`).

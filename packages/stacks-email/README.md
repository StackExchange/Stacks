# Stacks Email

Stack Overflow’s MJML powered email compile engine with a tokenized component library and template library

- Primary docs/UI lives in `@stackoverflow/stacks-docs` under [`src/docs/public/email`](https://github.com/StackExchange/Stacks/tree/main/packages/stacks-docs/src/docs/public/email) or available on [stackoverflow.design/email](https://stackoverflow.design/email/).
- Full email preview gallery is available at [email.stackoverflow.design](https://email.stackoverflow.design).

## Token placeholders

Template authors should use the neutral placeholder syntax:

- `[[FIRST_NAME]]`
- `[[CTA_URL]]`
- `[[UNSUBSCRIBE_URL]]`
- `[[COMPANY_NAME]]`

During compilation, placeholders are transformed by target:

- `preview` -> concrete example values
- `dotnet` -> Razor expressions
- `braze` -> Liquid expressions

## Component render standard

Component partials are compiled inside a shared MJML wrapper so they inherit global classes/styles from `mjml-config.ts`:

```mjml
<mjml>
    <mj-head>
        <!-- shared config/classes -->
    </mj-head>
    <mj-body>
        <!-- component partial -->
    </mj-body>
</mjml>
```

For component compiles, marker comments are injected via `mj-raw`:

```mjml
<mj-raw> <!-- START componentName --> </mj-raw>

<!-- component MJML -->

<mj-raw> <!-- END componentName --> </mj-raw>
```

The pipeline extracts HTML between markers as `componentHtml` for copy/paste use, while keeping full `html` for previews.

## Public API usage

```ts
import {
    getEmailCatalog,
    compileEmailRenderable,
} from "@stackoverflow/stacks-email";

const catalog = getEmailCatalog();

const compiled = compileEmailRenderable({
    kind: "component",
    slug: "button",
    target: "preview",
});

// Full document (for iframe preview)
const fullHtml = compiled.html;

// Extracted component fragment (for component copy/paste)
if (compiled.kind === "component") {
    const fragmentHtml = compiled.componentHtml;
}
```

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

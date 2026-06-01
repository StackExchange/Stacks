---
title: Preview Text
description: Template compile option for controlling inbox preheader content.
---

Preview text is a template-level option, not a standalone visual component.

When compiling any template, pass `PREVIEW_TEXT` in `props` to inject `<mj-preview>` content:

```ts
import { compileEmailRenderable } from "@stackoverflow/stacks-email";

const compiled = compileEmailRenderable({
    kind: "template",
    slug: "transactional",
    target: "preview",
    props: {
        PREVIEW_TEXT: "Reset your password in one click.",
    },
});

console.log(compiled.renderedMjml);
// Includes: <mj-preview>Reset your password in one click.</mj-preview>
```

Pass `PREVIEW_TEXT: ""` to omit the preview tag.

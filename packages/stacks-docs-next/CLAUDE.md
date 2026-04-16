# stacks-docs-next — Claude Instructions

This is the SvelteKit documentation site for the Stacks v3 design system. Pages are written in mdsvex (`.md` files with Svelte support).

## Converting a component page from legacy stacks-docs

Work from the source in `packages/stacks-docs/product/components/<name>.html` and its companion JSON at `packages/stacks-docs/_data/components/<name>.json`.

### Checklist

1. Create `src/docs/public/system/components/<name>.md`
2. Write frontmatter (see below)
3. Write the `<script lang="ts">` block — imports + ClassTableRow data arrays
4. Convert all tables to `ClassTable`
5. Convert all examples to `<Example>` with Svelte components where available
6. Convert all code blocks to fenced HTML (clean up legacy template syntax)
7. Preserve all prose text exactly — no rewording
8. Remove the `legacy:` key from the component's entry in `src/structure.yaml`
9. Ensure the component has an entry in `src/structure.yaml` under the correct section

### Frontmatter

```yaml
---
title: "Component Name"
description: "…"           # from the original page
figma: "https://…"         # if present
svelte: "https://…"        # if present
js: true                   # only if the component has a JavaScript section
---
```

### Script block

```svelte
<script lang="ts">
    import { ComponentName, SubComponent } from '@stackoverflow/stacks-svelte';
    import { IconName } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [ … ];
    const attributes: ClassTableRow[] = [ … ];  // JS tables, one array per table
</script>
```

### ClassTable

Use `ClassTable` for every table — never raw markdown tables.

```svelte
<!-- Main classes table — usually expandable -->
<ClassTable {classes} expandable />

<!-- JS section tables — override column headings as appropriate -->
<ClassTable classes={attributes} headings={{ class: 'Attribute', parent: 'Applies to' }} />
<ClassTable classes={events}     headings={{ class: 'Event',     parent: 'Applies to' }} />
<ClassTable classes={helpers}    headings={{ class: 'Function',  parent: 'Applies to' }} />
```

**ClassTableRow fields:** `class`, `parent`, `modifies`, `output`, `description`, `define`, `responsive`.
- Only populate fields that are relevant — `ClassTable` auto-hides columns with no data.
- Use `'N/A'` (string) for explicitly empty parent/modifies — renders as muted text.
- The `headings` prop renames any column: `headings={{ class: 'Selector', description: 'Notes' }}`.

### Example component

All examples must be wrapped in `<Example>`.

```svelte
<Example>
    <!-- single example -->
    <ComponentName prop="value" />
</Example>

<!-- Multiple labelled sub-examples in one block -->
<Example>
    <div class="d-flex g16 ai-start fw-wrap">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Label</span>
            <ComponentName />
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Another label</span>
            <ComponentName variant="other" />
        </div>
    </div>
</Example>
```

Sub-example labels always use `class="ff-mono mb8"`.

### Svelte components vs raw HTML

- **Always prefer** Svelte components from `@stackoverflow/stacks-svelte` when one exists for the use case.
- **Fall back to raw HTML** only when the component's prop API can't express what the example needs (e.g. `ps-absolute` positioning on a container that the component applies internally).
- Check `packages/stacks-svelte/src/components/index.ts` for available components.
- Check story files (`*.stories.svelte`) for usage patterns.

### Code blocks

- Keep all HTML code blocks verbatim from the original source.
- Replace Razor/C# SVG syntax (`@Svg.IconName.With("class")` or `{% icon "Name", "class" %}`) with `<svg class="…" aria-hidden="true">…</svg>`.
- Use fenced code blocks with explicit language tags (` ```html `).

### Popover containers for menu/navigation examples

Use `s-popover is-visible ps-relative` as the example container for anything that would appear inside a popover in real use. Standard sizing is `ws2 p8` or `ws3 p8`.

### Removed-in-v3 components

Pages for components removed in Stacks v3 contain only a warning notice:

```md
---
title: "Component Name"
---

<script lang="ts">
    import { Notice } from '@stackoverflow/stacks-svelte';
</script>

<Notice variant="warning">
    <p>This component has been removed in Stacks v3. If using Stacks v2, please refer to the <a href="https://v2.stackoverflow.design/product/develop/using-stacks/">v2 documentation</a> for more information.</p>
</Notice>
```

### structure.yaml

Every component page must have an entry in `src/structure.yaml` under the correct section (Components, Forms, etc.) in **alphabetical order**.

After converting a page, remove the `legacy:` key from its entry so the new `.md` file is served:

```yaml
# Before
- title: "Navigation"
  slug: "navigation"
  legacy: product/components/navigation

# After
- title: "Navigation"
  slug: "navigation"
```

## Available doc components

| Component | Location | Purpose |
|---|---|---|
| `ClassTable` | `$components/ClassTable.svelte` | CSS class / JS attribute tables |
| `ExampleTable` | `$components/ExampleTable.svelte` | Example \| Class \| Description tables |
| `Example` | `$components/Example.svelte` | Bordered example container |
| `BannerExample` | `$components/BannerExample.svelte` | Full-width banner examples |
| `BannerDemo` | `$components/BannerDemo.svelte` | Interactive banner demo |
| `StacksEditorDemo` | `$components/StacksEditorDemo.svelte` | Stacks editor demo |

## Rehype plugins (automatic — no action needed)

The `svelte.config.js` rehype pipeline automatically:
- Adds `docs-heading docs-h2/h3/h4` to markdown headings
- Adds `docs-copy` to `p` and `ol` elements
- Adds `docs-section` to `<section>` elements (via rehype-sectionize)
- Adds `docs-link` to `<a>` elements
- Adds syntax highlighting via `s-code-block` to fenced code blocks
- Extracts the TOC from headings and exposes it as `metadata.toc`

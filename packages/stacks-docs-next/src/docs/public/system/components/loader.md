---
title: "Loader"
description: "The loader component indicates an active wait state for a page, section, or interactive element."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-loader--docs"
---

<script lang="ts">
    import { Loader } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import PreviewTable from '$components/PreviewTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';
    import type { PreviewTableRow } from '$components/PreviewTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-loader',          parent: 'N/A',       modifies: 'N/A',       description: 'Base class for the loader component.' },
        { class: '.s-loader--sr-text', parent: '.s-loader', modifies: 'N/A',       description: 'Necessary to render the center loader block and renders the accessible text.' },
        { class: '.s-loader__sm',      parent: 'N/A',       modifies: '.s-loader', description: 'A small variant of the loader component.' },
        { class: '.s-loader__lg',      parent: 'N/A',       modifies: '.s-loader', description: 'A large variant of the loader component.' },
    ];

    const sizes: PreviewTableRow[] = [
        { size: 'sm',      classes: ['.s-loader', '.s-loader__sm'], description: 'A small variant of the loader component.' },
        { size: undefined, classes: ['.s-loader'],                  description: 'Base class for the loader component.' },
        { size: 'lg',      classes: ['.s-loader', '.s-loader__lg'], description: 'A large variant of the loader component.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

### Base

The base loader component displays three animated squares.

```html
<div class="s-loader">
    <div class="s-loader--sr-text">Loading…</div>
</div>
```

<Example>
    <Loader />
</Example>

### Sizes

<PreviewTable rows={sizes}>
    {#snippet example(row)}
        <Loader size={row.size} />
    {/snippet}
</PreviewTable>

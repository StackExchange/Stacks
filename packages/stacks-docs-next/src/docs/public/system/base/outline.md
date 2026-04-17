---
title: Outline
description: Atomic outline classes allow you to quickly change an element's outline styling.
---

<script lang="ts">
    import { Notice } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        {
            class: '.outline-none',
            output: 'outline: 0;',
            define: "Removes the browser's default focus style. To maintain accessibility, care should be taken to replace the style that's been removed."
        },
        {
            class: '.outline-ring',
            output: 'outline: solid var(--su4) var(--translucent-secondary);',
            define: 'Adds an outline using our translucent secondary color.'
        }
    ];
</script>

<Notice variant="warning" class="s-anchors s-anchors__inherit s-anchors__underlined">
    <p><strong>Warning:</strong> <code>.outline-ring</code> does not meet our accessibility standards for focus state styling and should be used for decorative purposes only.</p>
</Notice>

## Classes

<ClassTable {classes} />

## Examples

```html
<div class="outline-none">…</div>
<div class="outline-ring">…</div>
```

<Example>
    <div class="outline-none d-inline-block bg-black-200 p12 ba bc-black-225">.outline-none</div>
    <div class="outline-ring d-inline-block bg-black-200 p12 ba bc-black-225">.outline-ring</div>
</Example>

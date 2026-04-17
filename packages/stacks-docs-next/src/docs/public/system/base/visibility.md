---
title: Visibility
description: Atomic visibility classes allow you to quickly change an element's visibility.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.v-visible',    define: 'The element visible' },
        { class: '.v-visible-sr', define: 'The element is visible only to screen readers' },
        { class: '.v-hidden',     define: 'The element is invisible, but still affects layout as normal' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

```html
<div class="v-visible">…</div>
<div class="v-visible-sr">…</div>
<div class="v-hidden">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap">
        <div class="flex--item bg-black-200 p12 ba bc-black-225 v-visible">.v-visible</div>
        <div class="flex--item bg-black-200 p12 ba bc-black-225 v-visible-sr">.v-visible-sr</div>
        <div class="flex--item bg-black-200 p12 ba bc-black-225 v-hidden">.v-hidden</div>
    </div>
</Example>

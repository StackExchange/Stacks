---
title: Box shadow
figma: https://svelte.stackoverflow.design/figma/box-shadows
description: Box shadow atomic classes allow you to change an element's box shadow quickly.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.bs-none', responsive: true },
        { class: '.bs-sm',   hover: true },
        { class: '.bs-md',   hover: true },
        { class: '.bs-lg',   hover: true },
        { class: '.bs-xl' },
        { class: '.bs-ring', hover: true, focus: true }
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

```html
<div class="bs-sm">…</div>
<div class="bs-md">…</div>
<div class="bs-lg">…</div>
<div class="bs-xl">…</div>
<div class="bs-ring">…</div>
```

<Example>
    <div class="d-flex g16 fw-wrap ai-center">
        <div class="bs-sm bg-white ba bc-black-225 p12">.bs-sm</div>
        <div class="bs-md bg-white ba bc-black-225 p12">.bs-md</div>
        <div class="bs-lg bg-white ba bc-black-225 p12">.bs-lg</div>
        <div class="bs-xl bg-white ba bc-black-225 p12">.bs-xl</div>
        <div class="bs-ring bg-white ba bc-black-225 p12">.bs-ring</div>
    </div>
</Example>

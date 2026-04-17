---
title: Opacity
description: Atomic opacity classes allow you to change an element's opacity quickly.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.o0',   output: 'opacity: 0',    hover: true },
        { class: '.o5',   output: 'opacity: 0.05', hover: true },
        { class: '.o10',  output: 'opacity: 0.1' },
        { class: '.o20',  output: 'opacity: 0.2' },
        { class: '.o30',  output: 'opacity: 0.3' },
        { class: '.o40',  output: 'opacity: 0.4' },
        { class: '.o50',  output: 'opacity: 0.5',  hover: true },
        { class: '.o60',  output: 'opacity: 0.6' },
        { class: '.o70',  output: 'opacity: 0.7' },
        { class: '.o80',  output: 'opacity: 0.8',  hover: true },
        { class: '.o90',  output: 'opacity: 0.9' },
        { class: '.o100', output: 'opacity: 1',    hover: true, focus: true },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

```html
<div class="o0">…</div>
<div class="o5">…</div>
<div class="o10">…</div>
<div class="o20">…</div>
<div class="o30">…</div>
<div class="o40">…</div>
<div class="o50">…</div>
<div class="o60">…</div>
<div class="o70">…</div>
<div class="o80">…</div>
<div class="o90">…</div>
<div class="o100">…</div>
```

<Example>
    <div class="d-flex fd-column g8 fs-caption ff-mono">
        <div class="o0   bg-black-200 p12 ba bc-black-225">.o0</div>
        <div class="o5   bg-black-200 p12 ba bc-black-225">.o5</div>
        <div class="o10  bg-black-200 p12 ba bc-black-225">.o10</div>
        <div class="o20  bg-black-200 p12 ba bc-black-225">.o20</div>
        <div class="o30  bg-black-200 p12 ba bc-black-225">.o30</div>
        <div class="o40  bg-black-200 p12 ba bc-black-225">.o40</div>
        <div class="o50  bg-black-200 p12 ba bc-black-225">.o50</div>
        <div class="o60  bg-black-200 p12 ba bc-black-225">.o60</div>
        <div class="o70  bg-black-200 p12 ba bc-black-225">.o70</div>
        <div class="o80  bg-black-200 p12 ba bc-black-225">.o80</div>
        <div class="o90  bg-black-200 p12 ba bc-black-225">.o90</div>
        <div class="o100 bg-black-200 p12 ba bc-black-225">.o100</div>
    </div>
</Example>

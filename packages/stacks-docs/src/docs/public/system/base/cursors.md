---
title: Cursors
description: Atomic cursor classes allow you to quickly change an element's cursor behavior.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.c-auto',        output: 'cursor: auto;' },
        { class: '.c-default',     output: 'cursor: default;' },
        { class: '.c-pointer',     output: 'cursor: pointer;' },
        { class: '.c-text',        output: 'cursor: text;' },
        { class: '.c-wait',        output: 'cursor: wait;' },
        { class: '.c-move',        output: 'cursor: move;' },
        { class: '.c-not-allowed', output: 'cursor: not-allowed;' },
        { class: '.c-help',        output: 'cursor: help;' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

```html
<div class="c-auto">…</div>
<div class="c-default">…</div>
<div class="c-pointer">…</div>
<div class="c-text">…</div>
<div class="c-wait">…</div>
<div class="c-move">…</div>
<div class="c-not-allowed">…</div>
<div class="c-help">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap fs-caption ff-mono">
        <div class="bg-black-200 p12 ba bc-black-225 c-auto">
            .c-auto
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 c-default">
            .c-default
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 c-pointer">
            .c-pointer
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 c-text">
            .c-text
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 c-wait">
            .c-wait
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 c-move">
            .c-move
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 c-not-allowed">
            .c-not-allowed
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 c-help">
            .c-help
        </div>
    </div>
</Example>

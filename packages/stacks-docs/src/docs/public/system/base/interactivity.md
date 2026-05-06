---
title: Interactivity
description: Atomic interactivity classes allow you to quickly change an element's interactivity.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const pointerEvents: ClassTableRow[] = [
        { class: '.pe-auto', output: 'pointer-events: auto;', define: 'The element behaves as it would if the pointer-events property were not specified.' },
        { class: '.pe-none', output: 'pointer-events: none;', define: 'Disables mouse events (clicking, dragging, hovering, etc.) on the element and its decendents.' },
    ];

    const focus: ClassTableRow[] = [
        { class: '.focus',               define: 'The element will have the default Stacks focus style applied.' },
        { class: '.focus-inset',         define: 'The element will have the inset Stacks focus style applied.' },
        { class: '.focus-bordered',      define: 'The element will have the default Stacks focus style applied and match the border to the focus style.' },
        { class: '.focus-inset-bordered', define: 'The element will have the inset Stacks focus style applied and match the border to the focus style.' },
    ];

    const userSelect: ClassTableRow[] = [
        { class: '.us-auto', output: 'user-select: auto;', define: 'The element behaves as it would if the user-select property were not specified.' },
        { class: '.us-none', output: 'user-select: none;', define: 'The text of the element and its sub-elements is not selectable. It may be appropriate to combine with `.c-default`' },
    ];
</script>

## Pointer events

The pointer-events CSS property enables or disables all mouse events on an element.

### Classes

<ClassTable classes={pointerEvents} />

### Examples

```html
<div class="pe-auto">…</div>
<div class="pe-none">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap">
        <button class="pe-auto s-btn s-btn__tonal ff-mono">.pe-auto</button>
        <button class="pe-none s-btn s-btn__tonal ff-mono">.pe-none</button>
    </div>
</Example>

## Focus

The focus utility classes allow you to apply custom focus styles to an element. Add the conditional prefix `f:` to only apply the style when the element is focused.

### Classes

<ClassTable classes={focus} />

### Examples

```html
<div class="focus">…</div>
<div class="focus-inset">…</div>
<div class="focus-bordered">…</div>
<div class="focus-inset-bordered">…</div>
```

<Example>
    <div class="d-flex g16 fw-wrap">
        <div class="focus ba bc-black-225 p12 ff-mono">.focus</div>
        <div class="focus-inset ba bc-black-225 p12 ff-mono">.focus-inset</div>
        <div class="focus-bordered ba bc-black-225 p12 ff-mono">.focus-bordered</div>
        <div class="focus-inset-bordered ba bc-black-225 p12 ff-mono">.focus-inset-bordered</div>
    </div>
</Example>

### Conditional focus examples

Add the conditional prefix `f:` to only apply the style when the element is focused.

```html
<div class="f:focus" role="button" tabindex="0">…</div>
<div class="f:focus-inset" role="button" tabindex="0">…</div>
<div class="f:focus-bordered" role="button" tabindex="0">…</div>
<div class="f:focus-inset-bordered" role="button" tabindex="0">…</div>
```

<Example>
    <div class="d-flex g16 fw-wrap">
        <div role="button" tabindex="0" class="f:focus ba bc-black-225 p12 ff-mono">.f:focus</div>
        <div role="button" tabindex="0" class="f:focus-inset ba bc-black-225 p12 ff-mono">.f:focus-inset</div>
        <div role="button" tabindex="0" class="f:focus-bordered ba bc-black-225 p12 ff-mono">.f:focus-bordered</div>
        <div role="button" tabindex="0" class="f:focus-inset-bordered ba bc-black-225 p12 ff-mono">.f:focus-inset-bordered</div>
    </div>
</Example>

## User select

The user-select CSS property controls whether the user can select text.

### Classes

<ClassTable classes={userSelect} />

### Examples

```html
<div class="us-auto">…</div>
<div class="us-none">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap">
        <div class="us-auto ba bc-black-225 p12 ff-mono">.us-auto</div>
        <div class="us-none ba bc-black-225 p12 ff-mono">.us-none</div>
    </div>
</Example>

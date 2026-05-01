---
title: Transitions
description: Atomic transition classes allow you to quickly apply transitions properties to an element. You can modify an element's transition duration, property, or delay.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.t',            output: 'transition-duration: .1s; transition-property: all; transition-timing-function: ease-in; transition-delay: 0s;', define: 'Apply a default transition style to an element.' },
        { class: '.t-slow',       output: 'transition-duration: .25s;',          define: 'Slow down the default transition to 0.25s.' },
        { class: '.t-fast',       output: 'transition-duration: .05s;',          define: 'Speed up the default transition to 0.05s.' },
        { class: '.t-unset',      output: 'transition-property: none;',          define: 'Remove transition properties from an element.' },
        { class: '.t-bg',         output: 'transition-property: background-color;', define: 'Transition the background property of an element.' },
        { class: '.t-opacity',    output: 'transition-property: opacity;',       define: 'Transition the opacity property of an element.' },
        { class: '.t-shadow',     output: 'transition-property: box-shadow;',    define: 'Transition the box shadow property of an element.' },
        { class: '.t-delay',      output: 'transition-delay: .25s;',             define: 'Apply a transition delay to an element.' },
        { class: '.t-delay-unset', output: 'transition-delay: 0s;',              define: 'Remove a transition delay from an element.' },
    ];
</script>

You can trigger CSS transitions directly with pseudo classes like `:hover` which activate on mouse over, `:focus` which activates when user tabs onto or clicks into an input element, or `active` when a user clicks on an element.

You can also trigger a CSS transition using JavaScript by adding or removing a class.

## Classes

<ClassTable {classes} />

## Base transition

The base transition applies a default duration timing function to an element.

```html
<div class="t">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap fs-caption ff-mono">
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t h:bg-orange-500">
            .t
        </div>
    </div>
</Example>

## Speed

Change an elements default transition duration.

```html
<div class="t-slow">…</div>
<div class="t-fast">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap fs-caption ff-mono">
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t t-slow h:bg-orange-500">
            .t-slow
        </div>
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t t-fast h:bg-orange-500">
            .t-fast
        </div>
    </div>
</Example>

## Property

Target a specific CSS property for transition, or remove the default transition.

```html
<div class="t-unset">…</div>
<div class="t-bg">…</div>
<div class="t-opacity">…</div>
<div class="t-shadow">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap fs-caption ff-mono">
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t t-unset h:bg-orange-500">
            .t-unset
        </div>
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t t-bg h:bg-orange-500">
            .t-bg
        </div>
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t t-opacity h:o50">
            .t-opacity
        </div>
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t t-shadow h:bs-lg">
            .t-shadow
        </div>
    </div>
</Example>

## Delay

Refers to how long you want to wait before starting the duration.

```html
<div class="t-delay">…</div>
<div class="t-delay-unset">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap fs-caption ff-mono">
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t t-delay h:bg-orange-500">
            .t-delay
        </div>
        <div class="flex--item bg-black-200 ba bc-black-225 p32 t t-delay-unset h:bg-orange-500">
            .t-delay-unset
        </div>
    </div>
</Example>

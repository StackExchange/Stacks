---
title: Transitions
description: Atomic transition classes allow you to quickly apply transitions properties to an element. You can modify an element's transition duration, property, or delay.
---

<script lang="ts">
  const transitionClasses = [
    {
      "class": "t",
      "output": "transition-duration: .1s; transition-property: all; transition-timing-function: ease-in; transition-delay: 0s;",
      "define": "Apply a default transition style to an element."
    },
    {
      "class": "t-slow",
      "output": "transition-duration: .25s;",
      "define": "Slow down the default transition to 0.25s."
    },
    {
      "class": "t-fast",
      "output": "transition-duration: .05s;",
      "define": "Speed up the default transition to 0.05s."
    },
    {
      "class": "t-unset",
      "output": "transition-property: none;",
      "define": "Remove transition properties from an element."
    },
    {
      "class": "t-bg",
      "output": "transition-property: background-color;",
      "define": "Transition the background property of an element."
    },
    {
      "class": "t-opacity",
      "output": "transition-property: opacity;",
      "define": "Transition the opacity property of an element."
    },
    {
      "class": "t-shadow",
      "output": "transition-property: box-shadow;",
      "define": "Transition the box shadow property of an element."
    },
    {
      "class": "t-delay",
      "output": "transition-delay: .25s;",
      "define": "Apply a transition delay to an element."
    },
    {
      "class": "t-delay-unset",
      "output": "transition-delay: 0s;",
      "define": "Remove a transition delay from an element."
    }
  ];
</script>

You can trigger CSS transitions directly with pseudo classes like `:hover` which activate on mouse over, `:focus` which activates when user tabs onto or clicks into an input element, or `active` when a user clicks on an element.

You can also trigger a CSS transition using JavaScript by adding or removing a class.

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell6" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each transitionClasses as atomic}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{atomic.class}</code></th>
          <td><code class="stacks-code bg-white">{atomic.output}</code></td>
          <td><p class="mb0">{atomic.define}</p></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Base transition

The base transition applies a default duration timing function to an element.

```html
<div class="t">…</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex g8 fw-wrap">
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t h:bg-orange-500">
      .t
    </div>
  </div>
</div>

## Speed

Change an elements default transition duration.

```html
<div class="t-slow">…</div>
<div class="t-fast">…</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex g8 fw-wrap">
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t t-slow h:bg-orange-500">
      .t-slow
    </div>
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t t-fast h:bg-orange-500">
      .t-fast
    </div>
  </div>
</div>

## Property

Target a specific CSS property for transition, or remove the default transition.

```html
<div class="t-unset">…</div>
<div class="t-bg">…</div>
<div class="t-opacity">…</div>
<div class="t-shadow">…</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex g8 fw-wrap">
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t t-unset h:bg-orange-500">
      .t-unset
    </div>
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t t-bg h:bg-orange-500">
      .t-bg
    </div>
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t t-opacity h:o50">
      .t-opacity
    </div>
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t t-shadow h:bs-lg">
      .t-shadow
    </div>
  </div>
</div>

## Delay

Refers to how long you want to wait before starting the duration.

```html
<div class="t-delay">…</div>
<div class="t-delay-unset">…</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex g8 fw-wrap">
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t t-delay h:bg-orange-500">
      .t-delay
    </div>
    <div class="flex--item bg-black-200 ba bc-black-225 bar-md p32 t t-delay-unset h:bg-orange-500">
      .t-delay-unset
    </div>
  </div>
</div>

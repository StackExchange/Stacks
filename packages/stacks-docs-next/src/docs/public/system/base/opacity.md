---
title: Opacity
description: Atomic opacity classes allow you to change an element's opacity quickly.
updated: 2025-12-16
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossCircle } from '@stackoverflow/stacks-icons';

  const opacityClasses = [
    {
      class: 'o0',
      output: 'opacity: 0;',
      hover: true,
      focus: false
    },
    {
      class: 'o5',
      output: 'opacity: 0.05;',
      hover: true,
      focus: false
    },
    {
      class: 'o10',
      output: 'opacity: 0.1;',
      hover: false,
      focus: false
    },
    {
      class: 'o20',
      output: 'opacity: 0.2;',
      hover: false,
      focus: false
    },
    {
      class: 'o30',
      output: 'opacity: 0.3;',
      hover: false,
      focus: false
    },
    {
      class: 'o40',
      output: 'opacity: 0.4;',
      hover: false,
      focus: false
    },
    {
      class: 'o50',
      output: 'opacity: 0.5;',
      hover: true,
      focus: false
    },
    {
      class: 'o60',
      output: 'opacity: 0.6;',
      hover: false,
      focus: false
    },
    {
      class: 'o70',
      output: 'opacity: 0.7;',
      hover: false,
      focus: false
    },
    {
      class: 'o80',
      output: 'opacity: 0.8;',
      hover: true,
      focus: false
    },
    {
      class: 'o90',
      output: 'opacity: 0.9;',
      hover: false,
      focus: false
    },
    {
      class: 'o100',
      output: 'opacity: 1;',
      hover: true,
      focus: true
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Output</th>
        <th scope="col" class="ta-center"><a class="s-link s-link__inherit" href="/system/develop/conditional-classes#hover">Hover?</a></th>
        <th scope="col" class="ta-center"><a class="s-link s-link__inherit" href="/system/develop/conditional-classes#focus">Focus?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each opacityClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td class="ta-center">
            <Icon src={item.hover ? IconCheckFillCircle : IconCrossCircle} class={item.hover ? "fc-green-400" : "fc-black-200"} />
          </td>
          <td class="ta-center">
            <Icon src={item.focus ? IconCheckFillCircle : IconCrossCircle} class={item.focus ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

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

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="o0 my4 bg-black-200 p12 ba bc-black-225">.o0</div>
  <div class="o5 my4 bg-black-200 p12 ba bc-black-225">.o5</div>
  <div class="o10 my4 bg-black-200 p12 ba bc-black-225">.o10</div>
  <div class="o20 my4 bg-black-200 p12 ba bc-black-225">.o20</div>
  <div class="o30 my4 bg-black-200 p12 ba bc-black-225">.o30</div>
  <div class="o40 my4 bg-black-200 p12 ba bc-black-225">.o40</div>
  <div class="o50 my4 bg-black-200 p12 ba bc-black-225">.o50</div>
  <div class="o60 my4 bg-black-200 p12 ba bc-black-225">.o60</div>
  <div class="o70 my4 bg-black-200 p12 ba bc-black-225">.o70</div>
  <div class="o80 my4 bg-black-200 p12 ba bc-black-225">.o80</div>
  <div class="o90 my4 bg-black-200 p12 ba bc-black-225">.o90</div>
  <div class="o100 my4 bg-black-200 p12 ba bc-black-225">.o100</div>
</div>

---
title: Box shadow
figma: https://svelte.stackoverflow.design/figma/box-shadows
description: Box shadow atomic classes allow you to change an element's box shadow quickly.
updated: 2025-12-16
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossCircle } from '@stackoverflow/stacks-icons';

  const boxShadowClasses = [
    {
      class: 'bs-none',
      output: 'box-shadow: none;',
      hover: false,
      focus: false,
      responsive: true
    },
    {
      class: 'bs-sm',
      output: `box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05),
0 1px 4px hsla(0, 0%, 0%, 0.05),
0 2px 8px hsla(0, 0%, 0%, 0.05)`,
      hover: true,
      focus: false,
      responsive: false
    },
    {
      class: 'bs-md',
      output: `box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06),
0 2px 6px hsla(0, 0%, 0%, 0.06),
0 3px 8px hsla(0, 0%, 0%, 0.09)`,
      hover: true,
      focus: false,
      responsive: false
    },
    {
      class: 'bs-lg',
      output: `box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.09),
0 3px 8px hsla(0, 0%, 0%, 0.09),
0 4px 13px hsla(0, 0%, 0%, 0.13)`,
      hover: true,
      focus: false,
      responsive: false
    },
    {
      class: 'bs-xl',
      output: `box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
0 20px 48px hsla(0, 0%, 0%, 0.05),
0 1px 4px hsla(0, 0%, 0%, 0.1)`,
      hover: false,
      focus: false,
      responsive: false
    },
    {
      class: 'bs-ring',
      output: 'box-shadow: 0 0 0 var(--su-static4) var(--focus-ring);',
      hover: true,
      focus: true,
      responsive: false
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn5 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th scope="col">Output</th>
        <th scope="col" class="ta-center"><a class="s-link s-link__inherit" href="/system/develop/conditional-classes#hover">Hover?</a></th>
        <th scope="col" class="ta-center"><a class="s-link s-link__inherit" href="/system/develop/conditional-classes#focus">Focus?</a></th>
        <th scope="col" class="ta-center"><a class="s-link s-link__inherit" href="/system/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each boxShadowClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white pl0" style="white-space: pre-line;">{item.output}</code></td>
          <td class="ta-center">
            <Icon src={item.hover ? IconCheckFillCircle : IconCrossCircle} class={item.hover ? "fc-green-400" : "fc-black-200"} />
          </td>
          <td class="ta-center">
            <Icon src={item.focus ? IconCheckFillCircle : IconCrossCircle} class={item.focus ? "fc-green-400" : "fc-black-200"} />
          </td>
          <td class="ta-center">
            <Icon src={item.responsive ? IconCheckFillCircle : IconCrossCircle} class={item.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

```html
<div class="bs-sm">…</div>
<div class="bs-md">…</div>
<div class="bs-lg">…</div>
<div class="bs-xl">…</div>
<div class="bs-ring">…</div>
```

<div class="stacks-preview--example">
  <div class="d-flex g16 fw-wrap ai-center">
    <div class="flex--item bs-sm bg-white ba bc-black-225 p12">.bs-sm</div>
    <div class="flex--item bs-md bg-white ba bc-black-225 p12">.bs-md</div>
    <div class="flex--item bs-lg bg-white ba bc-black-225 p12">.bs-lg</div>
    <div class="flex--item bs-xl bg-white ba bc-black-225 p12">.bs-xl</div>
    <div class="flex--item bs-ring bg-white ba bc-black-225 p12">.bs-ring</div>
  </div>
</div>

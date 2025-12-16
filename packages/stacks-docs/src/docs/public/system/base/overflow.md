---
title: Overflow
description: Atomic overflow classes allow you to change an element's overflow properties quickly.
updated: 2025-12-16
---

<script lang="ts">
  const overflowClasses = [
    {
      class: 'overflow-auto',
      output: 'overflow: auto;',
      define: 'If content fits inside the content box, it looks the same as visible, but still establishes a new block-formatting context. Desktop browsers like Firefox provide scrollbars if content overflows.'
    },
    {
      class: 'overflow-x-auto',
      output: 'overflow-x: auto;',
      define: 'If content fits inside the content box, it looks the same as visible in the x dimension, but still establishes a new block-formatting context. Desktop browsers like Firefox provide scrollbars if content overflows.'
    },
    {
      class: 'overflow-y-auto',
      output: 'overflow-y: auto;',
      define: 'If content fits inside the content box, it looks the same as visible in the y dimension, but still establishes a new block-formatting context. Desktop browsers like Firefox provide scrollbars if content overflows.'
    },
    {
      class: 'overflow-hidden',
      output: 'overflow: hidden;',
      define: 'Content is clipped if necessary to fit the content box. No scrollbars are provided.'
    },
    {
      class: 'overflow-x-hidden',
      output: 'overflow-x: hidden;',
      define: 'Content is clipped if necessary to fit the content box. No scrollbars are provided in the x dimension.'
    },
    {
      class: 'overflow-y-hidden',
      output: 'overflow-y: hidden;',
      define: 'Content is clipped if necessary to fit the content box. No scrollbars are provided in the y dimension.'
    },
    {
      class: 'overflow-scroll',
      output: 'overflow: scroll;',
      define: 'Content is clipped if necessary to fit the content box. Browsers display scrollbars whether or not any content is actually clipped. (This prevents scrollbars from appearing or disappearing when the content changes.) Printers may still print overflowing content.'
    },
    {
      class: 'overflow-x-scroll',
      output: 'overflow-x: scroll;',
      define: 'Content is clipped if necessary to fit the content box. Browsers display scrollbars whether or not any content is actually clipped in the x dimension.'
    },
    {
      class: 'overflow-y-scroll',
      output: 'overflow-y: scroll;',
      define: 'Content is clipped if necessary to fit the content box. Browsers display scrollbars whether or not any content is actually clipped in the y dimension.'
    },
    {
      class: 'overflow-visible',
      output: 'overflow: visible;',
      define: 'Content is not clipped and may be rendered outside the content box. This is the default value.'
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each overflowClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td><p class="mb0">{item.define}</p></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

```html
<div class="overflow-auto">…</div>
<div class="overflow-x-auto">…</div>
<div class="overflow-y-auto">…</div>
<div class="overflow-hidden">…</div>
<div class="overflow-x-hidden">…</div>
<div class="overflow-y-hidden">…</div>
<div class="overflow-scroll">…</div>
<div class="overflow-x-scroll">…</div>
<div class="overflow-y-scroll">…</div>
<div class="overflow-visible">…</div>
```

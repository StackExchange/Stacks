---
title: Z-Index
description: Atomic z-index classes allow you to change an element's z-index quickly.
updated: 2025-12-16
---

<script lang="ts">
  const zIndexClasses = [
    {
      class: 'z-hide',
      output: 'z-index: -1;'
    },
    {
      class: 'z-base',
      output: 'z-index: 0;'
    },
    {
      class: 'z-selected',
      output: 'z-index: 25;'
    },
    {
      class: 'z-active',
      output: 'z-index: 50;'
    },
    {
      class: 'z-dropdown',
      output: 'z-index: 1000;'
    },
    {
      class: 'z-popover',
      output: 'z-index: 2000;'
    },
    {
      class: 'z-tooltip',
      output: 'z-index: 3000;'
    },
    {
      class: 'z-banner',
      output: 'z-index: 4000;'
    },
    {
      class: 'z-nav',
      output: 'z-index: 5000;'
    },
    {
      class: 'z-nav-fixed',
      output: 'z-index: 5050;'
    },
    {
      class: 'z-modal-bg',
      output: 'z-index: 8050;'
    },
    {
      class: 'z-modal',
      output: 'z-index: 9000;'
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      {#each zIndexClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

```html
<div class="z-base">…</div>
<div class="z-hide">…</div>
<div class="z-selected">…</div>
<div class="z-active">…</div>
<div class="z-dropdown">…</div>
<div class="z-popover">…</div>
<div class="z-tooltip">…</div>
<div class="z-banner">…</div>
<div class="z-nav">…</div>
<div class="z-nav-fixed">…</div>
<div class="z-modal-bg">…</div>
<div class="z-modal">…</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono overflow-x-auto" style="height: 552px;" tabindex="0">
  <div class="h100" style="width: 520px;">
    <div class="z-base bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px;">.z-base</div>
    <div class="z-hide bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 40px; left: 40px;"><span class="ps-absolute d-block" style="bottom: 12px; left: 12px;">.z-hide</span></div>
    <div class="z-selected bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 80px; left: 80px;">.z-selected</div>
    <div class="z-active bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 120px; left: 120px;">.z-active</div>
    <div class="z-dropdown bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 160px; left: 160px;">.z-dropdown</div>
    <div class="z-popover bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 200px; left: 200px;">.z-popover</div>
    <div class="z-tooltip bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 240px; left: 240px;">.z-tooltip</div>
    <div class="z-banner bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 280px; left: 280px;">.z-banner</div>
    <div class="z-nav bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 320px; left: 320px;">.z-nav</div>
    <div class="z-nav-fixed bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 360px; left: 360px;">.z-nav-fixed</div>
    <div class="z-modal-bg bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 400px; left: 400px;">.z-modal-bg</div>
    <div class="z-modal bg-black-200 p12 ba bc-black-225 ps-absolute" style="height: 80px; width: 80px; top: 440px; left: 440px;">.z-modal</div>
  </div>
</div>

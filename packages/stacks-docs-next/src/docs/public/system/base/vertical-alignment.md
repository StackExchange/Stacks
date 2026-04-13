---
title: Vertical alignment
description: Atomic vertical alignment classes allow you to change an element's vertical alignment quickly.
updated: 2025-12-16
---

<script lang="ts">
  const verticalAlignmentClasses = [
    {
      class: 'va-baseline',
      output: 'vertical-align: baseline;'
    },
    {
      class: 'va-bottom',
      output: 'vertical-align: bottom;'
    },
    {
      class: 'va-middle',
      output: 'vertical-align: middle;'
    },
    {
      class: 'va-sub',
      output: 'vertical-align: sub;'
    },
    {
      class: 'va-super',
      output: 'vertical-align: super;'
    },
    {
      class: 'va-text-bottom',
      output: 'vertical-align: text-bottom;'
    },
    {
      class: 'va-text-top',
      output: 'vertical-align: text-top;'
    },
    {
      class: 'va-top',
      output: 'vertical-align: top;'
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
      </tr>
    </thead>
    <tbody>
      {#each verticalAlignmentClasses as item}
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
<div class="va-baseline">…</div>
<div class="va-bottom">…</div>
<div class="va-middle">…</div>
<div class="va-sub">…</div>
<div class="va-super">…</div>
<div class="va-text-bottom">…</div>
<div class="va-text-top">…</div>
<div class="va-top">…</div>
<div class="va-unset">…</div>
```

<div class="stacks-preview--example fs-caption ff-mono overflow-x-scroll" tabindex="0">
  <div style="width: 860px;">
    <div class="va-baseline my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-baseline</div>
    <div class="va-bottom my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-bottom</div>
    <div class="va-middle my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-middle</div>
    <div class="va-sub my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-sub</div>
    <div class="va-super my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-super</div>
    <div class="va-text-bottom my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-text-bottom</div>
    <div class="va-text-top my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-text-top</div>
    <div class="va-top my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-top</div>
  </div>
</div>

---
title: Outline
description: Atomic outline classes allow you to quickly change an element's outline styling.
updated: 2025-12-16
---

<script lang="ts">
  import { Notice } from '@stackoverflow/stacks-svelte';

  const outlineClasses = [
    {
      class: 'outline-none',
      output: 'outline: 0;',
      define: "Removes the browser's default focus style. To maintain accessibility, care should be taken to replace the style that's been removed."
    },
    {
      class: 'outline-ring',
      output: 'outline: solid var(--su-static4) var(--translucent-secondary);',
      define: 'Adds an outline using our translucent secondary color.'
    }
  ];
</script>

<Notice variant="warning" class="mb24">
  <strong>Warning:</strong> <code>.outline-ring</code> does not meet our accessibility standards for focus state styling and should be used for decorative purposes only.
</Notice>

## Classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell4" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each outlineClasses as item}
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
<div class="outline-none">…</div>
<div class="outline-ring">…</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="outline-none d-inline-block bg-black-200 p12 ba bc-black-225">.outline-none</div>
  <div class="outline-ring d-inline-block bg-black-200 p12 ba bc-black-225">.outline-ring</div>
</div>

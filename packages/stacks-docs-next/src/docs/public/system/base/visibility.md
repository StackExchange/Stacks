---
title: Visibility
description: Atomic visibility classes allow you to quickly change an element's visibility.
updated: 2025-12-16
---

<script lang="ts">
  const visibilityClasses = [
    {
      class: 'v-visible',
      definition: 'The element visible'
    },
    {
      class: 'v-visible-sr',
      definition: 'The element is visible only to screen readers'
    },
    {
      class: 'v-hidden',
      definition: 'The element is invisible, but still affects layout as normal'
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each visibilityClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td>{item.definition}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

```html
<div class="v-visible">…</div>
<div class="v-visible-sr">…</div>
<div class="v-hidden">…</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex g8 fw-wrap">
    <div class="flex--item bg-black-200 p12 ba bc-black-225 v-visible">
      .v-visible
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 v-visible-sr">
      .v-visible-sr
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 v-hidden">
      .v-hidden
    </div>
  </div>
</div>

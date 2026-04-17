---
title: Cursors
description: Atomic cursor classes allow you to quickly change an element's cursor behavior.
---

<script lang="ts">
  const cursorClasses = [
    {
      class: 'c-auto',
      output: 'cursor: auto;'
    },
    {
      class: 'c-default',
      output: 'cursor: default;'
    },
    {
      class: 'c-pointer',
      output: 'cursor: pointer;'
    },
    {
      class: 'c-text',
      output: 'cursor: text;'
    },
    {
      class: 'c-wait',
      output: 'cursor: wait;'
    },
    {
      class: 'c-move',
      output: 'cursor: move;'
    },
    {
      class: 'c-not-allowed',
      output: 'cursor: not-allowed;'
    },
    {
      class: 'c-help',
      output: 'cursor: help;'
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
      {#each cursorClasses as item}
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
<div class="c-auto">…</div>
<div class="c-default">…</div>
<div class="c-pointer">…</div>
<div class="c-text">…</div>
<div class="c-wait">…</div>
<div class="c-move">…</div>
<div class="c-not-allowed">…</div>
<div class="c-help">…</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex g8 fw-wrap">
    <div class="flex--item bg-black-200 p12 ba bc-black-225 c-auto">
      .c-auto
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 c-default">
      .c-default
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 c-pointer">
      .c-pointer
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 c-text">
      .c-text
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 c-wait">
      .c-wait
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 c-move">
      .c-move
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 c-not-allowed">
      .c-not-allowed
    </div>
    <div class="flex--item bg-black-200 p12 ba bc-black-225 c-help">
      .c-help
    </div>
  </div>
</div>

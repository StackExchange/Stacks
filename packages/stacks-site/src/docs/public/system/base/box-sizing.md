---
title: Box sizing
description: Box-sizing atomic classes allow one to determine what is used to determine an element's width or height.
updated: 2025-12-16
---

<script lang="ts">
  const boxSizingClasses = [
    {
      class: 'box-content',
      output: 'box-sizing: content-box;',
      define: "Indicates that the element's width and height affects only the element's content box, that is the area minus the element's margin, padding, and borders. <em>This is the default browser value.</em>"
    },
    {
      class: 'box-border',
      output: 'box-sizing: border-box;',
      define: "Indicates that the element's width and height affects the entire element. <em>This is the <strong>preferred</strong> default value for Stacks.</em>"
    },
    {
      class: 'box-unset',
      output: 'box-sizing: unset;',
      define: "Removes the previously set <code class='stacks-code'>box-sizing</code> value, reverting it back to the initial browser value."
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn5 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each boxSizingClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td class="p8"><p class="mb0">{@html item.define}</p></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

```html
<div>…</div>
<div class="box-content">…</div>
<div class="box-border">…</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono">
  <div class="d-flex g16 w100 fc-black-600 ff-mono fw-wrap">
    <div class="d-flex fd-column bg-black-200 ba bc-black-225">
      <p class="mt0 p12"><strong>Parent container</strong></p>
      <div class="d-flex fd-column w100 bg-black-250">
        <div class="mt0 px12 pt12"><strong>Child container</strong></div>
        <div class="mt12 px12 pb12">
          <strong>box-sizing: content-box;</strong><br/>
          width: 100%;<br/>
          padding: 0;<br/>
          border-width: 0;
        </div>
      </div>
    </div>
    <div class="d-flex fd-column bg-black-200 p12 ba bc-black-225">
      <p class="mt0"><strong>Parent container</strong></p>
      <div class="d-flex fd-column box-content w100 p12 bg-black-250">
        <div class="mt0"><strong>Child container</strong></div>
        <div class="mt12">
          <strong>box-sizing: content-box;</strong><br/>
          width: 100%;<br/>
          padding: 12px;<br/>
          border-width: 1px;
        </div>
      </div>
    </div>
    <div class="d-flex fd-column bg-black-200 p12 ba bc-black-225">
      <p class="mt0"><strong>Parent container</strong></p>
      <div class="d-flex fd-column box-border w100 p12 bg-black-250">
        <div class="mt0"><strong>Child container</strong></div>
        <div class="mt12">
          <strong>box-sizing: border-box;</strong><br/>
          width: 100%;<br/>
          padding: 12px;<br/>
          border-width: 1px;
        </div>
      </div>
    </div>
  </div>
</div>

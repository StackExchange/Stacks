---
title: Box sizing
description: Box-sizing atomic classes allow one to determine what is used to determine an element's width or height.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.box-content', output: 'box-sizing: content-box;', define: "Indicates that the element's width and height affects only the element's content box, that is the area minus the element's margin, padding, and borders. This is the default browser value." },
        { class: '.box-border',  output: 'box-sizing: border-box;',  define: "Indicates that the element's width and height affects the entire element. This is the preferred default value for Stacks." },
        { class: '.box-unset',   output: 'box-sizing: unset;',       define: 'Removes the previously set box-sizing value, reverting it back to the initial browser value.' },
    ];
</script>

## Classes

<ClassTable {classes} headings={{ define: 'Definition' }} />

## Examples

```html
<div>…</div>
<div class="box-content">…</div>
<div class="box-border">…</div>
```

<Example>
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
</Example>

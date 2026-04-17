---
title: Interactivity
description: Atomic interactivity classes allow you to quickly change an element's interactivity.
---

<script lang="ts">
  const pointerEventsClasses = [
    {
      class: 'pe-auto',
      output: 'pointer-events: auto;',
      define: 'The element behaves as it would if the pointer-events property were not specified.'
    },
    {
      class: 'pe-none',
      output: 'pointer-events: none;',
      define: 'Disables mouse events (clicking, dragging, hovering, etc.) on the element and its decendents.'
    }
  ];

  const userSelectClasses = [
    {
      class: 'us-auto',
      output: 'user-select: auto;',
      define: 'The element behaves as it would if the user-select property were not specified.'
    },
    {
      class: 'us-none',
      output: 'user-select: none;',
      define: 'The text of the element and its sub-elements is not selectable. It may be appropriate to combine with <code class="stacks-code">.c-default</code>'
    }
  ];

  const userDragClasses = [
    {
      class: 'ud-auto',
      output: 'user-drag: auto;',
      define: 'The element behaves as it would if the user-drag property were not specified.'
    },
    {
      class: 'ud-none',
      output: 'user-drag: none;',
      define: 'The element and its sub-elements are not draggable. When applied to an image, the ghosted image will not appear in a loaded mouse cursor.'
    }
  ];
</script>

## Pointer events

The pointer-events CSS property enables or disables all mouse events on an element.

### Pointer events classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each pointerEventsClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td class="p8"><p class="mb0">{item.define}</p></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## User select

The user-select CSS property controls whether the user can select text.

### User select classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each userSelectClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td class="p8"><p class="mb0">{@html item.define}</p></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## User drag

The user-drag CSS property controls whether an element can be dragged.

### User drag classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each userDragClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td class="p8"><p class="mb0">{item.define}</p></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

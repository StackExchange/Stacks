---
title: Gap
description: Atomic CSS gap classes allow you to set spacing on the direct children of elements with flexbox and grid layouts.
updated: 2025-12-17
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossCircle } from '@stackoverflow/stacks-icons';

  const gapClasses = [
    { "class": "g0", "output": "gap: 0", "define": "Add no space between items", "responsive": true },
    { "class": "g1", "output": "gap: 1px", "define": "Space out items by 1px", "responsive": true },
    { "class": "g2", "output": "gap: 2px", "define": "Space out items by 2px", "responsive": true },
    { "class": "g4", "output": "gap: 4px", "define": "Space out items by 4px", "responsive": true },
    { "class": "g6", "output": "gap: 6px", "define": "Space out items by 6px", "responsive": true },
    { "class": "g8", "output": "gap: 8px", "define": "Space out items by 8px", "responsive": true },
    { "class": "g12", "output": "gap: 12px", "define": "Space out items by 12px", "responsive": true },
    { "class": "g16", "output": "gap: 16px", "define": "Space out items by 16px", "responsive": true },
    { "class": "g24", "output": "gap: 24px", "define": "Space out items by 24px", "responsive": true },
    { "class": "g32", "output": "gap: 32px", "define": "Space out items by 32px", "responsive": true },
    { "class": "g48", "output": "gap: 48px", "define": "Space out items by 48px", "responsive": true },
    { "class": "g64", "output": "gap: 64px", "define": "Space out items by 64px", "responsive": true }
  ];

  const rowGapClasses = [
    { "class": "gy0", "define": "Add no space between rows", "responsive": true },
    { "class": "gy1", "define": "Space out rows by 1px", "responsive": true },
    { "class": "gy2", "define": "Space out rows by 2px", "responsive": true },
    { "class": "gy4", "define": "Space out rows by 4px", "responsive": true },
    { "class": "gy6", "define": "Space out rows by 6px", "responsive": true },
    { "class": "gy8", "define": "Space out rows by 8px", "responsive": true },
    { "class": "gy12", "define": "Space out rows by 12px", "responsive": true },
    { "class": "gy16", "define": "Space out rows by 16px", "responsive": true },
    { "class": "gy24", "define": "Space out rows by 24px", "responsive": true },
    { "class": "gy32", "define": "Space out rows by 32px", "responsive": true },
    { "class": "gy48", "define": "Space out rows by 48px", "responsive": true },
    { "class": "gy64", "define": "Space out rows by 64px", "responsive": true }
  ];

  const columnGapClasses = [
    { "class": "gx0", "define": "Add no space between columns", "responsive": true },
    { "class": "gx1", "define": "Space out columns by 1px", "responsive": true },
    { "class": "gx2", "define": "Space out columns by 2px", "responsive": true },
    { "class": "gx4", "define": "Space out columns by 4px", "responsive": true },
    { "class": "gx6", "define": "Space out columns by 6px", "responsive": true },
    { "class": "gx8", "define": "Space out columns by 8px", "responsive": true },
    { "class": "gx12", "define": "Space out columns by 12px", "responsive": true },
    { "class": "gx16", "define": "Space out columns by 16px", "responsive": true },
    { "class": "gx24", "define": "Space out columns by 24px", "responsive": true },
    { "class": "gx32", "define": "Space out columns by 32px", "responsive": true },
    { "class": "gx48", "define": "Space out columns by 48px", "responsive": true },
    { "class": "gx64", "define": "Space out columns by 64px", "responsive": true }
  ];
</script>

## Gap classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each gapClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td>{item.define}</td>
          <td class="ta-center">
            <Icon src={item.responsive ? IconCheckFillCircle : IconCrossCircle} class={item.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Examples

```html
<div class="d-grid g0">…</div>
<div class="d-grid g1">…</div>
<div class="d-grid g2">…</div>
<div class="d-grid g4">…</div>
<div class="d-grid g8">…</div>
<div class="d-grid g12">…</div>
<div class="d-grid g16">…</div>
<div class="d-grid g24">…</div>
<div class="d-grid g32">…</div>
<div class="d-grid g48">…</div>
<div class="d-grid g64">…</div>
```

<div class="stacks-preview--example ff-mono">
  {#each gapClasses as item}
    <div class="mb16 d-grid {item.class} grid__3 bg-black-200 ba bc-black-225 p16">
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300">
        .{item.class}
      </div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
    </div>
  {/each}
</div>

## Column gap

Spacing can be set on just the x-axis with `.gx` classes. They can be used independently or in combination with other atomic gap classes.

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each columnGapClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td>{item.define}</td>
          <td class="ta-center">
            <Icon src={item.responsive ? IconCheckFillCircle : IconCrossCircle} class={item.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Column examples

```html
<div class="d-grid gx0">…</div>
<div class="d-grid gx1">…</div>
<div class="d-grid gx2">…</div>
<div class="d-grid gx4">…</div>
<div class="d-grid gx8">…</div>
<div class="d-grid gx12">…</div>
<div class="d-grid gx16">…</div>
<div class="d-grid gx24">…</div>
<div class="d-grid gx32">…</div>
<div class="d-grid gx48">…</div>
<div class="d-grid gx64">…</div>
```

<div class="stacks-preview--example ff-mono">
  {#each columnGapClasses as item}
    <div class="mb16 d-grid {item.class} grid__3 bg-black-200 ba bc-black-225 p16">
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300">
        .{item.class}
      </div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
    </div>
  {/each}
</div>

## Row gap

Spacing can be set on just the y-axis with `.gy` classes. They can be used independently or in combination with other atomic gap classes.

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each rowGapClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td>{item.define}</td>
          <td class="ta-center">
            <Icon src={item.responsive ? IconCheckFillCircle : IconCrossCircle} class={item.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Row examples

```html
<div class="d-grid gy0">…</div>
<div class="d-grid gy1">…</div>
<div class="d-grid gy2">…</div>
<div class="d-grid gy4">…</div>
<div class="d-grid gy8">…</div>
<div class="d-grid gy12">…</div>
<div class="d-grid gy16">…</div>
<div class="d-grid gy24">…</div>
<div class="d-grid gy32">…</div>
<div class="d-grid gy48">…</div>
<div class="d-grid gy64">…</div>
```

<div class="stacks-preview--example ff-mono">
  {#each rowGapClasses as item}
    <div class="mb16 d-grid {item.class} grid__3 bg-black-200 ba bc-black-225 p16">
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300">
        .{item.class}
      </div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
      <div class="grid--item bg-black-225 p8 h32 ba bc-black-300"></div>
    </div>
  {/each}
</div>

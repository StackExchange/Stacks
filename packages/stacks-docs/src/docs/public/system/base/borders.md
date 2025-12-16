---
title: Borders
description: Stacks provides atomic classes for borders.
updated: 2025-12-16
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossCircle } from '@stackoverflow/stacks-icons';

  const borderClasses = [
    { class: 'ba', define: 'all sides', output: 'border: solid 1px #000', responsive: true },
    { class: 'bt', define: 'top', output: 'border-top: solid 1px #000', responsive: true },
    { class: 'bb', define: 'bottom', output: 'border-bottom: solid 1px #000', responsive: true },
    { class: 'bl', define: 'left', output: 'border-left: solid 1px #000', responsive: true },
    { class: 'br', define: 'right', output: 'border-right: solid 1px #000', responsive: true },
    { class: 'by', define: 'top and bottom', output: 'border-top: solid 1px #000; border-bottom: solid 1px #000;' },
    { class: 'bx', define: 'left and right', output: 'border-left: solid 1px #000; border-right: solid 1px #000;' }
  ];

  const widthClasses = [
    { class: 'baw0', define: 'zero, all sides', output: 'border-width: 0' },
    { class: 'btw0', define: 'zero, top', output: 'border-top-width: 0', responsive: true },
    { class: 'bbw0', define: 'zero, bottom', output: 'border-bottom-width: 0', responsive: true },
    { class: 'blw0', define: 'zero, left', output: 'border-left-width: 0', responsive: true },
    { class: 'brw0', define: 'zero, right', output: 'border-right-width: 0', responsive: true },
    { class: 'byw0', define: 'zero, top and bottom', output: 'border-top-width: 0; border-bottom-width: 0;' },
    { class: 'bxw0', define: 'zero, left and right', output: 'border-left-width: 0; border-right-width: 0;' },
    { class: 'baw1', define: '1px, all', output: 'border-width: 1px' },
    { class: 'btw1', define: '1px, top', output: 'border-top-width: 1px' },
    { class: 'bbw1', define: '1px, bottom', output: 'border-bottom-width: 1px' },
    { class: 'blw1', define: '1px, left', output: 'border-left-width: 1px' },
    { class: 'brw1', define: '1px, right', output: 'border-right-width: 1px' },
    { class: 'byw1', define: '1px, top and bottom', output: 'border-top-width: 1px; border-bottom-width: 1px;' },
    { class: 'bxw1', define: '1px, left and right', output: 'border-left-width: 1px; border-right-width: 1px;' },
    { class: 'baw2', define: '2px, all', output: 'border-width: 2px' },
    { class: 'btw2', define: '2px, top', output: 'border-top-width: 2px' },
    { class: 'bbw2', define: '2px, bottom', output: 'border-bottom-width: 2px' },
    { class: 'blw2', define: '2px, left', output: 'border-left-width: 2px' },
    { class: 'brw2', define: '2px, right', output: 'border-right-width: 2px' },
    { class: 'byw2', define: '2px, top and bottom', output: 'border-top-width: 2px; border-bottom-width: 2px;' },
    { class: 'bxw2', define: '2px, left and right', output: 'border-left-width: 2px; border-right-width: 2px;' },
    { class: 'baw3', define: '4px, all', output: 'border-width: 4px' },
    { class: 'btw3', define: '4px, top', output: 'border-top-width: 4px' },
    { class: 'bbw3', define: '4px, bottom', output: 'border-bottom-width: 4px' },
    { class: 'blw3', define: '4px, left', output: 'border-left-width: 4px' },
    { class: 'brw3', define: '4px, right', output: 'border-right-width: 4px' },
    { class: 'byw3', define: '4px, top and bottom', output: 'border-top-width: 4px; border-bottom-width: 4px;' },
    { class: 'bxw3', define: '4px, left and right', output: 'border-left-width: 4px; border-right-width: 4px;' }
  ];

  const styleClasses = [
    { class: 'bas-solid', define: 'Applies a solid border style to all sides', output: 'border-style: solid' },
    { class: 'bts-solid', define: 'Applies a solid border style to the top side', output: 'border-top-style: solid' },
    { class: 'brs-solid', define: 'Applies a solid border style to the right side', output: 'border-right-style: solid' },
    { class: 'bbs-solid', define: 'Applies a solid border style to the bottom side', output: 'border-bottom-style: solid' },
    { class: 'bls-solid', define: 'Applies a solid border style to the left side', output: 'border-left-style: solid' },
    { class: 'bas-dashed', define: 'Applies a dashed border style to all sides', output: 'border-style: dashed' },
    { class: 'bts-dashed', define: 'Applies a dashed border style to the top side', output: 'border-top-style: dashed' },
    { class: 'brs-dashed', define: 'Applies a dashed border style to the right side', output: 'border-right-style: dashed' },
    { class: 'bbs-dashed', define: 'Applies a dashed border style to the bottom side', output: 'border-bottom-style: dashed' },
    { class: 'bls-dashed', define: 'Applies a dashed border style to the left side', output: 'border-left-style: dashed' }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th scope="col">Output</th>
        <th scope="col">Apply border to</th>
        <th scope="col">
          <a class="s-link s-link__inherit" href="/system/develop/conditional-classes#responsive">Responsive?</a>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each borderClasses as border}
        <tr>
          <th scope="row"><code class="stacks-code">.{border.class}</code></th>
          <td class="ff-mono">{border.output}</td>
          <td>{border.define}</td>
          <td class="ta-center">
            <Icon src={border.responsive ? IconCheckFillCircle : IconCrossCircle} class={border.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

```html
<div class="ba">…</div>
<div class="bt">…</div>
<div class="br">…</div>
<div class="bb">…</div>
<div class="bl">…</div>
<div class="bx">…</div>
<div class="by">…</div>
```

<div class="stacks-preview--example d-flex g8 fw-wrap">
  {#each borderClasses as border}
    <div class="p12 bg-black-200 {border.class}">{border.define}</div>
  {/each}
</div>

## Width

### Width classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th scope="col">Output</th>
        <th scope="col">Border width, side(s)</th>
        <th scope="col">
          <a class="s-link s-link__inherit" href="/system/develop/conditional-classes#responsive">Responsive?</a>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each widthClasses as border}
        <tr>
          <th scope="row"><code class="stacks-code">.{border.class}</code></th>
          <td class="ff-mono">{border.output}</td>
          <td>{border.define}</td>
          <td class="ta-center">
            <Icon src={border.responsive ? IconCheckFillCircle : IconCrossCircle} class={border.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Width examples

```html
<div class="ba">…</div>
<div class="ba brw0">…</div>
<div class="ba bbw0">…</div>
<div class="ba baw2">…</div>
<div class="ba baw3">…</div>
```

<div class="stacks-preview--example d-flex g8 fw-wrap">
  <div class="p12 bg-black-200 ba">.ba</div>
  <div class="p12 bg-black-200 ba brw0">.ba.brw0</div>
  <div class="p12 bg-black-200 ba bbw0">.ba.bbw0</div>
  <div class="p12 bg-black-200 ba baw2">.ba.baw2</div>
  <div class="p12 bg-black-200 ba baw3">.ba.baw3</div>
</div>

## Style

### Style classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each styleClasses as border}
        <tr>
          <th scope="row"><code class="stacks-code">.{border.class}</code></th>
          <td class="ff-mono">{border.output}</td>
          <td>{border.define}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Style examples

```html
<div class="ba bas-solid">…</div>
<div class="ba bas-dashed">…</div>
<div class="ba brs-dashed">…</div>
```

<div class="stacks-preview--example">
  <div class="d-flex w100 g8 ai-center">
    <div class="flex--item p12 ba bas-solid bg-black-200">Solid border style</div>
    <div class="flex--item p12 ba bas-dashed bg-black-200">Dashed border style</div>
    <div class="flex--item p12 ba brs-dashed bg-black-200">Dashed border right style</div>
  </div>
</div>

## Color

### Color classes

Each color stop is available as a border class. See the [colors documentation](/system/foundation/colors#classes) for all available classes.

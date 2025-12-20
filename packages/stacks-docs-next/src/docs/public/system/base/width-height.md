---
title: Width & height
description: Stacks provides atomic sizing classes for percentage-based widths & heights, viewport-based widths & heights, static widths & heights, max-widths & heights, and min-widths & heights.
updated: 2025-12-17
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossCircle } from '@stackoverflow/stacks-icons';

  const widthClasses = [
    { "class": "w0", "output": "width: 0;", "responsive": false },
    { "class": "w2", "output": "width: 2px;", "responsive": false },
    { "class": "w4", "output": "width: 4px;", "responsive": false },
    { "class": "w6", "output": "width: 6px;", "responsive": false },
    { "class": "w8", "output": "width: 8px;", "responsive": false },
    { "class": "w12", "output": "width: 12px;", "responsive": false },
    { "class": "w16", "output": "width: 16px;", "responsive": false },
    { "class": "w24", "output": "width: 24px;", "responsive": false },
    { "class": "w32", "output": "width: 32px;", "responsive": false },
    { "class": "w48", "output": "width: 48px;", "responsive": false },
    { "class": "w64", "output": "width: 64px;", "responsive": false },
    { "class": "w96", "output": "width: 96px;", "responsive": false },
    { "class": "w128", "output": "width: 128px;", "responsive": false }
  ];

  const widthPercentageClasses = [
    { "class": "w-auto", "output": "width: auto;", "responsive": true },
    { "class": "w0", "output": "width: 0;", "responsive": false },
    { "class": "w10", "output": "width: 10%;", "responsive": false },
    { "class": "w20", "output": "width: 20%;", "responsive": false },
    { "class": "w25", "output": "width: 25%;", "responsive": true },
    { "class": "w30", "output": "width: 30%;", "responsive": false },
    { "class": "w33", "output": "width: 33.33%;", "responsive": true },
    { "class": "w40", "output": "width: 40%", "responsive": false },
    { "class": "w50", "output": "width: 50%;", "responsive": true },
    { "class": "w60", "output": "width: 60%;", "responsive": false },
    { "class": "w66", "output": "width: 66.67%;", "responsive": true },
    { "class": "w70", "output": "width: 70%;", "responsive": false },
    { "class": "w75", "output": "width: 75%;", "responsive": true },
    { "class": "w80", "output": "width: 80%;", "responsive": false },
    { "class": "w90", "output": "width: 90%;", "responsive": false },
    { "class": "w100", "output": "width: 100%;", "responsive": true },
    { "class": "w-screen", "output": "width: 100vw;", "responsive": true }
  ];

  const widthStaticClasses = [
    { "class": "ws1", "output": "width: 105px;", "responsive": false },
    { "class": "ws2", "output": "width: 211px;", "responsive": false },
    { "class": "ws3", "output": "width: 316px;", "responsive": false },
    { "class": "ws4", "output": "width: 421px;", "responsive": false },
    { "class": "ws5", "output": "width: 527px;", "responsive": false },
    { "class": "ws6", "output": "width: 632px;", "responsive": false },
    { "class": "ws7", "output": "width: 737px;", "responsive": false },
    { "class": "ws8", "output": "width: 843px;", "responsive": false },
    { "class": "ws9", "output": "width: 948px;", "responsive": false },
    { "class": "ws10", "output": "width: 1053px;", "responsive": false },
    { "class": "ws11", "output": "width: 1159px;", "responsive": false },
    { "class": "ws12", "output": "width: 1264px;", "responsive": false }
  ];

  const widthMaxClasses = [
    { "class": "wmx-initial", "output": "max-width: initial;", "responsive": true },
    { "class": "wmx1", "output": "max-width: 105px;", "responsive": false },
    { "class": "wmx2", "output": "max-width: 211px;", "responsive": false },
    { "class": "wmx25", "output": "max-width: 25%;", "responsive": false },
    { "class": "wmx3", "output": "max-width: 316px;", "responsive": false },
    { "class": "wmx4", "output": "max-width: 421px;", "responsive": false },
    { "class": "wmx5", "output": "max-width: 527px;", "responsive": false },
    { "class": "wmx50", "output": "max-width: 50%;", "responsive": false },
    { "class": "wmx6", "output": "max-width: 632px;", "responsive": false },
    { "class": "wmx7", "output": "max-width: 737px;", "responsive": false },
    { "class": "wmx8", "output": "max-width: 843px;", "responsive": false },
    { "class": "wmx75", "output": "max-width: 75%;", "responsive": false },
    { "class": "wmx9", "output": "max-width: 948px;", "responsive": false },
    { "class": "wmx10", "output": "max-width: 1053px;", "responsive": false },
    { "class": "wmx11", "output": "max-width: 1159px;", "responsive": false },
    { "class": "wmx12", "output": "max-width: 1264px;", "responsive": false },
    { "class": "wmx100", "output": "max-width: 100%;", "responsive": true },
    { "class": "wmx-screen", "output": "max-width: 100vw;", "responsive": true }
  ];

  const widthMinClasses = [
    { "class": "wmn-initial", "output": "min-width: initial;", "responsive": true },
    { "class": "wmn0", "output": "min-width: 0;", "responsive": false },
    { "class": "wmn1", "output": "min-width: 105px;", "responsive": false },
    { "class": "wmn2", "output": "min-width: 211px;", "responsive": false },
    { "class": "wmn25", "output": "min-width: 25%;", "responsive": false },
    { "class": "wmn3", "output": "min-width: 316px;", "responsive": false },
    { "class": "wmn4", "output": "min-width: 421px;", "responsive": false },
    { "class": "wmn5", "output": "min-width: 527px;", "responsive": false },
    { "class": "wmn50", "output": "min-width: 50%;", "responsive": false },
    { "class": "wmn6", "output": "min-width: 632px;", "responsive": false },
    { "class": "wmn7", "output": "min-width: 737px;", "responsive": false },
    { "class": "wmn75", "output": "min-width: 75%;", "responsive": false },
    { "class": "wmn8", "output": "min-width: 843px;", "responsive": false },
    { "class": "wmn9", "output": "min-width: 948px;", "responsive": false },
    { "class": "wmn10", "output": "min-width: 1053px;", "responsive": false },
    { "class": "wmn11", "output": "min-width: 1159px;", "responsive": false },
    { "class": "wmn12", "output": "min-width: 1264px;", "responsive": false },
    { "class": "wmn100", "output": "min-width: 100%;", "responsive": true }
  ];

  const heightClasses = [
    { "class": "h0", "output": "height: 0;", "responsive": false },
    { "class": "h2", "output": "height: 2px;", "responsive": false },
    { "class": "h4", "output": "height: 4px;", "responsive": false },
    { "class": "h6", "output": "height: 6px;", "responsive": false },
    { "class": "h8", "output": "height: 8px;", "responsive": false },
    { "class": "h12", "output": "height: 12px;", "responsive": false },
    { "class": "h16", "output": "height: 16px;", "responsive": false },
    { "class": "h24", "output": "height: 24px;", "responsive": false },
    { "class": "h32", "output": "height: 32px;", "responsive": false },
    { "class": "h48", "output": "height: 48px;", "responsive": false },
    { "class": "h64", "output": "height: 64px;", "responsive": false },
    { "class": "h96", "output": "height: 96px;", "responsive": false },
    { "class": "h128", "output": "height: 128px;", "responsive": false }
  ];

  const heightStaticClasses = [
    { "class": "hs1", "output": "height: 105px;", "responsive": false },
    { "class": "hs2", "output": "height: 211px;", "responsive": false },
    { "class": "hs3", "output": "height: 316px;", "responsive": false },
    { "class": "hs4", "output": "height: 421px;", "responsive": false },
    { "class": "hs5", "output": "height: 527px;", "responsive": false },
    { "class": "hs6", "output": "height: 632px;", "responsive": false },
    { "class": "hs7", "output": "height: 737px;", "responsive": false },
    { "class": "hs8", "output": "height: 843px;", "responsive": false },
    { "class": "hs9", "output": "height: 948px;", "responsive": false },
    { "class": "hs10", "output": "height: 1053px;", "responsive": false },
    { "class": "hs11", "output": "height: 1159px;", "responsive": false },
    { "class": "hs12", "output": "height: 1264px;", "responsive": false }
  ];

  const heightPercentageClasses = [
    { "class": "h-auto", "output": "height: auto;", "responsive": true },
    { "class": "h0", "output": "height: 0;", "responsive": false },
    { "class": "h100", "output": "height: 100%;", "responsive": true },
    { "class": "h-screen", "output": "height: 100vh;", "responsive": true }
  ];

  const heightMinClasses = [
    { "class": "hmn-initial", "output": "min-height: initial;", "responsive": true },
    { "class": "hmn0", "output": "min-height: 0;", "responsive": false },
    { "class": "hmn1", "output": "min-height: 105px;", "responsive": false },
    { "class": "hmn2", "output": "min-height: 211px;", "responsive": false },
    { "class": "hmn3", "output": "min-height: 316px;", "responsive": false },
    { "class": "hmn4", "output": "min-height: 421px;", "responsive": false },
    { "class": "hmn5", "output": "min-height: 527px;", "responsive": false },
    { "class": "hmn6", "output": "min-height: 632px;", "responsive": false },
    { "class": "hmn7", "output": "min-height: 737px;", "responsive": false },
    { "class": "hmn8", "output": "min-height: 843px;", "responsive": false },
    { "class": "hmn9", "output": "min-height: 948px;", "responsive": false },
    { "class": "hmn10", "output": "min-height: 1053px;", "responsive": false },
    { "class": "hmn11", "output": "min-height: 1159px;", "responsive": false },
    { "class": "hmn12", "output": "min-height: 1264px;", "responsive": false },
    { "class": "hmn100", "output": "min-height: 100%;", "responsive": true }
  ];

  const heightMaxClasses = [
    { "class": "hmx-initial", "output": "max-height: initial;", "responsive": true },
    { "class": "hmx1", "output": "max-height: 105px;", "responsive": false },
    { "class": "hmx2", "output": "max-height: 211px;", "responsive": false },
    { "class": "hmx3", "output": "max-height: 316px;", "responsive": false },
    { "class": "hmx4", "output": "max-height: 421px;", "responsive": false },
    { "class": "hmx5", "output": "max-height: 527px;", "responsive": false },
    { "class": "hmx6", "output": "max-height: 632px;", "responsive": false },
    { "class": "hmx7", "output": "max-height: 737px;", "responsive": false },
    { "class": "hmx8", "output": "max-height: 843px;", "responsive": false },
    { "class": "hmx9", "output": "max-height: 948px;", "responsive": false },
    { "class": "hmx10", "output": "max-height: 1053px;", "responsive": false },
    { "class": "hmx11", "output": "max-height: 1159px;", "responsive": false },
    { "class": "hmx12", "output": "max-height: 1264px;", "responsive": false },
    { "class": "hmx100", "output": "max-height: 100%;", "responsive": true },
    { "class": "hmx-screen", "output": "max-height: 100vh;", "responsive": true }
  ];
</script>

## Widths

### Width classes

Width classes are provided at each fixed stop of our pixel-based sizing scale.

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each widthClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Width examples

```html
<div class="w2">…</div>
<div class="w4">…</div>
<div class="w6">…</div>
<div class="w8">…</div>
<div class="w12">…</div>
<div class="w16">…</div>
<div class="w24">…</div>
<div class="w32">…</div>
<div class="w48">…</div>
<div class="w64">…</div>
<div class="w96">…</div>
<div class="w128">…</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono">
  <div class="d-flex g2 fd-column">
    <div class="d-flex g4">
      <div class="flex--item w2 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w2</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w4 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w4</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w6 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w6</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w8 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w8</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w12 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w12</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w16 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w16</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w24 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w24</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w32 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w32</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w48 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w48</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w64 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w64</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w96 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w96</div>
    </div>
    <div class="d-flex g4">
      <div class="flex--item w128 bg-black-200 ba bc-black-225"></div>
      <div class="flex--item">.w128</div>
    </div>
  </div>
</div>

## Fluid width

### Fluid width classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each widthPercentageClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Fluid width examples

```html
<div class="w0">…</div>
<div class="w10">…</div>
<div class="w20">…</div>
<div class="w25">…</div>
<div class="w30">…</div>
<div class="w33">…</div>
<div class="w40">…</div>
<div class="w50">…</div>
<div class="w60">…</div>
<div class="w70">…</div>
<div class="w75">…</div>
<div class="w80">…</div>
<div class="w90">…</div>
<div class="w100">…</div>
<div class="w-screen">…</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono">
  <div class="d-flex g2 fd-column w100">
    <div class="d-flex">
      <div class="p16 w100 bg-black-200 ba bc-black-225">.w100</div>
    </div>
    <div class="d-flex g4">
      <div class="p16 w10 bg-black-200 ba bc-black-225">.w10</div>
      <div class="p16 w90 bg-black-200 ba bc-black-225">.w90</div>
    </div>
    <div class="d-flex g4">
      <div class="p16 w20 bg-black-200 ba bc-black-225">.w20</div>
      <div class="p16 w80 bg-black-200 ba bc-black-225">.w80</div>
    </div>
    <div class="d-flex g4">
      <div class="p16 w25 bg-black-200 ba bc-black-225">.w25</div>
      <div class="p16 w75 bg-black-200 ba bc-black-225">.w75</div>
    </div>
    <div class="d-flex g4">
      <div class="p16 w30 bg-black-200 ba bc-black-225">.w30</div>
      <div class="p16 w70 bg-black-200 ba bc-black-225">.w70</div>
    </div>
    <div class="d-flex g4">
      <div class="p16 w33 bg-black-200 ba bc-black-225">.w33</div>
      <div class="p16 w66 bg-black-200 ba bc-black-225">.w66</div>
    </div>
    <div class="d-flex g4">
      <div class="p16 w40 bg-black-200 ba bc-black-225">.w40</div>
      <div class="p16 w60 bg-black-200 ba bc-black-225">.w60</div>
    </div>
    <div class="d-flex g4">
      <div class="p16 w50 bg-black-200 ba bc-black-225">.w50</div>
      <div class="p16 w50 bg-black-200 ba bc-black-225">.w50</div>
    </div>
    <div class="d-flex">
      <div class="p16 w-screen bg-black-200 ba bc-black-225">.w-screen</div>
    </div>
  </div>
</div>

## Static widths

Static widths are based on the full width of our 12-column grid. The grid is defined in `rems`, which are tied to the base font size. At the default font size, the full width is `1264px`. A single column is approximately `105px`.

At the smallest breakpoint, our font size is reduced, and these static widths are therefore also reduced.

### Static width classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each widthStaticClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Static width examples

```html
<div class="ws1">…</div>
<div class="ws2">…</div>
<div class="ws3">…</div>
<div class="ws4">…</div>
<div class="ws5">…</div>
<div class="ws6">…</div>
<div class="ws7">…</div>
<div class="ws8">…</div>
<div class="ws9">…</div>
<div class="ws10">…</div>
<div class="ws11">…</div>
<div class="ws12">…</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono overflow-x-scroll" tabindex="0">
  <div class="d-flex g2 fd-column ws12">
    <div class="flex--item p16 ws1 bg-black-200 ba bc-black-225">.ws1</div>
    <div class="flex--item p16 ws2 bg-black-200 ba bc-black-225">.ws2</div>
    <div class="flex--item p16 ws3 bg-black-200 ba bc-black-225">.ws3</div>
    <div class="flex--item p16 ws4 bg-black-200 ba bc-black-225">.ws4</div>
    <div class="flex--item p16 ws5 bg-black-200 ba bc-black-225">.ws5</div>
    <div class="flex--item p16 ws6 bg-black-200 ba bc-black-225">.ws6</div>
    <div class="flex--item p16 ws7 bg-black-200 ba bc-black-225">.ws7</div>
    <div class="flex--item p16 ws8 bg-black-200 ba bc-black-225">.ws8</div>
    <div class="flex--item p16 ws9 bg-black-200 ba bc-black-225">.ws9</div>
    <div class="flex--item p16 ws10 bg-black-200 ba bc-black-225">.ws10</div>
    <div class="flex--item p16 ws11 bg-black-200 ba bc-black-225">.ws11</div>
    <div class="flex--item p16 ws12 bg-black-200 ba bc-black-225">.ws12</div>
  </div>
</div>

## Max width

### Max width classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each widthMaxClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Max width examples

```html
<div class="wmx-initial">…</div>
<div class="wmx1">…</div>
<div class="wmx2">…</div>
<div class="wmx25">…</div>
<div class="wmx3">…</div>
<div class="wmx4">…</div>
<div class="wmx5">…</div>
<div class="wmx50">…</div>
<div class="wmx6">…</div>
<div class="wmx7">…</div>
<div class="wmx75">…</div>
<div class="wmx8">…</div>
<div class="wmx9">…</div>
<div class="wmx10">…</div>
<div class="wmx11">…</div>
<div class="wmx12">…</div>
<div class="wmx100">…</div>
<div class="wmx-screen">…</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono overflow-x-scroll" tabindex="0">
  <div class="d-flex g2 fd-column ws12">
    <div class="flex--item p16 wmx1 bg-black-200 ba bc-black-225">.wmx1</div>
    <div class="flex--item p16 wmx2 bg-black-200 ba bc-black-225">.wmx2</div>
    <div class="flex--item p16 wmx25 bg-black-200 ba bc-black-225">.wmx25</div>
    <div class="flex--item p16 wmx3 bg-black-200 ba bc-black-225">.wmx3</div>
    <div class="flex--item p16 wmx4 bg-black-200 ba bc-black-225">.wmx4</div>
    <div class="flex--item p16 wmx5 bg-black-200 ba bc-black-225">.wmx5</div>
    <div class="flex--item p16 wmx50 bg-black-200 ba bc-black-225">.wmx50</div>
    <div class="flex--item p16 wmx6 bg-black-200 ba bc-black-225">.wmx6</div>
    <div class="flex--item p16 wmx7 bg-black-200 ba bc-black-225">.wmx7</div>
    <div class="flex--item p16 wmx75 bg-black-200 ba bc-black-225">.wmx75</div>
    <div class="flex--item p16 wmx8 bg-black-200 ba bc-black-225">.wmx8</div>
    <div class="flex--item p16 wmx9 bg-black-200 ba bc-black-225">.wmx9</div>
    <div class="flex--item p16 wmx10 bg-black-200 ba bc-black-225">.wmx10</div>
    <div class="flex--item p16 wmx11 bg-black-200 ba bc-black-225">.wmx11</div>
    <div class="flex--item p16 wmx12 bg-black-200 ba bc-black-225">.wmx12</div>
    <div class="flex--item p16 wmx-screen bg-black-200 ba bc-black-225">.wmx-screen</div>
  </div>
</div>

## Min width

### Min width classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each widthMinClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Min width examples

```html
<div class="wmn-initial">…</div>
<div class="wmn0">…</div>
<div class="wmn1">…</div>
<div class="wmn2">…</div>
<div class="wmn25">…</div>
<div class="wmn3">…</div>
<div class="wmn4">…</div>
<div class="wmn5">…</div>
<div class="wmn50">…</div>
<div class="wmn6">…</div>
<div class="wmn7">…</div>
<div class="wmn75">…</div>
<div class="wmn8">…</div>
<div class="wmn9">…</div>
<div class="wmn10">…</div>
<div class="wmn11">…</div>
<div class="wmn12">…</div>
<div class="wmn100">…</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono overflow-x-scroll" tabindex="0">
  <div class="d-flex g2 fd-column">
    <div class="flex--item p16 wmn0 bg-black-200 ba bc-black-225">.wmn0</div>
    <div class="flex--item p16 wmn1 bg-black-200 ba bc-black-225">.wmn1</div>
    <div class="flex--item p16 wmn2 bg-black-200 ba bc-black-225">.wmn2</div>
    <div class="flex--item p16 wmn25 bg-black-200 ba bc-black-225">.wmn25</div>
    <div class="flex--item p16 wmn3 bg-black-200 ba bc-black-225">.wmn3</div>
    <div class="flex--item p16 wmn4 bg-black-200 ba bc-black-225">.wmn4</div>
    <div class="flex--item p16 wmn5 bg-black-200 ba bc-black-225">.wmn5</div>
    <div class="flex--item p16 wmn50 bg-black-200 ba bc-black-225">.wmn50</div>
    <div class="flex--item p16 wmn6 bg-black-200 ba bc-black-225">.wmn6</div>
    <div class="flex--item p16 wmn7 bg-black-200 ba bc-black-225">.wmn7</div>
    <div class="flex--item p16 wmn75 bg-black-200 ba bc-black-225">.wmn75</div>
    <div class="flex--item p16 wmn8 bg-black-200 ba bc-black-225">.wmn8</div>
    <div class="flex--item p16 wmn9 bg-black-200 ba bc-black-225">.wmn9</div>
    <div class="flex--item p16 wmn10 bg-black-200 ba bc-black-225">.wmn10</div>
    <div class="flex--item p16 wmn11 bg-black-200 ba bc-black-225">.wmn11</div>
    <div class="flex--item p16 wmn12 bg-black-200 ba bc-black-225">.wmn12</div>
  </div>
</div>

## Height

### Height classes

Height classes are provided at each fixed stop of our sizing scale.

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each heightClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Height examples

```html
<div class="h2">…</div>
<div class="h4">…</div>
<div class="h6">…</div>
<div class="h8">…</div>
<div class="h12">…</div>
<div class="h16">…</div>
<div class="h24">…</div>
<div class="h32">…</div>
<div class="h48">…</div>
<div class="h64">…</div>
<div class="h96">…</div>
<div class="h128">…</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono">
  <div class="d-flex g8 fd-column">
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h2</div>
        <div class="flex--item h2 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h4</div>
        <div class="flex--item h4 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h6</div>
        <div class="flex--item h6 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h8</div>
        <div class="flex--item h8 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h12</div>
        <div class="flex--item h12 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h16</div>
        <div class="flex--item h16 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h24</div>
        <div class="flex--item h24 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h32</div>
        <div class="flex--item h32 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h48</div>
        <div class="flex--item h48 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h64</div>
        <div class="flex--item h64 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h96</div>
        <div class="flex--item h96 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
    <div class="flex--item">
      <div class="d-flex g4 fd-column">
        <div class="flex--item">.h128</div>
        <div class="flex--item h128 bg-black-200 ba bc-black-225"></div>
      </div>
    </div>
  </div>
</div>

## Static Height

### Static height classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each heightStaticClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Fluid height classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each heightPercentageClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Min height

### Min height classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each heightMinClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Max height

### Max height classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell2">Class</th>
        <th scope="col">Output</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each heightMaxClasses as size}
        <tr class="ff-mono fs-caption">
          <th scope="row" class="p8"><code class="stacks-code">.{size.class}</code></th>
          <td class="p8">{size.output}</td>
          <td class="ta-center">
            <Icon src={size.responsive ? IconCheckFillCircle : IconCrossCircle} class={size.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

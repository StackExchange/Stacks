---
title: Border radius
description: Stacks provides atomic classes for border radius.
updated: 2025-12-05
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossCircle } from '@stackoverflow/stacks-icons';

  const borderRadius = [
    {
      class: "bar0",
      output: "border-radius: 0",
      define: "Apply a border radius of 0 to all corners",
      responsive: true
    },
    {
      class: "btlr0",
      output: "border-top-left-radius: 0",
      define: "Apply a border radius of 0 to the top left corner",
      responsive: false
    },
    {
      class: "btrr0",
      output: "border-top-right-radius: 0",
      define: "Apply a border radius of 0 to the top right corner",
      responsive: false
    },
    {
      class: "bblr0",
      output: "border-bottom-left-radius: 0",
      define: "Apply a border radius of 0 to the bottom left corner",
      responsive: false
    },
    {
      class: "bbrr0",
      output: "border-bottom-right-radius: 0",
      define: "Apply a border radius of 0 to the bottom right corner",
      responsive: false
    },
    {
      class: "btr0",
      output: "border-top-left-radius: 0; border-top-right-radius: 0",
      define: "Apply a border radius of 0 to the top corners",
      responsive: false
    },
    {
      class: "brr0",
      output: "border-top-right-radius: 0; border-bottom-right-radius: 0",
      define: "Apply a border radius of 0 to the right corners",
      responsive: false
    },
    {
      class: "bbr0",
      output: "border-bottom-left-radius: 0; border-bottom-right-radius: 0",
      define: "Apply a border radius of 0 to the bottom corners",
      responsive: false
    },
    {
      class: "blr0",
      output: "border-bottom-left-radius: 0; border-top-left-radius: 0",
      define: "Apply a border radius of 0 to the left corners",
      responsive: false
    },
    {
      class: "bar-md",
      output: "border-radius: 10px",
      define: "Apply a border radius of 10px to all corners",
      responsive: false
    },
    {
      class: "btlr-md",
      output: "border-top-left-radius: 10px",
      define: "Apply a border radius of 10px to the top left corner",
      responsive: false
    },
    {
      class: "btrr-md",
      output: "border-top-right-radius: 10px",
      define: "Apply a border radius of 10px to the top right corner",
      responsive: false
    },
    {
      class: "bblr-md",
      output: "border-bottom-left-radius: 10px",
      define: "Apply a border radius of 10px to the bottom left corner",
      responsive: false
    },
    {
      class: "bbrr-md",
      output: "border-bottom-right-radius: 10px",
      define: "Apply a border radius of 10px to the bottom right corner",
      responsive: false
    },
    {
      class: "btr-md",
      output: "border-top-left-radius: 10px; border-top-right-radius: 10px",
      define: "Apply a border radius of 10px to the top corners",
      responsive: false
    },
    {
      class: "brr-md",
      output: "border-top-right-radius: 10px; border-bottom-right-radius: 10px",
      define: "Apply a border radius of 10px to the right corners",
      responsive: false
    },
    {
      class: "bbr-md",
      output: "border-bottom-left-radius: 10px; border-bottom-right-radius: 10px",
      define: "Apply a border radius of 10px to the bottom corners",
      responsive: false
    },
    {
      class: "blr-md",
      output: "border-bottom-left-radius: 10px; border-top-left-radius: 10px",
      define: "Apply a border radius of 10px to the left corners",
      responsive: false
    },
    {
      class: "bar-pill",
      output: "border-radius: 1000px",
      define: "Apply a border radius of 1000px to each corner for a 100% rounding of the left and right corners",
      responsive: false
    },
    {
      class: "bar-circle",
      output: "border-radius: 100%",
      define: "Apply a border radius of 100% to each corner circular appearance",
      responsive: false
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Abbreviation</th>
        <th class="s-table--cell4" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th scope="col">
          <a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each borderRadius as border}
        <tr>
          <th scope="row"><code class="stacks-code">{border.class}</code></th>
          <th class="ff-mono">{border.output}</th>
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

### All corners

```
<div class="bar0">0px Border radius</div>
<div class="bar-md">10px Border radius</div>
<div class="bar-circle">Circle Border radius</div>
<div class="bar-pill">1000px Border radius</div>
```

<div class="d-flex w100 g8 fw-wrap">
  <div class="flex--item flex__center p12 bg-black-200 bar0 ba bc-black-225">0px Border Radius</div>
  <div class="flex--item flex__center p12 bg-black-200 bar-md ba bc-black-225">10px Border Radius</div>
  <div class="flex--item flex__center p8 bg-black-200 bar-circle ba bc-black-225 ta-center w64">Circle Border Radius</div>
  <div class="flex--item flex__center p12 bg-black-200 bar-pill ba bc-black-225">1000px Border Radius</div>
</div>

### Top left corner

```
<div class="btlr0">0px Top Left Border Radius</div>
<div class="btlr-md">10px Top Left Border Radius</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex w100 g8 fw-wrap">
    <div class="flex--item flex__center p12 bg-black-200 btlr0 ba bc-black-225">0px Top Left Border Radius</div>
    <div class="flex--item flex__center p12 bg-black-200 btlr-md ba bc-black-225">10px Top Left Border Radius</div>
  </div>
</div>

### Top right corner

```
<div class="btrr0">0px Top Right Border Radius</div>
<div class="btrr-md">10px Top Right Border Radius</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex w100 g8 fw-wrap">
    <div class="flex--item flex__center p12 bg-black-200 btrr0 ba bc-black-225">0px Top Right Border Radius</div>
    <div class="flex--item flex__center p12 bg-black-200 btrr-md ba bc-black-225">10px Top Right Border Radius</div>
  </div>
</div>

### Bottom right corner

```
<div class="bbrr0">0px Bottom Right Border Radius</div>
<div class="bbrr-md">10px Bottom Right Border Radius</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex w100 g8 fw-wrap">
    <div class="flex--item flex__center p12 bg-black-200 bbrr0 ba bc-black-225">0px Bottom Right Border Radius</div>
    <div class="flex--item flex__center p12 bg-black-200 bbrr-md ba bc-black-225">10px Bottom Right Border Radius</div>
  </div>
</div>

### Bottom left corner

```
<div class="bblr0">0px Bottom Left Border Radius</div>
<div class="bblr-md">10px Bottom Left Border Radius</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex w100 g8 fw-wrap">
    <div class="flex--item flex__center p12 bg-black-200 bblr0 ba bc-black-225">0px Bottom Left Border Radius</div>
    <div class="flex--item flex__center p12 bg-black-200 bblr-md ba bc-black-225">10px Bottom Left Border Radius</div>
  </div>
</div>

### Top corners

```
<div class="btr0">0px Top Border Radius</div>
<div class="btr-md">10px Top Border Radius</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex w100 g8 fw-wrap">
    <div class="flex--item flex__center p12 bg-black-200 btr0 ba bc-black-225">0px Top Border Radius</div>
    <div class="flex--item flex__center p12 bg-black-200 btr-md ba bc-black-225">10px Top Border Radius</div>
  </div>
</div>

### Bottom corners

```
<div class="bbr0">0px Bottom Border Radius</div>
<div class="bbr-md">10px Bottom Border Radius</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex w100 g8 fw-wrap">
    <div class="flex--item flex__center p12 bg-black-200 bbr0 ba bc-black-225">0px Bottom Border Radius</div>
    <div class="flex--item flex__center p12 bg-black-200 bbr-md ba bc-black-225">10px Bottom Border Radius</div>
  </div>
</div>

### Left corners

```
<div class="blr0">0px Left Border Radius</div>
<div class="blr-md">10px Left Border Radius</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex w100 g8 fw-wrap">
    <div class="flex--item flex__center p12 bg-black-200 blr0 ba bc-black-225">0px Left Border Radius</div>
    <div class="flex--item flex__center p12 bg-black-200 blr-md ba bc-black-225">10px Left Border Radius</div>
  </div>
</div>

### Right corners

```
<div class="brr0">0px Right Border Radius</div>
<div class="brr-md">10px Right Border Radius</div>
```

<div class="stacks-preview--example fs-caption ff-mono">
  <div class="d-flex w100 g8 fw-wrap">
    <div class="flex--item flex__center p12 bg-black-200 brr0 ba bc-black-225">0px Right Border Radius</div>
    <div class="flex--item flex__center p12 bg-black-200 brr-md ba bc-black-225">10px Right Border Radius</div>
  </div>
</div>

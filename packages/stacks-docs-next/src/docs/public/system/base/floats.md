---
title: Floats
description: Float and clear atomic classes allow you to change how an element is positioned within the layout. These should be used when possible to help create consistency.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.float-left',  output: 'float: left;',   define: 'Indicates that the element must float on the left side of the parent container.' },
        { class: '.float-right', output: 'float: right;',  define: 'Indicates that the element must float on the right side of the parent container.' },
        { class: '.float-none',  output: 'float: none;',   define: 'Indicates that the element must not float.' },
        { class: '.clearfix',    output: '.clearfix();',    define: 'This class calls the .clearfix(); mixin, which fixes a layout bug. Floating an object takes it out of the DOM order. When all child itmes within a parent container contain a float property then, the parent container will collapse. The .clearfix class forces the parent container to not collapse.' },
        { class: '.clear-left',  output: 'clear: left;',   define: 'Indicates that the element must be moved down to clear past left floats.' },
        { class: '.clear-right', output: 'clear: right;',  define: 'Indicates that the element must be moved down to clear past right floats.' },
        { class: '.clear-both',  output: 'clear: both;',   define: 'Indicates that the element must be moved down to clear past left and right floats.' },
        { class: '.clear-none',  output: 'clear: none;',   define: 'Indicates that the element does not need to be moved down to clear past floats.' },
    ];
</script>

## Classes

<ClassTable {classes} headings={{ define: 'Definition' }} />

## Examples

### Floats

```html
<div class="ps-relative clearfix">
    <div class="float-none">…</div>
    <div class="float-left">…</div>
    <div class="float-right">…</div>
</div>
```

<Example>
  <div class="ps-relative clearfix fc-black-600 ff-mono">
    <div class="ps-relative float-none my4 w50 bg-black-200 p12 ba bc-black-225">.float-none</div>
    <div class="ps-relative float-left my4 w25 bg-black-200 p12 ba bc-black-225">.float-left</div>
    <div class="ps-relative float-right my4 w25 bg-black-200 p12 ba bc-black-225">.float-right</div>
  </div>
</Example>

### Clears

```html
<div class="ps-relative clearfix">
    <div class="float-left">…</div>
    <div class="float-left">…</div>
    <div class="clear-left">…</div>
</div>
<div class="ps-relative clearfix">
    <div class="float-right">…</div>
    <div class="float-right">…</div>
    <div class="clear-right">…</div>
</div>
<div class="ps-relative clearfix">
    <div class="float-left">…</div>
    <div class="float-right">…</div>
    <div class="clear-both">…</div>
</div>
```

<Example>
  <div class="clearfix fc-black-600 ff-mono mb24">
    <div class="ps-relative float-left mb12 mr12 w25 bg-black-200 p12 ba bc-black-225">.float-left</div>
    <div class="ps-relative float-left mb12 mr12 w25 bg-black-200 p12 ba bc-black-225">.float-left</div>
    <div class="ps-relative clear-left w25 bg-black-200 p12 ba bc-black-225">.clear-left</div>
  </div>
  <div class="clearfix fc-black-600 ff-mono mb48">
    <div class="ps-relative float-right mb12 mr12 w25 bg-black-200 p12 ba bc-black-225">.float-right</div>
    <div class="ps-relative float-right mb12 mr12 w25 bg-black-200 p12 ba bc-black-225">.float-right</div>
    <div class="ps-relative clear-right w25 bg-black-200 p12 ba bc-black-225">.clear-right</div>
  </div>
  <div class="clearfix fc-black-600 ff-mono">
    <div class="ps-relative float-left mb12 mr12 w25 bg-black-200 p12 ba bc-black-225">.float-left</div>
    <div class="ps-relative float-right mb12 mr12 w25 bg-black-200 p12 ba bc-black-225">.float-right</div>
    <div class="ps-relative clear-both mr12 w25 bg-black-200 p12 ba bc-black-225">.clear-both</div>
  </div>
</Example>

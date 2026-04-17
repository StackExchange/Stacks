---
title: Floats
description: Float and clear atomic classes allow you to change how an element is positioned within the layout. These should be used when possible to help create consistency.
---

<script lang="ts">
  const floatClasses = [
    {
      class: 'float-left',
      output: 'float: left;',
      define: 'Indicates that the element must float on the left side of the parent container.'
    },
    {
      class: 'float-right',
      output: 'float: right;',
      define: 'Indicates that the element must float on the right side of the parent container.'
    },
    {
      class: 'float-none',
      output: 'float: none;',
      define: 'Indicates that the element must not float.'
    },
    {
      class: 'clearfix',
      output: '.clearfix();',
      define: 'This class calls the <code class="stacks-code">.clearfix();</code> mixin, which fixes a layout bug. Floating an object takes it out of the DOM order. When all child itmes within a parent container contain a float property then, the parent container will collapse. The <code class="stacks-code">.clearfix</code> class forces the parent container to not collapse.'
    },
    {
      class: 'clear-left',
      output: 'clear: left;',
      define: 'Indicates that the element must be moved down to clear past <em>left</em> floats.'
    },
    {
      class: 'clear-right',
      output: 'clear: right;',
      define: 'Indicates that the element must be moved down to clear past <em>right</em> floats.'
    },
    {
      class: 'clear-both',
      output: 'clear: both;',
      define: 'Indicates that the element must be moved down to clear past <em>left and right</em> floats.'
    },
    {
      class: 'clear-none',
      output: 'clear: none;',
      define: 'Indicates that the element does not need to be moved down to clear past floats.'
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell2" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody class="fs-caption">
      {#each floatClasses as item}
        <tr>
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td class="p8"><p class="mb0">{@html item.define}</p></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

### Floats

```html
<div class="ps-relative clearfix">
    <div class="float-none">…</div>
    <div class="float-left">…</div>
    <div class="float-right">…</div>
</div>
```

<div class="stacks-preview--example ps-relative fs-caption ff-mono">
  <div class="ps-relative clearfix fc-black-600 ff-mono">
    <div class="ps-relative float-none my4 w50 bg-black-200 p12 ba bc-black-225">.float-none</div>
    <div class="ps-relative float-left my4 w25 bg-black-200 p12 ba bc-black-225">.float-left</div>
    <div class="ps-relative float-right my4 w25 bg-black-200 p12 ba bc-black-225">.float-right</div>
  </div>
</div>

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

<div class="stacks-preview--example fs-caption ff-mono">
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
</div>

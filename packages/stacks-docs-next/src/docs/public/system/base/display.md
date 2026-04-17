---
title: Display
description: Display atomic classes allow you to change an element's display quickly.
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossCircle } from '@stackoverflow/stacks-icons';

  const displayClasses = [
    {
      class: 'd-block',
      output: 'display: block;',
      define: 'This turns any element into a block-level element.',
      responsive: true,
      print: true
    },
    {
      class: 'd-inline',
      output: 'display: inline;',
      define: 'Turns any element into an inline element that flows like text.',
      responsive: true,
      print: false
    },
    {
      class: 'd-inline-block',
      output: 'display: inline-block;',
      define: 'Turns any element into a block-level box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would)',
      responsive: true,
      print: false
    },
    {
      class: 'd-flex',
      output: 'display: flex;',
      define: 'Lays out its content according to the flexbox model.',
      responsive: true,
      print: false
    },
    {
      class: 'd-inline-flex',
      output: 'display: inline-flex;',
      define: 'This makes the element behave like an inline element and lays out its content according to the flexbox model.',
      responsive: true,
      print: false
    },
    {
      class: 'd-grid',
      output: 'display: grid;',
      define: 'This lays out an element and its contents using grid layout.',
      responsive: true,
      print: false
    },
    {
      class: 'd-inline-grid',
      output: 'display: inline-grid;',
      define: 'This makes the element behave like an inline element and lays out its content according to the grid model.',
      responsive: true,
      print: false
    },
    {
      class: 'd-table',
      output: 'display: table;',
      define: 'This makes your element behave like <code class="stacks-code">table</code> HTML elements. It defines a block-level box.',
      responsive: false,
      print: false
    },
    {
      class: 'd-table-cell',
      output: 'display: table-cell;',
      define: 'These elements behave like <code class="stacks-code">td</code> HTML elements.',
      responsive: false,
      print: false
    },
    {
      class: 'd-none',
      output: 'display: none;',
      define: 'Effectively removes the element from the DOM. Useful for showing / hiding elements.<br/>To hide things when the page is printed, apply <code class="stacks-code">.print:d-none</code>',
      responsive: true,
      print: true
    },
    {
      class: 'd-unset',
      output: 'display: unset;',
      define: 'Removes any display property from the element.',
      responsive: false,
      print: false
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
        <th class="s-table--cell1 ta-center" scope="col"><a class="s-link s-link__inherit" href="/system/develop/conditional-classes#responsive">Responsive?</a></th>
        <th class="s-table--cell1 ta-center" scope="col"><a class="s-link s-link__inherit" href="/system/develop/conditional-classes#print">Print?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each displayClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td><p class="mb0">{@html item.define}</p></td>
          <td class="ta-center">
            <Icon src={item.responsive ? IconCheckFillCircle : IconCrossCircle} class={item.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
          <td class="ta-center">
            <Icon src={item.print ? IconCheckFillCircle : IconCrossCircle} class={item.print ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

---
title: Display
description: Display atomic classes allow you to change an element's display quickly.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.d-block',       output: 'display: block;',        define: 'This turns any element into a block-level element.',                                                                                                                                  responsive: true, print: true },
        { class: '.d-inline',      output: 'display: inline;',       define: 'Turns any element into an inline element that flows like text.',                                                                                                                      responsive: true },
        { class: '.d-inline-block',output: 'display: inline-block;', define: 'Turns any element into a block-level box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would)',              responsive: true },
        { class: '.d-flex',        output: 'display: flex;',         define: 'Lays out its content according to the flexbox model.',                                                                                                                                responsive: true },
        { class: '.d-inline-flex', output: 'display: inline-flex;',  define: 'This makes the element behave like an inline element and lays out its content according to the flexbox model.',                                                                      responsive: true },
        { class: '.d-grid',        output: 'display: grid;',         define: 'This lays out an element and its contents using grid layout.',                                                                                                                       responsive: true },
        { class: '.d-inline-grid', output: 'display: inline-grid;',  define: 'This makes the element behave like an inline element and lays out its content according to the grid model.',                                                                         responsive: true },
        { class: '.d-table',       output: 'display: table;',        define: 'This makes your element behave like table HTML elements. It defines a block-level box.' },
        { class: '.d-table-cell',  output: 'display: table-cell;',   define: 'These elements behave like td HTML elements.' },
        { class: '.d-none',        output: 'display: none;',         define: 'Effectively removes the element from the DOM. Useful for showing / hiding elements. To hide things when the page is printed, apply .print:d-none',                                   responsive: true, print: true },
        { class: '.d-unset',       output: 'display: unset;',        define: 'Removes any display property from the element.' },
    ];
</script>

## Classes

<ClassTable {classes} />

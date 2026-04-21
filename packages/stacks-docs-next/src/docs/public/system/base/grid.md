---
title: "Grid"
description: "Atomic CSS grid classes allow you to quickly add native css grids to your container."
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const columnTemplates: ClassTableRow[] = [
        { class: '.grid__1',    output: 'grid-template-columns: repeat(1, minmax(0, 1fr))',   define: 'Creates a grid layout with 1 column',                                   responsive: true },
        { class: '.grid__2',    output: 'grid-template-columns: repeat(2, minmax(0, 2fr))',   define: 'Creates a grid layout with 2 columns',                                  responsive: true },
        { class: '.grid__3',    output: 'grid-template-columns: repeat(3, minmax(0, 3fr))',   define: 'Creates a grid layout with 3 columns',                                  responsive: true },
        { class: '.grid__4',    output: 'grid-template-columns: repeat(4, minmax(0, 4fr))',   define: 'Creates a grid layout with 4 columns',                                  responsive: true },
        { class: '.grid__5',    output: 'grid-template-columns: repeat(5, minmax(0, 5fr))',   define: 'Creates a grid layout with 5 columns',                                  responsive: true },
        { class: '.grid__6',    output: 'grid-template-columns: repeat(6, minmax(0, 6fr))',   define: 'Creates a grid layout with 6 columns',                                  responsive: true },
        { class: '.grid__7',    output: 'grid-template-columns: repeat(7, minmax(0, 7fr))',   define: 'Creates a grid layout with 7 columns',                                  responsive: true },
        { class: '.grid__8',    output: 'grid-template-columns: repeat(8, minmax(0, 8fr))',   define: 'Creates a grid layout with 8 columns',                                  responsive: true },
        { class: '.grid__9',    output: 'grid-template-columns: repeat(9, minmax(0, 9fr))',   define: 'Creates a grid layout with 9 columns',                                  responsive: true },
        { class: '.grid__10',   output: 'grid-template-columns: repeat(10, minmax(0, 10fr))', define: 'Creates a grid layout with 10 columns',                                 responsive: true },
        { class: '.grid__11',   output: 'grid-template-columns: repeat(11, minmax(0, 11fr))', define: 'Creates a grid layout with 11 columns',                                 responsive: true },
        { class: '.grid__12',   output: 'grid-template-columns: repeat(1, minmax(0, 12fr))',  define: 'Creates a grid layout with 12 columns',                                 responsive: true },
        { class: '.grid__auto', output: 'grid-template-columns: auto 1fr',                    define: 'Creates a grid layout with auto-sized columns based on their content',  responsive: true },
    ];

    const columnSpans: ClassTableRow[] = [
        { class: '.grid--col-all', output: 'grid-column: 1 / -1',  define: 'Span all the columns', responsive: true },
        { class: '.grid--col1',    output: 'grid-column: span 1',   define: 'Span 1 column',        responsive: true },
        { class: '.grid--col2',    output: 'grid-column: span 2',   define: 'Span 2 columns',       responsive: true },
        { class: '.grid--col3',    output: 'grid-column: span 3',   define: 'Span 3 columns',       responsive: true },
        { class: '.grid--col4',    output: 'grid-column: span 4',   define: 'Span 4 columns',       responsive: true },
        { class: '.grid--col5',    output: 'grid-column: span 5',   define: 'Span 5 columns',       responsive: true },
        { class: '.grid--col6',    output: 'grid-column: span 6',   define: 'Span 6 columns',       responsive: true },
        { class: '.grid--col7',    output: 'grid-column: span 7',   define: 'Span 7 columns',       responsive: true },
        { class: '.grid--col8',    output: 'grid-column: span 8',   define: 'Span 8 columns',       responsive: true },
        { class: '.grid--col9',    output: 'grid-column: span 9',   define: 'Span 9 columns',       responsive: true },
        { class: '.grid--col10',   output: 'grid-column: span 10',  define: 'Span 10 columns',      responsive: true },
        { class: '.grid--col11',   output: 'grid-column: span 11',  define: 'Span 11 columns',      responsive: true },
        { class: '.grid--col12',   output: 'grid-column: span 12',  define: 'Span 12 columns',      responsive: true },
    ];

    const rowSpans: ClassTableRow[] = [
        { class: '.grid--row-all', output: 'grid-row: 1 / -1',  define: 'Span all the rows', responsive: true },
        { class: '.grid--row1',    output: 'grid-row: span 1',   define: 'Span 1 row',        responsive: true },
        { class: '.grid--row2',    output: 'grid-row: span 2',   define: 'Span 2 rows',       responsive: true },
        { class: '.grid--row3',    output: 'grid-row: span 3',   define: 'Span 3 rows',       responsive: true },
        { class: '.grid--row4',    output: 'grid-row: span 4',   define: 'Span 4 rows',       responsive: true },
        { class: '.grid--row5',    output: 'grid-row: span 5',   define: 'Span 5 rows',       responsive: true },
        { class: '.grid--row6',    output: 'grid-row: span 6',   define: 'Span 6 rows',       responsive: true },
        { class: '.grid--row7',    output: 'grid-row: span 7',   define: 'Span 7 rows',       responsive: true },
        { class: '.grid--row8',    output: 'grid-row: span 8',   define: 'Span 8 rows',       responsive: true },
        { class: '.grid--row9',    output: 'grid-row: span 9',   define: 'Span 9 rows',       responsive: true },
        { class: '.grid--row10',   output: 'grid-row: span 10',  define: 'Span 10 rows',      responsive: true },
        { class: '.grid--row11',   output: 'grid-row: span 11',  define: 'Span 11 rows',      responsive: true },
        { class: '.grid--row12',   output: 'grid-row: span 12',  define: 'Span 12 rows',      responsive: true },
    ];

    const autoflow: ClassTableRow[] = [
        { class: '.g-af-row',    output: 'grid-auto-flow: row',    define: 'Items are placed by filling each row in turn, adding new rows as necessary. The default.',                                                                                                                                                   responsive: true },
        { class: '.g-af-column', output: 'grid-auto-flow: column', define: 'Items are placed by filling each column in turn, adding new columns as necessary.',                                                                                                                                                         responsive: true },
        { class: '.g-af-dense',  output: 'grid-auto-flow: dense',  define: 'Dense packing algorithm attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.',                               responsive: true },
    ];

    const columnStartEnd: ClassTableRow[] = [
        { class: '.grid--col-start1',  output: 'grid-column-start: 1',  define: 'Start at the 1st column',         responsive: true },
        { class: '.grid--col-start2',  output: 'grid-column-start: 2',  define: 'Start at the 2nd column',         responsive: true },
        { class: '.grid--col-start3',  output: 'grid-column-start: 3',  define: 'Start at the 3rd column',         responsive: true },
        { class: '.grid--col-start4',  output: 'grid-column-start: 4',  define: 'Start at the 4th column',         responsive: true },
        { class: '.grid--col-start5',  output: 'grid-column-start: 5',  define: 'Start at the 5th column',         responsive: true },
        { class: '.grid--col-start6',  output: 'grid-column-start: 6',  define: 'Start at the 6th column',         responsive: true },
        { class: '.grid--col-start7',  output: 'grid-column-start: 7',  define: 'Start at the 7th column',         responsive: true },
        { class: '.grid--col-start8',  output: 'grid-column-start: 8',  define: 'Start at the 8th column',         responsive: true },
        { class: '.grid--col-start9',  output: 'grid-column-start: 9',  define: 'Start at the 9th column',         responsive: true },
        { class: '.grid--col-start10', output: 'grid-column-start: 10', define: 'Start at the 10th column',        responsive: true },
        { class: '.grid--col-start11', output: 'grid-column-start: 11', define: 'Start at the 11th column',        responsive: true },
        { class: '.grid--col-start12', output: 'grid-column-start: 12', define: 'Start at the 12th column',        responsive: true },
        { class: '.grid--col-end2',    output: 'grid-column-end: 2',    define: 'End at the start of 2nd column',  responsive: true },
        { class: '.grid--col-end3',    output: 'grid-column-end: 3',    define: 'End at the start of 3rd column',  responsive: true },
        { class: '.grid--col-end4',    output: 'grid-column-end: 4',    define: 'End at the start of 4th column',  responsive: true },
        { class: '.grid--col-end5',    output: 'grid-column-end: 5',    define: 'End at the start of 5th column',  responsive: true },
        { class: '.grid--col-end6',    output: 'grid-column-end: 6',    define: 'End at the start of 6th column',  responsive: true },
        { class: '.grid--col-end7',    output: 'grid-column-end: 7',    define: 'End at the start of 7th column',  responsive: true },
        { class: '.grid--col-end8',    output: 'grid-column-end: 8',    define: 'End at the start of 8th column',  responsive: true },
        { class: '.grid--col-end9',    output: 'grid-column-end: 9',    define: 'End at the start of 9th column',  responsive: true },
        { class: '.grid--col-end10',   output: 'grid-column-end: 10',   define: 'End at the start of 10th column', responsive: true },
        { class: '.grid--col-end11',   output: 'grid-column-end: 11',   define: 'End at the start of 11th column', responsive: true },
        { class: '.grid--col-end12',   output: 'grid-column-end: 12',   define: 'End at the start of 12th column', responsive: true },
        { class: '.grid--col-end13',   output: 'grid-column-end: 13',   define: 'End at the start of 13th column', responsive: true },
    ];

    const rowStartEnd: ClassTableRow[] = [
        { class: '.grid--row-start1',  output: 'grid-row-start: 1',  define: 'Start at the 1st row',         responsive: true },
        { class: '.grid--row-start2',  output: 'grid-row-start: 2',  define: 'Start at the 2nd row',         responsive: true },
        { class: '.grid--row-start3',  output: 'grid-row-start: 3',  define: 'Start at the 3rd row',         responsive: true },
        { class: '.grid--row-start4',  output: 'grid-row-start: 4',  define: 'Start at the 4th row',         responsive: true },
        { class: '.grid--row-start5',  output: 'grid-row-start: 5',  define: 'Start at the 5th row',         responsive: true },
        { class: '.grid--row-start6',  output: 'grid-row-start: 6',  define: 'Start at the 6th row',         responsive: true },
        { class: '.grid--row-start7',  output: 'grid-row-start: 7',  define: 'Start at the 7th row',         responsive: true },
        { class: '.grid--row-start8',  output: 'grid-row-start: 8',  define: 'Start at the 8th row',         responsive: true },
        { class: '.grid--row-start9',  output: 'grid-row-start: 9',  define: 'Start at the 9th row',         responsive: true },
        { class: '.grid--row-start10', output: 'grid-row-start: 10', define: 'Start at the 10th row',        responsive: true },
        { class: '.grid--row-start11', output: 'grid-row-start: 11', define: 'Start at the 11th row',        responsive: true },
        { class: '.grid--row-start12', output: 'grid-row-start: 12', define: 'Start at the 12th row',        responsive: true },
        { class: '.grid--row-end2',    output: 'grid-row-end: 2',    define: 'End at the start of 2nd row',  responsive: true },
        { class: '.grid--row-end3',    output: 'grid-row-end: 3',    define: 'End at the start of 3rd row',  responsive: true },
        { class: '.grid--row-end4',    output: 'grid-row-end: 4',    define: 'End at the start of 4th row',  responsive: true },
        { class: '.grid--row-end5',    output: 'grid-row-end: 5',    define: 'End at the start of 5th row',  responsive: true },
        { class: '.grid--row-end6',    output: 'grid-row-end: 6',    define: 'End at the start of 6th row',  responsive: true },
        { class: '.grid--row-end7',    output: 'grid-row-end: 7',    define: 'End at the start of 7th row',  responsive: true },
        { class: '.grid--row-end8',    output: 'grid-row-end: 8',    define: 'End at the start of 8th row',  responsive: true },
        { class: '.grid--row-end9',    output: 'grid-row-end: 9',    define: 'End at the start of 9th row',  responsive: true },
        { class: '.grid--row-end10',   output: 'grid-row-end: 10',   define: 'End at the start of 10th row', responsive: true },
        { class: '.grid--row-end11',   output: 'grid-row-end: 11',   define: 'End at the start of 11th row', responsive: true },
        { class: '.grid--row-end12',   output: 'grid-row-end: 12',   define: 'End at the start of 12th row', responsive: true },
        { class: '.grid--row-end13',   output: 'grid-row-end: 13',   define: 'End at the start of 13th row', responsive: true },
    ];

    const alignment: ClassTableRow[] = [
        { class: '.ji-auto',     output: 'justify-items: auto',     define: "Use the parent's justify value.",                                          responsive: true },
        { class: '.ji-center',   output: 'justify-items: center',   define: 'The items are packed flush to each other toward the center of x axis.',    responsive: true },
        { class: '.ji-start',    output: 'justify-items: start',    define: 'The items are packed flush to each other toward the left.',                 responsive: true },
        { class: '.ji-end',      output: 'justify-items: end',      define: 'The items are packed flush to each other toward the right.',                responsive: true },
        { class: '.ji-stretch',  output: 'justify-items: stretch',  define: 'Items stretch to fill the available space',                                responsive: true },
        { class: '.ji-unset',    output: 'justify-items: unset',    define: 'Removes any justification, effectively resetting the value',               responsive: true },
        { class: '.js-auto',     output: 'justify-self: auto',      define: "Use the parent's justify value.",                                          responsive: true },
        { class: '.js-center',   output: 'justify-self: center',    define: 'The item is packed flush to the others toward the center of x axis.',      responsive: true },
        { class: '.js-start',    output: 'justify-self: start',     define: 'The item is packed flush to the others toward the left.',                  responsive: true },
        { class: '.js-end',      output: 'justify-self: end',       define: 'The item is packed flush to the others toward the right.',                 responsive: true },
        { class: '.js-stretch',  output: 'justify-self: stretch',   define: 'Item stretches to fill the available space',                               responsive: true },
        { class: '.js-unset',    output: 'justify-self: unset',     define: 'Removes any justification, effectively resetting the value',               responsive: true },
        { class: '.ai-baseline', output: 'align-items: baseline',   define: "Aligns items along the baseline of a parent's cross axis.",                responsive: true },
        { class: '.ai-center',   output: 'align-items: center',     define: "Centers child elements along the parent's cross axis.",                    responsive: true },
        { class: '.ai-end',      output: 'align-items: end',        define: "Places child elements at the end of the parent's cross axis.",             responsive: true },
        { class: '.ai-start',    output: 'align-items: start',      define: "Places child elements at the start of the parent's cross axis.",           responsive: true },
        { class: '.ai-stretch',  output: 'align-items: stretch',    define: "Stretches child elements along the parent's cross axis.",                  responsive: true },
        { class: '.as-auto',     output: 'align-self: auto;',       define: "Auto re-aligns a child element along the parent's main axis.",             responsive: true },
        { class: '.as-baseline', output: 'align-self: baseline;',   define: "Re-aligns a child element along the baseline of the parent's main axis.",  responsive: true },
        { class: '.as-center',   output: 'align-self: center;',     define: "Centers a child element along the parent's main axis.",                    responsive: true },
        { class: '.as-end',      output: 'align-self: end;',        define: "Re-aligns a child element to the end of the parent's main axis.",          responsive: true },
        { class: '.as-start',    output: 'align-self: start;',      define: "Re-aligns a child element to the start of the parent's main axis.",        responsive: true },
        { class: '.as-stretch',  output: 'align-self: stretch;',    define: "Stretches a child element along the parent's main axis.",                  responsive: true },
    ];
</script>

## Overview

CSS Grids are the most powerful layout system available in CSS. It has two dimensions, meaning it can handle both columns and rows simultaneously, unlike [flex layouts](/product/base/flex) which can only do one at a time. Applying `.d-grid` to a container will lay out its children according to the CSS Grid layout spec. Adding atomic modifying classes will change the layout's behavior. Applying classes to an individual `.grid--item` will change that cell's behavior.

### Examples

```html
<div class="d-grid">
    <div class="grid--item">…</div>
</div>
```

<Example>
    <div class="d-grid g16 grid__4">
        <div class="docs-box grid--item grid--col-all">
            <div>.grid--item</div>
            <div>.grid--col-all</div>
        </div>
        <div class="docs-box grid--item grid--col1 grid--row2">
            <div>.grid--item</div>
            <div>.grid--col1</div>
            <div>.grid--row2</div>
        </div>
        <div class="docs-box bg-black-200 bc-black-225 grid--item grid--col3">
            <div>.grid--item</div>
            <div>.grid--col3</div>
            <div class="mb16">.grid__2</div>
            <div class="d-grid grid__2 g16">
                <div class="docs-box grid--item">.grid--item</div>
                <div class="docs-box grid--item">.grid--item</div>
                <div class="docs-box grid--item">.grid--item</div>
                <div class="docs-box grid--item">.grid--item</div>
            </div>
        </div>
        <div class="docs-box grid--item grid--col2">
            <div>.grid--item</div>
            <div>.grid--col2</div>
        </div>
        <div class="docs-box grid--item grid--col1">
            <div>.grid--item</div>
            <div>.grid--col1</div>
        </div>
        <div class="docs-box grid--item grid--col-all">
            <div>.grid--item</div>
            <div>.grid--col-all</div>
        </div>
    </div>
</Example>

## Columns

To define a discrete number of columns in your grid layout, you can add a `grid__[x]` modifying class.

### Column classes

<ClassTable classes={columnTemplates} />

### Columns examples

```html
<div class="d-grid grid__1">…</div>
<div class="d-grid grid__2">…</div>
<div class="d-grid grid__3">…</div>
<div class="d-grid grid__4">…</div>
<div class="d-grid grid__5">…</div>
<div class="d-grid grid__6">…</div>
<div class="d-grid grid__7">…</div>
<div class="d-grid grid__8">…</div>
<div class="d-grid grid__9">…</div>
<div class="d-grid grid__10">…</div>
<div class="d-grid grid__11">…</div>
<div class="d-grid grid__12">…</div>
<div class="d-grid grid__auto">…</div>
```

<Example>
    <div class="ff-mono d-flex fd-column g16">
        <div class="d-grid g8 grid__1">
            <div class="docs-box grid--item">1</div>
        </div>
        <div class="d-grid g8 grid__2">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
        </div>
        <div class="d-grid g8 grid__3">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
        </div>
        <div class="d-grid g8 grid__4">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
        </div>
        <div class="d-grid g8 grid__5">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
        </div>
        <div class="d-grid g8 grid__6">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
        </div>
        <div class="d-grid g8 grid__7">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
            <div class="docs-box grid--item">7</div>
        </div>
        <div class="d-grid g8 grid__8">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
            <div class="docs-box grid--item">7</div>
            <div class="docs-box grid--item">8</div>
        </div>
        <div class="d-grid g8 grid__9">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
            <div class="docs-box grid--item">7</div>
            <div class="docs-box grid--item">8</div>
            <div class="docs-box grid--item">9</div>
        </div>
        <div class="d-grid g8 grid__10">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
            <div class="docs-box grid--item">7</div>
            <div class="docs-box grid--item">8</div>
            <div class="docs-box grid--item">9</div>
            <div class="docs-box grid--item">10</div>
        </div>
        <div class="d-grid g8 grid__11">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
            <div class="docs-box grid--item">7</div>
            <div class="docs-box grid--item">8</div>
            <div class="docs-box grid--item">9</div>
            <div class="docs-box grid--item">10</div>
            <div class="docs-box grid--item">11</div>
        </div>
        <div class="d-grid g8 grid__12">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
            <div class="docs-box grid--item">7</div>
            <div class="docs-box grid--item">8</div>
            <div class="docs-box grid--item">9</div>
            <div class="docs-box grid--item">10</div>
            <div class="docs-box grid--item">11</div>
            <div class="docs-box grid--item">12</div>
        </div>
        <div class="d-grid g8 grid__auto">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
        </div>
    </div>
</Example>

## Column and row spans

You can apply `grid--col[x]` to your columns, and `grid--row[x]` to your rows to span a specific number of columns or rows.

### Column spanning classes

<ClassTable classes={columnSpans} />

### Column examples

```html
<div class="d-grid grid__12">
    <div class="grid--col-all">…</div>
    <div class="grid--col1">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col3">…</div>
    <div class="grid--col4">…</div>
    <div class="grid--col5">…</div>
    <div class="grid--col6">…</div>
    <div class="grid--col7">…</div>
    <div class="grid--col8">…</div>
    <div class="grid--col9">…</div>
    <div class="grid--col10">…</div>
    <div class="grid--col11">…</div>
    <div class="grid--col12">…</div>
</div>
```

<Example>
    <div class="ff-mono d-flex fd-column g16">
        <div>
            <div class="mb4">.grid--col-all</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col-all"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col1</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col1"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col2</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col3</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col3"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col4</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col4"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col5</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col5"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col6</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col6"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col7</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col7"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col8</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col8"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col9</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col9"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col10</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col10"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col11</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col11"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.grid--col12</div>
            <div class="d-grid grid__12">
                <div class="docs-box h24 grid--col12"></div>
            </div>
        </div>
    </div>
</Example>

### Row classes

<ClassTable classes={rowSpans} />

### Row example

```html
<div class="d-grid grid__4">
    <div class="grid--col2 grid--row4">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
</div>
```

<Example>
    <div class="ff-mono ws-nowrap">
        <div class="d-grid grid__4 g16">
            <div class="docs-box grid--col2 grid--row4">
                <div>.grid--col2</div>
                <div>.grid--row4</div>
            </div>
            <div class="docs-box grid--col2">.grid--col2</div>
            <div class="docs-box grid--col2">.grid--col2</div>
            <div class="docs-box grid--col2">.grid--col2</div>
            <div class="docs-box grid--col2">.grid--col2</div>
        </div>
    </div>
</Example>

## Autoflow

If you have grid items that you don't explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items.

### Autoflow classes

<ClassTable classes={autoflow} />

### Autoflow examples

```html
<div class="d-grid g-af-row">…</div>
<div class="d-grid g-af-column">…</div>
<div class="d-grid g-af-dense">…</div>
```

<Example>
    <div class="ff-mono">
        <div class="mb8">.g-af-row</div>
        <div class="mb32 d-grid g8 g-af-row">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
        </div>
        <div class="mb8">.g-af-column</div>
        <div class="mb32 d-grid g8 g-af-column grid__12">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
            <div class="docs-box grid--item">7</div>
            <div class="docs-box grid--item">8</div>
            <div class="docs-box grid--item">9</div>
            <div class="docs-box grid--item">10</div>
            <div class="docs-box grid--item">11</div>
            <div class="docs-box grid--item">12</div>
        </div>
        <div class="mb8">.g-af-dense</div>
        <div class="d-grid g8 g-af-dense grid__6">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="grid--col4 docs-box">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="grid--col5 docs-box">6</div>
            <div class="docs-box grid--item">7</div>
            <div class="docs-box grid--item">8</div>
            <div class="docs-box grid--item">9</div>
            <div class="docs-box grid--item">10</div>
            <div class="docs-box grid--item">11</div>
            <div class="grid--col6 docs-box">12</div>
        </div>
    </div>
</Example>

## Start and end

If you'd like to offset a column or row and specify its start and end positioning classes, you can apply these atomic classes.

### Column start and end classes

<ClassTable classes={columnStartEnd} expandable />

### Column start and end examples

```html
<div class="d-grid grid__4">
    <div class="grid--col-start1 grid--col-end4">…</div>
    <div class="grid--col-start2 grid--col-end4">…</div>
    <div class="grid--col2 grid--col-end5">…</div>
</div>
```

<Example>
    <div class="ff-mono ws-nowrap">
        <div class="d-grid grid__4 mb16">
            <div class="docs-box grid--col-start1 grid--col-end4">.grid--col-start1 .grid--col-end4</div>
        </div>
        <div class="d-grid grid__4 mb16">
            <div class="docs-box grid--col-start2 grid--col-end4">.grid--col-start2 .grid--col-end4</div>
        </div>
        <div class="d-grid grid__4">
            <div class="docs-box grid--col2 grid--col-end5">.grid--col2 .grid--col-end5</div>
        </div>
    </div>
</Example>

### Row start and end classes

<ClassTable classes={rowStartEnd} expandable />

### Row start and end examples

```html
<div class="d-grid grid__4">
    <div class="grid--col2 grid--row-start2 grid--row-end4">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
</div>
```

<Example>
    <div class="ff-mono ws-nowrap">
        <div class="d-grid grid__4 g16">
            <div class="docs-box grid--col2 grid--row-start2 grid--row-end4">
                <div>.grid--col2</div>
                <div>.grid--row-start2</div>
                <div>.grid--row-end4</div>
            </div>
            <div class="docs-box grid--col2">.grid--col2</div>
            <div class="docs-box grid--col2">.grid--col2</div>
            <div class="docs-box grid--col2">.grid--col2</div>
            <div class="docs-box grid--col2">.grid--col2</div>
        </div>
    </div>
</Example>

## Alignment

On the grid container, you can apply `align-items` to the y axis and `justify-items` to the x axis. On individual items, you can apply `align-self` on the y axis, and `justify-self` on the x axis.

### Alignment classes

<ClassTable classes={alignment} expandable />

### Alignment examples

```html
<div class="d-grid ji-center ai-center">
    <div class="grid--item as-start">…</div>
    <div class="grid--item">…</div>
    <div class="grid--item js-end">…</div>
    …
</div>
```

<Example>
    <div class="ff-mono">
        <div class="mb8">Default</div>
        <div class="d-grid g-af-column mb24">
            <div class="docs-box grid--item">1</div>
            <div class="docs-box grid--item">2</div>
            <div class="docs-box grid--item">3</div>
            <div class="docs-box grid--item">4</div>
            <div class="docs-box grid--item">5</div>
            <div class="docs-box grid--item">6</div>
        </div>
        <div class="mb8">.ji-center .ai-center</div>
        <div class="docs-box d-grid g-af-column ji-center ai-center h96">
            <div class="docs-box grid--item h48 as-start">1 .as-start</div>
            <div class="docs-box grid--item h64">2</div>
            <div class="docs-box grid--item as-stretch">3 .as-stretch</div>
            <div class="docs-box grid--item h64 js-end">4 .js-end</div>
            <div class="docs-box grid--item h64">5</div>
            <div class="docs-box grid--item h64">6</div>
        </div>
    </div>
</Example>

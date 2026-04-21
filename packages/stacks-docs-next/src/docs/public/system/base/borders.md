---
title: Borders
description: Stacks provides atomic classes for borders.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const borderClasses: ClassTableRow[] = [
        { class: '.ba', define: 'All sides',        output: 'border: solid 1px',                                            responsive: true },
        { class: '.bt', define: 'Top',              output: 'border-top: solid 1px',                                        responsive: true },
        { class: '.bb', define: 'Bottom',           output: 'border-bottom: solid 1px',                                     responsive: true },
        { class: '.bl', define: 'Left',             output: 'border-left: solid 1px',                                       responsive: true },
        { class: '.br', define: 'Right',            output: 'border-right: solid 1px',                                      responsive: true },
        { class: '.by', define: 'Top and bottom',   output: 'border-top: solid 1px; border-bottom: solid 1px;' },
        { class: '.bx', define: 'Left and right',   output: 'border-left: solid 1px; border-right: solid 1px;' },
    ];

    const widthClasses: ClassTableRow[] = [
        { class: '.baw0', define: 'Zero, all sides',        output: 'border-width: 0' },
        { class: '.btw0', define: 'Zero, top',              output: 'border-top-width: 0',                                  responsive: true },
        { class: '.bbw0', define: 'Zero, bottom',           output: 'border-bottom-width: 0',                               responsive: true },
        { class: '.blw0', define: 'Zero, left',             output: 'border-left-width: 0',                                 responsive: true },
        { class: '.brw0', define: 'Zero, right',            output: 'border-right-width: 0',                                responsive: true },
        { class: '.byw0', define: 'Zero, top and bottom',   output: 'border-top-width: 0; border-bottom-width: 0;' },
        { class: '.bxw0', define: 'Zero, left and right',   output: 'border-left-width: 0; border-right-width: 0;' },
        { class: '.baw1', define: '1px, all',               output: 'border-width: 1px' },
        { class: '.btw1', define: '1px, top',               output: 'border-top-width: 1px' },
        { class: '.bbw1', define: '1px, bottom',            output: 'border-bottom-width: 1px' },
        { class: '.blw1', define: '1px, left',              output: 'border-left-width: 1px' },
        { class: '.brw1', define: '1px, right',             output: 'border-right-width: 1px' },
        { class: '.byw1', define: '1px, top and bottom',    output: 'border-top-width: 1px; border-bottom-width: 1px;' },
        { class: '.bxw1', define: '1px, left and right',    output: 'border-left-width: 1px; border-right-width: 1px;' },
        { class: '.baw2', define: '2px, all',               output: 'border-width: 2px' },
        { class: '.btw2', define: '2px, top',               output: 'border-top-width: 2px' },
        { class: '.bbw2', define: '2px, bottom',            output: 'border-bottom-width: 2px' },
        { class: '.blw2', define: '2px, left',              output: 'border-left-width: 2px' },
        { class: '.brw2', define: '2px, right',             output: 'border-right-width: 2px' },
        { class: '.byw2', define: '2px, top and bottom',    output: 'border-top-width: 2px; border-bottom-width: 2px;' },
        { class: '.bxw2', define: '2px, left and right',    output: 'border-left-width: 2px; border-right-width: 2px;' },
        { class: '.baw3', define: '4px, all',               output: 'border-width: 4px' },
        { class: '.btw3', define: '4px, top',               output: 'border-top-width: 4px' },
        { class: '.bbw3', define: '4px, bottom',            output: 'border-bottom-width: 4px' },
        { class: '.blw3', define: '4px, left',              output: 'border-left-width: 4px' },
        { class: '.brw3', define: '4px, right',             output: 'border-right-width: 4px' },
        { class: '.byw3', define: '4px, top and bottom',    output: 'border-top-width: 4px; border-bottom-width: 4px;' },
        { class: '.bxw3', define: '4px, left and right',    output: 'border-left-width: 4px; border-right-width: 4px;' },
    ];

    const styleClasses: ClassTableRow[] = [
        { class: '.bas-solid',  define: 'All sides',    output: 'border-style: solid' },
        { class: '.bts-solid',  define: 'Top',          output: 'border-top-style: solid' },
        { class: '.brs-solid',  define: 'Right',        output: 'border-right-style: solid' },
        { class: '.bbs-solid',  define: 'Bottom',       output: 'border-bottom-style: solid' },
        { class: '.bls-solid',  define: 'Left',         output: 'border-left-style: solid' },
        { class: '.bas-dashed', define: 'All sides',    output: 'border-style: dashed' },
        { class: '.bts-dashed', define: 'Top',          output: 'border-top-style: dashed' },
        { class: '.brs-dashed', define: 'Right',        output: 'border-right-style: dashed' },
        { class: '.bbs-dashed', define: 'Bottom',       output: 'border-bottom-style: dashed' },
        { class: '.bls-dashed', define: 'Left',         output: 'border-left-style: dashed' },
    ];
</script>

## Classes

<ClassTable classes={borderClasses} headings={{ define: 'Apply border to' }} />

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

<Example>
    <div class="d-flex g8 fw-wrap">
        {#each borderClasses as item}
            <div class="p12 bg-black-200 {item.class.slice(1)}">{item.define}</div>
        {/each}
    </div>
</Example>

## Width

### Width classes

<ClassTable classes={widthClasses} headings={{ define: 'Border width, side(s)' }} />

### Width examples

```html
<div class="ba">…</div>
<div class="ba brw0">…</div>
<div class="ba bbw0">…</div>
<div class="ba baw2">…</div>
<div class="ba baw3">…</div>
```

<Example>
    <div class="d-flex g8 fw-wrap">
        <div class="p12 bg-black-200 ba">.ba</div>
        <div class="p12 bg-black-200 ba brw0">.ba.brw0</div>
        <div class="p12 bg-black-200 ba bbw0">.ba.bbw0</div>
        <div class="p12 bg-black-200 ba baw2">.ba.baw2</div>
        <div class="p12 bg-black-200 ba baw3">.ba.baw3</div>
    </div>
</Example>

## Style

### Style classes

<ClassTable classes={styleClasses} headings={{ define: 'Side(s)' }} />

### Style examples

```html
<div class="ba bas-solid">…</div>
<div class="ba bas-dashed">…</div>
<div class="ba brs-dashed">…</div>
```

<Example>
    <div class="d-flex g8 ai-center">
        <div class="p12 ba bas-solid bg-black-200">Solid border style</div>
        <div class="p12 ba bas-dashed bg-black-200">Dashed border style</div>
        <div class="p12 ba brs-dashed bg-black-200">Dashed border right style</div>
    </div>
</Example>

## Color

Each color stop is available as a border class. See the [colors documentation](/system/foundation/colors#classes) for all available classes.

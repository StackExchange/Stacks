---
title: Positioning
description: Atomic positioning classes allow you to quickly change an element's position.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const positions: ClassTableRow[] = [
        {
            class: '.ps-absolute',
            output: 'position: absolute;',
            define: 'Absolutely positions an element. Typically is used in conjunction with `top`, `right`, `bottom`, and `left` properties. Note: Absolutely positioning an element takes it out of the DOM flow and puts it automatically above all relatively positioned items which don\'t have a `z-index` assigned.',
            responsive: true,
        },
        {
            class: '.ps-fixed',
            output: 'position: fixed;',
            define: 'Fixes an element within the viewport. Typically is used in conjunction with `top`, `right`, `bottom`, and `left` properties. Note: Fixing an element\'s position, like absolute positioning, takes it out of the DOM flow and puts it automatically above all relatively positioned items.',
            responsive: true,
        },
        {
            class: '.ps-relative',
            output: 'position: relative;',
            define: 'Relatively positions an element in relation to elements around it. The `top` and `bottom` properties specify the vertical offset from its normal position. In the same way the `left` and `right` properties specify the horizontal offset.',
            responsive: true,
        },
        {
            class: '.ps-static',
            output: 'position: static;',
            define: 'An element is positioned according to the document\'s flow. The `top`, `right`, `bottom`, `left`, and `z-index` properties have no effect. This is the default value.',
            responsive: true,
        },
        {
            class: '.ps-sticky',
            output: 'position: sticky;',
            define: 'An element is positioned according to the document\'s flow, and then offset relative to its flow root and containing block. This creates a new stacking context. Note: Sticky elements, by design, will not work inside an element with `overflow:hidden;` or `overflow:auto;` values.',
            responsive: true,
        },
        {
            class: '.ps-unset',
            output: 'position: unset;',
            define: 'Removes previously set `position` value, reverting the element back to the initial browser value.',
            responsive: true,
        },
    ];

    const coordinateAbbreviations: ClassTableRow[] = [
        { class: 't',  define: 'top', responsive: true },
        { class: 'r',  define: 'right', responsive: true },
        { class: 'b',  define: 'bottom', responsive: true },
        { class: 'l',  define: 'left', responsive: true },
        { class: 'i',  define: 'inset', responsive: true },
        { class: 'tn', define: 'negative top', responsive: true },
        { class: 'rn', define: 'negative right', responsive: true },
        { class: 'bn', define: 'negative bottom', responsive: true },
        { class: 'ln', define: 'negative left', responsive: true },
    ];

    const positionValues = ['0', '1px', '2px', '4px', '6px', '8px', '12px', '16px', '24px', '32px', '48px', '64px', '96px', '128px', '50%', '100%'];
    const positionProperties = ['t', 'r', 'b', 'l', 'i'];
    const positionPropertiesNegative = ['t', 'r', 'b', 'l'];
    const positionValuesNegative = ['1px', '2px', '4px', '6px', '8px', '12px', '16px', '24px', '32px', '48px', '64px', '96px', '128px', '50%', '100%'];
</script>

## Classes

<ClassTable classes={positions} expandable />

## Examples

```html
<div class="ps-static">…</div>
<div class="ps-relative">…</div>
<div class="ps-absolute">…</div>
<div class="ps-sticky">…</div>
<div class="ps-fixed">…</div>
<div class="ps-unset">…</div>
```

<Example>
    <div class="overflow-y-scroll fs-caption ff-mono hs2" tabindex="0">
        <div class="d-flex w100 ps-relative">
            <div class="ps-static p12 bg-black-200 ba bc-black-225 ws1 hs1"><strong>.ps-static</strong></div>
            <div class="ps-relative p12 bg-black-200 ba bc-black-225 t32 r24 ws1 hs4"><strong>.ps-relative</strong><br/><br/>.t32<br/>r24</div>
            <div class="ps-absolute p12 bg-black-200 ba bc-black-225 t48 r32 ws1 hs2"><strong>.ps-absolute</strong><br/><br/>.t48<br/>.r32</div>
            <div class="ps-sticky p12 bg-black-200 ba bc-black-225 t64 ws1 hs2"><strong>.ps-sticky</strong><br/><br/>.t64</div>
        </div>
    </div>
</Example>

## Coordinates

Our spacing units aren't limited to margin and padding; they also apply to top, right, left, and bottom declarations. Combined with our position utility classes, you should be able to achieve absolutely-positioned layouts while adhering to Stacks' spacing conventions.

### Coordinate classes

<ClassTable classes={coordinateAbbreviations} headings={{ class: 'Abbreviation', define: 'Definition' }} />

### Coordinate examples

```html
<div class="ps-absolute t12 l12">…</div>
<div class="ps-absolute t48 r24">…</div>
<div class="ps-absolute b48 l48">…</div>
<div class="ps-absolute bn8 rn8">…</div>
<div class="ps-absolute i64">…</div>
```

<Example>
    <div class="ps-relative hs2">
        <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono t12 l12 z-selected">
            .t12 .l12
        </div>
        <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono t48 r24 z-selected">
            .t48 .r24
        </div>
        <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono t50 l50 z-selected">
            .t50 .l50
        </div>
        <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono b48 l48 z-selected">
            .b48 .l48
        </div>
        <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono rn8 bn8 z-selected">
            .rn8 .bn8
        </div>
        <div class="ps-absolute bg-black-200 p12 ba bc-black-225 ff-mono i64 z-base">
            .i64
        </div>
    </div>
</Example>

## Positive coordinates

<div class="overflow-x-auto mb32" tabindex="0" role="region" aria-label="Positive coordinate classes table">
    <table class="s-table s-table__bx-simple fs-caption">
        <thead>
            <tr>
                <th scope="col">Prefix</th>
                {#each positionValues as value}
                    <th scope="col" class="ta-center ff-mono">{value}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each positionProperties as prefix}
                <tr>
                    <th scope="row">{prefix}</th>
                    {#each positionValues as value}
                        {#if prefix === 'i' && (value === '50%' || value === '100%')}
                            <td>-</td>
                        {:else}
                            <td><code>.{prefix}{value.replace('px', '').replace('%', '')}</code></td>
                        {/if}
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

## Negative coordinates

<div class="overflow-x-auto mb32" tabindex="0" role="region" aria-label="Negative coordinate classes table">
    <table class="s-table s-table__bx-simple fs-caption">
        <thead>
            <tr>
                <th scope="col">Prefix</th>
                {#each positionValuesNegative as value}
                    <th scope="col" class="ta-center ff-mono">-{value}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each positionPropertiesNegative as prefix}
                <tr>
                    <th scope="row">{prefix}n</th>
                    {#each positionValuesNegative as value}
                        <td><code>.{prefix}n{value.replace('px', '').replace('%', '')}</code></td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

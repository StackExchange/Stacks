---
title: Flex
description: Stacks provides extensive utility and helper classes for flex layouts. If you are new to flex layouts, check out this <a href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/" rel="external">interactive introduction</a> by Joshua Comeau.
---

<script lang="ts">
    import { Notice, Badge } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const flexItem: ClassTableRow[] = [
        { class: '.flex--item1',  parent: '.flex__allitems1',  output: 'flex-basis: 8.333333333%;' },
        { class: '.flex--item2',  parent: '.flex__allitems2',  output: 'flex-basis: 16.666666667%;' },
        { class: '.flex--item3',  parent: '.flex__allitems3',  output: 'flex-basis: 24.999999999%;' },
        { class: '.flex--item4',  parent: '.flex__allitems4',  output: 'flex-basis: 33.333333332%;' },
        { class: '.flex--item5',  parent: '.flex__allitems5',  output: 'flex-basis: 41.666666665%;' },
        { class: '.flex--item6',  parent: '.flex__allitems6',  output: 'flex-basis: 50%;' },
        { class: '.flex--item7',  parent: '.flex__allitems7',  output: 'flex-basis: 58.333333331%;' },
        { class: '.flex--item8',  parent: '.flex__allitems8',  output: 'flex-basis: 66.666666664%;' },
        { class: '.flex--item9',  parent: '.flex__allitems9',  output: 'flex-basis: 74.999999997%;' },
        { class: '.flex--item10', parent: '.flex__allitems10', output: 'flex-basis: 83.33333333%;' },
        { class: '.flex--item11', parent: '.flex__allitems11', output: 'flex-basis: 91.666666663%;' },
        { class: '.flex--item12', parent: '.flex__allitems12', output: 'flex-basis: 100%;' },
    ];

    const gutter: ClassTableRow[] = [
        { class: '.gs2',  output: '2px' },
        { class: '.gs4',  output: '4px' },
        { class: '.gs6',  output: '6px' },
        { class: '.gs8',  output: '8px' },
        { class: '.gs12', output: '12px' },
        { class: '.gs16', output: '16px' },
        { class: '.gs24', output: '24px' },
        { class: '.gs32', output: '32px' },
        { class: '.gs48', output: '48px' },
        { class: '.gs64', output: '64px' },
        { class: '.gsx',  output: 'Applies margins only to left and right' },
        { class: '.gsy',  output: 'Applies margins only to top and bottom' },
    ];

    const justification: ClassTableRow[] = [
        { class: '.jc-center',        define: "Centers child elements along the parent's main axis.", responsive: true },
        { class: '.jc-end',           define: "Aligns child elements at the end of the parent's main axis.", responsive: true },
        { class: '.jc-space-around',  define: "Equally distributes the remaining space around child elements. Note that this doesn't mean the spaces are visually equal, but that the same space unit is applied to both sides of a child element. The first item would have one unit of space against the container edge, but the next item would have two units of space between itself and the first item.", responsive: true },
        { class: '.jc-space-between', define: "Evenly distributes the space between child elements along a parent's main axis with the first item starting on the start line and the last item on the end line.", responsive: true },
        { class: '.jc-space-evenly',  define: 'The spacing between any two items (and spacing between the edges) are equal.', responsive: true },
        { class: '.jc-start',         define: "Aligns child elements at the start of the parent's main axis.", responsive: true },
    ];

    const alignItems: ClassTableRow[] = [
        { class: '.ai-baseline', define: "Aligns child elements along the baseline of a parent's cross axis.", responsive: true },
        { class: '.ai-center',   define: "Centers child elements along the parent's cross axis.", responsive: true },
        { class: '.ai-end',      define: "Places child elements at the end of the parent's cross axis.", responsive: true },
        { class: '.ai-start',    define: "Places child elements at the start of the parent's cross axis.", responsive: true },
        { class: '.ai-stretch',  define: "Stretches child elements along the parent's cross axis.", responsive: true },
    ];

    const flexDirection: ClassTableRow[] = [
        { class: '.fd-row',            define: 'Sets the flex direction to a row.', responsive: true },
        { class: '.fd-row-reverse',    define: 'Reverses the row flex direction.', responsive: true },
        { class: '.fd-column',         define: 'Sets the flex direction to a column.', responsive: true },
        { class: '.fd-column-reverse', define: 'Reverses the column flex direction.', responsive: true },
    ];

    const alignContent: ClassTableRow[] = [
        { class: '.ac-center',        define: "Distributes child elements starting from the center along a parent's cross axis. This only works with more than one line." },
        { class: '.ac-end',           define: "Distributes child elements starting from the end along a parent's cross axis. This only works with more than one line." },
        { class: '.ac-space-around',  define: "Distributes child elements with space around along a parent's cross axis. This only works with more than one line." },
        { class: '.ac-space-between', define: "Distributes child elements with space between along a parent's cross axis. This only works with more than one line." },
        { class: '.ac-start',         define: "Distributes child elements starting from the start along a parent's cross axis. This only works with more than one line." },
        { class: '.ac-stretch',       define: "Distributes child elements stretching them along a parent's cross axis. This only works with more than one line." },
    ];

    const alignSelf: ClassTableRow[] = [
        { class: '.as-auto',     define: "Auto re-aligns a child element along the parent's main axis based on the ai-[x] value.", responsive: true },
        { class: '.as-baseline', define: "Re-aligns a child element along the baseline of the parent's main axis.", responsive: true },
        { class: '.as-center',   define: "Centers a child element along the parent's main axis.", responsive: true },
        { class: '.as-end',      define: "Re-aligns a child element to the end of the parent's main axis.", responsive: true },
        { class: '.as-start',    define: "Re-aligns a child element to the start of the parent's main axis.", responsive: true },
        { class: '.as-stretch',  define: "Stretches a child element along the parent's main axis.", responsive: true },
    ];

    const flexWrap: ClassTableRow[] = [
        { class: '.fw-wrap',    define: 'Wraps the child cells within a parent.', responsive: true },
        { class: '.fw-reverse', define: 'Reverses the wrap direction.', responsive: true },
        { class: '.fw-nowrap',  define: 'Removes the wrap direction.', responsive: true },
    ];

    const order: ClassTableRow[] = [
        { class: '.order-first', define: 'Places the child element first within a parent container.', responsive: true },
        { class: '.order-last',  define: 'Places the child element last within a parent container.', responsive: true },
    ];

    const flex: ClassTableRow[] = [
        { class: '.fl-grow1',   define: 'Sets flex-grow to allow a flex item to grow to fill any available space.', responsive: true },
        { class: '.fl-grow0',   define: 'Prevents a flex item from growing.', responsive: true },
        { class: '.fl-shrink1', define: 'Allows a flex item to shrink if needed.', responsive: true },
        { class: '.fl-shrink0', define: 'Prevents a flex item from shrinking.', responsive: true },
        { class: '.fl-none',    define: 'Prevents a flex item from growing or shrinking.', responsive: true },
        { class: '.fl-initial', define: 'Allows a flex item to shrink but not grow, taking into account its initial size.', responsive: true },
        { class: '.fl-auto',    define: 'Allows a flex item to grow and shrink, taking into account its initial size.', responsive: true },
        { class: '.fl-equal',   define: "Allow a flex item to grow and shrink as needed, ignoring its initial size. If all children within a flex layout have .fl-equal enabled, they'll be the same size. See also .flex__fl-equal", responsive: true },
    ];

    const helpers: ClassTableRow[] = [
        { class: '.flex__center',     define: "Centers child elements along a parent's main and cross axis." },
        { class: '.flex__fl-shrink0', define: 'Disables shrinking from all child elements' },
        { class: '.flex__fl-equal',   define: 'Makes each child element grow equally' },
    ];
</script>

<style>
  .stacks-flex-example--item {
    background-color: var(--black-200);
    border: var(--su1) solid var(--bc-medium);
    color: var(--fc-dark);
    font-family: var(--ff-mono);
    font-size: var(--fs-caption);
    padding: var(--su8)
  }
</style>

## Basic flex layout

A flex layout is initiated with the `.d-flex` class. By default, `display: flex;` starts a non-wrapping row. To convert it to a column, apply the `.fd-column` atomic class.

```html
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex fd-column">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex g16 fd-column">
        <div>
            <div class="d-flex g4">
                <div><div class="d-flex flex__center stacks-flex-example--item">.flex--item</div></div>
                <div><div class="d-flex flex__center stacks-flex-example--item">.flex--item</div></div>
            </div>
        </div>
        <div>
            <div class="d-flex g4 fd-column">
                <div><div class="d-flex flex__center stacks-flex-example--item">.flex--item</div></div>
                <div><div class="d-flex flex__center stacks-flex-example--item">.flex--item</div></div>
            </div>
        </div>
    </div>
</Example>

## Fluid

By default, all flex items will only be as wide as their content. If you would like a flex item or all the flex items to fill the remaining space, apply the `.fl-grow1` to the individual item, or `.flex__fl-equal` to the parent to apply to all children.

### Fluid examples

```html
<div class="d-flex">
    <div class="flex--item fl-grow1">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex flex__fl-equal">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex g16 fd-column">
        <div>
            <div class="d-flex g4">
                <div class="fl-grow1"><div class="d-flex flex__center h100 stacks-flex-example--item">.flex--item.fl-grow1</div></div>
                <div><div class="d-flex flex__center h100 stacks-flex-example--item">.flex--item</div></div>
            </div>
        </div>
        <div>
            <div class="d-flex g4 flex__fl-equal">
                <div><div class="d-flex flex__center h100 stacks-flex-example--item">.flex--item</div></div>
                <div><div class="d-flex flex__center h100 stacks-flex-example--item">.flex--item</div></div>
                <div><div class="d-flex flex__center h100 stacks-flex-example--item">.flex--item</div></div>
            </div>
        </div>
    </div>
</Example>

## Fixed cells

You can either fix the width of an individual element or fix the width of all child elements within a parent container by setting the width on the parent. The cell widths are based on a 12-column flex layout system.

### Fixed classes

<ClassTable classes={flexItem} headings={{ class: 'Individual Width', parent: 'All Items' }} />

### Fixed examples

```html
<div class="d-flex">
    <div class="flex--item2">…</div>
    <div class="flex--item10">…</div>
</div>
<div class="d-flex">
    <div class="flex--item3">…</div>
    <div class="flex--item6">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex flex__allitems4">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex g32 fd-column">
        <div>
            <div class="mb8 ff-mono">.flex--item[x]</div>
            <div class="bg-black-100 ba bc-black-200 p8">
                <div class="d-flex g4">
                    <div class="flex--item2 stacks-flex-example--item ta-center">.flex--item2</div>
                    <div class="flex--item10 stacks-flex-example--item ta-center">.flex--item10</div>
                </div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.flex--item[x] and standard .flex--item</div>
            <div class="bg-black-100 ba bc-black-200 p8">
                <div class="d-flex g4">
                    <div class="flex--item3 stacks-flex-example--item ta-center">.flex--item3</div>
                    <div class="flex--item6 stacks-flex-example--item ta-center">.flex--item6</div>
                    <div class="flex--item stacks-flex-example--item">.flex--item</div>
                </div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.d-flex.flex__allitems4</div>
            <div class="bg-black-100 ba bc-black-200 p8">
                <div class="d-flex g4 flex__allitems4 fw-wrap">
                    <div class="flex--item stacks-flex-example--item">.flex--item</div>
                    <div class="flex--item stacks-flex-example--item">.flex--item</div>
                    <div class="flex--item stacks-flex-example--item">.flex--item</div>
                    <div class="flex--item stacks-flex-example--item">.flex--item</div>
                </div>
            </div>
        </div>
    </div>
</Example>

## Helpers

We have a few helper classes you can add to a `.d-flex` container that affect the child `.flex--item`s.

### Helper classes

<ClassTable classes={helpers} />

### Helpers examples

```html
<div class="d-flex flex__center">
    <div class="flex--item">…</div>
</div>
<div class="d-flex flex__fl-shrink0">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex flex__fl-equal">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex gy32 fd-column">
        <div>
            <div class="mb8 ff-mono">.flex__center</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex flex__center hs1">
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.flex__fl-shrink0</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 flex__fl-shrink0">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.flex__fl-equal</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 flex__fl-equal">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
    </div>
</Example>

## Nested flex layouts

Flex layouts can be nested within each other. This allows you to create unique, custom layouts without needing to create new, custom code or override existing styles.

### Nested examples

```html
<div class="d-flex">
    <div class="d-flex">
        <div class="flex--item">…</div>
        <div class="flex--item">…</div>
    </div>
    <div class="flex--item2">…</div>
    <div class="flex--item2">…</div>
</div>
```

<Example>
    <div class="d-flex g4">
        <div class="fl-grow1 p12 stacks-flex-example--item">
            <div class="d-flex g12 flex__fl-equal">
                <div><div class="d-flex flex__center stacks-flex-example--item bg-black-150">.flex--item</div></div>
                <div><div class="d-flex flex__center stacks-flex-example--item bg-black-150">.flex--item</div></div>
            </div>
        </div>
        <div class="flex--item2"><div class="d-flex flex__center h100 stacks-flex-example--item">.flex--item2</div></div>
        <div class="flex--item2"><div class="d-flex flex__center h100 stacks-flex-example--item">.flex--item2</div></div>
    </div>
</Example>

## Gutters

<Notice variant="warning" role="note" class="mb16 s-anchors s-anchors__inherit s-anchors__underlined">
    <p><strong>Deprecation:</strong> gutters will be removed in a future release.<br> Please use <a href="/product/base/gap">gap classes</a> to set spacing on flex items.</p>
</Notice>

Sometimes gutters are desired between cells. To do so apply the appropriate class to the parent wrapper. The gutter applies a margin to all sides. The sizes available are the same as <a href="/product/base/spacing">the spacing units</a>.

### Gutter classes

<ClassTable classes={gutter} headings={{ output: 'Size' }} />

### Gutter examples

```html
<div class="d-flex flex__fl-equal gs16">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex flex__fl-equal gs16 gsx">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex flex__fl-equal gs16 gsy">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex gs32 gsy fd-column">
        <div class="bg-orange-200">
            <div class="d-flex flex__allitems6 gs16 fw-wrap">
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16</div></div>
            </div>
        </div>
        <div class="bg-orange-200">
            <div class="d-flex flex__allitems6 gs16 gsx fw-wrap">
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16.gsx — Row gutters only</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16.gsx — Row gutters only</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16.gsx — Row gutters only</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16.gsx — Row gutters only</div></div>
            </div>
        </div>
        <div class="bg-orange-200">
            <div class="d-flex flex__fl-equal fd-column gs16 gsy">
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16.gsy — Column gutters only</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16.gsy — Column gutters only</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16.gsy — Column gutters only</div></div>
                <div class="flex--item"><div class="stacks-flex-example--item">.gs16.gsy — Column gutters only</div></div>
            </div>
        </div>
    </div>
</Example>

### Nested gutters

<Notice variant="warning" role="note" class="mb16 s-anchors s-anchors__inherit s-anchors__underlined">
    <p><strong>Note:</strong> Nested flex layouts with <a href="#gutters">gutter spacing</a> will conflict with each other in unpredictable ways. <strong>TL;DR?</strong> Don't stick a <code>.d-flex</code> directly into a <code>.d-flex</code>, instead stick a <code>.d-flex</code> into a <code>.flex--item</code> like so:</p>
</Notice>

If you are nesting a flex layout with gutter spacing into another flex layout that also has gutter spacing, the child's parent wrapper margins will be overwritten by the parent. To have the child flex layout's gutter spacing honored, you have to put the child flex layout within a `.flex--item` wrapper first. This allows the parent and child flex layout gutter spacing to act correctly without interfering with each other.

#### Do

```html
<div class="d-flex gs32">
    <div class="flex--item">…</div>
    <div class="flex--item">
        <div class="d-flex gs16">
            <div class="flex--item">…</div>
            <div class="flex--item">…</div>
        </div>
    </div>
</div>
```

<Example>
    <div class="d-flex gs32 mb24">
        <div class="flex--item stacks-flex-example--item">.flex--item</div>
        <div class="flex--item">
            <div class="d-flex gs16">
                <div class="flex--item stacks-flex-example--item">.flex--item</div>
                <div class="flex--item stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
    </div>
</Example>

#### Don't

```html
<div class="d-flex gs32">
    <div class="flex--item">…</div>
    <div class="d-flex gs16">
        <div class="flex--item">…</div>
        <div class="flex--item">…</div>
    </div>
</div>
```

<Example>
    <div class="d-flex gs32">
        <div class="flex--item stacks-flex-example--item">.flex--item</div>
        <div class="d-flex gs16">
            <div class="flex--item stacks-flex-example--item">.flex--item</div>
            <div class="flex--item stacks-flex-example--item">.flex--item</div>
        </div>
    </div>
</Example>

## Flex direction

On a flex container, you can set the direction of the child items.

### Flex direction classes

<ClassTable classes={flexDirection} />

### Flex direction examples

```html
<div class="d-flex fd-row">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex fd-row-reverse">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex fd-column">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex fd-column-reverse">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex gy32 fd-column">
        <div>
            <div class="d-flex ai-center mb8">
                <div class="ff-mono">.fd-row</div>
                <Badge text="Default" class="ml6" />
            </div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 fd-row">
                <div class="stacks-flex-example--item">.flex--item 1</div>
                <div class="stacks-flex-example--item">.flex--item 2</div>
                <div class="stacks-flex-example--item">.flex--item 3</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fd-row-reverse</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 fd-row-reverse">
                <div class="stacks-flex-example--item">.flex--item 1</div>
                <div class="stacks-flex-example--item">.flex--item 2</div>
                <div class="stacks-flex-example--item">.flex--item 3</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fd-column</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 fd-column">
                <div class="stacks-flex-example--item">.flex--item 1</div>
                <div class="stacks-flex-example--item">.flex--item 2</div>
                <div class="stacks-flex-example--item">.flex--item 3</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fd-column-reverse</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 fd-column-reverse">
                <div class="stacks-flex-example--item">.flex--item 1</div>
                <div class="stacks-flex-example--item">.flex--item 2</div>
                <div class="stacks-flex-example--item">.flex--item 3</div>
            </div>
        </div>
    </div>
</Example>

## Flex wrap

On a flex container, you can control if the children wrap.

### Flex wrap classes

<ClassTable classes={flexWrap} />

### Flex wrap examples

```html
<div class="d-flex fw-wrap">
    <div class="flex--item">…</div>
    …
</div>
<div class="d-flex fw-wrap-reverse">
    <div class="flex--item">…</div>
    …
</div>
<div class="d-flex fw-nowrap">
    <div class="flex--item">…</div>
    …
</div>
```

<Example>
    <div class="d-flex gy32 fd-column">
        <div>
            <div class="mb8 ff-mono">.fw-wrap</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 fw-wrap">
                <div class="stacks-flex-example--item">.flex--item 1</div>
                <div class="stacks-flex-example--item">.flex--item 2</div>
                <div class="stacks-flex-example--item">.flex--item 3</div>
                <div class="stacks-flex-example--item">.flex--item 4</div>
                <div class="stacks-flex-example--item">.flex--item 5</div>
                <div class="stacks-flex-example--item">.flex--item 6</div>
                <div class="stacks-flex-example--item">.flex--item 7</div>
                <div class="stacks-flex-example--item">.flex--item 8</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fw-reverse</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 fw-reverse">
                <div class="stacks-flex-example--item">.flex--item 1</div>
                <div class="stacks-flex-example--item">.flex--item 2</div>
                <div class="stacks-flex-example--item">.flex--item 3</div>
                <div class="stacks-flex-example--item">.flex--item 4</div>
                <div class="stacks-flex-example--item">.flex--item 5</div>
                <div class="stacks-flex-example--item">.flex--item 6</div>
                <div class="stacks-flex-example--item">.flex--item 7</div>
                <div class="stacks-flex-example--item">.flex--item 8</div>
            </div>
        </div>
        <div>
            <div class="d-flex ai-center mb8">
                <div class="ff-mono">.fw-nowrap</div>
                <Badge text="Default" class="ml6" />
            </div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 fw-nowrap overflow-x-hidden">
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
                <div class="ws-nowrap stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
    </div>
</Example>

## Justify content

Flex items can be controlled with atomic classes on the container's main axis. This means controlling how a `.flex--item` is aligned left to right when in an `.fd-row`, and top and bottom in an `.fd-column`.

### Justify content classes

<ClassTable classes={justification} />

### Justify content examples

```html
<div class="d-flex jc-center">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex jc-end">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex jc-space-around">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex jc-space-between">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex jc-space-evenly">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex jc-start">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex gy48 fd-column">
        <div>
            <div class="mb8 ff-mono">.jc-center</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 jc-center">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.jc-end</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 jc-end">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.jc-space-around</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 jc-space-around">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.jc-space-between</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 jc-space-between">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.jc-space-evenly</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 jc-space-evenly">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="d-flex ai-center mb8">
                <div class="ff-mono">.jc-start</div>
                <Badge text="Default" class="ml6" />
            </div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 jc-start">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
    </div>
</Example>

## Align items

Flex items can be controlled with atomic classes on the container's cross axis. This means controlling how a `.flex--item` is aligned top to bottom when in an `.fd-row`, and left to right in an `.fd-column`.

### Align items classes

<ClassTable classes={alignItems} />

### Align items examples

```html
<div class="d-flex ai-baseline">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ai-center">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ai-end">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ai-start">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ai-stretch">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex gy32 fd-column">
        <div>
            <div class="mb8 ff-mono">.ai-baseline</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 ai-baseline">
                <div class="d-flex flex__center stacks-flex-example--item h32">.flex--item</div>
                <div class="stacks-flex-example--item h64">.flex--item</div>
                <div class="d-flex ai-end stacks-flex-example--item h48">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.ai-center</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 ai-center">
                <div class="d-flex flex__center stacks-flex-example--item h32">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item h64">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item h48">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.ai-end</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 ai-end">
                <div class="d-flex flex__center stacks-flex-example--item h32">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item h64">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item h48">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.ai-start</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 ai-start">
                <div class="d-flex flex__center stacks-flex-example--item h32">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item h64">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item h48">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="d-flex ai-center mb8">
                <div class="ff-mono">.ai-stretch</div>
                <Badge text="Default" class="ml6" />
            </div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4 ai-stretch">
                <div class="d-flex flex__center stacks-flex-example--item h64">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item h64">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item h64">.flex--item</div>
            </div>
        </div>
    </div>
</Example>

## Align content

Flex items can be controlled with atomic classes on the container's cross axis.

### Align content classes

<ClassTable classes={alignContent} />

### Align content examples

```html
<div class="d-flex ac-center">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ac-end">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ac-space-around">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ac-space-between">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ac-start">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex ac-stretch">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex gy48 fd-column">
        <div>
            <div class="mb8 ff-mono">.ac-center</div>
            <div class="hs2 bg-black-100 ba bc-black-200 p8 d-flex g4 ac-center fw-wrap">
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.ac-end</div>
            <div class="hs2 bg-black-100 ba bc-black-200 p8 d-flex g4 ac-end fw-wrap">
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.ac-space-around</div>
            <div class="hs2 bg-black-100 ba bc-black-200 p8 d-flex g4 ac-space-around fw-wrap">
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.ac-space-between</div>
            <div class="hs2 bg-black-100 ba bc-black-200 p8 d-flex g4 ac-space-between fw-wrap">
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="d-flex ai-center mb8">
                <div class="ff-mono">.ac-start</div>
                <Badge text="Default" class="ml6" />
            </div>
            <div class="hs2 bg-black-100 ba bc-black-200 p8 d-flex g4 ac-start fw-wrap">
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
                <div class="h-auto stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
    </div>
</Example>

## Align self

A flex container's `align-items` can be overridden on individual items within a flex layout.

### Align self classes

<ClassTable classes={alignSelf} />

### Align self examples

```html
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item as-auto">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item as-baseline">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item as-center">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item as-end">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item as-start">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item as-stretch">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex gy32 fd-column">
        <div>
            <div class="d-flex ai-center mb8">
                <div class="ff-mono">.as-auto</div>
                <Badge text="Default" class="ml6" />
            </div>
            <div class="hs1 bg-black-100 ba bc-black-200 p8 d-flex g4 jc-center">
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item bg-black-225 bc-black-250 as-auto">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.as-baseline</div>
            <div class="hs1 bg-black-100 ba bc-black-200 p8 d-flex g4 jc-center">
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item bg-black-225 bc-black-250 as-baseline">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.as-center</div>
            <div class="hs1 bg-black-100 ba bc-black-200 p8 d-flex g4 jc-center">
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item bg-black-225 bc-black-250 as-center">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.as-end</div>
            <div class="hs1 bg-black-100 ba bc-black-200 p8 d-flex g4 jc-center">
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item bg-black-225 bc-black-250 as-end">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.as-start</div>
            <div class="hs1 bg-black-100 ba bc-black-200 p8 d-flex g4 jc-center">
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item bg-black-225 bc-black-250 as-start">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.as-stretch</div>
            <div class="hs1 bg-black-100 ba bc-black-200 p8 d-flex g4 jc-center ai-center">
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item bg-black-225 bc-black-250 as-stretch">.flex--item</div>
                <div class="d-flex flex__center stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
    </div>
</Example>

## Order

Within a flex layout, you can force the position of individual elements.

### Order classes

<ClassTable classes={order} />

### Order examples

```html
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item order-first">…</div>
</div>
<div class="d-flex">
    <div class="flex--item order-last">…</div>
    <div class="flex--item">…</div>
    <div class="flex--item">…</div>
</div>
```

<Example>
    <div class="d-flex gy32 fd-column">
        <div>
            <div class="mb8 ff-mono">.order-first</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item">.flex--item 1</div>
                <div class="stacks-flex-example--item">.flex--item 2</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 order-first">.flex--item 3</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.order-last</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 order-last">.flex--item 1</div>
                <div class="stacks-flex-example--item">.flex--item 2</div>
                <div class="stacks-flex-example--item">.flex--item 3</div>
            </div>
        </div>
    </div>
</Example>

## Flex shrink and grow

You can control the growing and shrinking behavior of individual elements within a flex layout.

### Flex classes

<ClassTable classes={flex} />

### Flex examples

```html
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item fl-grow1">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item fl-grow0">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item fl-shrink1">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item fl-shrink0">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item fl-none">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item fl-initial">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item">…</div>
    <div class="flex--item fl-auto">…</div>
    <div class="flex--item">…</div>
</div>
<div class="d-flex">
    <div class="flex--item fl-equal">…</div>
    <div class="flex--item fl-equal">…</div>
    <div class="flex--item fl-equal">…</div>
</div>
```

<Example>
    <div class="d-flex gy32 fd-column">
        <div>
            <div class="mb8 ff-mono">.fl-grow1</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-grow1">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fl-grow0</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-grow0">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fl-shrink1</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-shrink1">.flex--<br>item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fl-shrink0</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item fl-grow1">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-shrink0">.flex--item</div>
                <div class="stacks-flex-example--item fl-grow1">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fl-none</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item fl-grow1">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-none">.flex--item</div>
                <div class="stacks-flex-example--item fl-grow1">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fl-initial</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-initial">.flex--item</div>
                <div class="stacks-flex-example--item">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fl-auto</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item fl-auto">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-auto .ws2">.flex--item.ws2</div>
                <div class="stacks-flex-example--item fl-auto">.flex--item</div>
            </div>
        </div>
        <div>
            <div class="mb8 ff-mono">.fl-equal</div>
            <div class="bg-black-100 ba bc-black-200 p8 d-flex g4">
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-equal">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-equal">.flex--item</div>
                <div class="stacks-flex-example--item bg-black-225 bc-black-250 fl-equal">.flex--item</div>
            </div>
        </div>
    </div>
</Example>

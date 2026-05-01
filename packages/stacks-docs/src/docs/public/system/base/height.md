---
title: "Height"
description: "Stacks provides atomic sizing classes for heights using pixel, rem, and percentage values. Most height classes are based on a 16px base font size and will scale based on the browser's font size."
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const pixelClasses: ClassTableRow[] = [
        { class: '.h0',   output: 'height: 0px;',   define: '0rem' },
        { class: '.h1',   output: 'height: 1px;',   define: '0.063rem' },
        { class: '.h2',   output: 'height: 2px;',   define: '0.125rem' },
        { class: '.h4',   output: 'height: 4px;',   define: '0.25rem' },
        { class: '.h6',   output: 'height: 6px;',   define: '0.375rem' },
        { class: '.h8',   output: 'height: 8px;',   define: '0.5rem' },
        { class: '.h12',  output: 'height: 12px;',  define: '0.75rem' },
        { class: '.h16',  output: 'height: 16px;',  define: '1rem' },
        { class: '.h24',  output: 'height: 24px;',  define: '1.5rem' },
        { class: '.h32',  output: 'height: 32px;',  define: '2rem' },
        { class: '.h48',  output: 'height: 48px;',  define: '3rem' },
        { class: '.h64',  output: 'height: 64px;',  define: '4rem' },
        { class: '.h96',  output: 'height: 96px;',  define: '6rem' },
        { class: '.h128', output: 'height: 128px;', define: '8rem' },
    ];

    const sizingUnitClasses: ClassTableRow[] = [
        { class: '.hs1',  output: 'height: 128px;',  define: '8rem' },
        { class: '.hs2',  output: 'height: 256px;',  define: '16rem' },
        { class: '.hs3',  output: 'height: 344px;',  define: '21.5rem' },
        { class: '.hs4',  output: 'height: 448px;',  define: '28rem' },
        { class: '.hs5',  output: 'height: 512px;',  define: '32rem' },
        { class: '.hs6',  output: 'height: 640px;',  define: '40rem' },
        { class: '.hs7',  output: 'height: 768px;',  define: '48rem' },
        { class: '.hs8',  output: 'height: 848px;',  define: '53rem' },
        { class: '.hs9',  output: 'height: 960px;',  define: '60rem' },
        { class: '.hs10', output: 'height: 1024px;', define: '64rem' },
        { class: '.hs11', output: 'height: 1120px;', define: '70rem' },
        { class: '.hs12', output: 'height: 1280px;', define: '80rem' },
    ];

    const fluidClasses: ClassTableRow[] = [
        { class: '.h100',     output: 'height: 100%;',  responsive: true },
        { class: '.h-screen', output: 'height: 100vh;', responsive: true },
        { class: '.h-auto',   output: 'height: auto;',  responsive: true },
    ];

    const minHeightClasses: ClassTableRow[] = [
        { class: '.hmn0',       output: 'min-height: 0;',       define: '-',       responsive: true },
        { class: '.hmn1',       output: 'min-height: 128px;',   define: '8rem' },
        { class: '.hmn2',       output: 'min-height: 256px;',   define: '16rem' },
        { class: '.hmn3',       output: 'min-height: 344px;',   define: '21.5rem' },
        { class: '.hmn4',       output: 'min-height: 448px;',   define: '28rem' },
        { class: '.hmn5',       output: 'min-height: 512px;',   define: '32rem' },
        { class: '.hmn6',       output: 'min-height: 640px;',   define: '40rem' },
        { class: '.hmn7',       output: 'min-height: 768px;',   define: '48rem' },
        { class: '.hmn8',       output: 'min-height: 848px;',   define: '53rem' },
        { class: '.hmn9',       output: 'min-height: 960px;',   define: '60rem' },
        { class: '.hmn10',      output: 'min-height: 1024px;',  define: '64rem' },
        { class: '.hmn11',      output: 'min-height: 1120px;',  define: '70rem' },
        { class: '.hmn12',      output: 'min-height: 1280px;',  define: '80rem' },
        { class: '.hmn100',     output: 'min-height: 100%;',    define: '-',       responsive: true },
        { class: '.hmn-screen', output: 'min-height: 100vh;',   define: '-',       responsive: true },
        { class: '.hmn-initial',output: 'min-height: initial;', define: '-',       responsive: true },
    ];

    const maxHeightClasses: ClassTableRow[] = [
        { class: '.hmx1',       output: 'max-height: 128px;',   define: '8rem' },
        { class: '.hmx2',       output: 'max-height: 256px;',   define: '16rem' },
        { class: '.hmx3',       output: 'max-height: 344px;',   define: '21.5rem' },
        { class: '.hmx4',       output: 'max-height: 448px;',   define: '28rem' },
        { class: '.hmx5',       output: 'max-height: 512px;',   define: '32rem' },
        { class: '.hmx6',       output: 'max-height: 640px;',   define: '40rem' },
        { class: '.hmx7',       output: 'max-height: 768px;',   define: '48rem' },
        { class: '.hmx8',       output: 'max-height: 848px;',   define: '53rem' },
        { class: '.hmx9',       output: 'max-height: 960px;',   define: '60rem' },
        { class: '.hmx10',      output: 'max-height: 1024px;',  define: '64rem' },
        { class: '.hmx11',      output: 'max-height: 1120px;',  define: '70rem' },
        { class: '.hmx12',      output: 'max-height: 1280px;',  define: '80rem' },
        { class: '.hmx100',     output: 'max-height: 100%;',    define: '-',       responsive: true },
        { class: '.hmx-screen', output: 'max-height: 100vh;',   define: '-',       responsive: true },
        { class: '.hmx-initial',output: 'max-height: initial;', define: '-',       responsive: true },
    ];
</script>

## Pixel height

Pixel height classes allow you to set the height of an element to a specific pixel value.

### Pixel height classes

<ClassTable classes={pixelClasses} expandable headings={{ define: 'rem value' }} />

### Base height examples

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

<Example>
    <div class="d-flex fd-column g16 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            <div>.h2</div>
            <div class="h2 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h4</div>
            <div class="h4 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h6</div>
            <div class="h6 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h8</div>
            <div class="h8 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h12</div>
            <div class="h12 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h16</div>
            <div class="h16 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h24</div>
            <div class="h24 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h32</div>
            <div class="h32 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h48</div>
            <div class="h48 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h64</div>
            <div class="h64 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h96</div>
            <div class="h96 docs-box p0"></div>
        </div>
        <div class="d-flex fd-column g4">
            <div>.h128</div>
            <div class="h128 docs-box p0"></div>
        </div>
    </div>
</Example>

## Sizing units height

Sizing units height classes allow you to set the height of an element according to a predefined set of 12 common values in used in Stacks.

### Sizing units height classes

<ClassTable classes={sizingUnitClasses} headings={{ define: 'rem value' }} />

### Sizing units height examples

```html
<div class="hs1">…</div>
<div class="hs2">…</div>
<div class="hs3">…</div>
<div class="hs4">…</div>
<div class="hs5">…</div>
<div class="hs6">…</div>
<div class="hs7">…</div>
<div class="hs8">…</div>
<div class="hs9">…</div>
<div class="hs10">…</div>
<div class="hs11">…</div>
<div class="hs12">…</div>
```

<Example>
    <div class="d-flex g4 hmx6 fs-caption ff-mono overflow-auto">
        <div class="d-flex g6 hs12 w100 overflow-x-auto">
            <div class="docs-box px4 hs1 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs1</div>
            </div>
            <div class="docs-box px4 hs2 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs2</div>
            </div>
            <div class="docs-box px4 hs3 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs3</div>
            </div>
            <div class="docs-box px4 hs4 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs4</div>
            </div>
            <div class="docs-box px4 hs5 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs5</div>
            </div>
            <div class="docs-box px4 hs6 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs6</div>
            </div>
            <div class="docs-box px4 hs7 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs7</div>
            </div>
            <div class="docs-box px4 hs8 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs8</div>
            </div>
            <div class="docs-box px4 hs9 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs9</div>
            </div>
            <div class="docs-box px4 hs10 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs10</div>
            </div>
            <div class="docs-box px4 hs11 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs11</div>
            </div>
            <div class="docs-box px4 hs12 ai-start d-flex fl-shrink0 w48" style="min-width: calc(100% / 12 - 6px);">
                <div>.hs12</div>
            </div>
        </div>
    </div>
</Example>

## Fluid height

Fluid height classes allow you to set the height of an element to a percentage of the parent element's height or to the full height of the viewport.

### Fluid height classes

<ClassTable classes={fluidClasses} />

### Fluid height examples

```html
<div class="h100">…</div>
```

<Example>
    <div class="d-flex fd-column g4 fs-caption ff-mono">
        <div class="d-flex docs-box p0 hs2 fs-caption ff-mono p6">
            <div class="h100 docs-box ws2">
                .h100
            </div>
        </div>
    </div>
</Example>

## Min height

Min height classes allow you to set the minimum height of an element.

### Min height classes

<ClassTable classes={minHeightClasses} expandable headings={{ define: 'rem value' }} />

## Max height

Max height classes allow you to set the maximum height of an element.

### Max height classes

<ClassTable classes={maxHeightClasses} expandable headings={{ define: 'rem value' }} />

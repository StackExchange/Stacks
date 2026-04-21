---
title: Width
description: Stacks provides atomic sizing classes for widths using pixel, rem, and percentage values. Most width classes are based on a 16px base font size and will scale based on the browser's font size.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const pixelClasses: ClassTableRow[] = [
        { class: '.w0',   output: 'width: 0px;',   define: '0rem' },
        { class: '.w1',   output: 'width: 1px;',   define: '0.063rem' },
        { class: '.w2',   output: 'width: 2px;',   define: '0.125rem' },
        { class: '.w4',   output: 'width: 4px;',   define: '0.25rem' },
        { class: '.w6',   output: 'width: 6px;',   define: '0.375rem' },
        { class: '.w8',   output: 'width: 8px;',   define: '0.5rem' },
        { class: '.w12',  output: 'width: 12px;',  define: '0.75rem' },
        { class: '.w16',  output: 'width: 16px;',  define: '1rem' },
        { class: '.w24',  output: 'width: 24px;',  define: '1.5rem' },
        { class: '.w32',  output: 'width: 32px;',  define: '2rem' },
        { class: '.w48',  output: 'width: 48px;',  define: '3rem' },
        { class: '.w64',  output: 'width: 64px;',  define: '4rem' },
        { class: '.w96',  output: 'width: 96px;',  define: '6rem' },
        { class: '.w128', output: 'width: 128px;', define: '8rem' },
    ];

    const sizingUnitsClasses: ClassTableRow[] = [
        { class: '.ws1',  output: 'width: 128px;',  define: '8rem' },
        { class: '.ws2',  output: 'width: 256px;',  define: '16rem' },
        { class: '.ws3',  output: 'width: 344px;',  define: '21.5rem' },
        { class: '.ws4',  output: 'width: 448px;',  define: '28rem' },
        { class: '.ws5',  output: 'width: 512px;',  define: '32rem' },
        { class: '.ws6',  output: 'width: 640px;',  define: '40rem' },
        { class: '.ws7',  output: 'width: 768px;',  define: '48rem' },
        { class: '.ws8',  output: 'width: 848px;',  define: '53rem' },
        { class: '.ws9',  output: 'width: 960px;',  define: '60rem' },
        { class: '.ws10', output: 'width: 1024px;', define: '64rem' },
        { class: '.ws11', output: 'width: 1120px;', define: '70rem' },
        { class: '.ws12', output: 'width: 1280px;', define: '80rem' },
    ];

    const fluidClasses: ClassTableRow[] = [
        { class: '.w10',     output: 'width: 10%;'   },
        { class: '.w20',     output: 'width: 20%;'   },
        { class: '.w25',     output: 'width: 25%;',  responsive: true },
        { class: '.w30',     output: 'width: 30%;'   },
        { class: '.w33',     output: 'width: 33%;',  responsive: true },
        { class: '.w40',     output: 'width: 40%;'   },
        { class: '.w50',     output: 'width: 50%;',  responsive: true },
        { class: '.w60',     output: 'width: 60%;'   },
        { class: '.w66',     output: 'width: 66%;'   },
        { class: '.w70',     output: 'width: 70%;'   },
        { class: '.w75',     output: 'width: 75%;',  responsive: true },
        { class: '.w80',     output: 'width: 80%;'   },
        { class: '.w90',     output: 'width: 90%;'   },
        { class: '.w100',    output: 'width: 100%;', responsive: true },
        { class: '.w-screen', output: 'width: 100vw;', responsive: true },
        { class: '.w-auto',  output: 'width: auto;', responsive: true },
    ];

    const minWidthClasses: ClassTableRow[] = [
        { class: '.wmn0',       output: 'min-width: 0;',        responsive: true },
        { class: '.wmn1',       output: 'min-width: 128px;',    define: '8rem' },
        { class: '.wmn2',       output: 'min-width: 256px;',    define: '16rem' },
        { class: '.wmn3',       output: 'min-width: 344px;',    define: '21.5rem' },
        { class: '.wmn4',       output: 'min-width: 448px;',    define: '28rem' },
        { class: '.wmn5',       output: 'min-width: 512px;',    define: '32rem' },
        { class: '.wmn6',       output: 'min-width: 640px;',    define: '40rem' },
        { class: '.wmn7',       output: 'min-width: 768px;',    define: '48rem' },
        { class: '.wmn8',       output: 'min-width: 848px;',    define: '53rem' },
        { class: '.wmn9',       output: 'min-width: 960px;',    define: '60rem' },
        { class: '.wmn10',      output: 'min-width: 1024px;',   define: '64rem' },
        { class: '.wmn11',      output: 'min-width: 1120px;',   define: '70rem' },
        { class: '.wmn12',      output: 'min-width: 1280px;',   define: '80rem' },
        { class: '.wmn25',      output: 'min-width: 25%;'  },
        { class: '.wmn50',      output: 'min-width: 50%;'  },
        { class: '.wmn75',      output: 'min-width: 75%;'  },
        { class: '.wmn100',     output: 'min-width: 100%;', responsive: true },
        { class: '.wmn-screen', output: 'min-width: 100vw;', responsive: true },
        { class: '.wmn-initial', output: 'min-width: initial;', responsive: true },
    ];

    const maxWidthClasses: ClassTableRow[] = [
        { class: '.wmx1',       output: 'max-width: 128px;',  define: '8rem' },
        { class: '.wmx2',       output: 'max-width: 256px;',  define: '16rem' },
        { class: '.wmx3',       output: 'max-width: 344px;',  define: '21.5rem' },
        { class: '.wmx4',       output: 'max-width: 448px;',  define: '28rem' },
        { class: '.wmx5',       output: 'max-width: 512px;',  define: '32rem' },
        { class: '.wmx6',       output: 'max-width: 640px;',  define: '40rem' },
        { class: '.wmx7',       output: 'max-width: 768px;',  define: '48rem' },
        { class: '.wmx8',       output: 'max-width: 848px;',  define: '53rem' },
        { class: '.wmx9',       output: 'max-width: 960px;',  define: '60rem' },
        { class: '.wmx10',      output: 'max-width: 1024px;', define: '64rem' },
        { class: '.wmx11',      output: 'max-width: 1120px;', define: '70rem' },
        { class: '.wmx12',      output: 'max-width: 1280px;', define: '80rem' },
        { class: '.wmx25',      output: 'max-width: 25%;'  },
        { class: '.wmx50',      output: 'max-width: 50%;'  },
        { class: '.wmx75',      output: 'max-width: 75%;'  },
        { class: '.wmx100',     output: 'max-width: 100%;', responsive: true },
        { class: '.wmx-screen', output: 'max-width: 100vw;', responsive: true },
        { class: '.wmx-initial', output: 'max-width: initial;', responsive: true },
    ];
</script>

## Pixel width

Pixel width classes allow you to set the width of an element to a specific pixel value.

### Pixel width classes

<ClassTable classes={pixelClasses} headings={{ define: 'rem value' }} expandable />

### Pixel width examples

```html
<div class="w0">…</div>
<div class="w1">…</div>
<div class="w2">…</div>
<div class="w4">…</div>
<div class="w6">…</div>
<div class="w8">…</div>
<div class="w12">…</div>
<div class="w16">…</div>
<div class="w24">…</div>
<div class="w32">…</div>
<div class="w48">…</div>
<div class="w64">…</div>
<div class="w96">…</div>
<div class="w128">…</div>
```

<Example>
    <div class="d-flex g8 fd-column fs-caption ff-mono">
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w0</div>
            <div class="w0 h24"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w1</div>
            <div class="w1 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w2</div>
            <div class="w2 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w4</div>
            <div class="w4 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w6</div>
            <div class="w6 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w8</div>
            <div class="w8 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w12</div>
            <div class="w12 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w16</div>
            <div class="w16 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w24</div>
            <div class="w24 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w32</div>
            <div class="w32 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w48</div>
            <div class="w48 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w64</div>
            <div class="w64 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w96</div>
            <div class="w96 h24 docs-box p0"></div>
        </div>
        <div class="d-grid grid__12 g4">
            <div class="grid--col1">.w128</div>
            <div class="w128 h24 docs-box p0"></div>
        </div>
    </div>
</Example>

## Sizing units width

Sizing units width classes allow you to set the width of an element according to a predefined set of 12 common values in used in Stacks.

### Sizing units width classes

<ClassTable classes={sizingUnitsClasses} headings={{ define: 'rem value' }} />

### Sizing units width examples

```html
<div class="ws1">…</div>
<div class="ws2">…</div>
<div class="ws3">…</div>
<div class="ws4">…</div>
<div class="ws5">…</div>
<div class="ws6">…</div>
<div class="ws7">…</div>
<div class="ws8">…</div>
<div class="ws9">…</div>
<div class="ws10">…</div>
<div class="ws11">…</div>
<div class="ws12">…</div>
```

<Example>
    <div class="d-flex g4 fd-column fs-caption ff-mono overflow-x-auto">
        <div class="docs-box p0 ws1 ai-center d-flex h48">
            <div>.ws1</div>
        </div>
        <div class="docs-box p0 ws2 ai-center d-flex h48">
            <div>.ws2</div>
        </div>
        <div class="docs-box p0 ws3 ai-center d-flex h48">
            <div>.ws3</div>
        </div>
        <div class="docs-box p0 ws4 ai-center d-flex h48">
            <div>.ws4</div>
        </div>
        <div class="docs-box p0 ws5 ai-center d-flex h48">
            <div>.ws5</div>
        </div>
        <div class="docs-box p0 ws6 ai-center d-flex h48">
            <div>.ws6</div>
        </div>
        <div class="docs-box p0 ws7 ai-center d-flex h48">
            <div>.ws7</div>
        </div>
        <div class="docs-box p0 ws8 ai-center d-flex h48">
            <div>.ws8</div>
        </div>
        <div class="docs-box p0 ws9 ai-center d-flex h48">
            <div>.ws9</div>
        </div>
        <div class="docs-box p0 ws10 ai-center d-flex h48">
            <div>.ws10</div>
        </div>
        <div class="docs-box p0 ws11 ai-center d-flex h48">
            <div>.ws11</div>
        </div>
        <div class="docs-box p0 ws12 ai-center d-flex h48">
            <div>.ws12</div>
        </div>
    </div>
</Example>

## Fluid width

Fluid width classes allow you to set the width of an element to a percentage of the parent element's width or to the full width of the viewport.

### Fluid width classes

<ClassTable classes={fluidClasses} />

### Fluid width examples

```html
<div class="w10">…</div>
<div class="w20">…</div>
<div class="w25">…</div>
<div class="w30">…</div>
<div class="w33">…</div>
<div class="w40">…</div>
<div class="w50">…</div>
<div class="w60">…</div>
<div class="w66">…</div>
<div class="w70">…</div>
<div class="w75">…</div>
<div class="w80">…</div>
<div class="w90">…</div>
<div class="w100">…</div>
```

<Example>
    <div class="d-flex fd-column g4 fs-caption ff-mono">
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w10 ai-center py4">
                <div>.w10</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w20 ai-center py4">
                <div>.w20</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w25 ai-center py4">
                <div>.w25</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w30 ai-center py4">
                <div>.w30</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w33 ai-center py4">
                <div>.w33</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w40 ai-center py4">
                <div>.w40</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w50 ai-center py4">
                <div>.w50</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w60 ai-center py4">
                <div>.w60</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w66 ai-center py4">
                <div>.w66</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w70 ai-center py4">
                <div>.w70</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w75 ai-center py4">
                <div>.w75</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w80 ai-center py4">
                <div>.w80</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w90 ai-center py4">
                <div>.w90</div>
            </div>
        </div>
        <div class="docs-box p0 bg-black-100">
            <div class="docs-box w100 ai-center py4">
                <div>.w100</div>
            </div>
        </div>
    </div>
</Example>

## Min width

Min width classes allow you to set the minimum width of an element.

### Min width classes

<ClassTable classes={minWidthClasses} headings={{ define: 'rem value' }} expandable />

## Max width

Max width classes allow you to set the maximum width of an element.

### Max width classes

<ClassTable classes={maxWidthClasses} headings={{ define: 'rem value' }} expandable />

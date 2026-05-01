---
title: Border radius
description: Stacks provides atomic classes for border radius.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.bar0',      output: 'border-radius: 0',                                                        define: 'Apply a border radius of 0 to all corners',                          responsive: true },
        { class: '.btlr0',     output: 'border-top-left-radius: 0',                                               define: 'Apply a border radius of 0 to the top left corner' },
        { class: '.btrr0',     output: 'border-top-right-radius: 0',                                              define: 'Apply a border radius of 0 to the top right corner' },
        { class: '.bblr0',     output: 'border-bottom-left-radius: 0',                                            define: 'Apply a border radius of 0 to the bottom left corner' },
        { class: '.bbrr0',     output: 'border-bottom-right-radius: 0',                                           define: 'Apply a border radius of 0 to the bottom right corner' },
        { class: '.btr0',      output: 'border-top-left-radius: 0; border-top-right-radius: 0',                   define: 'Apply a border radius of 0 to the top corners' },
        { class: '.brr0',      output: 'border-top-right-radius: 0; border-bottom-right-radius: 0',               define: 'Apply a border radius of 0 to the right corners' },
        { class: '.bbr0',      output: 'border-bottom-left-radius: 0; border-bottom-right-radius: 0',             define: 'Apply a border radius of 0 to the bottom corners' },
        { class: '.blr0',      output: 'border-bottom-left-radius: 0; border-top-left-radius: 0',                 define: 'Apply a border radius of 0 to the left corners' },
        { class: '.bar-md',    output: 'border-radius: 10px',                                                     define: 'Apply a border radius of 10px to all corners' },
        { class: '.btlr-md',   output: 'border-top-left-radius: 10px',                                            define: 'Apply a border radius of 10px to the top left corner' },
        { class: '.btrr-md',   output: 'border-top-right-radius: 10px',                                           define: 'Apply a border radius of 10px to the top right corner' },
        { class: '.bblr-md',   output: 'border-bottom-left-radius: 10px',                                         define: 'Apply a border radius of 10px to the bottom left corner' },
        { class: '.bbrr-md',   output: 'border-bottom-right-radius: 10px',                                        define: 'Apply a border radius of 10px to the bottom right corner' },
        { class: '.btr-md',    output: 'border-top-left-radius: 10px; border-top-right-radius: 10px',             define: 'Apply a border radius of 10px to the top corners' },
        { class: '.brr-md',    output: 'border-top-right-radius: 10px; border-bottom-right-radius: 10px',         define: 'Apply a border radius of 10px to the right corners' },
        { class: '.bbr-md',    output: 'border-bottom-left-radius: 10px; border-bottom-right-radius: 10px',       define: 'Apply a border radius of 10px to the bottom corners' },
        { class: '.blr-md',    output: 'border-bottom-left-radius: 10px; border-top-left-radius: 10px',           define: 'Apply a border radius of 10px to the left corners' },
        { class: '.bar-pill',  output: 'border-radius: 1000px',                                                   define: 'Apply a border radius of 1000px to each corner for a 100% rounding of the left and right corners' },
        { class: '.bar-circle',output: 'border-radius: 100%',                                                     define: 'Apply a border radius of 100% to each corner for a circular appearance' },
    ];
</script>

## Classes

<ClassTable {classes} expandable headings={{ class: 'Abbreviation', define: 'Definition' }} />

## Examples

### All corners

```html
<div class="bar0">…</div>
<div class="bar-md">…</div>
<div class="bar-circle">…</div>
<div class="bar-pill">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .bar0
            <div class="docs-box bar0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .bar-md
            <div class="docs-box bar-md h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .bar-circle
            <div class="docs-box bar-circle h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .bar-pill
            <div class="docs-box bar-pill h64 w128"></div>
        </div>
    </div>
</Example>

### Top left corner

```html
<div class="btlr0">…</div>
<div class="btlr-md">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .btlr0
            <div class="docs-box btlr0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .btlr-md
            <div class="docs-box btlr-md h64 w128"></div>
        </div>
    </div>
</Example>

### Top right corner

```html
<div class="btrr0">…</div>
<div class="btrr-md">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .btrr0
            <div class="docs-box btrr0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .btrr-md
            <div class="docs-box btrr-md h64 w128"></div>
        </div>
    </div>
</Example>

### Bottom right corner

```html
<div class="bbrr0">…</div>
<div class="bbrr-md">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .bbrr0
            <div class="docs-box bbrr0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .bbrr-md
            <div class="docs-box bbrr-md h64 w128"></div>
        </div>
    </div>
</Example>

### Bottom left corner

```html
<div class="bblr0">…</div>
<div class="bblr-md">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .bblr0
            <div class="docs-box bblr0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .bblr-md
            <div class="docs-box bblr-md h64 w128"></div>
        </div>
    </div>
</Example>

### Top corners

```html
<div class="btr0">…</div>
<div class="btr-md">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .btr0
            <div class="docs-box btr0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .btr-md
            <div class="docs-box btr-md h64 w128"></div>
        </div>
    </div>
</Example>

### Bottom corners

```html
<div class="bbr0">…</div>
<div class="bbr-md">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .bbr0
            <div class="docs-box bbr0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .bbr-md
            <div class="docs-box bbr-md h64 w128"></div>
        </div>
    </div>
</Example>

### Left corners

```html
<div class="blr0">…</div>
<div class="blr-md">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .blr0
            <div class="docs-box blr0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .blr-md
            <div class="docs-box blr-md h64 w128"></div>
        </div>
    </div>
</Example>

### Right corners

```html
<div class="brr0">…</div>
<div class="brr-md">…</div>
```

<Example>
    <div class="d-flex fw-wrap g32 w100 fs-caption ff-mono">
        <div class="d-flex fd-column g4">
            .brr0
            <div class="docs-box brr0 h64 w128"></div>
        </div>
        <div class="d-flex fd-column g4">
            .brr-md
            <div class="docs-box brr-md h64 w128"></div>
        </div>
    </div>
</Example>

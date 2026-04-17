---
title: Backgrounds
description: Atomic classes for controlling the background properties of an element.
updated: 2025-12-05
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const backgroundSize: ClassTableRow[] = [
        { class: '.bg-auto',    output: 'background-size: auto;' },
        { class: '.bg-cover',   output: 'background-size: cover;' },
        { class: '.bg-contain', output: 'background-size: contain;' },
    ];

    const backgroundRepeat: ClassTableRow[] = [
        { class: '.bg-repeat',   output: 'background-repeat: repeat;' },
        { class: '.bg-no-repeat', output: 'background-repeat: no-repeat;' },
        { class: '.bg-repeat-x', output: 'background-repeat: repeat-x;' },
        { class: '.bg-repeat-y', output: 'background-repeat: repeat-y;' },
    ];

    const backgroundPosition: ClassTableRow[] = [
        { class: '.bg-bottom',       output: 'background-position: bottom;' },
        { class: '.bg-center',       output: 'background-position: center;' },
        { class: '.bg-left',         output: 'background-position: left;' },
        { class: '.bg-left-bottom',  output: 'background-position: left bottom;' },
        { class: '.bg-left-top',     output: 'background-position: left top;' },
        { class: '.bg-right',        output: 'background-position: right;' },
        { class: '.bg-right-bottom', output: 'background-position: right bottom;' },
        { class: '.bg-right-top',    output: 'background-position: right top;' },
        { class: '.bg-top',          output: 'background-position: top;' },
    ];

    const backgroundAttachment: ClassTableRow[] = [
        { class: '.bg-fixed',  output: 'background-attachment: fixed;' },
        { class: '.bg-local',  output: 'background-attachment: local;' },
        { class: '.bg-scroll', output: 'background-attachment: scroll;' },
    ];

    const backgroundImage: ClassTableRow[] = [
        { class: '.bg-image-none', output: 'background-image: none;' },
    ];
</script>

## Background size

<ClassTable classes={backgroundSize} />

## Background repeat

<ClassTable classes={backgroundRepeat} />

## Background position

<ClassTable classes={backgroundPosition} />

### Background position examples

```html
<div class="bg-no-repeat bg-bottom">…</div>
<div class="bg-no-repeat bg-center">…</div>
<div class="bg-no-repeat bg-left">…</div>
<div class="bg-no-repeat bg-left-bottom">…</div>
<div class="bg-no-repeat bg-left-top">…</div>
<div class="bg-no-repeat bg-right">…</div>
<div class="bg-no-repeat bg-right-bottom">…</div>
<div class="bg-no-repeat bg-right-top">…</div>
<div class="bg-no-repeat bg-top">…</div>
```

<Example>
    <div class="d-grid grid__3 sm:grid__2 w100 g8 fc-black-600 ff-mono fw-wrap">
        {#each backgroundPosition as item}
            <div class="d-flex fd-column g4 p8">
                <code>{item.class}</code>
                <div
                    class="hs1 w100 bg-black-200 ba bc-black-225 bg-no-repeat {item.class.slice(1)}"
                    style="background-image: url('/images/illustrationBgImage.svg');"
                ></div>
            </div>
        {/each}
    </div>
</Example>

## Background attachment

<ClassTable classes={backgroundAttachment} />

## Background image

<ClassTable classes={backgroundImage} />

## Background utilities

### Loading

Adding the `.bg-loading` class applies a shimmering gradient animation to a container's background. Use it to create flexible skeleton placeholders that mimic the shape and layout of content while it loads.

```html
<div class="p16">
    <div class="ws3 d-flex g16">
        <div class="v-visible-sr">Loading…</div>
        <div class="bg-loading s-avatar s-avatar__96 fl-shrink0"></div>
        <div class="d-flex fd-column g8 jc-space-between w100">
            <div class="bg-loading bar-md h24"></div>
            <div class="bg-loading bar-md h24"></div>
            <div class="bg-loading bar-md h24 w70"></div>
        </div>
    </div>
</div>
```

<Example>
    <div class="p16">
        <div class="ws3 d-flex g16">
            <div class="v-visible-sr">Loading…</div>
            <div class="bg-loading s-avatar s-avatar__96 fl-shrink0"></div>
            <div class="d-flex fd-column g8 jc-space-between w100">
                <div class="bg-loading bar-md h24"></div>
                <div class="bg-loading bar-md h24"></div>
                <div class="bg-loading bar-md h24 w70"></div>
            </div>
        </div>
    </div>
</Example>

### Confetti

Adding the confetti background utility adds confetti to any block-level element. You can choose the animated version, or static version. The animated version respects `prefers-reduced-motion` and displays the static version of the background when necessary. No JavaScript required.

```html
<div class="bg-confetti-animated">…</div>
<div class="bg-confetti-static">…</div>
```

<Example>
    <div class="d-flex fd-column g16">
        <div>
            <span class="ff-mono mb8 d-block">Animated</span>
            <div class="bg-confetti-animated hs1"></div>
        </div>
        <div>
            <span class="ff-mono mb8 d-block">Static</span>
            <div class="bg-confetti-static h64"></div>
        </div>
    </div>
</Example>

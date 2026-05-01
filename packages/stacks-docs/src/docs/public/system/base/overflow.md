---
title: Overflow
description: Atomic overflow classes allow you to change an element's overflow properties quickly.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        {
            class: '.overflow-auto',
            output: 'overflow: auto;',
            define: 'If content fits inside the content box, it looks the same as visible, but still establishes a new block-formatting context. Desktop browsers like Firefox provide scrollbars if content overflows.'
        },
        {
            class: '.overflow-x-auto',
            output: 'overflow-x: auto;',
            define: 'If content fits inside the content box, it looks the same as visible in the x dimension, but still establishes a new block-formatting context. Desktop browsers like Firefox provide scrollbars if content overflows.'
        },
        {
            class: '.overflow-y-auto',
            output: 'overflow-y: auto;',
            define: 'If content fits inside the content box, it looks the same as visible in the y dimension, but still establishes a new block-formatting context. Desktop browsers like Firefox provide scrollbars if content overflows.'
        },
        {
            class: '.overflow-hidden',
            output: 'overflow: hidden;',
            define: 'Content is clipped if necessary to fit the content box. No scrollbars are provided.'
        },
        {
            class: '.overflow-x-hidden',
            output: 'overflow-x: hidden;',
            define: 'Content is clipped if necessary to fit the content box. No scrollbars are provided in the x dimension.'
        },
        {
            class: '.overflow-y-hidden',
            output: 'overflow-y: hidden;',
            define: 'Content is clipped if necessary to fit the content box. No scrollbars are provided in the y dimension.'
        },
        {
            class: '.overflow-scroll',
            output: 'overflow: scroll;',
            define: 'Content is clipped if necessary to fit the content box. Browsers display scrollbars whether or not any content is actually clipped. (This prevents scrollbars from appearing or disappearing when the content changes.) Printers may still print overflowing content.'
        },
        {
            class: '.overflow-x-scroll',
            output: 'overflow-x: scroll;',
            define: 'Content is clipped if necessary to fit the content box. Browsers display scrollbars whether or not any content is actually clipped in the x dimension.'
        },
        {
            class: '.overflow-y-scroll',
            output: 'overflow-y: scroll;',
            define: 'Content is clipped if necessary to fit the content box. Browsers display scrollbars whether or not any content is actually clipped in the y dimension.'
        },
        {
            class: '.overflow-visible',
            output: 'overflow: visible;',
            define: 'Content is not clipped and may be rendered outside the content box. This is the default value.'
        }
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

```html
<div class="overflow-auto">…</div>
<div class="overflow-x-auto">…</div>
<div class="overflow-y-auto">…</div>
<div class="overflow-hidden">…</div>
<div class="overflow-x-hidden">…</div>
<div class="overflow-y-hidden">…</div>
<div class="overflow-scroll">…</div>
<div class="overflow-x-scroll">…</div>
<div class="overflow-y-scroll">…</div>
<div class="overflow-visible">…</div>
```

<Example>
    <div class="overflow-x-auto d-grid grid__3 sm:grid__2 md:grid__3 lg:grid__2 g16 fs-caption ff-mono pb64" tabindex="0">
        <div>
            <div class="mb4">.overflow-auto</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-auto">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-x-auto</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-x-auto">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-y-auto</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-y-auto">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-hidden</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-hidden">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-x-hidden</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-x-hidden">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-y-hidden</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-y-hidden">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-scroll</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-scroll">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-x-scroll</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-x-scroll">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-y-scroll</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-y-scroll">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
        <div>
            <div class="mb4">.overflow-visible</div>
            <div class="ba bc-black-225 pt32 hs2 overflow-visible">
                <div class="ba bc-black-225 hs2 ws2"></div>
            </div>
        </div>
    </div>
</Example>

---
title: Vertical alignment
description: Atomic vertical alignment classes allow you to change an element's vertical alignment quickly.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.va-baseline',    output: 'vertical-align: baseline;' },
        { class: '.va-bottom',      output: 'vertical-align: bottom;' },
        { class: '.va-middle',      output: 'vertical-align: middle;' },
        { class: '.va-sub',         output: 'vertical-align: sub;' },
        { class: '.va-super',       output: 'vertical-align: super;' },
        { class: '.va-text-bottom', output: 'vertical-align: text-bottom;' },
        { class: '.va-text-top',    output: 'vertical-align: text-top;' },
        { class: '.va-top',         output: 'vertical-align: top;' },
        { class: '.va-unset',       output: 'vertical-align: unset;' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

```html
<div class="va-baseline">…</div>
<div class="va-bottom">…</div>
<div class="va-middle">…</div>
<div class="va-sub">…</div>
<div class="va-super">…</div>
<div class="va-text-bottom">…</div>
<div class="va-text-top">…</div>
<div class="va-top">…</div>
<div class="va-unset">…</div>
```

<Example>
    <div class="ws-nowrap fs-caption ff-mono">
        <div class="va-baseline my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-baseline</div>
        <div class="va-bottom my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-bottom</div>
        <div class="va-middle my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-middle</div>
        <div class="va-sub my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-sub</div>
        <div class="va-super my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-super</div>
        <div class="va-text-bottom my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-text-bottom</div>
        <div class="va-text-top my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-text-top</div>
        <div class="va-top my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-top</div>
        <div class="va-unset my4 bg-black-200 p12 ba bc-black-225 d-inline">.va-unset</div>
    </div>
</Example>

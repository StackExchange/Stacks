---
title: "Prose"
description: "The prose component provides proper styling for rendered Markdown."
---

<script lang="ts">
    import { Button } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import ProseContent from '$components/ProseContent.svelte';
    import ProseContentSandbox from '$components/ProseContentSandbox.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-prose',     parent: 'N/A', modifies: 'N/A',      description: 'Adds proper styling for rendered Markdown.' },
        { class: '.s-prose__sm', parent: 'N/A', modifies: '.s-prose', description: 'Decreases the base font size and line height.' },
    ];

    let minimalExpanded = $state(false);
    let fullExpanded    = $state(false);
    let smallExpanded   = $state(false);
</script>

## Parameters

<ClassTable {classes} />

## Examples

### Minimal

We modified this test document from the folks at [Tailwind](https://github.com/tailwindcss/typography/blob/master/README.md) to demonstrate and explain our design choices.

<div class="d-flex fd-column ba bc-black-200 bar-sm mb32">
    <div class="ps-sticky bg-white z-popover py8 t0 bb bc-black-200">
        <div class="px16">
            <Button
                variant="tonal"
                aria-expanded={minimalExpanded}
                aria-controls="prose-example-minimal"
                onclick={() => minimalExpanded = !minimalExpanded}
            >{minimalExpanded ? 'Collapse example' : 'Expand example'}</Button>
        </div>
    </div>
    <div class="px16 py8">
        <pre class="s-code-block" tabindex="0"><code class="s-code-block language-html">&lt;div class="s-prose"&gt;
    …
&lt;/div&gt;</code></pre>
    </div>
    <div
        id="prose-example-minimal"
        class="px16 overflow-y-auto"
        class:hmx4={!minimalExpanded}
    >
        <div class="s-prose" role="presentation">
            <ProseContent />
        </div>
    </div>
</div>

### Full Markdown spec

This example includes the full kitchen-sink collection of everything the Markdown spec includes.

<div class="d-flex fd-column ba bc-black-200 bar-sm mb32">
    <div class="ps-sticky bg-white z-popover py8 t0 bb bc-black-200">
        <div class="px16">
            <Button
                variant="tonal"
                aria-expanded={fullExpanded}
                aria-controls="prose-example-full"
                onclick={() => fullExpanded = !fullExpanded}
            >{fullExpanded ? 'Collapse example' : 'Expand example'}</Button>
        </div>
    </div>
    <div
        id="prose-example-full"
        class="px16 overflow-y-auto"
        class:hmx4={!fullExpanded}
    >
        <div class="s-prose" role="presentation">
            <ProseContentSandbox />
        </div>
    </div>
</div>

## Sizing

### Small

In ancillary content like comments or side-discussions, it may be appropriate to add the small variation.

<div class="d-flex fd-column ba bc-black-200 bar-sm mb32">
    <div class="ps-sticky bg-white z-popover py8 t0 bb bc-black-200">
        <div class="px16">
            <Button
                variant="tonal"
                aria-expanded={smallExpanded}
                aria-controls="prose-example-small"
                onclick={() => smallExpanded = !smallExpanded}
            >{smallExpanded ? 'Collapse example' : 'Expand example'}</Button>
        </div>
    </div>
    <div class="px16 py8">
        <pre class="s-code-block" tabindex="0"><code class="s-code-block language-html">&lt;div class="s-prose s-prose__sm"&gt;
    …
&lt;/div&gt;</code></pre>
    </div>
    <div
        id="prose-example-small"
        class="px16 overflow-y-auto"
        class:hmx4={!smallExpanded}
    >
        <div class="s-prose s-prose__sm" role="presentation">
            <ProseContent />
        </div>
    </div>
</div>

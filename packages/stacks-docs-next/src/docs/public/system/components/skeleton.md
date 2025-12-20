---
title: Skeleton
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-skeleton--docs
description: A skeleton component is used to indicate that a large block of content, such as an AI responses or post summary, is loading.
updated: 2025-12-20
---

<script lang="ts">
  const skeletonClasses = [
    { class: '.s-skeleton', applies: 'N/A', description: 'Base monochrome style' },
    { class: '.s-skeleton__ai', applies: '.s-skeleton', description: 'Colorful skeleton style for AI elements' }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Class</th>
                <th scope="col">Applied to</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody class="fs-caption">
            {#each skeletonClasses as item}
            <tr>
                <td><code class="stacks-code ws-nowrap">{item.class}</code></td>
                <td>{#if item.applies === 'N/A'}<em class="fc-black-350">{item.applies}</em>{:else}<code class="stacks-code">{item.applies}</code>{/if}</td>
                <td>{item.description}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

## Examples

### Base style

The default skeleton should be used when loading large blocks will render multiple rows of content.

```html
<div class="s-skeleton">
    <div class="v-visible-sr">Loading…</div>
</div>
```

<div class="s-skeleton">
    <div class="v-visible-sr">Loading…</div>
</div>

### AI

The `ai` variant of the skeleton should be used when loading AI responses.

```html
<div class="s-skeleton s-skeleton__ai">
    <div class="v-visible-sr">Loading…</div>
</div>
```

<div class="s-skeleton s-skeleton__ai">
    <div class="v-visible-sr">Loading…</div>
</div>

## Accessibility

For accessibility, it's important to add fallback loading text that is visible to screen readers. Additionally, you should add `aria-busy="true"` to the component that triggered the loading state while the skeleton is shown.

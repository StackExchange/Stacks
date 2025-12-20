---
title: Spinner
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-spinner--docs
description: A loading spinner is used for indicating a loading state of a page or section. It is colored according to the currently applying font color.
updated: 2025-12-20
---

<script lang="ts">
  const spinnerClasses = [
    { class: '.s-spinner', applies: 'N/A', description: 'Base loading style that is used almost universally' },
    { class: '.s-spinner__xs', applies: '.s-spinner', description: 'An extra small loading style for compact layouts' },
    { class: '.s-spinner__sm', applies: '.s-spinner', description: 'A small style for compact layouts' },
    { class: '.s-spinner__md', applies: '.s-spinner', description: 'A medium style for larger layouts' },
    { class: '.s-spinner__lg', applies: '.s-spinner', description: 'A large style for the largest layouts' },
    { class: '.is-loading', applies: 'Any text-based elements', description: 'Prepends a spinner pseudo-element to the element. Prefer using the spinner component when possible.' }
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
            {#each spinnerClasses as item}
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

The spinner's colors are based on the font color of the element, which will usually be inherited from its parent. If you need to apply a color override, the [font color classes](/product/foundation/colors) can provide themability. In most situations, a black and white spinner based on the default font color will be appropriate.

For accessibility, it's important to add fallback loading text that is visible to screen readers. Additionally, you should add `aria-busy="true"` to the component that triggered the loading state while the spinner is shown.

```html
<div class="s-spinner s-spinner__xs">
    <div class="v-visible-sr">Loading…</div>
</div>
<div class="s-spinner s-spinner__sm">
    <div class="v-visible-sr">Loading…</div>
</div>
<div class="s-spinner">
    <div class="v-visible-sr">Loading…</div>
</div>
<div class="s-spinner s-spinner__md">
    <div class="v-visible-sr">Loading…</div>
</div>
<div class="s-spinner s-spinner__lg fc-theme-primary">
    <div class="v-visible-sr">Loading…</div>
</div>
<div class="is-loading">
    Loading…
</div>
```

<div class="d-flex g16 fw-wrap">
    <div class="flex--item">
        <div class="s-spinner s-spinner__xs">
            <div class="v-visible-sr">Loading…</div>
        </div>
    </div>
    <div class="flex--item">
        <div class="s-spinner s-spinner__sm">
            <div class="v-visible-sr">Loading…</div>
        </div>
    </div>
    <div class="flex--item">
        <div class="s-spinner">
            <div class="v-visible-sr">Loading…</div>
        </div>
    </div>
    <div class="flex--item">
        <div class="s-spinner s-spinner__md">
            <div class="v-visible-sr">Loading…</div>
        </div>
    </div>
    <div class="flex--item">
        <div class="s-spinner s-spinner__lg fc-theme-primary">
            <div class="v-visible-sr">Loading…</div>
        </div>
    </div>
    <div class="flex--item">
        <div class="is-loading">
            Loading…
        </div>
    </div>
</div>

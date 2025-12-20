---
title: Tags
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-tag--docs
figma: https://svelte.stackoverflow.design/figma/tags
description: Tags are an interactive, community-generated keyword that allow communities to label, organize, and discover related content. Tags are maintained by their respective communities
updated: 2025-12-20
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconClearSm } from '@stackoverflow/stacks-icons';

  const tagClasses = [
    { class: '.s-tag', applies: 'N/A', description: 'Base tag style that is used almost universally.' },
    { class: '.s-tag__moderator', applies: '.s-tag', description: 'Exclusively used within Meta communities by moderators (and employees) to assign unique statuses to questions.' },
    { class: '.s-tag__required', applies: '.s-tag', description: 'Exclusively used within Meta communities to denote the post type. One of these tags are required on all Meta posts.' },
    { class: '.s-tag__ignored', applies: '.s-tag', description: 'Prepends an icon to indicate the tag is ignored.' },
    { class: '.s-tag__watched', applies: '.s-tag', description: 'Prepends an icon to indicate the tag is watched.' },
    { class: '.s-tag--dismiss', applies: 'N/A', description: 'A child element within <code class="stacks-code">.s-tag</code> for a clear or dismiss action icon. When using this element, it should be rendered as a <code class="stacks-code">button</code> containing the icon and the parent <code class="stacks-code">.s-tag</code> should be rendered as a <code class="stacks-code">span</code> element.' },
    { class: '.s-tag--sponsor', applies: 'N/A', description: 'A child element within <code class="stacks-code">.s-tag</code> that correctly positions a tag\'s sponsor logo.' }
  ];

  const tagSizes = [
    { class: 's-tag__sm' },
    { class: null },
    { class: 's-tag__lg' }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th class="s-table--cell3" scope="col">Class</th>
                <th class="s-table--cell2" scope="col">Applied to</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody class="fs-caption">
            {#each tagClasses as item}
            <tr>
                <th scope="row"><code class="stacks-code">{item.class}</code></th>
                <td><code class="stacks-code bg-white">{item.applies}</code></td>
                <td class="p8">{@html item.description}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

## Accessibility

Tags should be focusable and navigable with the keyboard.
The various tag states (Required, Moderator, Watched, Ignored) are visually distinct but do not include any text indicators for screen readers.
For that reason it is recommended to provide additional context using hidden text elements with the `v-visible-sr` class.

## Examples

### Default tag

```html
<a class="s-tag" href="#">jquery</a>
<span class="s-tag">javascript <button class="s-tag--dismiss"><span class="v-visible-sr">Dismiss javascript tag</span><svg>...</svg></button></span>
<a class="s-tag" href="#"><img class="s-tag--sponsor" src="https://i.stack.imgur.com/tKsDb.png" width="16" height="18" alt="Google Android"> android <div class="v-visible-sr">Sponsored tag</div></a>
```

<div class="d-flex g4 fw-wrap">
    <a class="s-tag" href="#">jquery</a>
    <span class="s-tag">javascript <button class="s-tag--dismiss"><span class="v-visible-sr">Dismiss javascript tag</span><Icon src={IconClearSm} /></button></span>
    <a class="s-tag" href="#"><img class="s-tag--sponsor" src="https://i.stack.imgur.com/tKsDb.png" width="16" height="18" alt="Google Android"> android <div class="v-visible-sr">Sponsored tag</div></a>
</div>

### Moderator

```html
<a class="s-tag s-tag__moderator" href="#">status-completed <div class="v-visible-sr">Moderator tag</div></a>
<span class="s-tag s-tag__moderator">status-bydesign <div class="v-visible-sr">Moderator tag</div><button class="s-tag--dismiss"><span class="v-visible-sr">Dismiss status-bydesign tag</span><svg>...</svg></button></span>
<a class="s-tag s-tag__moderator" href="#">status-planned <div class="v-visible-sr">Moderator tag</div></a>
```

<div class="d-flex g4 fw-wrap">
    <a class="s-tag s-tag__moderator" href="#">status-completed <div class="v-visible-sr">Moderator tag</div></a>
    <span class="s-tag s-tag__moderator">status-bydesign <div class="v-visible-sr">Moderator tag</div><button class="s-tag--dismiss"><span class="v-visible-sr">Dismiss status-bydesign tag</span><Icon src={IconClearSm} /></button></span>
    <a class="s-tag s-tag__moderator" href="#">status-planned <div class="v-visible-sr">Moderator tag</div></a>
</div>

### Required

```html
<a class="s-tag s-tag__required" href="#">discussion <div class="v-visible-sr">Required tag</div></a>
<span class="s-tag s-tag__required">feature-request <div class="v-visible-sr">Required tag</div><button class="s-tag--dismiss"><span class="v-visible-sr">Dismiss feature-request tag</span><svg>...</svg></button></span>
<a class="s-tag s-tag__required" href="#">bug <div class="v-visible-sr">Required tag</div></a>
```

<div class="d-flex g4 fw-wrap">
    <a class="s-tag s-tag__required" href="#">discussion <div class="v-visible-sr">Required tag</div></a>
    <span class="s-tag s-tag__required">feature-request <div class="v-visible-sr">Required tag</div><button class="s-tag--dismiss"><span class="v-visible-sr">Dismiss feature-request tag</span><Icon src={IconClearSm} /></button></span>
    <a class="s-tag s-tag__required" href="#">bug <div class="v-visible-sr">Required tag</div></a>
</div>

### Watched

```html
<a class="s-tag s-tag__watched" href="#">asp-net <div class="v-visible-sr">Watched tag</div></a>
```

<div class="d-flex g4 fw-wrap">
    <a class="s-tag s-tag__watched" href="#">asp-net <div class="v-visible-sr">Watched tag</div></a>
</div>

### Ignored

```html
<a class="s-tag s-tag__ignored" href="#">netscape <div class="v-visible-sr">Ignored tag</div></a>
```

<div class="d-flex g4 fw-wrap">
    <a class="s-tag s-tag__ignored" href="#">netscape <div class="v-visible-sr">Ignored tag</div></a>
</div>

## Sizes

<table class="s-table s-table__bx-simple">
    <thead>
        <tr>
            <th class="s-table--cell2" scope="col">Class</th>
            <th class="s-table--cell2" scope="col">Applied to</th>
            <th scope="col">Example</th>
        </tr>
    </thead>
    <tbody class="fs-caption">
        {#each tagSizes as item}
        <tr>
            <th scope="row"><code class="stacks-code">{#if item.class}.{item.class}{:else}.s-tag{/if}</code></th>
            <td><code class="stacks-code bg-white">{#if item.class}.s-tag{:else}<em class="fc-light">N/A</em>{/if}</code></td>
            <td class="p8"><span class="s-tag {item.class || ''}">css</span></td>
        </tr>
        {/each}
    </tbody>
</table>

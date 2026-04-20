---
title: "Tags"
description: "Tags are an interactive, community-generated keyword that allow communities to label, organize, and discover related content. Tags are maintained by their respective communities."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-tag--docs"
figma: "https://svelte.stackoverflow.design/figma/tags"
---

<script lang="ts">
    import { Tag } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import PreviewTable from '$components/PreviewTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';
    import type { PreviewTableRow } from '$components/PreviewTable.svelte';

    const sizesRows: PreviewTableRow[] = [
        { classes: ['.s-tag__sm'], size: 'sm',      label: 'css', description: 'Apply a small size to the tag.' },
        { classes: ['N/A'],        size: undefined,  label: 'css', description: 'The default tag size.' },
        { classes: ['.s-tag__lg'], size: 'lg',       label: 'css', description: 'Apply a large size to the tag.' },
    ];

    const classes: ClassTableRow[] = [
        { class: '.s-tag',             parent: 'N/A',    modifies: 'N/A',    description: 'Base tag style that is used almost universally.' },
        { class: '.s-tag--dismiss',    parent: '.s-tag', modifies: 'N/A',    description: 'For a clear or dismiss action icon. When using this element, it should be rendered as a `button` containing the icon and the parent `.s-tag` should be rendered as a `span` element.' },
        { class: '.s-tag--sponsor',    parent: '.s-tag', modifies: 'N/A',    description: "Correctly positions a tag's sponsor logo." },
        { class: '.s-tag__moderator',  parent: 'N/A',    modifies: '.s-tag', description: 'Exclusively used within Meta communities by moderators (and employees) to assign unique statuses to questions.' },
        { class: '.s-tag__required',   parent: 'N/A',    modifies: '.s-tag', description: 'Exclusively used within Meta communities to denote the post type. One of these tags are required on all Meta posts.' },
        { class: '.s-tag__ignored',    parent: 'N/A',    modifies: '.s-tag', description: 'Prepends an icon to indicate the tag is ignored.' },
        { class: '.s-tag__watched',    parent: 'N/A',    modifies: '.s-tag', description: 'Prepends an icon to indicate the tag is watched.' },
        { class: '.s-tag__sm',         parent: 'N/A',    modifies: '.s-tag', description: 'Apply a small size to the tag.' },
        { class: '.s-tag__lg',         parent: 'N/A',    modifies: '.s-tag', description: 'Apply a large size to the tag.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Accessibility

Tags should be focusable and navigable with the keyboard. The various tag states (Required, Moderator, Watched, Ignored) are visually distinct but do not include any text indicators for screen readers. For that reason it is recommended to provide additional context using hidden text elements with the `v-visible-sr` class.

## Examples

### Default tag

```html
<a class="s-tag" href="#">…</a>
<span class="s-tag">… <button class="s-tag--dismiss"><span class="v-visible-sr">Dismiss … tag</span>…</button></span>
<a class="s-tag" href="…"><img class="s-tag--sponsor" src="…"> … <div class="v-visible-sr">Sponsored tag</div></a>
<span class="s-tag">
    <a href="…">…</a>
    <button class="s-tag--dismiss"><span class="v-visible-sr">Dismiss … tag</span>…</button>
</span>
```

<Example>
    <div class="d-flex g4 fw-wrap">
        <Tag href="#">jquery</Tag>
        <Tag dismissable>javascript</Tag>
        <Tag href="#">
            {#snippet sponsor()}
                <img src="https://i.stack.imgur.com/tKsDb.png" width="16" height="18" alt="Google Android" />
            {/snippet}
            android
            <div class="v-visible-sr">Sponsored tag</div>
        </Tag>
        <Tag href="#" dismissable>javascript</Tag>
    </div>
</Example>

### Moderator

```html
<a class="s-tag s-tag__moderator" href="#">status-completed <div class="v-visible-sr">Moderator tag</div></a>
<span class="s-tag s-tag__moderator">status-bydesign <div class="v-visible-sr">Moderator tag</div><button class="s-tag--dismiss">…</button></span>
<a class="s-tag s-tag__moderator" href="#">status-planned <div class="v-visible-sr">Moderator tag</div></a>
```

<Example>
    <div class="d-flex g4 fw-wrap">
        <Tag href="#" variant="moderator">status-completed <div class="v-visible-sr">Moderator tag</div></Tag>
        <Tag variant="moderator" dismissable>status-bydesign <div class="v-visible-sr">Moderator tag</div></Tag>
        <Tag href="#" variant="moderator">status-planned <div class="v-visible-sr">Moderator tag</div></Tag>
    </div>
</Example>

### Required

```html
<a class="s-tag s-tag__required" href="#">discussion <div class="v-visible-sr">Required tag</div></a>
<span class="s-tag s-tag__required">feature-request <div class="v-visible-sr">Required tag</div><button class="s-tag--dismiss">…</button></span>
<a class="s-tag s-tag__required" href="#">bug <div class="v-visible-sr">Required tag</div></a>
```

<Example>
    <div class="d-flex g4 fw-wrap">
        <Tag href="#" variant="required">discussion <div class="v-visible-sr">Required tag</div></Tag>
        <Tag variant="required" dismissable>feature-request <div class="v-visible-sr">Required tag</div></Tag>
        <Tag href="#" variant="required">bug <div class="v-visible-sr">Required tag</div></Tag>
    </div>
</Example>

### Watched

```html
<a class="s-tag s-tag__watched" href="#">asp-net <div class="v-visible-sr">Watched tag</div></a>
```

<Example>
    <Tag href="#" watched>asp-net <div class="v-visible-sr">Watched tag</div></Tag>
</Example>

### Ignored

```html
<a class="s-tag s-tag__ignored" href="#">netscape <div class="v-visible-sr">Ignored tag</div></a>
```

<Example>
    <Tag href="#" ignored>netscape <div class="v-visible-sr">Ignored tag</div></Tag>
</Example>

## Sizes

```html
<a class="s-tag s-tag__sm" href="#">css</a>
<a class="s-tag" href="#">css</a>
<a class="s-tag s-tag__lg" href="#">css</a>
```

<Example>
    <PreviewTable rows={sizesRows} columnLabel="Modifier class">
        {#snippet example(row)}
            <Tag href="#" size={row.size}>{row.label}</Tag>
        {/snippet}
    </PreviewTable>
</Example>

---
title: "Bling"
description: "Bling is used to indicate award type in badges and user cards."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-bling--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18798"
---

<script lang="ts">
    import { Bling } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import PreviewTable from '$components/PreviewTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';
    import type { PreviewTableRow } from '$components/PreviewTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-bling',           modifies: 'N/A',      description: 'Base bling element.' },
        { class: '.s-bling__gold',     modifies: '.s-bling', description: 'Gold bling element.' },
        { class: '.s-bling__silver',   modifies: '.s-bling', description: 'Silver bling element.' },
        { class: '.s-bling__bronze',   modifies: '.s-bling', description: 'Bronze bling element.' },
        { class: '.s-bling__activity', modifies: '.s-bling', description: 'Activity bling element.' },
        { class: '.s-bling__filled',   modifies: '.s-bling', description: 'Filled bling element.' },
        { class: '.s-bling__rep',      modifies: '.s-bling', description: 'Reputation bling element.' },
        { class: '.s-bling__sm',       modifies: '.s-bling', description: 'Small bling element.' },
        { class: '.s-bling__lg',       modifies: '.s-bling', description: 'Large bling element.' },
    ];

    const types: PreviewTableRow[] = [
        { type: undefined, classes: ['.s-bling'],                           description: 'A general bling shape used for reputation, notifications or other.' },
        { type: 'gold',    classes: ['.s-bling', '.s-bling__gold'],         description: 'The "gold" award bling shape.' },
        { type: 'silver',  classes: ['.s-bling', '.s-bling__silver'],       description: 'The "silver" award bling shape.' },
        { type: 'bronze',  classes: ['.s-bling', '.s-bling__bronze'],       description: 'The "bronze" award bling shape.' },
    ];

    const filled: PreviewTableRow[] = [
        { type: undefined,  classes: ['.s-bling', '.s-bling__filled'],                       description: 'A general bling used for information, status, labels or other.' },
        { type: 'rep',      classes: ['.s-bling', '.s-bling__filled', '.s-bling__rep'],      description: 'A "rep" bling used for general reputation points.' },
        { type: 'activity', classes: ['.s-bling', '.s-bling__filled', '.s-bling__activity'], description: 'An activity bling to signal real-time events and draw attention.' },
        { type: 'gold',     classes: ['.s-bling', '.s-bling__filled', '.s-bling__gold'],     description: 'A "gold" award bling.' },
        { type: 'silver',   classes: ['.s-bling', '.s-bling__filled', '.s-bling__silver'],   description: 'A "silver" award bling.' },
        { type: 'bronze',   classes: ['.s-bling', '.s-bling__filled', '.s-bling__bronze'],   description: 'A "bronze" award bling.' },
    ];

    const sizes: PreviewTableRow[] = [
        { size: 'sm',      classes: ['.s-bling', '.s-bling__filled', '.s-bling__sm'], description: 'A "sm" bling.' },
        { size: undefined, classes: ['.s-bling', '.s-bling__filled'],                 description: 'A "default" bling.' },
        { size: 'lg',      classes: ['.s-bling', '.s-bling__filled', '.s-bling__lg'], description: 'A "lg" bling.' },
    ];
</script>

## Classes

<ClassTable {classes} expandable />

## Types

Use the clear bling variant only when its associated color is already present in the component, such as within a colored tag badge or alongside a filled element.

```html
<span class="s-bling">
    <span class="v-visible-sr">…</span>
</span>
<span class="s-bling s-bling__gold">
    <span class="v-visible-sr">…</span>
</span>
<span class="s-bling s-bling__silver">
    <span class="v-visible-sr">…</span>
</span>
<span class="s-bling s-bling__bronze">
    <span class="v-visible-sr">…</span>
</span>
```

<Example>
    <PreviewTable rows={types}>
        {#snippet example(row)}
            <Bling name="{row.type ?? 'default'} bling" type={row.type} />
        {/snippet}
    </PreviewTable>
</Example>

## Filled

Use the filled bling style to represent a specific achievement badge or to display the total count of badges a user has earned.

```html
<span class="s-bling s-bling__filled">…</span>
<span class="s-bling s-bling__filled s-bling__rep">…</span>
<span class="s-bling s-bling__filled s-bling__activity">…</span>
<span class="s-bling s-bling__filled s-bling__gold">…</span>
<span class="s-bling s-bling__filled s-bling__silver">…</span>
<span class="s-bling s-bling__filled s-bling__bronze">…</span>
```

<Example>
    <PreviewTable rows={filled}>
        {#snippet example(row)}
            <Bling name="{row.type ?? 'default'} bling" type={row.type} filled />
        {/snippet}
    </PreviewTable>
</Example>

## Sizes

A bling component has a default size. To change the bling's size, apply one of the following sizing classes along with the base `.s-bling` class.

```html
<span class="s-bling s-bling__filled s-bling__sm">…</span>
<span class="s-bling s-bling__filled">…</span>
<span class="s-bling s-bling__filled s-bling__lg">…</span>
```

<Example>
    <PreviewTable rows={sizes}>
        {#snippet example(row)}
            <Bling name="{row.size ?? 'default'} bling" filled size={row.size} />
        {/snippet}
    </PreviewTable>
</Example>

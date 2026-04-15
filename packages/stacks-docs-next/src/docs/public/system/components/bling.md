---
title: "Bling"
description: "Bling is used to indicate award type in badges and user cards."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-bling--docs"
---

<script lang="ts">
    import { Bling } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-bling',            modifies: 'N/A',      description: 'Base bling element.' },
        { class: '.s-bling__gold',      modifies: '.s-bling', description: 'Gold bling element.' },
        { class: '.s-bling__silver',    modifies: '.s-bling', description: 'Silver bling element.' },
        { class: '.s-bling__bronze',    modifies: '.s-bling', description: 'Bronze bling element.' },
        { class: '.s-bling__activity',  modifies: '.s-bling', description: 'Activity bling element.' },
        { class: '.s-bling__filled',    modifies: '.s-bling', description: 'Filled bling element.' },
        { class: '.s-bling__rep',       modifies: '.s-bling', description: 'Reputation bling element.' },
        { class: '.s-bling__sm',        modifies: '.s-bling', description: 'Small bling element.' },
        { class: '.s-bling__lg',        modifies: '.s-bling', description: 'Large bling element.' },
    ];
</script>

## Classes

<ClassTable {classes} />

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
    <div class="d-flex g16 ai-center">
        <Bling name="Default bling" />
        <Bling name="Gold bling"   type="gold" />
        <Bling name="Silver bling" type="silver" />
        <Bling name="Bronze bling" type="bronze" />
    </div>
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
    <div class="d-flex g16 ai-center">
        <Bling name="Default bling"   filled />
        <Bling name="Rep bling"       type="rep"      filled />
        <Bling name="Activity bling"  type="activity" filled />
        <Bling name="Gold bling"      type="gold"     filled />
        <Bling name="Silver bling"    type="silver"   filled />
        <Bling name="Bronze bling"    type="bronze"   filled />
    </div>
</Example>

## Sizes

A bling component has a default size. To change the bling's size, apply one of the following sizing classes along with the base `.s-bling` class.

```html
<span class="s-bling s-bling__filled s-bling__sm">…</span>
<span class="s-bling s-bling__filled">…</span>
<span class="s-bling s-bling__filled s-bling__lg">…</span>
```

<Example>
    <div class="d-flex g16 ai-center">
        <Bling name="Small bling"   filled size="sm" />
        <Bling name="Default bling" filled />
        <Bling name="Large bling"   filled size="lg" />
    </div>
</Example>

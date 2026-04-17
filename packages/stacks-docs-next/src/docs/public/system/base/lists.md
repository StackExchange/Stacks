---
title: Lists
description: Stacks provides a few atomic classes to help style lists.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.list-reset',      output: 'list-style: none; margin: 0; padding: 0;' },
        { class: '.list-ls-none',    output: 'list-style: none;' },
        { class: '.list-ls-disc',    output: 'list-style-type: disc;' },
        { class: '.list-ls-decimal', output: 'list-style-type: decimal;' },
        { class: '.list-ls-unset',   output: 'list-style-type: inherit;' },
        { class: '.list-inside',     output: 'list-style-position: inside;' },
        { class: '.list-outside',    output: 'list-style-position: outside;' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

By design, our lists inherit some sensible margins by default. However, in some layouts, you may want to strip these default margins by adding `.list-reset` and then explicitly choosing a list style and list style position. These classes can be applied to ordered and unordered lists interchangably, though if you're wanting to show decimals, it's most appropriate to mark your list up as an ordered list.

### List Style

```html
<ol class="list-reset">
    …
</ol>
<ul class="list-ls-none">
    …
</ul>
<ul class="list-ls-disc">
    …
</ul>
<ol class="list-ls-decimal">
    …
</ol>
```

<Example>
    <ol class="list-reset">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
    </ol>
    <ul class="list-ls-none">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
    </ul>
    <ul class="list-ls-disc">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
    </ul>
    <ol class="list-ls-decimal">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
    </ol>
</Example>

### List Position

By default, the position of markers in a list item are outside their containing element.

```html
<ul class="list-reset list-ls-disc list-inside">
    …
</ul>
<ul class="list-reset list-ls-disc list-outside">
    …
</ul>
```

<Example>
    <ul class="list-reset list-ls-disc list-inside bg-black-200 mb16">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
    </ul>
    <ul class="list-reset list-ls-disc list-outside bg-black-200">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
    </ul>
</Example>

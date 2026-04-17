---
title: "Labels"
description: "Labels are used to describe inputs, select menus, textareas, radio buttons, and checkboxes."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=713-24991&p=f&m=dev"
---

<script lang="ts">
    import { Notice } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-label',     parent: 'N/A', modifies: 'N/A',      description: 'Base label style.' },
        { class: '.s-label__sm', parent: 'N/A', modifies: '.s-label', description: 'Apply a small size.' },
        { class: '.s-label__lg', parent: 'N/A', modifies: '.s-label', description: 'Apply a large size.' },
    ];
</script>

## Classes

<ClassTable {classes} />

Labels inform users what information is being asked of them. They should be written in sentence case.

<Notice variant="info" role="note" class="mb16">
    <p>For usability reasons, if a label is connected with an input, the <code>for="[id]"</code> attribute should be filled in. This attribute references the input's <code>id="[value]"</code> value. This makes clicking the label automatically focus the proper input.</p>
</Notice>

## Base style

```html
<form class="s-form-group">
    <label class="s-label" for="question-title">Question title</label>
    <div class="d-flex ps-relative">
        <input class="s-input" type="text" id="question-title" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
    </div>
</form>
```

<Example>
    <form class="s-form-group">
        <label class="s-label" for="question-title">Question title</label>
        <div class="d-flex ps-relative">
            <input class="s-input" type="text" id="question-title" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
        </div>
    </form>
</Example>

## Sizes

<Example>
    <table class="s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Class</th>
                <th scope="col">Name</th>
                <th scope="col">Size</th>
                <th scope="col">Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="va-middle"><code>.s-label__sm</code></td>
                <td class="va-middle">Small</td>
                <td class="va-middle">14px</td>
                <td class="va-middle"><label class="s-label s-label__sm">Question title</label></td>
            </tr>
            <tr>
                <td class="va-middle fc-black-350">N/A</td>
                <td class="va-middle">Default</td>
                <td class="va-middle">16px</td>
                <td class="va-middle"><label class="s-label">Question title</label></td>
            </tr>
            <tr>
                <td class="va-middle"><code>.s-label__lg</code></td>
                <td class="va-middle">Large</td>
                <td class="va-middle">22px</td>
                <td class="va-middle"><label class="s-label s-label__lg">Question title</label></td>
            </tr>
        </tbody>
    </table>
</Example>

## Description copy

When a label or input needs further explantation, text should be placed directly underneath it.

```html
<form class="s-form-group">
    <label class="s-label" for="example-item">
        Question title
    </label>
    <p class="s-description">Clear question titles are more likely to get answered.</p>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-item" type="text" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?" />
    </div>
</form>
```

<Example>
    <form class="s-form-group">
        <label class="s-label" for="question-title-copy">
            Question title
        </label>
        <p class="s-description">Clear question titles are more likely to get answered.</p>
        <div class="d-flex ps-relative">
            <input class="s-input" id="question-title-copy" type="text" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?" />
        </div>
    </form>
</Example>

## Status

Use status indicators to append essential context to a label. This pattern supports any of the various badge states available. When using this indicator, display the full word 'Required' rather than an asterisk. Note: If the majority of a form's inputs are required, prioritize the asterisk pattern outlined in [Input Accessibility](/system/components/inputs#accessibility) instead.

```html
<form class="s-form-group">
    <label class="s-label" for="question-title-required">Question title<span class="s-badge s-badge__danger">Required</span></label>
    <div class="d-flex ps-relative">
        <input class="s-input" type="text" id="question-title-required" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
    </div>
</form>
```

<Example>
    <form class="s-form-group">
        <label class="s-label" for="question-title-required">Question title<span class="s-badge s-badge__danger">Required</span></label>
        <div class="d-flex ps-relative">
            <input class="s-input" type="text" id="question-title-required" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
        </div>
    </form>
</Example>

```html
<form class="s-form-group">
    <label class="s-label" for="question-tags">Question tags<span class="s-badge">Optional</span></label>
    <div class="d-flex ps-relative">
        <input class="s-input" type="text" id="question-tags" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
    </div>
</form>
```

<Example>
    <form class="s-form-group">
        <label class="s-label" for="question-tags">Question tags<span class="s-badge">Optional</span></label>
        <div class="d-flex ps-relative">
            <input class="s-input" type="text" id="question-tags" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
        </div>
    </form>
</Example>

```html
<form class="s-form-group">
    <label class="s-label" for="question-title-new">What is your favorite animal?<span class="s-badge s-badge__info">Saved for later</span></label>
    <div class="d-flex ps-relative">
        <input class="s-input" type="text" id="question-title-new" placeholder="e.g. hedgehog, platypus, sugar glider"/>
    </div>
</form>
```

<Example>
    <form class="s-form-group">
        <label class="s-label" for="question-title-new">What is your favorite animal?<span class="s-badge s-badge__info">Saved for later</span></label>
        <div class="d-flex ps-relative">
            <input class="s-input" type="text" id="question-title-new" placeholder="e.g. hedgehog, platypus, sugar glider"/>
        </div>
    </form>
</Example>

```html
<form class="s-form-group">
    <label class="s-label" for="question-title-beta">Notify people<span class="s-badge s-badge__featured">New feature</span></label>
    <div class="d-flex ps-relative">
        <input class="s-input" type="text" id="question-title-beta" placeholder="e.g. jdoe, bgates, sjobs"/>
    </div>
</form>
```

<Example>
    <form class="s-form-group">
        <label class="s-label" for="question-title-beta">Notify people<span class="s-badge s-badge__featured">New feature</span></label>
        <div class="d-flex ps-relative">
            <input class="s-input" type="text" id="question-title-beta" placeholder="e.g. jdoe, bgates, sjobs"/>
        </div>
    </form>
</Example>

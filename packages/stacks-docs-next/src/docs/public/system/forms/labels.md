---
title: Labels
figma: https://svelte.stackoverflow.design/figma/labels
description: Labels are used to describe inputs, select menus, textareas, radio buttons, and checkboxes.
updated: 2025-12-20
---

<script lang="ts">
  const labelSizes = [
    { name: 'Small', size: '12px', class: 's-label__sm' },
    { name: 'Default', size: '15px', class: null },
    { name: 'Medium', size: '17px', class: 's-label__md' },
    { name: 'Large', size: '21px', class: 's-label__lg' },
    { name: 'Extra Large', size: '27px', class: 's-label__xl' }
  ];
</script>

Labels inform users what information is being asked of them. They should be written in sentence case.

<div class="s-notice">
    <p class="mb0">For usability reasons, if a label is connected with an input, the <code class="stacks-code">for="[id]"</code> attribute should be filled in. This attribute references the input's <code class="stacks-code">id="[value]"</code> value. This makes clicking the label automatically focus the proper input.</p>
</div>

## Base style

```html
<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title"
        >Question title</label
    >
    <div class="d-flex ps-relative">
        <input
            class="flex--item s-input"
            type="text"
            id="question-title"
            placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"
        />
    </div>
</form>
```

<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title">Question title</label>
    <div class="d-flex ps-relative">
        <input class="flex--item s-input" type="text" id="question-title" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
    </div>
</form>

## Sizes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple va-middle">
        <thead>
            <tr>
                <th scope="col" class="s-table--cell2">Name</th>
                <th scope="col" class="s-table--cell1">Size</th>
                <th scope="col" class="s-table--cell2">Class</th>
                <th scope="col">Example</th>
            </tr>
        </thead>
        <tbody>
            {#each labelSizes as item}
            <tr>
                <th scope="row">{item.name}</th>
                <td>{item.size}</td>
                <td>{#if item.class}<code class="stacks-code">.{item.class}</code>{:else}<em class="fc-light">N/A</em>{/if}</td>
                <td><label class="s-label {item.class || ''}">Question title</label></td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

## Description copy

When a label or input needs further explantation, text should be placed directly underneath it.

```html
<form class="d-flex gy4 fd-column">
    <label class="d-block s-label" for="example-item"> Question title </label>
    <p class="s-description mtn2 mb0">
        Clear question titles are more likely to get answered.
    </p>
    <div class="d-flex ps-relative">
        <input
            class="s-input"
            id="example-item"
            type="text"
            placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"
        />
    </div>
</form>
```

<form class="d-flex gy4 fd-column">
    <label class="d-block s-label" for="question-title-copy">
        Question title
    </label>
    <p class="s-description mtn2 mb0">Clear question titles are more likely to get answered.</p>
    <div class="d-flex ps-relative">
        <input class="s-input" id="question-title-copy" type="text" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?" />
    </div>
</form>

## Status

When you need to flag labels as required or optional, use the following flags. Use the full word "Required" or "Optional" for these flags instead of using asterisks. If a majority of a form's inputs are required, use the asterisk symbol to indicate which fields are required and include a legend. See [Input Accessibility](/product/components/inputs/#accessibility) for more details.

### Optional

```html
<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-tags"
        >Question tags <span class="s-label--status">Optional</span></label
    >
    <div class="d-flex ps-relative">
        <input
            class="flex--item s-input"
            type="text"
            id="question-tags"
            placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"
        />
    </div>
</form>
```

<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-tags">Question tags <span class="s-label--status">Optional</span></label>
    <div class="d-flex ps-relative">
        <input class="flex--item s-input" type="text" id="question-tags" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
    </div>
</form>

### Required

```html
<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title-required"
        >Question title
        <span class="s-label--status s-label--status__required"
            >Required</span
        ></label
    >
    <div class="d-flex ps-relative">
        <input
            class="flex--item s-input"
            type="text"
            id="question-title-required"
            placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"
        />
    </div>
</form>
```

<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title-required">Question title <span class="s-label--status s-label--status__required">Required</span></label>
    <div class="d-flex ps-relative">
        <input class="flex--item s-input" type="text" id="question-title-required" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
    </div>
</form>

### New

```html
<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title-new"
        >What is your favorite animal?
        <span class="s-label--status s-label--status__new">New</span></label
    >
    <div class="d-flex ps-relative">
        <input
            class="flex--item s-input"
            type="text"
            id="question-title-new"
            placeholder="e.g. hedgehog, platypus, sugar glider"
        />
    </div>
</form>
```

<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title-new">What is your favorite animal? <span class="s-label--status s-label--status__new">New</span></label>
    <div class="d-flex ps-relative">
        <input class="flex--item s-input" type="text" id="question-title-new" placeholder="e.g. hedgehog, platypus, sugar glider"/>
    </div>
</form>

### Beta

```html
<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title-beta"
        >Notify people
        <span class="s-label--status s-label--status__beta">Beta</span></label
    >
    <div class="d-flex ps-relative">
        <input
            class="flex--item s-input"
            type="text"
            id="question-title-beta"
            placeholder="e.g. jdoe, bgates, sjobs"
        />
    </div>
</form>
```

<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title-beta">Notify people <span class="s-label--status s-label--status__beta">Beta</span></label>
    <div class="d-flex ps-relative">
        <input class="flex--item s-input" type="text" id="question-title-beta" placeholder="e.g. jdoe, bgates, sjobs"/>
    </div>
</form>

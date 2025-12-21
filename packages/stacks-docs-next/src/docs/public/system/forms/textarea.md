---
title: Textarea
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-textarea--docs
figma: https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=4537-49735&m=dev
description: Multi-line inputs used by users to enter longer text portions.
updated: 2025-12-20
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconAlert, IconCheck } from '@stackoverflow/stacks-icons';

  const validationClasses = [
    { class: '.has-warning', applies: 'Parent wrapper for textarea', description: "Used to warn users that the value they've entered has a potential problem, but it doesn't block them from proceeding." },
    { class: '.has-error', applies: 'Parent wrapper for textarea', description: "Used to alert users that the value they've entered is incorrect, not filled in, or has a problem which will block them from proceeding." },
    { class: '.has-success', applies: 'Parent wrapper for textarea', description: "Used to notify users that the value they've entered is fine or has been submitted successfully." }
  ];

  const textareaSizes = [
    { name: 'Small', size: '13px', class: 's-textarea__sm' },
    { name: 'Default', size: '14px', class: null },
    { name: 'Large', size: '18px', class: 's-textarea__lg' }
  ];
</script>

## Base style

```html
<div class="d-flex fd-column gy4">
    <label class="s-label" for="example-item">Question body</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea" id="example-item" placeholder="…"></textarea>
    </div>
</div>
```

<div class="d-flex gy4 fd-column">
    <label class="s-label" for="example-item7">Question body</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea ps-relative" id="example-item7" placeholder="e.g. The Stack Overflow glyph used to have 6 bars, but now…"></textarea>
    </div>
</div>

## Accessibility

It is recommended to follow the same accessibility guidance as the [Input component](/product/components/inputs/#accessibility).
Including marking Textarea's as **required** via the `.s-required-symbol` class.

## Validation states

Validation states provides the user feedback based on their interaction (or lack of interaction) with a textarea. These styles are applied by applying the appropriate class to the wrapping parent container.

### Validation classes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn5 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th class="s-table--cell2" scope="col">Class</th>
                <th class="s-table--cell3" scope="col">Applies</th>
                <th scope="col">Definition</th>
            </tr>
        </thead>
        <tbody>
            {#each validationClasses as item}
            <tr>
                <th scope="row"><code class="stacks-code">{item.class}</code></th>
                <td>{item.applies}</td>
                <td>{item.description}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

### Validation examples

#### Warning

```html
<div class="d-flex gy4 fd-column has-warning">
    <label class="s-label" for="example-warning">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea" id="example-warning" placeholder="Please describe your problem"></textarea>
        <svg class="s-input-icon" ...>...</svg>
    </div>
    <p class="s-input-message mb0">Consider entering a description to help us better help you.</p>
</div>
```

<div class="d-flex gy4 fd-column has-warning">
    <label class="s-label" for="example-warning">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea" id="example-warning" placeholder="Please describe your problem"></textarea>
        <Icon src={IconAlert} class="s-input-icon" />
    </div>
    <p class="s-input-message mb0">Consider entering a description to help us better help you.</p>
</div>

#### Error

```html
<div class="d-flex gy4 fd-column has-error">
    <label class="s-label" for="example-success">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea" id="example-success" placeholder="Please describe your problem"></textarea>
        <svg class="s-input-icon" ...>...</svg>
    </div>
    <p class="s-input-message mb0">A description must be provided.</p>
</div>
```

<div class="d-flex gy4 fd-column has-error">
    <label class="s-label" for="example-success1">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea" id="example-success1" placeholder="Please describe your problem"></textarea>
        <Icon src={IconAlert} class="s-input-icon" />
    </div>
    <p class="s-input-message mb0">A description must be provided.</p>
</div>

#### Success

```html
<div class="d-flex gy4 fd-column has-success">
    <label class="s-label" for="example-success">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea" id="example-success" placeholder="Please describe your problem">How do you know your company is ready for a design system? How do you implement one without too many pain points? How do you efficiently maintain one once it's built?</textarea>
        <svg class="s-input-icon" ...>...</svg>
    </div>
    <p class="s-input-message mb0">Thanks for providing a description.</p>
</div>
```

<div class="d-flex gy4 fd-column has-success">
    <label class="s-label" for="example-success2">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea" id="example-success2" placeholder="Please describe your problem">How do you know your company is ready for a design system? How do you implement one without too many pain points? How do you efficiently maintain one once it's built?</textarea>
        <Icon src={IconCheck} class="s-input-icon" />
    </div>
    <p class="s-input-message mb0">Thanks for providing a description.</p>
</div>

## Sizes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn5 s-table s-table__bx-simple va-middle tl-fixed">
        <thead>
            <tr>
                <th scope="col" class="s-table--cell2">Name</th>
                <th scope="col" class="s-table--cell1">Size</th>
                <th scope="col" class="s-table--cell2">Class</th>
                <th scope="col">Example</th>
            </tr>
        </thead>
        <tbody>
            {#each textareaSizes as item}
            <tr>
                <th scope="row">{item.name}</th>
                <td>{item.size}</td>
                <td>{#if item.class}<code class="stacks-code">.{item.class}</code>{:else}<em class="fc-light">N/A</em>{/if}</td>
                <td>
                    <div class="d-flex ps-relative">
                        <textarea class="s-textarea {item.class || ''}" aria-label="demo textarea">Not sure what to ask? Recurring questions, onboarding procedures, local setups, and FAQs all make for useful questions.</textarea>
                    </div>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

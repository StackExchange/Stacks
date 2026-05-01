---
title: "Textarea"
description: "Multi-line inputs used by users to enter longer text portions."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-textarea--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=4537-49735&m=dev"
---

<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import { IconAlert, IconAlertFill, IconCheck } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-textarea',     parent: 'N/A', modifies: 'N/A',        description: 'Base textarea style.' },
        { class: '.s-textarea__sm', parent: 'N/A', modifies: '.s-textarea', description: 'Apply a small size.' },
        { class: '.s-textarea__lg', parent: 'N/A', modifies: '.s-textarea', description: 'Apply a large size.' },
    ];

    const validationClasses: ClassTableRow[] = [
        { class: '.has-warning', parent: 'Parent element', description: 'Used to warn users that the value they\'ve entered has a potential problem, but it doesn\'t block them from proceeding.' },
        { class: '.has-error',   parent: 'Parent element', description: 'Used to alert users that the value they\'ve entered is incorrect, not filled in, or has a problem which will block them from proceeding.' },
        { class: '.has-success', parent: 'Parent element', description: 'Used to notify users that the value they\'ve entered is fine or has been submitted successfully.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Base style

```html
<div class="d-flex fd-column gy4">
    <label class="s-label" for="example-item">Question body</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea w100" id="example-item" placeholder="…"></textarea>
    </div>
</div>
```

<Example>
    <div class="s-form-group">
        <label class="s-label" for="example-item7">Question body</label>
        <div class="d-flex ps-relative">
            <textarea class="s-textarea ps-relative w100" id="example-item7" placeholder="e.g. The Stack Overflow glyph used to have 6 bars, but now…"></textarea>
        </div>
    </div>
</Example>

## Accessibility

It is recommended to follow the same accessibility guidance as the [Input component](/system/components/inputs#accessibility). Including marking Textarea's as **required** via the `.s-required-symbol` class.

## Validation states

Validation states provides the user feedback based on their interaction (or lack of interaction) with a textarea. These styles are applied by applying the appropriate class to the wrapping parent container.

### Validation classes

<ClassTable classes={validationClasses} headings={{ parent: 'Applies to' }} />

### Validation examples

#### Warning

```html
<div class="s-form-group has-warning">
    <label class="s-label" for="example-warning">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea w100" id="example-warning" placeholder="Please describe your problem"></textarea>
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
    <p class="s-input-message">Consider entering a description to help us better help you.</p>
</div>
```

<Example>
    <div class="s-form-group has-warning">
        <label class="s-label" for="example-warning-ta">Description</label>
        <div class="d-flex ps-relative">
            <textarea class="s-textarea w100" id="example-warning-ta" placeholder="Please describe your problem"></textarea>
            <Icon src={IconAlert} class="s-input-icon" />
        </div>
        <p class="s-input-message">Consider entering a description to help us better help you.</p>
    </div>
</Example>

#### Error

```html
<div class="s-form-group has-error">
    <label class="s-label" for="example-error">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea w100" id="example-error" placeholder="Please describe your problem"></textarea>
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
    <p class="s-input-message">A description must be provided.</p>
</div>
```

<Example>
    <div class="s-form-group has-error">
        <label class="s-label" for="example-error-ta">Description</label>
        <div class="d-flex ps-relative">
            <textarea class="s-textarea w100" id="example-error-ta" placeholder="Please describe your problem"></textarea>
            <Icon src={IconAlertFill} class="s-input-icon" />
        </div>
        <p class="s-input-message">A description must be provided.</p>
    </div>
</Example>

#### Success

```html
<div class="s-form-group has-success">
    <label class="s-label" for="example-success">Description</label>
    <div class="d-flex ps-relative">
        <textarea class="s-textarea w100" id="example-success" placeholder="Please describe your problem">…</textarea>
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
    <p class="s-input-message">Thanks for providing a description.</p>
</div>
```

<Example>
    <div class="s-form-group has-success">
        <label class="s-label" for="example-success-ta">Description</label>
        <div class="d-flex ps-relative">
            <textarea class="s-textarea w100" id="example-success-ta" placeholder="Please describe your problem">How do you know your company is ready for a design system? How do you implement one without too many pain points? How do you efficiently maintain one once it's built?</textarea>
            <Icon src={IconCheck} class="s-input-icon" />
        </div>
        <p class="s-input-message">Thanks for providing a description.</p>
    </div>
</Example>

## Sizes

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
            <td><code>.s-textarea__sm</code></td>
            <td>Small</td>
            <td>13px</td>
            <td><textarea placeholder="e.g. What is Stacks?" class="s-textarea s-textarea__sm w100"></textarea></td>
        </tr>
        <tr>
            <td class="fc-black-350 fs-italic">N/A</td>
            <td>Default</td>
            <td>14px</td>
            <td><textarea placeholder="e.g. What is Stacks?" class="s-textarea w100"></textarea></td>
        </tr>
        <tr>
            <td><code>.s-textarea__lg</code></td>
            <td>Large</td>
            <td>18px</td>
            <td><textarea placeholder="e.g. What is Stacks?" class="s-textarea s-textarea__lg w100"></textarea></td>
        </tr>
    </tbody>
</table>

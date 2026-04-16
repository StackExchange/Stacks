---
title: "Checkbox"
description: "Checkable inputs that visually allow for multiple options or true/false values."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-checkbox--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=720-2910&p=f&m=dev"
---

<script lang="ts">
    import { onMount } from 'svelte';
    import { Notice } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-checkbox',             parent: 'N/A',        modifies: 'N/A', description: 'Base checkbox style.' },
        { class: '.s-checkbox__checkmark',  parent: '.s-checkbox', modifies: 'N/A', description: 'Checkmark style.' },
    ];

    const validationClasses: ClassTableRow[] = [
        { class: '.has-warning', parent: 'Parent element', description: 'Used to warn users that the value they\'ve entered has a potential problem, but it doesn\'t block them from proceeding.' },
        { class: '.has-error',   parent: 'Parent element', description: 'Used to alert users that the value they\'ve entered is incorrect, not filled in, or has a problem which will block them from proceeding.' },
        { class: '.has-success', parent: 'Parent element', description: 'Used to notify users that the value they\'ve entered is fine or has been submitted successfully.' },
    ];

    onMount(() => {
        const el = document.getElementById('indeterminate-checkbox-1') as HTMLInputElement | null;
        if (el) el.indeterminate = true;
    });
</script>

## Classes

<ClassTable {classes} />

## Base

Use the `.s-checkbox` to wrap `input[type="checkbox"]` elements to apply checkbox styles.

```html
<div class="s-checkbox">
    <input type="checkbox" name="example-name" id="example-item" />
    <label class="s-label" for="example-item">Check Label</label>
</div>
```

<Example>
    <div class="d-flex ai-start fw-wrap g24">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Unchecked</span>
            <div class="s-checkbox">
                <input type="checkbox" name="checkbox-group" id="checkbox-unchecked" />
                <label class="s-label" for="checkbox-unchecked">Checkbox label</label>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Disabled unchecked</span>
            <div class="s-checkbox">
                <input type="checkbox" name="checkbox-group" id="checkbox-disabled-unchecked" disabled />
                <label class="s-label" for="checkbox-disabled-unchecked">Checkbox label</label>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Checked</span>
            <div class="s-checkbox">
                <input type="checkbox" name="checkbox-group" id="checkbox-checked" checked />
                <label class="s-label" for="checkbox-checked">Checkbox label</label>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Disabled checked</span>
            <div class="s-checkbox">
                <input type="checkbox" name="checkbox-group" id="checkbox-disabled-checked" disabled checked />
                <label class="s-label" for="checkbox-disabled-checked">Checkbox label</label>
            </div>
        </div>
    </div>
</Example>

### Checkmark

The checkmark style is an alternative to the base checkbox style. To use the checkmark style, wrap your input and label in a container with the `.s-checkbox__checkmark` class.

```html
<label class="s-checkbox s-checkbox__checkmark" for="example-item">
    Checkmark Label
    <input type="checkbox" name="example-name" id="example-item" />
</label>
```

<Example>
    <div class="d-flex ai-start fw-wrap g24">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Unchecked</span>
            <label class="s-checkbox s-checkbox__checkmark" for="checkmark-checkbox-unchecked">
                Checkmark label
                <input type="checkbox" name="checkmark-checkbox-group" id="checkmark-checkbox-unchecked" />
            </label>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Disabled unchecked</span>
            <label class="s-checkbox s-checkbox__checkmark" for="checkmark-checkbox-disabled-unchecked">
                Checkmark label
                <input type="checkbox" name="checkmark-checkbox-group" id="checkmark-checkbox-disabled-unchecked" disabled />
            </label>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Checked</span>
            <label class="s-checkbox s-checkbox__checkmark" for="checkmark-checkbox-checked">
                Checkmark label
                <input type="checkbox" name="checkmark-checkbox-group" id="checkmark-checkbox-checked" checked />
            </label>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Disabled checked</span>
            <label class="s-checkbox s-checkbox__checkmark" for="checkmark-checkbox-disabled-checked">
                Checkmark label
                <input type="checkbox" name="checkmark-checkbox-group" id="checkmark-checkbox-disabled-checked" disabled checked />
            </label>
        </div>
    </div>
</Example>

## Accessibility

The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they're correctly formatted. When it comes to checkboxes, there are a few things to keep in mind:

- All inputs should have an `id` attribute.
- Be sure to associate the checkbox label by using the `for` attribute. The value here is the input's `id`.
- If you have a group of related checkboxes, use the `fieldset` and `legend` to group them together.

For more information, please read Gov.UK's article, [*"Using the fieldset and legend elements"*](https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/).

## Checkbox group

### Vertical group

```html
<fieldset class="s-form-group">
    <legend class="s-label">…</legend>
    <div class="s-checkbox">
        <input type="checkbox" name="…" id="vert-checkbox-1" />
        <label class="s-label" for="vert-checkbox-1">…</label>
    </div>
    <div class="s-checkbox">
        <input type="checkbox" name="…" id="vert-checkbox-2" />
        <label class="s-label" for="vert-checkbox-2">…</label>
    </div>
    <div class="s-checkbox">
        <input type="checkbox" name="…" id="vert-checkbox-3" />
        <label class="s-label" for="vert-checkbox-3">…</label>
    </div>
</fieldset>
```

<Example>
    <fieldset class="s-form-group">
        <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="vert-checkbox-Apples" checked />
            <label class="s-label" for="vert-checkbox-Apples">Apples</label>
        </div>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="vert-checkbox-Oranges" />
            <label class="s-label" for="vert-checkbox-Oranges">Oranges</label>
        </div>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="vert-checkbox-Bananas" />
            <label class="s-label" for="vert-checkbox-Bananas">Bananas</label>
        </div>
    </fieldset>
</Example>

### Horizontal group

```html
<fieldset class="s-form-group s-form-group__horizontal">
    <legend class="s-label">…</legend>
    <div class="s-checkbox">
        <input type="checkbox" name="…" id="hori-checkbox-1" />
        <label class="s-label" for="hori-checkbox-1">…</label>
    </div>
    <div class="s-checkbox">
        <input type="checkbox" name="…" id="hori-checkbox-2" />
        <label class="s-label" for="hori-checkbox-2">…</label>
    </div>
    <div class="s-checkbox">
        <input type="checkbox" name="…" id="hori-checkbox-3" />
        <label class="s-label" for="hori-checkbox-3">…</label>
    </div>
</fieldset>
```

<Example>
    <fieldset class="s-form-group s-form-group__horizontal">
        <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="hori-checkbox-Apples" checked />
            <label class="s-label" for="hori-checkbox-Apples">Apples</label>
        </div>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="hori-checkbox-Oranges" />
            <label class="s-label" for="hori-checkbox-Oranges">Oranges</label>
        </div>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="hori-checkbox-Bananas" />
            <label class="s-label" for="hori-checkbox-Bananas">Bananas</label>
        </div>
    </fieldset>
</Example>

### With description copy

```html
<fieldset class="s-form-group">
    <legend class="s-label">…</legend>
    <div class="s-checkbox">
        <input type="checkbox" name="…" id="desc-checkbox-1" />
        <label class="s-label" for="desc-checkbox-1">
            …
            <p class="s-description">…</p>
        </label>
    </div>
    …
</fieldset>
```

<Example>
    <fieldset class="s-form-group">
        <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="desc-checkbox-Apples" checked />
            <label class="s-label" for="desc-checkbox-Apples">
                Apples
                <p class="s-description">Fresh red apples.</p>
            </label>
        </div>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="desc-checkbox-Oranges" />
            <label class="s-label" for="desc-checkbox-Oranges">
                Oranges
                <p class="s-description">Juicy and sweet oranges.</p>
            </label>
        </div>
        <div class="s-checkbox">
            <input type="checkbox" name="" id="desc-checkbox-Bananas" />
            <label class="s-label" for="desc-checkbox-Bananas">
                Bananas
                <p class="s-description">Ripe yellow bananas.</p>
            </label>
        </div>
    </fieldset>
</Example>

## Validation states

Checkboxes use the same validation states as [inputs](/system/components/inputs).

### Validation classes

<ClassTable classes={validationClasses} headings={{ parent: 'Applies to' }} />

### Validation examples

```html
<!-- Checkbox w/ warning -->
<div class="s-checkbox has-warning">
    <input type="checkbox" name="…" id="warn-checkbox-1" />
    <label class="s-label" for="warn-checkbox-1">
        …
        <p class="s-description">…</p>
    </label>
</div>
```

<Example>
    <fieldset class="s-form-group">
        <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
        <div class="s-checkbox has-warning">
            <input type="checkbox" name="" id="state-checkbox-Apples" checked />
            <label class="s-label" for="state-checkbox-Apples">
                Apples
                <p class="s-description">Fresh red apples.</p>
            </label>
        </div>
        <div class="s-checkbox has-error">
            <input type="checkbox" name="" id="state-checkbox-Oranges" />
            <label class="s-label" for="state-checkbox-Oranges">
                Oranges
                <p class="s-description">Juicy and sweet oranges.</p>
            </label>
        </div>
        <div class="s-checkbox has-success">
            <input type="checkbox" name="" id="state-checkbox-Bananas" />
            <label class="s-label" for="state-checkbox-Bananas">
                Bananas
                <p class="s-description">Ripe yellow bananas.</p>
            </label>
        </div>
    </fieldset>
</Example>

## Indeterminate state

Checkboxes can be styled by using the `:indeterminate` pseudo class.

<Notice variant="info" role="note" class="mb16">
    <strong>Note:</strong> The <code>:indeterminate</code> pseudo class can only be set via JavaScript. Use the <code>HTMLInputElement</code> object's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes"><code>indeterminate</code></a> property to set the state.
</Notice>

```html
<fieldset class="s-form-group">
    <div class="s-checkbox">
        <input type="checkbox" name="" id="indeterminate-checkbox-1" />
        <label class="s-label" for="indeterminate-checkbox-1">Select all</label>
    </div>
</fieldset>

<script>
    document.getElementById("indeterminate-checkbox-1").indeterminate = true;
</script>
```

<Example>
    <fieldset class="s-form-group">
        <div class="s-checkbox">
            <input type="checkbox" name="" id="indeterminate-checkbox-1" />
            <label class="s-label" for="indeterminate-checkbox-1">Select all</label>
        </div>
    </fieldset>
</Example>

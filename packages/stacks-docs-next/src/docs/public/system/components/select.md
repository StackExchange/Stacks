---
title: "Select"
description: "A selectable menu list from which a user can make a single selection. Typically they are used when there are more than four possible options. The custom select menu styling is achieved by wrapping the <code>select</code> tag within the <code>.s-select</code> class."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-select--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=4537-50988"
---

<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import { IconAlert, IconAlertFill, IconCheck } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-select',        parent: 'N/A',      modifies: 'N/A',       description: 'Base select style.' },
        { class: '.s-select__sm',    parent: 'N/A',      modifies: '.s-select', description: 'Apply a small size.' },
        { class: '.s-select__lg',    parent: 'N/A',      modifies: '.s-select', description: 'Apply a large size.' },
        { class: '.has-error',       parent: 'N/A',      modifies: '.s-select', description: 'Apply an error state.' },
        { class: '.has-success',     parent: 'N/A',      modifies: '.s-select', description: 'Apply a success state.' },
        { class: '.has-warning',     parent: 'N/A',      modifies: '.s-select', description: 'Apply a warning state.' },
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
<div class="s-form-group">
    <label class="s-label" for="select-menu">
        How will you be traveling?
        <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
    </label>
    <div class="s-select">
        <select id="select-menu">
            <option value="" selected>Please select one…</option>
            <option value="walk">Walk</option>
            <option value="bike">Bicycle</option>
            <option value="car">Automobile</option>
            <option value="rail">Train</option>
            <option value="fly">Plane</option>
        </select>
    </div>
</div>

<div class="s-form-group is-disabled">
    <label class="s-label" for="select-menu-disabled">Where are you staying?</label>
    <div class="s-select">
        <select id="select-menu-disabled" disabled>
            <option value="" selected>Please select one…</option>
            <option value="bronx">Bronx</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="manhattan">Manhattan</option>
            <option value="queens">Queens</option>
            <option value="staten-island">Staten Island</option>
        </select>
    </div>
</div>
```

<Example>
    <div class="d-flex gy16 fd-column">
        <div>
            <div class="s-form-group">
                <label class="s-label" for="select-menu">
                    How will you be traveling?
                    <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
                </label>
                <div class="s-select">
                    <select id="select-menu">
                        <option value="" selected>Please select one…</option>
                        <option value="walk">Walk</option>
                        <option value="bike">Bicycle</option>
                        <option value="car">Automobile</option>
                        <option value="rail">Train</option>
                        <option value="fly">Plane</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <div class="s-form-group is-disabled">
                <label class="s-label" for="select-menu-disabled">Where are you staying?</label>
                <div class="s-select">
                    <select id="select-menu-disabled" disabled>
                        <option value="" selected>Please select one…</option>
                        <option value="bronx">Bronx</option>
                        <option value="brooklyn">Brooklyn</option>
                        <option value="manhattan">Manhattan</option>
                        <option value="queens">Queens</option>
                        <option value="staten-island">Staten Island</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</Example>

## Validation states

Validation states provides the user feedback based on their interaction (or lack of interaction) with a select menu. These styles are applied by applying the appropriate class to the wrapping parent container.

### Validation classes

<ClassTable classes={validationClasses} headings={{ parent: 'Applies to' }} />

### Validation examples

#### Warning

```html
<div class="s-form-group has-warning">
    <label class="s-label" for="select-menu">
        How will you be traveling?
        <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
    </label>
    <div class="s-select">
        <select id="select-menu">
            <option value="" selected>Please select one…</option>
            …
        </select>
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
</div>
```

<Example>
    <div class="s-form-group has-warning">
        <label class="s-label" for="select-menu-warning">
            How will you be traveling?
            <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
        </label>
        <div class="s-select">
            <select id="select-menu-warning">
                <option value="" selected>Please select one…</option>
                <option value="walk">Walk</option>
                <option value="bike">Bicycle</option>
                <option value="car">Automobile</option>
                <option value="rail">Train</option>
                <option value="fly">Plane</option>
            </select>
            <Icon src={IconAlert} class="s-input-icon" />
        </div>
    </div>
</Example>

#### Error

```html
<div class="s-form-group has-error">
    <label class="s-label" for="select-menu">
        How will you be traveling?
        <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
    </label>
    <div class="s-select">
        <select id="select-menu">
            <option value="" selected>Please select one…</option>
            …
        </select>
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
</div>
```

<Example>
    <div class="s-form-group has-error">
        <label class="s-label" for="select-menu-error">
            How will you be traveling?
            <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
        </label>
        <div class="s-select">
            <select id="select-menu-error">
                <option value="" selected>Please select one…</option>
                <option value="walk">Walk</option>
                <option value="bike">Bicycle</option>
                <option value="car">Automobile</option>
                <option value="rail">Train</option>
                <option value="fly">Plane</option>
            </select>
            <Icon src={IconAlertFill} class="s-input-icon" />
        </div>
    </div>
</Example>

#### Success

```html
<div class="s-form-group has-success">
    <label class="s-label" for="select-menu">
        How will you be traveling?
        <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
    </label>
    <div class="s-select">
        <select id="select-menu">
            <option value="" selected>Please select one…</option>
            …
        </select>
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
</div>
```

<Example>
    <div class="s-form-group has-success">
        <label class="s-label" for="select-menu-success">
            How will you be traveling?
            <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
        </label>
        <div class="s-select">
            <select id="select-menu-success">
                <option value="" selected>Please select one…</option>
                <option value="walk">Walk</option>
                <option value="bike">Bicycle</option>
                <option value="car">Automobile</option>
                <option value="rail">Train</option>
                <option value="fly">Plane</option>
            </select>
            <Icon src={IconCheck} class="s-input-icon" />
        </div>
    </div>
</Example>

## Sizes

<Example>
    <div class="d-flex ai-start fw-wrap g24">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Small — 13px — .s-select__sm</span>
            <div class="s-select s-select__sm">
                <select>
                    <option>1 Example</option>
                    <option>2 Options</option>
                </select>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Default — 14px</span>
            <div class="s-select">
                <select>
                    <option>1 Example</option>
                    <option>2 Options</option>
                </select>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Large — 18px — .s-select__lg</span>
            <div class="s-select s-select__lg">
                <select>
                    <option>1 Example</option>
                    <option>2 Options</option>
                </select>
            </div>
        </div>
    </div>
</Example>

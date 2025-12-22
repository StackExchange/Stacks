---
title: Select
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-select--docs
figma: https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=4537-50988
description: A selectable menu list from which a user can make a single selection. Typically they are used when there are more than four possible options. The custom select menu styling is achieved by wrapping the <code class="stacks-code">select</code> tag within the <code class="stacks-code">.s-select</code> class.
updated: 2025-12-20
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconAlert, IconAlertFill, IconCheck } from '@stackoverflow/stacks-icons';

  const validationClasses = [
    { class: '.has-warning', applies: 'Parent wrapper for select menu', description: "Used to warn users that the value they've entered has a potential problem, but it doesn't block them from proceeding." },
    { class: '.has-error', applies: 'Parent wrapper for select menu', description: "Used to alert users that the value they've entered is incorrect, not filled in, or has a problem which will block them from proceeding." },
    { class: '.has-success', applies: 'Parent wrapper for select menu', description: "Used to notify users that the value they've entered is fine or has been submitted successfully." }
  ];

  const selectSizes = [
    { name: 'Small', size: '13px', class: 's-select__sm' },
    { name: 'Default', size: '14px', class: null },
    { name: 'Large', size: '18px', class: 's-select__lg' }
  ];
</script>

## Base style

```html
<div class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="select-menu">
        How will you be traveling?
        <p class="mt2 s-description">
            Select the transportation method you will be using to come to the
            event.
        </p>
    </label>
    <div class="flex--item s-select">
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

<div class="d-flex gy4 fd-column is-disabled">
    <label class="flex--item s-label" for="select-menu-disabled"
        >Where are you staying?</label
    >
    <div class="flex--item s-select">
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

<div class="d-flex gy16 fd-column">
    <div class="flex--item">
        <div class="d-flex gy4 fd-column">
            <label class="flex--item s-label" for="select-menu">
                How will you be traveling?
                <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
            </label>
            <div class="flex--item s-select">
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
    <div class="flex--item">
        <div class="d-flex gy4 fd-column is-disabled">
            <label class="flex--item s-label" for="select-menu-disabled">Where are you staying?</label>
            <div class="flex--item s-select">
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

## Validation states

Validation states provides the user feedback based on their interaction (or lack of interaction) with a select menu. These styles are applied by applying the appropriate class to the wrapping parent container.

### Validation classes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th class="s-table--cell3" scope="col">Class</th>
                <th class="s-table--cell3" scope="col">Applies</th>
                <th scope="col">Definition</th>
            </tr>
        </thead>
        <tbody>
            {#each validationClasses as item}
            <tr>
                <th scope="row"><code class="flex--item stacks-code">{item.class}</code></th>
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
    <label class="flex--item s-label" for="select-menu">
        How will you be traveling?
        <p class="mt2 s-description">
            Select the transportation method you will be using to come to the
            event.
        </p>
    </label>
    <div class="flex--item s-select">
        <select id="select-menu">
            <option value="" selected>Please select one…</option>
            <option value="walk">Walk</option>
            <option value="bike">Bicycle</option>
            <option value="car">Automobile</option>
            <option value="rail">Train</option>
            <option value="fly">Plane</option>
        </select>
        <svg class="s-input-icon" ...>...</svg>
    </div>
</div>
```

<div class="d-flex gy4 fd-column has-warning">
    <label class="flex--item s-label" for="select-menu-warning">
        How will you be traveling?
        <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
    </label>
    <div class="flex--item s-select">
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

#### Error

```html
<div class="d-flex gy4 fd-column has-error">
    <label class="flex--item s-label" for="select-menu">
        How will you be traveling?
        <p class="mt2 s-description">
            Select the transportation method you will be using to come to the
            event.
        </p>
    </label>
    <div class="flex--item s-select">
        <select id="select-menu">
            <option value="" selected>Please select one…</option>
            <option value="walk">Walk</option>
            <option value="bike">Bicycle</option>
            <option value="car">Automobile</option>
            <option value="rail">Train</option>
            <option value="fly">Plane</option>
        </select>
        <svg class="s-input-icon" ...>...</svg>
    </div>
</div>
```

<div class="d-flex gy4 fd-column has-error">
    <label class="flex--item s-label" for="select-menu-error">
        How will you be traveling?
        <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
    </label>
    <div class="flex--item s-select">
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

#### Success

```html
<div class="d-flex gy4 fd-column has-success">
    <label class="flex--item s-label" for="select-menu">
        How will you be traveling?
        <p class="mt2 s-description">
            Select the transportation method you will be using to come to the
            event.
        </p>
    </label>
    <div class="flex--item s-select">
        <select id="select-menu">
            <option value="" selected>Please select one…</option>
            <option value="walk">Walk</option>
            <option value="bike">Bicycle</option>
            <option value="car">Automobile</option>
            <option value="rail">Train</option>
            <option value="fly">Plane</option>
        </select>
        <svg class="s-input-icon" ...>...</svg>
    </div>
</div>
```

<div class="d-flex gy4 fd-column has-success">
    <label class="flex--item s-label" for="select-menu-success">
        How will you be traveling?
        <p class="mt2 s-description">Select the transportation method you will be using to come to the event.</p>
    </label>
    <div class="flex--item s-select">
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

## Sizes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn5 s-table s-table__bx-simple va-middle">
        <thead>
            <tr>
                <th scope="col" class="s-table--cell2">Name</th>
                <th scope="col" class="s-table--cell1">Size</th>
                <th scope="col" class="s-table--cell2">Class</th>
                <th scope="col">Example</th>
            </tr>
        </thead>
        <tbody>
            {#each selectSizes as item}
            <tr>
                <th scope="row">{item.name}</th>
                <td>{item.size}</td>
                <td>{#if item.class}<code class="stacks-code">.{item.class}</code>{:else}<em class="fc-light">N/A</em>{/if}</td>
                <td><div class="d-flex s-select {item.class || ''}"><select aria-label="demo select {item.class || ''}"><option>1 Example</option><option>2 Options</option></select></div></td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

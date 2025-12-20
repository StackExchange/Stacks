---
title: Checkbox & Radio
figma: https://svelte.stackoverflow.design/figma/form-elements
description: Checkable inputs that visually allow for multiple options or true/false values.
updated: 2025-12-20
---

<script lang="ts">
  const validationClasses = [
    { class: '.has-warning', applies: 'Parent wrapper for checkbox and label', description: "Used to warn users that the value they've entered has a potential problem, but it doesn't block them from proceeding." },
    { class: '.has-error', applies: 'Parent wrapper for checkbox and label', description: "Used to alert users that the value they've entered is incorrect, not filled in, or has a problem which will block them from proceeding." },
    { class: '.has-success', applies: 'Parent wrapper for checkbox and label', description: "Used to notify users that the value they've entered is fine or has been submitted successfully." }
  ];
</script>

<div class="s-notice s-notice__warning mb24">
    <p class="mb0"><strong>Deprecation:</strong> <a href="https://github.com/StackExchange/Stacks/pull/1077#issue-1349987852">the markup for checkboxes and radios has changed</a>. Please update your markup to match the new structure detailed on this page.</p>
</div>

## Base style

```html
<!-- Checkbox -->
<div class="s-check-control">
    <input class="s-checkbox" type="checkbox" name="example-name" id="example-item" />
    <label class="s-label" for="example-item">Checkbox Label</label>
</div>

<!-- Radio -->
<div class="s-check-control">
    <input class="s-radio" type="radio" name="example-name-rad" id="example-item-rad" />
    <label class="s-label" for="example-item-rad">Radio Label</label>
</div>

<!-- Disabled -->
<div class="s-check-control">
    <input class="s-checkbox" type="checkbox" name="example-name" id="example-disabled" disabled />
    <label class="s-label" for="example-disabled">Checkbox Label</label>
</div>

<div class="s-check-control">
    <input class="s-checkbox" type="checkbox" name="example-name-rad" id="example-disabled-rad" disabled />
    <label class="s-label" for="example-disabled-rad">Radio Label</label>
</div>
```

<div class="d-flex g16 sm:fd-column">
    <fieldset class="s-check-group g2">
        <!-- Base -->
        <div class="s-check-control">
            <input class="s-checkbox" type="checkbox" name="example-name" id="example" />
            <label class="s-label" for="example">Checkbox Label</label>
        </div>

        <!-- Disabled -->
        <div class="s-check-control">
            <input class="s-checkbox" type="checkbox" name="example-name" id="example-disabled" disabled />
            <label class="s-label" for="example-disabled">Checkbox Label</label>
        </div>

        <!-- Checked -->
        <div class="s-check-control">
            <input class="s-checkbox" type="checkbox" name="example-name" id="example-checked" checked />
            <label class="s-label" for="example-checked">Checkbox Label</label>
        </div>

        <!-- Disabled and checked -->
        <div class="s-check-control">
            <input class="s-checkbox" type="checkbox" name="example-name" id="example-checked-disabled" checked disabled />
            <label class="s-label" for="example-checked-disabled">Checkbox Label</label>
        </div>
    </fieldset>
    <fieldset class="s-check-group g2">
        <!-- Base -->
        <div class="s-check-control">
            <input class="s-radio" type="radio" name="example-name-rad" id="example-rad" />
            <label class="s-label" for="example-rad">Radio Label</label>
        </div>

        <!-- Disabled -->
        <div class="s-check-control">
            <input class="s-radio" type="radio" name="example-name-rad" id="example-disabled-rad" disabled />
            <label class="s-label" for="example-disabled-rad">Radio Label</label>
        </div>

        <!-- Checked -->
        <div class="s-check-control">
            <input class="s-radio" type="radio" name="example-name-rad" id="example-checked-rad" checked />
            <label class="s-label" for="example-checked-rad">Radio Label</label>
        </div>

        <!-- Disabled and checked -->
        <div class="s-check-control">
            <input class="s-radio" type="radio" name="example-name-rad2" id="example-checked-disabled-rad" checked disabled />
            <label class="s-label" for="example-checked-disabled-rad">Radio Label</label>
        </div>
    </fieldset>
</div>

## Accessibility

The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they're correctly formatted. When it comes to checkboxes, there are a few things to keep in mind:

- All inputs should have an `id` attribute.
- Be sure to associate the checkbox/radio label by using the `for` attribute. The value here is the input's `id`.
- If you have a group of related checkboxes or radios, use the `fieldset` and `legend` to group them together.

For more information, please read Gov.UK's article, [*"Using the fieldset and legend elements"*](https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/).

## Examples

### Vertical group

```html
<!-- Checkbox -->
<fieldset class="s-check-group">
    <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-vert-checkbox-1" />
        <label class="s-label" for="choice-vert-checkbox-1">Apples</label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-vert-checkbox-2" />
        <label class="s-label" for="choice-vert-checkbox-2">Oranges</label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-vert-checkbox-3" />
        <label class="s-label" for="choice-vert-checkbox-3">Bananas</label>
    </div>
</fieldset>

<!-- Radio -->
<fieldset class="s-check-group">
    <legend class="s-label">Which fruit do you like best?</legend>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-vert-radio" id="choice-vert-radio-1" />
        <label class="s-label" for="choice-vert-radio-1">Apples</label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-vert-radio" id="choice-vert-radio-2" />
        <label class="s-label" for="choice-vert-radio-2">Oranges</label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-vert-radio" id="choice-vert-radio-3" />
        <label class="s-label" for="choice-vert-radio-3">Bananas</label>
    </div>
</fieldset>
```

<!-- Checkbox -->
<fieldset class="s-check-group">
    <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-vert-checkbox-1" />
        <label class="s-label" for="choice-vert-checkbox-1">Apples</label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-vert-checkbox-2" />
        <label class="s-label" for="choice-vert-checkbox-2">Oranges</label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-vert-checkbox-3" />
        <label class="s-label" for="choice-vert-checkbox-3">Bananas</label>
    </div>
</fieldset>

<!-- Radio -->
<fieldset class="s-check-group mt16">
    <legend class="s-label">Which fruit do you like best?</legend>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-vert-radio" id="choice-vert-radio-1" />
        <label class="s-label" for="choice-vert-radio-1">Apples</label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-vert-radio" id="choice-vert-radio-2" />
        <label class="s-label" for="choice-vert-radio-2">Oranges</label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-vert-radio" id="choice-vert-radio-3" />
        <label class="s-label" for="choice-vert-radio-3">Bananas</label>
    </div>
</fieldset>

### Horizontal group

```html
<!-- Checkbox -->
<fieldset class="s-check-group s-check-group__horizontal">
    <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-horz-checkbox-1" />
        <label class="s-label" for="choice-horz-checkbox-1">Apples</label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-horz-checkbox-2" />
        <label class="s-label" for="choice-horz-checkbox-2">Oranges</label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-horz-checkbox-3" />
        <label class="s-label" for="choice-horz-checkbox-3">Bananas</label>
    </div>
</fieldset>

 <!-- Radio -->
 <fieldset class="s-check-group s-check-group__horizontal">
    <legend class="s-label">Which fruit do you like best?</legend>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-horz-radio" id="choice-horz-radio-1" />
        <label class="s-label" for="choice-horz-radio-1">Apples</label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-horz-radio" id="choice-horz-radio-2" />
        <label class="s-label" for="choice-horz-radio-2">Oranges</label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="checkbox" name="choice-horz-radio" id="choice-horz-radio-3" />
        <label class="s-label" for="choice-horz-radio-3">Bananas</label>
    </div>
</fieldset>
```

<!-- Checkbox -->
<fieldset class="s-check-group s-check-group__horizontal">
    <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-horz-checkbox-1" />
        <label class="s-label" for="choice-horz-checkbox-1">Apples</label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-horz-checkbox-2" />
        <label class="s-label" for="choice-horz-checkbox-2">Oranges</label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-horz-checkbox-3" />
        <label class="s-label" for="choice-horz-checkbox-3">Bananas</label>
    </div>
</fieldset>

<!-- Radio -->
<fieldset class="s-check-group s-check-group__horizontal mt16">
    <legend class="s-label">Which fruit do you like best?</legend>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-horz-radio" id="choice-horz-radio-1" />
        <label class="s-label" for="choice-horz-radio-1">Apples</label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-horz-radio" id="choice-horz-radio-2" />
        <label class="s-label" for="choice-horz-radio-2">Oranges</label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="checkbox" name="choice-horz-radio" id="choice-horz-radio-3" />
        <label class="s-label" for="choice-horz-radio-3">Bananas</label>
    </div>
</fieldset>

### With description copy

```html
<fieldset class="s-check-group">
    <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-copy-checkbox-1" />
        <label class="s-label" for="choice-copy-checkbox-1">
            Apples
            <p class="s-description">A sweet, edible fruit produced by an apple tree (Malus pumila).</p>
        </label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-copy-checkbox-2" />
        <label class="s-label" for="choice-copy-checkbox-2">
            Oranges
            <p class="s-description">A fruit of the citrus species Citrus × sinensis in the family Rutaceae.</p>
        </label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-copy-checkbox-3" />
        <label class="s-label" for="choice-copy-checkbox-3">
            Bananas
            <p class="s-description">A fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.</p>
        </label>
    </div>
</fieldset>
```

<!-- Checkbox -->
<fieldset class="s-check-group">
    <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-copy-checkbox-1" />
        <label class="s-label" for="choice-copy-checkbox-1">
            Apples
            <p class="s-description">A sweet, edible fruit produced by an apple tree (Malus pumila).</p>
        </label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-copy-checkbox-2" />
        <label class="s-label" for="choice-copy-checkbox-2">
            Oranges
            <p class="s-description">A fruit of the citrus species Citrus × sinensis in the family Rutaceae.</p>
        </label>
    </div>
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="choice-copy-checkbox-3" />
        <label class="s-label" for="choice-copy-checkbox-3">
            Bananas
            <p class="s-description">A fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.</p>
        </label>
    </div>
</fieldset>

<!-- Radio -->
<fieldset class="s-check-group mt16">
    <legend class="s-label">Which fruit do you like best?</legend>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-copy-radio" id="choice-copy-radio-1" />
        <label class="s-label" for="choice-copy-radio-1">
            Apples
            <p class="s-description">A sweet, edible fruit produced by an apple tree (Malus pumila).</p>
        </label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-copy-radio" id="choice-copy-radio-2" />
        <label class="s-label" for="choice-copy-radio-2">
            Oranges
            <p class="s-description">A fruit of the citrus species Citrus × sinensis in the family Rutaceae.</p>
        </label>
    </div>
    <div class="s-check-control">
        <input class="s-radio" type="radio" name="choice-copy-radio" id="choice-copy-radio-3" />
        <label class="s-label" for="choice-copy-radio-3">
            Bananas
            <p class="s-description">A fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.</p>
        </label>
    </div>
</fieldset>

### Indeterminate state

Checkboxes can be styled by using the `:indeterminate` pseudo class.

<div class="s-notice mb32">
    <p class="mb0"><strong>Note:</strong> The <code>:indeterminate</code> pseudo class can only be set via JavaScript. Use the <code>HTMLInputElement</code> object's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes"><code>indeterminate</code></a> property to set the state.</p>
</div>

```html
<fieldset class="s-check-group">
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="indeterminate-checkbox-1" />
        <label class="s-label" for="indeterminate-checkbox-1">Select all</label>
    </div>
</fieldset>

<script>
    document.getElementById("indeterminate-checkbox-1").indeterminate = true;
</script>
```

<fieldset class="s-check-group">
    <div class="s-check-control">
        <input class="s-checkbox" type="checkbox" name="" id="indeterminate-checkbox-1" />
        <label class="s-label" for="indeterminate-checkbox-1">Select all</label>
    </div>
</fieldset>

## Validation states

Checkboxes use the same validation states as [inputs](/product/components/inputs).

### Validation classes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col" class="s-table--cell2">Class</th>
                <th scope="col" class="s-table--cell4">Applies</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each validationClasses as item}
            <tr>
                <th scope="row"><code class="flex--item stacks-code bg-white">{item.class}</code></th>
                <td>{item.applies}</td>
                <td>{item.description}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

### Validation examples

```html
<!-- Checkbox -->
<fieldset class="s-check-group">
    <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
    <div class="s-check-control has-warning">
        <input class="s-checkbox" type="checkbox" name="" id="choice-valid-checkbox-1" />
        <label class="s-label" for="choice-valid-checkbox-1">
            Apples
            <p class="s-input-message"><strong>Note:</strong> Apples are currently not in season.</p>
        </label>
    </div>
    <div class="s-check-control has-error">
        <input class="s-checkbox" type="checkbox" name="" id="choice-valid-checkbox-2" />
        <label class="s-label" for="choice-valid-checkbox-2">
            Oranges
            <p class="s-input-message">All oranges are currently <strong>out of stock</strong>.</p>
        </label>
    </div>
    <div class="s-check-control has-success">
        <input class="s-checkbox" type="checkbox" name="" id="choice-valid-checkbox-3" />
        <label class="d-block mb4 s-label fw-normal" for="choice-valid-checkbox-3">
            Bananas
            <p class="s-input-message">You've successfully selected the most amazing fruit in the world.</p>
        </label>
    </div>
</fieldset>

<!-- Radio -->
<fieldset class="s-check-group">
    <legend class="s-label">Which fruit do you like best?</legend>
    <div class="s-check-control has-warning">
        <input class="s-radio" type="radio" name="choice-valid-radio" id="choice-valid-radio-1" />
        <label class="s-label" for="choice-valid-radio-1">
            Apples
            <p class="s-input-message"><strong>Note:</strong> Apples are currently not in season.</p>
        </label>
    </div>
    <div class="s-check-control has-error">
        <input class="s-radio" type="radio" name="choice-valid-radio" id="choice-valid-radio-2" />
        <label class="s-label" for="choice-valid-radio-2">
            Oranges
            <p class="s-input-message">All oranges are currently <strong>out of stock</strong>.</p>
        </label>
    </div>
    <div class="s-check-control has-success">
        <input class="s-radio" type="radio" name="choice-valid-radio" id="choice-valid-radio-3" />
        <label class="s-label" for="choice-valid-radio-3">
            Bananas
            <p class="s-input-message">You've successfully selected the most amazing fruit in the world.</p>
        </label>
    </div>
</fieldset>
```

<!-- Checkbox -->
<fieldset class="s-check-group">
    <legend class="s-label">Which types of fruit do you like? <span class="ml4 fw-normal fc-light">(Check all that apply)</span></legend>
    <div class="s-check-control has-warning">
        <input class="s-checkbox" type="checkbox" name="" id="choice-valid-checkbox-1" />
        <label class="s-label" for="choice-valid-checkbox-1">
            Apples
            <p class="s-input-message"><strong>Note:</strong> Apples are currently not in season.</p>
        </label>
    </div>
    <div class="s-check-control has-error">
        <input class="s-checkbox" type="checkbox" name="" id="choice-valid-checkbox-2" />
        <label class="s-label" for="choice-valid-checkbox-2">
            Oranges
            <p class="s-input-message">All oranges are currently <strong>out of stock</strong>.</p>
        </label>
    </div>
    <div class="s-check-control has-success">
        <input class="s-checkbox" type="checkbox" name="" id="choice-valid-checkbox-3" />
        <label class="d-block mb4 s-label fw-normal" for="choice-valid-checkbox-3">
            Bananas
            <p class="s-input-message">You've successfully selected the most amazing fruit in the world.</p>
        </label>
    </div>
</fieldset>

<!-- Radio -->
<fieldset class="s-check-group mt16">
    <legend class="s-label">Which fruit do you like best?</legend>
    <div class="s-check-control has-warning">
        <input class="s-radio" type="radio" name="choice-valid-radio" id="choice-valid-radio-1" />
        <label class="s-label" for="choice-valid-radio-1">
            Apples
            <p class="s-input-message"><strong>Note:</strong> Apples are currently not in season.</p>
        </label>
    </div>
    <div class="s-check-control has-error">
        <input class="s-radio" type="radio" name="choice-valid-radio" id="choice-valid-radio-2" />
        <label class="s-label" for="choice-valid-radio-2">
            Oranges
            <p class="s-input-message">All oranges are currently <strong>out of stock</strong>.</p>
        </label>
    </div>
    <div class="s-check-control has-success">
        <input class="s-radio" type="radio" name="choice-valid-radio" id="choice-valid-radio-3" />
        <label class="s-label" for="choice-valid-radio-3">
            Bananas
            <p class="s-input-message">You've successfully selected the most amazing fruit in the world.</p>
        </label>
    </div>
</fieldset>

<script>
    document.getElementById("indeterminate-checkbox-1").indeterminate = true;
</script>

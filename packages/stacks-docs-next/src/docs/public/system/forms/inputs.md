---
title: Inputs
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-textinput--docs
figma: https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=713-24991&p=f&m=dev
description: Input elements are used to gather information from users.
updated: 2025-12-20
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconLock, IconAlert, IconAlertFill, IconCheck, IconSearch, IconPlaceholder, IconCross16 } from '@stackoverflow/stacks-icons';

  const validationClasses = [
    { class: '.has-warning', applies: 'Parent wrapper for input', description: "Used to warn users that the value they've entered has a potential problem, but it doesn't block them from proceeding." },
    { class: '.has-error', applies: 'Parent wrapper for input', description: "Used to alert users that the value they've entered is incorrect, not filled in, or has a problem which will block them from proceeding." },
    { class: '.has-success', applies: 'Parent wrapper for input', description: "Used to notify users that the value they've entered is fine or has been submitted successfully." }
  ];

  const inputSizes = [
    { name: 'Small', size: '13px', class: 's-input__sm' },
    { name: 'Default', size: '14px', class: null },
    { name: 'Large', size: '18px', class: 's-input__lg' }
  ];
</script>

## Base style

Inputs are normally paired with a label, but there are times when they can be used without a label. Placeholder text should primarily be used as a content prompt and only provided when needed.

```html
<!-- Base -->
<div class="d-flex gy4 fd-column">
    <label class="s-label" for="example-item1">Full name</label>
    <p class="s-description mtn2 mb0">This will be shown only to employers and other Team members.</p>
    <input class="s-input" id="example-item1" type="text" placeholder="Enter your input here" />
</div>

<!-- Disabled -->
<div class="d-flex gy4 fd-column is-disabled">
    <label class="s-label" for="example-item2">Display name</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-item2" type="text" placeholder="Enter your input here" disabled />
        <svg class="s-input-icon fc-black-400" ...>...</svg>
    </div>
</div>

<!-- Readonly -->
<div class="d-flex gy4 fd-column ps-relative is-readonly">
    <label class="s-label" for="example-item3">Legal name</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-item3" type="text" placeholder="Enter your input here" readonly value="Prefilled readonly input" />
        <svg class="s-input-icon" ...>...</svg>
    </div>
</div>
```

<div class="d-flex gy16 fd-column">
    <div class="d-flex gy4 fd-column">
        <label class="s-label" for="example-item1">Full name</label>
        <p class="s-description mtn2 mb0">This will be shown only to employers and other Team members.</p>
        <input class="s-input" id="example-item1" type="text" placeholder="Enter your input here" />
    </div>
    <div class="d-flex gy4 fd-column is-disabled">
        <label class="s-label" for="example-item2">Display name</label>
        <div class="d-flex ps-relative">
            <input class="s-input" id="example-item2" type="text" placeholder="Enter your input here" disabled />
            <Icon src={IconLock} class="s-input-icon fc-black-400" />
        </div>
    </div>
    <div class="d-flex gy4 fd-column ps-relative is-readonly">
        <label class="s-label" for="example-item3">Legal name</label>
        <div class="d-flex ps-relative">
            <input class="s-input" id="example-item3" type="text" placeholder="Enter your input here" readonly value="Prefilled readonly input" />
            <Icon src={IconLock} class="s-input-icon" />
        </div>
    </div>
</div>

## Accessibility

The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they're correctly formatted. When it comes to inputs, there are a few things to keep in mind:

- All inputs should have an `id` attribute.
- Be sure to associate the input's label by using the `for` attribute. The value here is the input's `id`.
- If you have a group of related inputs, use the `fieldset` and `legend` to group them together.

For more information, please read Gov.UK's article, [*"Using the fieldset and legend elements"*](https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/).

### Required input fields

Labels or instructions must be provided when content requires user input. For any input field within a form that is required for successful data submission, provide the asterisk `*` as a symbol and a legend advising the meaning of the symbol before the first use.

Stacks includes a special `.s-required-symbol` class to ensure the symbol (asterisk) is clearly visible.

| Class | Applies | Definition |
|-------|---------|------------|
| `.s-required-symbol` | `abbr` element enclosing the asterisk | Used to style the asterisk indicating that a specific field is required. |

```html
<abbr class="s-required-symbol" title="required">*</abbr>
```

Required symbols are not necessary for areas where only a single input field is seen on the page (ex: sign up modals). For more information, see [WCAG Technique H90](https://www.w3.org/WAI/WCAG22/Techniques/html/H90).

### Required input fields example

```html
<div class="d-flex w100 jc-space-between ai-center">
    <h1 class="fs-headline1 fw-normal mb16">
        Ask a question
    </h1>
    <p class="fs-caption fc-black-400">Required fields<abbr class="s-required-symbol" title="required">*</abbr></p>
</div>
<form class="d-flex fd-column gy16">
    <div class="d-flex gy4 fd-column">
        <label class="s-label" for="example-title-required">Title<abbr class="s-required-symbol" title="required">*</abbr></label>
        <input class="s-input" id="example-title-required" type="text" placeholder="Type a title" />
    </div>
    <div class="d-flex gy4 fd-column">
        <label class="s-label" for="example-body-required">Body<abbr class="s-required-symbol" title="required">*</abbr></label>
        <textarea class="s-textarea hmn1" id="example-body-required" placeholder="Type a question"></textarea>
    </div>
    <div class="d-flex gy4 fd-column">
        <label class="s-label" for="example-ask-members">Ask team members</label>
        <input class="s-input" id="example-ask-members" type="text" placeholder="Type a name" />
    </div>
</form>
```

<div class="d-flex w100 jc-space-between ai-center">
    <h1 class="fs-headline1 fw-normal mb16">
        Ask a question
    </h1>
    <p class="fs-caption fc-black-400">Required fields<abbr class="s-required-symbol" title="required">*</abbr></p>
</div>
<form class="d-flex fd-column gy16">
    <div class="d-flex gy4 fd-column">
        <label class="s-label" for="example-title-required">Title<abbr class="s-required-symbol" title="required">*</abbr></label>
        <input class="s-input" id="example-title-required" type="text" placeholder="Type a title" />
    </div>
    <div class="d-flex gy4 fd-column">
        <label class="s-label" for="example-body-required">Body<abbr class="s-required-symbol" title="required">*</abbr></label>
        <textarea class="s-textarea hmn1" id="example-body-required" placeholder="Type a question"></textarea>
    </div>
    <div class="d-flex gy4 fd-column">
        <label class="s-label" for="example-ask-members">Ask team members</label>
        <input class="s-input" id="example-ask-members" type="text" placeholder="Type a name" />
    </div>
</form>

## Validation states

Validation states provides the user feedback based on their interaction (or lack of interaction) with an input. These styles are applied by applying the appropriate class to the wrapping parent container.

### Validation classes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple">
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

### Validation guidance

In most cases, validation states shouldn't be shown until after the user has submitted the form. There are certain exceptions where it can be appropriate to show a validation state without form submission—after a sufficient delay. For example, validating the existence of a username can occur after the user has stopped typing, or when they've deselected the input.

Once the user is presented validation states, they can be cleared as soon as the user interacts with the form field. For example, the error state for an incorrect password should be cleared as soon as the user focuses the input to re-enter their password.

Similarly to using `for` with labels, validation messages below inputs should be associated with their respective fields using the `aria-describedby` attribute for accessible behavior.

### Validation examples

#### Warning

```html
<div class="d-flex gy4 fd-column has-warning">
    <label class="s-label" for="example-warning">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-warning" type="text" placeholder="" aria-describedby="example-warning-desc" />
        <svg class="s-input-icon" ...>...</svg>
    </div>
    <p id="example-warning-desc" class="s-input-message mb0">Caps lock is on! <a href="#">Having trouble entering your username?</a></p>
</div>
```

<div class="d-flex gy4 fd-column has-warning">
    <label class="s-label" for="example-warning">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-warning" type="text" value="AA" aria-describedby="example-warning-desc" />
        <Icon src={IconAlert} class="s-input-icon" />
    </div>
    <p id="example-warning-desc" class="s-input-message mb0">Caps lock is on! <a href="#">Having trouble entering your username?</a></p>
</div>

#### Error

<div class="s-notice s-notice__warning mb24">
    <p class="mb0">In addition to using the "error" state for a field, be sure to use the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attributev"><code class="stacks-code">aria-invalid</code></a> attribute to indicate to assistive technology that respective fields have failed validation.</p>
</div>

```html
<div class="d-flex gy4 fd-column has-error">
    <label class="s-label" for="example-error">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-error" type="text" placeholder="e.g. johndoe111" aria-describedby="example-error-desc" aria-invalid="true" />
        <svg class="s-input-icon" ...>...</svg>
    </div>
    <p id="example-error-desc" class="s-input-message mb0">You must provide a username. <a href="#">Forgot your username?</a></p>
</div>
```

<div class="d-flex gy4 fd-column has-error">
    <label class="s-label" for="example-error">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-error" type="text" aria-describedby="example-error-desc" />
        <Icon src={IconAlertFill} class="s-input-icon" />
    </div>
    <p id="example-error-desc" class="s-input-message mb0">You must provide a username. <a href="#">Forgot your username?</a></p>
</div>

#### Success

```html
<div class="d-flex gy4 fd-column has-success">
    <label class="s-label" for="example-success">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-success" type="text" aria-describedby="example-success-desc" />
        <svg class="s-input-icon" ...>...</svg>
    </div>
    <p id="example-success-desc" class="s-input-message mb0">That name is available! <a href="#">Why do we require a username?</a></p>
</div>
```

<div class="d-flex gy4 fd-column has-success">
    <label class="s-label" for="example-success">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-success" type="text" value="aaronshekey" aria-describedby="example-success-desc" />
        <Icon src={IconCheck} class="s-input-icon" />
    </div>
    <p id="example-success-desc" class="s-input-message mb0">That name is available! <a href="#">Why do we require a username?</a></p>
</div>

## Icons

### Search

Stacks provides helper classes to consistently style an input used for search. First, wrap your search input in an element with relative positioning. Then, and add `s-input__search` to the input itself. Finally, be sure to add `s-input-icon` and `s-input-icon__search` to the search icon.

```html
<div class="ps-relative">
    <label class="v-visible-sr" for="example-search">Search</label>
    <input class="s-input s-input__search" id="example-search" type="text" placeholder="Search…" />
    <svg class="s-input-icon s-input-icon__search" ...>...</svg>
</div>
```

<div class="ps-relative">
    <label class="v-visible-sr" for="example-search">Search</label>
    <input class="s-input s-input__search" id="example-search" type="text" placeholder="Search…" />
    <Icon src={IconSearch} class="s-input-icon s-input-icon__search" />
</div>

### Credit Card

```html
<div class="ps-relative">
    <label class="v-visible-sr" for="example-creditcard">Credit Card</label>
    <input class="s-input s-input__creditcard" id="example-creditcard" type="text" />
    <svg class="s-input-icon s-input-icon__creditcard" ...>...</svg>
</div>
```

<div class="ps-relative">
    <label class="v-visible-sr" for="example-creditcard">Credit Card</label>
    <input class="s-input s-input__creditcard" id="example-creditcard" type="text" />
    <Icon src={IconPlaceholder} class="s-input-icon s-input-icon__creditcard" />
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
            {#each inputSizes as item}
            <tr>
                <th scope="row">{item.name}</th>
                <td>{item.size}</td>
                <td>{#if item.class}<code class="stacks-code">.{item.class}</code>{:else}<em class="fc-light">N/A</em>{/if}</td>
                <td><input type="text" class="s-input {item.class || ''}" placeholder="e.g. What is Stacks?"></td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

## Input fills

Input fills are used to visually connect input text boxes with related content.

### Prepended inputs

```html
<div class="d-flex gy4 fd-column">
    <label class="s-label" for="website-url">Website URL</label>
    <div class="d-flex">
        <div class="s-input-fill order-first">https://</div>
        <div class="d-flex fl-grow1 ps-relative">
            <input class="s-input blr0" type="text" id="website-url" placeholder="www.stackoverflow.com" />
        </div>
    </div>
</div>
```

<div class="d-flex gy4 fd-column">
    <label class="s-label" for="website-url">Website URL</label>
    <div class="d-flex">
        <div class="s-input-fill order-first">https://</div>
        <div class="d-flex fl-grow1 ps-relative">
            <input class="s-input blr0" type="text" id="website-url" placeholder="www.stackoverflow.com" />
        </div>
    </div>
</div>

### Appended inputs

```html
<div class="d-flex gy4 fd-column">
    <label class="s-label" for="min-salary">Minimum Salary</label>
    <div class="d-flex">
        <div class="d-flex ai-center order-last s-input-fill">
            <div class="d-flex gx4 ai-center">
                <input class="s-checkbox" type="checkbox" id="need-visa" />
                <label class="s-label s-label__sm fw-normal" for="need-visa">Need Visa Sponsorship</label>
            </div>
        </div>
        <div class="d-flex fl-grow1 ps-relative">
            <input class="s-input brr0" type="number" id="min-salary" placeholder="e.g. 125,000" />
        </div>
    </div>
</div>
```

<div class="d-flex gy4 fd-column">
    <label class="s-label" for="min-salary">Minimum Salary</label>
    <div class="d-flex">
        <div class="d-flex ai-center order-last s-input-fill">
            <div class="d-flex gx4 ai-center">
                <input class="s-checkbox" type="checkbox" id="need-visa" />
                <label class="s-label s-label__sm fw-normal" for="need-visa">Need Visa Sponsorship</label>
            </div>
        </div>
        <div class="d-flex fl-grow1 ps-relative">
            <input class="s-input brr0" type="number" id="min-salary" placeholder="e.g. 125,000" />
        </div>
    </div>
</div>

## Nested inputs

An input can be nested within a container that has the `.s-input` class applied to display styled elements as if they're within an input.

```html
<div class="d-flex fd-column g4">
    <label class="s-label" for="tag-selector">Tags</label>
    <div class="s-input">
        <div class="d-flex fw-wrap gx8 myn4">
            <span class="s-tag">
                svelte
                <button class="s-tag--dismiss" type="button" title="Remove tag">
                    <span class="v-visible-sr">Dismiss svelte tag</span>
                    <svg ...>...</svg>
                </button>
            </span>
        </div>
        <input id="tag-selector" class="s-input" type="text" role="presentation" placeholder="enter up to 5 tags">
    </div>
</div>
```

<div class="d-flex fd-column g4">
    <label class="s-label" for="tag-selector">Tags</label>
    <div class="s-input">
        <div class="d-flex fw-wrap gx8 myn4">
            <span class="s-tag">
                svelte
                <button class="s-tag--dismiss" type="button">
                    <span class="v-visible-sr">Dismiss svelte tag</span>
                    <Icon src={IconCross16} />
                </button>
            </span>
        </div>
        <input id="tag-selector" class="s-input" type="text" role="presentation" placeholder="enter up to 5 tags">
    </div>
</div>

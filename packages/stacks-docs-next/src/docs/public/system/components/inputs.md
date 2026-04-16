---
title: "Inputs"
description: "Input elements are used to gather information from users."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-textinput--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=713-24991&p=f&m=dev"
---

<script lang="ts">
    import { Icon, Notice } from '@stackoverflow/stacks-svelte';
    import { IconAlert, IconAlertFill, IconCheck, IconLock, IconSearch } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    // Legacy icons not in current @stackoverflow/stacks-icons
    const svgCreditCard = `<svg aria-hidden="true" class="svg-icon iconCreditCard s-input-icon s-input-icon__creditcard" width="18" height="18" viewBox="0 0 18 18"><path d="M3 3h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 6v4h12V9zm0-3h12V5H3z"/></svg>`;
    const svgClearSm = `<svg aria-hidden="true" class="svg-icon iconClearSm" width="14" height="14" viewBox="0 0 14 14"><path d="M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"/></svg>`;

    const classes: ClassTableRow[] = [
        { class: '.s-input',             parent: 'N/A',     modifies: 'N/A',    description: 'Base input style.' },
        { class: '.s-input__creditcard', parent: 'N/A',     modifies: '.s-input', description: 'Adds a credit card icon to the input.' },
        { class: '.s-input__search',     parent: 'N/A',     modifies: '.s-input', description: 'Adds a search icon to the input.' },
        { class: '.s-input__sm',         parent: 'N/A',     modifies: '.s-input', description: 'Apply a small size.' },
        { class: '.s-input__lg',         parent: 'N/A',     modifies: '.s-input', description: 'Apply a large size.' },
    ];

    const required: ClassTableRow[] = [
        { class: '.s-required-symbol', parent: '<abbr> element enclosing the asterisk', description: 'Used to style the asterisk indicating that a specific field is required.' },
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

Inputs are normally paired with a label, but there are times when they can be used without a label. Placeholder text should primarily be used as a content prompt and only provided when needed.

```html
<!-- Base -->
<div class="s-form-group">
    <label class="s-label" for="example-item1">Full name</label>
    <p class="s-description">This will be shown only to employers and other Team members.</p>
    <input class="s-input" id="example-item1" type="text" placeholder="Enter your input here" />
</div>

<!-- Disabled -->
<div class="s-form-group is-disabled">
    <label class="s-label" for="example-item2">Display name</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-item2" type="text" placeholder="Enter your input here" disabled />
        <svg class="svg-icon s-input-icon fc-black-400" aria-hidden="true">…</svg>
    </div>
</div>

<!-- Readonly -->
<div class="s-form-group ps-relative is-readonly">
    <label class="s-label" for="example-item3">Legal name</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-item3" type="text" placeholder="Enter your input here" readonly value="Prefilled readonly input" />
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
</div>
```

<Example>
    <div class="d-flex gy16 fd-column">
        <div class="s-form-group">
            <label class="s-label" for="example-item1">Full name</label>
            <p class="s-description">This will be shown only to employers and other Team members.</p>
            <input class="s-input" id="example-item1" type="text" placeholder="Enter your input here" />
        </div>
        <div class="s-form-group is-disabled">
            <label class="s-label" for="example-item2">Display name</label>
            <div class="d-flex ps-relative">
                <input class="s-input" id="example-item2" type="text" placeholder="Enter your input here" disabled />
                <Icon src={IconLock} class="s-input-icon fc-black-400" />
            </div>
        </div>
        <div class="s-form-group ps-relative is-readonly">
            <label class="s-label" for="example-item3">Legal name</label>
            <div class="d-flex ps-relative">
                <input class="s-input" id="example-item3" type="text" placeholder="Enter your input here" readonly value="Prefilled readonly input" />
                <Icon src={IconLock} class="s-input-icon" />
            </div>
        </div>
    </div>
</Example>

## Accessibility

The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they're correctly formatted. When it comes to inputs, there are a few things to keep in mind:

- All inputs should have an `id` attribute.
- Be sure to associate the input's label by using the `for` attribute. The value here is the input's `id`.
- If you have a group of related inputs, use the `fieldset` and `legend` to group them together.

For more information, please read Gov.UK's article, [*"Using the fieldset and legend elements"*](https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/).

### Required input fields

Labels or instructions must be provided when content requires user input. For any input field within a form that is required for successful data submission, provide the asterisk `*` as a symbol and a legend advising the meaning of the symbol before the first use.

Stacks includes a special `.s-required-symbol` class to ensure the symbol (asterisk) is clearly visible.

<ClassTable classes={required} headings={{ parent: 'Applies to' }} />

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
<form class="d-flex fd-column gy24">
    <div class="s-form-group">
        <label class="s-label" for="example-title-required">Title<abbr class="s-required-symbol" title="required">*</abbr></label>
        <input class="s-input" id="example-title-required" type="text" placeholder="Type a title" />
    </div>
    <div class="s-form-group">
        <label class="s-label" for="example-body-required">Body<abbr class="s-required-symbol" title="required">*</abbr></label>
        <textarea class="s-textarea hmn1" id="example-body-required" placeholder="Type a question"></textarea>
    </div>
    <div class="s-form-group">
        <label class="s-label" for="example-ask-members">Ask team members</label>
        <input class="s-input" id="example-ask-members" type="text" placeholder="Type a name" />
    </div>
</form>
```

<Example>
    <div class="d-flex w100 jc-space-between ai-center">
        <h1 class="fs-headline1 fw-normal mb16">
            Ask a question
        </h1>
        <p class="fs-caption fc-black-400">Required fields<abbr class="s-required-symbol" title="required">*</abbr></p>
    </div>
    <form class="d-flex fd-column gy24">
        <div class="s-form-group">
            <label class="s-label" for="example-title-required">Title<abbr class="s-required-symbol" title="required">*</abbr></label>
            <input class="s-input" id="example-title-required" type="text" placeholder="Type a title" />
        </div>
        <div class="s-form-group">
            <label class="s-label" for="example-body-required">Body<abbr class="s-required-symbol" title="required">*</abbr></label>
            <textarea class="s-textarea hmn1" id="example-body-required" placeholder="Type a question"></textarea>
        </div>
        <div class="s-form-group">
            <label class="s-label" for="example-ask-members">Ask team members</label>
            <input class="s-input" id="example-ask-members" type="text" placeholder="Type a name" />
        </div>
    </form>
</Example>

## Validation states

Validation states provides the user feedback based on their interaction (or lack of interaction) with an input. These styles are applied by applying the appropriate class to the wrapping parent container.

### Validation classes

<ClassTable classes={validationClasses} headings={{ parent: 'Applies to' }} />

### Validation guidance

In most cases, validation states shouldn't be shown until after the user has submitted the form. There are certain exceptions where it can be appropriate to show a validation state without form submission—after a sufficient delay. For example, validating the existence of a username can occur after the user has stopped typing, or when they've deselected the input.

Once the user is presented validation states, they can be cleared as soon as the user interacts with the form field. For example, the error state for an incorrect password should be cleared as soon as the user focuses the input to re-enter their password.

Similarly to using `for` with labels, validation messages below inputs should be associated with their respective fields using the `aria-describedby` attribute for accessible behavior.

### Validation examples

#### Warning

```html
<div class="s-form-group has-warning">
    <label class="s-label" for="example-warning">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-warning" type="text" placeholder="" aria-describedby="example-warning-desc" />
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
    <p id="example-warning-desc" class="s-input-message">Caps lock is on! <a href="#">Having trouble entering your username?</a></p>
</div>
```

<Example>
    <div class="s-form-group has-warning">
        <label class="s-label" for="example-warning">Username</label>
        <div class="d-flex ps-relative">
            <input class="s-input" id="example-warning" type="text" value="AA" aria-describedby="example-warning-desc" />
            <Icon src={IconAlert} class="s-input-icon" />
        </div>
        <p id="example-warning-desc" class="s-input-message">Caps lock is on! <a href="#">Having trouble entering your username?</a></p>
    </div>
</Example>

#### Error

<Notice variant="warning" role="note" class="mb16">
    <p>In addition to using the "error" state for a field, be sure to use the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attributev"><code>aria-invalid</code></a> attribute to indicate to assistive technology that respective fields have failed validation.</p>
</Notice>

```html
<div class="s-form-group has-error">
    <label class="s-label" for="example-error">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-error" type="text" placeholder="e.g. johndoe111" aria-describedby="example-error-desc" aria-invalid="true" />
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
    <p id="example-error-desc" class="s-input-message">You must provide a username. <a href="#">Forgot your username?</a></p>
</div>
```

<Example>
    <div class="s-form-group has-error">
        <label class="s-label" for="example-error">Username</label>
        <div class="d-flex ps-relative">
            <input class="s-input" id="example-error" type="text" aria-describedby="example-error-desc" />
            <Icon src={IconAlertFill} class="s-input-icon" />
        </div>
        <p id="example-error-desc" class="s-input-message">You must provide a username. <a href="#">Forgot your username?</a></p>
    </div>
</Example>

#### Success

```html
<div class="s-form-group has-success">
    <label class="s-label" for="example-success">Username</label>
    <div class="d-flex ps-relative">
        <input class="s-input" id="example-success" type="text" aria-describedby="example-success-desc" />
        <svg class="svg-icon s-input-icon" aria-hidden="true">…</svg>
    </div>
    <p id="example-success-desc" class="s-input-message">That name is available! <a href="#">Why do we require a username?</a></p>
</div>
```

<Example>
    <div class="s-form-group has-success">
        <label class="s-label" for="example-success">Username</label>
        <div class="d-flex ps-relative">
            <input class="s-input" id="example-success" type="text" value="aaronshekey" aria-describedby="example-success-desc" />
            <Icon src={IconCheck} class="s-input-icon" />
        </div>
        <p id="example-success-desc" class="s-input-message">That name is available! <a href="#">Why do we require a username?</a></p>
    </div>
</Example>

## Icons

### Search

Stacks provides helper classes to consistently style an input used for search. First, wrap your search input in an element with relative positioning. Then, and add `s-input__search` to the input itself. Finally, be sure to add `s-input-icon` and `s-input-icon__search` to the search icon.

```html
<div class="ps-relative">
    <label class="v-visible-sr" for="example-search">Search</label>
    <input class="s-input s-input__search" id="example-search" type="text" placeholder="Search…" />
    <svg class="svg-icon s-input-icon s-input-icon__search" aria-hidden="true">…</svg>
</div>
```

<Example>
    <div class="ps-relative">
        <label class="v-visible-sr" for="example-search">Search</label>
        <input class="s-input s-input__search" id="example-search" type="text" placeholder="Search…" />
        <Icon src={IconSearch} class="s-input-icon s-input-icon__search" />
    </div>
</Example>

### Credit Card

```html
<div class="ps-relative">
    <label class="v-visible-sr" for="example-creditcard">Credit Card</label>
    <input class="s-input s-input__creditcard" id="example-creditcard" type="text" />
    <svg class="svg-icon s-input-icon s-input-icon__creditcard" aria-hidden="true">…</svg>
</div>
```

<Example>
    <div class="ps-relative">
        <label class="v-visible-sr" for="example-creditcard">Credit Card</label>
        <input class="s-input s-input__creditcard" id="example-creditcard" type="text" />
        {@html svgCreditCard}
    </div>
</Example>

## Sizes

<Example>
    <div class="d-flex ai-start fw-wrap g24">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Small — 13px — .s-input__sm</span>
            <input type="text" placeholder="e.g. What is Stacks?" class="s-input s-input__sm" />
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Default — 14px</span>
            <input type="text" placeholder="e.g. What is Stacks?" class="s-input" />
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Large — 18px — .s-input__lg</span>
            <input type="text" placeholder="e.g. What is Stacks?" class="s-input s-input__lg" />
        </div>
    </div>
</Example>

## Input fills

Input fills are used to visually connect input text boxes with related content.

### Prepended inputs

```html
<div class="s-form-group">
    <label class="s-label" for="website-url">Website URL</label>
    <div class="d-flex">
        <div class="s-input-fill order-first">https://</div>
        <div class="d-flex fl-grow1 ps-relative">
            <input class="s-input blr0" type="text" id="website-url" placeholder="www.stackoverflow.com" />
        </div>
    </div>
</div>
```

<Example>
    <div class="s-form-group">
        <label class="s-label" for="website-url">Website URL</label>
        <div class="d-flex">
            <div class="s-input-fill order-first">https://</div>
            <div class="d-flex fl-grow1 ps-relative">
                <input class="s-input blr0" type="text" id="website-url" placeholder="www.stackoverflow.com" />
            </div>
        </div>
    </div>
</Example>

### Appended inputs

```html
<div class="s-form-group">
    <label class="s-label" for="min-salary">Minimum Salary</label>
    <div class="d-flex">
        <div class="d-flex ai-center order-last s-input-fill">
            <div class="d-flex gx4 ai-center">
                <div class="s-checkbox">
                    <input type="checkbox" id="need-visa" />
                    <label class="s-label" for="need-visa">Need Visa Sponsorship</label>
                </div>
            </div>
        </div>
        <div class="d-flex fl-grow1 ps-relative">
            <input class="s-input brr0" type="number" id="min-salary" placeholder="e.g. 125,000" />
        </div>
    </div>
</div>
```

<Example>
    <div class="s-form-group">
        <label class="s-label" for="min-salary">Minimum Salary</label>
        <div class="d-flex">
            <div class="d-flex ai-center order-last s-input-fill">
                <div class="d-flex gx4 ai-center">
                    <div class="s-checkbox">
                        <input type="checkbox" id="need-visa" />
                        <label class="s-label" for="need-visa">Need Visa Sponsorship</label>
                    </div>
                </div>
            </div>
            <div class="d-flex fl-grow1 ps-relative">
                <input class="s-input brr0" type="number" id="min-salary" placeholder="e.g. 125,000" />
            </div>
        </div>
    </div>
</Example>

## Nested inputs

An input can be nested within a container that has the `.s-input` class applied to display styled elements as if they're within an input.

```html
<div class="s-form-group">
    <label class="s-label" for="tag-selector">Tags</label>
    <div class="s-input">
        <div class="d-flex fw-wrap gx8 myn4">
            <span class="s-tag">
                svelte
                <button class="s-tag--dismiss" type="button" title="Remove tag">
                    <span class="v-visible-sr">Dismiss svelte tag</span>
                    <svg class="svg-icon iconClearSm" aria-hidden="true">…</svg>
                </button>
            </span>
        </div>
        <input id="tag-selector" class="s-input" type="text" role="presentation" placeholder="enter up to 5 tags">
    </div>
</div>
```

<Example>
    <div class="s-form-group">
        <label class="s-label" for="tag-selector">Tags</label>
        <div class="s-input">
            <div class="d-flex fw-wrap gx8 myn4">
                <span class="s-tag">
                    svelte
                    <button class="s-tag--dismiss" type="button">
                        <span class="v-visible-sr">Dismiss svelte tag</span>
                        {@html svgClearSm}
                    </button>
                </span>
            </div>
            <input id="tag-selector" class="s-input" type="text" role="presentation" placeholder="enter up to 5 tags">
        </div>
    </div>
</Example>

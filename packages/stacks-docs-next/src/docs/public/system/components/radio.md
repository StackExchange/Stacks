---
title: "Radio"
description: "Checkable inputs that visually allow for single selection from multiple options."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-radiogroup--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=720-2910&p=f&m=dev"
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-radio',             parent: 'N/A',     modifies: 'N/A',     description: 'Base radio style.' },
        { class: '.s-radio__checkmark',  parent: '.s-radio', modifies: 'N/A',    description: 'Checkmark style.' },
    ];

    const validationClasses: ClassTableRow[] = [
        { class: '.has-warning', parent: 'Parent element', description: 'Used to warn users that the value they\'ve entered has a potential problem, but it doesn\'t block them from proceeding.' },
        { class: '.has-error',   parent: 'Parent element', description: 'Used to alert users that the value they\'ve entered is incorrect, not filled in, or has a problem which will block them from proceeding.' },
        { class: '.has-success', parent: 'Parent element', description: 'Used to notify users that the value they\'ve entered is fine or has been submitted successfully.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Base

Use the `.s-radio` to wrap `input[type="radio"]` elements to apply radio styles.

```html
<div class="s-radio">
    <input type="radio" name="example-name" id="example-item" />
    <label class="s-label" for="example-item">Check Label</label>
</div>
```

<Example>
    <div class="d-flex ai-start fw-wrap g24">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Unchecked</span>
            <div class="s-radio">
                <input type="radio" name="radio-group" id="radio-unchecked" />
                <label class="s-label" for="radio-unchecked">Radio label</label>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Disabled unchecked</span>
            <div class="s-radio">
                <input type="radio" name="radio-group" id="radio-disabled-unchecked" disabled />
                <label class="s-label" for="radio-disabled-unchecked">Radio label</label>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Checked</span>
            <div class="s-radio">
                <input type="radio" name="radio-group" id="radio-checked" checked />
                <label class="s-label" for="radio-checked">Radio label</label>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Disabled checked</span>
            <div class="s-radio">
                <input type="radio" name="radio-group-disabled-checked" id="radio-disabled-checked" disabled checked />
                <label class="s-label" for="radio-disabled-checked">Radio label</label>
            </div>
        </div>
    </div>
</Example>

### Checkmark

The checkmark style is an alternative to the base radio style. To use the checkmark style, wrap your input and label in a container with the `.s-radio__checkmark` class.

```html
<label class="s-radio s-radio__checkmark" for="example-item">
    Checkmark Label
    <input type="radio" name="example-name" id="example-item" />
</label>
```

<Example>
    <div class="d-flex ai-start fw-wrap g24">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Unchecked</span>
            <label class="s-radio s-radio__checkmark" for="checkmark-radio-unchecked">
                Checkmark label
                <input type="radio" name="checkmark-radio-group" id="checkmark-radio-unchecked" />
            </label>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Disabled unchecked</span>
            <label class="s-radio s-radio__checkmark" for="checkmark-radio-disabled-unchecked">
                Checkmark label
                <input type="radio" name="checkmark-radio-group" id="checkmark-radio-disabled-unchecked" disabled />
            </label>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Checked</span>
            <label class="s-radio s-radio__checkmark" for="checkmark-radio-checked">
                Checkmark label
                <input type="radio" name="checkmark-radio-group" id="checkmark-radio-checked" checked />
            </label>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Disabled checked</span>
            <label class="s-radio s-radio__checkmark" for="checkmark-radio-disabled-checked">
                Checkmark label
                <input type="radio" name="checkmark-radio-group-disabled-checked" id="checkmark-radio-disabled-checked" disabled checked />
            </label>
        </div>
    </div>
</Example>

## Accessibility

The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they're correctly formatted. When it comes to radios, there are a few things to keep in mind:

- All inputs should have an `id` attribute.
- Be sure to associate the radio label by using the `for` attribute. The value here is the input's `id`.
- If you have a group of related radios, use the `fieldset` and `legend` to group them together.

For more information, please read Gov.UK's article, [*"Using the fieldset and legend elements"*](https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/).

## Radio group

### Vertical group

```html
<fieldset class="s-form-group">
    <legend class="s-label">…</legend>
    <div class="s-radio">
        <input type="radio" name="vert-radio" id="vert-radio-1" />
        <label class="s-label" for="vert-radio-1">…</label>
    </div>
    <div class="s-radio">
        <input type="radio" name="vert-radio" id="vert-radio-2" />
        <label class="s-label" for="vert-radio-2">…</label>
    </div>
    <div class="s-radio">
        <input type="radio" name="vert-radio" id="vert-radio-3" />
        <label class="s-label" for="vert-radio-3">…</label>
    </div>
</fieldset>

<!-- Checkmark w/ radio using .s-menu for additional styling -->
<fieldset class="s-menu s-form-group">
    <legend class="s-menu--title">…</legend>
    <div class="s-menu--item">
        <label class="s-menu--action s-radio s-radio__checkmark" for="vert-checkmark-1">
            <input type="radio" name="vert-checkmark" id="vert-checkmark-1" />
            …
        </label>
    </div>
    …
</fieldset>
```

<Example>
    <div class="d-flex g24 fd-column">
        <fieldset class="s-form-group">
            <legend class="s-label">Which types of fruit do you like?</legend>
            <div class="s-radio">
                <input type="radio" name="vert-radio" id="vert-radio-Apples" checked />
                <label class="s-label" for="vert-radio-Apples">Apples</label>
            </div>
            <div class="s-radio">
                <input type="radio" name="vert-radio" id="vert-radio-Oranges" />
                <label class="s-label" for="vert-radio-Oranges">Oranges</label>
            </div>
            <div class="s-radio">
                <input type="radio" name="vert-radio" id="vert-radio-Bananas" />
                <label class="s-label" for="vert-radio-Bananas">Bananas</label>
            </div>
        </fieldset>
        <div class="s-popover is-visible ps-relative ws2 p8">
            <fieldset class="s-menu s-form-group">
                <legend class="s-menu--title">Pick a fruit</legend>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark" for="vert-checkmark-Apples">
                        <input type="radio" name="vert-checkmark" id="vert-checkmark-Apples" checked />
                        Apples
                    </label>
                </div>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark" for="vert-checkmark-Oranges">
                        <input type="radio" name="vert-checkmark" id="vert-checkmark-Oranges" />
                        Oranges
                    </label>
                </div>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark" for="vert-checkmark-Bananas">
                        <input type="radio" name="vert-checkmark" id="vert-checkmark-Bananas" />
                        Bananas
                    </label>
                </div>
            </fieldset>
        </div>
    </div>
</Example>

### Horizontal group

```html
<fieldset class="s-form-group s-form-group__horizontal">
    <legend class="s-label">…</legend>
    <div class="s-radio">
        <input type="radio" name="hori-radio" id="hori-radio-1" />
        <label class="s-label" for="hori-radio-1">…</label>
    </div>
    <div class="s-radio">
        <input type="radio" name="hori-radio" id="hori-radio-2" />
        <label class="s-label" for="hori-radio-2">…</label>
    </div>
    <div class="s-radio">
        <input type="radio" name="hori-radio" id="hori-radio-3" />
        <label class="s-label" for="hori-radio-3">…</label>
    </div>
</fieldset>
```

<Example>
    <fieldset class="s-form-group s-form-group__horizontal">
        <legend class="s-label">Which types of fruit do you like?</legend>
        <div class="s-radio">
            <input type="radio" name="hori-radio" id="hori-radio-Apples" checked />
            <label class="s-label" for="hori-radio-Apples">Apples</label>
        </div>
        <div class="s-radio">
            <input type="radio" name="hori-radio" id="hori-radio-Oranges" />
            <label class="s-label" for="hori-radio-Oranges">Oranges</label>
        </div>
        <div class="s-radio">
            <input type="radio" name="hori-radio" id="hori-radio-Bananas" />
            <label class="s-label" for="hori-radio-Bananas">Bananas</label>
        </div>
    </fieldset>
</Example>

### With description copy

```html
<fieldset class="s-form-group">
    <legend class="s-label">…</legend>
    <div class="s-radio">
        <input type="radio" name="desc-radio" id="desc-radio-1" />
        <label class="s-label" for="desc-radio-1">
            …
            <p class="s-description">…</p>
        </label>
    </div>
    …
</fieldset>

<!-- Checkmark w/ radio using .s-menu for additional styling -->
<fieldset class="s-menu s-form-group">
    <legend class="s-menu--title">…</legend>
    <div class="s-menu--item">
        <label class="s-menu--action s-radio s-radio__checkmark" for="desc-checkmark-1">
            <input type="radio" name="desc-checkmark" id="desc-checkmark-1" />
            <div>
                …
                <p class="s-description">…</p>
            </div>
        </label>
    </div>
    …
</fieldset>
```

<Example>
    <div class="d-flex g24 fd-column">
        <fieldset class="s-form-group">
            <legend class="s-label">Which types of fruit do you like?</legend>
            <div class="s-radio">
                <input type="radio" name="desc-radio" id="desc-radio-Apples" checked />
                <label class="s-label" for="desc-radio-Apples">
                    Apples
                    <p class="s-description">Fresh red apples.</p>
                </label>
            </div>
            <div class="s-radio">
                <input type="radio" name="desc-radio" id="desc-radio-Oranges" />
                <label class="s-label" for="desc-radio-Oranges">
                    Oranges
                    <p class="s-description">Juicy and sweet oranges.</p>
                </label>
            </div>
            <div class="s-radio">
                <input type="radio" name="desc-radio" id="desc-radio-Bananas" />
                <label class="s-label" for="desc-radio-Bananas">
                    Bananas
                    <p class="s-description">Ripe yellow bananas.</p>
                </label>
            </div>
        </fieldset>
        <div class="s-popover is-visible ps-relative ws2 p8">
            <fieldset class="s-menu s-form-group">
                <legend class="s-menu--title">Pick a fruit</legend>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark" for="desc-checkmark-Apples">
                        <input type="radio" name="desc-checkmark" id="desc-checkmark-Apples" checked />
                        <div>
                            Apples
                            <p class="s-description">Fresh red apples.</p>
                        </div>
                    </label>
                </div>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark" for="desc-checkmark-Oranges">
                        <input type="radio" name="desc-checkmark" id="desc-checkmark-Oranges" />
                        <div>
                            Oranges
                            <p class="s-description">Juicy and sweet oranges.</p>
                        </div>
                    </label>
                </div>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark" for="desc-checkmark-Bananas">
                        <input type="radio" name="desc-checkmark" id="desc-checkmark-Bananas" />
                        <div>
                            Bananas
                            <p class="s-description">Ripe yellow bananas.</p>
                        </div>
                    </label>
                </div>
            </fieldset>
        </div>
    </div>
</Example>

## Validation states

Radios use the same validation states as [inputs](/system/components/inputs).

### Validation classes

<ClassTable classes={validationClasses} headings={{ parent: 'Applies to' }} />

### Validation examples

```html
<!-- Radio w/ error -->
<div class="s-radio has-error">
    <input type="radio" name="error-radio" id="error-radio-1" />
    <label class="s-label" for="error-radio-1">
        …
        <p class="s-description">…</p>
    </label>
</div>

<!-- Checkmark w/ success -->
<label class="s-radio s-radio__checkmark has-success" for="success-checkmark-1">
    <input type="radio" name="success-checkmark" id="success-checkmark-1" />
    <div>
        …
        <p class="s-description">…</p>
    </div>
</label>
```

<Example>
    <div class="d-flex g24 fd-column">
        <fieldset class="s-form-group">
            <legend class="s-label">Which types of fruit do you like?</legend>
            <div class="s-radio has-warning">
                <input type="radio" name="state-radio" id="state-radio-Apples" checked />
                <label class="s-label" for="state-radio-Apples">
                    Apples
                    <p class="s-description">Fresh red apples.</p>
                </label>
            </div>
            <div class="s-radio has-error">
                <input type="radio" name="state-radio" id="state-radio-Oranges" />
                <label class="s-label" for="state-radio-Oranges">
                    Oranges
                    <p class="s-description">Juicy and sweet oranges.</p>
                </label>
            </div>
            <div class="s-radio has-success">
                <input type="radio" name="state-radio" id="state-radio-Bananas" />
                <label class="s-label" for="state-radio-Bananas">
                    Bananas
                    <p class="s-description">Ripe yellow bananas.</p>
                </label>
            </div>
        </fieldset>
        <div class="s-popover is-visible ps-relative ws2 p8">
            <fieldset class="s-menu s-form-group">
                <legend class="s-menu--title">Pick a fruit</legend>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark has-warning" for="state-checkmark-Apples">
                        <input type="radio" name="state-checkmark" id="state-checkmark-Apples" checked />
                        <div>
                            Apples
                            <p class="s-description">Fresh red apples.</p>
                        </div>
                    </label>
                </div>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark has-error" for="state-checkmark-Oranges">
                        <input type="radio" name="state-checkmark" id="state-checkmark-Oranges" />
                        <div>
                            Oranges
                            <p class="s-description">Juicy and sweet oranges.</p>
                        </div>
                    </label>
                </div>
                <div class="s-menu--item">
                    <label class="s-menu--action s-radio s-radio__checkmark has-success" for="state-checkmark-Bananas">
                        <input type="radio" name="state-checkmark" id="state-checkmark-Bananas" />
                        <div>
                            Bananas
                            <p class="s-description">Ripe yellow bananas.</p>
                        </div>
                    </label>
                </div>
            </fieldset>
        </div>
    </div>
</Example>

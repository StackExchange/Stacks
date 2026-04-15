---
title: Buttons
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-button--docs
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18802"
description: Buttons are user interface elements which allows users to take actions throughout the project. It is important that they have ample click space and help communicate the importance of their actions.
updated: 2025-12-09
---

<script lang="ts">
  import { Button, Icon } from '@stackoverflow/stacks-svelte';
  import type { Brand, Size, Variant, Weight } from '@stackoverflow/stacks-svelte';

  import { IconTrash, IconArrowUp, IconServiceFacebook, IconServiceGoogle, IconServiceGitHub } from '@stackoverflow/stacks-icons';

  const ButtonBrands: Brand[] = ["", "facebook", "github", "google"];
  const ButtonSizes: Size[] = ["", "xs", "sm", "lg"];
  const ButtonVariants: Variant[] = ["", "danger", "featured", "tonal"];
  const ButtonWeights: Weight[] = ["", "clear"];

  import ButtonTable from './ButtonTable.svelte';
  import AnchorButtonTable from './AnchorButtonTable.svelte';
  import LoadingButtonTable from './LoadingButtonTable.svelte';
  import DropdownButtonTable from './DropdownButtonTable.svelte';
  import BadgeButtonTable from './BadgeButtonTable.svelte';
  import SizeTable from './SizeTable.svelte';
  import ToggleButtonDemo from './ToggleButtonDemo.svelte';
  import ClassTable from '$components/ClassTable.svelte';
  import { Notice } from '@stackoverflow/stacks-svelte';
  import type { ClassTableRow } from '$components/ClassTable.svelte';

  const classes: ClassTableRow[] = [
    { class: '.s-btn',           modifies: 'N/A',      description: 'Base button element.' },
    { class: '.s-btn--badge',    modifies: '.s-btn',   description: 'Badge container for the button.' },
    { class: '.s-btn__clear',    modifies: '.s-btn',   description: 'Clear button variant.' },
    { class: '.s-btn__danger',   modifies: '.s-btn',   description: 'Danger button variant.' },
    { class: '.s-btn__featured', modifies: '.s-btn',   description: 'Featured button variant.' },
    { class: '.s-btn__tonal',    modifies: '.s-btn',   description: 'Tonal button variant.' },
    { class: '.s-btn__dropdown', modifies: '.s-btn',   description: 'Dropdown button variant.' },
    { class: '.s-btn__icon',     modifies: '.s-btn',   description: 'Icon button variant.' },
    { class: '.s-btn__link',     modifies: '.s-btn',   description: 'Link button variant.' },
    { class: '.s-btn__unset',    modifies: '.s-btn',   description: 'Unset button variant.' },
    { class: '.s-btn__facebook', modifies: '.s-btn',   description: 'Facebook button variant.' },
    { class: '.s-btn__github',   modifies: '.s-btn',   description: 'GitHub button variant.' },
    { class: '.s-btn__google',   modifies: '.s-btn',   description: 'Google button variant.' },
    { class: '.s-btn__xs',       modifies: '.s-btn',   description: 'Extra small button variant.' },
    { class: '.s-btn__sm',       modifies: '.s-btn',   description: 'Small button variant.' },
    { class: '.s-btn__lg',       modifies: '.s-btn',   description: 'Large button variant.' },
  ];
</script>

## Classes

<ClassTable {classes} expandable />

## Styles

Stacks provides 3 different button styles:

1. [Base](#base)
2. [Danger](#danger)
3. [Featured](#featured)
4. [Tonal](#tonal)

Each style is explained below, detailing how and where to use these styles.

### Base

Base buttons can gain clear styling with the `.s-btn__clear` class.

```html
<button class="s-btn" type="button">…</button>
<button class="s-btn s-btn__clear" type="button">…</button>
```

<ButtonTable />

### Danger

Danger buttons are a secondary button style, used to visually communicate destructive actions such as deleting content, accounts, or canceling services.

```html
<button class="s-btn s-btn__danger" type="button">…</button>
<button class="s-btn s-btn__danger s-btn__clear" type="button">…</button>
```

<ButtonTable variant="danger" />

### Featured

Featured buttons are a secondary button style, used to visually draw attention to something new or temporary, usually as part of onboarding or to announce a new feature. These should be used sparingly, and permanent placements should be avoided.

```html
<button class="s-btn s-btn__featured" type="button">…</button>
<button class="s-btn s-btn__featured s-btn__clear" type="button">…</button>
```

<ButtonTable variant="featured" />

### Tonal

Tonal buttons are a secondary button style, a grayscale visual treatment. Used in layouts for the least important items or currently inactive actions.

```html
<button class="s-btn s-btn__tonal" type="button">…</button>
<button class="s-btn s-btn__clear s-btn__tonal" type="button">…</button>
```

<ButtonTable variant="tonal" />

## Anchors

Anchors can be rendered with the `.s-btn` to adopt a button-like visual style for a link.

```html
<a href="#" class="s-btn">Ask question</a>
```

<AnchorButtonTable variants={ButtonVariants} weights={ButtonWeights} />

## Loading

Any button can have a loading state applied by adding the `.is-loading` state class.

```html
<button class="s-btn is-loading" type="button">…</button>
```

<LoadingButtonTable variants={ButtonVariants} weights={ButtonWeights} />

## Dropdowns

Adding the class `.s-btn__dropdown` to any button style will add an appropriately-styled caret. These should be paired with a menu or popover.

```html
<button class="s-btn s-btn__dropdown" type="button">Dropdown</button>
```

<DropdownButtonTable variants={ButtonVariants} weights={ButtonWeights} />

## Badges

Adding an `.s-btn--badge` to any button will add an appropriately-styled badge.

```html
<button class="s-btn" type="button">
    Badge
    <span class="s-btn--badge">
        <span class="s-btn--number">198</span>
    </span>
</button>
```

<BadgeButtonTable variants={ButtonVariants} weights={ButtonWeights} />

## Sizes

A button's default font-size is determined by the `@body-fs` variable. To change the button's font-size, use the following classes with `.s-btn`:

<Notice variant="warning" role="note">
    <span><strong>Note:</strong> Avoid using icons within the extra small button size. This variant is designed for tight spaces, and standard icons are too large to fit without breaking the button's height and layout.</span>
</Notice>

<SizeTable sizes={ButtonSizes} />

## Toggle buttons

Each button class has a selected state which can be visually activated by applying the `.is-selected` class. When a button can switch between selected and unselected states, it is important to also annotate the button with the `aria-pressed` attribute for accessibility. A `title` attribute may also be appropriate to describe what will happen when pressing the button.

```html
<button class="s-btn" type="button" aria-pressed="false" title="…">…</button>
<button class="s-btn is-selected" type="button" aria-pressed="true" title="…">
    …
</button>

<script>
    toggleButton.addEventListener('click', () => {
        let wasSelected = toggleButton.getAttribute('aria-pressed') === 'true';
        let isSelected = !wasSelected;
        toggleButton.classList.toggle('is-selected', isSelected);
        toggleButton.setAttribute('aria-pressed', isSelected.toString());
        …
    });
</script>
```

<ToggleButtonDemo />

## Additional styles

Stacks provides additional classes for cases that are a bit more rare.

### Disabled

| Type     | Class                    | Definition                                                  | Example                                                        |
| -------- | ------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------- |
| Disabled | `[aria-disabled="true"]` | Adds disabled styling to any element with `.s-btn` applied. | <Button href="#" weight="clear" disabled>Ask question</Button> |

### Resets

| Type  | Class           | Definition                                                                                                                                                                                             | Example                                               |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Unset | `.s-btn__unset` | Removes all styling from a button and reverts focus states to browser default.                                                                                                                         | <Button unset class="ws-nowrap">Unset button</Button> |
| Link  | `.s-btn__link`  | Styles a button element as though it were a link. Instead of transforming an `s-btn` to a link, you most likely want to style a `button` as a [link](/product/components/links/#single-link-examples). | <Button link class="ws-nowrap">Link button</Button>   |

### Icons

| Type | Class          | Definition                                                       | Examples                                                                                                                                                                                                                                                                                                     |
| ---- | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Icon | `.s-btn__icon` | Adds some margin overrides that apply to an icon within a button | <div class="d-flex ai-center"><button class="s-btn s-btn__danger s-btn__icon ws-nowrap mr8" type="button"><Icon src={IconTrash} /> Delete</button> <button class="s-btn s-btn__icon s-btn__link" type="button" aria-label="up"><Icon src={IconArrowUp} /><span class="v-visible-sr">up</span></button></div> |

### Social

| Type     | Class              | Definition                                          | Examples                                                                                                                       |
| -------- | ------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Facebook | `.s-btn__facebook` | Styles a button consistent with Facebook's branding | <button class="s-btn s-btn__icon s-btn__facebook ws-nowrap" type="button"><Icon src={IconServiceFacebook} /> Facebook</button> |
| Google   | `.s-btn__google`   | Styles a button consistent with Google's branding   | <button class="s-btn s-btn__icon s-btn__google ws-nowrap" type="button"><Icon src={IconServiceGoogle} /> Google</button>       |
| GitHub   | `.s-btn__github`   | Styles a button consistent with GitHub's branding   | <button class="s-btn s-btn__icon s-btn__github ws-nowrap" type="button"><Icon src={IconServiceGitHub} /> GitHub</button>       |

## Ordering

To maintain product consistency, buttons should maintain the following layout ordering:

### Within a row

Most button groups should be ordered from the most important to the least important action, left to right.

```html
<button class="s-btn" type="button">Post answer</button>
<button class="s-btn s-btn__clear" type="button">Cancel</button>
```

<div class="d-flex g4 fw-wrap">
  <Button>Post answer</Button>
  <Button weight="clear">Cancel</Button>
</div>

### Within a column

Sometimes the layout dictates that buttons need to be stacked on top of each other. Again, these buttons should be stacked from the most important to the least important, top to bottom.

```html
<div class="d-flex g4 fd-column">
    <button class="s-btn" type="button">Post answer</button>
    <button class="s-btn s-btn__clear" type="button">Cancel</button>
</div>
```

<div class="d-flex g4 fd-column wmx2">
  <Button>Post answer</Button>
  <Button weight="clear">Cancel</Button>
</div>

### Within a header

Sometimes the best place for a series of actions is in the same area as the title. In these cases, the buttons should be pulled to the right. Within this instance, the button order should be reversed with the most important action to the far right and the least important action to the far left.

```html
<div class="d-flex g4">
    <div class="d-flex ai-center sm:fd-column sm:ai-start">
        <h3 class="mb0 sm:mb16 mr-auto fs-title fw-normal">
            Write your response
        </h3>

        <div class="d-flex g4 sm:fd-row-reverse sm:jc-end">
            <button class="s-btn s-btn__clear" type="button">Cancel</button>
            <button class="s-btn" type="button">Post answer</button>
        </div>
    </div>
</div>
```

<div class="d-flex ai-center sm:fd-column sm:ai-start">
  <h3 class="mb0 sm:mb16 mr-auto fs-title fw-normal">Write your response</h3>
  <div class="d-flex g4 sm:fd-row-reverse sm:jc-end">
    <Button>Cancel</Button>
    <Button weight="clear">Post answer</Button>
  </div>
</div>

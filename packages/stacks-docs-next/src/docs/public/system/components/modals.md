---
title: "Modals"
description: "Modals are dialog overlays that prevent the user from interacting with the rest of the website until an action is taken or the dialog is dismissed. Modals are purposefully disruptive and should be used thoughtfully and sparingly."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-modal--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18811&p=f&t=c9NSyJWdASb80eVC-0"
---

<script lang="ts">
    import { Modal, Button } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-modal',          parent: 'N/A',               modifies: 'N/A',              description: 'Base parent container for modals.' },
        { class: '.s-modal--dialog',  parent: '.s-modal',          modifies: 'N/A',              description: 'Creates a container that holds the modal dialog with proper padding and shadows.' },
        { class: '.s-modal--body',    parent: '.s-modal--dialog',  modifies: 'N/A',              description: "Adds proper styling to the modal dialog's body text." },
        { class: '.s-modal--close',   parent: '.s-modal--dialog',  modifies: 'N/A',              description: 'Used to dismiss a modal.' },
        { class: '.s-modal--header',  parent: '.s-modal--dialog',  modifies: 'N/A',              description: "Adds proper styling to the modal dialog's header." },
        { class: '.s-modal--footer',  parent: '.s-modal--dialog',  modifies: 'N/A',              description: 'Adds the desired spacing to the row of button actions.' },
        { class: '.s-modal__danger',  parent: 'N/A',               modifies: '.s-modal',         description: 'Adds styling for potentially dangerous actions.' },
        { class: '.s-modal__full',    parent: 'N/A',               modifies: '.s-modal--dialog', description: 'Makes the container take up as much of the screen as possible.' },
    ];

    let showBase        = $state(false);
    let showDanger      = $state(false);
    let showCelebration = $state(false);

    const loremIpsum = 'Nullam ornare lectus vitae lacinia gravida. Donec pretium dui mauris, quis aliquet ipsum pharetra non. Fusce tincidunt felis dui. Morbi sit amet ipsum nisi.';
</script>

## Classes

<ClassTable {classes} expandable />

## JavaScript

### Attributes

| Attribute | Applies to | Description |
|---|---|---|
| `data-controller="s-modal"` | Controller element | Wires up the element to the modal controller. This may be a `.s-modal` element or a wrapper element. |
| `data-s-modal-target="modal"` | `.s-modal` element | Wires up the element that is to be shown/hidden. |
| `data-s-modal-target="initialFocus"` | Any child focusable element | Designates which element to focus on modal show. If absent, defaults to the first focusable element within the modal. |
| `data-action="s-modal#toggle"` | Any child focusable element | Wires up the element that is to be shown/hidden. |
| `data-action="s-modal#hide"` | Any child focusable element | Wires up the element that is to be shown/hidden. |
| `data-s-modal-return-element="[css selector]"` | Controller element | Designates the element to return focus to when the modal is closed. If left unset, focus is not altered on close. |
| `data-s-modal-remove-when-hidden="true"` | Controller element | Removes the modal from the DOM entirely when it is hidden. |

### Events

| Event | Applies to | Description |
|---|---|---|
| `s-modal:show` | Modal target | Fires immediately before showing the modal. Calling `.preventDefault()` cancels the display of the modal. |
| `s-modal:shown` | Modal target | Fires after the modal has been visually shown. |
| `s-modal:hide` | Modal target | Fires immediately before hiding the modal. Calling `.preventDefault()` cancels the removal of the modal. |
| `s-modal:hidden` | Modal target | Fires after the modal has been visually hidden. |

### Event details

| Property | Applies to | Description |
|---|---|---|
| `dispatcher` | Modal target | Contains the `Element` that initiated the event. For instance, the button clicked to show, the element clicked outside the modal that caused it to hide, etc. |
| `returnElement` | Modal target | Contains the `Element` to return focus to on hide. If a value is set to this property inside an event listener, it will be updated on the controller as well. |

### Helpers

| Helper | Applies to | Description |
|---|---|---|
| `Stacks.showModal` | Controller element | Helper to manually show an s-modal element via external JS. |
| `Stacks.hideModal` | Controller element | Helper to manually hide an s-modal element via external JS. |

## Accessibility

| Attribute | Applies to | Description |
|---|---|---|
| `aria-describedby="[id]"` | Modal target | Supply the modal's summary copy id. Assistive technologies use this to associate static text with a widget, element groups, headings, definitions, etc. |
| `aria-hidden="[state]"` | Modal target | Informs assistive technologies if they should ignore the element. This should not be confused with the HTML5 `hidden` attribute. |
| `aria-label="[text]"` | Modal target | Labels the element for assistive technologies. |
| `aria-labelledby="[id]"` | Modal target | Supply the modal's title id here. Assistive technologies use this to catalog the document objects correctly. |
| `role="dialog"` | Modal target | Identifies dialog elements for assistive technologies. |
| `role="document"` | Modal target | Helps assistive technologies to switch their reading mode from the larger document to a focused dialog window. |

## Examples

You can wire up a modal along with the corresponding button by wrapping both in a `s-modal` controller and attaching the corresponding `data-*` attributes. Make sure to set `data-s-modal-return-element` if you want your button to refocus on close.

```html
<div data-controller="s-modal" data-s-modal-return-element="#js-return-focus">
    <button type="button" id="js-return-focus" data-action="s-modal#show">Show modal</button>
    <aside class="s-modal" data-s-modal-target="modal" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
        <div class="s-modal--dialog" role="document">
            <h1 class="s-modal--header" id="modal-title">…</h1>
            <p class="s-modal--body" id="modal-description">…</p>
            <div class="d-flex gx8 s-modal--footer">
                <button class="s-btn" type="button">…</button>
                <button class="s-btn s-btn__danger" type="button" data-action="s-modal#hide">…</button>
            </div>
            <button class="s-modal--close s-btn s-btn__clear" type="button" aria-label="Close" data-action="s-modal#hide">
                @Svg.Cross
            </button>
        </div>
    </aside>
</div>
```

Alternatively, you can also use the built in helper to display a modal straight from your JS file. This is useful for the times when your modal markup can't live next to your button or if it is generated dynamically (e.g. from an AJAX call).

```html
<button class="s-btn js-modal-toggle" type="button">Show modal</button>
<aside class="s-modal" id="modal-base" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true"
    data-controller="s-modal" data-s-modal-target="modal">
    <div class="s-modal--dialog" role="document">
        <h1 class="s-modal--header" id="modal-title">…</h1>
        <p class="s-modal--body" id="modal-description">…</p>
        <div class="d-flex gx8 s-modal--footer">
            <button class="s-btn" type="button">…</button>
            <button class="s-btn s-btn__clear" type="button" data-action="s-modal#hide">…</button>
        </div>
        <button class="s-modal--close s-btn s-btn__clear" type="button" aria-label="Close" data-action="s-modal#hide">
            @Svg.Cross
        </button>
    </div>
</aside>
```

```javascript
document.querySelector(".js-modal-toggle").addEventListener("click", function(e) {
    Stacks.showModal(document.querySelector("#modal-base"));
});
```

<Example>
    <div class="ps-relative d-flex jc-center hs3">
        <Button onclick={() => showBase = true}>Show modal</Button>
        <Modal
            id="modal-base"
            visible={showBase}
            class="ps-absolute bbr-md z-base mtn1 mrn1 mbn1 mln1"
            onclose={() => showBase = false}
            preventCloseOnClickOutside
        >
            {#snippet header()}Example title{/snippet}
            {#snippet body()}{loremIpsum}{/snippet}
            {#snippet footer()}
                <Button>Save changes</Button>
                <Button weight="clear" onclick={() => showBase = false}>Cancel</Button>
            {/snippet}
        </Modal>
    </div>
</Example>

### Danger state

Not every modal is sunshine and rainbows. Sometimes there are potentially drastic things that could happen by hitting a confirm button in a modal—such as deleting an account. In moments like this, add the `.s-modal__danger` class to `.s-modal`. Additionally, you should switch the buttons to `.s-btn__danger`, since the main call to action will be destructive.

```html
<aside class="s-modal s-modal__danger" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true"
    data-controller="s-modal" data-s-modal-target="modal">
    <div class="s-modal--dialog" role="document">
        <h1 class="s-modal--header" id="modal-title">…</h1>
        <p class="s-modal--body" id="modal-description">…</p>
        <div class="d-flex gx8 s-modal--footer">
            <button class="s-btn s-btn__danger" type="button">…</button>
            <button class="s-btn s-btn__clear" type="button" data-action="s-modal#hide">…</button>
        </div>
        <button class="s-modal--close s-btn s-btn__clear" type="button" aria-label="Close" data-action="s-modal#hide">
            @Svg.Cross
        </button>
    </div>
</aside>
```

<Example>
    <div class="ps-relative d-flex jc-center hs3">
        <Button variant="danger" onclick={() => showDanger = true}>Show danger modal</Button>
        <Modal
            id="modal-danger"
            visible={showDanger}
            state="danger"
            class="ps-absolute bbr-md z-base mtn1 mrn1 mbn1 mln1"
            onclose={() => showDanger = false}
            preventCloseOnClickOutside
        >
            {#snippet header()}Example title{/snippet}
            {#snippet body()}{loremIpsum}{/snippet}
            {#snippet footer()}
                <Button variant="danger">Save changes</Button>
                <Button weight="clear" onclick={() => showDanger = false}>Cancel</Button>
            {/snippet}
        </Modal>
    </div>
</Example>

### Celebratory

Sometimes it's appropriate to confirm a user's action with some confetti. You can combine our [confetti background utility](/system/base/backgrounds#confetti) with some extra spacing by adding the `s-modal__celebration` modifier.

```html
<aside class="s-modal s-modal__celebration" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true" data-controller="s-modal" data-s-modal-target="modal">
    <div class="s-modal--dialog" role="document">
        <h1 class="s-modal--header" id="modal-title">…</h1>
        <p class="s-modal--body" id="modal-description">…</p>
        <div class="d-flex gx8 s-modal--footer">
            <button class="s-btn" type="button">…</button>
            <button class="s-btn s-btn__clear" type="button" data-action="s-modal#hide">…</button>
        </div>
        <button class="s-modal--close s-btn s-btn__clear" type="button" aria-label="Close" data-action="s-modal#hide">
            @Svg.Cross
        </button>
    </div>
</aside>
```

<Example>
    <div class="ps-relative d-flex jc-center hs3">
        <Button onclick={() => showCelebration = true}>Show celebratory modal</Button>
        <Modal
            id="modal-celebration"
            visible={showCelebration}
            state="celebration"
            class="ps-absolute bbr-md z-base mtn1 mrn1 mbn1 mln1"
            onclose={() => showCelebration = false}
            preventCloseOnClickOutside
        >
            {#snippet header()}Congratulations!{/snippet}
            {#snippet body()}{loremIpsum}{/snippet}
            {#snippet footer()}
                <Button onclick={() => showCelebration = false}>Got it!</Button>
            {/snippet}
        </Modal>
    </div>
</Example>

## Sizes

Most modal dialogs look good by default, but may need some combination of `.ws[x]` or `.wmx[x]` classes applied to `.s-modal--dialog`. Additionally, the following class is available for modals:

| Class | Value |
|---|---|
| `.s-modal__full` | 100% - 48px |

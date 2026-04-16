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

    const attributes: ClassTableRow[] = [
        { class: 'data-controller="s-modal"',                parent: 'Controller element',        description: 'Wires up the element to the modal controller. This may be a `.s-modal` element or a wrapper element.' },
        { class: 'data-s-modal-target="modal"',              parent: '.s-modal element',           description: 'Wires up the element that is to be shown/hidden.' },
        { class: 'data-s-modal-target="initialFocus"',       parent: 'Any child focusable element',description: 'Designates which element to focus on modal show. If absent, defaults to the first focusable element within the modal.' },
        { class: 'data-action="s-modal#toggle"',             parent: 'Any child focusable element',description: 'Wires up the element that is to be shown/hidden.' },
        { class: 'data-action="s-modal#hide"',               parent: 'Any child focusable element',description: 'Wires up the element that is to be shown/hidden.' },
        { class: 'data-s-modal-return-element="[selector]"', parent: 'Controller element',        description: 'Designates the element to return focus to when the modal is closed. If left unset, focus is not altered on close.' },
        { class: 'data-s-modal-remove-when-hidden="true"',   parent: 'Controller element',        description: 'Removes the modal from the DOM entirely when it is hidden.' },
    ];

    const events: ClassTableRow[] = [
        { class: 's-modal:show',   parent: 'Modal target', description: 'Fires immediately before showing the modal. Calling `.preventDefault()` cancels the display of the modal.' },
        { class: 's-modal:shown',  parent: 'Modal target', description: 'Fires after the modal has been visually shown.' },
        { class: 's-modal:hide',   parent: 'Modal target', description: 'Fires immediately before hiding the modal. Calling `.preventDefault()` cancels the removal of the modal.' },
        { class: 's-modal:hidden', parent: 'Modal target', description: 'Fires after the modal has been visually hidden.' },
    ];

    const eventDetails: ClassTableRow[] = [
        { class: 'dispatcher',     parent: 'Modal target', description: 'Contains the `Element` that initiated the event. For instance, the button clicked to show, the element clicked outside the modal that caused it to hide, etc.' },
        { class: 'returnElement',  parent: 'Modal target', description: 'Contains the `Element` to return focus to on hide. If a value is set to this property inside an event listener, it will be updated on the controller as well.' },
    ];

    const helpers: ClassTableRow[] = [
        { class: 'Stacks.showModal', parent: 'Controller element', description: 'Helper to manually show an s-modal element via external JS.' },
        { class: 'Stacks.hideModal', parent: 'Controller element', description: 'Helper to manually hide an s-modal element via external JS.' },
    ];

    const accessibility: ClassTableRow[] = [
        { class: 'aria-describedby="[id]"', parent: 'Modal target', description: "Supply the modal's summary copy id. Assistive technologies use this to associate static text with a widget, element groups, headings, definitions, etc." },
        { class: 'aria-hidden="[state]"',   parent: 'Modal target', description: 'Informs assistive technologies if they should ignore the element. This should not be confused with the HTML5 `hidden` attribute.' },
        { class: 'aria-label="[text]"',     parent: 'Modal target', description: 'Labels the element for assistive technologies.' },
        { class: 'aria-labelledby="[id]"',  parent: 'Modal target', description: "Supply the modal's title id here. Assistive technologies use this to catalog the document objects correctly." },
        { class: 'role="dialog"',           parent: 'Modal target', description: 'Identifies dialog elements for assistive technologies.' },
        { class: 'role="document"',         parent: 'Modal target', description: 'Helps assistive technologies to switch their reading mode from the larger document to a focused dialog window.' },
    ];

    let showBase   = $state(false);
    let showDanger = $state(false);

    const lorem = 'Nullam ornare lectus vitae lacinia gravida. Donec pretium dui mauris, quis aliquet ipsum pharetra non. Fusce tincidunt felis dui. Morbi sit amet ipsum nisi.';
</script>

## Classes

<ClassTable {classes} expandable />

## JavaScript

### Attributes

<ClassTable classes={attributes} headings={{ class: 'Attribute', parent: 'Applies to' }} expandable expandButtonText="Show all attributes" />

### Events

<ClassTable classes={events} headings={{ class: 'Event', parent: 'Applies to' }} expandable expandButtonText="Show all events" />

### Event details

<ClassTable classes={eventDetails} headings={{ class: 'Property', parent: 'Applies to' }} />

### Helpers

<ClassTable classes={helpers} headings={{ class: 'Helper', parent: 'Applies to' }} />

## Accessibility

<ClassTable classes={accessibility} headings={{ class: 'Attribute', parent: 'Applies to' }} />

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
    …
</aside>
```

```javascript
document.querySelector(".js-modal-toggle").addEventListener("click", function(e) {
    Stacks.showModal(document.querySelector("#modal-base"));
});
```

<Example>
    <div class="d-flex g8 fw-wrap">
        <Button onclick={() => showBase = true}>Launch example modal</Button>
        <Button variant="danger" onclick={() => showDanger = true}>Launch example modal w/ danger state</Button>
    </div>
</Example>

<Modal id="modal-launch-base" visible={showBase} onclose={() => showBase = false}>
    {#snippet header()}Example title{/snippet}
    {#snippet body()}{lorem}{/snippet}
    {#snippet footer()}
        <Button>Save changes</Button>
        <Button weight="clear" onclick={() => showBase = false}>Cancel</Button>
    {/snippet}
</Modal>

<Modal id="modal-launch-danger" visible={showDanger} state="danger" onclose={() => showDanger = false}>
    {#snippet header()}Example title{/snippet}
    {#snippet body()}{lorem}{/snippet}
    {#snippet footer()}
        <Button variant="danger">Save changes</Button>
        <Button weight="clear" onclick={() => showDanger = false}>Cancel</Button>
    {/snippet}
</Modal>

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

<div class="ba bc-black-225 bar-sm mb32 overflow-visible">
    <div class="ps-relative d-flex jc-center hs3">
        <aside class="s-modal s-modal__danger ps-absolute z-base mn1" role="dialog"
            aria-labelledby="modal-inline-danger-title"
            aria-describedby="modal-inline-danger-description"
            aria-hidden="false">
            <div class="s-modal--dialog" role="document">
                <h1 class="s-modal--header" id="modal-inline-danger-title">Example title</h1>
                <p class="s-modal--body" id="modal-inline-danger-description">{lorem}</p>
                <div class="d-flex g8 s-modal--footer">
                    <button class="s-btn s-btn__danger" type="button">Save changes</button>
                    <button class="s-btn s-btn__clear" type="button">Cancel</button>
                </div>
            </div>
        </aside>
    </div>
</div>

### Celebratory

Sometimes it's appropriate to confirm a user's action with some confetti. You can combine our [confetti background utility](/system/base/backgrounds#confetti) with some extra spacing by adding the `s-modal__celebration` modifier.

```html
<aside class="s-modal s-modal__celebration" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true" data-controller="s-modal" data-s-modal-target="modal">
    <div class="s-modal--dialog" role="document">
        <h1 class="s-modal--header" id="modal-title">…</h1>
        <p class="s-modal--body" id="modal-description">…</p>
        <div class="d-flex gx8 s-modal--footer">
            <button class="s-btn" type="button">…</button>
        </div>
        <button class="s-modal--close s-btn s-btn__clear" type="button" aria-label="Close" data-action="s-modal#hide">
            @Svg.Cross
        </button>
    </div>
</aside>
```

<div class="ba bc-black-225 bar-sm mb32 overflow-visible">
    <div class="ps-relative d-flex jc-center hs3">
        <aside class="s-modal s-modal__celebration ps-absolute z-base mn1" role="dialog"
            aria-labelledby="modal-inline-celebration-title"
            aria-describedby="modal-inline-celebration-description"
            aria-hidden="false">
            <div class="s-modal--dialog" role="document">
                <h1 class="s-modal--header" id="modal-inline-celebration-title">Congratulations!</h1>
                <p class="s-modal--body" id="modal-inline-celebration-description">{lorem}</p>
                <div class="d-flex g8 s-modal--footer">
                    <button class="s-btn" type="button">Got it!</button>
                </div>
            </div>
        </aside>
    </div>
</div>

## Sizes

Most modal dialogs look good by default, but may need some combination of `.ws[x]` or `.wmx[x]` classes applied to `.s-modal--dialog`. Additionally, the following class is available for modals:

| Class | Value |
|---|---|
| `.s-modal__full` | 100% - 48px |

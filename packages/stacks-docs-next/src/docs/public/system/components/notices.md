---
title: "Notices"
description: "Notices deliver <strong>System</strong> and <strong>Engagement</strong> messaging, informing the user about product or account statuses and related actions."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-notice--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=612-18813&p=f&m=dev"
js: true
---

<script lang="ts">
    import { Notice, NoticeAction, Link, Button } from '@stackoverflow/stacks-svelte';
    import { IconCross, IconInfo } from '@stackoverflow/stacks-icons/icons';
    import { Icon } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-notice',            parent: 'N/A',       modifies: 'N/A',       description: 'Base notice parent class. Use inside `.s-toast` when rendered as a toast.' },
        { class: '.s-notice--actions',   parent: '.s-notice', modifies: 'N/A',       description: 'Container styling for notice actions including the dismiss button.' },
        { class: '.s-notice--dismiss',   parent: '.s-notice', modifies: 'N/A',       description: 'Applies to child button element within the notice to position it appropriately.' },
        { class: '.s-notice__activity',  parent: 'N/A',       modifies: '.s-notice', description: 'Applies activity (pink) visual styles.' },
        { class: '.s-notice__danger',    parent: 'N/A',       modifies: '.s-notice', description: 'Applies danger (red) visual styles.' },
        { class: '.s-notice__featured',  parent: 'N/A',       modifies: '.s-notice', description: 'Applies featured (purple) visual styles.' },
        { class: '.s-notice__important', parent: 'N/A',       modifies: '.s-notice', description: 'Applies an important visual style. This should be used for time-sensitive, pressing information that needs to be noticed by the user.' },
        { class: '.s-notice__info',      parent: 'N/A',       modifies: '.s-notice', description: 'Applies info (blue) visual styles.' },
        { class: '.s-notice__success',   parent: 'N/A',       modifies: '.s-notice', description: 'Applies success (green) visual styles.' },
        { class: '.s-notice__warning',   parent: 'N/A',       modifies: '.s-notice', description: 'Applies warning (yellow) visual styles.' },
        { class: '.s-toast',             parent: 'N/A',       modifies: 'N/A',       description: 'Parent of `.s-notice`. See the Toast section for more information.' },
    ];

    const accessibility: ClassTableRow[] = [
        { class: 'aria-labelledby="[id]"', parent: '.s-toast',  description: 'Used to reference the alert message within the dialog. If you are using `.s-toast`, this must be applied.' },
        { class: 'aria-hidden="[state]"',  parent: '.s-toast',  description: 'Informs assistive technologies if they should ignore the element. When applied to `.s-toast`, Stacks will use this attribute to show or hide the toast.' },
        { class: 'aria-label="[text]"',    parent: '.s-btn',    description: 'Labels the element for assistive technologies. This should be used on any button that does not contain text content.' },
        { class: 'role="alert"',           parent: '.s-notice', description: 'A form of live region which contains important, usually time-sensitive, information. Elements with an alert role have an implicit aria-live value of assertive and implicit aria-atomic value of true.' },
        { class: 'role="alertdialog"',     parent: '.s-toast',  description: 'The wrapping content area of an alert. Elements with the alertdialog role must use the aria-describedby attribute to reference the alert message within the dialog.' },
        { class: 'role="status"',          parent: '.s-notice', description: 'A form of live region which contains advisory information but is not important enough to justify an alert role. Elements with a status role have an implicit aria-live value of polite and implicit aria-atomic value of true.' },
    ];

    const toastAttributes: ClassTableRow[] = [
        { class: 'data-controller="s-toast"',             parent: 'Controller element',        description: 'Wires up the element to the toast controller. This may be a `.s-toast` element or a wrapper element.' },
        { class: 'data-s-toast-target="toast"',           parent: 'Controller element',        description: 'Wires up the element that is to be shown/hidden.' },
        { class: 'data-s-toast-target="initialFocus"',    parent: 'Any child focusable element',description: 'Designates which element to focus on toast show. If absent, defaults to the first focusable element within the toast.' },
        { class: 'data-action="s-toast#toggle"',          parent: 'Toggling element',          description: 'Wires up the element to toggle the visibility of a toast.' },
        { class: 'data-s-toast-return-element="[selector]"', parent: 'Controller element',     description: '(optional) Designates the element to return focus to when the toast is closed. If left unset, focus is not altered on close.' },
        { class: 'data-s-toast-remove-when-hidden="true"',parent: 'Controller element',        description: '(optional) Removes the toast from the DOM entirely when it is hidden.' },
    ];

    const toastEvents: ClassTableRow[] = [
        { class: 's-toast:show',   parent: 'Toast target', description: 'Fires immediately before showing the toast. Calling `.preventDefault()` cancels the display of the toast.' },
        { class: 's-toast:shown',  parent: 'Toast target', description: 'Fires after the toast has been visually shown.' },
        { class: 's-toast:hide',   parent: 'Toast target', description: 'Fires immediately before hiding the toast. Calling `.preventDefault()` cancels the removal of the toast.' },
        { class: 's-toast:hidden', parent: 'Toast target', description: 'Fires after the toast has been visually hidden.' },
    ];

    const toastEventDetails: ClassTableRow[] = [
        { class: 'dispatcher',     parent: 's-toast:*',                  description: 'Contains the Element that initiated the event. For instance, the button clicked to show, the element clicked outside the toast that caused it to hide, etc.' },
        { class: 'returnElement',  parent: 's-toast:show, s-toast:hide', description: 'Contains the Element to return focus to on hide. If a value is set to this property inside an event listener, it will be updated on the controller as well.' },
    ];

    const toastHelpers: ClassTableRow[] = [
        { class: 'Stacks.showToast', parent: 'element', description: 'Helper to manually show an s-toast element via external JS.' },
        { class: 'Stacks.hideToast', parent: 'element', description: 'Helper to manually hide an s-toast element via external JS.' },
    ];
</script>

## Classes

<ClassTable {classes} expandable />

## Accessibility

<ClassTable classes={accessibility} headings={{ class: 'Item', parent: 'Applies to' }} expandable expandButtonText="Show all accessibility items" />

## Examples

### Base

```html
<div class="s-notice" role="status">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__info" role="status">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__success" role="status">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>… <a href="…">…</a></span>
</div>
<div class="s-notice s-notice__warning" role="status">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__danger" role="status">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__featured" role="status">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__activity" role="status">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
```

<Example>
    <div class="d-flex g8 fd-column">
        <Notice role="presentation" class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Default filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="info" class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Info filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="success" class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Success filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="warning" class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Warning filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="danger" class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Danger filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="featured" class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Featured filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="activity" class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Activity filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
    </div>
</Example>

### Important

Used sparingly for when an important notice needs to be noticed

```html
<div class="s-notice s-notice__important" role="alert">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__info s-notice__important" role="alert">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__success s-notice__important" role="alert">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>… <a href="…">…</a></span>
</div>
<div class="s-notice s-notice__warning s-notice__important" role="alert">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__danger s-notice__important" role="alert">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__featured s-notice__important" role="alert">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
<div class="s-notice s-notice__activity s-notice__important" role="alert">
    <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
    <span>…</span>
</div>
```

<Example>
    <div class="d-flex g8 fd-column">
        <Notice role="presentation" important class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Default filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="info" important class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Info filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="success" important class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Success filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="warning" important class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Warning filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="danger" important class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Danger filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="featured" important class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Featured filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
        <Notice role="presentation" variant="activity" important class="s-anchors s-anchors__inherit s-anchors__underlined"><span>Activity filled message style <code>and some code</code> notice. <a href="#">Link</a></span></Notice>
    </div>
</Example>

### Styling child links

We recommend using [descendent anchor](/product/components/links/#descendent-anchors) classes, typically `.s-anchors.s-anchors__inherit.s-anchors__underlined` for notices containing links generated from markdown when you cannot manually generate the inner html.

```html
<div class="s-notice s-notice__info" role="presentation">
    <span>Notice with <a href="#" class="s-link">default link style</a></span>
</div>
<div class="s-notice s-notice__info s-anchors s-anchors__inherit s-anchors__underlined" role="presentation">
    <span>Notice with <a href="#">styled link</a></span>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Default</span>
            <Notice role="presentation" variant="info">
                <span>Notice with <a href="#" class="s-link">default link style</a></span>
            </Notice>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">.s-anchors .s-anchors__inherit .s-anchors__underlined</span>
            <Notice role="presentation" variant="info" class="s-anchors s-anchors__inherit s-anchors__underlined">
                <span>Notice with <a href="#">styled link</a></span>
            </Notice>
        </div>
    </div>
</Example>

## Toast

<Notice variant="warning" role="presentation" class="s-anchors s-anchors__inherit s-anchors__underlined">
    <p>We are phasing out Toasts due to significant accessibility barriers. Avoid this component for new features. Instead, prioritize integrated alternatives—such as component state changes or inline messages—to provide accessible feedback directly where the user is focused.</p>
</Notice>

Toasts are floating notices that are aligned to the center top of the page. They disappear after a set time. Visibility is changed with animation by toggling between `aria-hidden="true"` and `aria-hidden="false"`. When including a dismiss button the `.s-notice--dismiss` class should be applied to the button for toast-specific styling.

```html
<div
    role="alertdialog"
    id="example-toast"
    class="s-toast"
    aria-hidden="true"
    aria-labelledby="toast-message"
    data-controller="s-toast"
    data-s-toast-target="toast"
    data-s-toast-return-element=".js-example-toast-open[data-target='#example-toast']">
    <aside class="s-notice d-flex wmn4">
        <span class="s-notice--icon"><svg aria-hidden="true">…</svg></span>
        <span>Toast notice message with an undo button</span>
        <div class="s-notice--actions">
            <button type="button" class="s-link s-link__underlined">Undo</button>
            <button type="button" class="s-link s-notice--dismiss js-toast-close" aria-label="Dismiss">
                <svg aria-hidden="true">…</svg>
            </button>
        </div>
    </aside>
</div>
```

<Example>
    <div class="ps-relative d-flex gy8 fd-column jc-center">
        <div class="s-toast ps-static" aria-hidden="false" role="presentation">
            <div class="s-notice d-flex wmn4">
                <span class="s-notice--icon"><Icon src={IconInfo} /></span>
                <span>Default toast with an undo button.</span>
                <div class="s-notice--actions">
                    <button type="button" class="s-link s-link__underlined">Undo</button>
                    <button type="button" class="s-link s-notice--dismiss" aria-label="Dismiss"><Icon src={IconCross} /></button>
                </div>
            </div>
        </div>
        <div class="s-toast ps-static" aria-hidden="false" role="presentation">
            <div class="s-notice s-notice__info d-flex wmn4">
                <span class="s-notice--icon"><Icon src={IconInfo} /></span>
                <span>Info toast with an undo button.</span>
                <div class="s-notice--actions">
                    <button type="button" class="s-link s-link__underlined">Undo</button>
                    <button type="button" class="s-link s-notice--dismiss" aria-label="Dismiss"><Icon src={IconCross} /></button>
                </div>
            </div>
        </div>
    </div>
</Example>

### JavaScript

#### Attributes

<ClassTable classes={toastAttributes} headings={{ class: 'Attribute', parent: 'Applies to' }} />

#### Events

<ClassTable classes={toastEvents} headings={{ class: 'Event', parent: 'Applies to' }} />

#### Event details

<ClassTable classes={toastEventDetails} headings={{ class: 'event.detail', parent: 'Applicable events' }} />

#### Helpers

The following helpers are available to manually show and hide a toast notice.

<ClassTable classes={toastHelpers} headings={{ class: 'Function', parent: 'Parameters' }} />

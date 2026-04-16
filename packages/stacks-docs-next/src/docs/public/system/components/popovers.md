---
title: "Popovers"
description: "Popovers are small content containers that provide a contextual overlay. They can be used as in-context feature explanations, dropdowns, or tooltips."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-popover--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=1617-27089&t=W4QmlFOpYoEpInDB-0"
js: true
---

<script lang="ts">
    import { Popover, PopoverReference, PopoverContent, PopoverCloseButton, Button, Notice } from '@stackoverflow/stacks-svelte';
    import { Icon } from '@stackoverflow/stacks-svelte';
    import { IconInfo } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-popover',           parent: 'N/A',       modifies: 'N/A',       description: 'Base parent container for popovers.' },
        { class: '.s-popover--close',    parent: '.s-popover', modifies: 'N/A',       description: 'Used to dismiss a popover.' },
        { class: '.s-popover--content',  parent: '.s-popover', modifies: 'N/A',       description: 'Wrapper around the popover content to apply appropriate overflow styles.' },
        { class: '.s-popover__tooltip',  parent: 'N/A',        modifies: '.s-popover', description: 'Removes minimum size constraints to support shorter tooltip text.' },
        { class: '.is-visible',          parent: 'N/A',        modifies: '.s-popover', description: 'This class toggles the popover visibility.' },
    ];

    const interactiveAttributes: ClassTableRow[] = [
        { class: 'id="{POPOVER_ID}"',                              parent: '.s-popover',          description: 'A unique id that the popover\'s toggling element can target. Matches the value of `[aria-controls]` on the toggling element.' },
        { class: 'data-controller="s-popover"',                    parent: 'Controller element',  description: 'Wires up the element to the popover controller. This may be a toggling element or a wrapper element.' },
        { class: 'data-s-popover-reference-selector="[selector]"', parent: 'Controller element',  description: '(optional) Designates the element to use as the popover reference. If left unset, defaults to the controller element.' },
        { class: 'aria-controls="{POPOVER_ID}"',                   parent: 'Reference element',   description: 'Associates the element to the desired popover element.' },
        { class: 'data-action="s-popover#toggle"',                 parent: 'Toggling element',    description: 'Wires up the element to toggle the visibility of a generic popover.' },
        { class: 'data-s-popover-toggle-class="[class list]"',     parent: 'Controller element',  description: 'Adds an optional space-delineated list of classes to be toggled on the originating element when the popover is shown or hidden.' },
        { class: 'data-s-popover-placement="[placement]"',         parent: 'Controller element',  description: 'Dictates where to place the popover in relation to the reference element. Defaults to `bottom`. Accepted placements are `auto`, `top`, `right`, `bottom`, `left`, each with optional `-start` and `-end` variations.' },
        { class: 'data-s-popover-auto-show="[true|false]"',        parent: 'Controller element',  description: '(optional) If `true`, the popover will appear immediately when the Stacks controller is first connected. Use this instead of `.is-visible` to prevent the popover from appearing before it has been correctly positioned.' },
        { class: 'data-s-popover-hide-on-outside-click="[value]"', parent: 'Controller element',  description: '(optional) Default: `always`. Values: `always` — hides on outside clicks; `if-in-viewport` — only hides if the popover is in the viewport; `never` — does not hide on outside clicks; `after-dismissal` — does not hide on outside clicks unless it has been dismissed at least once.' },
    ];

    const interactiveEvents: ClassTableRow[] = [
        { class: 's-popover:show',   description: 'Fires immediately before showing and positioning the popover. Can be used to create or initialize the popover element. Calling `.preventDefault()` cancels the display.' },
        { class: 's-popover:shown',  description: 'Fires immediately after showing the popover.' },
        { class: 's-popover:hide',   description: 'Fires immediately before hiding the popover. Calling `.preventDefault()` prevents the removal of the popover.' },
        { class: 's-popover:hidden', description: 'Fires immediately after hiding the popover.' },
    ];

    const dispatchedEvents: ClassTableRow[] = [
        { class: 'dispatcher', parent: 's-popover:*', description: 'Contains the `Element` that initiated the event. For instance, the button clicked to show, the element clicked outside the popover that caused it to hide, etc.' },
    ];

    const tooltipAttributes: ClassTableRow[] = [
        { class: 'id="{POPOVER_ID}"',                            parent: '.s-popover',         description: 'A unique id that the popover\'s toggling element can target. Matches the value of `[aria-describedby]` on the toggling element.' },
        { class: 'data-controller="s-tooltip"',                  parent: 'Controller element', description: 'Wires up the element to the tooltip controller.' },
        { class: 'data-s-tooltip-reference-selector="[selector]"', parent: 'Controller element', description: '(optional) Designates the element to use as the tooltip reference. If left unset, defaults to the controller element.' },
        { class: 'aria-describedby="{POPOVER_ID}"',              parent: 'Reference element',  description: 'Associates the element to the desired popover element.' },
        { class: 'title="{TITLE}"',                              parent: 'Controller element', description: 'If `aria-describedby` is not present or valid, and the title attribute exists, the title will be removed from the element and used to create a popover immediately after the element. All content will be escaped and inserted as text.' },
        { class: 'data-s-tooltip-html-title="{TITLE}"',          parent: 'Controller element', description: 'Acts the same as the `title` attribute, but inserts the raw text directly as HTML. If both exist on the element, this attribute takes precedence.' },
        { class: 'data-s-tooltip-placement="[placement]"',       parent: 'Controller element', description: 'Dictates where to place the tooltip in relation to the reference element. Defaults to `bottom`. Accepted placements are `auto`, `top`, `right`, `bottom`, `left`, each with optional `-start` and `-end` variations.' },
    ];

    const tooltipEvents: ClassTableRow[] = [
        { class: 's-tooltip:show',   parent: 'Controller element', description: 'Fires immediately before showing and positioning the tooltip. Calling `.preventDefault()` cancels the display.' },
        { class: 's-tooltip:shown',  parent: 'Controller element', description: 'Fires immediately after showing the tooltip.' },
        { class: 's-tooltip:hide',   parent: 'Controller element', description: 'Fires immediately before hiding the tooltip. Calling `.preventDefault()` prevents the removal of the tooltip.' },
        { class: 's-tooltip:hidden', parent: 'Controller element', description: 'Fires immediately after hiding the tooltip.' },
    ];

    const tooltipDispatchedEvents: ClassTableRow[] = [
        { class: 'dispatcher', parent: 's-tooltip:*', description: 'Contains the `Element` that initiated the event. For instance, the element hovered over to show, etc.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Interactive popovers

Stacks provides a Stimulus controller that allows you to interactively display a popover from a source element. Positioning direction are managed for you by [Popper.js](https://popper.js.org), a powerful popover positioning library we've added as a dependency. These popovers are automatically hidden when user click outside the popover or tap the `Esc` key.

### Interactive Attributes

<ClassTable classes={interactiveAttributes} headings={{ class: 'Attribute', parent: 'Applied to' }} expandable expandButtonText="Show all interactive attributes" />

### Interactive Events

<ClassTable classes={interactiveEvents} headings={{ class: 'Event' }} />

### Dispatched Events

<ClassTable classes={dispatchedEvents} headings={{ class: 'Event', parent: 'Element' }} />

## Examples

<Example>
    <div class="d-flex ai-center g8 fw-wrap">
        <Popover id="popover-form-example" placement="bottom-start">
            <PopoverReference>
                <Button>Show example popover</Button>
            </PopoverReference>
            <PopoverContent class="ws2">
                <form class="d-flex fd-column g8">
                    <div class="d-flex gy4 fd-column">
                        <label class="s-label" for="example-username">Username</label>
                        <input class="s-input" id="example-username" type="text" />
                    </div>
                    <div class="d-flex gy4 fd-column">
                        <label class="s-label" for="example-password">Password</label>
                        <input class="s-input" id="example-password" type="password" />
                    </div>
                    <button type="button" class="s-btn w100">Sign in</button>
                    <a href="#" class="s-btn s-btn__tonal w100">Create an account</a>
                </form>
            </PopoverContent>
        </Popover>

        <Popover id="popover-empty-example" placement="bottom">
            <PopoverReference>
                <Button dropdown>Show example popover</Button>
            </PopoverReference>
            <PopoverContent>
                <div class="s-empty-state wmx2">
                    <p>There's no data associated with your account yet. Please check back tomorrow.</p>
                    <Button variant="tonal">Link an account</Button>
                </div>
            </PopoverContent>
        </Popover>

        <Popover id="popover-info-example" placement="top">
            <PopoverReference>
                <button class="s-btn s-btn__tonal p4" type="button">
                    <Icon src={IconInfo} />
                    <span class="v-visible-sr">info</span>
                </button>
            </PopoverReference>
            <PopoverContent>
                <p>We know you hate spam, and we do too. That's why we make it easy for you to update your email preferences or unsubscribe at anytime.</p>
                <p class="mb0">We never share your email address with third parties for marketing purposes.</p>
            </PopoverContent>
        </Popover>
    </div>
</Example>

### Default interactivity

To enable interactive popovers, you will need to add the above attributes to the popover's originating button. Custom positioning can be specified using the `data-s-popover-placement`. In the following example, we've chosen `bottom-start`. No positioning classes need to be added to your markup, only the data attributes.

To promote being able to tab to an open popover, it's best to place the popover immediately after the toggling button in the markup as siblings.

```html
<button class="s-btn s-btn__dropdown" role="button"
        aria-controls="popover-example"
        aria-expanded="false"
        data-controller="s-popover"
        data-action="s-popover#toggle"
        data-s-popover-placement="bottom-start"
        data-s-popover-toggle-class="is-selected">
    …
</button>
<div class="s-popover"
    id="popover-example"
    role="menu">
    <div class="s-popover--content">
        …
    </div>
</div>
```

<Example>
    <Popover id="popover-default-example" placement="bottom-start">
        <PopoverReference>
            <Button dropdown>Popover button</Button>
        </PopoverReference>
        <PopoverContent>
            Example popover content
        </PopoverContent>
    </Popover>
</Example>

### Dismissible

In the case of new feature callouts, it may be appropriate to include an explicit dismiss button. You can add one using the styling provided by `.s-popover--close`.

In order for to close the popover with an explicit close button, you'll need to add the controller to a parent as illustrated in the following example code:

```html
<div class="…"
    data-controller="s-popover"
    data-s-popover-reference-selector="#reference-element">

    <button id="reference-element" class="s-btn s-btn__dropdown"
            aria-controls="popover-example"
            aria-expanded="true"
            data-action="s-popover#toggle">
        …
    </button>

    <div id="popover-example" class="s-popover is-visible" role="menu">
        <button class="s-popover--close s-btn s-btn__tonal" aria-label="Close"
            data-action="s-popover#toggle">
            <svg aria-hidden="true">…</svg>
        </button>
        <div class="s-popover--content">
            …
        </div>
    </div>
</div>
```

<Example>
    <Popover id="popover-dismissible-example" placement="bottom-start" trapFocus>
        <PopoverReference>
            <Button dropdown>Show dismissible popover</Button>
        </PopoverReference>
        <PopoverContent>
            <PopoverCloseButton />
            <p class="mb0">Dismissible persistent popover presented with a close button</p>
        </PopoverContent>
    </Popover>
</Example>

### JavaScript interaction

There may be cases where you need to show or hide a popover via JavaScript. For example, if you need to show a popover at a specific time or if you need to hide a popover from an event outside of the controller, Stacks provides convenience methods to achieve this.

```javascript
Stacks.application.register("section", class extends Stacks.StacksController {
    static targets = ["help"];

    showHelp(event) {
        Stacks.showPopover(this.helpTarget);
        event.stopPropagation();
    }
    hideHelp(event) {
        Stacks.hidePopover(this.helpTarget);
    }
});
```

<Example>
    <div>
        <div class="d-flex ai-center jc-space-between mb16">
            <h1 class="fs-headline1 mb0" role="presentation">Lorem ipsum</h1>
            <Popover id="popover-js-example" placement="left">
                <PopoverReference>
                    <button type="button" class="s-btn s-btn__tonal p0">
                        <Icon src={IconInfo} />
                        <span class="v-visible-sr">help</span>
                    </button>
                </PopoverReference>
                <PopoverContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </PopoverContent>
            </Popover>
        </div>
        <p class="fc-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et metus molestie nulla luctus sodales ac luctus justo. Aenean iaculis ac ante sit amet aliquam. Duis dolor velit, imperdiet sed mauris eu, sollicitudin egestas nisl.</p>
    </div>
</Example>

### JavaScript configuration (popovers)

Situations may also arise where popovers need to be attached to an element after the document is rendered. For example, a button could have a contextual menu that is too expensive to serve up on every page load.

Popovers can be attached to an element after the fact using `Stacks.attachPopover`.

This method takes three parameters, the element to attach the popover to, the popover either as an element or an HTML string, and optional options for displaying the popover.

```javascript
Stacks.application.register("actions", class extends Stacks.StacksController {

    var loaded = false;

    async load() {
        if (this.loaded) { return; }
        Stacks.attachPopover(this.element,
                             await fetch(`/posts/{postId}/actions`),
                             { autoShow: true, toggleOnClick: true });
        this.loaded = true;
    }
});
```

## Tooltips

When a popover is intended only for display as an on-hover tooltip and contains no interactive text, the `s-tooltip` controller can be used in place of `s-popover`. This is a separate controller that can be used alongside `s-popover` on a single target element.

### Tooltip hover attributes

<ClassTable classes={tooltipAttributes} headings={{ class: 'Attribute', parent: 'Applied to' }} expandable expandButtonText="Show all tooltip hover attributes" />

### Tooltip hover events

<ClassTable classes={tooltipEvents} headings={{ class: 'Event', parent: 'Element' }} expandable expandButtonText="Show all tooltip hover events" />

### Tooltip dispatched events

<ClassTable classes={tooltipDispatchedEvents} headings={{ class: 'Event', parent: 'Element' }} />

## Tooltip examples

If the user doesn't need to interact with the _contents_ of the popover, it may be appropriate to only show it on hover. This will make popovers feel like a tooltip. To do so, we provide an alternative controller, `s-tooltip`, that shows the tooltip only on hover.

### Title attribute

In the simple case where no markup is needed in the tooltip, the popover element can be omitted and automatically generated using the `title` attribute.

```html
<button class="s-btn" role="button"
        title="…"
        data-controller="s-tooltip"
        data-s-tooltip-placement="bottom-start">
    …
</button>
```

<Example>
    <Popover id="popover-tooltip-title-example" placement="bottom-start" tooltip>
        <PopoverReference>
            <Button>Hover tooltip popover</Button>
        </PopoverReference>
        <PopoverContent>
            This popover shows content from the title attribute.
        </PopoverContent>
    </Popover>
</Example>

### JavaScript configuration (tooltips)

In cases where the tooltip needs to display simple text or HTML, the popover can be configured using JavaScript. Plain text tooltips will render characters like &lt;, &gt;, and &amp; as is. HTML tooltips will render the HTML as expected.

```javascript
Stacks.setTooltipText(el,
    "Plain text tooltip",
    {
        placement: "top-start"
    });

Stacks.setTooltipHtml(el,
    "Tooltip <i>with</i> HTML",
    {
        placement: "top-end"
    });
```

### Rich tooltips

When a rich tooltip is required, a popover element can be configured in much the same way as an `s-popover` controller, with the most notable difference being the use of `aria-describedby` instead of `aria-controls`.

```html
<button
    class="s-btn"
    role="button"
    aria-describedby="tooltip-example"
    aria-expanded="false"
    data-controller="s-tooltip">
    …
</button>
<div
    class="s-popover s-popover__tooltip"
    id="tooltip-example"
    role="tooltip">
    <div class="s-popover--content">
        …
    </div>
</div>
```

<Example>
    <Popover id="popover-rich-tooltip-example" tooltip>
        <PopoverReference>
            <Button>Hover tooltip popover</Button>
        </PopoverReference>
        <PopoverContent>
            <div class="s-empty-state wmx2">
                <p class="mb0">There's no data associated with your account yet. Please visit our <a href="#" class="s-link">help page</a> for more information.</p>
            </div>
        </PopoverContent>
    </Popover>
</Example>

### Tooltips and interactive popovers

Hover tooltips can be used alongside interactive popovers. Tooltips will not appear when the interactive popover is visible.

```html
<button class="s-btn s-btn__dropdown" role="button"
        aria-controls="popover-example"
        aria-expanded="false"
        data-controller="s-popover s-tooltip"
        data-action="s-popover#toggle"
        data-s-popover-placement="bottom-start"
        data-s-popover-toggle-class="is-selected"
        title="…"
        data-s-tooltip-placement="top-start">
    …
</button>
<div class="s-popover"
       id="popover-example"
       role="menu">
    <div class="s-popover--content">
        …
    </div>
</div>
```

<Example>
    <Popover id="popover-tooltip-combined-example" placement="bottom-start">
        <PopoverReference>
            <Button dropdown>Popover button with tooltip hover</Button>
        </PopoverReference>
        <PopoverContent>
            <div class="tt-uppercase fs-fine fc-light">
                Saved filters
            </div>
            <div class="fc-black-350 fs-caption ta-center p16">
                Save custom sorting &amp; filtering for easy access.
            </div>
        </PopoverContent>
    </Popover>
</Example>

## Manual placement

<Notice variant="warning" class="s-anchors s-anchors__inherit s-anchors__underlined" role="presentation">
    <p>Our Stimulus popover controller handles the positioning of popovers for you. Popovers <em>can</em> be positioned manually for various legacy reasons, but we recommend using the <code>s-popover</code> controller's <code>placement</code> property instead.</p>
</Notice>

### Manual examples

Popovers can also be positioned manually if you aren't using the built-in JavaScript interactivity. Practically, this might look like adding something like `t8 l8` to `.s-popover`.

By default, popovers are hidden and positioned absolutely. Adding the class `.is-visible` will show the popover.

```html
<div class="s-popover">
    <div class="s-popover--content">
        …
    </div>
</div>
```

<Example>
    <div class="s-popover ps-relative is-visible">
        <div class="s-popover--content">
            <p class="mb0">Example popover with manual placement</p>
        </div>
    </div>
</Example>

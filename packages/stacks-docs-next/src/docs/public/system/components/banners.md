---
title: "Banners"
description: "Banners are full-width notices used for system and engagement messaging. They are highly intrusive and should be used only when essential information needs to be conveyed to the user."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=5982-7648&m=dev"
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import BannerPreview from '$components/BannerPreview.svelte';
    import BannerDemo from '$components/BannerDemo.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const attributes: ClassTableRow[] = [
        { class: 'data-controller="s-banner"',             parent: 'Controller element', description: 'Wires up the element to the banner controller. This may be a `.s-banner` element or a wrapper element.' },
        { class: 'data-s-banner-target="banner"',          parent: '.s-banner element',  description: 'Wires up the element that is to be shown/hidden.' },
        { class: 'data-s-banner-remove-when-hidden="true"',parent: 'Controller element', description: '(optional) Removes the banner from the DOM entirely when it is hidden.' },
    ];

    const events: ClassTableRow[] = [
        { class: 's-banner:show',   parent: 'Banner target', description: 'Fires immediately before showing the banner. Calling `.preventDefault()` cancels the display of the banner.' },
        { class: 's-banner:shown',  parent: 'Banner target', description: 'Fires after the banner has been visually shown.' },
        { class: 's-banner:hide',   parent: 'Banner target', description: 'Fires immediately before hiding the banner. Calling `.preventDefault()` cancels the removal of the banner.' },
        { class: 's-banner:hidden', parent: 'Banner target', description: 'Fires after the banner has been visually hidden.' },
    ];

    const eventDetails: ClassTableRow[] = [
        { class: 'dispatcher', parent: 'N/A', description: 'Contains the `Element` that initiated the event. For instance, the button clicked to show, the element clicked outside the banner that caused it to hide, etc.' },
    ];

    const helpers: ClassTableRow[] = [
        { class: 'Stacks.showBanner', parent: 'Controller element', description: 'Helper to manually show an s-banner element via external JS.' },
        { class: 'Stacks.hideBanner', parent: 'Controller element', description: 'Helper to manually hide an s-banner element via external JS.' },
    ];

    const classes: ClassTableRow[] = [
        { class: '.s-banner',              parent: 'N/A',        modifies: 'N/A',        description: 'Base banner element.' },
        { class: '.s-banner--actions',     parent: '.s-banner',  modifies: 'N/A',        description: 'Container styling for banner actions including the dismiss button.' },
        { class: '.s-banner--dismiss',     parent: '.s-banner',  modifies: 'N/A',        description: 'Applies to child button element within the banner to position it appropriately.' },
        { class: '.s-banner__important',   parent: 'N/A',        modifies: '.s-banner',  description: 'Applies an important visual style. This should be used for time-sensitive, pressing information that needs to be noticed by the user.' },
        { class: '.s-banner__info',        parent: 'N/A',        modifies: '.s-banner',  description: 'Applies info (blue) visual styles.' },
        { class: '.s-banner__success',     parent: 'N/A',        modifies: '.s-banner',  description: 'Applies success (green) visual styles.' },
        { class: '.s-banner__warning',     parent: 'N/A',        modifies: '.s-banner',  description: 'Applies warning (yellow) visual styles.' },
        { class: '.s-banner__danger',      parent: 'N/A',        modifies: '.s-banner',  description: 'Applies danger (red) visual styles.' },
        { class: '.s-banner__featured',    parent: 'N/A',        modifies: '.s-banner',  description: 'Applies featured (purple) visual styles.' },
        { class: '.s-banner__activity',    parent: 'N/A',        modifies: '.s-banner',  description: 'Applies activity (pink) visual styles.' },
        { class: '.is-pinned',             parent: 'N/A',        modifies: '.s-banner',  description: 'Pins the banner to the top of the browser window.' },
    ];
</script>

## Classes

<ClassTable {classes} expandable />

## Usage guidelines

System banners are used for **system** messaging. They are full-width notices placed in one of two locations:

- **Pinned to the top of the browser window** — Use when the banner relates to the entire website (e.g. the site is in read-only mode). Add `.is-pinned` to pin the banner above all other content including the topbar.
- **Below the top navigation bar** — The default placement. Use when the banner affects only a particular area of the product (e.g. a subscription is about to expire).

Refer to the [Classes section](#classes) for more information on how to apply the correct styles.

## Examples

<BannerDemo />

### Base

```html
<div class="s-banner" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerPreview />
    <BannerPreview important class="mt8" />
</Example>

### Info

```html
<div class="s-banner s-banner__info" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__info s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerPreview variant="info" />
    <BannerPreview variant="info" important class="mt8" />
</Example>

### Success

```html
<div class="s-banner s-banner__success" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__success s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerPreview variant="success" />
    <BannerPreview variant="success" important class="mt8" />
</Example>

### Warning

```html
<div class="s-banner s-banner__warning" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__warning s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerPreview variant="warning" />
    <BannerPreview variant="warning" important class="mt8" />
</Example>

### Danger

```html
<div class="s-banner s-banner__danger" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__danger s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerPreview variant="danger" />
    <BannerPreview variant="danger" important class="mt8" />
</Example>

### Featured

```html
<div class="s-banner s-banner__featured" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__featured s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerPreview variant="featured" />
    <BannerPreview variant="featured" important class="mt8" />
</Example>

### Activity

```html
<div class="s-banner s-banner__activity" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__activity s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerPreview variant="activity" />
    <BannerPreview variant="activity" important class="mt8" />
</Example>

## JavaScript

The `.s-banner` component includes a controller to show and hide the banner programitically. While it is optional, at least including the functionality to close the banner is recommended.

### Example

```html
<div
    role="alert"
    id="example-banner"
    class="s-banner"
    aria-labelledby="example-message"
    aria-hidden="true"
    data-controller="s-banner"
    data-s-banner-target="banner">
    Example banner
</div>
…
<button
    data-toggle="s-banner"
    data-target="#example-banner">
    Show banner
</button>
```

```javascript
document.querySelector(".js-banner-toggle").addEventListener("click", function(e) {
    Stacks.showBanner(document.querySelector("#example-banner"));
});
```

### Attributes

<ClassTable classes={attributes} headings={{ class: 'Attribute', parent: 'Applies to' }} />

### Events

<ClassTable classes={events} headings={{ class: 'Event', parent: 'Applies to' }} />

### Event details

<ClassTable classes={eventDetails} headings={{ class: 'event.detail', parent: 'Applicable events' }} />

### Helpers

<ClassTable classes={helpers} headings={{ class: 'Function', parent: 'Applies to' }} />

---
title: "Banners"
description: "Banners are full-width notices used for system and engagement messaging. They are highly intrusive and should be used only when essential information needs to be conveyed to the user."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=5982-7648&m=dev"
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import BannerExample from '$components/BannerExample.svelte';
    import BannerDemo from '$components/BannerDemo.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

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
    <BannerExample />
    <BannerExample important class="mt8" />
</Example>

### Info

```html
<div class="s-banner s-banner__info" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__info s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerExample variant="info" />
    <BannerExample variant="info" important class="mt8" />
</Example>

### Success

```html
<div class="s-banner s-banner__success" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__success s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerExample variant="success" />
    <BannerExample variant="success" important class="mt8" />
</Example>

### Warning

```html
<div class="s-banner s-banner__warning" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__warning s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerExample variant="warning" />
    <BannerExample variant="warning" important class="mt8" />
</Example>

### Danger

```html
<div class="s-banner s-banner__danger" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__danger s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerExample variant="danger" />
    <BannerExample variant="danger" important class="mt8" />
</Example>

### Featured

```html
<div class="s-banner s-banner__featured" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__featured s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerExample variant="featured" />
    <BannerExample variant="featured" important class="mt8" />
</Example>

### Activity

```html
<div class="s-banner s-banner__activity" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__activity s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <BannerExample variant="activity" />
    <BannerExample variant="activity" important class="mt8" />
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

| Attribute | Applies to | Description |
|---|---|---|
| `data-controller="s-banner"` | Controller element | Wires up the element to the banner controller. This may be a `.s-banner` element or a wrapper element. |
| `data-s-banner-target="banner"` | `.s-banner` element | Wires up the element that is to be shown/hidden. |
| `data-s-banner-remove-when-hidden="true"` | Controller element | (optional) Removes the banner from the DOM entirely when it is hidden. |

### Events

| Event | Applies to | Description |
|---|---|---|
| `s-banner:show` | Banner target | Fires immediately before showing the banner. Calling `.preventDefault()` cancels the display of the banner. |
| `s-banner:shown` | Banner target | Fires after the banner has been visually shown. |
| `s-banner:hide` | Banner target | Fires immediately before hiding the banner. Calling `.preventDefault()` cancels the removal of the banner. |
| `s-banner:hidden` | Banner target | Fires after the banner has been visually hidden. |

### Event details

| event.detail | Applicable events | Description |
|---|---|---|
| `dispatcher` | N/A | Contains the `Element` that initiated the event. For instance, the button clicked to show, the element clicked outside the banner that caused it to hide, etc. |

### Helpers

| Function | Parameters | Description |
|---|---|---|
| `Stacks.showBanner` | `Element`: the element the `data-controller="s-banner"` attribute is on | Helper to manually show an s-banner element via external JS. |
| `Stacks.hideBanner` | `Element`: the element the `data-controller="s-banner"` attribute is on | Helper to manually hide an s-banner element via external JS. |

---
title: "Banners"
description: "Banners are full-width notices used for system and engagement messaging. They are highly intrusive and should be used only when essential information needs to be conveyed to the user."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=5982-7648&m=dev"
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-banner',              modifies: 'N/A',       description: 'Base banner element.' },
        { class: '.s-banner--actions',     modifies: '.s-banner', description: 'Container styling for banner actions including the dismiss button.' },
        { class: '.s-banner--dismiss',     modifies: '.s-banner', description: 'Applies to child button element within the banner to position it appropriately.' },
        { class: '.s-banner__important',   modifies: '.s-banner', description: 'Applies an important visual style. This should be used for time-sensitive, pressing information that needs to be noticed by the user.' },
        { class: '.s-banner__info',        modifies: '.s-banner', description: 'Applies info (blue) visual styles.' },
        { class: '.s-banner__success',     modifies: '.s-banner', description: 'Applies success (green) visual styles.' },
        { class: '.s-banner__warning',     modifies: '.s-banner', description: 'Applies warning (yellow) visual styles.' },
        { class: '.s-banner__danger',      modifies: '.s-banner', description: 'Applies danger (red) visual styles.' },
        { class: '.s-banner__featured',    modifies: '.s-banner', description: 'Applies featured (purple) visual styles.' },
        { class: '.s-banner__activity',    modifies: '.s-banner', description: 'Applies activity (pink) visual styles.' },
        { class: '.is-pinned',             modifies: '.s-banner', description: 'Pins the banner to the top of the browser window.' },
    ];

    const variants = [
        { value: '',                  label: 'Base' },
        { value: 's-banner__info',    label: 'Info' },
        { value: 's-banner__success', label: 'Success' },
        { value: 's-banner__warning', label: 'Warning' },
        { value: 's-banner__danger',  label: 'Danger' },
        { value: 's-banner__featured',label: 'Featured' },
        { value: 's-banner__activity',label: 'Activity' },
    ] as const;

    let selectedVariant = $state('');
    let important = $state(false);
    let visible = $state(true);

    const demoClass = $derived(
        ['s-banner', selectedVariant, important && 's-banner__important']
            .filter(Boolean).join(' ')
    );
</script>

## Classes

<ClassTable {classes} expandable />

## Usage guidelines

System banners are used for **system** messaging. They are full-width notices placed in one of two locations:

- **Pinned to the top of the browser window** — Use when the banner relates to the entire website (e.g. the site is in read-only mode). Add `.is-pinned` to pin the banner above all other content including the topbar.
- **Below the top navigation bar** — The default placement. Use when the banner affects only a particular area of the product (e.g. a subscription is about to expire).

Refer to the [Classes section](#classes) for more information on how to apply the correct styles.

## Examples

### Base

```html
<div class="s-banner" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <aside class="s-banner" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>System update</strong> — scheduled maintenance begins at midnight.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
        <aside class="s-banner s-banner__important" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>System update</strong> — scheduled maintenance begins at midnight.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
    </div>
</Example>

### Info

```html
<div class="s-banner s-banner__info" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__info s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <aside class="s-banner s-banner__info" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Heads up</strong> — a new feature is available in your settings.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
        <aside class="s-banner s-banner__info s-banner__important" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Heads up</strong> — a new feature is available in your settings.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
    </div>
</Example>

### Success

```html
<div class="s-banner s-banner__success" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__success s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <aside class="s-banner s-banner__success" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Migration complete</strong> — all content has been moved successfully.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
        <aside class="s-banner s-banner__success s-banner__important" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Migration complete</strong> — all content has been moved successfully.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
    </div>
</Example>

### Warning

```html
<div class="s-banner s-banner__warning" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__warning s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <aside class="s-banner s-banner__warning" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Subscription expiring</strong> — your plan expires in 7 days.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
        <aside class="s-banner s-banner__warning s-banner__important" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Subscription expiring</strong> — your plan expires in 7 days.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
    </div>
</Example>

### Danger

```html
<div class="s-banner s-banner__danger" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__danger s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <aside class="s-banner s-banner__danger" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Site is read-only</strong> — posting is temporarily disabled.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
        <aside class="s-banner s-banner__danger s-banner__important" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Site is read-only</strong> — posting is temporarily disabled.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
    </div>
</Example>

### Featured

```html
<div class="s-banner s-banner__featured" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__featured s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <aside class="s-banner s-banner__featured" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>New feature</strong> — try our redesigned question editor.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
        <aside class="s-banner s-banner__featured s-banner__important" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>New feature</strong> — try our redesigned question editor.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
    </div>
</Example>

### Activity

```html
<div class="s-banner s-banner__activity" role="alert" aria-hidden="false">…</div>
<div class="s-banner s-banner__activity s-banner__important" role="alert" aria-hidden="false">…</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <aside class="s-banner s-banner__activity" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>3 new answers</strong> — on your question about flexbox.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
        <aside class="s-banner s-banner__activity s-banner__important" role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>3 new answers</strong> — on your question about flexbox.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted">Dismiss</button>
                </div>
            </div>
        </aside>
    </div>
</Example>

## JavaScript

The `.s-banner` component includes a Stimulus controller to show and hide the banner programmatically. While it is optional, including the functionality to close the banner is recommended.

### Example

```javascript
document.querySelector(".js-banner-toggle").addEventListener("click", function(e) {
    Stacks.showBanner(document.querySelector("#example-banner"));
});
```

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
```

<Example>
    <div class="d-flex g8 mb12 ai-center fw-wrap">
        <select class="s-select" bind:value={selectedVariant}>
            {#each variants as v}
                <option value={v.value}>{v.label}</option>
            {/each}
        </select>
        <label class="s-label d-flex ai-center g4">
            <input type="checkbox" class="s-checkbox" bind:checked={important} />
            Important
        </label>
        <button
            type="button"
            class="s-btn s-btn__tonal s-btn__sm"
            onclick={() => visible = true}
        >Show</button>
        <button
            type="button"
            class="s-btn s-btn__tonal s-btn__sm"
            onclick={() => visible = false}
        >Remove</button>
    </div>
    {#if visible}
        <aside class={demoClass} role="alert" aria-hidden="false">
            <div class="d-flex gs8 gsx ai-center jc-space-between">
                <p class="m0"><strong>Example banner</strong> — this is a system banner message.</p>
                <div class="s-banner--actions">
                    <button type="button" class="s-banner--dismiss s-btn s-btn__muted" onclick={() => visible = false}>Dismiss</button>
                </div>
            </div>
        </aside>
    {/if}
</Example>

### Attributes

| Attribute | Applied to | Description |
|---|---|---|
| `data-controller="s-banner"` | Controller element | Wires the Stimulus controller to the element. |
| `data-s-banner-target="banner"` | Banner element | Marks the banner as the controller target. |
| `data-s-banner-remove-when-hidden="true"` | Controller element | Optional. Removes the banner from the DOM when hidden. |

### Events

| Event | Fired on | Description |
|---|---|---|
| `s-banner:show` | Banner element | Fired before the banner is shown. `preventDefault()` cancels the show. |
| `s-banner:shown` | Banner element | Fired after the banner has finished showing. |
| `s-banner:hide` | Banner element | Fired before the banner is hidden. `preventDefault()` cancels the hide. |
| `s-banner:hidden` | Banner element | Fired after the banner has finished hiding. |

### Event details

| Detail | Type | Description |
|---|---|---|
| `dispatcher` | `Element` | The element that initiated the event. |

### Helpers

| Helper | Description |
|---|---|
| `Stacks.showBanner(element)` | Shows the target banner element. |
| `Stacks.hideBanner(element)` | Hides the target banner element. |

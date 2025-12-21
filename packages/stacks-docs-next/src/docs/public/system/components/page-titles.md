---
title: Page titles
description: Page titles create consistency in the layout of similar pages, specifically the placement and appearance of titles, descriptions, actions, and breadcrumbs.
updated: 2025-12-20
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconArrowRight } from '@stackoverflow/stacks-icons';
</script>

## Components

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col" class="s-table--cell4">Component</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Page title</th>
                <td>Title of the page. Refer to the content section of Stacks for things like word choice, naming, and capitalization.</td>
            </tr>
            <tr>
                <th scope="row">Description <span class="s-label--status">Optional</span></th>
                <td>Additional context for content and actions on the page.</td>
            </tr>
            <tr>
                <th scope="row">Actions <span class="s-label--status">Optional</span></th>
                <td>Free-form area to include buttons, filters, or other HTML content.</td>
            </tr>
            <tr>
                <th scope="row">Breadcrumbs <span class="s-label--status">Optional</span></th>
                <td><a href="/product/components/breadcrumbs">Breadcrumbs</a> can be included to provide context for the currently-viewed page.</td>
            </tr>
        </tbody>
    </table>
</div>

## Admin sections

These components should be used in the admin sections of our private Q&A products.

### Base Styles

The base style for pages that don't need further description beyond the page title and don't have any actions for filters.

```html
<div class="s-page-title">
    <h1 class="s-page-title--header">Page title</h1>
</div>
```

<section>
    <div class="s-page-title">
        <h1 class="s-page-title--header" role="presentation">Page title</h1>
    </div>
</section>

### Title with description

A summary of a page's content. Helpful for large pages with multiple actions.

```html
<div class="s-page-title">
    <div class="s-page-title--text">
        <h1 class="s-page-title--header">Page title</h1>
        <p class="s-page-title--description">…</p>
    </div>
</div>
```

<section>
    <div class="s-page-title">
        <div class="s-page-title--text">
            <h1 class="s-page-title--header" role="presentation">Page title</h1>
            <p class="s-page-title--description">Optional description de Finibus Bonorum et Malorum with an <a href="#">optional link</a>.</p>
        </div>
    </div>
</section>

### Title with actions

When a page title includes actions, they are located at the far end of the component. This area is free-form, so we can include any markups we'd like, from single button to a d-flex of custom filters and text.

```html
<div class="s-page-title">
    <div class="s-page-title--text">
        <h1 class="s-page-title--header">Page title</h1>
        <p class="s-page-title--description">…</p>
    </div>
    <div class="s-page-title--actions">…</div>
</div>
```

<section>
    <div class="s-page-title">
        <div class="s-page-title--text">
            <h1 class="s-page-title--header" role="presentation">Page title</h1>
            <p class="s-page-title--description">Optional description de Finibus Bonorum et Malorum with an <a href="#">optional link</a>.</p>
        </div>
        <div class="s-page-title--actions">
            <div class="d-flex gx8">
                <button class="flex--item s-btn s-btn__filled" type="button" aria-pressed="false">Add something</button>
                <button class="flex--item s-btn s-btn__tonal s-btn__dropdown" type="button" aria-pressed="false">Filter</button>
            </div>
        </div>
    </div>
</section>

### Title with breadcrumbs

Breadcrumbs are used to provide context for the currently-viewed page and reduce the number of actions a website visitor needs to take in order to get to a higher-level page. Breadcrumbs **should not** be used for single-level sections that have no logical grouping.

```html
<div class="s-page-title">
    <div class="s-page-title--text">
        <nav class="s-breadcrumbs" aria-label="…">…</nav>
        <h1 class="s-page-title--header">Page title</h1>
        <p class="s-page-title--description">…</p>
    </div>
</div>
```

<section>
    <div class="s-page-title">
        <div class="s-page-title--text">
            <nav class="s-breadcrumbs" aria-label="example breadcrumbs">
                <div class="s-breadcrumbs--item">
                    <a class="s-breadcrumbs--link">Stack Overflow</a>
                    <Icon src={IconArrowRight} class="s-breadcrumbs--divider" />
                </div>
                <div class="s-breadcrumbs--item">
                    <a class="s-breadcrumbs--link">…</a>
                    <Icon src={IconArrowRight} class="s-breadcrumbs--divider" />
                </div>
                <div class="s-breadcrumbs--item">
                    <a class="s-breadcrumbs--link">…</a>
                </div>
            </nav>
            <h1 class="s-page-title--header" role="presentation">Page title</h1>
            <p class="s-page-title--description">Optional description de Finibus Bonorum et Malorum with an <a>optional link</a>.</p>
        </div>
    </div>
</section>

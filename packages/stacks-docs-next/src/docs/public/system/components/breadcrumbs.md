---
title: Breadcrumbs
figma: https://svelte.stackoverflow.design/figma/breadcrumbs
description: Breadcrumbs are used to provide context for the currently-viewed page.
updated: 2025-12-20
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconPlaceholder16 } from '@stackoverflow/stacks-icons';

  const breadcrumbClasses = [
    { class: '.s-breadcrumbs', applies: 'N/A', description: 'Base parent container for breadcrumbs' },
    { class: '.s-breadcrumbs--item', applies: '.s-breadcrumbs', description: 'Individual breadcrumb element containing a link and a divider' },
    { class: '.s-breadcrumbs--link', applies: '.s-breadcrumbs--item', description: 'Breadcrumb link element' },
    { class: '.s-breadcrumbs--divider', applies: '.s-breadcrumbs--item', description: 'Breadcrumb divider element' }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th class="s-table--cell4" scope="col">Class</th>
                <th class="s-table--cell3" scope="col">Parent</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody class="fs-caption">
            {#each breadcrumbClasses as item}
            <tr>
                <th scope="row"><code class="stacks-code">{item.class}</code></th>
                <td><code class="stacks-code">{item.applies}</code></td>
                <td class="p8">{item.description}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

## Examples

Breadcrumbs show users where they are within a site's hierarchy. Breadcrumbs help orient the user and allow for navigation to previous page levels. It can be appropriate to use a breadcrumb when:

- The user is more than 2 levels of navigation deep
- The current page does not have its own navigation
- The user needs to quickly go back to the previous parent page

Breadcrumbs should be the first page element—placed directly above the page's title. **The page the user is on should not appear in the breadcrumb trail**, since that indicator is satisfied by the title of the page itself. Additionally, the last `.s-breadcrumb--item` shouldn't include the divider.

It is **not** appropriate to use Breadcrumbs when:

- There is only one level of navigation.
- There isn't a clear navigation path or the page is orphaned.

### Stack Overflow

```html
<nav class="s-breadcrumbs mb6 sm:mb2" aria-label="…">
    <div class="s-breadcrumbs--item">
        <a class="s-breadcrumbs--link" href="…" aria-label="…">
            <!-- Logo SVG -->
        </a>
        <svg class="s-breadcrumbs--divider">...</svg>
    </div>
    <div class="s-breadcrumbs--item">
        <a class="s-breadcrumbs--link" href="…">…</a>
        <svg class="s-breadcrumbs--divider">...</svg>
    </div>
    <div class="s-breadcrumbs--item">
        <a class="s-breadcrumbs--link" href="…">…</a>
    </div>
</nav>
```

<section>
    <nav class="s-breadcrumbs mb6 sm:mb2" aria-label="Stack Overflow breadcrumbs example">
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#" aria-label="Stack Overflow">
                <!-- TODO: Add LogoGlyphXxs SVG -->
            </a>
            <Icon src={IconPlaceholder16} class="s-breadcrumbs--divider" />
        </div>
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#">Help center</a>
            <Icon src={IconPlaceholder16} class="s-breadcrumbs--divider" />
        </div>
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#">Asking</a>
        </div>
    </nav>
    <h1 class="fs-headline1 fw-normal mb0" role="presentation">What types of questions should I avoid asking?</h1>
</section>

### Stack Exchange

```html
<nav class="s-breadcrumbs mb6 sm:mb2" aria-label="…">
    <div class="s-breadcrumbs--item">
        <a class="s-breadcrumbs--link" href="…" aria-label="…">
            <!-- Logo SVG -->
        </a>
        <svg class="s-breadcrumbs--divider">...</svg>
    </div>
    <div class="s-breadcrumbs--item">
        <a class="s-breadcrumbs--link" href="…">…</a>
    </div>
</nav>
```

<section>
    <nav class="s-breadcrumbs mb6 sm:mb2" aria-label="Stack Exchange breadcrumbs example">
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#" aria-label="Stack Exchange">
                <!-- TODO: Add LogoSEXxs SVG -->
            </a>
            <Icon src={IconPlaceholder16} class="s-breadcrumbs--divider" />
        </div>
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#">Review queues</a>
        </div>
    </nav>
    <h1 class="fs-headline1 fw-normal mb0" role="presentation">Close votes</h1>
</section>

### Team

```html
<nav class="s-breadcrumbs mb6 sm:mb2" aria-label="…">
    <div class="s-breadcrumbs--item">
        <a href="…" class="s-link s-link__muted mtn2" aria-label="…">
            <div class="team-avatar s-avatar">
                <svg class="native s-avatar--badge">...</svg>
            </div>
            <span class="pl4">…</span>
        </a>
        <svg class="s-breadcrumbs--divider">...</svg>
    </div>
    <div class="s-breadcrumbs--item">
        <a class="s-breadcrumbs--link" href="…">…</a>
        <svg class="s-breadcrumbs--divider">...</svg>
    </div>
    <div class="s-breadcrumbs--item">
        <a class="s-breadcrumbs--link" href="…">…</a>
    </div>
</nav>
```

<section>
    <nav class="s-breadcrumbs mb6 sm:mb2" aria-label="team breadcrumbs example">
        <div class="s-breadcrumbs--item">
            <a href="#" class="s-link s-link__muted mtn1" aria-label="Hum">
                <div class="team-avatar s-avatar">
                    <Icon src={IconPlaceholder16} native class="s-avatar--badge" />
                </div>
                <span class="pl4">Hum</span>
            </a>
            <Icon src={IconPlaceholder16} class="s-breadcrumbs--divider" />
        </div>
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#">Settings</a>
            <Icon src={IconPlaceholder16} class="s-breadcrumbs--divider" />
        </div>
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#">Billing</a>
        </div>
    </nav>
    <h1 class="fs-headline1 fw-normal mb0" role="presentation">Payment Details</h1>
</section>

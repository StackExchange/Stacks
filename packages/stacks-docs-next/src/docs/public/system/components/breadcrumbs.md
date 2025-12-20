---
title: Breadcrumbs
figma: https://svelte.stackoverflow.design/figma/breadcrumbs
description: Breadcrumbs are used to provide context for the currently-viewed page.
updated: 2025-12-20
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconArrowRightAltSm, IconShieldXSm } from '@stackoverflow/stacks-icons';

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
                <svg class="mtn2" width="18" height="20" viewBox="0 0 18 20"><path fill="#F48024" d="M15 19v-5h2v7H0v-7h2v5h13Z"/><path fill="#BCBBBB" d="m4 11 .5-2L14 12l-.5 2L4 11Zm.96-4.37L14 11l1-1.73-9-4.36-1.04 1.72Zm1.81-3.97 8.04 5.67 1.3-1.84-8.04-5.67-1.3 1.84ZM14.2 0l-1.7 1.27 6.25 8.35 1.7-1.27L14.2 0Z"/></svg>
            </a>
            <Icon src={IconArrowRightAltSm} class="s-breadcrumbs--divider" />
        </div>
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#">Help center</a>
            <Icon src={IconArrowRightAltSm} class="s-breadcrumbs--divider" />
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
                <svg class="mtn2" width="18" height="20" viewBox="0 0 18 20"><path fill="#1e5397" d="M0 16h18v3H0z"/><path fill="#376db6" d="M0 11h18v3H0z"/><path fill="#4f9fd9" d="M0 6h18v3H0z"/></svg>
            </a>
            <Icon src={IconArrowRightAltSm} class="s-breadcrumbs--divider" />
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
                    <Icon src={IconShieldXSm} native class="s-avatar--badge" />
                </div>
                <span class="pl4">Hum</span>
            </a>
            <Icon src={IconArrowRightAltSm} class="s-breadcrumbs--divider" />
        </div>
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#">Settings</a>
            <Icon src={IconArrowRightAltSm} class="s-breadcrumbs--divider" />
        </div>
        <div class="s-breadcrumbs--item">
            <a class="s-breadcrumbs--link" href="#">Billing</a>
        </div>
    </nav>
    <h1 class="fs-headline1 fw-normal mb0" role="presentation">Payment Details</h1>
</section>

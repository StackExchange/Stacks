---
title: Pagination
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-paginationcontroller--docs
figma: https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=1189-2035&t=JFrmhokx3ZOeRP9b-0
description: Pagination splits content into pages, as seen on questions, tags, users, and jobs listings.
updated: 2025-12-20
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconArrowLeft, IconArrowRight } from '@stackoverflow/stacks-icons';

  const paginationClasses = [
    { class: '.s-pagination', applies: 'N/A', description: 'Base pagination style that is used universally.' },
    { class: '.s-pagination--item', applies: 'N/A', description: "A child element that's used as a link and labeled with the page number." },
    { class: '.is-selected', applies: '.s-pagination--item', description: "Active state that's applied to the current page." },
    { class: '.s-pagination--item__nav', applies: '.s-pagination--item', description: 'Styles the Next or Previous button with a circular background and fixed dimensions. Typically used with an icon to indicate navigation to the next page.' },
    { class: '.s-pagination--item__clear', applies: '.s-pagination--item', description: 'Clears the background and removes any interactivity. Used for ellipses and descriptions.' }
  ];
</script>

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="wmn4 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th class="s-table--cell3" scope="col">Class</th>
                <th class="s-table--cell3" scope="col">Applied to</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody class="fs-caption">
            {#each paginationClasses as item}
            <tr>
                <th scope="row"><code class="stacks-code">{item.class}</code></th>
                <td><code class="stacks-code bg-white">{item.applies}</code></td>
                <td class="p8">{item.description}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

## Example

```html
<nav class="s-pagination" aria-label="pagination">
    <ul>
        <li>
            <a
                class="s-pagination--item is-selected"
                href="…"
                aria-current="page"
            >
                <span class="v-visible-sr">page</span>
                1
            </a>
        </li>
        <li>
            <a class="s-pagination--item" href="…">
                <span class="v-visible-sr">page</span>
                2
            </a>
        </li>
        <li>
            <a class="s-pagination--item" href="…">
                <span class="v-visible-sr">page</span>
                3
            </a>
        </li>
        <li>
            <a class="s-pagination--item" href="…">
                <span class="v-visible-sr">page</span>
                4
            </a>
        </li>
        <li>
            <a class="s-pagination--item" href="…">
                <span class="v-visible-sr">page</span>
                5
            </a>
        </li>
        <li>
            <span class="s-pagination--item s-pagination--item__clear">…</span>
        </li>
        <li>
            <a class="s-pagination--item" href="…">
                <span class="v-visible-sr">page</span>
                122386
            </a>
        </li>
        <li>
            <a class="s-pagination--item s-pagination--item__nav" href="…">
                <svg>...</svg>
                <span class="v-visible-sr">next page</span>
            </a>
        </li>
    </ul>
</nav>
```

<div class="overflow-x-auto">
    <nav class="s-pagination" role="presentation">
        <ul>
            <li>
                <a class="s-pagination--item s-pagination--item__nav" href="#">
                    <Icon src={IconArrowLeft} />
                    <span class="v-visible-sr">previous page</span>
                </a>
            </li>
            <li>
                <a class="s-pagination--item is-selected" href="#" aria-current="page">
                    <span class="v-visible-sr">page</span>
                    1
                </a>
            </li>
            <li>
                <a class="s-pagination--item" href="#">
                    <span class="v-visible-sr">page</span>
                    2
                </a>
            </li>
            <li>
                <a class="s-pagination--item" href="#">
                    <span class="v-visible-sr">page</span>
                    3
                </a>
            </li>
            <li>
                <a class="s-pagination--item" href="#">
                    <span class="v-visible-sr">page</span>
                    4
                </a>
            </li>
            <li>
                <a class="s-pagination--item" href="#">
                    <span class="v-visible-sr">page</span>
                    5
                </a>
            </li>
            <li>
                <span class="s-pagination--item s-pagination--item__clear">…</span>
            </li>
            <li>
                <a class="s-pagination--item" href="#">
                    <span class="v-visible-sr">page</span>
                    122386
                </a>
            </li>
            <li>
                <a class="s-pagination--item s-pagination--item__nav" href="#">
                    <Icon src={IconArrowRight} />
                    <span class="v-visible-sr">next page</span>
                </a>
            </li>
        </ul>
    </nav>
</div>

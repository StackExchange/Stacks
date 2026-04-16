---
title: "Pagination"
description: "Pagination splits content into pages, as seen on questions, tags, users, and jobs listings."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-paginationcontroller--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=1189-2035&t=JFrmhokx3ZOeRP9b-0"
---

<script lang="ts">
    import { PaginationController } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-pagination',              parent: 'N/A',                  modifies: 'N/A',                       description: 'Base pagination style.' },
        { class: '.s-pagination--item',        parent: '.s-pagination',        modifies: 'N/A',                       description: "A child element that's used as a link and labeled with the page number." },
        { class: '.s-pagination--item__clear', parent: 'N/A',                  modifies: '.s-pagination--item',       description: 'Clears the background and removes any interactivity. Used for ellipses and descriptions.' },
        { class: '.s-pagination--item__nav',   parent: 'N/A',                  modifies: '.s-pagination--item',       description: 'Styles the Next or Previous button with a circular background and fixed dimensions. Typically used with an icon to indicate navigation to the next page.' },
        { class: '.is-selected',               parent: 'N/A',                  modifies: '.s-pagination--item',       description: 'Active state that\'s applied to the current page.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Example

```html
<nav class="s-pagination" aria-label="pagination">
    <ul>
        <li>
            <a class="s-pagination--item s-pagination--item__nav" href="#">
                <svg aria-hidden="true">…</svg>
                <span class="v-visible-sr">previous page</span>
            </a>
        </li>
        <li>
            <a class="s-pagination--item is-selected" href="…" aria-current="page">
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
                <svg aria-hidden="true">…</svg>
                <span class="v-visible-sr">next page</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <div class="overflow-x-auto">
        <PaginationController
            page={2}
            totalPages={122386}
            urlGenerator={(p) => '#'}
        />
    </div>
</Example>

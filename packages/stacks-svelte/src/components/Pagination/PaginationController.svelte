<script lang="ts">
    import Pagination from "./Pagination.svelte";
    import PaginationItem from "./PaginationItem.svelte";
    import PaginationItemClear from "./PaginationItemClear.svelte";
    import { createEventDispatcher } from "svelte";
    import { generatePagination } from "./pagination-generator";

    /**
     * The current page number
     * @type {number}
     */
    export let page: number;
    /**
     * The total number of pages
     * @type {number}
     */
    export let totalPages: number;
    /**
     * Function to generate the URL for a given page number
     * @type {(page: number) => string}
     */
    export let urlGenerator: (page: number) => string;
    /**
     * Whether to follow the link natively or rely on the pagechange event
     * @type {boolean}
     */
    export let followLink = true;
    /**
     * Localized translation for the visible "Next" page link text
     */
    export let i18nNextText = "Next";
    /**
     * Localized translation for the visible "Prev" page link text
     */
    export let i18nPrevText = "Prev";
    /**
     * Localized translation for Next/Prev "page" screen reader text
     */
    export let i18nPageText = "page";
    /**
     * Localized translation aria-label on nav element wrapping the pagination component
     */
    export let i18nNavigationLabel: string = "Pagination";

    const dispatch = createEventDispatcher<{ pagechange: number }>();

    /**
     * Handles the click event for a pagination item
     * @param {number} page - The page number to navigate to
     * @returns {(evt: Event) => void} - The event handler function
     */
    const onPaginationItemClick = (page: number) => (evt: Event) => {
        if (!followLink) {
            evt.preventDefault();
            dispatch("pagechange", page);
        }
    };
</script>

<Pagination {i18nNavigationLabel}>
    {#if page > 1}
        <PaginationItem
            url={urlGenerator(page - 1)}
            on:click={onPaginationItemClick(page - 1)}
        >
            {i18nPrevText} <span class="v-visible-sr">{i18nPageText}</span>
        </PaginationItem>
    {/if}
    {#each generatePagination(page, totalPages) as p, i (p.toString() + i)}
        {#if typeof p === "number"}
            <PaginationItem
                url={urlGenerator(p)}
                on:click={onPaginationItemClick(p)}
                selected={p === page}
            >
                <span class="v-visible-sr">{i18nPageText}</span>
                {p}
            </PaginationItem>
        {:else}
            <PaginationItemClear />
        {/if}
    {/each}
    {#if page < totalPages}
        <PaginationItem
            url={urlGenerator(page + 1)}
            on:click={onPaginationItemClick(page + 1)}
        >
            {i18nNextText} <span class="v-visible-sr">{i18nPageText}</span>
        </PaginationItem>
    {/if}
</Pagination>

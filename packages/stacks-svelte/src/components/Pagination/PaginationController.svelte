<script lang="ts">
    import Pagination from "./Pagination.svelte";
    import PaginationItem from "./PaginationItem.svelte";
    import PaginationItemClear from "./PaginationItemClear.svelte";
    import { generatePagination } from "./pagination-generator";
    import Icon from "../Icon/Icon.svelte";
    import { IconArrowRight } from "@stackoverflow/stacks-icons/icons";

    interface Props {
        /**
         * The current page number
         */
        page: number;
        /**
         * The total number of pages
         */
        totalPages: number;
        /**
         * Function to generate the URL for a given page number
         */
        urlGenerator: (page: number) => string;
        /**
         * Whether to follow the link natively or rely on the pagechange event
         */
        followLink?: boolean;
        /**
         * Localized translation for the visible "Next" page link text
         */
        i18nNextText?: string;
        /**
         * Localized translation for the visible "Prev" page link text
         */
        i18nPrevText?: string;
        /**
         * Localized translation for Next/Prev "page" screen reader text
         */
        i18nPageText?: string;
        /**
         * Localized translation aria-label on nav element wrapping the pagination component
         */
        i18nNavigationLabel?: string;
        /**
         * Callback fired when a page is changed
         */
        onpagechange?: (pageNumber: number) => void;
    }

    let {
        page,
        totalPages,
        urlGenerator,
        followLink = true,
        i18nNextText = "Next",
        i18nPrevText = "Prev",
        i18nPageText = "page",
        i18nNavigationLabel = "Pagination",
        onpagechange,
    }: Props = $props();

    /**
     * Handles the click event for a pagination item
     * @param {number} page - The page number to navigate to
     * @returns {(evt: Event) => void} - The event handler function
     */
    const onPaginationItemClick = (page: number) => (evt: Event) => {
        if (!followLink) {
            evt.preventDefault();
            onpagechange?.(page);
        }
    };
</script>

<Pagination {i18nNavigationLabel}>
    {#if page > 1}
        <PaginationItem
            url={urlGenerator(page - 1)}
            onclick={onPaginationItemClick(page - 1)}
        >
            {i18nPrevText} <span class="v-visible-sr">{i18nPageText}</span>
        </PaginationItem>
    {/if}
    {#each generatePagination(page, totalPages) as p, i (p.toString() + i)}
        {#if typeof p === "number"}
            <PaginationItem
                url={urlGenerator(p)}
                onclick={onPaginationItemClick(p)}
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
            onclick={onPaginationItemClick(page + 1)}
            isNext={true}
        >
            <Icon src={IconArrowRight} title={i18nNextText} />
            <span class="v-visible-sr">{i18nPageText}</span>
        </PaginationItem>
    {/if}
</Pagination>

<script lang="ts">
    import { resolve } from "$app/paths";
    import { tick } from "svelte";
    import MiniSearch, { type SearchResult } from "minisearch";

    import {
        Button,
        EmptyState,
        Icon,
        Modal,
    } from "@stackoverflow/stacks-svelte";
    import { IconSearch } from "@stackoverflow/stacks-icons";

    let { searchDocuments = [] }: { searchDocuments?: DocsSearchDocument[] } =
        $props();

    let searchInput = $state<HTMLInputElement>();
    let isOpen = $state(false);
    let query = $state("");

    const miniSearch = $derived.by(() => {
        const search = new MiniSearch<DocsSearchDocument>({
            fields: ["title", "description", "text"],
            storeFields: ["title", "description", "path"],
            searchOptions: {
                boost: { title: 3, description: 2 },
                fuzzy: 0.2,
                prefix: true,
            },
        });

        search.addAll(searchDocuments);
        return search;
    });

    const results = $derived.by(() => {
        const trimmedQuery = query.trim();
        if (!trimmedQuery) return [];

        return miniSearch.search(trimmedQuery).slice(0, 8) as Array<
            SearchResult &
                Pick<DocsSearchDocument, "title" | "description" | "path">
        >;
    });

    const hasQuery = $derived(query.trim().length > 0);
    const resultStatus = $derived.by(() => {
        if (!hasQuery) return "";

        return `${results.length} search ${results.length === 1 ? "result" : "results"} found.`;
    });

    $effect(() => {
        if (!isOpen) return;

        tick().then(() => searchInput?.focus());
    });

    function toggleSearch() {
        isOpen = !isOpen;
    }

    function openSearch() {
        isOpen = true;
    }

    function closeSearch() {
        isOpen = false;
        query = "";
    }

    function handleWindowKeydown(event: KeyboardEvent) {
        if (
            (event.metaKey || event.ctrlKey) &&
            event.key.toLowerCase() === "k"
        ) {
            event.preventDefault();
            openSearch();
        }
    }
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<Button
    icon
    weight="clear"
    class="s-btn__xs mrn6 px6 h:fc-blue-400"
    onclick={toggleSearch}
>
    <Icon src={IconSearch} />
    <span class="v-visible-sr">Search</span>
</Button>

<Modal
    id="docs-search"
    visible={isOpen}
    class="search-modal d-flex fd-column w100 wmx5 hs5 hmx-screen overflow-hidden px0 pb0"
    i18nCloseButtonLabel="Close search"
    onclose={closeSearch}
>
    {#snippet header()}
        Search documentation
    {/snippet}

    {#snippet body()}
        <div class="d-flex ai-center bb bc-black-200 px24 pb12">
            <input
                bind:this={searchInput}
                bind:value={query}
                class="s-input"
                placeholder="Search documentation..."
                aria-label="Search documentation"
            />
        </div>

        <p class="v-visible-sr" aria-live="polite">{resultStatus}</p>

        <div class="search-results fl-shrink1 overflow-auto h5 hmx100 px24 py8">
            {#if results.length}
                <ul class="list-reset m0" aria-label="Search results">
                    {#each results as result (result.id)}
                        <li>
                            <a
                                class="search-result d-block p12 bar-sm fc-black-600 h:bg-black-100 h:fc-black-600"
                                href={resolve(result.path as `/${string}`)}
                                onclick={closeSearch}
                            >
                                <span class="d-block fw-bold mb2"
                                    >{result.title}</span
                                >
                                {#if result.description}
                                    <span
                                        class="d-block fs-caption truncate fc-black-500 lh-md"
                                        >{result.description}</span
                                    >
                                {/if}
                                <span class="d-block fs-fine fc-black-400 mt4"
                                    >{result.path}</span
                                >
                            </a>
                        </li>
                    {/each}
                </ul>
            {:else if hasQuery}
                <EmptyState title="No results found" class="p24">
                    {#snippet description()}
                        Try a different search term.
                    {/snippet}
                </EmptyState>
            {:else}
                <p class="m0 p12 fs-body1 fc-black-500">
                    Search components, guidelines, and foundations.
                </p>
            {/if}
        </div>
    {/snippet}
</Modal>

<style>
    :global(#docs-search-title) {
        padding-left: var(--su24);
        padding-right: var(--su24);
    }

    :global(#docs-search-description) {
        display: flex;
        flex-direction: column;
        margin-bottom: 0;
        min-height: 0;
        overflow: visible;
    }

    .search-results {
        min-height: 0;
    }

    .search-result {
        text-decoration: none;
    }
</style>

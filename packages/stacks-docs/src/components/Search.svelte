<script lang="ts">
    import { resolve } from "$app/paths";
    import { tick } from "svelte";
    import MiniSearch, { type SearchResult } from "minisearch";
    import { limitSearchResults } from "$lib/searchResults";

    import {
        Button,
        EmptyState,
        Icon,
        Modal,
    } from "@stackoverflow/stacks-svelte";
    import { IconSearch } from "@stackoverflow/stacks-icons";

    let searchInput = $state<HTMLInputElement>();
    let isOpen = $state(false);
    let query = $state("");
    let searchDocuments = $state<DocsSearchDocument[]>([]);
    let isLoading = $state(false);
    let hasLoaded = $state(false);
    let loadError = $state(false);
    let searchDocumentsRequest: Promise<void> | undefined;

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

    const resultSet = $derived.by(() => {
        const trimmedQuery = query.trim();
        if (!trimmedQuery) return limitSearchResults([]);

        const matches = miniSearch.search(trimmedQuery) as Array<
            SearchResult &
                Pick<DocsSearchDocument, "title" | "description" | "path">
        >;

        return limitSearchResults(matches);
    });
    const results = $derived(resultSet.results);

    const hasQuery = $derived(query.trim().length > 0);
    const resultStatus = $derived.by(() => {
        if (isLoading) return "Loading search.";
        if (loadError) return "Search is currently unavailable.";
        if (!hasQuery) return "";

        return `${resultSet.total} search ${resultSet.total === 1 ? "result" : "results"} found.`;
    });

    $effect(() => {
        if (!isOpen) return;

        tick().then(() => searchInput?.focus());
    });

    function toggleSearch() {
        isOpen = !isOpen;
        if (isOpen) void loadSearchDocuments();
    }

    function openSearch() {
        isOpen = true;
        void loadSearchDocuments();
    }

    function closeSearch() {
        isOpen = false;
        query = "";
    }

    function loadSearchDocuments() {
        if (hasLoaded) return Promise.resolve();
        if (searchDocumentsRequest) return searchDocumentsRequest;

        isLoading = true;
        loadError = false;
        searchDocumentsRequest = fetch(resolve("/search.json"))
            .then((response) => {
                if (!response.ok) throw new Error("Failed to load search data");
                return response.json() as Promise<DocsSearchDocument[]>;
            })
            .then((documents) => {
                searchDocuments = documents;
                hasLoaded = true;
            })
            .catch(() => {
                loadError = true;
                searchDocumentsRequest = undefined;
            })
            .finally(() => {
                isLoading = false;
            });

        return searchDocumentsRequest;
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

        <div
            class="search-results fl-shrink1 overflow-auto h5 hmx100 hmn0 px24 py8"
        >
            {#if isLoading}
                <EmptyState title="Loading search" class="p24">
                    {#snippet description()}
                        Preparing the documentation index.
                    {/snippet}
                </EmptyState>
            {:else if loadError}
                <EmptyState title="Search unavailable" class="p24">
                    {#snippet description()}
                        Close and reopen search to try again.
                    {/snippet}
                </EmptyState>
            {:else if results.length}
                <ul class="list-reset m0" aria-label="Search results">
                    {#each results as result (result.id)}
                        <li>
                            <a
                                class="d-block p12 bar-sm fc-black-600 h:bg-black-100 h:fc-black-600 td-none"
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
</style>

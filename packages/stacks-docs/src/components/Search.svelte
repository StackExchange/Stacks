<script lang="ts">
    import { tick } from "svelte";
    import MiniSearch, { type SearchResult } from "minisearch";

    import {
        Button,
        EmptyState,
        Icon,
        Menu,
        MenuItem,
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

    $effect(() => {
        if (!isOpen) return;

        tick().then(() => searchInput?.focus());
    });

    function toggleSearch() {
        isOpen = !isOpen;
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
            toggleSearch();
        }
    }

    async function handleSearchInputKeydown(event: KeyboardEvent) {
        if (event.key !== "ArrowDown" || !results.length) return;

        event.preventDefault();
        await tick();

        getResultActions()[0]?.focus();
    }

    function handleResultKeydown(event: KeyboardEvent, index: number) {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            focusResult(index + 1);
            return;
        }

        if (event.key !== "ArrowUp") return;

        event.preventDefault();

        if (index === 0) {
            searchInput?.focus();
            return;
        }

        focusResult(index - 1);
    }

    function focusResult(index: number) {
        const result = getResultActions()[index];
        result?.focus();
        result?.scrollIntoView({ block: "nearest" });
    }

    function getResultActions() {
        return Array.from(
            document.querySelectorAll<HTMLElement>(
                "#docs-search-description .s-menu--action"
            )
        );
    }
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<Button icon weight="clear" class="s-btn__xs mrn6 px6 h:fc-blue-400" onclick={toggleSearch}>
    <Icon src={IconSearch} />
    <span class="v-visible-sr">Search</span>
</Button>

<Modal
    id="docs-search"
    visible={isOpen}
    class="search-modal d-flex fd-column w100 wmx5 hs5 hmx-screen overflow-hidden pb0"
    i18nCloseButtonLabel="Close search"
    onclose={closeSearch}
>
    {#snippet header()}
        Search documentation
    {/snippet}

    {#snippet body()}
        <div class="d-flex ai-center bb bc-black-200 mxn4 px4 pt4 pb16">
            <input
                bind:this={searchInput}
                bind:value={query}
                class="s-input"
                placeholder="Search documentation..."
                aria-label="Search documentation"
                onkeydown={handleSearchInputKeydown}
            />
        </div>

        <div class="search-results fl-shrink1 overflow-auto h5 hmx100 py8">
            {#if results.length}
                <Menu class="m0">
                    {#each results as result, index (result.id)}
                        <MenuItem
                            href={result.path}
                            onclick={closeSearch}
                            onkeydown={(event) => handleResultKeydown(event, index)}
                        >
                            <span class="d-block fw-bold mb2">{result.title}</span>
                            {#if result.description}
                                <span class="d-block fs-caption truncate fc-black-500 lh-md"
                                    >{result.description}</span
                                >
                            {/if}
                            <span class="d-block fs-fine fc-black-400 mt4"
                                >{result.path}</span
                            >
                        </MenuItem>
                    {/each}
                </Menu>
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

    .search-results :global(.s-menu--action) {
        display: block;
    }
</style>

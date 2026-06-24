<script lang="ts">
    import { Button, Icon } from "@stackoverflow/stacks-svelte";
    import { IconList } from "@stackoverflow/stacks-icons";

    import ContentsList from "./ContentsList.svelte";

    let { toc = [] }: { toc: DocsTocItem[] } = $props();

    let isMobileTocOpen = $state(false);
    let activeId = $state<string | null>(null);

    const activeOffset = 120;
    const contentsNavId = "docs-contents";
    const contentsHeadingId = `${contentsNavId}-heading`;
    const mobileContentsNavId = "docs-contents-mobile";

    function flattenToc(items: DocsTocItem[]): DocsTocItem[] {
        return items.flatMap((item) => [
            item,
            ...flattenToc(item.children ?? []),
        ]);
    }

    const allItems = $derived(flattenToc(toc));

    function handleLinkClick(id: string) {
        activeId = id;
    }

    $effect(() => {
        const items = allItems;

        if (typeof window === "undefined" || items.length === 0) return;

        // The active item is the last heading that has scrolled past the
        // top threshold — this is more accurate than IntersectionObserver
        // which can fire too early when a heading enters the viewport.
        let frameId: number | null = null;

        function updateActive() {
            frameId = null;

            let found: string | null = items[0]?.id ?? null;

            for (const item of items) {
                const el = document.getElementById(item.id);
                if (!el) continue;
                if (el.getBoundingClientRect().top <= activeOffset) {
                    found = item.id;
                } else {
                    break; // headings are in DOM order — stop once we pass the threshold
                }
            }

            if (found && found !== activeId) {
                activeId = found;
            }
        }

        function queueUpdate() {
            if (frameId !== null) return;
            frameId = window.requestAnimationFrame(updateActive);
        }

        queueUpdate();
        window.addEventListener("scroll", queueUpdate, { passive: true });
        window.addEventListener("resize", queueUpdate);

        return () => {
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
            window.removeEventListener("scroll", queueUpdate);
            window.removeEventListener("resize", queueUpdate);
        };
    });
</script>

{#if toc.length > 0}
    <aside
        class="layout-toc fl-shrink0 w30 wmn2 wmx3 ff-stack-sans-headline md:d-none"
    >
        <div class="ps-sticky t0 mt6 py24 px32 overflow-auto hmx-screen">
            <div id={contentsNavId} class="bg-white">
                <ContentsList
                    {toc}
                    {activeId}
                    headingId={contentsHeadingId}
                    label="Contents"
                    onSelect={handleLinkClick}
                />
            </div>
        </div>
    </aside>

    <div
        class="d-none md:d-flex fd-column-reverse g8 ps-fixed b16 r16 w100 wmn2 wmx3 ff-stack-sans-headline"
    >
        <Button
            class="d-block ml-auto bar-md p8"
            selected={isMobileTocOpen}
            onclick={() => (isMobileTocOpen = !isMobileTocOpen)}
            aria-controls={mobileContentsNavId}
            aria-expanded={isMobileTocOpen}
            aria-label="Table of contents"
            title="Table of contents"
        >
            <Icon src={IconList} />
        </Button>

        {#if isMobileTocOpen}
            <div
                id={mobileContentsNavId}
                class="contents-mobile-popover bg-white bar-md bs-md overflow-auto p12 w100"
            >
                <ContentsList
                    {toc}
                    {activeId}
                    label="Contents"
                    onSelect={handleLinkClick}
                    showHeading={false}
                />
            </div>
        {/if}
    </div>
{/if}

<style>
    .contents-mobile-popover {
        max-height: calc(100vh - var(--su256));
    }
</style>

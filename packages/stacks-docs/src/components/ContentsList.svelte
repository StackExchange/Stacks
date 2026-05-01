<script lang="ts">
    import { Navigation, NavigationItem } from "@stackoverflow/stacks-svelte";

    type Props = {
        toc: DocsTocItem[];
        activeId: string | null;
        headingId?: string;
        label?: string;
        onSelect: (id: string) => void;
        showHeading?: boolean;
    };

    let {
        toc,
        activeId,
        headingId,
        label = "Contents",
        onSelect,
        showHeading = true,
    }: Props = $props();

</script>

{#if showHeading && headingId}
    <h2 id={headingId} class="fs-body2 fw-bold mb12 px6 fc-black-400">
        Contents
    </h2>
{/if}

<Navigation {label} orientation="vertical" listClass="contents-list">
    {#each toc as item, index (item.id)}
        <NavigationItem
            href="#{item.id}"
            text={item.value}
            selected={activeId === item.id}
            onclick={() => onSelect(item.id)}
            class={`contents-primary-item fs-caption bar0 fw-bold fc-black ai-start ${activeId === item.id ? "bg-black-100" : ""}`}
        />

        {#if item.children && item.children.length > 0}
            <li>
                <Navigation
                    label={`${item.value} sections`}
                    orientation="vertical"
                >
                    {#each item.children as child (child.id)}
                        <NavigationItem
                            href="#{child.id}"
                            text={child.value}
                            selected={activeId === child.id}
                            onclick={() => onSelect(child.id)}
                            class={`fs-caption bar0 ${activeId === child.id ? "bg-black-100" : ""}`}
                        />
                    {/each}
                </Navigation>
            </li>
        {/if}
    {/each}
</Navigation>

<style>
    :global(.contents-list) {
        counter-reset: contents-section;
    }

    :global(.contents-primary-item .s-navigation--item-text) {
        flex-direction: row;
    }

    :global(.contents-primary-item .s-navigation--item-text::before) {
        color: var(--theme-primary);
        content: counter(contents-section, decimal-leading-zero);
        counter-increment: contents-section;
        flex-shrink: 0;
        font-weight: var(--fw-bold);
        height: auto;
        margin-right: var(--su8);
        visibility: visible;
        width: var(--su24);
    }
</style>

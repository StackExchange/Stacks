<script lang="ts">
    type Props = {
        toc: DocsTocItem[];
        activeId: string | null;
        headingId?: string;
        onSelect: (id: string) => void;
        showHeading?: boolean;
    };

    let {
        toc,
        activeId,
        headingId,
        onSelect,
        showHeading = true,
    }: Props = $props();
</script>

{#if showHeading && headingId}
    <h2 id={headingId} class="fs-body2 fw-bold mb12 px6 fc-black-400">
        Contents
    </h2>
{/if}

<ul class="s-navigation s-navigation__vertical">
    {#each toc as item, index (item.id)}
        <li>
            <a
                href="#{item.id}"
                onclick={() => onSelect(item.id)}
                class="s-navigation--item fs-caption bar0 fw-bold fc-black ai-start"
                class:bg-black-100={activeId === item.id}
                class:is-active={activeId === item.id}
            >
                <span class="fl-shrink0 w24 d-flex ai-center fc-theme-primary">
                    {(index + 1).toString().padStart(2, "0")}
                </span>
                <span class="truncate">{item.value}</span>
            </a>

            {#if item.children && item.children.length > 0}
                <ul class="s-navigation s-navigation__vertical">
                    {#each item.children as child (child.id)}
                        <li>
                            <a
                                href="#{child.id}"
                                onclick={() => onSelect(child.id)}
                                class="s-navigation--item fs-caption bar0"
                                class:bg-black-100={activeId === child.id}
                                class:is-active={activeId === child.id}
                            >
                                {child.value}
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </li>
    {/each}
</ul>

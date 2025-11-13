<script lang="ts">
    import type { Snippet } from "svelte";
    import Button from "../Button/Button.svelte";

    interface Props {
        /**
         * The URL for the pagination item link
         */
        url: string;
        /**
         * Whether this pagination item is currently selected
         */
        selected?: boolean;
        /**
         * Whether this pagination item is the next page
         */
        itemNav?: boolean;
        /**
         * Callback fired when the pagination item is clicked
         */
        onclick?: (e: MouseEvent) => void;
        /**
         * Content rendered in the pagination item
         */
        children?: Snippet;
    }

    let {
        url,
        selected = false,
        itemNav = false,
        onclick,
        children,
    }: Props = $props();

    // Only used for the button variant so we're making it generic for now
    const getClasses = (selected: boolean, itemNav: boolean) => {
        let classes = "s-pagination--item";
        const base = classes;
        if (selected) {
            classes += ` is-selected`;
        }
        if (itemNav) {
            classes += ` ${base}__nav`;
        }
        return classes;
    };

    const classes = $derived(getClasses(selected, itemNav));
</script>

<li>
    {#if itemNav}
        <!-- Update variant from muted to tonal when button PR goes in-->
        <Button
            variant="muted"
            weight="filled"
            class={classes}
            aria-current={selected ? "page" : undefined}
            href={url}
            {onclick}
        >
            {@render children?.()}
        </Button>
    {:else}
        <a
            class="s-pagination--item"
            class:is-selected={selected}
            aria-current={selected ? "page" : undefined}
            href={url}
            {onclick}
        >
            {@render children?.()}
        </a>
    {/if}
</li>

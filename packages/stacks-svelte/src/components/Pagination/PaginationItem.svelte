<script lang="ts">
    import type { Snippet } from "svelte";

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
        isNext?: boolean;
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
        isNext = false,
        onclick,
        children,
    }: Props = $props();
</script>

<li>
    <a
        class="s-pagination--item"
        class:is-selected={selected}
        class:is-next={isNext}
        aria-current={selected ? "page" : undefined}
        href={url}
        {onclick}
    >
        {@render children?.()}
    </a>
</li>

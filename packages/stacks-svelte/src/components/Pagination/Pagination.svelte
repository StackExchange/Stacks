<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * Localized translation for the navigation aria-label
         */
        i18nNavigationLabel?: string;
        /**
         * Content rendered in the pagination
         */
        children?: Snippet;
    }

    let { i18nNavigationLabel = "Pagination", children }: Props = $props();
</script>

<nav aria-label={i18nNavigationLabel}>
    <ul class="list-reset s-pagination">
        {@render children?.()}
    </ul>
</nav>

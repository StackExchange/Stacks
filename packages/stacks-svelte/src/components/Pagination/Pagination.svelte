<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * Localized translation for the navigation aria-label
         */
        i18nNavigationLabel?: string;
        /**
         * ARIA role for the nav element. Use "presentation" in demo contexts.
         */
        role?: string;
        /**
         * Content rendered in the pagination
         */
        children?: Snippet;
    }

    let { i18nNavigationLabel = "Pagination", role = undefined, children }: Props = $props();
</script>

<nav aria-label={i18nNavigationLabel} {role}>
    <ul class="list-reset s-pagination">
        {@render children?.()}
    </ul>
</nav>

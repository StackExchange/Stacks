<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="ba bc-black-225 bar-sm p16 mb32 overflow-visible example-container">
    {@render children()}
</div>

<style>
    /* Reset to system sans-serif inside examples so rendered components
       reflect what users see in a product, not the docs' custom font. */
    .example-container {
        --ff-sans: -apple-system, BlinkMacSystemFont,
            "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
        font-family: var(--ff-sans);
        font-weight: initial;
    }
</style>

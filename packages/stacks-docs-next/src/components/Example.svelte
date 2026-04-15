<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="ba bc-black-225 bar-sm p16 mb32">
    {@render children()}
</div>

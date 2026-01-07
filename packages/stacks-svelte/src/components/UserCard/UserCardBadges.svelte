<script lang="ts">
    import type { Badge } from "./UserCard.svelte";

    interface Props {
        /**
         * Array of badges to display
         */
        badges?: Badge[];
    }

    const { badges }: Props = $props();
</script>

{#if badges && badges.length > 0}
    <div class="s-user-card--group">
        {#each badges as badge (badge)}
            <span class="s-badge s-badge__sm s-badge__{badge}">
                {badge}
            </span>
        {/each}
    </div>
{/if}

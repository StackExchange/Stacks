<script lang="ts">
    import Badge from "../Badge/Badge.svelte";
    import type { UserType } from "../Badge/Badge.svelte";

    interface Props {
        /**
         * Array of badges to display
         */
        badges?: UserType[];
    }

    const { badges }: Props = $props();
</script>

{#if badges && badges.length > 0}
    <div class="s-user-card--group">
        {#each badges as badge (badge)}
            <Badge type="user" userType={badge} size="sm" text={badge} />
        {/each}
    </div>
{/if}

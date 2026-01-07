<script lang="ts">
    import Bling from "../Bling/Bling.svelte";
    import type { Award } from "./UserCard.svelte";

    interface Props {
        /**
         * The reputation of the user
         */
        reputation?: string | number;

        /**
         * Count of gold award badges to display
         */
        gold?: Award;

        /**
         * Count of silver award badges to display
         */
        silver?: Award;

        /**
         * Count of bronze award badges to display
         */
        bronze?: Award;
    }

    const { reputation, gold, silver, bronze }: Props = $props();
</script>

{#if reputation || gold || silver || bronze}
    <ul class="s-user-card--group">
        {#if reputation}
            <li class="s-user-card--rep">
                <Bling name="reputation bling" />
                {reputation}
            </li>
        {/if}
        {#if gold}
            <li>
                <Bling type="gold" name="gold bling" />
                {gold}
            </li>
        {/if}
        {#if silver}
            <li>
                <Bling type="silver" name="silver bling" />
                {silver}
            </li>
        {/if}
        {#if bronze}
            <li>
                <Bling type="bronze" name="bronze bling" />
                {bronze}
            </li>
        {/if}
    </ul>
{/if}

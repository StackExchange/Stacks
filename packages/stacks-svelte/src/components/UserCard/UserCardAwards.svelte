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

        /**
         * Internationalization labels for awards
         */
        i18nAwardLabels?: {
            gold: (count: number | string) => string;
            silver: (count: number | string) => string;
            bronze: (count: number | string) => string;
        };
    }

    const { reputation, gold, silver, bronze, i18nAwardLabels }: Props =
        $props();

    const getAwardLabel = (
        type: "gold" | "silver" | "bronze",
        count: number | string
    ): string => {
        if (i18nAwardLabels?.[type]) {
            return i18nAwardLabels[type](count);
        }
        const countNum =
            typeof count === "string" ? parseInt(count, 10) : count;
        const plural = countNum !== 1 ? "s" : "";
        return `${count} ${type} award${plural}`;
    };
</script>

{#if reputation || gold || silver || bronze}
    <ul class="s-user-card--group">
        {#if reputation}
            <li class="s-user-card--rep">
                <Bling name="reputation bling" />
                <span class="v-visible-sr">Reputation: </span>
                {reputation}
            </li>
        {/if}
        {#if gold}
            <li>
                <Bling type="gold" name="gold bling" />
                <span class="v-visible-sr">{getAwardLabel("gold", gold)}</span>
                <span aria-hidden="true">{gold}</span>
            </li>
        {/if}
        {#if silver}
            <li>
                <Bling type="silver" name="silver bling" />
                <span class="v-visible-sr"
                    >{getAwardLabel("silver", silver)}</span
                >
                <span aria-hidden="true">{silver}</span>
            </li>
        {/if}
        {#if bronze}
            <li>
                <Bling type="bronze" name="bronze bling" />
                <span class="v-visible-sr"
                    >{getAwardLabel("bronze", bronze)}</span
                >
                <span aria-hidden="true">{bronze}</span>
            </li>
        {/if}
    </ul>
{/if}

<script lang="ts">
    interface Props {
        /**
         * tbd
         */
        count: number;

        /**
         * tbd
         */
        positive?: number;

        /**
         * tbd
         */
        negative?: number;

        /**
         * tbd
         */
        expanded?: boolean;

        /**
         * tbd
         */
        horizontal?: boolean;

        /**
         * tbd
         */
        i18nUpvote?: string | undefined;

        /**
         * tbd
         */
        i18nDownvote?: string | undefined;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    const {
        count,
        positive = undefined,
        negative = undefined,
        expanded,
        horizontal,
        i18nUpvote,
        i18nDownvote,
        class: className = "",
    }: Props = $props();

    const getClasses = (
        className: string,
        expanded?: boolean,
        horizontal?: boolean
    ) => {
        let classes = "s-vote";

        if (className) {
            classes += " " + className;
        }

        if (expanded) {
            classes += " s-vote__expanded";
        }

        if (horizontal) {
            classes += " s-vote__horizontal";
        }

        return classes;
    };

    const classes = $derived(getClasses(className, expanded, horizontal));
</script>

<div class={classes}>
    <button class="s-vote--btn">
        <span class="v-visible-sr">{i18nUpvote}</span>
        <!-- TODO SHINE add upvote icon(s) -->
    </button>
    <span class="s-vote--count">
        {#if positive}
            <span class="s-vote--positive">{positive}</span>
        {/if}
        <span class="s-vote--neutral">{count}</span>
        {#if negative}
            <span class="s-vote--negative">{negative}</span>
        {/if}
    </span>
    {#if !horizontal}
        <button class="s-vote--btn">
            <span class="v-visible-sr">{i18nDownvote}</span>
            <!-- TODO SHINE add upvote icon(s) -->
        </button>
    {/if}
</div>

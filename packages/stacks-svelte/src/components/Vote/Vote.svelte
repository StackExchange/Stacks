<script module lang="ts">
    export type Status = "upvoted" | "downvoted" | null;
</script>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import {
        IconVote16Up,
        IconVote16UpFill,
        IconVote16Down,
        IconVote16DownFill,
    } from "@stackoverflow/stacks-icons/icons";
    import { formatNumber } from "../../utils/format";

    interface Props {
        /**
         * The total vote count to display
         */
        total: number;

        /**
         * Number of upvotes. When provided along with downvotes, enables expandable vote counts.
         */
        upvotes?: number;

        /**
         * Number of downvotes. When provided along with upvotes, enables expandable vote counts.
         */
        downvotes?: number;

        /**
         * Display the vote component in horizontal layout. When true, hides the downvote button.
         */
        horizontal?: boolean;

        /**
         * Current vote status. Use "upvoted" or "downvoted" to show filled icons, or null for no vote.
         */
        status?: Status;

        /**
         * Text to display when total is 0 and no vote has been cast. Defaults to "Vote".
         */
        i18nVote?: string;

        /**
         * Screen reader text for the upvote button. Defaults to "Upvote".
         */
        i18nUpvote?: string | undefined;

        /**
         * Screen reader text for the upvote button when upvoted. Defaults to "Upvoted".
         */
        i18nUpvoted?: string | undefined;

        /**
         * Screen reader text for the downvote button. Defaults to "Downvote".
         */
        i18nDownvote?: string | undefined;

        /**
         * Screen reader text for the downvote button when downvoted. Defaults to "Downvoted".
         */
        i18nDownvoted?: string | undefined;

        /**
         * Screen reader text for the vote count when not expanded. Defaults to "Show vote details".
         */
        i18nExpand?: string | undefined;

        /**
         * Screen reader text for the vote count when expanded. Defaults to "Hide vote details".
         */
        i18nExpanded?: string | undefined;
        /**
         * Callback fired when the upvote button is clicked.
         * Should return a promise that resolves on success.
         */
        onupvote?: () => Promise<void>;

        /**
         * Callback fired when the downvote button is clicked.
         * Should return a promise that resolves on success.
         */
        ondownvote?: () => Promise<void>;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    const {
        total,
        upvotes = undefined,
        downvotes = undefined,
        horizontal,
        status = null,
        i18nVote = "Vote",
        i18nUpvote = "Upvote",
        i18nUpvoted = "Upvoted",
        i18nDownvote = "Downvote",
        i18nDownvoted = "Downvoted",
        i18nExpand = "Show vote details",
        i18nExpanded = "Hide vote details",
        onupvote = () => Promise.resolve(),
        ondownvote = () => Promise.resolve(),
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

    let expanded = $state(false);
    let expandable = $derived(
        upvotes !== undefined && downvotes !== undefined && !horizontal
    );
    let currentCount = $state(total || 0);
    let currentStatus = $state(status);
    const classes = $derived(getClasses(className, expanded, horizontal));

    async function handleVote(
        type: "upvoted" | "downvoted",
        callback: () => Promise<void>
    ) {
        const previousCount = currentCount;
        const previousStatus = currentStatus;
        const increment = type === "upvoted" ? 1 : -1;

        if (currentStatus === type) {
            currentStatus = null;
            currentCount -= increment;
        } else {
            currentCount += currentStatus ? increment * 2 : increment;
            currentStatus = type;
        }

        try {
            await callback();
        } catch {
            // Revert on failure
            currentCount = previousCount;
            currentStatus = previousStatus;
            // Don't re-throw - the error should be handled by the callback if needed
        }
    }
</script>

<div class={classes}>
    <button class="s-vote--btn" onclick={() => handleVote("upvoted", onupvote)}>
        {#if currentStatus === "upvoted"}
            <Icon src={IconVote16UpFill} />
            <span class="v-visible-sr">{i18nUpvoted}</span>
        {:else}
            <Icon src={IconVote16Up} />
            <span class="v-visible-sr">{i18nUpvote}</span>
        {/if}
        {#if horizontal}
            <span class="s-vote--votes">
                <span class="s-vote--total">
                    {currentCount !== 0 || currentStatus !== null
                        ? formatNumber(currentCount)
                        : i18nVote}
                </span>
            </span>
        {/if}
    </button>
    {#if !horizontal}
        <svelte:element
            this={expandable ? "button" : "span"}
            class="s-vote--votes"
            role={expandable ? "button" : undefined}
            onclick={() => (expandable ? (expanded = !expanded) : null)}
        >
            {#if upvotes !== undefined}
                <span class="s-vote--upvotes">+{formatNumber(upvotes)}</span>
            {/if}
            <span class="s-vote--total">
                {currentCount !== 0 || currentStatus !== null
                    ? formatNumber(currentCount)
                    : i18nVote}
            </span>
            {#if downvotes !== undefined}
                <span class="s-vote--downvotes">-{formatNumber(downvotes)}</span
                >
            {/if}
            {#if expandable}
                <span class="v-visible-sr">
                    {expanded ? i18nExpanded : i18nExpand}
                </span>
            {/if}
        </svelte:element>
        <button
            class="s-vote--btn"
            onclick={() => handleVote("downvoted", ondownvote)}
        >
            {#if currentStatus === "downvoted"}
                <Icon src={IconVote16DownFill} />
                <span class="v-visible-sr">{i18nDownvoted}</span>
            {:else}
                <Icon src={IconVote16Down} />
                <span class="v-visible-sr">{i18nDownvote}</span>
            {/if}
        </button>
    {/if}
</div>

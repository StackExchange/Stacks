<script module lang="ts">
    export type Status = "upvoted" | "downvoted" | null;
</script>

<script lang="ts">
    import clsx from "clsx";
    import type { ClassValue } from "svelte/elements";
    import Icon from "../Icon/Icon.svelte";
    import {
        IconVote16Up,
        IconVote16UpFill,
        IconVote16Down,
        IconVote16DownFill,
    } from "@stackoverflow/stacks-icons/icons";
    import { formatCount } from "@stackoverflow/stacks-utils";

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
         * Display the vote component in horizontal layout.
         */
        horizontal?: boolean;

        /**
         * Display the vote component with only upvote button.
         */
        upvoteOnly?: boolean;

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
         */
        onupvoteclick?: () => void;

        /**
         * Callback fired when the downvote button is clicked.
         */
        ondownvoteclick?: () => void;

        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;
    }

    const {
        total,
        upvotes,
        downvotes,
        horizontal,
        upvoteOnly = false,
        status = null,
        i18nVote = "Vote",
        i18nUpvote = "Upvote",
        i18nUpvoted = "Upvoted",
        i18nDownvote = "Downvote",
        i18nDownvoted = "Downvoted",
        i18nExpand = "Show vote details",
        i18nExpanded = "Hide vote details",
        onupvoteclick = () => {},
        ondownvoteclick = () => {},
        class: className = "",
    }: Props = $props();

    const getClasses = (
        className: ClassValue,
        expanded: boolean,
        horizontal?: boolean
    ) => {
        const base = "s-vote";
        return clsx(
            base,
            className,
            expanded && `${base}__expanded`,
            horizontal && `${base}__horizontal`
        );
    };

    let expanded = $state(false);
    let expandable = $derived(
        upvotes !== undefined && downvotes !== undefined && !horizontal
    );
    const classes = $derived(getClasses(className, expanded, horizontal));
</script>

{#snippet votes()}
    <svelte:element
        this={expandable ? "button" : "span"}
        class="s-vote--votes"
        role={expandable ? "button" : undefined}
        onclick={() => (expandable ? (expanded = !expanded) : null)}
    >
        {#if upvotes !== undefined}
            <span class="s-vote--upvotes">+{formatCount(upvotes, 1000)}</span>
        {/if}
        <span class="s-vote--total">
            {total !== 0 ? formatCount(total, 1000) : i18nVote}
        </span>
        {#if downvotes !== undefined}
            <span class="s-vote--downvotes"
                >-{formatCount(downvotes, 1000)}</span
            >
        {/if}
        {#if expandable}
            <span class="v-visible-sr">
                {expanded ? i18nExpanded : i18nExpand}
            </span>
        {/if}
    </svelte:element>
{/snippet}

<div class={classes}>
    <button class="s-vote--btn" onclick={onupvoteclick}>
        {#if status === "upvoted"}
            <Icon src={IconVote16UpFill} />
            <span class="v-visible-sr">{i18nUpvoted}</span>
        {:else}
            <Icon src={IconVote16Up} />
            <span class="v-visible-sr">{i18nUpvote}</span>
        {/if}
        {#if upvoteOnly}
            {@render votes()}
        {/if}
    </button>
    {#if !upvoteOnly}
        {@render votes()}
        <button class="s-vote--btn" onclick={ondownvoteclick}>
            {#if status === "downvoted"}
                <Icon src={IconVote16DownFill} />
                <span class="v-visible-sr">{i18nDownvoted}</span>
            {:else}
                <Icon src={IconVote16Down} />
                <span class="v-visible-sr">{i18nDownvote}</span>
            {/if}
        </button>
    {/if}
</div>

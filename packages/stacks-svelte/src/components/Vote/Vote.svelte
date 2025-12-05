<script module lang="ts">
    export type status = "upvoted" | "downvoted" | null;
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
         * tbd
         */
        count: number;

        /**
         * tbd
         */
        upvotes?: number;

        /**
         * tbd
         */
        downvotes?: number;

        /**
         * tbd
         */
        horizontal?: boolean;

        /**
         * tbd
         */
        status?: "upvoted" | "downvoted" | null;

        /**
         * tbd
         */
        i18nVote?: string;

        /**
         * tbd
         */
        i18nUpvote?: string | undefined;

        /**
         * tbd
         */
        i18nUpvoted?: string | undefined;

        /**
         * tbd
         */
        i18nDownvote?: string | undefined;

        /**
         * tbd
         */
        i18nDownvoted?: string | undefined;

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
        count,
        upvotes = undefined,
        downvotes = undefined,
        horizontal,
        status = null,
        i18nVote = "Vote",
        i18nUpvote = "Upvote",
        i18nUpvoted = "Upvoted",
        i18nDownvote = "Downvote",
        i18nDownvoted = "Downvoted",
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
    let currentCount = $state(count);
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
        } catch (error) {
            // Revert on failure
            currentCount = previousCount;
            currentStatus = previousStatus;
            throw error;
        }
    }
</script>

<div class={classes}>
    <button
        class="s-vote--btn"
        on:click={() => handleVote("upvoted", onupvote)}
    >
        {#if currentStatus === "upvoted"}
            <span class="v-visible-sr">{i18nUpvoted}</span>
            <Icon src={IconVote16UpFill} />
        {:else}
            <span class="v-visible-sr">{i18nUpvote}</span>
            <Icon src={IconVote16Up} />
        {/if}
    </button>
    <svelte:element
        this={expandable ? "button" : "span"}
        class="s-vote--count"
        on:click={() => (expandable ? (expanded = !expanded) : null)}
    >
        {#if upvotes !== undefined}
            <span class="s-vote--count--upvotes">+{formatNumber(upvotes)}</span>
        {/if}
        <span class="s-vote--count--votes">
            {currentCount !== undefined ? formatNumber(currentCount) : i18nVote}
        </span>
        {#if downvotes !== undefined}
            <span class="s-vote--count--downvotes"
                >-{formatNumber(downvotes)}</span
            >
        {/if}
    </svelte:element>
    {#if !horizontal}
        <button
            class="s-vote--btn"
            on:click={() => handleVote("downvoted", ondownvote)}
        >
            {#if currentStatus === "downvoted"}
                <span class="v-visible-sr">{i18nDownvoted}</span>
                <Icon src={IconVote16DownFill} />
            {:else}
                <span class="v-visible-sr">{i18nDownvote}</span>
                <Icon src={IconVote16Down} />
            {/if}
        </button>
    {/if}
</div>

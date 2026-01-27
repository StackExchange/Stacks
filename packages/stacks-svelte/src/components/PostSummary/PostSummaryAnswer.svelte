<script module lang="ts">
    export type ExcerptSize = "sm" | "md" | "lg" | undefined;
    export type State = "deleted" | "ignored" | "watched" | undefined;
</script>

<script lang="ts">
    import PostSummaryStatsItem from "./PostSummaryStatsItem.svelte";
    import Excerpt from "./PostSummaryExcerpt.svelte";
    import {
        IconAnswer16Fill,
        IconCheck,
        IconVote16Up,
    } from "@stackoverflow/stacks-icons/icons";
    import Badge from "../Badge/Badge.svelte";
    import Link from "../Link/Link.svelte";
    import UserCard from "../UserCard/UserCard.svelte";
    import UserCardTime from "../UserCard/UserCardTime.svelte";
    import UserCardBling from "../UserCard/UserCardBling.svelte";
    import Icon from "../Icon/Icon.svelte";

    export interface Props {
        /**
         * A brief excerpt of the answer
         */
        excerpt: string;

        /**
         * The URL to navigate to when the "View answers" link is clicked
         */
        href: string;

        /**
         * The timestamp for the answer
         */
        timestamp: string;

        /**
         * Avatar image source of answer's author
         */
        userAvatar: string;

        /**
         * The display name of the answer author
         */
        userName: string;

        /**
         * Link to the answer author's profile
         */
        userProfileUrl: string;

        /**
         * The reputation of the answer author
         */
        userReputation: string | number;

        /**
         * Count of votes on the answer
         */
        votes: number | string;

        /**
         * Display the "Accepted answer" stats item
         */
        accepted?: boolean;

        /**
         * The text for "Accepted answer" stats item
         */
        i18nAcceptedAnswerText?: string;

        /**
         * Text for the votes stats item unit
         */
        i18nVotesUnit?: string;

        /**
         * The text for "View answers" link
         */
        i18nViewAnswersText?: string;
    }

    const {
        excerpt,
        href,
        timestamp,
        userAvatar,
        userName,
        userProfileUrl,
        userReputation,
        votes,
        accepted = false,
        i18nAcceptedAnswerText = "Accepted answer",
        i18nVotesUnit: providedI18nVotesUnit,
        i18nViewAnswersText = "View answers",
    }: Props = $props();

    const getClasses = (accepted: boolean) => {
        const base = "s-post-summary--answer";
        let classes = base;

        if (accepted) {
            classes += ` ${base}__accepted`;
        }

        return classes;
    };

    const i18nVotesUnit = $derived(
        providedI18nVotesUnit ?? (Number(votes) === 1 ? "vote" : "votes")
    );

    const classes = $derived(getClasses(accepted));
</script>

<div class={classes}>
    <div class="s-post-summary--content-meta">
        <!-- User card -->
        <UserCard
            profileUrl={userProfileUrl}
            size="sm"
            avatar={userAvatar}
            name={userName}
        >
            {#snippet time()}
                <UserCardTime text={timestamp} />
            {/snippet}
        </UserCard>
        <!-- Stats (sm) -->
        <div class="s-post-summary--stats">
            <div class="s-post-summary--stats-votes">
                <Icon src={IconVote16Up} />
                {votes || "0"}
            </div>
            {#if accepted}
                <div class="s-post-summary--stats-answers">
                    <Icon
                        src={IconAnswer16Fill}
                        class="s-post-summary--stats-answers--icon"
                    />
                    {i18nAcceptedAnswerText}
                </div>
            {/if}
        </div>
    </div>
    <Excerpt {excerpt} truncate={false} />
</div>

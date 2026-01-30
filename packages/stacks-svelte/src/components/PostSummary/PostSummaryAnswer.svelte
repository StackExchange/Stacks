<script module lang="ts">
    export type ExcerptSize = "sm" | "md" | "lg" | undefined;
    export type State = "deleted" | "ignored" | "watched" | undefined;
</script>

<script lang="ts">
    import type { SvelteDate } from "svelte/reactivity";
    import Excerpt from "./PostSummaryExcerpt.svelte";
    import {
        IconAnswer16Fill,
        IconVote16Up,
    } from "@stackoverflow/stacks-icons/icons";
    import UserCard from "../UserCard/UserCard.svelte";
    import UserCardTime from "../UserCard/UserCardTime.svelte";
    import Icon from "../Icon/Icon.svelte";
    import UserCardBling from "../UserCard/UserCardBling.svelte";
    import { formatCount } from "@stackoverflow/stacks-utils";

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
        /**
         * The timestamp for the answer
         */
        timestamp: Date | SvelteDate | string;

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
        votes: number;

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
        i18nReputationBlingName?: string;
    }

    const {
        excerpt,
        timestamp,
        userAvatar,
        userName,
        userProfileUrl,
        userReputation,
        votes,
        accepted = false,
        i18nAcceptedAnswerText = "Accepted answer",
        i18nReputationBlingName = "reputation bling",
    }: Props = $props();

    const getClasses = (accepted: boolean) => {
        const base = "s-post-summary--answer";
        let classes = base;

        if (accepted) {
            classes += ` ${base}__accepted`;
        }

        return classes;
    };

    const classes = $derived(getClasses(accepted));
</script>

{#snippet userBling()}
    {#if userReputation}
        <UserCardBling
            name={i18nReputationBlingName}
            type="rep"
            text={userReputation}
        />
    {/if}
{/snippet}

<div class={classes}>
    <div class="s-post-summary--content-meta">
        <UserCard
            profileUrl={userProfileUrl}
            size="sm"
            avatar={userAvatar}
            name={userName}
            blings={userBling}
        >
            {#snippet time()}
                <UserCardTime {timestamp} />
            {/snippet}
        </UserCard>
        <div class="s-post-summary--stats">
            <div class="s-post-summary--stats-votes">
                <Icon src={IconVote16Up} />
                {formatCount(votes || 0)}
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

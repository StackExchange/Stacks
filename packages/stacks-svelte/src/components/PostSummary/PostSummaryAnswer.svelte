<script module lang="ts">
    export type ExcerptSize = "sm" | "md" | "lg" | undefined;
    export type State = "deleted" | "ignored" | "watched" | undefined;
</script>

<script lang="ts">
    import PostSummaryStatsItem from "./PostSummaryStatsItem.svelte";
    import { IconCheck } from "@stackoverflow/stacks-icons/icons";
    import Badge from "../Badge/Badge.svelte";
    import Link from "../Link/Link.svelte";
    import UserCard from "../UserCard/UserCard.svelte";
    import UserCardTime from "../UserCard/UserCardTime.svelte";
    import Bling from "../Bling/Bling.svelte";

    /**
     * A brief excerpt of the answer
     */
    export let excerpt: string;

    /**
     * The URL to navigate to when the "View answers" link is clicked
     */
    export let href: string;

    /**
     * The timestamp for the answer
     */
    export let timestamp: string;

    /**
     * Avatar image source of answer's author
     */
    export let userAvatar: string;

    /**
     * The display name of the answer author
     */
    export let userName: string;

    /**
     * Link to the answer author's profile
     */
    export let userProfileUrl: string;

    /**
     * The reputation of the answer author
     */
    export let userReputation: string | number;

    /**
     * Count of votes on the answer
     */
    export let votes: number | string;

    /**
     * Display the "Accepted answer" stats item
     */
    export let accepted: boolean = false;

    /**
     * The text for "Accepted answer" stats item
     */
    export let i18nAcceptedAnswerText = "Accepted answer";

    /**
     * Text for the votes stats item unit
     */
    export let i18nVotesUnit: string = Number(votes) === 1 ? "vote" : "votes";

    /**
     * The text for "View answers" link
     */
    export let i18nViewAnswersText = "View answers";
</script>

<div class="s-post-summary--answer">
    <div class="s-post-summary--stats">
        <PostSummaryStatsItem
            variant="votes"
            unit={i18nVotesUnit}
            number={votes}
        />
        {#if accepted}
            <Badge
                text={i18nAcceptedAnswerText}
                type="state"
                state="success"
                icon={IconCheck}
                squared
                class="s-post-summary--stats-item"
            />
        {/if}
    </div>
    <p class="s-post-summary--answer-excerpt">{excerpt}</p>
    <div class="s-post-summary--meta">
        <Link {href}>{i18nViewAnswersText}</Link>
        {#snippet time()}
            <UserCardTime text={timestamp} />
        {/snippet}
        {#snippet awards()}
            {#if userReputation}
                <ul class="s-user-card--group">
                    <li class="s-user-card--rep">
                        <Bling name="reputation bling" type="rep" size="sm" />
                        {userReputation}
                    </li>
                </ul>
            {/if}
        {/snippet}
        <UserCard
            profileUrl={userProfileUrl}
            size="sm"
            avatar={userAvatar}
            name={userName}
            {time}
            {awards}
        />
    </div>
</div>

<script module lang="ts">
    export type ContentTypeName =
        | "announcement"
        | "how-to-guide"
        | "knowledge-article"
        | "policy";
    export type ContentType =
        | {
              name: ContentTypeName;
              url: string;
          }
        | undefined;
    export type ExcerptLines = 0 | 1 | 2 | 3;
    export type State =
        | "archived"
        | "closed"
        | "draft"
        | "deleted"
        | "pinned"
        | "review"
        | undefined;
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import ContentTypeBadge from "./PostSummaryContentType.svelte";
    import Excerpt from "./PostSummaryExcerpt.svelte";
    import StateBadge from "./PostSummaryStateBadge.svelte";
    import UserCard from "../UserCard/UserCard.svelte";
    import UserCardTime from "../UserCard/UserCardTime.svelte";
    import UserCardBling from "../UserCard/UserCardBling.svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconShield } from "@stackoverflow/stacks-icons-legacy/icons";
    import {
        IconAnswer16,
        IconAnswer16Fill,
        IconVote16Up,
    } from "@stackoverflow/stacks-icons/icons";

    export interface Props {
        /**
         * The URL to navigate to when the post title is clicked
         */
        href: string;

        /**
         * The title of the post
         */
        title: string;

        /**
         * The timestamp for the post
         */
        timestamp: string;

        /**
         * Avatar image source of post author
         */
        userAvatar: string;

        /**
         * The display name of the post author
         */
        userName: string;

        /**
         * Link to the post author's profile
         */
        userProfileUrl: string;

        /**
         * The reputation of the post author
         */
        userReputation: number;

        /**
         * Apply styling to the "answers" stats item to indicate the post has an accepted answer
         */
        acceptedAnswer?: boolean;

        /**
         * Count of answers on the post
         */
        answers?: number;

        /**
         * The bounty placed on the post
         */
        bounty?: number;

        /**
         * Count of comments on the post
         */
        comments?: number;

        /**
         * The content type of the post to be indicated on the post summary
         */
        contentType?: ContentType;

        /**
         * A brief excerpt of the post content
         */
        excerpt?: string;

        /**
         * The size of the excerpt text
         * @type {0 | 1 | 2 | 3} ExcerptLines
         */
        excerptLines?: ExcerptLines;

        /**
         * Indicate a post is by displaying a shield icon before the title
         */
        gated?: boolean;

        /**
         * The readtime on the post
         */
        readTime?: string;

        /**
         * The state of the post which affects its styling
         * @type {"archived" | "closed" | "draft" | "deleted" | "pinned" | "review" | undefined} State
         */
        state?: State;

        /**
         * Count of views on the post
         */
        views?: number;

        /**
         * Count of votes on the post
         */
        votes?: number;

        /**
         * Label to be provided for the "accepted answer" checkmark icon on the "answers" stats item
         */
        i18nAcceptedAnswerIconTitle?: string;

        /**
         * Text for the views stats item unit
         */
        i18nAnswersUnit?: string;

        /**
         * Text for the bounty stats item unit
         */
        i18nBountyUnit?: string;

        /**
         * Text for the comments stats item unit
         */
        i18nCommentsUnit?: string;

        /**
         * Text for the content type
         */
        i18nContentTypeText?: string;

        /**
         * Text on gated posts for the shield icon that preceeds the post title
         */
        i18nGatedTitle?: string;

        /**
         * Text for the state badge
         */
        i18nStateBadgeText?: string;

        /**
         * Text for the views stats item unit
         */
        i18nViewsUnit?: string;

        /**
         * Text for the votes stats item unit
         */
        i18nVotesUnit?: string;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Snippet for tags
         */
        tags?: Snippet | undefined;

        /**
         * Snippet for answer previews
         */
        answerPreviews?: Snippet | undefined;
    }

    const {
        href,
        title,
        timestamp,
        userAvatar,
        userName,
        userProfileUrl,
        userReputation,
        acceptedAnswer = false,
        answers = undefined,
        bounty = undefined,
        comments = undefined,
        contentType = undefined,
        excerpt = "",
        excerptLines = 3,
        gated = false,
        readTime = undefined,
        state = undefined,
        views = undefined,
        votes = undefined,
        i18nAcceptedAnswerIconTitle = "Has accepted answer",
        i18nAnswersUnit: providedI18nAnswersUnit,
        i18nBountyUnit = "bounty",
        i18nCommentsUnit: providedI18nCommentsUnit = undefined,
        i18nContentTypeText = undefined,
        i18nGatedTitle = undefined,
        i18nStateBadgeText = undefined,
        i18nViewsUnit: providedI18nViewsUnit = undefined,
        i18nVotesUnit: providedI18nVotesUnit = undefined,
        class: className = "",
        tags,
        answerPreviews,
    }: Props = $props();

    const i18nAnswersUnit = $derived(
        providedI18nAnswersUnit ?? (answers === 1 ? "answer" : "answers")
    );

    const i18nCommentsUnit = $derived(
        providedI18nCommentsUnit ?? (comments === 1 ? "comment" : "comments")
    );

    const i18nViewsUnit = $derived(
        providedI18nViewsUnit ?? (views === 1 ? "view" : "views")
    );

    const i18nVotesUnit = $derived(
        providedI18nVotesUnit ?? (votes === 1 ? "vote" : "votes")
    );

    const getClasses = (
        className: string,
        state: State,
        acceptedAnswer: boolean
    ) => {
        const base = "s-post-summary";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (acceptedAnswer) {
            classes += ` ${base}__answered`;
        }

        if (state === "deleted") {
            classes += ` ${base}__${state}`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, state, acceptedAnswer));
</script>

<div class={classes}>
    <div class="s-post-summary--stats s-post-summary--sm-hide">
        <div class="s-post-summary--stats-votes">
            {#if Number(votes) > 0}+{/if}{votes || "0"}
            <span class="v-visible-sr">{i18nVotesUnit}</span>
        </div>
        <div class="s-post-summary--stats-answers">
            {#if acceptedAnswer}
                <Icon
                    src={IconAnswer16Fill}
                    title={i18nAcceptedAnswerIconTitle}
                />
            {:else}
                <Icon src={IconAnswer16} />
            {/if}
            {answers || "0"}
            <span class="v-visible-sr">{i18nAnswersUnit}</span>
        </div>
        {#if bounty}
            <div class="s-post-summary--stats-bounty">
                <span>+</span>
                {bounty}
                <span class="v-visible-sr">{i18nBountyUnit}</span>
            </div>
        {/if}
    </div>
    <div class="s-post-summary--content">
        <div class="s-post-summary--sm-show">
            {#if state && state !== "deleted"}
                <StateBadge {state} i18nText={i18nStateBadgeText} />
            {/if}
        </div>
        <div class="s-post-summary--content-meta">
            {#snippet userBling()}
                {#if userReputation}
                    <!-- TODO add i18n text for reputation bling name -->
                    <UserCardBling
                        name="reputation bling"
                        type="rep"
                        text={userReputation}
                    />
                {/if}
            {/snippet}
            <UserCard
                profileUrl={userProfileUrl}
                size="sm"
                avatar={userAvatar}
                name={userName}
                blings={userBling}
            >
                {#snippet time()}
                    <UserCardTime text={timestamp} {timestamp} />
                {/snippet}
            </UserCard>
            <div class="s-post-summary--stats s-post-summary--sm-show">
                <div class="s-post-summary--stats-votes">
                    <Icon src={IconVote16Up} />
                    {votes || "0"}
                </div>
                <div class="s-post-summary--stats-answers">
                    {#if acceptedAnswer}
                        <Icon src={IconAnswer16Fill} />
                    {:else}
                        <Icon src={IconAnswer16} />
                    {/if}
                    {answers || "0"}
                    <span class="v-visible-sr">{i18nAnswersUnit}</span>
                </div>
                {#if bounty}
                    <div class="s-post-summary--stats-bounty">
                        <span>+</span>
                        {bounty}
                    </div>
                {/if}
            </div>
            <div class="s-post-summary--content-meta-item">
                {views || "0"}
                {i18nViewsUnit}
            </div>
            {#if comments}
                <div class="s-post-summary--content-meta-item">
                    {comments}
                    {i18nCommentsUnit}
                </div>
            {/if}
            {#if readTime}
                <div class="s-post-summary--content-meta-item">
                    {readTime}
                </div>
            {/if}
            {#if state && state !== "deleted"}
                <div class="s-post-summary--sm-hide ml-auto">
                    <StateBadge {state} i18nText={i18nStateBadgeText} />
                </div>
            {/if}
        </div>
        <div class="s-post-summary--title">
            {#if gated}
                <Icon
                    src={IconShield}
                    class="s-post-summary--title-icon"
                    title={i18nGatedTitle}
                />
            {/if}
            <a class="s-post-summary--title-link" {href}>
                <!-- TODO SHINE include badge icon -->
                {title}
            </a>
        </div>
        {#if excerpt}
            <Excerpt {excerpt} lines={excerptLines} />
        {/if}
        {#if contentType || tags}
            <div class="s-post-summary--tags">
                {#if contentType}
                    <ContentTypeBadge
                        name={contentType.name}
                        href={contentType.url}
                        {i18nContentTypeText}
                    />
                {/if}
                {#if tags}
                    {@render tags()}
                {/if}
            </div>
        {/if}
        {#if answerPreviews}
            <div class="s-post-summary--answers">
                {@render answerPreviews()}
            </div>
        {/if}
    </div>
</div>

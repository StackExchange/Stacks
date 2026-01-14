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
    export type ExcerptSize = "sm" | "md" | "lg" | undefined;
    export type Hotness = "warm" | "hot" | "supernova" | undefined;
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
    import PostSummaryContentType from "./PostSummaryContentType.svelte";
    import PostSummaryStateBadge from "./PostSummaryStateBadge.svelte";
    import PostSummaryStatsItem from "./PostSummaryStatsItem.svelte";
    import Badge from "../Badge/Badge.svelte";
    import Button from "../Button/Button.svelte";
    import Icon from "../Icon/Icon.svelte";
    import Excerpt from "./PostSummaryExcerpt.svelte";
    import Link from "../Link/Link.svelte";
    import Popover from "../Popover/Popover.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";
    import UserCard from "../UserCard/UserCard.svelte";
    import UserCardTime from "../UserCard/UserCardTime.svelte";
    import UserCardBling from "../UserCard/UserCardBling.svelte";
    import {
        IconShield,
        IconEllipsisVertical,
    } from "@stackoverflow/stacks-icons-legacy/icons";
    import { IconCheck } from "@stackoverflow/stacks-icons/icons";

    /**
     * The URL to navigate to when the post title is clicked
     */
    export let href: string;

    /**
     * The title of the post
     */
    export let title: string;

    /**
     * The timestamp for the post
     */
    export let timestamp: string;

    /**
     * Avatar image source of post author
     */
    export let userAvatar: string;

    /**
     * The display name of the post author
     */
    export let userName: string;

    /**
     * Link to the post author's profile
     */
    export let userProfileUrl: string;

    /**
     * The reputation of the post author
     */
    export let userReputation: string | number;

    /**
     * Apply styling to the "answers" stats item to indicate the post has an accepted answer
     */
    export let acceptedAnswer: boolean = false;

    /**
     * Show an activity indicator before the title
     */
    export let activityIndicator: boolean = false;

    /**
     * Count of answers on the post
     */
    export let answers: number | string | undefined = undefined;

    /**
     * The bounty placed on the post
     */
    export let bounty: number | undefined = undefined;

    /**
     * The content type of the post to be indicated on the post summary
     */
    export let contentType: ContentType = undefined;

    /**
     * A brief excerpt of the post content
     */
    export let excerpt: string | undefined = "";

    /**
     * The size of the excerpt text
     * @type {"sm" | "md" | "lg" | undefined} ExcerptSize
     */
    export let excerptSize: ExcerptSize = undefined;

    /**
     * Indicate a post is by displaying a shield icon before the title
     */
    export let gated: boolean = false;

    /**
     * Applies a "hot" styling to the views stats item
     * @type {"warm" | "hot" | "supernova" | undefined} Hotness
     */
    export let hotness: Hotness = undefined;

    /**
     * Apply "ignored" styling
     */
    export let ignored: boolean = false;

    /**
     * Apply "minimal" styling
     */
    export let minimal: boolean = false;

    /**
     * The readtime on the post
     */
    export let readTime: string | undefined = undefined;

    /**
     * The state of the post which affects its styling
     * @type {"archived" | "closed" | "draft" | "deleted" | "pinned" | "review" | undefined} State
     */
    export let state: State = undefined;

    /**
     * Count of views on the post
     */
    export let views: number | string | undefined = undefined;

    /**
     * Count of votes on the post
     */
    export let votes: number | string | undefined = undefined;

    /**
     * Apply "watched" styling
     */
    export let watched: boolean = false;

    /**
     * Label to be provided for the "accepted answer" checkmark icon on the "answers" stats item
     */
    export let i18nAcceptedAnswerIconTitle: string | undefined =
        "Has accepted answer";

    /**
     * Text for the activity indicator
     */
    export let i18nActivityIndicatorText: string = "New activity";

    /**
     * Text for the views stats item unit
     */
    export let i18nAnswersUnit: string =
        Number(answers) === 1 ? "answer" : "answers";

    /**
     * Text for the action menu button
     */
    export let i18nActionMenuButtonText: string = "Menu";

    /**
     * Text for the content type
     */
    export let i18nContentTypeText: string | undefined = undefined;

    /**
     * Text on gated posts for the shield icon that preceeds the post title
     */
    export let i18nGatedTitle: string | undefined = undefined;

    /**
     * Text for the state badge
     */
    export let i18nStateBadgeText: string | undefined = undefined;

    /**
     * Text for the views stats item unit
     */
    export let i18nViewsUnit: string = Number(views) === 1 ? "view" : "views";

    /**
     * Text for the votes stats item unit
     */
    export let i18nVotesUnit: string = Number(votes) === 1 ? "vote" : "votes";

    /**
     * Additional CSS classes added to the element
     */
    let className = "";
    export { className as class };

    $: classes = getClasses(className, ignored, minimal, state, watched);

    const getClasses = (
        className: string,
        ignored: boolean,
        minimal: boolean,
        state: State,
        watched: boolean
    ) => {
        const base = "s-post-summary";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (ignored) {
            classes += ` ${base}__ignored`;
        }

        if (minimal) {
            classes += ` ${base}__minimal`;
        }

        if (watched) {
            classes += ` ${base}__watched`;
        }

        if (state === "deleted") {
            classes += ` ${base}__${state}`;
        }

        return classes;
    };
</script>

<div class={classes}>
    <div class="s-post-summary--stats">
        {#if state}
            <PostSummaryStateBadge {state} i18nText={i18nStateBadgeText} />
        {/if}
        {#if votes || votes === 0}
            <PostSummaryStatsItem
                variant="votes"
                unit={i18nVotesUnit}
                number={votes}
            />
        {/if}
        {#if answers || answers === 0}
            {#if acceptedAnswer}
                <span class="v-visible-sr">{i18nAcceptedAnswerIconTitle}</span>
                <Badge
                    text={`${answers} ${i18nAnswersUnit}`}
                    type="state"
                    state="success"
                    icon={IconCheck}
                    squared
                    class="s-post-summary--stats-item"
                />
            {:else}
                <PostSummaryStatsItem
                    variant="answers"
                    unit={i18nAnswersUnit}
                    number={answers}
                />
            {/if}
        {/if}
        {#if views || views === 0}
            <PostSummaryStatsItem
                variant="views"
                unit={i18nViewsUnit}
                number={views}
                {hotness}
            />
        {/if}
        {#if readTime}
            <PostSummaryStatsItem unit={readTime} number="" />
        {/if}
        {#if bounty}
            <Badge
                text={`+${bounty}`}
                type="state"
                state="info"
                important
                class="s-post-summary--stats-item"
            />
        {/if}
    </div>
    <div class="s-post-summary--content">
        {#if contentType}
            <PostSummaryContentType
                name={contentType.name}
                href={contentType.url}
                {i18nContentTypeText}
            />
        {/if}
        <h3 class="s-post-summary--content-title">
            {#if activityIndicator}
                <div class="s-activity-indicator">
                    <div class="v-visible-sr">{i18nActivityIndicatorText}</div>
                </div>
            {/if}
            <Link {href}>
                {#if gated}
                    <Icon src={IconShield} title={i18nGatedTitle} />
                {/if}
                {title}
            </Link>
        </h3>
        {#if excerpt}
            <Excerpt {excerpt} size={excerptSize} />
        {/if}
        <div class="s-post-summary--meta">
            {#if $$slots.tags}
                <div class="s-post-summary--meta-tags">
                    <!-- (Optional) Tags associated with the post -->
                    <slot name="tags" />
                </div>
            {/if}
            {#snippet time()}
                <UserCardTime text={timestamp} />
            {/snippet}
            {#snippet blings()}
                {#if userReputation}
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
                {time}
                {blings}
            />
        </div>
        <!-- (Optional) Answer previews on the post -->
        <slot name="answerPreviews" />
        {#if $$slots.actionMenu}
            <Popover
                id={Math.random().toString(36).slice(2)}
                placement="bottom-end"
            >
                <PopoverReference>
                    <Button
                        class="s-post-summary--content-menu-button"
                        variant="tonal"
                    >
                        <Icon src={IconEllipsisVertical} />
                        <span class="v-visible-sr"
                            >{i18nActionMenuButtonText}</span
                        >
                    </Button>
                </PopoverReference>
                <PopoverContent class="px0 py4 wmx2">
                    <!-- (Optional) Menu to be displayed when the content menu button is clicked -->
                    <slot name="actionMenu" />
                </PopoverContent>
            </Popover>
        {/if}
    </div>
</div>

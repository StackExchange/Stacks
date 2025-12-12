<script lang="ts">
    import Badge from "../Badge/Badge.svelte";
    import type { BadgeState } from "../Badge/Badge.svelte";
    import type { State } from "./PostSummary.svelte";
    import {
        IconArchiveSm,
        IconEyeSm,
        IconNotInterestedSm,
        IconPencilSm,
        IconTackSm,
        IconTrashSm,
    } from "@stackoverflow/stacks-icons-legacy/icons";

    type PostSummaryState = Exclude<State, undefined>;

    /**
     * The state of the post, which affects its styling
     * @type {"archived" | "closed" | "deleted" | "draft" | "deleted" | "pinned" | "review"} State
     */
    export let state: PostSummaryState;

    /**
     * Text to display in the badge
     */
    export let i18nText: string | undefined = undefined;

    const STATE_ICON_MAP = {
        archived: IconArchiveSm,
        closed: IconNotInterestedSm,
        deleted: IconTrashSm,
        draft: IconPencilSm,
        pinned: IconTackSm,
        review: IconEyeSm,
    };

    const STATE_BADGE_MAP: Record<PostSummaryState, BadgeState> = {
        archived: "tonal",
        closed: "danger",
        deleted: "danger",
        draft: "info",
        pinned: "tonal",
        review: "warning",
    };

    const capitalizeFirstLetter = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
</script>

<Badge
    text={i18nText || capitalizeFirstLetter(state)}
    type="state"
    icon={STATE_ICON_MAP[state]}
    state={STATE_BADGE_MAP[state]}
    squared
    important={state === "deleted" || state === "pinned"}
    class="s-post-summary--stats-item"
/>

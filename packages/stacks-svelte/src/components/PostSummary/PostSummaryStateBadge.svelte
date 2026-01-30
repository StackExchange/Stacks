<script lang="ts">
    import Badge from "../Badge/Badge.svelte";
    import type { BadgeState } from "../Badge/Badge.svelte";
    import type { State } from "./PostSummary.svelte";
    import {
        IconCompose,
        IconDocument,
        IconEye,
        IconFlag,
        IconKey,
    } from "@stackoverflow/stacks-icons/icons";

    type PostSummaryStateBadge = Exclude<State, "deleted" | undefined>;

    /**
     * The state of the post, which affects its styling
     */
    export let state: PostSummaryStateBadge;

    /**
     * Text to display in the badge
     */
    export let i18nText: string | undefined = undefined;

    const STATE_ICON_MAP: Record<PostSummaryStateBadge, string> = {
        archived: IconDocument,
        closed: IconFlag,
        draft: IconCompose,
        pinned: IconKey,
        review: IconEye,
    };

    const STATE_BADGE_MAP: Record<
        PostSummaryStateBadge,
        BadgeState | undefined
    > = {
        archived: undefined,
        closed: "danger",
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
/>

<script lang="ts">
    import Badge from "../Badge/Badge.svelte";
    import type { Variant as BadgeVariant } from "../Badge/Badge.svelte";
    import type { State } from "./PostSummary.svelte";
    import {
        IconArchiveSm,
        IconEyeSm,
        IconNotInterestedSm,
        IconPencilSm,
        IconTackSm,
        IconTrashSm,
    } from "@stackoverflow/stacks-icons-legacy/icons";

    type BadgeState = Exclude<State, undefined>;

    /**
     * The state of the post, which affects its styling
     * @type {"archived" | "closed" | "deleted" | "draft" | "deleted" | "pinned" | "review"} State
     */
    export let state: BadgeState;

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

    const STATE_VARIANT_MAP: Record<BadgeState, BadgeVariant> = {
        archived: "muted",
        closed: "danger",
        deleted: "danger",
        draft: "info",
        pinned: "muted",
        review: "warning",
    };

    const capitalizeFirstLetter = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
</script>

<Badge
    class="s-post-summary--stats-item"
    filled={state === "deleted" || state === "pinned"}
    icon={STATE_ICON_MAP[state]}
    variant={STATE_VARIANT_MAP[state]}
>
    {i18nText || capitalizeFirstLetter(state)}
</Badge>

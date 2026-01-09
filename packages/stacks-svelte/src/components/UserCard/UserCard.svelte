<script lang="ts" module>
    export type Award = string | number | undefined;
    export type Size = "sm" | "lg" | undefined;
    export type UserBadgeType = "admin" | "moderator" | "staff";
</script>

<script lang="ts">
    // import Avatar, { type Size as AvatarSize } from "../Avatar/Avatar.svelte";
    // import type { UserType } from "../Badge/Badge.svelte";
    // import UserCardBadges from "./UserCardBadges.svelte";
    // import UserCardAwards from "./UserCardAwards.svelte";
    // import UserCardRecognition from "./UserCardRecognition.svelte";
    // import UserCardMeta from "./UserCardMeta.svelte";
    // import UserCardBio from "./UserCardBio.svelte";
    // import UserCardTimestamp from "./UserCardTimestamp.svelte";

    // interface Props {
    //     /**
    //      * Name of user to be displayed
    //      */
    //     name: string;

    //     /**
    //      * Avatar image source of user
    //      */
    //     avatar?: string;

    //     /**
    //      * Link to be used for the username
    //      */
    //     href?: string;

    //     /**
    //      * The size of the user card
    //      */
    //     size?: Size;

    //     /**
    //      * Timestamp displayed in the user card used to indicate the associated post was posted
    //      */
    //     timestamp?: string;

    //     /**
    //      * Tooltip text for the timestamp
    //      */
    //     i18nTimestampTooltip?: string;

    //     /**
    //      * Link to post activity
    //      */
    //     timestampHref?: string;

    //     /**
    //      * The reputation of the user
    //      */
    //     reputation?: string | number;

    //     /**
    //      * Count of gold award badges to display
    //      */
    //     gold?: Award;

    //     /**
    //      * Count of silver award badges to display
    //      */
    //     silver?: Award;

    //     /**
    //      * Count of bronze award badges to display
    //      */
    //     bronze?: Award;

    //     /**
    //      * Display a badge indicating the user is an admin
    //      */
    //     admin?: boolean;

    //     /**
    //      * Display a badge indicating the user is a moderator
    //      */
    //     moderator?: boolean;

    //     /**
    //      * Display a badge indicating the user is a staff member
    //      */
    //     staff?: boolean;

    //     /**
    //      * recognition text (e.g., "Recognized by") for large variant
    //      */
    //     recognition?: string;

    //     /**
    //      * Link for the recognition text (e.g., link to the organization)
    //      */
    //     recognitionHref?: string;

    //     /**
    //      * Text for the recognition link
    //      */
    //     recognitionLinkText?: string;

    //     /**
    //      * Icon source for the recognition section
    //      */
    //     recognitionIcon?: string;

    //     /**
    //      * Role text
    //      */
    //     role?: string;

    //     /**
    //      * Location text
    //      */
    //     location?: string;

    //     /**
    //      * bio text
    //      */
    //     bio?: string;

    //     /**
    //      * Additional CSS classes added to the element
    //      */
    //     class?: string;

    //     /**
    //      * Internationalization labels for awards
    //      */
    //     i18nAwardLabels?: {
    //         gold: (count: number | string) => string;
    //         silver: (count: number | string) => string;
    //         bronze: (count: number | string) => string;
    //     };
    // }

    // const {
    //     name,
    //     avatar,
    //     href,
    //     reputation,
    //     size,
    //     timestamp,
    //     gold,
    //     silver,
    //     bronze,
    //     admin = false,
    //     moderator = false,
    //     staff = false,
    //     recognition,
    //     recognitionHref,
    //     recognitionIcon,
    //     recognitionLinkText,
    //     role,
    //     location,
    //     bio,
    //     class: className = "",
    //     i18nTimestampTooltip = "Show activity on this post",
    //     i18nAwardLabels,
    //     timestampHref,
    // }: Props = $props();

    // const getClasses = (className: string, size?: Size) => {
    //     const base = "s-user-card";
    //     let classes = base;

    //     if (className) {
    //         classes += ` ${className}`;
    //     }

    //     if (size) {
    //         classes += ` ${base}__${size}`;
    //     }

    //     return classes;
    // };

    // const getAvatarSize = (size?: Size): AvatarSize => {
    //     switch (size) {
    //         case "sm":
    //             return 16;
    //         case "lg":
    //             return 48;
    //         default:
    //             return 24;
    //     }
    // };

    // const getBadges = (
    //     admin: boolean,
    //     moderator: boolean,
    //     staff: boolean
    // ): UserType[] => {
    //     const badges: UserType[] = [];
    //     if (admin) {
    //         badges.push("admin");
    //     }
    //     if (moderator) {
    //         badges.push("moderator");
    //     }
    //     if (staff) {
    //         badges.push("staff");
    //     }
    //     return badges;
    // };

    // const classes = $derived(getClasses(className, size));
    // const avatarSize = $derived(getAvatarSize(size));
    // const badges = $derived(getBadges(admin, moderator, staff));
</script>

<!-- {#snippet avatarAndName()}
    {#if avatar || name}
        <svelte:element
            this={href ? "a" : "div"}
            class="s-user-card--group"
            {href}
        >
            {#if avatar}
                <Avatar {name} {href} src={avatar} size={avatarSize} />
            {/if}
            {#if name}
                <span class="s-user-card--username">{name}</span>
            {/if}
        </svelte:element>
    {/if}
{/snippet} -->

<div class={classes}>
    <div></div>
</div>

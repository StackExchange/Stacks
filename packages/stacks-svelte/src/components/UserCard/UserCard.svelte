<script lang="ts" module>
    export type Award = string | number | undefined;
    export type Size = "sm" | "lg" | undefined;
    export type Badge = "admin" | "moderator" | "staff" | undefined;
</script>

<script lang="ts">
    import Avatar, { type Size as AvatarSize } from "../Avatar/Avatar.svelte";
    import Bling from "../Bling/Bling.svelte";
    import Icon from "../Icon/Icon.svelte";

    interface Props {
        /**
         * Name of user to be displayed
         */
        username: string;

        /**
         * Avatar image source of user
         */
        avatar?: string;

        /**
         * Link to be used for the username
         */
        href?: string;

        /**
         * The reputation of the user
         */
        reputation?: string | number;

        /**
         * The size of the user card
         * @type {undefined | "sm" | "lg"} Size
         */
        size?: Size;

        /**
         * Timestamp displayed in the user card generally used to indicate when a comment was posted
         */
        timestamp?: string;

        // Awards
        /**
         * Count of gold award badges to display
         */
        gold?: Award;

        /**
         * Count of silver award badges to display
         */
        silver?: Award;

        /**
         * Count of bronze award badges to display
         */
        bronze?: Award;

        // Badges
        /**
         * Display a badge indicating the user is an admin
         */
        admin?: boolean;

        /**
         * Display a badge indicating the user is a moderator
         */
        moderator?: boolean;

        /**
         * Display a badge indicating the user is a staff member
         */
        staff?: boolean;

        /**
         * recognition text (e.g., "Recognized by") for large variant
         */
        recognition?: string;

        /**
         * Link for the recognition text (e.g., link to the organization)
         */
        recognitionHref?: string;

        /**
         * Text for the recognition link
         */
        recognitionLinkText?: string;

        /**
         * Icon source for the recognition section
         */
        recognitionIcon?: string;

        /**
         * Role text
         */
        role?: string;

        /**
         * Location text
         */
        location?: string;

        /**
         * bio text
         */
        bio?: string;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    const {
        username,
        avatar,
        href,
        reputation,
        size,
        timestamp,
        gold,
        silver,
        bronze,
        admin = false,
        moderator = false,
        staff = false,
        recognition,
        recognitionHref,
        recognitionIcon,
        recognitionLinkText,
        role,
        location,
        bio,
        class: className = "",
    }: Props = $props();

    const getClasses = (className: string, size?: Size) => {
        const base = "s-user-card";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (size) {
            classes += ` ${base}__${size}`;
        }

        return classes;
    };

    const getAvatarSize = (size?: Size): AvatarSize => {
        switch (size) {
            case "sm":
                return 16;
            case "lg":
                return 48;
            default:
                return 24;
        }
    };

    const getBadges = (
        admin: boolean,
        moderator: boolean,
        staff: boolean
    ): Badge[] => {
        const badges: Badge[] = [];
        if (admin) {
            badges.push("admin");
        }
        if (moderator) {
            badges.push("moderator");
        }
        if (staff) {
            badges.push("staff");
        }
        return badges;
    };

    const classes = $derived(getClasses(className, size));
    const avatarSize = $derived(getAvatarSize(size));
    const badges = $derived(getBadges(admin, moderator, staff));
</script>

<div class={classes}>
    {#if size !== "lg"}
        {#if avatar || username}
            <svelte:element
                this={href ? "a" : "div"}
                class="s-user-card--group"
                {href}
            >
                {#if avatar}
                    <Avatar
                        name={username}
                        {href}
                        src={avatar}
                        size={avatarSize}
                    />
                {/if}
                {#if username}
                    <span class="s-user-card--username">{username}</span>
                {/if}
            </svelte:element>
        {/if}
        {#if badges}
            <div class="s-user-card--group">
                {#each badges as badge (badge)}
                    <span class="s-badge s-badge__sm s-badge__{badge}">
                        {badge}
                    </span>
                {/each}
            </div>
        {/if}
        {#if reputation || gold || silver || bronze}
            <ul class="s-user-card--group">
                {#if reputation}
                    <li class="s-user-card--rep">
                        <Bling name="reputation bling" />
                        {reputation}
                    </li>
                {/if}
                {#if gold}
                    <li>
                        <Bling type="gold" name="gold bling" />
                        {gold}
                    </li>
                {/if}
                {#if silver}
                    <li>
                        <Bling type="silver" name="silver bling" />
                        {silver}
                    </li>
                {/if}
                {#if bronze}
                    <li>
                        <Bling type="bronze" name="bronze bling" />
                        {bronze}
                    </li>
                {/if}
            </ul>
        {/if}
        {#if timestamp}
            <time
                class="s-user-card--time"
                title="Show activity on this post"
                data-controller="s-tooltip"
            >
                {timestamp}
            </time>
        {/if}
    {:else}
        <div class="s-user-card--row">
            {#if avatar}
                <Avatar name={username} {href} src={avatar} size={avatarSize} />
            {/if}
            <div class="s-user-card--column">
                <div class="s-user-card--row">
                    {#if username}
                        <svelte:element
                            this={href ? "a" : "div"}
                            class="s-user-card--username"
                            {href}
                        >
                            {username}
                        </svelte:element>
                    {/if}
                    <div class="s-user-card--group">
                        {#each badges as badge (badge)}
                            <span class="s-badge s-badge__sm s-badge__{badge}">
                                {badge}
                            </span>
                        {/each}
                    </div>
                </div>
                {#if reputation || gold || silver || bronze}
                    <ul class="s-user-card--group">
                        {#if reputation}
                            <li class="s-user-card--rep">
                                <Bling name="reputation bling" />
                                {reputation}
                            </li>
                        {/if}
                        {#if gold}
                            <li>
                                <Bling type="gold" name="gold bling" />
                                {gold}
                            </li>
                        {/if}
                        {#if silver}
                            <li>
                                <Bling type="silver" name="silver bling" />
                                {silver}
                            </li>
                        {/if}
                        {#if bronze}
                            <li>
                                <Bling type="bronze" name="bronze bling" />
                                {bronze}
                            </li>
                        {/if}
                    </ul>
                {/if}
            </div>
        </div>
        {#if recognition || role || location || bio}
            <div class="s-user-card--column">
                {#if recognition}
                    {#if recognitionIcon}
                        <Icon src={recognitionIcon} />
                    {/if}
                    <div class="s-user-card--recognition">
                        {recognition}
                        {#if recognitionHref}
                            <a href={recognitionHref}
                                >{recognitionLinkText || "…"}</a
                            >
                        {/if}
                    </div>
                {/if}
                {#if role || location}
                    <ul class="s-user-card--group s-user-card--group__split">
                        {#if role}
                            <li>{role}</li>
                        {/if}
                        {#if location}
                            <li>{location}</li>
                        {/if}
                    </ul>
                {/if}
                {#if bio}
                    <div class="s-user-card--bio">
                        {bio}
                    </div>
                {/if}
            </div>
        {/if}
    {/if}
</div>

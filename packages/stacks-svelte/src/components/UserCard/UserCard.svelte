<script lang="ts" module>
    export type Award = string | number | undefined;
    export type Size = "small" | "large" | undefined;
</script>

<script lang="ts">
    import Avatar, { type Size as AvatarSize } from "../Avatar/Avatar.svelte";
    import Bling from "../Bling/Bling.svelte";
    import Icon from "../Icon/Icon.svelte";

    interface Props {
        /**
         * Name of user to be displayed
         */
        name: string;

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
         * @type {undefined | "small" | "large"} Size
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

        // Large variant only
        /**
         * Type text (e.g., "Recognized by") for large variant
         */
        type?: string;

        /**
         * Link for the type text (e.g., link to the organization)
         */
        typeHref?: string;

        /**
         * Text for the type link
         */
        typeLinkText?: string;

        /**
         * Icon source for the type section
         */
        typeIcon?: string;

        /**
         * Role text
         */
        role?: string;

        /**
         * Location text
         */
        location?: string;

        /**
         * Excerpt text
         */
        excerpt?: string;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    const {
        name,
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
        type,
        typeHref,
        typeIcon,
        typeLinkText,
        role,
        location,
        excerpt,
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
            case "small":
                return 16;
            case "large":
                return 48;
            default:
                return 24;
        }
    };

    const classes = $derived(getClasses(className, size));
    const avatarSize = $derived(getAvatarSize(size));
</script>

<div class={classes}>
    <Avatar
        class="s-user-card--avatar"
        {name}
        {href}
        src={avatar}
        size={avatarSize}
    />

    <div class="s-user-card--info">
        {#if name}
            <svelte:element
                this={href ? "a" : "div"}
                class="s-user-card--link d-flex g6"
                {href}
            >
                <div class="flex--item">{name}</div>
                {#if moderator}
                    <div
                        class="flex--item s-badge s-badge__sm s-badge__moderator"
                    >
                        Mod
                    </div>
                {/if}
                {#if staff}
                    <div class="flex--item s-badge s-badge__sm s-badge__staff">
                        Staff
                    </div>
                {/if}
                {#if admin}
                    <div class="flex--item s-badge s-badge__sm s-badge__admin">
                        Admin
                    </div>
                {/if}
            </svelte:element>
        {/if}
    </div>

    {#if size === "large" && (reputation || gold || silver || bronze)}
        <ul class="s-user-card--awards">
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

    {#if size !== "large" && (reputation || gold || silver || bronze)}
        <ul class="s-user-card--awards">
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

    {#if size === "large" && type}
        <div class="s-user-card--type">
            {#if typeIcon}
                <Icon src={typeIcon} />
            {/if}
            {type}
            {#if typeHref}
                <a href={typeHref}>{typeLinkText || "…"}</a>
            {/if}
        </div>
    {/if}

    {#if size === "large" && (role || location)}
        <div class="d-flex ai-center g4">
            {#if role}
                <div class="s-user-card--role">{role}</div>
            {/if}
            {#if role && location}
                <div class="s-user-card--square"></div>
            {/if}
            {#if location}
                <div class="s-user-card--location">{location}</div>
            {/if}
        </div>
    {/if}

    {#if size === "large" && excerpt}
        <div class="s-user-card--excerpt">
            {excerpt}
        </div>
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
</div>

<script lang="ts" module>
    export type Award = string | number | undefined;
    export type Size = "small" | undefined; //TODO: Add "large" when working on SPARK-127
</script>

<script lang="ts">
    import Avatar, { type Size as AvatarSize } from "../Avatar/Avatar.svelte";
    import Bling from "../Bling/Bling.svelte";

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
         * @type {undefined | "small"} Size
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
                class="s-user-card--link d-flex g4"
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

    {#if reputation || gold || silver || bronze}
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

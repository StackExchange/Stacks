<script lang="ts" module>
    export type Award = string | number | undefined;
    export type Size = "full" | "small" | "minimal";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import Avatar, { type Size as AvatarSize } from "../Avatar/Avatar.svelte";
    import Bling from "../Bling/Bling.svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconPerson } from "@stackoverflow/stacks-icons-legacy/icons";

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
         * Apply styling indicating the user has been deleted
         */
        deleted?: boolean;

        /**
         * Add a highlight to the user card
         */
        highlighted?: boolean;

        /**
         * Link to be used for the username
         */
        href?: string;

        /**
         * Location of the user
         */
        location?: string;

        /**
         * The reputation of the user
         */
        reputation?: string | number;

        /**
         * The user's role (such as job title)
         */
        role?: string;

        /**
         * The size of the user card
         * @type {undefined | "full" | "small" | "minimal"} Size
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

        /**
         * Optional snippet to showcase user’s most popular tags (e.g. `<Tag href="#" size="xs">css</Tag>`)
         */
        tags?: Snippet;

        /**
         * Optional snippet to showcase user’s type or affiliate badge
         */
        type?: Snippet;
    }

    const {
        name,
        avatar,
        deleted = false,
        highlighted = false,
        href,
        location,
        reputation,
        role,
        size,
        timestamp,
        gold,
        silver,
        bronze,
        admin = false,
        moderator = false,
        staff = false,
        class: className = "",
        tags,
        type,
    }: Props = $props();

    const getClasses = (
        className: string,
        deleted: boolean,
        highlighted: boolean,
        size?: Size
    ) => {
        const base = "s-user-card";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (deleted) {
            classes += ` ${base}__deleted`;
        }

        if (highlighted) {
            classes += ` ${base}__highlighted`;
        }

        if (size) {
            classes += ` ${base}__${size}`;
        }

        return classes;
    };

    const getAvatarSize = (size?: Size): AvatarSize => {
        switch (size) {
            case "full":
                return 48;
            case "small":
                return 24;
            case "minimal":
                return 16;
            default:
                return 32;
        }
    };

    const classes = $derived(getClasses(className, deleted, highlighted, size));
    const avatarSize = $derived(getAvatarSize(size));
    const iconSizeClasses = $derived(`w${avatarSize} h${avatarSize}`);
</script>

<div class={classes}>
    {#if timestamp && size !== "minimal" && size !== "small"}
        <time class="s-user-card--time">{timestamp}</time>
    {/if}

    {#if deleted}
        <Icon
            src={IconPerson}
            class="bar-md fc-white bg-black-225 s-user-card--avatar {iconSizeClasses}"
            title={name}
        />
    {:else}
        <Avatar
            class="s-user-card--avatar"
            {name}
            href={!deleted && href ? href : undefined}
            src={avatar}
            size={avatarSize}
        />
    {/if}

    <div class="s-user-card--info as-stretch">
        {#if name}
            <svelte:element
                this={href && !deleted ? "a" : "div"}
                class="s-user-card--link"
                href={deleted ? null : href}
            >
                {name}
                {#if !deleted && moderator}
                    <div class="s-badge s-badge__sm s-badge__moderator">
                        Mod
                    </div>
                {/if}
                {#if !deleted && staff}
                    <div class="s-badge s-badge__sm s-badge__staff">Staff</div>
                {/if}
                {#if !deleted && admin}
                    <div class="s-badge s-badge__sm s-badge__admin">Admin</div>
                {/if}
            </svelte:element>
        {/if}

        {#if !deleted && (reputation || gold || silver || bronze)}
            <ul class="s-user-card--awards">
                {#if reputation}
                    <li class="s-user-card--rep">{reputation}</li>
                {/if}
                {#if gold}
                    <Bling type="gold" name={`${gold} gold awards`} />
                    <span class="v-hidden">{gold}</span>
                {/if}
                {#if silver}
                    <Bling type="silver" name={`${silver} silver awards`} />
                    <span class="v-hidden">{silver}</span>
                {/if}
                {#if bronze}
                    <Bling type="bronze" name={`${bronze} bronze awards`} />
                    <span class="v-hidden">{bronze}</span>
                {/if}
            </ul>
        {/if}

        {#if !deleted && role}
            <div class="s-user-card--role">{role}</div>
        {/if}

        {#if !deleted && location}
            <div class="s-user-card--location">{location}</div>
        {/if}

        {#if timestamp && (size === "minimal" || size === "small")}
            <time class="s-user-card--time">{timestamp}</time>
        {/if}

        {#if !deleted && tags}
            <div class="s-user-card--tags d-flex g4">
                {@render tags()}
            </div>
        {/if}
    </div>

    {#if !deleted && type}
        <div class="s-user-card--type">
            {@render type()}
        </div>
    {/if}
</div>

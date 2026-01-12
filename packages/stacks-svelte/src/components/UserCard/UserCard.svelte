<script lang="ts" module>
    export type Size = "sm" | "lg" | undefined;
</script>

<script lang="ts">
    import Avatar, { type Size as AvatarSize } from "../Avatar/Avatar.svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconStarVerifiedSm } from "@stackoverflow/stacks-icons-legacy/icons";
    import type { Snippet } from "svelte";

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
         * Link to the user's profile
         */
        profileUrl?: string;
        /**
         * The size of the user card
         * @type {undefined | "sm" | "lg"} Size
         */
        size?: Size;

        /**
         * Job designation of the user
         */
        designation?: string;

        /**
         * Location of the user
         */
        location?: string;

        /**
         * Snippet used to display post activity time
         */
        time?: Snippet;

        /**
         * Snippet used to display user blings
         */
        blings?: Snippet;

        /**
         * Snippet used to display user badges
         */
        badges?: Snippet;

        /**
         * Snippet used to display user recognition
         */
        recognition?: Snippet;

        /**
         * Snippet used to display user bio
         */
        bio?: Snippet;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    const {
        name,
        avatar,
        profileUrl,
        size,
        time,
        blings,
        badges,
        recognition,
        location,
        designation,
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

    const classes = $derived(getClasses(className, size));
    const avatarSize = $derived(getAvatarSize(size));
</script>

{#snippet avatarAndName()}
    {#if avatar || name}
        <svelte:element
            this={profileUrl ? "a" : "div"}
            class="s-user-card--group"
            href={profileUrl}
        >
            {#if avatar}
                <Avatar
                    {name}
                    href={profileUrl}
                    src={avatar}
                    size={avatarSize}
                />
            {/if}
            {#if name}
                <span class="s-user-card--username">{name}</span>
            {/if}
        </svelte:element>
    {/if}
{/snippet}

<div class={classes}>
    {#if size !== "lg"}
        {@render avatarAndName()}
        {#if badges}
            {@render badges()}
        {/if}
        {#if blings}
            {@render blings()}
        {/if}
        {#if time}
            {@render time()}
        {/if}
    {:else}
        <div class="s-user-card--row">
            {#if avatar}
                <Avatar
                    {name}
                    href={profileUrl}
                    src={avatar}
                    size={avatarSize}
                />
            {/if}
            <div class="s-user-card--column">
                <div class="s-user-card--row">
                    {#if name}
                        <svelte:element
                            this={profileUrl ? "a" : "div"}
                            class="s-user-card--username"
                            href={profileUrl}
                        >
                            {name}
                        </svelte:element>
                    {/if}
                    {#if badges}
                        {@render badges()}
                    {/if}
                </div>
                {#if blings}
                    {@render blings()}
                {/if}
            </div>
        </div>
        {#if recognition || designation || location || bio}
            <div class="s-user-card--column">
                {#if recognition}
                    <div class="s-user-card--row s-user-card--recognition">
                        <Icon src={IconStarVerifiedSm} />
                        {@render recognition()}
                    </div>
                {/if}
                {#if designation || location}
                    <ul class="s-user-card--group s-user-card--group__split">
                        {#if designation}
                            <li>{designation}</li>
                        {/if}
                        {#if location}
                            <li>{location}</li>
                        {/if}
                    </ul>
                {/if}
                {#if bio}
                    {@render bio()}
                {/if}
            </div>
        {/if}
    {/if}
</div>

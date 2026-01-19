<script lang="ts" module>
    export type Size = "sm" | "lg" | undefined;
    export type AwardBlings = "first" | "second" | "third" | undefined;
</script>

<script lang="ts">
    import Avatar, { type Size as AvatarSize } from "../Avatar/Avatar.svelte";
    import Icon from "../Icon/Icon.svelte";
    import {
        IconStarVerifiedSm,
        IconAchievementsSm,
    } from "@stackoverflow/stacks-icons-legacy/icons";
    import type { Snippet } from "svelte";
    import Popover from "../Popover/Popover.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import AvatarDeleted16 from "./AvatarDeleted16.svelte";
    import AvatarDeleted24 from "./AvatarDeleted24.svelte";

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
         * Snippet used to display user recognized member
         */
        recognizedMemberAdditionalBling?: Snippet;

        /**
         * Snippet used to display user bio
         */
        bio?: Snippet;

        /**
         * Snippet used to display user additional blings
         */
        additionalBlings?: Snippet;

        /**
         * Identifies if the user card is the original poster
         */
        originalPoster?: boolean;

        /**
         * The text for the original poster tooltip
         */
        i18nOpTooltipText?: string;

        /**
         * Identifies if the user has been deleted
         */
        deleted?: boolean;
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
        additionalBlings,
        recognizedMemberAdditionalBling,
        originalPoster,
        i18nOpTooltipText = "is the original poster.",
        deleted,
        class: className = "",
    }: Props = $props();

    const getClasses = (className: string, size?: Size, deleted?: boolean) => {
        const base = "s-user-card";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (size) {
            classes += ` ${base}__${size}`;
        }

        if (deleted) {
            classes += ` ${base}__deleted`;
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

    const classes = $derived(getClasses(className, size, deleted));
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
                {#if originalPoster}
                    <Popover id="user-card-original-poster-popover" tooltip>
                        <PopoverReference>
                            <span
                                class="s-user-card--username s-user-card--original-poster"
                                >{name}</span
                            >
                        </PopoverReference>
                        <PopoverContent>
                            <span>
                                <a
                                    href={profileUrl}
                                    class="s-link s-link__underlined">{name}</a
                                >
                                {i18nOpTooltipText}
                            </span>
                        </PopoverContent>
                    </Popover>
                {:else}
                    <span class="s-user-card--username">{name}</span>
                {/if}
            {/if}
        </svelte:element>
    {/if}
{/snippet}

{#snippet userCardMainContent()}
    {@render avatarAndName()}
    {#if recognizedMemberAdditionalBling && size === "sm"}
        {@render recognizedMemberAdditionalBling()}
    {/if}
    {#if badges}
        <ul class="s-user-card--group">
            {@render badges()}
        </ul>
    {/if}
    {#if additionalBlings}
        {@render additionalBlings()}
    {/if}
    {#if blings}
        <ul class="s-user-card--group">
            {@render blings()}
        </ul>
    {/if}
    {#if time}
        {@render time()}
    {/if}
{/snippet}

<div class={classes}>
    {#if deleted}
        <div class="s-user-card--group">
            {#if size === "sm"}
                <AvatarDeleted16 {name} />
            {:else}
                <AvatarDeleted24 {name} />
            {/if}
            <span class="s-user-card--username s-user-card--deleted"
                >{name}</span
            >
        </div>
        {#if time}
            {@render time()}
        {/if}
    {:else if size !== "lg"}
        {#if recognition && size === undefined}
            <div class="s-user-card--column">
                <div class="s-user-card--row">
                    {@render userCardMainContent()}
                </div>
                <div class="s-user-card--row s-user-card--recognition">
                    <Icon src={IconStarVerifiedSm} />
                    {@render recognition()}
                </div>
            </div>
        {:else}
            {@render userCardMainContent()}
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
                        <ul class="s-user-card--group">
                            {@render badges()}
                        </ul>
                    {/if}
                </div>
                {#if blings}
                    <ul class="s-user-card--group">
                        {@render blings()}
                    </ul>
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

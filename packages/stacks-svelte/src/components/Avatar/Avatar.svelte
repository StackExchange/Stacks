<script module lang="ts">
    export type Size = 16 | 24 | 32 | 48 | 64 | 96 | 128;
</script>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import { IconShieldXSm } from "@stackoverflow/stacks-icons/icons";
    import type { HTMLAnchorAttributes } from "svelte/elements";

    interface Props {
        /**
         * Account name for screen readers
         */
        name: string;

        /**
         * The size of the avatar in pixels
         */
        size?: Size;

        /**
         * Render the tag as a link with the given href
         */
        href?: string;

        /**
         * The avatar image source
         */
        src?: string;

        /**
         * Single character to display as the avatar
         */
        letter?: string;

        /**
         * Boolean to show the shield badge on the avatar
         */
        badge?: boolean;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Localized translation for private communities icon title tag
         */
        i18nPrivateIconTitle?: string;
    }

    const {
        name,
        size = 16,
        href,
        src,
        letter,
        badge = false,
        class: className = "",
        role,
        i18nPrivateIconTitle = "Private",
        ...restProps
    }: Props & HTMLAnchorAttributes = $props();

    const getClasses = (className: string, size: Size): string => {
        const base = "s-avatar";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (size !== 16) {
            classes += ` ${base}__${size}`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, size));
</script>

<svelte:element
    this={href ? "a" : "span"}
    class={classes}
    {href}
    role={role || (href && "link")}
    {...restProps}
>
    {#if src}
        <img
            class="s-avatar--image"
            {src}
            alt=""
            role="presentation"
            width={size}
            height={size}
        />
    {:else if letter}
        <span class="s-avatar--letter" aria-hidden="true">{letter}</span>
    {/if}
    <span class="v-visible-sr">{name}</span>
    {#if badge}
        <Icon
            class="s-avatar--badge"
            src={IconShieldXSm}
            native
            title={i18nPrivateIconTitle}
        />
    {/if}
</svelte:element>

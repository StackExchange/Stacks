<script module lang="ts">
    export type Size = "" | "sm" | "lg";
    export type Variant = "" | "moderator" | "required";
</script>

<script lang="ts">
    import clsx from "clsx";
    import type { Snippet } from "svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconCross16 } from "@stackoverflow/stacks-icons/icons";
    import type {
        ClassValue,
        HTMLAnchorAttributes,
        HTMLButtonAttributes,
    } from "svelte/elements";

    interface Props {
        /**
         * The size of the tag
         * @type {"" | "sm" | "lg"}
         */
        size?: Size;

        /**
         * The variants of the tag
         * @type {"" | "moderator" | "required"}
         */
        variant?: Variant;

        /**
         * Render the tag as a link with the given href
         */
        href?: string;

        /**
         * Boolean describing if the tag is dismissable
         * This only takes effect if the href prop is not set
         */
        dismissable?: boolean;

        /**
         * Boolean describing if the tag is ignored
         */
        ignored?: boolean;

        /**
         * Boolean describing if the tag is watched
         */
        watched?: boolean;

        /**
         * Localized translation for the dismiss button text
         */
        i18nDismissButtonText?: string;

        /**
         * Localized translation for sponsored status text
         */
        i18nSponsorTagText?: string;

        /**
         * Localized translation for watched status text
         */
        i18nWatchedTagText?: string;

        /**
         * Localized translation for ignored status text
         */
        i18nIgnoredTagText?: string;

        /**
         * Localized translation for moderator status text
         */
        i18nModeratorTagText?: string;

        /**
         * Localized translation for required status text
         */
        i18nRequiredTagText?: string;

        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;

        /**
         * Callback function to call when the tag is dismissed
         */
        ondismiss?: () => void;

        /**
         * Snippet containing the tag name
         */
        children: Snippet;

        /**
         * Optional snippet for displaying a sponsor icon before the tag name
         */
        sponsor?: Snippet;
    }

    const {
        size = "",
        variant = "",
        href,
        dismissable = false,
        ignored = false,
        watched = false,
        i18nDismissButtonText = "Dismiss tag",
        i18nSponsorTagText = "Sponsored tag",
        i18nWatchedTagText = "Watched tag",
        i18nIgnoredTagText = "Ignored tag",
        i18nModeratorTagText = "Moderator tag",
        i18nRequiredTagText = "Required tag",
        class: className = "",
        ondismiss = () => {},
        children,
        sponsor,
        role,
        ...restProps
    }: Props & HTMLButtonAttributes & HTMLAnchorAttributes = $props();

    const getClasses = (
        className: ClassValue,
        size: Size,
        variant: Variant,
        ignored: boolean,
        watched: boolean
    ) => {
        const base = "s-tag";
        const classes = [size, variant]
            .filter(Boolean)
            .map((modifier) => `${base}__${modifier}`);
        if (ignored) {
            classes.push(`${base}__ignored`);
        }
        if (watched) {
            classes.push(`${base}__watched`);
        }
        return clsx(base, className, classes);
    };

    const classes = $derived(
        getClasses(className, size, variant, ignored, watched)
    );
</script>

<svelte:element
    this={href && !dismissable ? "a" : "span"}
    class={classes}
    href={href && !dismissable ? href : undefined}
    role={role || (href && !dismissable ? "link" : undefined)}
    {...restProps}
>
    {#if href && dismissable}
        <a {href}>
            {#if sponsor}
                <span class="s-tag--sponsor">
                    {@render sponsor()}
                </span>
            {/if}

            {@render children()}
        </a>
    {:else}
        {#if sponsor}
            <span class="s-tag--sponsor">
                {@render sponsor()}
            </span>
        {/if}

        {@render children()}
    {/if}

    {#if sponsor}
        <div class="v-visible-sr">{i18nSponsorTagText}</div>
    {/if}

    {#if watched}
        <div class="v-visible-sr">{i18nWatchedTagText}</div>
    {/if}

    {#if ignored}
        <div class="v-visible-sr">{i18nIgnoredTagText}</div>
    {/if}

    {#if variant === "moderator"}
        <div class="v-visible-sr">{i18nModeratorTagText}</div>
    {/if}

    {#if variant === "required"}
        <div class="v-visible-sr">{i18nRequiredTagText}</div>
    {/if}

    {#if dismissable}
        <button class="s-tag--dismiss" type="button" onclick={ondismiss}>
            <span class="v-visible-sr">{i18nDismissButtonText}</span><Icon
                src={IconCross16}
            />
        </button>
    {/if}
</svelte:element>

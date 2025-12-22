<script module lang="ts">
    export type Size = "" | "sm" | "lg";
    export type Variant = "" | "moderator" | "required";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconCross16 } from "@stackoverflow/stacks-icons/icons";
    import type {
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
        class?: string;

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
        className: string,
        size: Size,
        variant: Variant,
        ignored: boolean,
        watched: boolean
    ) => {
        const base = "s-tag";
        let classes = base;
        const suffixes = [size, variant];

        if (className) {
            classes += " " + className;
        }

        suffixes.forEach((suffix) => {
            if (suffix) {
                classes += ` ${base}__${suffix}`;
            }
        });

        if (ignored) {
            classes += ` ${base}__ignored`;
        }

        if (watched) {
            classes += ` ${base}__watched`;
        }

        return classes;
    };

    const classes = $derived(
        getClasses(className, size, variant, ignored, watched)
    );
</script>

<svelte:element
    this={href ? "a" : "span"}
    class={classes}
    {href}
    role={role || (href && "link")}
    tabindex={href ? undefined : 0}
    {...restProps}
>
    {#if sponsor}
        <span class="s-tag--sponsor">
            {@render sponsor()}
        </span>
    {/if}

    {@render children()}

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

    {#if dismissable && !href}
        <button class="s-tag--dismiss" type="button" onclick={ondismiss}>
            <span class="v-visible-sr">{i18nDismissButtonText}</span><Icon
                src={IconCross16}
            />
        </button>
    {/if}
</svelte:element>

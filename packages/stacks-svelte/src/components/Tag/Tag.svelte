<script module lang="ts">
    export type Size = "" | "sm" | "lg";
    export type Variant = "" | "moderator" | "required";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconClearSm } from "@stackoverflow/stacks-icons-legacy/icons";
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
    {...restProps}
>
    {#if sponsor}
        <span class="s-tag--sponsor">
            {@render sponsor()}
        </span>
    {/if}
    {@render children()}{#if dismissable && !href}
        <button class="s-tag--dismiss" type="button" onclick={ondismiss}>
            <span class="v-visible-sr">{i18nDismissButtonText}</span><Icon
                src={IconClearSm}
            />
        </button>
    {/if}
</svelte:element>

<script module lang="ts">
    import clsx from "clsx";
    import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";
    import type { Snippet } from "svelte";
    import Loader from "../Loader/Loader.svelte";

    export type Brand = "" | "facebook" | "github" | "google";
    export type Size = "" | "xs" | "sm" | "lg";
    export type Variant = "" | "danger" | "featured" | "tonal";
    export type Weight = "" | "clear";

    export interface Props extends HTMLButtonAttributes {
        /**
         * Applies styling appropriate for the given brand
         * @type {"" | "facebook" | "github" | "google"} Brand
         * @name test
         */
        branding?: Brand;

        /**
         * The size of the button
         * @type {"" | "xs" | "sm" | "md"} Size
         */
        size?: Size;

        /**
         * The weight of the button
         * @type {"" | "danger" | "featured" | "tonal"}
         */
        variant?: Variant;

        /**
         * The weight of the button
         * @type {"" | "clear"}
         */
        weight?: Weight;

        /**
         * Render the button as a link with the given href
         */
        href?: string | undefined;

        /**
         * Boolean describing if the button is disabled
         */
        disabled?: boolean;

        /**
         * Modifier describing if the button should include an appropriately-styled caret
         */
        dropdown?: boolean;

        // TODO: we could easily infer this from the presence of an icon child
        /**
         * Boolean describing if the button contains an icon
         */
        icon?: boolean;

        /**
         * Modifier describing if the button should be styled as a link
         */
        link?: boolean;

        /**
         * Modifier describing if a loading spinner should be showed
         */
        loading?: boolean;

        /**
         * The i18n loading text
         */
        i18nLoadingText?: string;

        /**
         * Modifier describing if the button is selected
         */
        selected?: boolean;

        /**
         * Modifier describing if all button styles should be removed including its focus state
         */
        unset?: boolean;

        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;

        /**
         * Snippet for the button content
         */
        children: Snippet;

        /**
         * Optional badge to display on the button
         */
        badge?: Snippet;
    }
</script>

<script lang="ts">
    const {
        branding = "",
        size = "",
        variant = "",
        weight = "",
        href = undefined,
        disabled = false,
        dropdown = false,
        icon = false,
        link = false,
        loading = false,
        i18nLoadingText = "Loading…",
        selected = false,
        unset = false,
        class: className = "",
        children,
        badge,
        ...restProps
    }: Props = $props();

    const getClasses = (
        className: ClassValue,
        branding: Brand,
        size: Size,
        variant: Variant,
        weight: Weight,
        dropdown: boolean,
        link: boolean,
        icon: boolean,
        unset: boolean,
        selected: boolean
    ) => {
        const base = "s-btn";
        const classes = [branding, size, variant, weight]
            .filter(Boolean)
            .map((modifier) => `${base}__${modifier}`);
        if (dropdown) {
            classes.push(`${base}__dropdown`);
        }
        if (link) {
            classes.push(`${base}__link`);
        }
        if (icon) {
            classes.push(`${base}__icon`);
        }
        if (unset) {
            classes.push(`${base}__unset`);
        }
        if (selected) {
            classes.push("is-selected");
        }
        return clsx(base, className, classes);
    };

    const classes = $derived(
        getClasses(
            className,
            branding,
            size,
            variant,
            weight,
            dropdown,
            link,
            icon,
            unset,
            selected
        )
    );
</script>

<svelte:element
    this={href ? "a" : "button"}
    {href}
    class={classes}
    disabled={(!href && disabled) || null}
    aria-disabled={href && disabled ? "true" : null}
    {...restProps}
    >{#if loading}<Loader
            size="sm"
            label={i18nLoadingText}
        />{/if}{#if !badge}{@render children()}{:else}
        {@render children()}
        <span class="s-btn--badge">
            <span class="s-btn--number">
                {@render badge()}
            </span>
        </span>
    {/if}
</svelte:element>

<script module lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import type { Snippet } from "svelte";

    export type Brand = "" | "facebook" | "github" | "google";
    export type Size = "" | "xs" | "sm" | "md";
    export type Variant = "" | "danger" | "featured" | "muted";
    export type Weight = "" | "outlined" | "filled";

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
         * @type {"" | "danger" | "featured" | "muted"}
         */
        variant?: Variant;

        /**
         * The weight of the button
         * @type {"" | "outlined" | "filled"}
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
        class?: string;

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
        selected = false,
        unset = false,
        class: className = "",
        children,
        badge,
        ...restProps
    }: Props = $props();

    const getClasses = (
        className: string,
        branding: Brand,
        size: Size,
        variant: Variant,
        weight: Weight,
        dropdown: boolean,
        link: boolean,
        icon: boolean,
        unset: boolean,
        loading: boolean,
        selected: boolean
    ) => {
        const base = "s-btn";
        let classes = base;
        const suffixes = [branding, size, variant, weight];

        if (className) {
            classes += " " + className;
        }

        suffixes.forEach((suffix) => {
            if (suffix) {
                classes += ` ${base}__${suffix}`;
            }
        });

        if (dropdown) {
            classes += ` ${base}__dropdown`;
        }

        if (link) {
            classes += ` ${base}__link`;
        }

        if (icon) {
            classes += ` ${base}__icon`;
        }

        if (unset) {
            classes += ` ${base}__unset`;
        }

        if (loading) {
            classes += ` is-loading`;
        }

        if (selected) {
            classes += ` is-selected`;
        }

        return classes;
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
            loading,
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
>
    {#if !badge}
        {@render children()}
    {:else}
        {@render children()}
        <span class="s-btn--badge">
            <span class="s-btn--number">
                {@render badge()}
            </span>
        </span>
    {/if}
</svelte:element>

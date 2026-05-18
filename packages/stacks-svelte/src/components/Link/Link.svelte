<script module lang="ts">
    export type Variant = "" | "grayscale" | "muted" | "danger" | "inherit";
</script>

<script lang="ts">
    import clsx from "clsx";
    import type { Snippet } from "svelte";
    import type {
        ClassValue,
        HTMLAnchorAttributes,
        HTMLButtonAttributes,
    } from "svelte/elements";

    interface Props extends Omit<
        HTMLAnchorAttributes & HTMLButtonAttributes,
        "href" | "class"
    > {
        /**
         * The href of the link. When not provided, renders the component as a `button` element.
         */
        href?: string | undefined;

        /**
         * The weight of the link
         */
        variant?: Variant;

        /**
         * Boolean describing if the link is disabled
         */
        disabled?: boolean;

        /**
         * Modifier describing if the link should include an appropriately-styled caret
         */
        dropdown?: boolean;

        /**
         * Modifier describing if the link should be underlined
         */
        underlined?: boolean;

        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;

        /**
         * Snippet for the link content
         */
        children: Snippet;
    }

    const {
        href = undefined,
        variant = "",
        disabled = false,
        dropdown = false,
        underlined = false,
        class: className = "",
        children,
        ...restProps
    }: Props = $props();

    const getClasses = (
        className: ClassValue,
        variant: Variant,
        dropdown: boolean,
        underlined: boolean
    ) => {
        const base = "s-link";
        const classes = [variant]
            .filter(Boolean)
            .map((modifier) => `${base}__${modifier}`);
        if (dropdown) {
            classes.push(`${base}__dropdown`);
        }
        if (underlined) {
            classes.push(`${base}__underlined`);
        }
        return clsx(base, className, classes);
    };

    const classes = $derived(
        getClasses(className, variant, dropdown, underlined)
    );
</script>

<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- Event propagating click events on the underlying element -->
<svelte:element
    this={href ? "a" : "button"}
    {href}
    class={classes}
    disabled={(!href && disabled) || null}
    aria-disabled={href && disabled ? "true" : null}
    {...restProps}
>
    {@render children()}
</svelte:element>

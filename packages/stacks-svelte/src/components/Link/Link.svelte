<script module lang="ts">
    export type Variant = "" | "grayscale" | "muted" | "danger" | "inherit";
</script>

<script lang="ts">
    /**
     * The href of the link. When not provided, renders the component as a `button` element.
     */
    export let href: string | undefined = undefined;

    /**
     * The weight of the link
     * @type {"" | "grayscale" | "muted" | "danger" | "inherit"}
     */
    export let variant: Variant = "";

    /**
     * Boolean describing if the link is disabled
     */
    export let disabled = false;

    /**
     * Modifier describing if the link should include an appropriately-styled caret
     */
    export let dropdown = false;

    /**
     * Modifier describing if the link should be underlined
     */
    export let underlined = false;

    /**
     * Modifier describing if the link should apply a visited state style
     */
    export let visited = false;

    /**
     * Additional CSS classes added to the element
     */
    let className = "";
    export { className as class };

    $: classes = getClasses(className, variant, dropdown, underlined, visited);

    const getClasses = (
        className: string,
        variant: Variant,
        dropdown: boolean,
        underlined: boolean,
        visited: boolean
    ) => {
        const base = "s-link";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (variant) {
            classes += ` ${base}__${variant}`;
        }

        if (dropdown) {
            classes += ` ${base}__dropdown`;
        }

        if (underlined) {
            classes += ` ${base}__underlined`;
        }

        if (visited) {
            classes += ` ${base}__visited`;
        }

        return classes;
    };
</script>

<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- Event propagating click events on the underlying element -->
<svelte:element
    this={href ? "a" : "button"}
    {href}
    class={classes}
    disabled={(!href && disabled) || null}
    aria-disabled={href && disabled ? "true" : null}
    on:click
    {...$$restProps}
>
    <!-- Default slot -->
    <slot /></svelte:element
>

<script module lang="ts">
    export type Tag = "div" | "li";
</script>

<script lang="ts">
    import clsx from "clsx";
    import type { Snippet } from "svelte";
    import type {
        ClassValue,
        HTMLAnchorAttributes,
        HTMLButtonAttributes,
    } from "svelte/elements";
    import Icon from "../Icon/Icon.svelte";

    interface Props extends Omit<
        HTMLAnchorAttributes & HTMLButtonAttributes,
        "href" | "type" | "class"
    > {
        /**
         * If provided, renders as an anchor tag with this href
         */
        href?: string | undefined;

        /**
         * If true, applies danger styling for destructive actions
         */
        danger?: boolean;

        /**
         * The icon source to display before the menu item content
         */
        icon?: string | undefined;

        /**
         * If true, marks the menu item as selected
         */
        selected?: boolean;

        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;

        /**
         * Snippet for the menu item content
         */
        children: Snippet;
    }

    let {
        href,
        danger = false,
        icon,
        selected = false,
        class: className = "",
        onclick,
        children,
        ...restProps
    }: Props = $props();

    const getItemClasses = (className: ClassValue) => {
        return clsx("s-menu--item", className);
    };

    const getLinkClasses = (
        className: ClassValue,
        danger: boolean,
        selected: boolean
    ) => {
        return clsx(
            "s-menu--action",
            danger && "s-menu--action__danger",
            className,
            selected && "is--selected"
        );
    };

    const itemClasses = $derived(getItemClasses(className));
    const linkClasses = $derived(getLinkClasses("", danger, selected));
</script>

<li class={itemClasses} role="menuitem">
    <svelte:element
        this={href ? "a" : "button"}
        {href}
        {onclick}
        class={linkClasses}
        {...restProps}
    >
        {#if icon}
            <Icon src={icon} class="s-menu--icon" />
        {/if}
        {@render children()}
    </svelte:element>
</li>

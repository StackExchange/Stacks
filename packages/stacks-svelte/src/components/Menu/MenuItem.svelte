<script module lang="ts">
    export type Tag = "div" | "li";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import type {
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
        class?: string;

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

    const getItemClasses = (className: string) => {
        return `s-menu--item${className ? ` ${className}` : ""}`;
    };

    const getLinkClasses = (
        className: string,
        danger: boolean,
        selected: boolean
    ) => {
        const base = "s-menu--action";
        let classes = base;

        if (danger) {
            classes += ` ${base}__danger`;
        }

        if (className) {
            classes += ` ${className}`;
        }

        if (selected) {
            classes += ` is--selected`;
        }

        return classes;
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

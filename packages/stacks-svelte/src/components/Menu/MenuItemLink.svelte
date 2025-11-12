<script lang="ts">
    import type { Snippet } from "svelte";
    import Icon from "../Icon/Icon.svelte";

    interface Props {
        /**
         * If provided, renders as an anchor tag with this href
         */
        href?: string | undefined;

        /**
         * If true, applies danger styling for destructive actions
         */
        danger?: boolean;

        /**
         * If true, applies selected styling
         */
        selected?: boolean;

        /**
         * The icon source to display before the menu link content
         */
        icon?: string | undefined;

        /**
         * The title attribute for the icon
         */
        iconTitle?: string | undefined;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Snippet for the menu link content
         */
        children: Snippet;
    }

    let {
        href = undefined,
        danger = false,
        selected = false,
        icon = undefined,
        iconTitle = undefined,
        class: className = "",
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
        const base = "s-menu--link";
        let classes = base;

        if (danger) {
            classes += ` ${base}__danger`;
        }

        if (selected) {
            classes += ` is-selected`;
        }

        if (className) {
            classes += ` ${className}`;
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
        class={linkClasses}
        {...restProps}
    >
        {#if icon}
            <Icon src={icon} title={iconTitle} class="s-menu--icon" />
        {/if}
        {@render children()}
    </svelte:element>
</li>

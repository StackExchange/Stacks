<script lang="ts">
    import type { Snippet } from "svelte";
    import type {
        HTMLAnchorAttributes,
        HTMLButtonAttributes,
    } from "svelte/elements";
    import Icon from "../Icon/Icon.svelte";
    import Avatar from "../Avatar/Avatar.svelte";
    interface Props
        extends Omit<
            HTMLAnchorAttributes & HTMLButtonAttributes,
            "href" | "class"
        > {
        /**
         * The text of the navigation item
         */
        text: string;
        /**
         * If provided, renders as an anchor tag with this href
         */
        href?: string | undefined;
        /**
         * Indicates if the navigation item is selected
         */
        selected?: boolean;
        /**
         * Indicates if the navigation item is a dropdown. Use in horizontal navigations.
         */
        dropdown?: boolean;
        /**
         * The icon source to display before the navigation item text
         */
        icon?: string | undefined;
        /**
         * The icon source to display when the navigation item is selected
         */
        iconSelected?: string | undefined;
        /**
         * The avatar source to display before the navigation item text
         */
        avatar?: string | undefined;
        /**
         * Additional CSS classes added to the element
         */
        class?: string;
        /**
         * Optional content rendered at the end of the navigation item.
         */
        trailing?: Snippet;
    }
    let {
        text,
        href = undefined,
        selected = false,
        dropdown = false,
        icon = undefined,
        iconSelected = undefined,
        avatar = undefined,
        class: className = "",
        trailing,
        ...restProps
    }: Props = $props();
    const getClasses = (
        className: string,
        selected: boolean,
        dropdown: boolean
    ) => {
        const base = "s-navigation--item";
        let classes = "d-flex jc-space-between w100 " + base;
        if (dropdown) {
            classes += ` ${base}__dropdown`;
        }
        if (selected) {
            classes += ` is-selected`;
        }
        if (className) {
            classes += ` ${className}`;
        }
        return classes;
    };
    const classes = $derived(getClasses(className, selected, dropdown));
</script>

<li>
    <svelte:element
        this={href ? "a" : "button"}
        {href}
        class={classes}
        aria-current={selected ? "true" : undefined}
        {...restProps}
    >
        <div>
            {#if icon && iconSelected}
                <Icon
                    src={selected ? iconSelected : icon}
                    class="s-navigation--icon"
                />
            {/if}
            {#if avatar}
                <!-- TODO: should we have a version of the avatar decorative only? -->
                <Avatar name={text} src={avatar} class="s-navigation--avatar" />
            {/if}
            <span class="s-navigation--item-text" data-text={text}>{text}</span>
        </div>
        {@render trailing?.()}
    </svelte:element>
</li>

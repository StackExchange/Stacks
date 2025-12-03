<script lang="ts">
    import type { Snippet } from "svelte";
    import type {
        HTMLAnchorAttributes,
        HTMLInputAttributes,
    } from "svelte/elements";
    import Icon from "../Icon/Icon.svelte";

    interface Props
        extends Omit<
            HTMLAnchorAttributes & HTMLInputAttributes,
            "href" | "type" | "class"
        > {
        /**
         * If provided, renders as an anchor tag with this href
         */
        href?: string | undefined;

        /**
         * The type of input (radio or checkbox) - only used when href is not provided
         */
        type?: "radio" | "checkbox";

        /**
         * If true, applies danger styling for destructive actions
         */
        danger?: boolean;

        /**
         * The icon source to display before the menu content
         */
        icon?: string | undefined;

        /**
         * Additional CSS classes added to the item element
         */
        class?: string;

        /**
         * Additional CSS classes added to the label element (only used when href is not provided)
         */
        labelClass?: string;

        /**
         * Additional CSS classes added to the input element (only used when href is not provided)
         */
        inputClass?: string;

        /**
         * Snippet for the menu item content
         */
        children: Snippet;

        /**
         * Localized translation for the selected label
         */
        i18nSelectedLabel?: string;
    }

    let {
        href = undefined,
        type = "radio",
        danger = false,
        icon = undefined,
        class: className = "",
        labelClass = "",
        inputClass = "",
        children,
        i18nSelectedLabel = "Selected",
        checked = false,
        name,
        value,
        id,
        ...restProps
    }: Props = $props();

    const getItemClasses = (className: string) => {
        return `s-menu--item${className ? ` ${className}` : ""}`;
    };

    const getLinkClasses = (danger: boolean) => {
        const base = "s-menu--action";
        let classes = base;

        if (danger) {
            classes += ` ${base}__danger`;
        }

        return classes;
    };

    const getLabelClasses = (
        labelClass: string,
        danger: boolean,
        checked: boolean
    ) => {
        const base =
            "s-menu--action s-check-control s-check-control__checkmark";
        let classes = base;

        if (checked) {
            classes += ` is-selected`;
        }

        if (danger) {
            classes += ` s-menu--action__danger`;
        }

        if (labelClass) {
            classes += ` ${labelClass}`;
        }

        return classes;
    };

    const getInputClasses = (
        inputClass: string,
        type: "radio" | "checkbox"
    ) => {
        if (inputClass) {
            return inputClass;
        }
        return type === "radio" ? "s-radio" : "s-checkbox";
    };

    const itemClasses = $derived(getItemClasses(className));
    const linkClasses = $derived(getLinkClasses(danger));
    const labelClasses = $derived(
        getLabelClasses(labelClass, danger, checked ?? false)
    );
    const inputClasses = $derived(getInputClasses(inputClass, type));
</script>

<li class={itemClasses} role="menuitem">
    {#if href}
        <a {href} class={linkClasses} {...restProps}>
            {#if icon}
                <Icon src={icon} class="s-menu--icon" />
            {/if}
            {@render children()}
        </a>
    {:else}
        <label class={labelClasses}>
            {#if icon}
                <Icon src={icon} class="s-menu--icon" />
            {/if}
            <input
                {type}
                {name}
                {value}
                {id}
                {checked}
                class={inputClasses}
                {...restProps}
            />
            {@render children()}
            {#if checked}
                <span class="v-visible-sr">{i18nSelectedLabel}</span>
            {/if}
        </label>
    {/if}
</li>

<script module lang="ts">
    export type Type = "checkbox" | "radio";
</script>

<script lang="ts">
    import Check from "../Check/Check.svelte";
    import Icon from "../Icon/Icon.svelte";

    interface Props {
        /**
         * The id attribute of the input
         */
        id: string;

        /**
         * The type attribute of input
         */
        type: Type;

        /**
         * The name attribute of the input
         */
        name: string;

        /**
         * The label text for the input
         */
        label: string;

        /**
         * Sets the checked state of the input.
         */
        checked?: boolean;

        /**
         * The description text for the input
         */
        description?: string;

        /**
         * Sets the disabled state of the input
         */
        disabled?: boolean;

        /**
         * The icon source to display before the menu item content
         */
        icon?: string | undefined;

        /**
         * The value of the input
         */
        value?: string | number;

        /**
         * Additional CSS classes added to the check control container
         */
        class?: string;
    }

    const {
        id,
        name,
        label,
        type,
        checked = false,
        description = "",
        disabled = false,
        icon,
        value = "",
        class: className = "",
    }: Props = $props();

    const getItemClasses = (className: string) => {
        return `s-menu--item${className ? ` ${className}` : ""}`;
    };

    const itemClasses = $derived(getItemClasses(className));
</script>

<div class={itemClasses}>
    {#if icon}
        <Icon src={icon} class="s-menu--icon" />
    {/if}
    <Check
        class="s-menu--action"
        {checked}
        {description}
        {disabled}
        {id}
        {label}
        {name}
        {type}
        {value}
        checkmark
    />
</div>

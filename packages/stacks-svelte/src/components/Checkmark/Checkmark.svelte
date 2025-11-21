<script module lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";

    export type InputType = "radio" | "checkbox";

    export interface Props extends HTMLInputAttributes {
        /**
         * The id attribute of the checkmark input
         * @type {string}
         */
        id: string;

        /**
         * The name attribute of the checkmark input (required for radio groups)
         * @type {string}
         */
        name?: string;

        /**
         * The label text for the checkmark
         * @type {string}
         */
        label: string;

        /**
         * The type of input - "radio" for single-select (recommended) or "checkbox" for multi-select
         * @type {InputType}
         */
        type?: InputType;

        /**
         * Sets the checked state of the checkmark
         * @type {boolean}
         */
        checked?: boolean;

        /**
         * Sets the disabled state of the checkmark
         * @type {boolean}
         */
        disabled?: boolean;

        /**
         * The value of the checkmark input
         * @type {string | number | undefined}
         */
        value?: string | number;

        /**
         * Additional CSS classes added to the underlying HTML input element
         * @type {string}
         */
        class?: string;

        /**
         * Optional icon source to display before the label
         * @type {string | undefined}
         */
        icon?: string | undefined;

        /**
         * The title attribute for the icon
         * @type {string | undefined}
         */
        iconTitle?: string | undefined;
    }
</script>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";

    const {
        id,
        name,
        label,
        type = "radio",
        checked = false,
        disabled = false,
        value,
        class: className = "",
        icon,
        iconTitle,
        ...restProps
    }: Props = $props();

    const getClasses = (className: string) => {
        const base = "s-checkmark";
        let classes = base;

        if (className) {
            classes += " " + className;
        }

        return classes;
    };

    const classes = $derived(getClasses(className));
</script>

<div class="s-check-control s-check-control__checkmark">
    {#if icon}
        <Icon src={icon} title={iconTitle} />
    {/if}
    <label class="s-label" for={id}>
        {label}
    </label>
    <input
        {type}
        {id}
        {name}
        {value}
        {checked}
        {disabled}
        class={classes}
        {...restProps}
    />
</div>

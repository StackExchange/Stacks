<script module lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";

    export interface Props extends HTMLInputAttributes {
        /**
         * The id attribute of the radio input
         * @type {string}
         */
        id: string;

        /**
         * The name attribute of the radio input (required for radio groups)
         * @type {string}
         */
        name: string;

        /**
         * The label text for the radio button
         * @type {string}
         */
        label: string;

        /**
         * Sets the checked state of the radio
         * @type {boolean}
         */
        checked?: boolean;

        /**
         * Sets the disabled state of the radio
         * @type {boolean}
         */
        disabled?: boolean;

        /**
         * The value of the radio input
         * @type {string | number | undefined}
         */
        value?: string | number;

        /**
         * Additional CSS classes added to the underlying HTML input element
         * @type {string}
         */
        class?: string;
    }
</script>

<script lang="ts">
    const {
        id,
        name,
        label,
        checked = false,
        disabled = false,
        value,
        class: className = "",
        ...restProps
    }: Props = $props();

    const getClasses = (className: string) => {
        const base = "s-radio";
        let classes = base;

        if (className) {
            classes += " " + className;
        }

        return classes;
    };

    const classes = $derived(getClasses(className));
</script>

<div class="s-check-control">
    <input
        type="radio"
        {id}
        {name}
        {value}
        {checked}
        {disabled}
        class={classes}
        {...restProps}
    />
    <label class="s-label" for={id}>
        {label}
    </label>
</div>

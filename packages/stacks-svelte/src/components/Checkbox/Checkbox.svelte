<script module lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";

    export interface Props extends HTMLInputAttributes {
        /**
         * The id attribute of the checkbox input
         * @type {string}
         */
        id: string;

        /**
         * The name attribute of the checkbox input (optional for checkboxes)
         * @type {string}
         */
        name?: string;

        /**
         * The label text for the checkbox
         * @type {string}
         */
        label: string;

        /**
         * Sets the checked state of the checkbox
         * @type {boolean}
         */
        checked?: boolean;

        /**
         * Sets the disabled state of the checkbox
         * @type {boolean}
         */
        disabled?: boolean;

        /**
         * Sets the indeterminate state of the checkbox (must be set via JavaScript)
         * @type {boolean}
         */
        indeterminate?: boolean;

        /**
         * The value of the checkbox input
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
        indeterminate = false,
        value,
        class: className = "",
        ...restProps
    }: Props = $props();

    let inputElement: HTMLInputElement;

    const getClasses = (className: string) => {
        const base = "s-checkbox";
        let classes = base;

        if (className) {
            classes += " " + className;
        }

        return classes;
    };

    const classes = $derived(getClasses(className));

    // Handle indeterminate state (must be set on the DOM element)
    $effect(() => {
        if (inputElement) {
            inputElement.indeterminate = indeterminate;
        }
    });
</script>

<div class="s-check-control">
    <input
        bind:this={inputElement}
        type="checkbox"
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

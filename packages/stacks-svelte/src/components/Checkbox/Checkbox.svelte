<script module lang="ts">
    export type Checked = boolean;
    export type State = "" | "error" | "success" | "warning";
</script>

<script lang="ts">
    import Label from "../Label/Label.svelte";

    export type Props = {
        /**
         * The id attribute of the input
         */
        id: string;

        /**
         * The name attribute of the input
         */
        name: string;

        /**
         * The label text for the input
         */
        label: string;

        /**
         * Sets whether the input is rendered using the checkmark style
         */
        checkmark?: boolean;

        /**
         * Sets the checked state of the input
         */
        checked?: Checked;

        /**
         * Sets the indeterminate state of the input
         */
        indeterminate?: boolean;

        /**
         * The description text for the input
         */
        description?: string;

        /**
         * Sets the disabled state of the input
         */
        disabled?: boolean;

        /**
         * The validation state of the input
         */
        state?: State;

        /**
         * The value of the input
         */
        value?: string | number;

        /**
         * Additional CSS classes
         */
        class?: string;

        /**
         * Change event handler
         */
        onchange?: (
            event: Event & { currentTarget: EventTarget & HTMLInputElement }
        ) => void;
    };

    let {
        id,
        name,
        label,
        checked = $bindable(false),
        indeterminate = false,
        checkmark = false,
        description = "",
        disabled = false,
        state = "",
        value = "",
        class: className = "",
        onchange,
    }: Props = $props();

    let inputElement: HTMLInputElement;

    $effect(() => {
        if (inputElement) {
            inputElement.indeterminate = indeterminate;
            // When indeterminate is set to true, ensure checked is false
            if (indeterminate && checked) {
                checked = false;
                inputElement.checked = false;
            }
        }
    });

    const getClasses = (
        className: string,
        checkmark: boolean,
        state: State
    ) => {
        const base = "s-checkbox";
        let classes = base;

        if (className) {
            classes += " " + className;
        }

        if (checkmark) {
            classes += ` ${base}__checkmark`;
        }

        if (state) {
            classes += ` has-${state}`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, checkmark, state));
</script>

<svelte:element
    this={checkmark ? "label" : "div"}
    class={classes}
    for={checkmark ? id : undefined}
>
    <input
        bind:this={inputElement}
        bind:checked
        {disabled}
        {id}
        {name}
        type="checkbox"
        {value}
        onchange={(event) => {
            if (indeterminate) {
                // Reset checked state when indeterminate - bind:checked may have already updated it
                // We need to reset both the bound value and the DOM element
                checked = false;
                if (inputElement) {
                    inputElement.checked = false;
                    inputElement.indeterminate = true;
                }
            }
            onchange?.(event);
        }}
    />
    {#if checkmark}
        {#if description}
            <div>
                {label}
                <p class="s-description">{description}</p>
            </div>
        {:else}
            {label}
        {/if}
    {:else}
        <Label {id}>
            {label}
            {#if description}
                <p class="s-description">
                    {description}
                </p>
            {/if}
        </Label>
    {/if}
</svelte:element>

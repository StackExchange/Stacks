<script module lang="ts">
    export type Checked = boolean | "indeterminate";
    export type State = "" | "error" | "success" | "warning";
</script>

<script lang="ts">
    import Label from "../Label/Label.svelte";

    type Props = {
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
         * Sets the checked state of the input. "indeterminate" can only be used for checkboxes.
         */
        checked?: Checked;

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
         * Additional CSS classes added to the checkbox control container
         */
        class?: string;
    };

    const {
        id,
        name,
        label,
        checked = false,
        checkmark = false,
        description = "",
        disabled = false,
        state = "",
        value = "",
        class: className = "",
    }: Props = $props();

    let inputElement: HTMLInputElement;

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

    // Handle indeterminate state (must be set on the DOM element)
    $effect(() => {
        inputElement.indeterminate =
            checked === "indeterminate" && !!inputElement;
    });
</script>

<svelte:element
    this={checkmark ? "label" : "div"}
    class={classes}
    for={checkmark ? id : undefined}
>
    <input
        bind:this={inputElement}
        checked={checked === "indeterminate" ? false : checked}
        {disabled}
        {id}
        {name}
        type="checkbox"
        {value}
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
        <Label {id}
            >{label}{#if description}<p class="s-description">
                    {description}
                </p>{/if}</Label
        >
    {/if}
</svelte:element>

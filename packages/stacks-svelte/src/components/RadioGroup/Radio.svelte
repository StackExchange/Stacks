<script module lang="ts">
    export type State = "" | "error" | "success" | "warning";
</script>

<script lang="ts">
    import clsx from "clsx";
    import Label from "../Label/Label.svelte";
    import type { ClassValue } from "svelte/elements";

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
        class?: ClassValue;

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
        checked = false,
        checkmark = false,
        description = "",
        disabled = false,
        state = "",
        value = "",
        class: className = "",
        onchange,
    }: Props = $props();

    const getClasses = (
        className: ClassValue,
        checkmark: boolean,
        state: State
    ) => {
        const base = "s-radio";
        const classes: string[] = [];
        if (checkmark) {
            classes.push(`${base}__checkmark`);
        }
        if (state) {
            classes.push(`has-${state}`);
        }
        return clsx(base, className, classes);
    };

    const classes = $derived(getClasses(className, checkmark, state));
</script>

<svelte:element
    this={checkmark ? "label" : "div"}
    class={classes}
    for={checkmark ? id : undefined}
>
    <input {checked} {disabled} {id} {name} type="radio" {value} {onchange} />
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

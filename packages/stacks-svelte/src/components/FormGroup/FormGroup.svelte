<script module lang="ts">
    export type State = "" | "error" | "success" | "warning";
    export type Type = "radio" | "checkbox";
</script>

<script lang="ts">
    import Checkbox from "../Checkbox/Checkbox.svelte";
    import Radio from "../RadioGroup/Radio.svelte";
    import type { Props as CheckboxProps } from "../Checkbox/Checkbox.svelte";
    import type { Props as RadioProps } from "../RadioGroup/Radio.svelte";

    export type CheckboxOption = Omit<CheckboxProps, "name" | "id"> & {
        id?: string;
    };
    export type RadioOption = Omit<RadioProps, "name" | "id"> & {
        id?: string;
    };
    export type Option = CheckboxOption | RadioOption;
    export type Props = {
        /**
         * The type of the form group
         */
        type: Type;

        /**
         * The label of the form group
         */
        label: string;

        /**
         * The name attribute shared by all inputs in the group
         */
        name: string;

        /**
         * The options of the form group
         */
        options: Option[];

        /**
         * The value of the form group
         */
        value?: string | number | (string | number)[];

        /**
         * The disabled state of the form group
         */
        disabled?: boolean;

        /**
         * The horizontal state of the form group
         */
        horizontal?: boolean;

        /**
         * The state of the form group
         */
        state?: State;

        /**
         * Additional CSS classes
         */
        class?: string;
    };

    let {
        type,
        label,
        name,
        options,
        value = $bindable(),
        disabled = false,
        horizontal = false,
        state = "",
        class: className = "",
    }: Props = $props();

    // Ensure all options have the name and id properties set
    const optionsWithName = $derived(
        options.map((option, index) => ({
            ...option,
            name,
            id: option.id ?? `${name}-${index}`,
        }))
    );

    const isChecked = (optionValue: string | number | undefined) => {
        if (!optionValue) return false;
        if (type === "radio") {
            return value === optionValue;
        } else {
            return Array.isArray(value) && value.includes(optionValue);
        }
    };

    const handleChange = (
        optionValue: string | number | undefined,
        checked: boolean
    ) => {
        if (!optionValue) return;
        if (type === "radio" && checked) {
            value = optionValue;
        } else if (type === "checkbox" && checked) {
            value = [...(Array.isArray(value) ? value : []), optionValue];
        } else if (type === "checkbox" && !checked) {
            value = Array.isArray(value)
                ? value.filter((v) => v !== optionValue)
                : [];
        }
    };

    const getClasses = (
        className: string,
        horizontal: boolean,
        state: State
    ) => {
        const base = "s-form-group";
        let classes = base;

        if (className) {
            classes += " " + className;
        }

        if (horizontal) {
            classes += ` ${base}__horizontal`;
        }

        if (state) {
            classes += ` has-${state}`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, horizontal, state));
</script>

<fieldset class={classes} {disabled}>
    <legend class="s-label">{label}</legend>
    {#each optionsWithName as option (option.value)}
        {#if type === "checkbox"}
            {@const checkboxOption = option as CheckboxProps}
            <Checkbox
                {...checkboxOption}
                checked={checkboxOption.checked !== undefined
                    ? checkboxOption.checked
                    : isChecked(option.value)}
                onchange={(event) => {
                    const newChecked = event.currentTarget.checked;
                    handleChange(option.value, newChecked);
                    checkboxOption.onchange?.(event);
                }}
            />
        {:else}
            {@const radioOption = option as RadioProps}
            <Radio
                {...radioOption}
                checked={isChecked(option.value ?? "")}
                onchange={(event) => {
                    handleChange(option.value, event.currentTarget.checked);
                    radioOption.onchange?.(event);
                }}
            />
        {/if}
    {/each}
</fieldset>

<script module lang="ts">
    import type { Checked } from "../Checkbox/Checkbox.svelte";
    import type {
        Props as FormGroupProps,
        CheckboxOption as FormGroupCheckboxOption,
        State as FormGroupState,
    } from "../FormGroup/FormGroup.svelte";
    export type CheckboxOption = FormGroupCheckboxOption;
    export type State = FormGroupState;
    export type CheckboxChecked = Checked;
</script>

<script lang="ts">
    import FormGroup from "../FormGroup/FormGroup.svelte";

    type Props = Omit<FormGroupProps, "options" | "type"> & {
        /**
         * The array of checkbox options to render
         */
        options: CheckboxOption[];
    };

    let {
        label,
        name,
        options,
        value = $bindable([]),
        disabled = false,
        horizontal = false,
        state = "",
        class: className = "",
    }: Props = $props();
</script>

<FormGroup
    type="checkbox"
    bind:value
    class={className}
    {disabled}
    {horizontal}
    {label}
    {name}
    {options}
    {state}
/>

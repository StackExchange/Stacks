<script module lang="ts">
    import type {
        Props as FormGroupProps,
        RadioOption as FormGroupRadioOption,
        State as FormGroupState,
    } from "../FormGroup/FormGroup.svelte";
    export type RadioOption = FormGroupRadioOption;
    export type State = FormGroupState;
</script>

<script lang="ts">
    import FormGroup from "../FormGroup/FormGroup.svelte";

    type Props = Omit<FormGroupProps, "options" | "type"> & {
        /**
         * The array of radio options to render
         */
        options: RadioOption[];
    };

    let {
        label,
        name,
        options,
        value = $bindable(),
        disabled = false,
        horizontal = false,
        state = "",
        class: className = "",
        onValueChange,
    }: Props = $props();
</script>

<FormGroup
    type="radio"
    bind:value
    class={className}
    {disabled}
    {horizontal}
    {label}
    {name}
    {options}
    {state}
    {onValueChange}
/>

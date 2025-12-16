<script module lang="ts">
    import type { State as CheckState } from "../Check/Check.svelte";
    export type State = CheckState;
</script>

<script lang="ts">
    import Check, { type CheckProps } from "../Check/Check.svelte";

    type Props = Omit<CheckProps, "type" | "checked"> & {
        /**
         * Sets the checked state of the input
         */
        checked?: boolean;
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
</script>

<Check
    {id}
    {name}
    {label}
    {checkmark}
    {checked}
    {description}
    {disabled}
    {state}
    {value}
    class={className}
    type="radio"
/>

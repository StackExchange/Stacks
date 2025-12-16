<script module lang="ts">
    import type { State as CheckGroupState } from "../CheckGroup/CheckGroup.svelte";
    export type State = CheckGroupState;
</script>

<script lang="ts">
    import CheckGroup, {
        type CheckGroupProps,
    } from "../CheckGroup/CheckGroup.svelte";

    type Props = Omit<CheckGroupProps, "type">;

    const {
        label,
        disabled = false,
        horizontal = false,
        state = "",
        class: className = "",
        children,
    }: Props = $props();
</script>

<CheckGroup
    {label}
    type="checkbox"
    {disabled}
    {horizontal}
    {state}
    class={className}
>
    {@render children()}
</CheckGroup>

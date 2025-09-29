<script lang="ts">
    import { useSelectContext } from "./Select.svelte";

    /**
     * Specify the option value
     * @type {string | number}
     */
    export let value: string | number = "";

    /** Specify the option text
     * @type {string}
     */
    export let text = "";

    /** Set to `true` to disable the option
     * @type {boolean}
     */
    export let disabled = false;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let state = useSelectContext("SelectItem");
</script>

<option
    {value}
    {disabled}
    selected={$state.selected === value}
    data-selected={$state.selected === value}
>
    {text || value}
</option>

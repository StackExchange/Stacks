<script lang="ts">
    import { useSelectContext } from "./Select.svelte";

    interface Props {
        /**
         * Specify the option value
         */
        value?: string | number;

        /**
         * Specify the option text
         */
        text?: string;

        /**
         * Set to `true` to disable the option
         */
        disabled?: boolean;
    }

    let { value = "", text = "", disabled = false }: Props = $props();

    let state = useSelectContext("SelectItem");

    let isSelected = $derived(state.selected === value);
</script>

<option {value} {disabled} selected={isSelected} data-selected={isSelected}>
    {text || value}
</option>

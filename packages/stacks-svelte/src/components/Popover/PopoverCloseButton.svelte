<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import { IconClear } from "@stackoverflow/stacks-icons/icons";
    import { usePopoverContext } from "./Popover.svelte";

    const pstate = usePopoverContext("PopoverCloseButton");

    /**
     * The aria-label for the close button
     */
    export let label: string = "Close";

    /**
     * Additional CSS classes added to the element
     */
    let className = "";
    export { className as class };
</script>

<button
    aria-label={label}
    class={`s-popover--close s-btn s-btn__muted ps-absolute${className ? ` ${className}` : ""}`}
    type="button"
    on:click={$pstate.close}
    on:click
>
    <Icon src={IconClear} />
</button>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import { IconClear } from "@stackoverflow/stacks-icons/icons";
    import { usePopoverContext } from "./Popover.svelte";

    interface Props {
        /**
         * The aria-label for the close button
         */
        label?: string;
        /**
         * Additional CSS classes added to the element
         */
        class?: string;
        /**
         * Callback fired when the close button is clicked
         */
        onclick?: (e: MouseEvent) => void;
    }

    let { label = "Close", class: className = "", onclick }: Props = $props();

    const pstate = usePopoverContext("PopoverCloseButton");

    const handleClick = (e: MouseEvent) => {
        pstate.close();
        onclick?.(e);
    };
</script>

<button
    aria-label={label}
    class={`s-popover--close s-btn s-btn__muted ps-absolute${className ? ` ${className}` : ""}`}
    type="button"
    onclick={handleClick}
>
    <Icon src={IconClear} />
</button>

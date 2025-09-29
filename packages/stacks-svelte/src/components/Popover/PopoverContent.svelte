<script lang="ts">
    import { usePopoverContext } from "./Popover.svelte";
    import { clickOutside, focusTrap } from "../../actions";

    /**
     * The aria role of the popover
     * (if not specified, it will default to 'dialog' for popovers or 'tooltip' when in tooltip mode)
     * @type {string}
     */
    export let role: string | null = null;
    /**
     * Additional CSS classes added to the element
     */
    let className = "";
    export { className as class };

    let pstate = usePopoverContext("PopoverContent");
    let classes = "s-popover";

    const arrowEl = $pstate.arrowEl;

    if ($pstate.tooltip) {
        classes += " s-popover__tooltip";
    }

    if (className) {
        classes += " " + className;
    }
</script>

<!-- data-popper-placement is needed for compatibility with stacks classic popover styles -->
<div
    id={`${$pstate.id}-popover`}
    class={`${classes}${$pstate.visible ? " is-visible" : ""}`}
    role={role || ($pstate.tooltip ? "tooltip" : "dialog")}
    use:$pstate.floatingContent
    use:focusTrap={{ active: $pstate.trapFocus && !!$pstate.visible }}
    use:clickOutside
    onoutclick={$pstate.onOutclick}
    onmouseenter={$pstate.openTooltip}
    onmouseleave={$pstate.closeTooltip}
    onfocusin={$pstate.openTooltip}
    onfocusout={$pstate.closeTooltip}
    data-popper-placement={$pstate.computedPlacement}
>
    <div class="s-popover--arrow" bind:this={$arrowEl}></div>
    <div class="s-popover--content p12 mn12">
        <div class="ps-relative">
            <slot />
        </div>
    </div>
</div>

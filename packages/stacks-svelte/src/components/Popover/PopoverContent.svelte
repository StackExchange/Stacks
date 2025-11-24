<script lang="ts">
    import type { Snippet } from "svelte";
    import { usePopoverContext } from "./Popover.svelte";
    import { clickOutside, focusTrap } from "../../actions";

    interface Props {
        /**
         * The aria role of the popover
         * (if not specified, it will default to 'dialog' for popovers or 'tooltip' when in tooltip mode)
         */
        role?: string | null;
        /**
         * Additional CSS classes added to the s-popover element
         */
        class?: string;
        /**
         * Additional CSS classes added to the s-popover--content element
         */
        contentClass?: string;
        /**
         * Children snippet
         */
        children?: Snippet;
    }

    let {
        role = null,
        class: className = "",
        contentClass = "",
        children,
    }: Props = $props();

    let pstate = usePopoverContext("PopoverContent");

    let classes = $derived.by(() => {
        let result = "s-popover";
        if (pstate.tooltip) {
            result += " s-popover__tooltip";
        }
        if (className) {
            result += " " + className;
        }
        return result;
    });

    let contentClasses = $derived.by(() => {
        let result = "s-popover--content";
        if (contentClass) {
            result += " " + contentClass;
        }
        return result;
    });

    let computedClass = $derived(
        `${classes}${pstate.visible ? " is-visible" : ""}`
    );

    let computedRole = $derived(
        role || (pstate.tooltip ? "tooltip" : "dialog")
    );
</script>

<!-- data-popper-placement is needed for compatibility with stacks classic popover styles -->
<div
    id={`${pstate.id}-popover`}
    class={computedClass}
    role={computedRole}
    use:pstate.floatingContent
    use:focusTrap={{ active: pstate.trapFocus && !!pstate.visible }}
    use:clickOutside
    onoutclick={pstate.onOutclick}
    onmouseenter={pstate.openTooltip}
    onmouseleave={pstate.closeTooltip}
    onfocusin={pstate.openTooltip}
    onfocusout={pstate.closeTooltip}
    data-popper-placement={pstate.computedPlacement}
>
    <div class={contentClasses}>
        <div class="ps-relative">
            {@render children?.()}
        </div>
    </div>
</div>

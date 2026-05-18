<script lang="ts">
    import clsx from "clsx";
    import type { Snippet } from "svelte";
    import type { ClassValue } from "svelte/elements";
    import { usePopoverContext } from "./Popover.svelte";
    import { clickOutside, focusTrap } from "../../actions";

    interface Props {
        /**
         * The aria role of the popover
         * (if not specified, it will default to 'dialog' for popovers or 'tooltip' when in tooltip mode)
         */
        role?: string | null;
        /**
         * Accessible label for the popover
         */
        ariaLabel?: string;
        /**
         * ID of an element that labels the popover
         */
        ariaLabelledby?: string;
        /**
         * Additional CSS classes added to the s-popover element
         */
        class?: ClassValue;
        /**
         * Additional CSS classes added to the s-popover--content element
         */
        contentClass?: ClassValue;
        /**
         * Children snippet
         */
        children?: Snippet;
    }

    let {
        role = null,
        ariaLabel,
        ariaLabelledby,
        class: className = "",
        contentClass = "",
        children,
    }: Props = $props();

    let pstate = usePopoverContext("PopoverContent");

    let popoverClasses = $derived.by(() => {
        const base = "s-popover";
        const modifiers: string[] = [];
        if (pstate.tooltip) {
            modifiers.push(`${base}__tooltip`);
        }
        // Order matches legacy: base → BEM modifiers → user class → visibility
        return clsx(
            base,
            modifiers,
            className,
            pstate.visible ? "is-visible" : false
        );
    });

    let contentClasses = $derived.by(() => {
        return clsx("s-popover--content", contentClass);
    });

    let computedRole = $derived(
        role || (pstate.tooltip ? "tooltip" : "dialog")
    );
</script>

<!-- data-popper-placement is needed for compatibility with stacks classic popover styles -->
<div
    id={`${pstate.id}-popover`}
    class={popoverClasses}
    role={computedRole}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
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

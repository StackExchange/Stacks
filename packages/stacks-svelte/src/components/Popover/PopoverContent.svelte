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
         * Additional CSS classes added to the element
         */
        class?: string;
        /**
         * Children snippet
         */
        children?: Snippet;
    }

    let { role = null, class: className = "", children }: Props = $props();

    let pstate = usePopoverContext("PopoverContent");
    let contentElement: HTMLElement | undefined;

    const arrowEl = pstate.arrowEl;

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

    let computedClass = $derived(
        `${classes}${pstate.visible ? " is-visible" : ""}`
    );

    let computedRole = $derived(
        role || (pstate.tooltip ? "tooltip" : "dialog")
    );

    const onFocusOut = (e: FocusEvent) => {
        pstate.closeTooltip();
        pstate.onFocusOut(e);
    };

    $effect(() => {
        pstate.closeOnFocusLeave =
            !pstate.tooltip &&
            (computedRole === "menu" ||
                !!contentElement?.querySelector('[role="menu"]'));
    });
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
    onfocusout={onFocusOut}
    data-popper-placement={pstate.computedPlacement}
    bind:this={contentElement}
>
    <div class="s-popover--arrow" bind:this={$arrowEl}></div>
    <div class="s-popover--content p12 mn12">
        <div class="ps-relative">
            {@render children?.()}
        </div>
    </div>
</div>

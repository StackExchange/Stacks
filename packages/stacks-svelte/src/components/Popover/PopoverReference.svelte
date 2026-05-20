<script lang="ts">
    import type { Snippet } from "svelte";
    import { onMount } from "svelte";
    import { usePopoverContext } from "./Popover.svelte";
    import type { PopoverState } from "./Popover.svelte";

    interface Props {
        /**
         * The id of the reference element
         * (this is an alternative to passing the element as a slot)
         */
        elementId?: string | null;
        /**
         * Children snippet
         */
        children?: Snippet;
    }

    let { elementId = null, children }: Props = $props();

    let referenceWrapper: HTMLElement;
    let reference: HTMLElement;

    let pstate = usePopoverContext("PopoverReference");

    const isButton = (el: Element) =>
        el.tagName.toLowerCase() === "button" ||
        el.getAttribute("role") === "button";

    const findButton = (el: HTMLElement): HTMLElement | null => {
        if (isButton(el)) return el;
        return el.children.length > 0
            ? findButton(el.children[0] as HTMLElement)
            : null;
    };

    const setupRef = (
        elId: string | null,
        refWrapper: HTMLElement,
        state: PopoverState
    ) => {
        let ref: HTMLElement | null = null;
        if (elId) {
            ref = document.getElementById(elId) as HTMLElement;
        } else {
            ref = refWrapper.firstElementChild as HTMLElement;
            if (!pstate.tooltip && !pstate.controlled) {
                ref = findButton(ref);
                if (!ref) {
                    throw new Error(
                        "Reference element must have a role of 'button' for uncontrolled popovers."
                    );
                }
            }
        }

        if (!ref) {
            throw new Error("No reference element found.");
        }

        state.floatingRef(ref);
        return ref;
    };

    const setupPopover = (ref: HTMLElement, pstate: PopoverState) => {
        ref.setAttribute("aria-controls", `${pstate.id}-popover`);
        const toggle = pstate.dismissible ? pstate.toggle : pstate.open;
        ref.addEventListener("click", toggle);
        return () => ref.removeEventListener("click", toggle);
    };

    const setupTooltip = (ref: HTMLElement, pstate: PopoverState) => {
        ref.addEventListener("mouseenter", pstate.openTooltip);
        ref.addEventListener("mouseleave", pstate.closeTooltip);
        ref.addEventListener("focusin", pstate.openTooltip);
        ref.addEventListener("focusout", pstate.closeTooltip);
        ref.setAttribute("aria-describedby", `${pstate.id}-popover`);
        return () => {
            ref.removeEventListener("mouseenter", pstate.openTooltip);
            ref.removeEventListener("mouseleave", pstate.closeTooltip);
            ref.removeEventListener("focusin", pstate.openTooltip);
            ref.removeEventListener("focusout", pstate.closeTooltip);
        };
    };

    onMount(() => {
        reference = setupRef(elementId, referenceWrapper, pstate);

        // if the popover is controlled, we delegate all the behavior to the consumer
        if (pstate.controlled) return;

        pstate.tooltip
            ? setupTooltip(reference, pstate)
            : setupPopover(reference, pstate);
    });

    $effect(() => {
        if (!pstate.controlled && !pstate.tooltip) {
            reference?.setAttribute(
                "aria-expanded",
                Boolean(pstate.visible).toString()
            );
        }
    });
</script>

<!-- Hack: there is not easy way in svelte to get the reference element from the slot -->
<!-- https://stackoverflow.com/questions/56104899/how-do-i-access-the-value-of-a-slot-in-a-svelte-3-component -->
<span bind:this={referenceWrapper}>
    {@render children?.()}
</span>

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
        let ref: HTMLElement | null;
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
        ref.addEventListener("focusout", pstate.onFocusOut);
        return () => {
            ref.removeEventListener("click", toggle);
            ref.removeEventListener("focusout", pstate.onFocusOut);
        };
    };

    const setupTooltip = (ref: HTMLElement, pstate: PopoverState) => {
        const hoverMedia = window.matchMedia("(hover: hover)");
        let pointerDown = false;
        let pointerType = "";
        const onPointerDown = (event: PointerEvent) => {
            pointerDown = true;
            pointerType = event.pointerType;
        };
        const onPointerUp = () => {
            pointerDown = false;
        };
        const onPointerCancel = () => {
            pointerDown = false;
            pointerType = "";
        };
        const onClick = () => {
            const activatedByTouch = pointerType && pointerType !== "mouse";
            pointerType = "";
            if (activatedByTouch) {
                pstate.toggle();
            }
        };
        const openTooltipOnKeyboardFocus = () => {
            if (!pointerDown) {
                pstate.openTooltip();
            }
        };
        const setHoverListeners = (matches: boolean) => {
            const action = matches ? "addEventListener" : "removeEventListener";
            ref[action]("mouseenter", pstate.openTooltip);
            ref[action]("mouseleave", pstate.closeTooltip);
        };
        const onHoverSupportChange = ({ matches }: MediaQueryListEvent) => {
            setHoverListeners(matches);
            const activeElement = document.activeElement;
            const content = document.getElementById(`${pstate.id}-popover`);
            const focusWithinTooltip =
                activeElement &&
                (ref.contains(activeElement) ||
                    content?.contains(activeElement));
            if (!matches && !focusWithinTooltip) {
                pstate.closeTooltip();
            }
        };

        setHoverListeners(hoverMedia.matches);
        hoverMedia.addEventListener("change", onHoverSupportChange);
        ref.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointerup", onPointerUp, true);
        window.addEventListener("pointercancel", onPointerCancel, true);
        ref.addEventListener("click", onClick);
        ref.addEventListener("focusin", openTooltipOnKeyboardFocus);
        ref.addEventListener("focusout", pstate.closeTooltip);
        ref.setAttribute("aria-describedby", `${pstate.id}-popover`);
        return () => {
            hoverMedia.removeEventListener("change", onHoverSupportChange);
            ref.removeEventListener("mouseenter", pstate.openTooltip);
            ref.removeEventListener("mouseleave", pstate.closeTooltip);
            ref.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp, true);
            window.removeEventListener("pointercancel", onPointerCancel, true);
            ref.removeEventListener("click", onClick);
            ref.removeEventListener("focusin", openTooltipOnKeyboardFocus);
            ref.removeEventListener("focusout", pstate.closeTooltip);
        };
    };

    const setupControlledPopover = (ref: HTMLElement, pstate: PopoverState) => {
        if (!pstate.tooltip) {
            ref.addEventListener("focusout", pstate.onFocusOut);
        }
        return () => ref.removeEventListener("focusout", pstate.onFocusOut);
    };

    onMount(() => {
        reference = setupRef(elementId, referenceWrapper, pstate);

        // if the popover is controlled, we delegate all the behavior to the consumer
        if (pstate.controlled) return setupControlledPopover(reference, pstate);

        return pstate.tooltip
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

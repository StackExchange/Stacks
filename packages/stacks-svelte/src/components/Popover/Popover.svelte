<script lang="ts" module>
    import type { Snippet } from "svelte";
    import type { Placement } from "@floating-ui/core";
    import { getContext } from "svelte";

    export interface PopoverState {
        id: string;
        controlled: boolean;
        visible: boolean | undefined;
        dismissible: boolean;
        trapFocus: boolean;
        computedPlacement: Placement;
        tooltip: boolean;
        floatingRef: (element: HTMLElement) => void;
        floatingContent: (element: HTMLElement) => void;
        onOutclick: (e: CustomEvent<HTMLElement>) => void;
        open: () => void;
        openTooltip: () => void;
        close: () => void;
        closeTooltip: () => void;
        toggle: () => void;
    }

    const POPOVER_CONTEXT_NAME = "popover-context";

    export function usePopoverContext(component: string): PopoverState {
        let context = getContext(POPOVER_CONTEXT_NAME) as
            | PopoverState
            | undefined;
        if (context === undefined) {
            throw new Error(
                `<${component} /> is missing a parent <Popover /> component.`
            );
        }
        return context;
    }
</script>

<script lang="ts">
    import type { Strategy } from "@floating-ui/core";
    import { setContext } from "svelte";
    import { offset, inline, flip } from "@floating-ui/dom";
    import { createFloatingActions } from "svelte-floating-ui";

    interface Props {
        /**
         * The html id attribute for the popover (required)
         */
        id: string;
        /**
         * Whether or not the popover should be visible on mount
         */
        autoshow?: boolean;
        /**
         * Boolean describing if the popover panel should be visible or not.
         * If not specified, the component is uncontrolled and toggling behavior is automatically taken care of.
         * When specified, the component is controlled by the consumer and the internal open/closed state is ignored.
         */
        visible?: boolean | undefined;
        /**
         * Dictates where to place the popover in relation to the reference element
         */
        placement?: Placement;
        /**
         * The type of CSS position property to use for the popover content.
         * See https://floating-ui.com/docs/computeposition#strategy
         */
        strategy?: Strategy;
        /**
         * Whether or not the popover should trap focus within itself
         * When active make sure to include in the popover content a way for the user dismiss the popover (e.g. a cancel button or the PopoverCloseButton component)
         */
        trapFocus?: boolean;
        /**
         * Whether or not the popover should close when clicking outside of it or in the reference element
         */
        dismissible?: boolean;
        /**
         * Whether or not the popover should be an on-hover tooltip
         */
        tooltip?: boolean;
        /**
         * Callback fired when the popover is opened
         */
        onopen?: () => void;
        /**
         * Callback fired when the popover is closed
         */
        onclose?: () => void;
        /**
         * Callback fired when a click occurs outside the popover.
         * Use this to control what happens on outside clicks (e.g., close the popover in manually controlling visibility).
         */
        onoutclick?: () => void;
        /**
         * Children snippet with visible, open, and close parameters
         */
        children?: Snippet<
            [
                {
                    visible: boolean | undefined;
                    open: () => void;
                    close: () => void;
                },
            ]
        >;
    }

    let {
        id,
        autoshow = false,
        visible = undefined,
        placement = "bottom",
        strategy = "absolute",
        trapFocus = false,
        dismissible = true,
        tooltip = false,
        onopen,
        onclose,
        onoutclick,
        children,
    }: Props = $props();

    // These delays preserve the same behavior of Stacks Classic s-tooltip
    // https://github.com/StackExchange/Stacks/blob/develop/lib/components/popover/tooltip.ts
    const TOOLTIP_OPEN_DELAY = 300;
    const TOOLTIP_CLOSE_DELAY = 100;

    let reference: HTMLElement;
    let activeTimeout: number;

    // if the visible prop is passed, the component is controlled
    const controlled = $derived(visible !== undefined);

    const [floatingRef, floatingContent, update] = createFloatingActions({
        placement,
        strategy,
        middleware: [offset(10), flip(), inline()],
        onComputed({ placement: computedPlacement }) {
            pstate.computedPlacement = computedPlacement;
        },
    });

    const open = (delay: number = 0) => {
        window.clearTimeout(activeTimeout);
        if (controlled) return;
        if (!pstate.visible) {
            activeTimeout = window.setTimeout(() => {
                pstate.visible = true;
                // Fires when the popover is opened
                onopen?.();
            }, delay);
        }
    };

    const openTooltip = () => {
        if (!tooltip) return;
        open(TOOLTIP_OPEN_DELAY);
    };

    const closeTooltip = () => {
        if (!tooltip) return;
        close(TOOLTIP_CLOSE_DELAY);
    };

    const close = (delay: number = 0) => {
        window.clearTimeout(activeTimeout);
        if (controlled) return;
        if (pstate.visible) {
            activeTimeout = window.setTimeout(() => {
                pstate.visible = false;
                if (!tooltip) {
                    reference.focus();
                }
                // Fires when the popover is closed
                onclose?.();
            }, delay);
        }
    };

    const toggle = () => {
        pstate.visible ? close() : open();
    };

    const onOutclick = (e: CustomEvent<HTMLElement>) => {
        if (!dismissible || e.detail === reference) {
            return;
        }

        onoutclick?.();
        close();
    };

    const onKeypress = (e: KeyboardEvent) => {
        if (e.key === "Escape" && dismissible) {
            close();
        }
    };

    const pstate = $state<PopoverState>({
        id,
        controlled: visible !== undefined,
        visible: autoshow,
        dismissible,
        trapFocus,
        computedPlacement: placement,
        tooltip,
        floatingRef: (element) => {
            reference = element;
            floatingRef(element);
        },
        floatingContent,
        onOutclick,
        open,
        openTooltip,
        close,
        closeTooltip,
        toggle,
    });

    $effect(() => {
        pstate.controlled = controlled;
    });

    $effect(() => {
        if (controlled) {
            pstate.visible = visible;
        }
    });

    setContext(POPOVER_CONTEXT_NAME, pstate);

    // this is here for ensuring the storybook interactive playground
    // work as expected despite it is unlikely placement prop will be
    // changed dynamically in regular circumnstances
    $effect(() => {
        update({ placement });
    });
</script>

<svelte:window onkeydown={onKeypress} />

{@render children?.({ visible: pstate.visible, open, close })}

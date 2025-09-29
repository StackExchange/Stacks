<script lang="ts" module>
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
        arrowEl: Writable<HTMLElement>;
        onOutclick: (e: CustomEvent<HTMLElement>) => void;
        open: () => void;
        openTooltip: () => void;
        close: () => void;
        closeTooltip: () => void;
        toggle: () => void;
    }

    const POPOVER_CONTEXT_NAME = "popover-context";

    export function usePopoverContext(
        component: string
    ): Readable<PopoverState> {
        let context = getContext(POPOVER_CONTEXT_NAME) as
            | Writable<PopoverState>
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
    import type { Placement, Strategy } from "@floating-ui/core";
    import { createEventDispatcher, setContext, getContext } from "svelte";
    import type { Writable, Readable } from "svelte/store";
    import { writable } from "svelte/store";
    import { offset, inline, flip } from "@floating-ui/dom";
    import { createFloatingActions, arrow } from "svelte-floating-ui";

    /**
     * The html id attribute for the popover (required)
     * @type {string}
     */
    export let id: string;

    /**
     * Whether or not the popover should be visible on mount
     */
    export let autoshow = false;
    /**
     * Boolean describing if the popover panel should be visible or not.
     * If not specified, the component is uncontrolled and toggling behavior is automatically taken care of.
     * When specified, the component is controlled by the consumer and the internal open/closed state is ignored.
     * @type {boolean}
     */
    export let visible: boolean | undefined = undefined;
    /**
     * Dictates where to place the popover in relation to the reference element
     * @type {Placement}
     */
    export let placement: Placement = "bottom";
    /**
     * The type of CSS position property to use for the popover content.
     * See https://floating-ui.com/docs/computeposition#strategy
     * @type {Strategy}
     */
    export let strategy: Strategy = "absolute";
    /**
     * Whether or not the popover should trap focus within itself
     * When active make sure to include in the popover content a way for the user dismiss the popover (e.g. a cancel button or the PopoverCloseButton component)
     */
    export let trapFocus = false;
    /**
     * Whether or not the popover should close when clicking outside of it or in the reference element
     */
    export let dismissible = true;
    /**
     * Whether or not the popover should be an on-hover tooltip
     */
    export let tooltip = false;

    // These delays preserve the same behavior of Stacks Classic s-tooltip
    // https://github.com/StackExchange/Stacks/blob/develop/lib/components/popover/tooltip.ts
    const TOOLTIP_OPEN_DELAY = 300;
    const TOOLTIP_CLOSE_DELAY = 100;

    let reference: HTMLElement;
    let activeTimeout: number;
    const arrowEl = writable<HTMLElement>();
    // if the visible prop is passed, the component is controlled
    $: controlled = $$props.visible !== undefined;

    const [floatingRef, floatingContent, update] = createFloatingActions({
        placement,
        strategy,
        middleware: [offset(10), flip(), inline(), arrow({ element: arrowEl })],
        onComputed({ placement, middlewareData }) {
            $pstate.computedPlacement = placement;
            if (middlewareData.arrow && $arrowEl) {
                const { x, y } = middlewareData.arrow;

                Object.assign($arrowEl.style, {
                    left: x != null ? `${x}px` : "",
                    top: y != null ? `${y}px` : "",
                });
            }
        },
    });

    const dispatch = createEventDispatcher<{ close: void; open: void }>();

    const open = (delay: number = 0) => {
        window.clearTimeout(activeTimeout);
        if (controlled) return;
        if (!$pstate.visible) {
            activeTimeout = window.setTimeout(() => {
                $pstate.visible = true;
                // Fires when the popover is opened
                dispatch("open");
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
        if ($pstate.visible) {
            activeTimeout = window.setTimeout(() => {
                $pstate.visible = false;
                if (!tooltip) {
                    reference.focus();
                }
                // Fires when the popover is closed
                dispatch("close");
            }, delay);
        }
    };

    const toggle = () => {
        $pstate.visible ? close() : open();
    };

    const onOutclick = (e: CustomEvent<HTMLElement>) => {
        if (!dismissible || e.detail === reference) {
            return;
        }

        close();
    };

    const onKeypress = (e: KeyboardEvent) => {
        if (e.key === "Escape" && dismissible) {
            close();
        }
    };

    const pstate = writable<PopoverState>({
        id,
        controlled: $$props.visible !== undefined,
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
        arrowEl,
        onOutclick,
        open,
        openTooltip,
        close,
        closeTooltip,
        toggle,
    });

    $: if (controlled) {
        $pstate.visible = visible;
    }

    setContext(POPOVER_CONTEXT_NAME, pstate);

    // this is here for ensuring the storybook interactive playground
    // work as expected despite it is unlikely placement prop will be
    // changed dynamically in regular circumnstances
    $: update({ placement });
</script>

<svelte:window on:keydown={onKeypress} />

<slot visible={$pstate.visible} {open} {close} />

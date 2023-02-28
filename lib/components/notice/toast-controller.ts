import * as Stacks from "../../stacks";

export class ToastController extends Stacks.StacksController {
    static targets = ["toast", "initialFocus"];

    declare readonly toastTarget: HTMLElement;
    declare readonly initialFocusTargets: HTMLElement[];

    private _boundClickFn!: (event: MouseEvent) => void;
    private _boundKeypressFn!: (event: KeyboardEvent) => void;

    private activeTimeout!: number;
    private returnElement!: HTMLElement;

    connect() {
        this.validate();
    }

    /**
     * Disconnects all added event listeners on controller disconnect
     */
    disconnect() {
        this.unbindDocumentEvents();
    }

    /**
     * Toggles the visibility of the toast
     */
    toggle(dispatcher: Event | Element | null = null) {
        this._toggle(undefined, dispatcher);
    }

    /**
     * Shows the toast
     */
    show(dispatcher: Event | Element | null = null) {
        this._toggle(true, dispatcher);
    }

    /**
     * Hides the toast
     */
    hide(dispatcher: Event | Element | null = null) {
        this._toggle(false, dispatcher);
    }

    /**
     * Validates the toast settings and attempts to set necessary internal variables
     */
    private validate() {
        // check for returnElement support
        const returnElementSelector = this.data.get("return-element");
        if (returnElementSelector) {
            this.returnElement = <HTMLElement>(
                document.querySelector(returnElementSelector)
            );

            if (!this.returnElement) {
                throw (
                    "Unable to find element by return-element selector: " +
                    returnElementSelector
                );
            }
        }
    }

    /**
     * Toggles the visibility of the toast element
     * @param show Optional parameter that force shows/hides the element or toggles it if left undefined
     */
    private _toggle(
        show?: boolean | undefined,
        dispatcher: Event | Element | null = null
    ) {
        let toShow = show;
        const isVisible =
            this.toastTarget.getAttribute("aria-hidden") === "false";

        // if we're letting the class toggle, we need to figure out if the toast is visible manually
        if (typeof toShow === "undefined") {
            toShow = !isVisible;
        }

        // if the state matches the disired state, return without changing anything
        if ((toShow && isVisible) || (!toShow && !isVisible)) {
            return;
        }

        const dispatchingElement = this.getDispatcher(dispatcher);

        // show/hide events trigger before toggling the class
        const triggeredEvent = this.triggerEvent(
            toShow ? "show" : "hide",
            {
                returnElement: this.returnElement,
                dispatcher: this.getDispatcher(dispatchingElement),
            },
            this.toastTarget
        );

        // if this pre-show/hide event was prevented, don't attempt to continue changing the toast state
        if (triggeredEvent.defaultPrevented) {
            return;
        }

        this.returnElement = triggeredEvent.detail.returnElement;
        this.toastTarget.setAttribute("aria-hidden", toShow ? "false" : "true");

        if (toShow) {
            this.bindDocumentEvents();
            this.hideAfterTimeout();

            if (this.data.get("prevent-focus-capture") !== "true") {
                this.focusInsideToast();
            }
        } else {
            this.unbindDocumentEvents();
            this.focusReturnElement();
            this.removeToastOnHide();
            this.clearActiveTimeout();
        }

        // check for transitionend support
        const supportsTransitionEnd =
            this.toastTarget.ontransitionend !== undefined;

        // shown/hidden events trigger after toggling the class
        if (supportsTransitionEnd) {
            // wait until after the toast finishes transitioning to fire the event
            this.toastTarget.addEventListener(
                "transitionend",
                () => {
                    //TODO this is firing waaay to soon?
                    this.triggerEvent(
                        toShow ? "shown" : "hidden",
                        {
                            dispatcher: dispatchingElement,
                        },
                        this.toastTarget
                    );
                },
                { once: true }
            );
        } else {
            this.triggerEvent(
                toShow ? "shown" : "hidden",
                {
                    dispatcher: dispatchingElement,
                },
                this.toastTarget
            );
        }
    }

    /**
     * Listens for the s-toast:hidden event and focuses the returnElement when it is fired
     */
    private focusReturnElement() {
        if (!this.returnElement) {
            return;
        }

        this.toastTarget.addEventListener(
            "s-toast:hidden",
            () => {
                // double check the element still exists when the event is called
                if (
                    this.returnElement &&
                    document.body.contains(this.returnElement)
                ) {
                    this.returnElement.focus();
                }
            },
            { once: true }
        );
    }

    /**
     * Remove the element on hide if the `remove-when-hidden` flag is set
     */
    private removeToastOnHide() {
        if (this.data.get("remove-when-hidden") !== "true") {
            return;
        }

        this.toastTarget.addEventListener(
            "s-toast:hidden",
            () => {
                this.element.remove();
            },
            { once: true }
        );
    }

    /**
     * Hide the element after a delay
     */
    private hideAfterTimeout() {
        if (
            this.data.get("prevent-auto-hide") === "true" ||
            this.data.get("hide-after-timeout") === "0"
        ) {
            return;
        }

        const timeout =
            parseInt(this.data.get("hide-after-timeout") as string, 10) || 3000;

        this.activeTimeout = window.setTimeout(() => this.hide(), timeout);
    }

    /**
     * Cancels the activeTimeout
     */
    clearActiveTimeout() {
        clearTimeout(this.activeTimeout);
    }

    /**
     * Gets all elements within the toast that could receive keyboard focus.
     */
    private getAllTabbables() {
        return Array.from(
            this.toastTarget.querySelectorAll<HTMLElement>(
                "[href], input, select, textarea, button, [tabindex]"
            )
        ).filter((el: Element) =>
            el.matches(":not([disabled]):not([tabindex='-1'])")
        );
    }

    /**
     * Returns the first visible element in an array or `undefined` if no elements are visible.
     */
    private firstVisible(elements?: HTMLElement[]) {
        // https://stackoverflow.com/a/21696585
        return elements?.find((el) => el.offsetParent !== null);
    }

    /**
     * Attempts to shift keyboard focus into the toast.
     * If elements with `data-s-toast-target="initialFocus"` are present and visible, one of those will be selected.
     * Otherwise, the first visible focusable element will receive focus.
     */
    private focusInsideToast() {
        this.toastTarget.addEventListener(
            "s-toast:shown",
            () => {
                const initialFocus =
                    this.firstVisible(this.initialFocusTargets) ??
                    this.firstVisible(this.getAllTabbables());
                initialFocus?.focus();
            },
            { once: true }
        );
    }
    /**
     * Binds global events to the document for hiding toasts on user interaction
     */
    private bindDocumentEvents() {
        // in order for removeEventListener to remove the right event, this bound function needs a constant reference
        this._boundClickFn =
            this._boundClickFn || this.hideOnOutsideClick.bind(this);
        this._boundKeypressFn =
            this._boundKeypressFn || this.hideOnEscapePress.bind(this);

        document.addEventListener("mousedown", this._boundClickFn);
        document.addEventListener("keyup", this._boundKeypressFn);
    }

    /**
     * Unbinds global events to the document for hiding toasts on user interaction
     */
    private unbindDocumentEvents() {
        document.removeEventListener("mousedown", this._boundClickFn);
        document.removeEventListener("keyup", this._boundKeypressFn);
    }

    /**
     * Forces the toast to hide if a user clicks outside of it or its reference element
     */
    private hideOnOutsideClick(e: Event) {
        const target = <Node>e.target;
        // check if the document was clicked inside either the toggle element or the toast itself
        // note: .contains also returns true if the node itself matches the target element
        if (
            !this.toastTarget?.contains(target) &&
            document.body.contains(target) &&
            this.data.get("hide-on-outside-click") !== "false"
        ) {
            this._toggle(false, e);
        }
    }

    /**
     * Forces the toast to hide if the user presses escape while it, one of its childen, or the reference element are focused
     */
    private hideOnEscapePress(e: KeyboardEvent) {
        // if the ESC key (27) wasn't pressed or if no toasts are showing, return
        if (
            e.which !== 27 ||
            this.toastTarget.getAttribute("aria-hidden") === "true"
        ) {
            return;
        }

        this._toggle(false, e);
    }

    /**
     * Determines the correct dispatching element from a potential input
     * @param dispatcher The event or element to get the dispatcher from
     */
    private getDispatcher(dispatcher: Event | Element | null = null): Element {
        if (dispatcher instanceof Event) {
            return <Element>dispatcher.target;
        } else if (dispatcher instanceof Element) {
            return dispatcher;
        } else {
            return this.element;
        }
    }
}

/**
 * Helper to manually show an s-toast element via external JS
 * @param element the element the `data-controller="s-toast"` attribute is on
 */
export function showToast(element: HTMLElement) {
    toggleToast(element, true);
}

/**
 * Helper to manually hide an s-toast element via external JS
 * @param element the element the `data-controller="s-toast"` attribute is on
 */
export function hideToast(element: HTMLElement) {
    toggleToast(element, false);
}

/**
 * Helper to manually show an s-toast element via external JS
 * @param element the element the `data-controller="s-toast"` attribute is on
 * @param show whether to force show/hide the toast; toggles the toast if left undefined
 */
function toggleToast(element: HTMLElement, show?: boolean | undefined) {
    const controller = Stacks.application.getControllerForElementAndIdentifier(
        element,
        "s-toast"
    ) as ToastController;

    if (!controller) {
        throw "Unable to get s-toast controller from element";
    }

    show ? controller.show() : controller.hide();
}

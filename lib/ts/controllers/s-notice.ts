import * as Stacks from "../stacks";

export class NoticeController extends Stacks.StacksController {
    // TODO consider including focus capturing
    static targets = ["notice"];

    private noticeTarget!: HTMLElement;

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
     * Toggles the visibility of the notice
     */
    toggle(dispatcher: Event | Element | null = null) {
        this._toggle(undefined, dispatcher);
    }

    /**
     * Shows the notice
     */
    show(dispatcher: Event | Element | null = null) {
        this._toggle(true, dispatcher);
    }

    /**
     * Hides the notice
     */
    hide(dispatcher: Event | Element | null = null) {
        this._toggle(false, dispatcher);
    }

    /**
     * Validates the notice settings and attempts to set necessary internal variables
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
     * Toggles the visibility of the notice element
     * @param show Optional parameter that force shows/hides the element or toggles it if left undefined
     */
    private _toggle(
        show?: boolean | undefined,
        dispatcher: Event | Element | null = null
    ) {
        let toShow = show;
        const isVisible =
            this.noticeTarget.getAttribute("aria-hidden") === "false";

        // if we're letting the class toggle, we need to figure out if the notice is visible manually
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
            this.noticeTarget
        );

        // if this pre-show/hide event was prevented, don't attempt to continue changing the notice state
        if (triggeredEvent.defaultPrevented) {
            return;
        }

        this.returnElement = triggeredEvent.detail.returnElement;
        this.noticeTarget.setAttribute("aria-hidden", toShow ? "false" : "true");

        if (toShow) {
            this.bindDocumentEvents();
            this.hideAfterTimeout();
        } else {
            this.unbindDocumentEvents();
            this.focusReturnElement();
            this.removeNoticeOnHide();
            this.clearActiveTimeout();
        }

        // check for transitionend support
        const supportsTransitionEnd =
            this.noticeTarget.ontransitionend !== undefined;

        // shown/hidden events trigger after toggling the class
        if (supportsTransitionEnd) {
            // wait until after the notice finishes transitioning to fire the event
            this.noticeTarget.addEventListener(
                "transitionend",
                () => {
                    //TODO this is firing waaay to soon?
                    this.triggerEvent(
                        toShow ? "shown" : "hidden",
                        {
                            dispatcher: dispatchingElement,
                        },
                        this.noticeTarget
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
                this.noticeTarget
            );
        }
    }

    /**
     * Listens for the s-notice:hidden event and focuses the returnElement when it is fired
     */
    private focusReturnElement() {
        if (!this.returnElement) {
            return;
        }

        this.noticeTarget.addEventListener(
            "s-notice:hidden",
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
    private removeNoticeOnHide() {
        if (this.data.get("remove-when-hidden") !== "true") {
            return;
        }

        this.noticeTarget.addEventListener(
            "s-notice:hidden",
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
        if (this.data.get("prevent-auto-hide") === "true" || this.data.get("hide-after-timeout") === "0") {
            return;
        }

        const timeout = parseInt(this.data.get("hide-after-timeout") as string, 10) || 3000;

        this.activeTimeout = window.setTimeout(() => this.hide(), timeout);
    }

    /**
     * Cancels the activeTimeout
     */
    clearActiveTimeout() {
        clearTimeout(this.activeTimeout);
    }

        /**
     * Binds global events to the document for hiding notices on user interaction
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
     * Unbinds global events to the document for hiding notices on user interaction
     */
    private unbindDocumentEvents() {
        document.removeEventListener("mousedown", this._boundClickFn);
        document.removeEventListener("keyup", this._boundKeypressFn);
    }

    /**
     * Forces the notice to hide if a user clicks outside of it or its reference element
     */
    private hideOnOutsideClick(e: Event) {
        const target = <Node>e.target;
        // check if the document was clicked inside either the toggle element or the notice itself
        // note: .contains also returns true if the node itself matches the target element
        if (
            !this.noticeTarget
                ?.contains(target) &&
            document.body.contains(target)
        ) {
            this._toggle(false, e);
        }
    }

    /**
     * Forces the notice to hide if the user presses escape while it, one of its childen, or the reference element are focused
     */
    private hideOnEscapePress(e: KeyboardEvent) {
        // if the ESC key (27) wasn't pressed or if no notices are showing, return
        if (
            e.which !== 27 ||
            this.noticeTarget.getAttribute("aria-hidden") === "true"
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
 * Helper to manually show an s-notice element via external JS
 * @param element the element the `data-controller="s-notice"` attribute is on
 */
export function showNotice(element: HTMLElement) {
    toggleNotice(element, true);
}

/**
 * Helper to manually hide an s-notice element via external JS
 * @param element the element the `data-controller="s-notice"` attribute is on
 */
export function hideNotice(element: HTMLElement) {
    toggleNotice(element, false);
}

/**
 * Helper to manually show an s-notice element via external JS
 * @param element the element the `data-controller="s-notice"` attribute is on
 * @param show whether to force show/hide the notice; toggles the notice if left undefined
 */
function toggleNotice(element: HTMLElement, show?: boolean | undefined) {
    const controller = Stacks.application.getControllerForElementAndIdentifier(
        element,
        "s-notice"
    ) as NoticeController;

    if (!controller) {
        throw "Unable to get s-notice controller from element";
    }

    show ? controller.show() : controller.hide();
}

import * as Stacks from "../../stacks";

export class ModalController extends Stacks.StacksController {
    static targets = ["modal", "initialFocus"];

    declare readonly modalTarget: HTMLElement;
    declare readonly initialFocusTargets: HTMLElement[];

    private _boundClickFn!: (event: MouseEvent) => void;
    private _boundKeypressFn!: (event: KeyboardEvent) => void;

    private returnElement!: HTMLElement;

    private _boundTabTrap!: (event: KeyboardEvent) => void;

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
     * Toggles the visibility of the modal
     */
    toggle(dispatcher: Event | Element | null = null) {
        this._toggle(undefined, dispatcher);
    }

    /**
     * Shows the modal
     */
    show(dispatcher: Event | Element | null = null) {
        this._toggle(true, dispatcher);
    }

    /**
     * Hides the modal
     */
    hide(dispatcher: Event | Element | null = null) {
        this._toggle(false, dispatcher);
    }

    /**
     * Validates the modal settings and attempts to set necessary internal variables
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
     * Toggles the visibility of the modal element
     * @param show Optional parameter that force shows/hides the element or toggles it if left undefined
     */
    private _toggle(
        show?: boolean | undefined,
        dispatcher: Event | Element | null = null
    ) {
        let toShow = show;
        const isVisible =
            this.modalTarget.getAttribute("aria-hidden") === "false";

        // if we're letting the class toggle, we need to figure out if the popover is visible manually
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
            this.modalTarget
        );

        // if this pre-show/hide event was prevented, don't attempt to continue changing the modal state
        if (triggeredEvent.defaultPrevented) {
            return;
        }

        this.returnElement = triggeredEvent.detail.returnElement;
        this.modalTarget.setAttribute("aria-hidden", toShow ? "false" : "true");

        if (toShow) {
            this.bindDocumentEvents();
            this.focusInsideModal();
        } else {
            this.unbindDocumentEvents();
            this.focusReturnElement();
            this.removeModalOnHide();
        }

        // check for transitionend support
        const supportsTransitionEnd =
            this.modalTarget.ontransitionend !== undefined;

        // shown/hidden events trigger after toggling the class
        if (supportsTransitionEnd) {
            // wait until after the modal finishes transitioning to fire the event
            this.modalTarget.addEventListener(
                "transitionend",
                () => {
                    //TODO this is firing waaay to soon?
                    this.triggerEvent(
                        toShow ? "shown" : "hidden",
                        {
                            dispatcher: dispatchingElement,
                        },
                        this.modalTarget
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
                this.modalTarget
            );
        }
    }

    /**
     * Listens for the s-modal:hidden event and focuses the returnElement when it is fired
     */
    private focusReturnElement() {
        if (!this.returnElement) {
            return;
        }

        this.modalTarget.addEventListener(
            "s-modal:hidden",
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
    private removeModalOnHide() {
        if (this.data.get("remove-when-hidden") !== "true") {
            return;
        }

        this.modalTarget.addEventListener(
            "s-modal:hidden",
            () => {
                this.element.remove();
            },
            { once: true }
        );
    }

    /**
     * Gets all elements within the modal that could receive keyboard focus.
     */
    private getAllTabbables() {
        return Array.from(
            this.modalTarget.querySelectorAll<HTMLElement>(
                "[href], input, select, textarea, button, [tabindex]"
            )
        ).filter((el: Element) =>
            el.matches(":not([disabled]):not([tabindex='-1'])")
        );
    }

    /**
     * Returns the first visible element in an array or `undefined` if no elements are visible.
     */
    private firstVisible(elements: HTMLElement[]) {
        // https://stackoverflow.com/a/21696585
        return elements.find((el) => el.offsetParent !== null);
    }

    /**
     * Returns the last visible element in an array or `undefined` if no elements are visible.
     */
    private lastVisible(elements: HTMLElement[]) {
        return this.firstVisible([...elements].reverse());
    }

    /**
     * Attempts to shift keyboard focus into the modal.
     * If elements with `data-s-modal-target="initialFocus"` are present and visible, one of those will be selected.
     * Otherwise, the first visible focusable element will receive focus.
     */
    private focusInsideModal() {
        this.modalTarget.addEventListener(
            "s-modal:shown",
            () => {
                const initialFocus =
                    this.firstVisible(this.initialFocusTargets) ??
                    this.firstVisible(this.getAllTabbables());

                // Only set focus if focus is not already set on an element within the modal
                if (!this.modalTarget.contains(document.activeElement)) {
                    initialFocus?.focus();
                }
            },
            { once: true }
        );
    }

    /**
     * Returns keyboard focus to the modal if it has left or is about to leave.
     */
    private keepFocusWithinModal(e: KeyboardEvent) {
        // If somehow the user has tabbed out of the modal or if focus started outside the modal, push them to the first item.
        if (!this.modalTarget.contains(<Element>e.target)) {
            const focusTarget = this.firstVisible(this.getAllTabbables());
            if (focusTarget) {
                e.preventDefault();
                focusTarget.focus();
            }

            return;
        }

        // If we observe a tab keydown and we're on an edge, cycle the focus to the other side.
        if (e.key === "Tab") {
            const tabbables = this.getAllTabbables();

            const firstTabbable = this.firstVisible(tabbables);
            const lastTabbable = this.lastVisible(tabbables);

            if (firstTabbable && lastTabbable) {
                if (firstTabbable === lastTabbable) {
                    e.preventDefault();
                    firstTabbable.focus();
                } else if (e.shiftKey && e.target === firstTabbable) {
                    e.preventDefault();
                    lastTabbable.focus();
                } else if (!e.shiftKey && e.target === lastTabbable) {
                    e.preventDefault();
                    firstTabbable.focus();
                }
            }
        }
    }

    /**
     * Binds global events to the document for hiding popovers on user interaction
     */
    private bindDocumentEvents() {
        // in order for removeEventListener to remove the right event, this bound function needs a constant reference
        this._boundClickFn =
            this._boundClickFn || this.hideOnOutsideClick.bind(this);
        this._boundKeypressFn =
            this._boundKeypressFn || this.hideOnEscapePress.bind(this);
        this._boundTabTrap =
            this._boundTabTrap || this.keepFocusWithinModal.bind(this);

        document.addEventListener("mousedown", this._boundClickFn);
        document.addEventListener("keyup", this._boundKeypressFn);
        document.addEventListener("keydown", this._boundTabTrap);
    }

    /**
     * Unbinds global events to the document for hiding popovers on user interaction
     */
    private unbindDocumentEvents() {
        document.removeEventListener("mousedown", this._boundClickFn);
        document.removeEventListener("keyup", this._boundKeypressFn);
        document.removeEventListener("keydown", this._boundTabTrap);
    }

    /**
     * Forces the popover to hide if a user clicks outside of it or its reference element
     */
    private hideOnOutsideClick(e: Event) {
        const target = <Node>e.target;
        // check if the document was clicked inside either the toggle element or the modal itself
        // note: .contains also returns true if the node itself matches the target element
        if (
            !this.modalTarget
                .querySelector(".s-modal--dialog")
                ?.contains(target) &&
            document.body.contains(target)
        ) {
            this._toggle(false, e);
        }
    }

    /**
     * Forces the popover to hide if the user presses escape while it, one of its childen, or the reference element are focused
     */
    private hideOnEscapePress(e: KeyboardEvent) {
        // if the ESC key (27) wasn't pressed or if no popovers are showing, return
        if (
            e.which !== 27 ||
            this.modalTarget.getAttribute("aria-hidden") === "true"
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
 * Helper to manually show an s-modal element via external JS
 * @param element the element the `data-controller="s-modal"` attribute is on
 */
export function showModal(element: HTMLElement) {
    toggleModal(element, true);
}

/**
 * Helper to manually hide an s-modal element via external JS
 * @param element the element the `data-controller="s-modal"` attribute is on
 */
export function hideModal(element: HTMLElement) {
    toggleModal(element, false);
}

/**
 * Helper to manually show an s-modal element via external JS
 * @param element the element the `data-controller="s-modal"` attribute is on
 * @param show whether to force show/hide the modal; toggles the modal if left undefined
 */
function toggleModal(element: HTMLElement, show?: boolean | undefined) {
    const controller = Stacks.application.getControllerForElementAndIdentifier(
        element,
        "s-modal"
    ) as ModalController;

    if (!controller) {
        throw "Unable to get s-modal controller from element";
    }

    show ? controller.show() : controller.hide();
}

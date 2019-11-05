class ModalController extends Stacks.StacksController {
    static targets = ["modal"];

    // TODO should Stimulus bind this? Needed to keep TS error-free
    private modalTarget!: HTMLElement;

    private _boundClickFn!: any;
    private _boundKeypressFn!: any;

    connect () { }

    /**
     * Disconnects all added event listeners on controller disconnect
     */
    disconnect() {
        this._unbindDocumentEvents();
    };

    /**
     * Toggles the visibility of the modal
     */
    toggle () {
        this._toggle();
    }

    /**
     * Shows the modal
     */
    show () {
        this._toggle(true);
    }

    /**
     * Hides the modal
     */
    hide () {
        this._toggle(false);
    }

    /**
     * Toggles the visibility of the modal element
     * @param show Optional parameter that force shows/hides the element or toggles it if left undefined
     */
    _toggle (show?: boolean | undefined) {
        var toShow = show;

        // if we're letting the class toggle, we need to figure out if the popover is visible manually
        if (typeof toShow === "undefined") {
            toShow = this.modalTarget.getAttribute("aria-hidden") === "true";
        }

        // show/hide events trigger before toggling the class
        this.triggerEvent(toShow ? "show" : "hide");

        this.modalTarget.setAttribute("aria-hidden", toShow ? "false" : "true");

        if (toShow) {
            this._bindDocumentEvents();
        }
        else {
            this._unbindDocumentEvents();
        }

        // shown/hidden events trigger after toggling the class
        this.triggerEvent(toShow ? "shown" : "hidden");
    }

    /**
     * Binds global events to the document for hiding popovers on user interaction
     */
    _bindDocumentEvents () {
        // in order for removeEventListener to remove the right event, this bound function needs a constant reference
        this._boundClickFn = this._boundClickFn || this._hideOnOutsideClick.bind(this);
        this._boundKeypressFn = this._boundKeypressFn || this._hideOnEscapePress.bind(this);

        document.addEventListener("click", this._boundClickFn);
        document.addEventListener("keyup", this._boundKeypressFn);
    }

    /**
     * Unbinds global events to the document for hiding popovers on user interaction
     */
    _unbindDocumentEvents () {
        document.removeEventListener("click", this._boundClickFn);
        document.removeEventListener("keyup", this._boundKeypressFn);
    }

    /**
     * Forces the popover to hide if a user clicks outside of it or its reference element
     */
    _hideOnOutsideClick (e: Event) {
        var target = <Node>e.target;
        // check if the document was clicked inside either the toggle element or the modal itself
        // note: .contains also returns true if the node itself matches the target element
        //TODO change !. to ?. after TS 3.7 launches
        if (!this.modalTarget.querySelector(".s-modal--dialog")!.contains(target)) {
            this._toggle(false);
        }
    }

    /**
     * Forces the popover to hide if the user presses escape while it, one of its childen, or the reference element are focused
     */
    _hideOnEscapePress (e: KeyboardEvent) {
        // if the ESC key (27) wasn't pressed or if no popovers are showing, return
        if (e.which !== 27 || this.modalTarget.getAttribute("aria-hidden") === "true") {
            return;
        }

        this._toggle(false);
    }
}

Stacks.application.register("s-modal", ModalController);
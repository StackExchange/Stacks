import * as Stacks from '../stacks';
import Popper from 'popper.js';

export default class StacksPopover extends Stacks.StacksController {
    static targets = [];

    private referenceElement!: HTMLElement;
    private popoverElement!: HTMLElement;
    private popper!: Popper;

    private _boundClickFn!: any;
    private _boundKeypressFn!: any;

    /**
     * Initializes popper.js and document events on controller connect
     */
    connect() {
        var referenceSelector = this.data.get("reference-selector");

        // if there is an alternative reference selector and that element exists, use it (otherwise use this element)
        this.referenceElement = referenceSelector && this.element.querySelector(referenceSelector) || <HTMLElement>this.element;

        var popoverId = this.referenceElement.getAttribute("aria-controls");

        if (!popoverId) {
            throw "[aria-controls=\"{POPOVER_ID}\"] required";
        }

        var element = document.getElementById(popoverId);

        if (!element) {
            throw "element with popover id not found";
        }

        this.popoverElement = element;

        this.popper = new Popper(this.referenceElement, this.popoverElement, {
            placement: this.data.get("placement") as Popper.Placement || "bottom",
        });

        // toggle classes based on if the popover is already visible
        this._toggleOptionalClasses(this.popoverElement.classList.contains("is-visible"));
    };

    /**
     * Cleans up popper.js elements and disconnects all added event listeners on controller disconnect
     */
    disconnect() {
        this.popper.destroy();
        this._unbindDocumentEvents();
    };

    /**
     * Toggles the visibility of the popover when called as a Stimulus action
     * @param {Event} event - The event object from the Stimulus action call
     */
    toggle() {
        this._toggle();
    };

    /**
     * Shows the popover
     */
    show() {
        this._toggle(true);
    };

    /**
     * Hides the popover
     */
    hide() {
        this._toggle(false);
    };

    /**
     * Toggles the visibility of the popover element
     * @param {boolean=} show - Optional parameter that force shows/hides the element or toggles it if left undefined
     */
    _toggle(show?: boolean) {
        var toShow = show;

        // if we're letting the class toggle, we need to figure out if the popover is visible manually
        if (typeof toShow === "undefined") {
            toShow = !this.popoverElement.classList.contains("is-visible");
        }

        // show/hide events trigger before toggling the class
        this.triggerEvent(toShow ? "show" : "hide");

        this.popper.update();
        this.popoverElement.classList.toggle("is-visible", show);
        this._toggleOptionalClasses(show);

        if (this.popoverElement.classList.contains("is-visible")) {
            this._bindDocumentEvents();
        }
        else {
            this._unbindDocumentEvents();
        }

        // shown/hidden events trigger after toggling the class
        this.triggerEvent(toShow ? "shown" : "hidden");
    };

    /**
     * Binds global events to the document for hiding popovers on user interaction
     */
    _bindDocumentEvents() {
        // in order for removeEventListener to remove the right event, this bound function needs a constant reference
        this._boundClickFn = this._boundClickFn || this._hideOnOutsideClick.bind(this);
        this._boundKeypressFn = this._boundKeypressFn || this._hideOnEscapePress.bind(this);

        document.addEventListener("click", this._boundClickFn);
        document.addEventListener("keyup", this._boundKeypressFn);
    };

    /**
     * Unbinds global events to the document for hiding popovers on user interaction
     */
    _unbindDocumentEvents() {
        document.removeEventListener("click", this._boundClickFn);
        document.removeEventListener("keyup", this._boundKeypressFn);
    };

    /**
     * Forces the popover to hide if a user clicks outside of it or its reference element
     * @param {Event} e - The document click event
     */
    _hideOnOutsideClick(e: MouseEvent) {
        const target = <Node>e.target;
        // check if the document was clicked inside either the reference element or the popover itself
        // note: .contains also returns true if the node itself matches the target element
        if (!this.referenceElement.contains(target) && !this.popoverElement.contains(target)) {
            this.hide();
        }
    };

    /**
     * Forces the popover to hide if the user presses escape while it, one of its childen, or the reference element are focused
     * @param {Event} e - The document keyup event 
     */
    _hideOnEscapePress(e: KeyboardEvent) {
        // if the ESC key (27) wasn't pressed or if no popovers are showing, return
        if (e.which !== 27 || !this.popoverElement.classList.contains("is-visible")) {
            return;
        }

        // check if the target was inside the popover element and refocus the triggering element
        // note: .contains also returns true if the node itself matches the target element
        if (this.popoverElement.contains(<Node>e.target)) {
            this.referenceElement.focus();
        }

        this.hide();
    };

    /**
     * Toggles all classes on the originating element based on the `class-toggle` data
     * @param {boolean=} show - Optional parameter that force shows/hides the classes or toggles them if left undefined 
     */
    _toggleOptionalClasses(show?: boolean) {
        if (!this.data.has("toggle-class")) {
            return;
        }
        var cl = this.referenceElement.classList;
        this.data.get("toggle-class")!.split(/\s+/).forEach(function (cls: string) {
            cl.toggle(cls, show);
        });
    }
}

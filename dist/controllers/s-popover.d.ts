import * as Stacks from '../stacks';
export default class StacksPopover extends Stacks.StacksController {
    static targets: never[];
    private referenceElement;
    private popoverElement;
    private popper;
    private _boundClickFn;
    private _boundKeypressFn;
    /**
     * Initializes popper.js and document events on controller connect
     */
    connect(): void;
    /**
     * Cleans up popper.js elements and disconnects all added event listeners on controller disconnect
     */
    disconnect(): void;
    /**
     * Toggles the visibility of the popover when called as a Stimulus action
     * @param {Event} event - The event object from the Stimulus action call
     */
    toggle(): void;
    /**
     * Shows the popover
     */
    show(): void;
    /**
     * Hides the popover
     */
    hide(): void;
    /**
     * Toggles the visibility of the popover element
     * @param {boolean=} show - Optional parameter that force shows/hides the element or toggles it if left undefined
     */
    _toggle(show?: boolean): void;
    /**
     * Binds global events to the document for hiding popovers on user interaction
     */
    _bindDocumentEvents(): void;
    /**
     * Unbinds global events to the document for hiding popovers on user interaction
     */
    _unbindDocumentEvents(): void;
    /**
     * Forces the popover to hide if a user clicks outside of it or its reference element
     * @param {Event} e - The document click event
     */
    _hideOnOutsideClick(e: MouseEvent): void;
    /**
     * Forces the popover to hide if the user presses escape while it, one of its childen, or the reference element are focused
     * @param {Event} e - The document keyup event
     */
    _hideOnEscapePress(e: KeyboardEvent): void;
    /**
     * Toggles all classes on the originating element based on the `class-toggle` data
     * @param {boolean=} show - Optional parameter that force shows/hides the classes or toggles them if left undefined
     */
    _toggleOptionalClasses(show?: boolean): void;
}

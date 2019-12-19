namespace Stacks {

    export abstract class BasePopoverController extends StacksController {

        // @ts-ignore
        private popper!: Popper;

        /**
         * An attribute containing the ID of the popover element to render, e.g. aria-controls or aria-describedby.
         */
        abstract get popoverSelectorAttribute(): string;

        /**
         * The element the popover will point to.  If [data-{identifier}-reference-selector] is defined and
         * contains a selector to a valid element inside the control, that elementwill be returned.
         * Otherwise, it will return the controller's root element.
         */
        protected get referenceElement(): HTMLElement {
            var referenceSelector = this.data.get("reference-selector");

            // if there is an alternative reference selector and that element exists, use it (otherwise use this element)
            return referenceSelector && <HTMLElement>this.element.querySelector(referenceSelector)! || <HTMLElement>this.element;
        }

        /**
         * The popover element for this control as found via the popoverSelectorAttribute, or null
         * if it cannot be found.
         */
        protected get popoverElement() {
            const popoverId = this.referenceElement.getAttribute(this.popoverSelectorAttribute);
            return popoverId ? document.getElementById(popoverId) : null;
        }

        /**
         * Returns true if the if the popover is currently visible.
         */
        protected get isVisible() {
            var popoverElement = this.popoverElement;
            return popoverElement ? popoverElement.classList.contains("is-visible") : false;
        }

        /**
         * Initializes popper.js and document events on controller connect
         */
        connect() {
            super.connect();
            if (this.isVisible) {
                // just call initialize here, not show. This keeps already visible popovers from adding/firing document events
                this.initializePopper();
            }
        }

        /**
         * Cleans up popper.js elements and disconnects all added event listeners on controller disconnect
         */
        disconnect() {
            this.hide();
            if (this.popper) {
                this.popper.destroy();
                this.popper = null;
            }
            super.disconnect();
        }

        /**
         * This method fires after when the popover is trying to show but does not exist. The default behavior
         * is to throw but overriding provides child classes with an opportunity to customize that their behavior.
         */
        protected popoverNotFound() {
            const popoverId = this.referenceElement.getAttribute(this.popoverSelectorAttribute);
            if (!popoverId) {
                throw `[${this.popoverSelectorAttribute}="{POPOVER_ID}"] required`;
            } else {
                throw `element with id "${popoverId}" not found`;
            }
        }

        /**
         * Toggles the visibility of the popover when called as a Stimulus action
         */
        toggle() {
            this.isVisible ? this.hide() : this.show();
        }

        /**
         * Shows the popover if not already visible when called as a Stimulus action
         */
        show() {
            if (this.isVisible) { return; }

            if (this.triggerEvent("show").defaultPrevented) { return; }

            if (!this.popoverElement) {
                this.popoverNotFound();
            }

            if (!this.popper) {
                this.initializePopper();
            }

            this.popper.update();
            this.popper.enableEventListeners();

            this.popoverElement!.classList.add("is-visible");
            this.shown();
        }

        /**
         * Initializes the Popper for this instance
         */
        private initializePopper() {
            // @ts-ignore
            this.popper = new Popper(this.referenceElement, this.popoverElement, {
                eventsEnabled: this.isVisible
            });

            // @ts-ignore
            this.popper.options.placement = this.data.get("placement") as Popper.Placement || "bottom";
        }

        protected shown() {
            this.triggerEvent("shown");
        }

        /**
         * Hides the popover if not already hidden when called as a Stimulus action
         */
        hide() {
            if (!this.isVisible) { return; }

            if (this.triggerEvent("hide").defaultPrevented) { return; }

            const popoverElement = this.popoverElement;
            if (!popoverElement) { return; }

            popoverElement.classList.remove("is-visible");
            if (this.popper) {
                this.popper.disableEventListeners();
            }
            this.hidden();
        }

        protected hidden() {
            this.triggerEvent("hidden");
        }
    }

    export class PopoverController extends BasePopoverController {
        static targets = [];

        popoverSelectorAttribute = "aria-controls";

        private boundHideOnOutsideClick!: any;
        private boundHideOnEscapePress!: any;

        initialize() {
            this.boundHideOnOutsideClick = this.boundHideOnOutsideClick || this.hideOnOutsideClick.bind(this);
            this.boundHideOnEscapePress = this.boundHideOnEscapePress || this.hideOnEscapePress.bind(this);
            super.initialize();
        }

        disconnect() {
            this.unbindDocumentEvents();
            super.disconnect();
        }

        protected shown() {
            this.toggleOptionalClasses(true);
            this.bindDocumentEvents();
            super.shown();
        }

        protected hidden() {
            this.toggleOptionalClasses(false);
            this.unbindDocumentEvents();
            super.hidden();
        }

        /**
         * Binds global events to the document for hiding popovers on user interaction
         */
        private bindDocumentEvents() {
            document.addEventListener("click", this.boundHideOnOutsideClick);
            document.addEventListener("keyup", this.boundHideOnEscapePress);
        }

        /**
         * Unbinds global events to the document for hiding popovers on user interaction
         */
        private unbindDocumentEvents() {
            document.removeEventListener("click", this.boundHideOnOutsideClick);
            document.removeEventListener("keyup", this.boundHideOnEscapePress);
        }

        /**
         * Forces the popover to hide if a user clicks outside of it or its reference element
         * @param {Event} e - The document click event
         */
        private hideOnOutsideClick(e: MouseEvent) {
            const target = <Node>e.target;
            // check if the document was clicked inside either the reference element or the popover itself
            // note: .contains also returns true if the node itself matches the target element
            if (!this.referenceElement.contains(target) && !this.popoverElement!.contains(target)) {
                this.hide();
            }
        };

        /**
         * Forces the popover to hide if the user presses escape while it, one of its childen, or the reference element are focused
         * @param {Event} e - The document keyup event 
         */
        private hideOnEscapePress(e: KeyboardEvent) {
            // if the ESC key (27) wasn't pressed or if no popovers are showing, return
            if (e.which !== 27 || !this.isVisible) {
                return;
            }

            // check if the target was inside the popover element and refocus the triggering element
            // note: .contains also returns true if the node itself matches the target element
            if (this.popoverElement!.contains(<Node>e.target)) {
                this.referenceElement.focus();
            }

            this.hide();
        };

        /**
         * Toggles all classes on the originating element based on the `class-toggle` data
         * @param {boolean=} show - A boolean indicating whether this is being triggered by a show or hide.
         */
        private toggleOptionalClasses(show?: boolean) {
            if (!this.data.has("toggle-class")) {
                return;
            }
            var cl = this.referenceElement.classList;
            this.data.get("toggle-class")!.split(/\s+/).forEach(function (cls: string) {
                cl.toggle(cls, show);
            });
        }

        /**
         * Finds the currently visible element in the document structure.
         */
        static get visiblePopover(): PopoverController | null {

            var found: PopoverController | null = null;

            document.querySelectorAll(".s-popover.is-visible").forEach(popover => {
                if (found || !popover.id) { return; }
                var control = document.querySelector(`[aria-controls="${popover.id.replace(/["\\]/g, '\\$&')}"]`);
                // The element could be either the controller's root element or a reference element nested inside,
                // so we need to iterate out to look for it.
                while (control !== null && found === null) {
                    found = <PopoverController | null>application.getControllerForElementAndIdentifier(control, "s-popover");
                    control = control.parentElement;
                }
            });

            return found;
        }
    }
}

Stacks.application.register("s-popover", Stacks.PopoverController);

namespace Stacks {
    export abstract class BasePopoverController extends StacksController {
        // @ts-ignore
        private popper!: Popper;

        protected popoverElement!: HTMLElement;

        protected referenceElement!: HTMLElement;

        /**
         * An attribute containing the ID of the popover element to render, e.g. aria-controls or aria-describedby.
         */
        protected abstract popoverSelectorAttribute: string;

        /**
         * Binds events to the document on element show
         */
        protected abstract bindDocumentEvents(): void;

        /**
         * Unbinds events on the document on element hide
         */
        protected abstract unbindDocumentEvents(): void;

        /**
         * Returns true if the if the popover is currently visible.
         */
        get isVisible() {
            var popoverElement = this.popoverElement;
            return popoverElement ? popoverElement.classList.contains("is-visible") : false;
        }

        /**
         * Initializes and validates controller variables
         */
        connect() {
            super.connect();
            this.validate();
            if (this.isVisible) {
                // just call initialize here, not show. This keeps already visible popovers from adding/firing document events
                this.initializePopper();
            }
        }

        /**
         * Cleans up popper.js elements and disconnects all added event listeners
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
         * Toggles the visibility of the popover
         */
        toggle() {
            this.isVisible ? this.hide() : this.show();
        }

        /**
         * Shows the popover if not already visible
         */
        show() {
            if (this.isVisible) { return; }

            if (this.triggerEvent("show").defaultPrevented) { return; }

            if (!this.popper) {
                this.initializePopper();
            }

            this.popoverElement!.classList.add("is-visible");

            // ensure the popper has been positioned correctly and is listening to events
            this.popper.enableEventListeners();
            this.scheduleUpdate();

            this.shown();
        }

        /**
         * Hides the popover if not already hidden
         */
        hide() {
            if (!this.isVisible) { return; }

            if (this.triggerEvent("hide").defaultPrevented) { return; }

            this.popoverElement.classList.remove("is-visible");

            if (this.popper) {
                this.popper.disableEventListeners();
            }

            this.hidden();
        }

        /**
         * Binds document events for this popover and fires the shown event
         */
        protected shown() {
            this.bindDocumentEvents();
            this.triggerEvent("shown");
        }

        /**
         * Unbinds document events for this popover and fires the hidden event
         */
        protected hidden() {
            this.unbindDocumentEvents();
            this.triggerEvent("hidden");
        }

        /**
         * Generates the popover if not found during initialization
         */
        protected generatePopover(): HTMLElement | null {
            return null;
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

        /**
         * Validates the popover settings and attempts to set necessary internal variables
         */
        private validate() {
            var referenceSelector = this.data.get("reference-selector");

            this.referenceElement = <HTMLElement>this.element;

            // if there is an alternative reference selector and that element exists, use it (and throw if it isn't found)
            if (referenceSelector) {
                this.referenceElement = <HTMLElement>this.element.querySelector(referenceSelector);

                if (!this.referenceElement) {
                    throw "Unable to find element by reference selector: " + referenceSelector;
                }
            }

            const popoverId = this.referenceElement.getAttribute(this.popoverSelectorAttribute);

            var popoverElement = null;

            // if the popover is named, attempt to fetch it (and throw an error if it doesn't exist)
            if (popoverId) {
                popoverElement = document.getElementById(popoverId);

                if (!popoverElement){
                    throw `[${this.popoverSelectorAttribute}="{POPOVER_ID}"] required`;
                }
            }
            // if the popover isn't named, attempt to generate it
            else {
                popoverElement = this.generatePopover();
            }

            if (!popoverElement) {
                throw "unable to find or generate popover element";
            }

            this.popoverElement = popoverElement;
        }

        /**
         * Schedules the popover to update on the next animation frame if visible
         */
        protected scheduleUpdate() {
            if (this.popper && this.isVisible) {
                this.popper.scheduleUpdate();
            }
        }
    }

    export class PopoverController extends BasePopoverController {
        static targets = [];

        protected popoverSelectorAttribute = "aria-controls";

        private boundHideOnOutsideClick!: any;
        private boundHideOnEscapePress!: any;

        /**
         * Toggles optional classes in addition to BasePopoverController.shown
         */
        protected shown() {
            this.toggleOptionalClasses(true);
            super.shown();
        }

        /**
         * Toggles optional classes in addition to BasePopoverController.hidden
         */
        protected hidden() {
            this.toggleOptionalClasses(false);
            super.hidden();
        }

        /**
         * Binds global events to the document for hiding popovers on user interaction
         */
        protected bindDocumentEvents() {
            this.boundHideOnOutsideClick = this.boundHideOnOutsideClick || this.hideOnOutsideClick.bind(this);
            this.boundHideOnEscapePress = this.boundHideOnEscapePress || this.hideOnEscapePress.bind(this);

            document.addEventListener("click", this.boundHideOnOutsideClick);
            document.addEventListener("keyup", this.boundHideOnEscapePress);
        }

        /**
         * Unbinds global events to the document for hiding popovers on user interaction
         */
        protected  unbindDocumentEvents() {
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
    }
}

Stacks.application.register("s-popover", Stacks.PopoverController);

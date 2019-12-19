namespace Stacks {
    export interface TooltipOptions {
        placement: string;
    }

    export class TooltipController extends BasePopoverController {
        static targets = [];

        protected popoverSelectorAttribute = "aria-describedby";

        private boundShow!: any;
        private boundHide!: any;
        private boundHideIfWithin!: any;

        /**
         * Binds mouseover and mouseout events in addition to BasePopoverController.connect
         */
        connect() {
            super.connect();

            // Only bind to mouse events if the pointer device supports hover behavior.
            // Otherwise we run into issues with mobile browser showing popovers for
            // click events and not being able to hide them.
            if (window.matchMedia("(hover: hover)").matches) {
                this.bindMouseEvents();
            }
        }

        /**
         * Unbinds mouse events in addition to BasePopoverController.disconnect
         */
        disconnect() {
            this.unbindMouseEvents();
            super.disconnect();
        }

        /**
         * Attempts to show the tooltip popover so long as no other Stacks-managed popover is
         * present on the page.
         */
        show() {
            // check and see if this controller coexists with a popover
            var controller = Stacks.application.getControllerForElementAndIdentifier(this.element, "s-popover");

            // if the controller exists and already has a visible popover, don't show the tooltip
            if (controller && (<PopoverController>controller).isVisible) {
                return;
            }

            super.show();
        }

        /**
         * Adds or updates the contents of a tooltip controller on a given element, creating popover as needed.
         * @param content A string to convert to html and insert into the popover
         * @param options Options for rendering the tooltip.
         */
        setTooltipContent(content: string) {
            var fragment = document.createRange().createContextualFragment(content);

            var popoverId = this.element.getAttribute("aria-describedby");
            if (!popoverId) {
                popoverId = TooltipController.generateId();
                this.element.setAttribute("aria-describedby", popoverId);
            }

            var popover = document.getElementById(popoverId);
            if (!popover) {
                popover = document.createElement("div");
                popover.id = popoverId;
                popover.className = "s-popover s-popover__tooltip";
                popover.setAttribute("aria-hidden", "true");
                popover.setAttribute("role", "tooltip");

                var parentNode = this.element.parentNode;
                if (parentNode) {
                    // insertBefore inserts at end if element.nextSibling is null.
                    parentNode.insertBefore(popover, this.element.nextSibling);
                } else {
                    document.body.appendChild(popover);
                }
            }

            const arrow = popover.querySelector(".s-popover--arrow");

            // clear and set the content of the popover
            popover.innerHTML = "";
            popover.appendChild(fragment);

            // create the arrow if necessary
            if (arrow) {
                popover.appendChild(arrow);
            } else {
                popover.insertAdjacentHTML("beforeend", `<div class="s-popover--arrow"></div>`);
            }

            return popover;
        }

        /**
         * Automatically hides the tooltip popover when a Stacks popover is shown anywhere on
         * the page.
         */
        protected bindDocumentEvents() {
            this.boundHideIfWithin = this.boundHideIfWithin || this.hideIfWithin.bind(this);

            document.addEventListener("s-popover:shown", this.boundHideIfWithin);
        }

        /**
         * Unbinds all document events
         */
        protected unbindDocumentEvents() {
            document.removeEventListener("s-popover:shown", this.boundHideIfWithin);
        }

        /**
         * Attempts to generate a new tooltip popover from the title attribute if no popover
         * was present when requested, otherwise throws an error.
         */
        protected generatePopover(): HTMLElement | null {
            var title = this.element.getAttribute("title");

            if (!title) {
                return super.generatePopover();
            }

            var popover = this.setTooltipContent(title);
            this.element.removeAttribute("title");
            return popover;
        }

        /**
         * Hides the tooltip if is or is within the event's target.
         * @param event An event object from s-popover:shown
         */
        private hideIfWithin(event: Event) {
            if ((<Element>event.target!).contains(this.referenceElement)) {
                this.hide();
            }
        }

        /**
         * Binds mouse events to show/hide on reference element hover
         */
        private bindMouseEvents() {
            this.boundShow = this.boundShow || this.show.bind(this);
            this.boundHide = this.boundHide || this.hide.bind(this);

            this.referenceElement.addEventListener("mouseover", this.boundShow);
            this.referenceElement.addEventListener("mouseout", this.boundHide);
        }

        /**
         * Unbinds all mouse events
         */
        private unbindMouseEvents() {
            this.referenceElement.removeEventListener("mouseover", this.boundShow);
            this.referenceElement.removeEventListener("mouseout", this.boundHide);
        }

        /**
         * Generates an ID for tooltips created with setTooltip.
         */
        private static generateId() {
            // generate a random number, then convert to a well formatted string
            return "--stacks-s-tooltip-" + Math.random().toString(36).substring(2, 10);
        }
    }

    /**
     * Adds or updates a Stacks tooltip on a given element, initializing the controller if necessary
     * @param element The element to add a tooltip to.
     * @param html An HTML string to populate the tooltip with.
     * @param options Options for rendering the tooltip.
     */
    export function setTooltipHtml(element: Element, html: string, options?: TooltipOptions) {
        var controllerText = element.getAttribute("data-controller") || "";

        var hasExistingController = /(^|\s)s-tooltip(\s|$)/.test(controllerText);

        if (options && options.placement) {
            element.setAttribute("data-s-tooltip-placement", options.placement);
        }

        // no existing controller, set the title, initialize it and let it set itself up
        if (!hasExistingController) {
            element.setAttribute("title", html);
            element.setAttribute("data-controller", controllerText + " s-tooltip");
        }
        // existing controller, we need to manually tell it to update the content
        else {
            var controller = <TooltipController>Stacks.application.getControllerForElementAndIdentifier(element, "s-tooltip");
            if (controller) {
                controller.setTooltipContent(html);
            }
            else {
                throw "unable to get controller instance for s-tooltip";
            }
        }
    }
}

Stacks.application.register("s-tooltip", Stacks.TooltipController);

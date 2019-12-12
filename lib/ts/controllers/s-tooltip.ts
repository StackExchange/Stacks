namespace Stacks {

    export interface TooltipOptions {
        placement: string;
    }

    export class TooltipController extends BasePopoverController {
        static targets = [];

        popoverSelectorAttribute = "aria-describedby";

        private boundShow!: any;
        private boundHide!: any;
        private boundHideIfWithin!: any;

        initialize() {
            this.boundShow = this.boundShow || this.show.bind(this);
            this.boundHide = this.boundHide || this.hide.bind(this);
            this.boundHideIfWithin = this.boundHideIfWithin || this.hideIfWithin.bind(this);
            super.initialize();
        }

        /**
         * Binds mouseover and mouseout events on controller connect.
         */
        connect() {
            super.connect();
            this.bindMouseEvents();
        }

        /**
         * Unbinds events on controller disconnect.
         */
        disconnect() {
            this.unbindMouseEvents();
            this.unbindDocumentEvents();
            super.disconnect();
        }

        /**
         * Attempts to generate a new tooltip popover from the title attribute if no popover
         * was present when requested, otherwise throws an error.
         */
        protected popoverNotFound()
        {
            var title = this.element.getAttribute("title");
            if (title) {
                Stacks.setTooltipText(this.element, title);
                this.element.removeAttribute("title");
            } else {
                super.popoverNotFound();
            }
        }

        /**
         * Attempts to show the tooltip popover so long as no other Stacks-managed popover is
         * present on the page.
         */
        show() {
            const visiblePopover = PopoverController.visiblePopover;
            if (visiblePopover && visiblePopover.element.contains(this.referenceElement)) { return; }
            super.show();
        }

        protected shown() {
            this.bindDocumentEvents();
            super.shown();
        }

        protected hidden() {
            this.unbindDocumentEvents();
            super.hidden();
        }

        /**
         * Hides the tooltip if is or is within the event's target.
         * @param event An event object from s-popover:shown
         */
        hideIfWithin(event: Event) {
            if ((<Element>event.target!).contains(this.referenceElement)) {
                this.hide();
            }
        }

        /**
         * Automatically shows and hides the popover on hover events.
         */
        private bindMouseEvents() {
            this.unbindMouseEvents();
            this.referenceElement.addEventListener("mouseover", this.boundShow);
            this.referenceElement.addEventListener("mouseout", this.boundHide);
        }

        private unbindMouseEvents() {
            this.referenceElement.removeEventListener("mouseover", this.boundShow);
            this.referenceElement.removeEventListener("mouseout", this.boundHide);
        }

        /**
         * Automatically hides the tooltip popover when a Stacks popover is shown anywhere on
         * the page.
         */
        private bindDocumentEvents() {
            document.addEventListener("s-popover:shown", this.boundHideIfWithin);
        }

        private unbindDocumentEvents() {
            document.removeEventListener("s-popover:shown", this.boundHideIfWithin);
        }

        /**
         * Generates an ID for tooltips created with setTooltip.
         */
        private static generateId() {
            return "--stacks-s-tooltip-" + (TooltipController.generatedIdCounter++);
        }

        private static generatedIdCounter = 0;

        /**
         * Adds or updates the contents of a tooltip controller on a given element, creating controller and popover as needed.
         * @param element An element that will become a s-tooltip controller.
         * @param fn A function which takes a s-popover element and configures its contents.
         * @param options Options for rendering the tooltip.
         */
        static setTooltip(element: Element, fn: (popover: HTMLElement) => void, options?: TooltipOptions) {

            var controllerText = element.getAttribute("data-controller") || "";
            if (!/(^|\s)s-tooltip(\s|$)/.test(controllerText)) {
                element.setAttribute("data-controller", controllerText + " s-tooltip");
            }

            var popoverId = element.getAttribute("aria-describedby");
            if (!popoverId) {
                popoverId = TooltipController.generateId();
                element.setAttribute("aria-describedby", popoverId);
            }

            if (options && options.placement) {
                element.setAttribute("data-s-tooltip-placement", options.placement);
            }

            var popover = document.getElementById(popoverId);
            if (!popover) {
                popover = document.createElement("div");
                popover.id = popoverId;
                popover.className = "s-popover s-popover__tooltip";
                popover.setAttribute("aria-hidden", "true");
                popover.setAttribute("role", "tooltip");

                var parentNode = element.parentNode;
                if (parentNode) {
                    // insertBefore inserts at end if element.nextSibling is null.
                    parentNode.insertBefore(popover, element.nextSibling);
                } else {
                    document.body.appendChild(popover);
                }
            }

            const arrow = popover.querySelector(".s-popover--arrow");

            fn(popover);

            if (arrow) {
                popover.appendChild(arrow);
            } else {
                popover.insertAdjacentHTML("beforeend", `<div class="s-popover--arrow"></div>`);
            }
        }
    }

    /**
     * Adds or updates a Stacks tooltip on a given element.
     * @param element The element to add a tooltip to.
     * @param html An HTML string to populate the tooltip with.
     * @param options Options for rendering the tooltip.
     */
    export function setTooltipHtml(element: Element, html: string, options?: TooltipOptions) {
        TooltipController.setTooltip(element, popover => popover.innerHTML = html, options);
    }

    /**
     * Adds or updates a Stacks tooltip on a given element.
     * @param element The element to add a tooltip to.
     * @param text An plain text string to populate the tooltip with.
     * @param options Options for rendering the tooltip.
     */
    export function setTooltipText(element: Element, text: string, options?: TooltipOptions) {
        TooltipController.setTooltip(element, popover => popover.textContent = text, options);
    }
}

Stacks.application.register("s-tooltip", Stacks.TooltipController);

import * as Stacks from "../stacks";
import { BasePopoverController, PopoverController } from "./s-popover";

export interface TooltipOptions {
    placement: string;
}

export class TooltipController extends BasePopoverController {
    static targets = [];

    protected popoverSelectorAttribute = "aria-describedby";

    private boundScheduleShow!: any;
    private boundHide!: any;
    private boundHideIfWithin!: any;
    private activeTimeout!: any;

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
    show(dispatcher: Event|Element|null = null) {
        // check and see if this controller coexists with a popover
        var controller = Stacks.application.getControllerForElementAndIdentifier(this.element, "s-popover");

        // if the controller exists and already has a visible popover, don't show the tooltip
        if (controller && (<PopoverController>controller).isVisible) {
            return;
        }

        super.show(dispatcher);
    }

    /**
     * Sets up a tooltip popover show after a delay.
     */
    scheduleShow(dispatcher: Event | Element | null = null) {
        window.clearTimeout(this.activeTimeout);
        this.activeTimeout = window.setTimeout(() => this.show(dispatcher), 300);
    }

    /**
     * Cancels the scheduled tooltip popover display and hides it if already displayed
     */
    hide(dispatcher: Event | Element | null = null) {
        window.clearTimeout(this.activeTimeout);
        this.activeTimeout = null;

        super.hide(dispatcher);
    }

    /**
     * Applies data-s-tooltip-html-title and title attributes.
     */
    applyTitleAttributes() {

        var content: Node;

        var htmlTitle = this.data.get("html-title");
        if (htmlTitle) {
            content = document.createRange().createContextualFragment(htmlTitle);
        } else {
            var plainTitle = this.element.getAttribute("title");
            if (plainTitle) {
                content = document.createTextNode(plainTitle);
            } else {
                return null;
            }
        }

        this.data.delete("html-title");
        this.element.removeAttribute("title");

        var popoverId = this.element.getAttribute("aria-describedby");
        if (!popoverId) {
            popoverId = TooltipController.generateId();
            this.element.setAttribute("aria-describedby", popoverId);
        }

        var popover = document.getElementById(popoverId);
        if (!popover) {
            popover = document.createElement("div");
            popover.id = popoverId;
            popover.className = "s-popover s-popover__tooltip pe-none";
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
        popover.appendChild(content);

        // create the arrow if necessary
        if (arrow) {
            popover.appendChild(arrow);
        } else {
            popover.insertAdjacentHTML("beforeend", `<div class="s-popover--arrow"></div>`);
        }

        this.scheduleUpdate();

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
        return this.applyTitleAttributes();
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
        this.boundScheduleShow = this.boundScheduleShow || this.scheduleShow.bind(this);
        this.boundHide = this.boundHide || this.hide.bind(this);

        this.referenceElement.addEventListener("mouseover", this.boundScheduleShow);
        this.referenceElement.addEventListener("mouseout", this.boundHide);
    }

    /**
     * Unbinds all mouse events
     */
    private unbindMouseEvents() {
        this.referenceElement.removeEventListener("mouseover", this.boundScheduleShow);
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
    element.setAttribute("data-s-tooltip-html-title", html);
    element.removeAttribute("title");
    applyOptionsAndTitleAttributes(element, options);
}

/**
 * Adds or updates a Stacks tooltip on a given element, initializing the controller if necessary
 * @param element The element to add a tooltip to.
 * @param text A plain text string to populate the tooltip with.
 * @param options Options for rendering the tooltip.
 */
export function setTooltipText(element: Element, text: string, options?: TooltipOptions) {
    element.setAttribute("title", text);
    element.removeAttribute("data-s-tooltip-html-title");
    applyOptionsAndTitleAttributes(element, options);
}

/**
 * Shared helper for setTooltip* to initialize and set tooltip content
 * @param element The element to add a tooltip to.
 * @param options Options for rendering the tooltip.
 */
function applyOptionsAndTitleAttributes(element: Element, options?: TooltipOptions) {

    if (options && options.placement) {
        element.setAttribute("data-s-tooltip-placement", options.placement);
    }

    var controller = <TooltipController>Stacks.application.getControllerForElementAndIdentifier(element, "s-tooltip");

    if (controller) {
        controller.applyTitleAttributes();
    } else {
        element.setAttribute("data-controller", element.getAttribute("data-controller") + " s-tooltip");
    }
}
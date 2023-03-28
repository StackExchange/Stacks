import { createPopper, Placement } from "@popperjs/core";
import type * as Popper from "@popperjs/core";
import * as Stacks from "../../stacks";

type OutsideClickBehavior =
    | "always"
    | "never"
    | "if-in-viewport"
    | "after-dismissal";

export abstract class BasePopoverController extends Stacks.StacksController {
    private popper!: Popper.Instance;

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
        const popoverElement = this.popoverElement;
        return popoverElement
            ? popoverElement.classList.contains("is-visible")
            : false;
    }

    /**
     * Gets whether the element is visible in the browser's viewport.
     */
    get isInViewport() {
        const element = this.popoverElement;
        if (!this.isVisible || !element) {
            return false;
        }

        // From https://stackoverflow.com/a/5354536.  Theoretically, this could be calculated using Popper's detectOverflow function,
        // but it's unclear how to access that with our current configuration.

        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight
        );
        const viewWidth = Math.max(
            document.documentElement.clientWidth,
            window.innerWidth
        );

        return (
            rect.bottom > 0 &&
            rect.top < viewHeight &&
            rect.right > 0 &&
            rect.left < viewWidth
        );
    }

    protected get shouldHideOnOutsideClick() {
        const hideBehavior = <OutsideClickBehavior>(
            this.data.get("hide-on-outside-click")
        );
        switch (hideBehavior) {
            case "after-dismissal":
            case "never":
                return false;
            case "if-in-viewport":
                return this.isInViewport;
            default:
                return true;
        }
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
        } else if (this.data.get("auto-show") === "true") {
            this.show(null);
        }

        this.data.delete("auto-show");
    }

    /**
     * Cleans up popper.js elements and disconnects all added event listeners
     */
    disconnect() {
        this.hide();
        if (this.popper) {
            this.popper.destroy();
            // eslint-disable-next-line
            // @ts-ignore The operand of a 'delete' operator must be optional .ts(2790)
            delete this.popper;
        }
        super.disconnect();
    }

    /**
     * Toggles the visibility of the popover
     */
    toggle(dispatcher: Event | Element | null = null) {
        this.isVisible ? this.hide(dispatcher) : this.show(dispatcher);
    }

    /**
     * Shows the popover if not already visible
     */
    show(dispatcher: Event | Element | null = null) {
        if (this.isVisible) {
            return;
        }

        const dispatcherElement = this.getDispatcher(dispatcher);

        if (
            this.triggerEvent("show", {
                dispatcher: dispatcherElement,
            }).defaultPrevented
        ) {
            return;
        }

        if (!this.popper) {
            this.initializePopper();
        }

        this.popoverElement.classList.add("is-visible");

        // ensure the popper has been positioned correctly
        this.scheduleUpdate();

        this.shown(dispatcherElement);
    }

    /**
     * Hides the popover if not already hidden
     */
    hide(dispatcher: Event | Element | null = null) {
        if (!this.isVisible) {
            return;
        }

        const dispatcherElement = this.getDispatcher(dispatcher);

        if (
            this.triggerEvent("hide", {
                dispatcher: dispatcherElement,
            }).defaultPrevented
        ) {
            return;
        }

        this.popoverElement.classList.remove("is-visible");

        if (this.popper) {
            // completely destroy the popper on hide; this is in line with Popper.js's performance recommendations
            this.popper.destroy();
            // eslint-disable-next-line
            // @ts-ignore The operand of a 'delete' operator must be optional .ts(2790)
            delete this.popper;
        }

        // on first interaction, hide-on-outside-click with value "after-dismissal" reverts to the default behavior
        if (
            <OutsideClickBehavior>this.data.get("hide-on-outside-click") ===
            "after-dismissal"
        ) {
            this.data.delete("hide-on-outside-click");
        }

        this.hidden(dispatcherElement);
    }

    /**
     * Binds document events for this popover and fires the shown event
     */
    protected shown(dispatcher: Element | null = null) {
        this.bindDocumentEvents();
        this.triggerEvent("shown", {
            dispatcher: dispatcher,
        });
    }

    /**
     * Unbinds document events for this popover and fires the hidden event
     */
    protected hidden(dispatcher: Element | null = null) {
        this.unbindDocumentEvents();
        this.triggerEvent("hidden", {
            dispatcher: dispatcher,
        });
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
        this.popper = createPopper(this.referenceElement, this.popoverElement, {
            placement: (this.data.get("placement") as Placement) || "bottom",
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 10], // The entire popover should be 10px away from the element
                    },
                },
                {
                    name: "arrow",
                    options: {
                        element: ".s-popover--arrow",
                    },
                },
            ],
        });
    }

    /**
     * Validates the popover settings and attempts to set necessary internal variables
     */
    private validate() {
        const referenceSelector = this.data.get("reference-selector");

        this.referenceElement = <HTMLElement>this.element;

        // if there is an alternative reference selector and that element exists, use it (and throw if it isn't found)
        if (referenceSelector) {
            this.referenceElement = <HTMLElement>(
                this.element.querySelector(referenceSelector)
            );

            if (!this.referenceElement) {
                throw (
                    "Unable to find element by reference selector: " +
                    referenceSelector
                );
            }
        }

        const popoverId = this.referenceElement.getAttribute(
            this.popoverSelectorAttribute
        );

        let popoverElement: HTMLElement | null = null;

        // if the popover is named, attempt to fetch it (and throw an error if it doesn't exist)
        if (popoverId) {
            popoverElement = document.getElementById(popoverId);

            if (!popoverElement) {
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
     * Determines the correct dispatching element from a potential input
     * @param dispatcher The event or element to get the dispatcher from
     */
    protected getDispatcher(
        dispatcher: Event | Element | null = null
    ): Element {
        if (dispatcher instanceof Event) {
            return <Element>dispatcher.target;
        } else if (dispatcher instanceof Element) {
            return dispatcher;
        } else {
            return this.element;
        }
    }

    /**
     * Schedules the popover to update on the next animation frame if visible
     */
    protected scheduleUpdate() {
        if (this.popper && this.isVisible) {
            void this.popper.update();
        }
    }
}

export class PopoverController extends BasePopoverController {
    static targets = [];

    protected popoverSelectorAttribute = "aria-controls";

    private boundHideOnOutsideClick!: (event: MouseEvent) => void;
    private boundHideOnEscapePress!: (event: KeyboardEvent) => void;

    /**
     * Toggles optional classes and accessibility attributes in addition to BasePopoverController.shown
     */
    protected override shown(dispatcher: Element | null = null) {
        this.toggleOptionalClasses(true);
        this.toggleAccessibilityAttributes(true);
        super.shown(dispatcher);
    }

    /**
     * Toggles optional classes and accessibility attributes in addition to BasePopoverController.hidden
     */
    protected override hidden(dispatcher: Element | null = null) {
        this.toggleOptionalClasses(false);
        this.toggleAccessibilityAttributes(false);
        super.hidden(dispatcher);
    }

    /**
     * Initializes accessibility attributes in addition to BasePopoverController.connect
     */
    public override connect(): void {
        super.connect();

        this.toggleAccessibilityAttributes();
    }

    /**
     * Binds global events to the document for hiding popovers on user interaction
     */
    protected bindDocumentEvents() {
        this.boundHideOnOutsideClick =
            this.boundHideOnOutsideClick || this.hideOnOutsideClick.bind(this);
        this.boundHideOnEscapePress =
            this.boundHideOnEscapePress || this.hideOnEscapePress.bind(this);

        document.addEventListener("mousedown", this.boundHideOnOutsideClick);
        document.addEventListener("keyup", this.boundHideOnEscapePress);
    }

    /**
     * Unbinds global events to the document for hiding popovers on user interaction
     */
    protected unbindDocumentEvents() {
        document.removeEventListener("mousedown", this.boundHideOnOutsideClick);
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
        if (
            this.shouldHideOnOutsideClick &&
            !this.referenceElement.contains(target) &&
            !this.popoverElement.contains(target) &&
            document.body.contains(target)
        ) {
            this.hide(e);
        }
    }

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
        if (this.popoverElement.contains(<Node>e.target)) {
            this.referenceElement.focus();
        }

        this.hide(e);
    }

    /**
     * Toggles all classes on the originating element based on the `class-toggle` data
     * @param {boolean=} show - A boolean indicating whether this is being triggered by a show or hide.
     */
    private toggleOptionalClasses(show?: boolean) {
        if (!this.data.has("toggle-class")) {
            return;
        }

        const toggleClass = this.data.get("toggle-class") || "";
        const cl = this.referenceElement.classList;
        toggleClass.split(/\s+/).forEach(function (cls: string) {
            cl.toggle(cls, show);
        });
    }

    /**
     * Toggles accessibility attributes based on whether the popover is shown or not
     * @param {boolean=} show - A boolean indicating whether this is being triggered by a show or hide.
     */
    private toggleAccessibilityAttributes(show?: boolean) {
        const expandedValue =
            show?.toString() || this.referenceElement.ariaExpanded || "false";
        this.referenceElement.ariaExpanded = expandedValue;
        this.referenceElement.setAttribute("aria-expanded", expandedValue);
    }
}

/**
 * Helper to manually show an s-popover element via external JS
 * @param element the element the `data-controller="s-popover"` attribute is on
 */
export function showPopover(element: HTMLElement) {
    const { isPopover, controller } = getPopover(element);
    if (controller) {
        controller.show();
    } else if (isPopover) {
        element.setAttribute("data-s-popover-auto-show", "true");
    } else {
        throw `element does not have data-controller="s-popover"`;
    }
}

/**
 * Helper to manually hide an s-popover element via external JS
 * @param element the element the `data-controller="s-popover"` attribute is on
 */
export function hidePopover(element: Element) {
    const { isPopover, controller, popover } = getPopover(element);

    if (controller) {
        controller.hide();
    } else if (isPopover) {
        element.removeAttribute("data-s-popover-auto-show");
        if (popover) {
            popover.classList.remove("is-visible");
        }
    } else {
        throw `element does not have data-controller="s-popover"`;
    }
}

/**
 * Options to use when attaching a popover via `Stacks.attachPopover`.
 * @see Stacks.attachPopover
 */
export interface PopoverOptions {
    /**
     * When true, the `click->s-popover#toggle` action will be attached to the controller element or reference element.
     */
    toggleOnClick?: boolean;
    /**
     * When set, `data-s-popover-placement` will be set to this value on the controller element.
     */
    placement?: string;

    /**
     * When true, the popover will appear immediately when the controller connects.
     */
    autoShow?: boolean;
}

/**
 * Attaches a popover to an element and performs additional configuration.
 * @param element the element that will receive the `data-controller="s-popover"` attribute.
 * @param popover an element with the `.s-popover` class or HTML string containing a single element with the `.s-popover` class.
 *                If the popover does not have a parent element, it will be inserted as a immediately after the reference element.
 * @param options an optional collection of options to use when configuring the popover.
 */
export function attachPopover(
    element: Element,
    popover: Element | string,
    options?: PopoverOptions
) {
    const { referenceElement, popover: existingPopover } = getPopover(element);

    if (existingPopover) {
        throw `element already has popover with id="${existingPopover.id}"`;
    }

    if (!referenceElement) {
        throw `element has invalid data-s-popover-reference-selector attribute`;
    }

    if (typeof popover === "string") {
        // eslint-disable-next-line no-unsanitized/method
        const elements = document
            .createRange()
            .createContextualFragment(popover).children;
        if (elements.length !== 1) {
            throw "popover should contain a single element";
        }
        popover = elements[0];
    }

    const existingId = referenceElement.getAttribute("aria-controls");
    let popoverId = popover.id;

    if (!popover.classList.contains("s-popover")) {
        throw `popover should have the "s-popover" class but had class="${popover.className}"`;
    }

    if (existingId && existingId !== popoverId) {
        throw `element has aria-controls="${existingId}" but popover has id="${popoverId}"`;
    }

    if (!popoverId) {
        popoverId =
            "--stacks-s-popover-" + Math.random().toString(36).substring(2, 10);
        popover.id = popoverId;
    }

    if (!existingId) {
        referenceElement.setAttribute("aria-controls", popoverId);
    }

    if (!popover.parentElement && element.parentElement) {
        referenceElement.insertAdjacentElement("afterend", popover);
    }

    toggleController(element, "s-popover", true);

    if (options) {
        if (options.toggleOnClick) {
            referenceElement.setAttribute(
                "data-action",
                "click->s-popover#toggle"
            );
        }
        if (options.placement) {
            element.setAttribute("data-s-popover-placement", options.placement);
        }
        if (options.autoShow) {
            element.setAttribute("data-s-popover-auto-show", "true");
        }
    }
}

/**
 * Removes the popover controller from an element and removes the popover from the DOM.
 * @param element the element that has the `data-controller="s-popover"` attribute.
 * @returns The popover that was attached to the element.
 */
export function detachPopover(element: Element) {
    const { isPopover, controller, referenceElement, popover } =
        getPopover(element);

    // Hide the popover so its events fire.
    controller?.hide();

    // Remove the popover if it exists
    popover?.remove();

    // Remove the popover controller and the aria-controls attributes.
    if (isPopover) {
        toggleController(element, "s-popover", false);
        if (referenceElement) {
            referenceElement.removeAttribute("aria-controls");
        }
    }

    return popover;
}

interface GetPopoverResult {
    /** indicates whether or not the element has s-popover in its `data-controller` class */
    isPopover: boolean;
    /** element's existing `PopoverController` or null it it has not been configured yet */
    controller: PopoverController | null;
    /** popover's reference element as would live in `referenceSelector` or null if invalid */
    referenceElement: Element | null;
    /** popover currently associated with the controller, or null if one does not exist in the DOM */
    popover: HTMLElement | null;
}

/**
 * Gets the current state of an element that may be or is intended to be an s-popover controller
 * so it can be configured either directly or via the DOM.
 * @param element An element that may have `data-controller="s-popover"`.
 */
function getPopover(element: Element): GetPopoverResult {
    const isPopover =
        element.getAttribute("data-controller")?.includes("s-popover") || false;
    const controller = Stacks.application.getControllerForElementAndIdentifier(
        element,
        "s-popover"
    ) as PopoverController;
    const referenceSelector = element.getAttribute(
        "data-s-popover-reference-selector"
    );
    const referenceElement = referenceSelector
        ? element.querySelector(referenceSelector)
        : element;
    const popoverId = referenceElement
        ? referenceElement.getAttribute("aria-controls")
        : null;
    const popover = popoverId ? document.getElementById(popoverId) : null;
    return { isPopover, controller, referenceElement, popover };
}

/**
 * Adds or removes the controller from an element's [data-controller] attribute without altering existing entries
 * @param el The element to alter
 * @param controllerName The name of the controller to add/remove
 * @param include Whether to add the controllerName value
 */
function toggleController(
    el: Element,
    controllerName: string,
    include: boolean
) {
    const controllers = new Set(
        el.getAttribute("data-controller")?.split(/\s+/)
    );
    if (include) {
        controllers.add(controllerName);
    } else {
        controllers.delete(controllerName);
    }
    el.setAttribute("data-controller", Array.from(controllers).join(" "));
}

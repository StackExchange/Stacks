import * as Stacks from "../../stacks";

export class BannerController extends Stacks.StacksController {
    static targets = ["banner"];

    declare readonly bannerTarget: HTMLElement;

    /**
     * Toggles the visibility of the banner
     */
    toggle(dispatcher: Event | Element | null = null) {
        this._toggle(undefined, dispatcher);
    }

    /**
     * Shows the banner
     */
    show(dispatcher: Event | Element | null = null) {
        this._toggle(true, dispatcher);
    }

    /**
     * Hides the banner
     */
    hide(dispatcher: Event | Element | null = null) {
        this._toggle(false, dispatcher);
    }

    /**
     * Toggles the visibility of the banner element
     * @param show Optional parameter that force shows/hides the element or toggles it if left undefined
     */
    private _toggle(
        show?: boolean | undefined,
        dispatcher: Event | Element | null = null
    ) {
        let toShow = show;
        const isVisible =
            this.bannerTarget.getAttribute("aria-hidden") === "false";

        // if we're letting the class toggle, we need to figure out if the banner is visible manually
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
                dispatcher: this.getDispatcher(dispatchingElement),
            },
            this.bannerTarget
        );

        // if this pre-show/hide event was prevented, don't attempt to continue changing the banner state
        if (triggeredEvent.defaultPrevented) {
            return;
        }

        this.bannerTarget.setAttribute(
            "aria-hidden",
            toShow ? "false" : "true"
        );

        if (!toShow) {
            this.removeBannerOnHide();
        }

        this.triggerEvent(
            toShow ? "shown" : "hidden",
            {
                dispatcher: dispatchingElement,
            },
            this.bannerTarget
        );
    }

    /**
     * Remove the element on hide if the `remove-when-hidden` flag is set
     */
    private removeBannerOnHide() {
        if (this.data.get("remove-when-hidden") !== "true") {
            return;
        }

        this.bannerTarget.addEventListener(
            "s-banner:hidden",
            () => {
                this.element.remove();
            },
            { once: true }
        );
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
 * Helper to manually show an s-banner element via external JS
 * @param element the element the `data-controller="s-banner"` attribute is on
 */
export function showBanner(element: HTMLElement) {
    toggleBanner(element, true);
}

/**
 * Helper to manually hide an s-banner element via external JS
 * @param element the element the `data-controller="s-banner"` attribute is on
 */
export function hideBanner(element: HTMLElement) {
    toggleBanner(element, false);
}

/**
 * Helper to manually show an s-banner element via external JS
 * @param element the element the `data-controller="s-banner"` attribute is on
 * @param show whether to force show/hide the banner; toggles the banner if left undefined
 */
function toggleBanner(element: HTMLElement, show?: boolean | undefined) {
    const controller = Stacks.application.getControllerForElementAndIdentifier(
        element,
        "s-banner"
    ) as BannerController;

    if (!controller) {
        throw "Unable to get s-banner controller from element";
    }

    show ? controller.show() : controller.hide();
}

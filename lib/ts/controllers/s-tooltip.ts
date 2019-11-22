
class TooltipController extends Stacks.StacksController {
    static targets = [];

    // @ts-ignore
    private popper!: Popper;

    private boundShow!: any;
    private boundHide!: any;

    private get popoverTarget(): HTMLElement | null {
        var popoverId = this.element.getAttribute("aria-describedby");
        return popoverId ? document.getElementById(popoverId) : null;
    }

    connect() {
        this.bindMouseEvents();
    }

    disconnect() {
        this.toggle(false);
        if (this.popper) {
            this.popper.destroy();
            this.popper = null;
        }
        this.unbindMouseEvents();
        this.unbindDocumentEvents();
    };

    private initializePopover() {

        if (this.popper) {
            return;
        }

        const popoverTarget = this.popoverTarget;

        if (!popoverTarget) {
            return;
        }
        
        // @ts-ignore
        this.popper = new Popper(this.element, popoverTarget, {
            eventsEnabled: false
        });
    }

    /**
     * Toggles the visibility of the popover element
     * @param {boolean=} show - Optional parameter that force shows/hides the element or toggles it if left undefined
     */
    toggle(show: boolean) {

        if (show) {
            const visiblePopover = document.querySelector(".s-popover.is-visible");
            if (visiblePopover && visiblePopover.id) {
                const control = document.querySelector(`[aria-controls=${visiblePopover.id}]`);
                if (control && control.hasAttribute("data-controller") && /(^|\s)s-popover(\s|$)/.test(control.getAttribute("data-controller")!)) {
                    return;
                }
            }
        }

        // show/hide events trigger before toggling the class
        const srcEvent = this.triggerEvent(show ? "show" : "hide");
        if (srcEvent.defaultPrevented) { return; }

        if (show && this.popoverTarget === null) {

            var title = this.element.getAttribute('title');
            if (title) {
                Stacks.setTooltipText(this.element, title);
                this.element.removeAttribute('title');
            } else {
                throw "No popover set.  Element must have [aria-describedby=\"{POPOVER_ID}\"] pointing to an actual element.";
            }
        }

        this.initializePopover();

        var cl = this.popoverTarget!.classList;

        if (this.data.has("class-names")) {
            this.data.get("class-names")!.split(/\s+/).forEach(cls => cl.add(cls));
        }

        // @ts-ignore
        this.popper.options.placement = this.data.get("placement") as Popper.Placement || "bottom";
        this.popper.update();
        cl.toggle("is-visible", show);

        if (show) {
            this.bindDocumentEvents();
        } else {
            this.unbindDocumentEvents();
        }

        // shown/hidden events trigger after toggling the class
        this.triggerEvent(show ? "shown" : "hidden");
    };

    private createEventBindings() {
        this.boundShow = this.boundShow || (() => this.toggle(true));
        this.boundHide = this.boundHide || (() => this.toggle(false));
    }

    private bindMouseEvents() {
        this.createEventBindings();
        this.unbindMouseEvents();
        this.element.addEventListener("mouseover", this.boundShow);
        this.element.addEventListener("mouseout", this.boundHide);
    }

    private unbindMouseEvents() {
        this.createEventBindings();
        this.element.removeEventListener("mouseover", this.boundShow);
        this.element.removeEventListener("mouseout", this.boundHide);
    }

    /**
     * Binds global events to the document for hiding popovers on user interaction
     */
    private bindDocumentEvents() {
        document.addEventListener("s-popover:shown", this.boundHide);
        if (this.popper) {
            this.popper.enableEventListeners();
        }
    }

    /**
     * Unbinds global events to the document for hiding popovers on user interaction
     */
    private unbindDocumentEvents() {
        document.removeEventListener("s-popover:shown", this.boundHide);
        if (this.popper) {
            this.popper.disableEventListeners();
        }
    }
}

Stacks.application.register("s-tooltip", TooltipController);

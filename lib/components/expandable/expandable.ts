import * as Stacks from "../../stacks";

// Radio buttons only trigger a change event when they're *checked*, but not when
// they're *unchecked*. Therefore, if we have an active `s-expandable-control` in
// the document, we listen for change events on *all* radio buttons and find any
// other radio buttons in the same `name` group, triggering a custom event on all
// of them so the controller can re-evaluate.
//
// We're keeping a count of how many of these controllers are connected to the DOM,
// so only have this global listener when we actually need it.
const RADIO_OFF_EVENT = "s-expandable-control:radio-off";

function globalChangeListener(e: UIEvent) {
    const target = e.target;
    if (
        !(target instanceof HTMLInputElement) ||
        target.nodeName !== "INPUT" ||
        target.type !== "radio"
    ) {
        return;
    }
    document
        .querySelectorAll('input[type="radio"][name="' + target.name + '"]')
        .forEach(function (other) {
            if (other === e.target) {
                return;
            }
            let customEvent;
            try {
                customEvent = new Event(RADIO_OFF_EVENT);
            } catch (ex) {
                // Internet Explorer
                customEvent = document.createEvent("Event");
                customEvent.initEvent(RADIO_OFF_EVENT, true, true);
            }
            other.dispatchEvent(customEvent);
        });
}

let refCount = 0;
function globalChangeListenerRequired(required: boolean) {
    if (required) {
        refCount++;
        if (refCount === 1) {
            document.body.addEventListener(
                "change",
                globalChangeListener as EventListener
            );
        }
    } else {
        refCount--;
        if (refCount === 0) {
            document.body.removeEventListener(
                "change",
                globalChangeListener as EventListener
            );
        }
    }
}

export class ExpandableController extends Stacks.StacksController {
    private isCollapsed!: () => boolean;
    private events!: string[];
    private isCheckable!: boolean;
    private isRadio!: boolean;
    private lastKeydownClickTimestamp = 0;

    initialize() {
        if (
            this.element.nodeName === "INPUT" &&
            ["radio", "checkbox"].indexOf(
                (<HTMLInputElement>this.element).type
            ) >= 0
        ) {
            this.isCollapsed = this._isCollapsedForCheckable.bind(this);
            this.events = ["change", RADIO_OFF_EVENT];
            this.isCheckable = true;
            this.isRadio = (<HTMLInputElement>this.element).type === "radio";
        } else {
            this.isCollapsed = this._isCollapsedForClickable.bind(this);
            this.events = ["click", "keydown"];
        }
        this.listener = this.listener.bind(this);
    }

    // for non-checkable elements, the initial source of truth is the collapsed/expanded
    // state of the controlled element (unless the element doesn't exist)
    _isCollapsedForClickable() {
        const cc = this.controlledExpandables;
        // the element is considered collapsed if *any* target element is collapsed
        return cc.length > 0
            ? !cc.every((element) => element.classList.contains("is-expanded"))
            : this.element.getAttribute("aria-expanded") === "false";
    }

    // for checkable elements, the initial source of truth is the checked state
    _isCollapsedForCheckable() {
        return !(<HTMLInputElement>this.element).checked;
    }

    get controlledExpandables() {
        const attr = this.element.getAttribute("aria-controls");
        if (!attr) {
            throw `[aria-controls="targetId1 ... targetIdN"] attribute required`;
        }
        const result = attr
            .split(/\s+/g)
            .map((s) => document.getElementById(s))
            .filter((e): e is HTMLElement => !!e);
        if (!result.length) {
            throw "couldn't find controls";
        }
        return result;
    }

    _dispatchShowHideEvent(isShow: boolean) {
        this.triggerEvent(isShow ? "show" : "hide");
    }

    _toggleClass(doAdd: boolean) {
        if (!this.data.has("toggle-class")) {
            return;
        }
        const cl = this.element.classList;
        const toggleClass = this.data.get("toggle-class");
        if (!toggleClass) {
            throw "couldn't find toggle class";
        }
        toggleClass.split(/\s+/).forEach(function (cls) {
            cl.toggle(cls, !!doAdd);
        });
    }

    listener(e: Event) {
        let newCollapsed;
        if (this.isCheckable) {
            newCollapsed = !(<HTMLInputElement>this.element).checked;
        } else {
            if (
                e.type == "keydown" &&
                e instanceof KeyboardEvent &&
                e.keyCode != 13 &&
                e.keyCode != 32
            ) {
                return;
            }
            if (
                e.target !== e.currentTarget &&
                ["A", "BUTTON"].indexOf((<HTMLElement>e.target).nodeName) >= 0
            ) {
                return;
            }

            e.preventDefault();

            // Prevent "click" events from toggling the expandable within 300ms of "keydown".
            // e.preventDefault() should have done the same, but https://bugzilla.mozilla.org/show_bug.cgi?id=1487102
            // doesn't guarantee it.
            if (e.type == "keydown") {
                this.lastKeydownClickTimestamp = Date.now();
            } else if (
                e.type == "click" &&
                Date.now() - this.lastKeydownClickTimestamp < 300
            ) {
                return;
            }
            newCollapsed =
                this.element.getAttribute("aria-expanded") === "true";
            if (e.type === "click") {
                (<HTMLInputElement>this.element).blur();
            }
        }
        this.element.setAttribute(
            "aria-expanded",
            newCollapsed ? "false" : "true"
        );
        for (const controlledElement of this.controlledExpandables) {
            controlledElement.classList.toggle("is-expanded", !newCollapsed);
        }
        this._dispatchShowHideEvent(!newCollapsed);
        this._toggleClass(!newCollapsed);
    }

    connect() {
        this.events.forEach((e) => {
            this.element.addEventListener(e, this.listener.bind(this));
        }, this);

        if (this.isRadio) {
            globalChangeListenerRequired(true);
        }

        // synchronize state -- in all cases, this means setting the correct `aria-expanded`
        // attribute; for checkable controls this also means setting the `is-collapsed` class.
        // Note: aria-expanded is currently an invalid attribute on radio elements
        // Support for aria-expanded is being debated by the W3C https://github.com/w3c/aria/issues/1404 as recently as June 2022
        if (!this.isRadio) {
            this.element.setAttribute(
                "aria-expanded",
                this.isCollapsed() ? "false" : "true"
            );
        }
        if (this.isCheckable) {
            const cc = this.controlledExpandables;
            if (cc.length) {
                const expected = !this.isCollapsed();
                // if any element does not match the expected state, set them all to the expected state
                if (
                    cc.some(
                        (element) =>
                            element.classList.contains("is-expanded") !==
                            expected
                    )
                ) {
                    for (const controlledElement of this
                        .controlledExpandables) {
                        controlledElement.classList.toggle(
                            "is-expanded",
                            expected
                        );
                    }
                    this._dispatchShowHideEvent(expected);
                    this._toggleClass(expected);
                }
            }
        }
    }

    disconnect() {
        this.events.forEach((e) => {
            this.element.removeEventListener(e, this.listener.bind(this));
        }, this);

        if (this.isRadio) {
            globalChangeListenerRequired(false);
        }
    }
}

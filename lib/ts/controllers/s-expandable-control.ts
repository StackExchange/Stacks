(function(){
    // Radio buttons only trigger a change event when they're *checked*, but not when
    // they're *unchecked*. Therefore, if we have an active `s-collapsible-control` in
    // the document, we listen for change events on *all* radio buttons and find any
    // other radio buttons in the same `name` group, triggering a custom event on all
    // of them so the controller can re-evaluate.
    //
    // We're keeping a count of how many of these controllers are connected to the DOM,
    // so only have this global listener when we actually need it.
    const RADIO_OFF_EVENT = "s-expandable-control:radio-off";

    function globalChangeListener(e: UIEvent) {
        const target = e.target;
        if (!(target instanceof HTMLInputElement) || target.nodeName !== "INPUT" || target.type !== "radio") {
            return;
        }
        document.querySelectorAll('input[type="radio"][name="' + target.name + '"]')
            .forEach(function (other) {
                if (other === e.target) {
                    return;
                }
                var customEvent;
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

    var refCount = 0;
    function globalChangeListenerRequired(required: boolean) {
        if (required) {
            refCount++;
            if (refCount === 1) {
                document.body.addEventListener("change", globalChangeListener as EventListener);
            }
        } else {
            refCount--;
            if (refCount === 0) {
                document.body.removeEventListener("change", globalChangeListener as EventListener);
            }
        }
    }

    Stacks.application.register("s-expandable-control", class extends Stacks.StacksController {
        private isCollapsed!: () => boolean;
        private events!: string[];
        private isCheckable!: boolean;
        private isRadio!: boolean;

        initialize() {
            if (this.element.nodeName === "INPUT" && ["radio", "checkbox"].indexOf((<HTMLInputElement>this.element).type) >= 0) {
                this.isCollapsed = this._isCollapsedForCheckable;
                this.events = ["change", RADIO_OFF_EVENT];
                this.isCheckable = true;
                this.isRadio = (<HTMLInputElement>this.element).type === "radio";
            } else {
                this.isCollapsed = this._isCollapsedForClickable;
                this.events = ["click", "keydown"];
            }
            this.listener = this.listener.bind(this);
        };


        // for non-checkable elements, the initial source of truth is the collapsed/expanded
        // state of the controlled element (unless the element doesn't exist)
        _isCollapsedForClickable() {
            var cc = this.controlledCollapsibles;
            return cc ? !cc.every(element => element.classList.contains("is-expanded")) : this.element.getAttribute("aria-expanded") === "false";
        };

        // for checkable elements, the initial source of truth is the checked state
        _isCollapsedForCheckable() {
            return !(<HTMLInputElement>this.element).checked;
        };


        get controlledCollapsibles() {
            const attr = this.element.getAttribute("aria-controls");
            if (!attr) {
                throw "couldn't find controls"
            }
            const result = attr.split(/\s+/g).map(s => document.getElementById(s)).filter(e => e);
            if (!result) {
                throw "couldn't find controls"
            }
            return result;
        };

        _dispatchShowHideEvent(isShow: boolean) {
            this.triggerEvent(isShow ? "show" : "hide");
        };

        _toggleClass(doAdd: boolean) {
            if (!this.data.has("toggle-class")) {
                return;
            }
            var cl = this.element.classList;
            var toggleClass = this.data.get("toggle-class");
            if (!toggleClass) {
                throw "couldn't find toggle class"
            }
            toggleClass.split(/\s+/).forEach(function (cls) {
                cl.toggle(cls, !!doAdd);
            });
        };

        listener(e: Event) {
            var newCollapsed;
            if (this.isCheckable) {
                newCollapsed = !(<HTMLInputElement>this.element).checked;
            } else {
                if (e.type == "keydown" && (e instanceof KeyboardEvent && e.keyCode != 13 && e.keyCode != 32)) {
                    return;
                }
                if (e.target !== e.currentTarget && ["A", "BUTTON"].indexOf((<HTMLElement>e.target).nodeName) >= 0) {
                    return;
                }
                newCollapsed = this.element.getAttribute("aria-expanded") === "true";
                e.preventDefault();
                if (e.type === "click") {
                    (<HTMLInputElement>this.element).blur();
                }
            }
            this.element.setAttribute("aria-expanded", newCollapsed ? "false" : "true");
            for (let controlledElement of this.controlledCollapsibles) {
                controlledElement.classList.toggle("is-expanded", !newCollapsed);
            }
            this._dispatchShowHideEvent(!newCollapsed);
            this._toggleClass(!newCollapsed);
        };

        connect() {
            this.events.forEach(e => {
                this.element.addEventListener(e, this.listener);
            }, this);

            if (this.isRadio) {
                globalChangeListenerRequired(true);
            }

            // synchronize state -- in all cases, this means setting the correct `aria-expanded`
            // attribute; for checkable controls this also means setting the `is-collapsed` class
            this.element.setAttribute("aria-expanded", this.isCollapsed() ? "false" : "true");
            if (this.isCheckable) {
                var cc = this.controlledCollapsibles;
                if (cc) {
                    var expected = !this.isCollapsed();
                    var actual = cc.some(element => element.classList.contains("is-expanded"));
                    if (expected !== actual) {
                        for (let controlledElement of this.controlledCollapsibles) {
                            controlledElement.classList.toggle("is-expanded", expected);
                        }
                        this._dispatchShowHideEvent(expected);
                        this._toggleClass(expected);
                    }
                }
            }
        };

        disconnect() {
            this.events.forEach(e => {
                this.element.removeEventListener(e, this.listener);
            }, this);

            if (this.isRadio) {
                globalChangeListenerRequired(false);
            }
        };
    });

})();

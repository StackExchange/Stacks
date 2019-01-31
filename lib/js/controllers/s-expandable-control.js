(function () {
    "use strict";

    // Radio buttons only trigger a change event when they're *checked*, but not when
    // they're *unchecked*. Therefore, if we have an active `s-collapsible-control` in
    // the document, we listen for change events on *all* radio buttons and find any
    // other radio buttons in the same `name` group, triggering a custom event on all
    // of them so the controller can re-evaluate.
    //
    // We're keeping a count of how many of these controllers are connected to the DOM,
    // so only have this global listener when we actually need it.

    var RADIO_OFF_EVENT = "s-expandable-control:radio-off";

    function globalChangeListener(e) {
        if (e.target.nodeName !== "INPUT" || e.target.type !== "radio") {
            return;
        }
        document.querySelectorAll('input[type="radio"][name="' + e.target.name + '"]')
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
    function globalChangeListenerRequired(required) {
        if (required) {
            refCount++;
            if (refCount === 1) {
                document.body.addEventListener("change", globalChangeListener);
            }
        } else {
            refCount--;
            if (refCount === 0) {
                document.body.removeEventListener("change", globalChangeListener);
            }
        }
    }


    Stacks.addController("s-expandable-control", {

        initialize: function () {
            if (this.element.nodeName === "INPUT" && ["radio", "checkbox"].indexOf(this.element.type) >= 0) {
                this.isCollapsed = this._isCollapsedForCheckable;
                this.events = ["change", RADIO_OFF_EVENT];
                this.isCheckable = true;
                this.isRadio = this.element.type === "radio";
            } else {
                this.isCollapsed = this._isCollapsedForClickable;
                this.events = ["click", "keydown"];
            }
            this.listener = this.listener.bind(this);
        },

        // for non-checkable elements, the initial source of truth is the collapsed/expanded
        // state of the controlled element (unless the element doesn't exist)
        _isCollapsedForClickable: function () {
            var cc = this.controlledCollapsible;
            return cc ? !cc.classList.contains("is-expanded") : this.element.getAttribute("aria-expanded") === "false";
        },

        // for checkable elements, the initial source of truth is the checked state
        _isCollapsedForCheckable: function () {
            return !this.element.checked;
        },

        get controlledCollapsible() {
            return document.getElementById(this.element.getAttribute("aria-controls"));
        },

        listener: function(e) {
            var newCollapsed;
            if (this.isCheckable) {
                newCollapsed = !this.element.checked;
            } else {
                if (e.type == "keydown" && (e.keyCode != 13 && e.keyCode != 32)) {
                    return;
                }
                if (e.target !== e.currentTarget && ["A", "BUTTON"].indexOf(e.target.nodeName) >= 0) {
                    return;
                }
                newCollapsed = this.element.getAttribute("aria-expanded") === "true";
                e.preventDefault();
                if (e.type === "click") {
                    this.element.blur();
                }
            }
            this.element.setAttribute("aria-expanded", newCollapsed ? "false" : "true");
            this.controlledCollapsible.classList.toggle("is-expanded", !newCollapsed);
        },

        connect: function () {
            this.events.forEach(function (e) {
                this.element.addEventListener(e, this.listener);
            }, this);

            if (this.isRadio) {
                globalChangeListenerRequired(true);
            }

            // synchronize state -- in all cases, this means setting the correct `aria-expanded`
            // attribute; for checkable controls this also means setting the `is-collapsed` class
            this.element.setAttribute("aria-expanded", this.isCollapsed() ? "false" : "true");
            if (this.isCheckable) {
                var cc = this.controlledCollapsible;
                if (cc) {
                    cc.classList.toggle("is-expanded", !this.isCollapsed());
                }
            }
        },

        disconnect: function () {
            this.events.forEach(function (e) {
                this.element.removeEventListener(e, this.listener);
            }, this);

            if (this.isRadio) {
                globalChangeListenerRequired(false);
            }
        }

    });
})();

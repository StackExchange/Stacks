(function () {
    "use strict";

    var RADIO_OFF_EVENT = "s-collapsible-control:radio-off";

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


    Stacks.addController("s-collapsible-control", {

        initialize: function () {
            if (this.element.nodeName === "INPUT" && ["radio", "checkbox"].indexOf(this.type)) {
                this.isCollapsed = this._isCollapsedForCheckable;
                this.events = ["change", RADIO_OFF_EVENT];
                this.isCheckable = true;
            } else {
                this.isCollapsed = this._isCollapsedForClickable;
                this.events = ["click", "keydown"];
            }
            this.listener = this.listener.bind(this);
        },

        _isCollapsedForClickable: function () {
            return this.controlledCollapsible().classList.contains("is-collapsed");
        },

        _isCollapsedForCheckable: function () {
            return !this.element.checked;
        },

        controlledCollapsible: function () {
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
                    this.blur();
                }
            }
            this.element.setAttribute("aria-expanded", newCollapsed ? "false" : "true");
            this.controlledCollapsible().classList.toggle("is-collapsed", newCollapsed);
        },

        connect: function () {
            this.events.forEach(function (e) {
                this.element.addEventListener(e, this.listener);
            }, this);

            if (this.isCheckable && this.element.type === "radio") {
                globalChangeListenerRequired(true);
            }

            this.element.setAttribute("aria-expanded", this.isCollapsed() ? "false" : "true");
            if (this.isCheckable) {
                this.controlledCollapsible().classList.toggle("is-collapsed", this.isCollapsed);
            }
        },

        disconnect: function () {
            this.events.forEach(function (e) {
                this.element.removeEventListener(e, this.listener);
            }, this);

            if (this.isCheckable && this.element.type === "radio") {
                globalChangeListenerRequired(false);
            }
        }

    });
})();

(function () {
    "use strict";
    Stacks.addController("s-popover", {
        targets: [],
        
        /**
         * Initializes popper.js and document events on controller connect
         */
        connect: function() {
            var popoverId = this.element.getAttribute("aria-controls");

            if (!popoverId) {
                throw "[aria-controls=\"{POPOVER_ID}\"] required";
            }

            this.popoverElement = document.getElementById(popoverId);

            this.popper = new Popper(this.element, this.popoverElement, {
                placement: this.data.get("placement") || "bottom",
            });

            // in order for removeEventListener to remove the right event, this bound function needs a constant reference
            this._boundClickFn = this._hideOnOutsideClick.bind(this);

            document.addEventListener("click", this._boundClickFn);
        },

        /**
         * Cleans up popper.js elements and disconnects all added event listeners on controller disconnect
         */
        disconnect: function() {
            this.popper.destroy();

            document.removeEventListener("click", this._boundClickFn);
        },

        /**
         * Toggles the visibility of the popover when called as a Stimulus action
         * @param {Event} event - The event object from the Stimulus action call
         */
        toggle: function(event) {
            this._toggle();
        },

        /**
         * Shows the popover
         */
        show: function() {
            this._toggle(true);
        },

        /**
         * Hides the popover
         */
        hide: function() {
            this._toggle(false);
        },

        /**
         * Toggles the visibility of the popover element
         * @param {boolean=} show - Optional parameter that force shows/hides the element or toggles it if left undefined
         */
        _toggle: function(show) {
            this.popoverElement.classList.toggle("is-visible", show);
            this._toggleOptionalClasses(show);
        },

        /**
         * Forces the popover to hide if a user clicks outside of it or its reference element
         * @param {Event} e - The document click event
         */
        _hideOnOutsideClick: function(e) {
            // check if the document was clicked inside either the reference element or the popover itself
            // note: .contains also returns true if the node itself matches the target element
            if (!this.element.contains(e.target) && !this.popoverElement.contains(e.target)) {
                this.hide();
            }
        },

        /**
         * Toggles all classes on the originating element based on the `class-toggle` data
         * @param {boolean=} show - Optional parameter that force shows/hides the classes or toggles them if left undefined 
         */
        _toggleOptionalClasses: function(show) {
            if (!this.data.has("toggle-class")) {
                return;
            }
            var cl = this.element.classList;
            this.data.get("toggle-class").split(/\s+/).forEach(function (cls) {
                cl.toggle(cls, show);
            });
        }
    });
})();

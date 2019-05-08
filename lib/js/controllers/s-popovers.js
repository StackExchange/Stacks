(function () {
    "use strict";
    Stacks.addController("s-popover", {
        targets: ["reference", "popover"],
        
        /**
         * Initializes popper.js and document events on controller connect
         */
        connect: function() {
            this.popper = new Popper(this.referenceTarget, this.popoverTarget, {
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
            this.popoverTarget.classList.toggle("is-visible", show);
        },

        /**
         * Forces the popover to hide if a user clicks outside of it or its reference element
         * @param {Event} e - The document click event
         */
        _hideOnOutsideClick: function(e) {
            // check if the document was clicked inside either the reference element or the popover itself
            // note: .contains also returns true if the node itself matches the target element
            if (!this.referenceTarget.contains(e.target) && !this.popoverTarget.contains(e.target)) {
                this.hide();
            }
        }
    });
})();

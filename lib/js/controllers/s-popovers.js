(function () {
    "use strict";
    Stacks.addController("s-popover", {
        targets: ["reference", "popover"],
        
        connect: function() {
            this.popper = new Popper(this.referenceTarget, this.popoverTarget, {
                placement: this.data.get("placement") || "bottom",
            });

            // in order for removeEventListener to remove the right event, this bound function needs a constant reference
            this._boundClickFn = this._hideOnOutsideClick.bind(this);

            document.addEventListener("click", this._boundClickFn);
        },

        disconnect: function() {
            this.popper.destroy();

            document.removeEventListener("click", this._boundClickFn);
        },

        toggle: function(event) {
            this._toggle();
        },

        show: function() {
            this._toggle(true);
        },

        hide: function() {
            this._toggle(false);
        },

        _toggle: function(show) {
            this.popoverTarget.classList.toggle("is-visible", show);
        },

        _hideOnOutsideClick: function(e) {
            // check if the document was clicked inside either the reference element or the popover itself
            // note: .contains also returns true if the node itself matches the target element
            if (!this.referenceTarget.contains(e.target) && !this.popoverTarget.contains(e.target)) {
                this.hide();
            }
        }
    });
})();

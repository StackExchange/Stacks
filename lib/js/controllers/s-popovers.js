(function () {
    "use strict";
    Stacks.addController("s-popover", {
        targets: ["reference", "popover"],
        
        initialize: function() {
            this.popper = new Popper(this.referenceTarget, this.popoverTarget, {
                placement: "auto"
            });
        },

        toggle: function(show) {
            this.popoverTarget.classList.toggle("is-visible", show);
        },

        show: function() {
            this.toggle(true);
        },

        hide: function() {
            this.toggle(false);
        }
    });
})();

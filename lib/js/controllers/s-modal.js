(function() {
    "use strict";

    Stacks.addController("s-modal", {
        targets: ["content"],

        show: function() {
            this.contentTarget.setAttribute("tabindex", 0);
            this.contentTarget.setAttribute("aria-hidden", false);
            document.body.setAttribute("tabindex", -1);
            document.body.setAttribute("aria-hidden", true);
        },
        hide: function() {
            this.contentTarget.setAttribute("tabindex", -1);
            this.contentTarget.setAttribute("aria-hidden", true);
            document.body.setAttribute("tabindex", 0);
            document.body.setAttribute("aria-hidden", false);
        },
        nohide: function(event) {
            event.stopPropagation();
        }
    });
})();
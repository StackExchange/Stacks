(function() {
    "use strict";

    Stacks.addController("s-modal", {
        targets: ["content"],

        show: function() {
            this.contentTarget.setAttribute("tabindex", 0);
            this.contentTarget.setAttribute("aria-hidden", false);
            this.contentTarget.focus();
            document.body.setAttribute("tabindex", -1);
            document.body.setAttribute("aria-hidden", true);
        },
        hide: function() {
            this.contentTarget.setAttribute("tabindex", -1);
            this.contentTarget.setAttribute("aria-hidden", true);
            this.contentTarget.blur();
            document.body.setAttribute("tabindex", 0);
            document.body.setAttribute("aria-hidden", false);
        },
        nohide: function(event) {
            event.stopPropagation();
        },
        keydown: function(event) {
            if (event.key === "Escape") {
                this.hide();
            }
        }
    });
})();
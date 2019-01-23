(function () {
    "use strict";

    function listener(e) {
        if (e.type == "keydown" && (e.keyCode != 13 && e.keyCode != 32)) {
            return;
        }
        if (e.target !== e.currentTarget && ["A", "BUTTON"].indexOf(e.target.nodeName) >= 0) {
            return;
        }
        var expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", expanded ? "false" : "true");
        var l = document.getElementById(this.getAttribute("aria-controls"));
        if (expanded) {
            l.classList.add("is-collapsed");
        } else {
            l.classList.remove("is-collapsed");
        }
        if (e.type === "click") {
            this.blur();
        }
        e.preventDefault();
    }

    Stacks.addController("s-collapsible-control", {

        connect: function () {
            this.element.addEventListener("click", listener);
            this.element.addEventListener("keydown", listener);

            var l = document.getElementById(this.element.getAttribute("aria-controls"));
            var currentlyCollapsed = l.classList.contains("is-collapsed");
            this.element.setAttribute("aria-expanded", currentlyCollapsed ? "false" : "true");
        },

        disconnect: function () {
            this.element.removeEventListener("click", listener);
            this.element.removeEventListener("keydown", listener);
        }

    });
})();

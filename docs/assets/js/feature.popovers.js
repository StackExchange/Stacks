$(document).ready(function() {
    Stacks.setTooltipText(document.querySelector(".js-text-tooltip-example"), "Only members of this Team can see the information posted here. It will never be shared publicly or accessible outside of your Team.", { placement: "top-start" });
    Stacks.setTooltipHtml(document.querySelector(".js-html-tooltip-example"), "View all questions with <span class='s-tag'>stacks</span>", { placement: "top-end" });

    window.addEventListener("load", () => {
        Stacks.addController("section", {
            targets: ["help"],
            showHelp(e) { Stacks.showPopover(this.helpTarget); e.stopPropagation(); },
            hideHelp(e) { Stacks.hidePopover(this.helpTarget); },
        });

        Stacks.addController("actions", {
            loaded: false,
            load() {
                if (this.loaded) { return; }
                setTimeout(() => {
                    Stacks.attachPopover(this.element, `<div class="s-popover wmx1"><div class="s-popover--arrow"></div><div class="s-btn d-block">Edit</div><div class="s-btn s-btn__danger d-block">Delete</div></div>`, { autoShow: true, toggleOnClick: true });
                    this.loaded = true;
                });
            },
        });
    });
});
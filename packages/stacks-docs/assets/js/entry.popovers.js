$(document).ready(function() {
    Stacks.setTooltipText(document.querySelector(".js-text-tooltip-example"), "Only members of this Team can see the information posted here. It will never be shared publicly or accessible outside of your Team.", { placement: "top-start" });
    Stacks.setTooltipHtml(document.querySelector(".js-html-tooltip-example"), "View all questions with <span class='s-tag'>stacks</span>", { placement: "top-end" });

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
                Stacks.attachPopover(this.element, `<div class="s-popover wmx1"><div class="s-popover--arrow"></div><ul class="s-menu mxn12 myn8" role="menu"><li role="menuitem"><button class="s-block-link">Share</button></li><li role="menuitem"><button class="s-block-link">Edit</button></li><li role="menuitem"><button class="s-block-link">Flag</button></li><li class="s-menu--divider" role="separator"></li><li role="menuitem"><button class="s-block-link s-block-link__danger">Delete</button></li></ul></div>`, { autoShow: true, toggleOnClick: true, placement: "bottom" });
                this.loaded = true;
            });
        },
    });
});

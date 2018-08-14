$(document).ready(function() {
    //
    //  --  Universal Vars
    //
    var trigger = $(".js-trigger");
    var tooltip = $(".js-tooltip");
    var popover = $(".js-popover");
    var tipDirClass = ("s-arrow__tl s-arrow__tc s-arrow__tr s-arrow__rt s-arrow__rc s-arrow__rb s-arrow__bl s-arrow__bc s-arrow__br s-arrow__lt s-arrow__lc s-arrow__lr");

    //
    //  --  Menu Vars
    //      This updates the tooltip or popover example
    //
    var menuUpdate = $(".js-menu-update");
    var menuPosition = $(".js-menu-position");
    var menuMethod = $(".js-menu-method");

    //
    //  --  Functions
    //
    $.fn.hideItem = function() {
        this.attr("aria-hidden","true");
    }
    $.fn.showItem = function() {
        this.attr("aria-hidden","false");
    }

    //
    //  --  Trigger JS
    //      This shows the tooltip or popover depending on the data-method stated
    //
    trigger.on({
        mouseover: function() {
            var target = $(this).attr("aria-controls");
            var item = "#" + target;
            var itemMethod = $(item).data("method");

            if (itemMethod == "hover") {
                $(item).showItem();
            }
        },
        mouseout: function() {
            var target = $(this).attr("aria-controls");
            var item = "#" + target;
            var itemMethod = $(item).data("method");

            if (itemMethod == "hover") {
                $(item).hideItem();
            }
        },
        click: function(e) {
            var target = $(this).attr("aria-controls");
            var item = "#" + target;
            var itemState = $(item).attr("aria-hidden");

            // Close all currently open tooltips or popovers
            tooltip.hideItem();
            popover.hideItem();

            if (itemState === "true") {
                $(item).showItem();
            }
            else {
                $(item).hideItem();
            }
        }
    });


    //  --  Update the example on the page based on the menu options
    menuUpdate.on("click", function(e) {
        e.stopPropagation;
        e.preventDefault;

        var position = menuPosition.find(":selected").data("class");
        var method = menuMethod.find(":selected").data("method");

        if (tooltip) {
            tooltip
                .removeClass(tipDirClass)
                .addClass(position)
                .data("method", method);
        }
    })


});

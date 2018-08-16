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
    var menuArrow = $(".js-menu-arrow");
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
        },
        mousemove: function(e) {
            var target = $(this).attr("aria-controls");
            var item = "#" + target;
            var itemPos = $(this).position();
            var pos = $(item).data("position");
            var itemArrow = $(item).data("arrow");
            var targetHeight = $(item).outerHeight();
            var targetWidth = $(item).outerWidth();
            var tipHeight = $(this).outerHeight();
            var tipWidth = $(this).outerWidth();

            if (pos === "bottom left") {
                $(item).css({
                    top: -(targetHeight + 8),
                    left: itemPos.left - 8
                });
            }
            else if (pos === "bottom center") {
                $(item).css({
                    top: -(targetHeight + 8),
                    left: (tipWidth - targetWidth) / 2
                });
            }
            else if (pos === "bottom right") {
                $(item).css({
                    top: -(targetHeight + 8),
                    left: tipWidth - (targetWidth - 4)
                });
            }
            else if (pos === "top left") {
                $(item).css({
                    top: tipHeight + 8,
                    left: itemPos.left - 8
                });
            }
            else if (pos === "top center") {
                $(item).css({
                    top: tipHeight + 8,
                    left: (tipWidth - targetWidth) / 2
                });
            }
            else if (pos === "top right") {
                $(item).css({
                    top: tipHeight + 8,
                    left: tipWidth - targetWidth + 6
                });
            }
            else if (pos === "left top") {
                $(item).css({
                    top: itemPos.top - 4,
                    left: tipWidth + 8
                });
            }
            else if (pos === "left center") {
                $(item).css({
                    top: -((targetHeight - tipHeight) / 2),
                    left: tipWidth + 8
                });
            }
            else if (pos === "left bottom") {
                $(item).css({
                    top: -(targetHeight - tipHeight),
                    left: tipWidth + 8
                });
            }
            else if (pos === "right top") {
                $(item).css({
                    top: itemPos.top - 4,
                    left: -(targetWidth + 12)
                });
            }
            else if (pos === "right center") {
                $(item).css({
                    top: -((targetHeight - tipHeight) / 2),
                    left: -(targetWidth + 12)
                });
            }
            else if (pos === "right bottom") {
                $(item).css({
                    top: -(targetHeight - tipHeight),
                    left: -(targetWidth + 12)
                });
            }
        }
    });


    //  --  Update the arrow options with the intitial direction is selected
    menuPosition.change(function() {
        var pos = $(this).find(":selected").data("position");
        if ((pos === "top") || (pos ==="bottom")) {
            var xOptions = {
                "Left": "left",
                "Center": "center",
                "Right": "right"
            };

            menuArrow.empty();
            $.each(xOptions, function(key,val) {
                menuArrow.append($("<option></option>")
                        .attr({
                            "name": "tooltip-arrow",
                            "id": val,
                            "data-position": val
                        })
                        .text(key));
                });
            //menuArrow.find("option:eq(0)").attr("selected","");
        }

        if ((pos === "left") || (pos ==="right")) {
            var yOptions = {
                "Top": "top",
                "Center": "center",
                "Bottom": "bottom"
            };

            menuArrow.empty();
            $.each(yOptions, function(key,val) {
                menuArrow.append($("<option></option>")
                        .attr({
                            "name": "tooltip-arrow",
                            "id": val,
                            "data-position": val
                        })
                        .text(key));
                });
            //menuArrow.find("option:eq(0)").attr("selected","");
        }
    })
    //  --  Update the example on the page based on the menu options
    menuUpdate.on("click", function(e) {
        e.stopPropagation;
        e.preventDefault;

        var pos1 = menuPosition.find(":selected").data("position");
        var pos2 = menuArrow.find(":selected").data("position");
        var pos = pos1 + " " + pos2;
        var arr1 = pos1.charAt(0);
        var arr2 = pos2.charAt(0);
        var method = menuMethod.find(":selected").data("method");

        tooltip
            .attr({
                "data-method": method,
                "data-position": pos
            })
            .css({
                top: "",
                left: ""
            })
            .find("[class^='s-arrow__']")
            .removeClass(tipDirClass)
            .addClass("s-arrow__" + arr1 + arr2);
    })


});

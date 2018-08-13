$(document).ready(function() {
    var trigger = $(".js-tooltip-trigger");
    var tooltip = $(".js-tooltip");
    var tipUpdate = $(".js-tooltip-update");
    var tipPosition = $(".js-tooltip-position-menu");
    var tipMethod = $(".js-tooltip-method-menu");
    var tipDirClass = ("s-nubbin__tl s-nubbin__tc s-nubbin__tr s-nubbin__rt s-nubbin__rc s-nubbin__rb s-nubbin__bl s-nubbin__bc s-nubbin__br s-nubbin__lt s-nubbin__lc s-nubbin__lr");

    trigger.on({
        mouseover: function() {
            var target = $(this).attr("aria-controls");
            var tip = "#" + target;
            var tipMethod = $(tip).data("method");

            if (tipMethod == "hover") {
                $(tip).attr("aria-hidden","false");
            }
        },
        mouseout: function() {
            var target = $(this).attr("aria-controls");
            var tip = "#" + target;
            var tipMethod = $(tip).data("method");

            if (tipMethod == "hover") {
                $(tip).attr("aria-hidden", "true");
            }
        },
        click: function() {
            var target = $(this).attr("aria-controls");
            var tip = "#" + target;
            var tipState = $(tip).attr("aria-hidden");
            var tipMethod = $(tip).data("method");

            // Close all currently open tooltips
            tooltip.attr("aria-hidden","true");

            if (tipState == "true") {
                $(tip).attr("aria-hidden","false");
            }
            else {
                $(tip).attr("aria-hidden", "true");
            }
        }
    });

    tipUpdate.on("click", function(e) {
        e.stopPropagation;
        e.preventDefault;

        var position = tipPosition.find(":selected").data("class");
        var method = tipMethod.find(":selected").data("method");


        tooltip
            .removeClass(tipDirClass)
            .addClass(position)
            .data("method", method);
    })
});

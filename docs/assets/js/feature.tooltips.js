$(document).ready(function() {
    var trigger = $(".js-tooltip-trigger");
    var tooltip = $(".js-tooltip");

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
});

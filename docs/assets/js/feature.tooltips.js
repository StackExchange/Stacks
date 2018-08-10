$(document).ready(function() {
    var trigger = $(".js-tooltip-trigger");

    $.fn.setState = function() {
        var target = $(this).attr("aria-describedby");
        var tip = "#" + target;
        var tipState = $(tip).attr("aria-hidden");
        var tipMethod = $(tip).data("method");

        if (tipState == "true") {
            $(tip).attr("aria-hidden","false");
        }
        else {
            $(tip).attr("aria-hidden", "true");
        }
    }

    trigger.on({
        mouseover: function() {
            var target = $(this).attr("aria-describedby");
            var tip = "#" + target;
            var tipState = $(tip).attr("aria-hidden");
            var tipMethod = $(tip).data("method");

            if (tipMethod == "hover") {
                $(tip).setState();
            }
        },
        mouseout: function() {
            var target = $(this).attr("aria-describedby");
            var tip = "#" + target;
            var tipState = $(tip).attr("aria-hidden");
            var tipMethod = $(tip).data("method");

            if (tipMethod == "hover") {
                $(tip).setState();
            }
        },
        click: function() {
            var target = $(this).attr("aria-describedby");
            var tip = "#" + target;
            var tipState = $(tip).attr("aria-hidden");
            var tipMethod = $(tip).data("method");

            if (tipMethod == "click") {
                $(tip).setState();
            }
        }
    });
});

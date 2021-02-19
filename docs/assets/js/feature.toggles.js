$(document).ready(function() {
    $(".s-toggle-switch input[type=radio][value]").change(function(e) {
        var topnavHeight = $(".js-stacks-topbar").outerHeight();
        var toast = $(".js-notice-toast");

        var toastOffset = topnavHeight + 16 + "px";

        toast.css("top", toastOffset);

        toast.find("#js-value-placeholder").text(this.value);

        toast.queue(function() {
            $(this).attr("aria-hidden","false").dequeue();
        })
        .delay(3000)
        .queue(function(e) {
            $(this).attr("aria-hidden","true").dequeue();
        });
    });
});
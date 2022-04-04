$(document).ready(function() {
    var topnav = $(".js-stacks-topbar");
    var topnavHeight = topnav.outerHeight();
    var toast = $(".js-notice-toast");
    var closeBtn = $(".js-notice-close");

    $(".js-notice-toast-open").on("click", function(e) {
        var toastOffset = topnavHeight + 16 + "px";

        toast.css("top", toastOffset);

        // TODO find a replacement for jQuery queue
        toast.queue(function() {
                $(this).attr("aria-hidden","false").dequeue();
            })
            .delay(3000)
            .queue(function(e) {
                $(this).attr("aria-hidden","true").dequeue();
            });
    });

    closeBtn.on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        toast.attr("aria-hidden","true");
    });
});

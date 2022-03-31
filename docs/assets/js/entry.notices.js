$(document).ready(function() {
    var topnav = $(".js-stacks-topbar");
    var topnavHeight = topnav.outerHeight();
    var toast = $(".js-notice-toast");
    var closeBtn = $(".js-notice-close");

    $(".js-notice-toast-open").click(function(e) {
        var toastOffset = topnavHeight + 16 + "px";

        toast.css("top", toastOffset);

        toast.queue(function() {
                $(this).attr("aria-hidden","false").dequeue();
            })
            .delay(3000)
            .queue(function(e) {
                $(this).attr("aria-hidden","true").dequeue();
            });
    });

    closeBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        toast.attr("aria-hidden","true");
    });
});

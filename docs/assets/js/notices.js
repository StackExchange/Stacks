$(document).ready(function() {
    var topnav = $(".js-stacks-topbar");
    var topnavHeight = topnav.outerHeight();
    var banner = $(".js-notice-banner");
    var bannerHeight = banner.outerHeight();
    var toast = $(".js-notice-toast");
    var closeBtn = $(".js-notice-close");

    banner.hide();

    $(".js-notice-banner-open").click(function(e) {
        topnav.css("top","").show();
        banner.show().attr("aria-hidden","false").removeClass("s-notice__danger is-pinned");
    });

    $(".js-notice-banner-pinned-open").click(function(e) {
        topnav.css("top", bannerHeight + "px").show();
        banner.show().attr("aria-hidden","false").addClass("s-notice__danger is-pinned");
    });

    $(".js-notice-toast-open").click(function(e) {
        var attr = banner.attr("aria-hidden");
        var toastOffset = topnavHeight + bannerHeight + 16 + "px";

        if (typeof attr !== typeof undefined && attr == "false") {
            toast.css("top", toastOffset);
        }
        else {
            toast.css("top","");
        }

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
        topnav.css("top","").hide();
        banner.hide().attr("aria-hidden","true").removeClass("s-notice__danger is-pinned");
    });
});

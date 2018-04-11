$(document).ready(function() {

    $(".js-notice-banner-open").click(function(e) {
        $(".js-stack-topbar-example").css("top","").show();
        $(".js-notice-banner").attr("aria-hidden","false").removeClass("s-notice__danger is-pinned");
    });

    $(".js-notice-banner-pinned-open").click(function(e) {
        $(".js-stack-topbar-example").css("top","50px").show();
        $(".js-notice-banner").attr("aria-hidden","false").addClass("s-notice__danger is-pinned");
    });

    $(".js-notice-toast-open").click(function(e) {
        var banner = $(".js-notice-banner");
        var attr = banner.attr("aria-hidden");
        var toast = $(".js-notice-toast");

        if (typeof attr !== typeof undefined && attr == "false") {
            toast.css("top","116px");
        }
        else {
            toast.css("top","");
        }

        $(".js-notice-toast")
            .queue(function() {
                $(this).attr("aria-hidden","false").dequeue();
            })
            .delay(3000)
            .queue(function(e) {
                $(this).attr("aria-hidden","true").dequeue();
            });
    });

    $(".js-notice-close").click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $(".js-notice-toast").attr("aria-hidden","true");
        $(".js-stack-topbar-example").css("top","").hide();
        $(".js-notice-banner").attr("aria-hidden","true").removeClass("s-notice__danger is-pinned");
    });
});

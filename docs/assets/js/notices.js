$(document).ready(function() {
    $(".js-notice-banner-open").click(function(e) {
        $(".js-stacks-nav, .js-stacks-content").css({
            "margin-top": "44px",
            "transition": "margin-top 125ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s"
        });
        $(".js-notice-banner").attr("aria-hidden","false");
    });

    $(".js-notice-banner-close").click(function(e) {
        $(".js-stacks-nav, .js-stacks-content").css("margin-top","");
        $(".js-notice-banner").attr("aria-hidden","true");
    });

    $(".js-notice-toast-open").click(function(e) {
        var banner = $(".js-notice-banner[aria-hidden=false]");
        var toast = $(".js-notice-toast");

        if (typeof banner == true) {
            toast.css("top","66px");
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

    $(".js-notice-toast-close").click(function(e) {
        $(".js-notice-toast").attr("aria-hidden","true");
    });
});

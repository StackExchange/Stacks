$(document).ready(function() {
    $(".js-notice-banner-open").click(function(e) {
        $(".js-stacks-nav, .js-stacks-content").css("margin-top","44px");
        $(".js-notice-banner").addClass("d-block");
    });

    $(".js-notice-banner-close").click(function(e) {
        $(".js-stacks-nav, .js-stacks-content").css("margin-top","");
        $(".js-notice-banner").removeClass("d-block");
    });

    $(".js-notice-toast-open").click(function(e) {
        $(".js-notice-toast").addClass("d-block");
    });

    $(".js-notice-toast-close").click(function(e) {
        $(".js-notice-toast").removeClass("d-block");
    });
});

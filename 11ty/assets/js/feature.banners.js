$(document).ready(function() {
    //  Show the system banner when you click the "Show Example" button
    var topnav = $(".js-stacks-topbar");
    var sysBanner = $(".js-notice-banner");
    var sysBannerHeight = sysBanner.outerHeight();
    var sysBannerBtn = $(".js-sys-banner-show");
    var sysCloseBtn = $(".js-sys-banner-remove, .js-notice-close");
    var sysStyleMenu = $(".js-sys-banner-style-menu");
    var sysType = $(".js-sys-banner-type");
    var sysPos = $(".js-sys-banner-position");
    var sysCloseIcon = $(".js-notice-close");
    var typeClasses = ("s-banner__info s-banner__success s-banner__warning s-banner__danger s-banner__dark s-banner__important is-pinned");

    sysBannerBtn.on("click", function(e) {
        var sysStyle = sysStyleMenu.find(":selected").data("class");

        e.preventDefault();
        e.stopPropagation();

        $(this).text("Update example");
        topnav.css("top","");
        sysCloseBtn.removeClass("d-none");
        sysBanner.show().attr("aria-hidden","false").removeClass(typeClasses).addClass(sysStyle);
        sysCloseIcon.removeClass("fc-white").addClass("fc-dark");

        if (sysPos.is(":checked")) {
            topnav.removeClass("t0").css("top", sysBannerHeight + "px");
            sysBanner.addClass("is-pinned");
        }

        if (sysType.is(":checked")) {
            sysBanner.addClass("s-banner__important");

            if (sysStyle == "s-banner__warning" || sysStyle == "s-banner__success") {
                sysCloseIcon.removeClass("fc-white").addClass("fc-dark");
            }
            else {
                sysCloseIcon.removeClass("fc-dark").addClass("fc-white");
            }
        }
    });

    sysCloseBtn.on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        topnav.addClass("t0");
        sysBanner.hide().attr("aria-hidden","true").removeClass(typeClasses);

        sysBannerBtn.text("Show example");
        sysCloseBtn.addClass("d-none");
    });

});

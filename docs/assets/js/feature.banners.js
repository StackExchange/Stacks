$(document).ready(function() {
    var hero = $(".js-banner-hero");
    var heroSmall = $(".js-banner-bar");
    var heroBtn = $(".js-banner-show-hero");
    var heroCloseBtn = $(".js-banner-remove-hero");
    var heroTypeMenu = $(".js-hero-type-menu");
    var heroPatternMenu = $(".js-hero-pattern-menu");
    var heroPositionMenu = $(".js-hero-position-menu");
    var heroBannerFooter = $(".js-banner-hero-footer");
    var circle = $(this).find(".js-banner-circle");
    var typeClasses = ("s-banner__info s-banner__success s-banner__warning s-banner__danger s-banner__dark s-banner__important s-hero__orange s-hero__purple s-hero__dark s-hero__info s-hero__success s-hero__warning s-hero__danger s-hero--circle is-pinned");

    //  Hide everything on load
    hero.hide();
    heroSmall.hide();
    heroBannerFooter.hide();

    $.fn.hideBanner = function() {
        this.hide()
            .attr("aria-hidden","true")
            .removeClass(typeClasses)
            .css({
                "position": "",
                "top": "",
                "left": "",
                "right": ""
            });
    }

    //  Show the hero banners when you click the "Show Example" button
    heroBtn.on("click", function() {
        var typeSelect = heroTypeMenu.find(":selected").data("class");
        var circleSelect = heroPatternMenu.find(":selected").data("circle");
        var positionSelect = heroPositionMenu.find(":selected").data("pinned");

        $(this).text("Update example");
        heroCloseBtn.removeClass("d-none");

        if (positionSelect == "yes") {
            heroBannerFooter
                .show()
                .attr("aria-hidden","false")
                .removeClass(typeClasses)
                .addClass(typeSelect + " is-pinned");
            hero.hideBanner();
            heroSmall.hideBanner();

            if (circleSelect == "yes") {
                circle.addClass("s-hero--circle");
            }
            else {
                circle.removeClass("s-hero--circle");
            }
        }
        else {
            heroBannerFooter.hideBanner();
            hero
                .show()
                .attr("aria-hidden","false")
                .removeClass(typeClasses)
                .addClass(typeSelect)
                .css({
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "right": "0"
                });
            heroSmall
                .show()
                .attr("aria-hidden","false")
                .removeClass(typeClasses)
                .addClass(typeSelect).addClass(positionSelect)
                .css({
                    "position": "fixed",
                    "top": hero.outerHeight(),
                    "left": "0",
                    "right": "0"
                });

            if (circleSelect == "yes") {
                circle.addClass("s-hero--circle");
            }
            else {
                circle.removeClass("s-hero--circle");
            }
        }
    });

    heroCloseBtn.on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        heroBannerFooter.hideBanner();
        heroSmall.hideBanner();
        hero.hideBanner();
        circle.removeClass("s-hero--circle");

        heroBtn.text("Show example");
        heroCloseBtn.addClass("d-none");
    });

    //  Dismiss the small hero footer banner
    $(".js-banner-dismiss-btn").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        heroBannerFooter
                .hide()
                .attr("aria-hidden","true")
                .removeClass(typeClasses);
        heroSmall.hideBanner();
        hero.hideBanner();
        circle.removeClass("s-hero--circle");
    });


    //  Show the system banner when you click the "Show Example" button
    var topnav = $(".js-stacks-topbar");
    var topnavHeight = topnav.outerHeight();
    var sysBanner = $(".js-notice-banner");
    var sysBannerHeight = sysBanner.outerHeight();
    var sysBannerBtn = $(".js-sys-banner-show");
    var sysCloseBtn = $(".js-sys-banner-remove, .js-notice-close");
    var sysStyleMenu = $(".js-sys-banner-style-menu");
    var sysType = $(".js-sys-banner-type");
    var sysPos = $(".js-sys-banner-position");
    var sysCloseIcon = $(".js-notice-close");

    sysBannerBtn.on("click", function(e) {
        var sysStyle = sysStyleMenu.find(":selected").data("class");

        e.preventDefault();
        e.stopPropagation();

        $(this).text("Update example");
        sysCloseBtn.removeClass("d-none");

        topnav.css("top","").show();
        sysBanner.show().attr("aria-hidden","false").removeClass(typeClasses).addClass(sysStyle);
        sysCloseIcon.removeClass("fc-white").addClass("fc-dark");

        if (sysPos.is(":checked")) {
            topnav.css("top", sysBannerHeight + "px").show();
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

        topnav.hide();
        sysBanner.hide().attr("aria-hidden","true").removeClass(typeClasses);

        sysBannerBtn.text("Show example");
        sysCloseBtn.addClass("d-none");
    });

});

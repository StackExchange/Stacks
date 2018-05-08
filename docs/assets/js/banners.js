$(document).ready(function() {
    var hero = $(".js-banner-hero");
    var heroSmall = $(".js-banner-bar");
    var heroBtn = $(".js-banner-show-hero");
    var heroCloseBtn = $(".js-banner-remove-hero");
    var heroTypeMenu = $(".js-hero-type-menu");
    var heroPatternMenu = $(".js-hero-pattern-menu");
    var heroPositionMenu = $(".js-hero-position-menu");
    var heroHeight = hero.outerHeight();
    var heroBannerFooter = $(".js-banner-hero-footer");
    var circle = $(this).find(".js-banner-circle");
    var typeClasses = ("s-notice__info s-notice__brand s-notice__success s-notice__warning s-notice__danger s-notice__important s-notice__banner__info s-notice__banner__important s-notice__banner__danger s-notice__banner__success s-notice__banner__brand is-pinned");

    //  Hide everything on load
    hero.hide();
    heroSmall.hide();
    heroBannerFooter.hide();

    //  Show the hero banners when you click the "Show Example" button
    heroBtn.on("click", function() {
        var typeSelect = heroTypeMenu.find(":selected").data("class");
        var circleSelect = heroPatternMenu.find(":selected").data("circle");
        var positionSelect = heroPositionMenu.find(":selected").data("class");

        $(this).text("Update example");
        heroCloseBtn.removeClass("d-none");

        if (positionSelect == "is-pinned") {
            heroBannerFooter
                .show()
                .attr("aria-hidden","false")
                .removeClass(typeClasses)
                .addClass(typeSelect + " " + positionSelect);
            hero
                .hide()
                .attr("aria-hidden","true")
                .removeClass(typeClasses)
                .css({
                    "position": "",
                    "top": "",
                    "left": "",
                    "right": ""
                });
            heroSmall
                .hide()
                .attr("aria-hidden","true")
                .removeClass(typeClasses)
                .css({
                    "position": "",
                    "top": "",
                    "left": "",
                    "right": ""
                });

            if (circleSelect == "yes") {
                circle.addClass("s-notice__banner-circle");
            }
            else {
                circle.removeClass("s-notice__banner-circle");
            }
        }
        else {
            heroBannerFooter
                .hide()
                .attr("aria-hidden","true")
                .removeClass(typeClasses);
            hero
                .show()
                .attr("aria-hidden","false")
                .removeClass(typeClasses)
                .addClass(typeSelect)
                .css({
                    "position": "fixed",
                    "top": "-50px",
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
                    "top": heroHeight - 50,
                    "left": "0",
                    "right": "0"
                });

            if (circleSelect == "yes") {
                circle.addClass("s-notice__banner-circle");
            }
            else {
                circle.removeClass("s-notice__banner-circle");
            }
        }
    });

    heroCloseBtn.on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        heroBannerFooter
                .hide()
                .attr("aria-hidden","true")
                .removeClass(typeClasses);
        heroSmall
                .hide()
                .attr("aria-hidden","true")
                .removeClass(typeClasses)
                .css({
                    "position": "",
                    "top": "",
                    "left": "",
                    "right": ""
                });
        hero
            .hide()
            .attr("aria-hidden","true")
            .removeClass(typeClasses)
            .css({
                "position": "",
                "top": "",
                "left": "",
                "right": ""
            });
        circle.removeClass("s-notice__banner-circle");

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
        heroSmall
                .hide()
                .attr("aria-hidden","true")
                .removeClass(typeClasses)
                .css({
                    "position": "",
                    "top": "",
                    "left": "",
                    "right": ""
                });
        hero
            .hide()
            .attr("aria-hidden","true")
            .removeClass(typeClasses)
            .css({
                "position": "",
                "top": "",
                "left": "",
                "right": ""
            });
        circle.removeClass("s-notice__banner-circle");
    });


    //  Show the system banner when you click the "Show Example" button
    var topnav = $(".js-stacks-topbar");
    var topnavHeight = topnav.outerHeight();
    var sysBanner = $(".js-notice-banner");
    var sysBannerHeight = sysBanner.outerHeight();
    var sysBannerBtn = $(".js-sys-banner-show");
    var sysCloseBtn = $(".js-sys-banner-remove, .js-notice-close");
    var sysStyleMenu = $(".js-sys-banner-style-menu");
    var sysTypeMenu = $(".js-sys-banner-type-menu");
    var sysPosMenu = $(".js-sys-banner-position-menu");

    sysBannerBtn.on("click", function(e) {
        var sysStyle = sysStyleMenu.find(":selected").data("class");
        var sysType = sysTypeMenu.find(":selected").data("class");
        var sysPos = sysPosMenu.find(":selected").data("class");

        e.preventDefault();
        e.stopPropagation();

        $(this).text("Update example");
        sysCloseBtn.removeClass("d-none");

        if (sysPos == "is-pinned") {
            topnav.css("top", sysBannerHeight + "px").show();
            sysBanner.show().attr("aria-hidden","false").removeClass(typeClasses).addClass(sysStyle + " " + sysType + " " + sysPos);
        }
        else {
            topnav.css("top","").show();
            sysBanner.show().attr("aria-hidden","false").removeClass(typeClasses).addClass(sysStyle + " " + sysType);
        }

        if (sysStyle == "none") {
            sysBanner.addClass("s-notice__important");
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

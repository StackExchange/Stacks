$(document).ready(function() {
    var hero = $(".js-banner-hero");
    var heroSmall = $(".js-banner-bar");
    var heroBtn = $(".js-banner-show-hero");
    var heroTypeMenu = $(".js-hero-type-menu");
    var heroPatternMenu = $(".js-hero-pattern-menu");
    var heroPositionMenu = $(".js-hero-position-menu");
    var heroHeight = hero.innerHeight();
    var heroBannerFooter = $(".js-banner-hero-footer");
    var circle = $(this).find(".js-banner-circle");
    var typeClasses = ("s-notice__info s-notice__brand s-notice__success s-notice__warning s-notice__danger s-notice__important s-banner__info s-banner__important s-banner__danger s-banner__success s-banner__brand s-banner__pattern is-pinned");

    hero.hide();
    heroSmall.hide();
    heroBannerFooter.hide();

    heroBtn.on("click", function() {
        var typeSelect = heroTypeMenu.find(":selected").data("class");
        var patternSelect = heroPatternMenu.find(":selected").data("pattern");
        var circleSelect = heroPatternMenu.find(":selected").data("circle");
        var positionSelect = heroPositionMenu.find(":selected").data("class");

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
            if (patternSelect == "yes") {
                heroBannerFooter.addClass("s-banner__pattern");
            }
            else {
                heroBannerFooter.removeClass("s-banner__pattern");
            }

            if (circleSelect == "yes") {
                circle.addClass("s-banner__circle");
            }
            else {
                circle.removeClass("s-banner__circle");
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
                    "top": "-4vw",
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
                    "top": heroHeight - 94,
                    "left": "0",
                    "right": "0"
                });

            if (patternSelect == "yes") {
                hero.addClass("s-banner__pattern");
            }
            else {
                hero.removeClass("s-banner__pattern");
            }

            if (circleSelect == "yes") {
                circle.addClass("s-banner__circle");
            }
            else {
                circle.removeClass("s-banner__circle");
            }
        }
    });

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
        circle.removeClass("s-banner__circle");
    });

    var topnav = $(".js-stacks-topbar");
    var topnavHeight = topnav.outerHeight();
    var sysBanner = $(".js-notice-banner");
    var sysBannerHeight = sysBanner.outerHeight();
    var sysBannerBtn = $(".js-sys-banner-show");
    var sysCloseBtn = $(".js-sys-banner-remove");
    var sysStyleMenu = $(".js-sys-banner-style-menu");
    var sysTypeMenu = $(".js-sys-banner-type-menu");
    var sysPosMenu = $(".js-sys-banner-position-menu");

    sysBannerBtn.on("click", function(e) {
        var sysStyle = sysStyleMenu.find(":selected").data("class");
        var sysType = sysTypeMenu.find(":selected").data("class");
        var sysPos = sysPosMenu.find(":selected").data("class");

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
});

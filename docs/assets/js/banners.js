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
    var typeClasses = ("s-banner__bgg-info s-banner__bgg-important s-banner__bgg-danger s-banner__bgg-success s-banner__bgg-brand s-banner__bgg-pattern is-pinned");

    hero.hide();
    heroSmall.hide();

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
                heroBannerFooter.addClass("s-banner__bgg-pattern");
            }
            else {
                heroBannerFooter.removeClass("s-banner__bgg-pattern");
            }

            if (circleSelect == "yes") {
                circle.addClass("s-banner__bgg-circle");
            }
            else {
                circle.removeClass("s-banner__bgg-circle");
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
                hero.addClass("s-banner__bgg-pattern");
            }
            else {
                hero.removeClass("s-banner__bgg-pattern");
            }

            if (circleSelect == "yes") {
                circle.addClass("s-banner__bgg-circle");
            }
            else {
                circle.removeClass("s-banner__bgg-circle");
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
        circle.removeClass("s-banner__bgg-circle");
    });
});

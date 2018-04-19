$(document).ready(function() {
    var hero = $(".js-banner-hero");
    var heroSmall = $(".js-banner-sm");
    var heroBtn = $(".js-banner-show-hero");
    var heroTypeMenu = $(".js-hero-type-menu");
    var heroPatternMenu = $(".js-hero-pattern-menu");
    var heroPositionMenu = $(".js-hero-position-menu");
    var heroHeight = hero.innerHeight();

    hero.hide();
    heroSmall.hide();

    heroBtn.on("click", function() {
        var typeSelect = heroTypeMenu.find(":selected").data("class");
        var patternSelect = heroPatternMenu.find(":selected").data("pattern");
        var circleSelect = heroPatternMenu.find(":selected").data("circle");
        var positionSelect = heroPositionMenu.find(":selected").data("class");
        var circle = $(".js-banner-circle");
        var typeClasses = ("s-banner__bgg-info s-banner__bgg-important s-banner__bgg-danger s-banner__bgg-success s-banner__bgg-brand s-banner__bgg-pattern is-pinned");

        // if (patternSelect == "true") {
        //     alert("Patterns!");
        // }
        // else {
        //     alert("It's false");
        // }
        // if (circleSelect = "true") {
        //     alert("Circles!");
        // }
        // if (positionSelect == "is-pinned") {
        //     hero
        //         .show()
        //         .attr("aria-hidden","false")
        //         .removeClass(typeClasses)
        //         .addClass(typeSelect + " " + positionSelect)
        //         .css({
        //             "position": "",
        //             "top": "",
        //             "left": "",
        //             "right": ""
        //         });
        //     heroSmall
        //         .hide()
        //         .attr("aria-hidden","true")
        //         .removeClass(typeClasses)
        //         .css({
        //             "position": "",
        //             "top": "",
        //             "left": "",
        //             "right": ""
        //         });
        // }
        // else {
        //     hero
        //         .show()
        //         .attr("aria-hidden","false")
        //         .removeClass(typeClasses)
        //         .addClass(typeSelect)
        //         .css({
        //             "position": "fixed",
        //             "top": "-4vw",
        //             "left": "0",
        //             "right": "0"
        //         });
        //     heroSmall
        //         .show()
        //         .attr("aria-hidden","false")
        //         .removeClass(typeClasses)
        //         .addClass(typeSelect).addClass(positionSelect)
        //         .css({
        //             "position": "fixed",
        //             "top": heroHeight - 91,
        //             "left": "0",
        //             "right": "0"
        //         });
        // }

    });
});

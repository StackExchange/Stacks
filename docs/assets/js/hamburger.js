$(document).ready(function() {
    var navigation = $(".js-navigation");
    var closeIcon = $(".js-hamburger-close-icon");
    var hamburgerIcon = $(".js-hamburger-icon");
    var hamburgerBtn = $(".js-hamburger-btn");
    var darkModeBtn = $(".js-darkmode-btn");
    var body = $("body");

    hamburgerBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        hamburgerIcon.toggleClass("d-none");
        closeIcon.toggleClass("d-none");
        navigation.toggleClass("md:d-none");
    });

    darkModeBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        body.toggleClass("has-darkmode__forced");
    });
});

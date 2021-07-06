$(document).ready(function() {
    var navigation = $(".js-navigation");
    var closeIcon = $(".js-hamburger-close-icon");
    var hamburgerIcon = $(".js-hamburger-icon");
    var hamburgerBtn = $(".js-hamburger-btn");

    hamburgerBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        hamburgerIcon.toggleClass("d-none");
        closeIcon.toggleClass("d-none");
        navigation.toggleClass("md:d-none");
    });
});

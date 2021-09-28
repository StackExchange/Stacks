$(document).ready(function() {
    var navigation = $(".js-navigation");
    var hamburgerBtn = $(".js-hamburger-btn");

    hamburgerBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        hamburgerBtn.toggleClass("is-selected");
        navigation.toggleClass("md:d-none");
    });
});

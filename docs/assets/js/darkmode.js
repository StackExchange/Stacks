$(document).ready(function() {
    var darkModeBtn = $(".js-darkmode-btn");
    var body = $("body");
    var isDarkMode = localStorage.getItem("darkMode");
    var isDarkModeForced = localStorage.getItem("darkModeForced");

    readHasDarkModeLocalStorage();

    darkModeBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            body.toggleClass("has-darkmode");
            body.removeClass("has-darkmode__forced");
        } else {
            body.toggleClass("has-darkmode__forced");
        }

        setDarkModeLocalStorage();
    });

    function setDarkModeLocalStorage() {
        if ( window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
            if ( body.hasClass("has-darkmode") ) {
                localStorage.setItem("darkMode", true);
            } else {
                localStorage.setItem("darkMode", false);
            }

            localStorage.setItem("darkModeForced", false);
        } else {
            if ( body.hasClass("has-darkmode__forced") ) {
                localStorage.setItem("darkModeForced", true);
            } else {
                localStorage.setItem("darkModeForced", false);
            }

            localStorage.setItem("darkMode", false);
        }
    }

    function readHasDarkModeLocalStorage() {
        if (isDarkMode === "true") {
            body.addClass("has-darkmode");
        } else {
            body.removeClass("has-darkmode");
        }

        if (isDarkModeForced === "true") {
            body.addClass("has-darkmode__forced");
        } else {
            body.removeClass("has-darkmode__forced");
        }
    }
});

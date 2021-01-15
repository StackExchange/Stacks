$(document).ready(function () {
    var darkModeBtn = $(".js-darkmode-btn");
    var highContrastBtn = $(".js-highcontrast-btn");
    var themeBtn = $(".js-theme-btn");
    var body = $("body");

    darkModeBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var browserPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

        var isForcedDarkMode = body.hasClass("theme-dark");
        var isUnforcedDarkMode = browserPrefersDark && body.hasClass("theme-system");

        if (browserPrefersDark) {
            body.toggleClass("theme-system", !isUnforcedDarkMode);
            body.toggleClass("theme-dark", false);
        } else {
            body.toggleClass("theme-system", true);
            body.toggleClass("theme-dark", !isForcedDarkMode);
        }

        localStorage.setItem("forceDarkModeOn", !(isUnforcedDarkMode || isForcedDarkMode));

        return false;
    });

    highContrastBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var isHighContrast = body.hasClass("theme-highcontrast");

        body.toggleClass("theme-highcontrast", !isHighContrast);

        localStorage.setItem("highContrastTheme", !isHighContrast);
    });

    themeBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var isCustom = body.hasClass("theme-custom");

        body.toggleClass("theme-custom", !isCustom);

        localStorage.setItem("customTheme", !isCustom);

        return false;
    });
});

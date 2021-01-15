$(document).ready(function () {
    var darkModeBtn = $(".js-darkmode-btn");
    var spacingDefaultBtn = $(".js-spacing-default-btn");
    var spacingLargeBtn = $(".js-spacing-lg-btn");
    var spacingExtraLargeBtn = $(".js-spacing-xl-btn");
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

    spacingDefaultBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        body.removeClass("theme-spacing-l theme-spacing-xl");

        localStorage.setItem("spacingDefaultTheme", true);
        localStorage.setItem("spacingLargeTheme", false);
        localStorage.setItem("spacingExtraLargeTheme", false);

        return false;
    });

    spacingLargeBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        body.removeClass("theme-spacing-xl");
        body.addClass("theme-spacing-l");

        localStorage.setItem("spacingDefaultTheme", false);
        localStorage.setItem("spacingLargeTheme", true);
        localStorage.setItem("spacingExtraLargeTheme", false);

        return false;
    });

    spacingExtraLargeBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        body.removeClass("theme-spacing-l");
        body.addClass("theme-spacing-xl");

        localStorage.setItem("spacingDefaultTheme", false);
        localStorage.setItem("spacingLargeTheme", false);
        localStorage.setItem("spacingExtraLargeTheme", true);

        return false;
    });
});

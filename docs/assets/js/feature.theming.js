$(document).ready(function () {
    var darkModeBtn = $(".js-darkmode-btn");
    var highContrastBtn = $(".js-highcontrast-btn");
    var dyslexicBtn = $(".js-dyslexic-btn");
    var themeBtn = $(".js-theme-btn");
    var spacingDefaultBtn = $(".js-spacing-default-btn");
    var spacingLargeBtn = $(".js-spacing-lg-btn");
    var spacingExtraLargeBtn = $(".js-spacing-xl-btn");
    var fontDefaultBtn = $(".js-font-default-btn");
    var fontLargeBtn = $(".js-font-lg-btn");
    var fontExtraLargeBtn = $(".js-font-xl-btn");
    var body = $("body");
    var html = $("html");

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

    fontDefaultBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        body.removeClass("theme-font-l theme-font-xl");
        html.removeClass("theme-font-l theme-font-xl");

        localStorage.setItem("fontDefaultTheme", true);
        localStorage.setItem("fontLargeTheme", false);
        localStorage.setItem("fontExtraLargeTheme", false);

        return false;
    });

    fontLargeBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        body.removeClass("theme-font-xl");
        body.addClass("theme-font-l");
        html.removeClass("theme-font-xl");
        html.addClass("theme-font-l");

        localStorage.setItem("fontDefaultTheme", false);
        localStorage.setItem("fontLargeTheme", true);
        localStorage.setItem("fontExtraLargeTheme", false);

        return false;
    });

    fontExtraLargeBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        body.removeClass("theme-font-l");
        body.addClass("theme-font-xl");

        html.removeClass("theme-font-xl");
        html.addClass("theme-font-l");

        localStorage.setItem("fontDefaultTheme", false);
        localStorage.setItem("fontLargeTheme", false);
        localStorage.setItem("fontExtraLargeTheme", true);

        return false;
    });

    dyslexicBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var isDyslexic = body.hasClass("theme-dyslexic");

        body.toggleClass("theme-dyslexic", !isDyslexic);

        localStorage.setItem("dyslexicTheme", !isDyslexic);
    });
});

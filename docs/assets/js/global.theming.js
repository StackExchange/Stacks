$(document).ready(function () {
    var themeDarkToggleSwitch = $("#toggle-theme-dark");
    var themeCustomToggleSwitch = $("#toggle-theme-custom");
    var themeHighcontrastToggleSwitch = $("#toggle-theme-highcontrast");
    var body = $("body");
    var browserPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isCustom = body.hasClass("theme-custom");
    var isDark = body.hasClass("theme-dark") || browserPrefersDark && body.hasClass("theme-system");
    var isHighcontrast = body.hasClass("theme-highcontrast");

    themeCustomToggleSwitch.prop("checked", isCustom);
    themeDarkToggleSwitch.prop("checked", isDark);
    themeHighcontrastToggleSwitch.prop("checked", isHighcontrast);

    themeDarkToggleSwitch.on("change", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var isForcedDarkMode = body.hasClass("theme-dark");
        var isUnforcedDarkMode = browserPrefersDark && body.hasClass("theme-system");

        if (browserPrefersDark) {
            body.toggleClass("theme-system", !isUnforcedDarkMode);
            body.toggleClass("theme-dark", false);
        } else {
            body.toggleClass("theme-system", true);
            body.toggleClass("theme-dark", !isForcedDarkMode);
        }

        $(this).prop("checked", !(isUnforcedDarkMode || isForcedDarkMode));

        localStorage.setItem("forceDarkModeOn", !(isUnforcedDarkMode || isForcedDarkMode));

        return false;
    });

    themeCustomToggleSwitch.on("change", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var isCustom = body.hasClass("theme-custom");

        $(this).prop("checked", !isCustom);
        body.toggleClass("theme-custom", !isCustom);

        localStorage.setItem("customTheme", !isCustom);

        return false;
    });

    themeHighcontrastToggleSwitch.on("change", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var isHighcontrast = body.hasClass("theme-highcontrast");

        $(this).prop("checked", !isHighcontrast);
        body.toggleClass("theme-highcontrast", !isHighcontrast);

        localStorage.setItem("forceHighContrastModeOn", !isHighcontrast);

        return false;
    });
});

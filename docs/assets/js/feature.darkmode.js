$(document).ready(function () {
    var darkModeBtn = $(".js-darkmode-btn");
    var body = $("body");

    darkModeBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var browserPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

        var isForcedDarkMode = body.hasClass("has-darkmode__forced");
        var isUnforcedDarkMode = browserPrefersDark && body.hasClass("has-darkmode");

        if (browserPrefersDark) {
            body.toggleClass("has-darkmode", !isUnforcedDarkMode);
            body.toggleClass("has-darkmode__forced", false);
        } else {
            body.toggleClass("has-darkmode", true);
            body.toggleClass("has-darkmode__forced", !isForcedDarkMode);
        }

        localStorage.setItem("forceDarkModeOn", !(isUnforcedDarkMode || isForcedDarkMode));

        return false;
    });
});

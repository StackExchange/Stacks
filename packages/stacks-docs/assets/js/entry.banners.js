$(document).ready(function() {
    //  Show the system banner when you click the "Show Example" button
    var topnav = $(".js-stacks-topbar");
    var sysBanner = $(".js-notice-banner");
    var sysBannerHeight = sysBanner.outerHeight();
    var sysBannerBtn = $(".js-banner-open");
    var sysRemoveBtn = $(".js-banner-close");
    var sysStyleMenu = $(".js-sys-banner-style-menu");
    var sysType = $(".js-sys-banner-type");
    var sysPos = $(".js-sys-banner-position");
    var typeClasses = ["info", "success", "warning", "danger", "dark", "important"].map(suffix => `s-banner__${suffix}`).join(" ") + " is-pinned";

    function setShowHideBtns(show) {
        if (show) {
            sysBannerBtn.addClass("d-none");
            sysRemoveBtn.removeClass("d-none");
        } else {
            sysBannerBtn.removeClass("d-none");
            sysRemoveBtn.addClass("d-none");
        }
    }
    function setStyle(e) {
        var sysStyle = sysStyleMenu.find(":selected").data("class");
        e.preventDefault();
        e.stopPropagation();

        sysBanner.show().attr("aria-hidden","false").removeClass(typeClasses).addClass(sysStyle);
        setShowHideBtns(true);

        // Pin banner
        if (sysPos.is(":checked")) {
            topnav.removeClass("t0").css("top", sysBannerHeight + "px");
            sysBanner.addClass("is-pinned");
        } else {
            topnav.addClass("t0").css("top", "");
            sysBanner.removeClass("is-pinned");
        }
        // Add `important` modifier
        if (sysType.is(":checked")) {
            sysBanner.addClass("s-banner__important");
        } else {
            sysBanner.removeClass("s-banner__important");
        }
    }

    function reset(e) {
        e.preventDefault();
        e.stopPropagation();

        topnav.addClass("t0");
        sysBanner.hide().attr("aria-hidden","true");
        setShowHideBtns(false);
    }

    sysBannerBtn.on("click", setStyle);
    sysStyleMenu.on("change", setStyle);
    sysPos.on("change", setStyle);
    sysType.on("change", setStyle);
    sysRemoveBtn.on("click", reset);

    document.querySelectorAll(".js-banner-open").forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.stopPropagation();
            e.preventDefault();
            var targetSelector = el.dataset.target;
            var bannerEl = document.querySelector(targetSelector);

            Stacks.showBanner(bannerEl);
            setShowHideBtns(true);
        });
    });

    document.querySelectorAll(".js-banner-close").forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.stopPropagation();
            e.preventDefault();
            var targetSelector = el.dataset.target;
            var bannerEl = document.querySelector(targetSelector);

            Stacks.hideBanner(bannerEl);
            setShowHideBtns(false);
        });
    });
});

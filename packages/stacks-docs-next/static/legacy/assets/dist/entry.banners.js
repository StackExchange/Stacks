/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./assets/js/entry.banners.js ***!
  \************************************/
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
    var typeClasses = ["info", "success", "warning", "danger", "featured", "activity", "important"].map(suffix => `s-banner__${suffix}`).join(" ") + " is-pinned";

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuYmFubmVycy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrSEFBK0gsT0FBTzs7QUFFdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdGFja292ZXJmbG93L3N0YWNrcy1kb2NzLy4vYXNzZXRzL2pzL2VudHJ5LmJhbm5lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gIFNob3cgdGhlIHN5c3RlbSBiYW5uZXIgd2hlbiB5b3UgY2xpY2sgdGhlIFwiU2hvdyBFeGFtcGxlXCIgYnV0dG9uXG4gICAgdmFyIHRvcG5hdiA9ICQoXCIuanMtc3RhY2tzLXRvcGJhclwiKTtcbiAgICB2YXIgc3lzQmFubmVyID0gJChcIi5qcy1ub3RpY2UtYmFubmVyXCIpO1xuICAgIHZhciBzeXNCYW5uZXJIZWlnaHQgPSBzeXNCYW5uZXIub3V0ZXJIZWlnaHQoKTtcbiAgICB2YXIgc3lzQmFubmVyQnRuID0gJChcIi5qcy1iYW5uZXItb3BlblwiKTtcbiAgICB2YXIgc3lzUmVtb3ZlQnRuID0gJChcIi5qcy1iYW5uZXItY2xvc2VcIik7XG4gICAgdmFyIHN5c1N0eWxlTWVudSA9ICQoXCIuanMtc3lzLWJhbm5lci1zdHlsZS1tZW51XCIpO1xuICAgIHZhciBzeXNUeXBlID0gJChcIi5qcy1zeXMtYmFubmVyLXR5cGVcIik7XG4gICAgdmFyIHN5c1BvcyA9ICQoXCIuanMtc3lzLWJhbm5lci1wb3NpdGlvblwiKTtcbiAgICB2YXIgdHlwZUNsYXNzZXMgPSBbXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIiwgXCJmZWF0dXJlZFwiLCBcImFjdGl2aXR5XCIsIFwiaW1wb3J0YW50XCJdLm1hcChzdWZmaXggPT4gYHMtYmFubmVyX18ke3N1ZmZpeH1gKS5qb2luKFwiIFwiKSArIFwiIGlzLXBpbm5lZFwiO1xuXG4gICAgZnVuY3Rpb24gc2V0U2hvd0hpZGVCdG5zKHNob3cpIHtcbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgIHN5c0Jhbm5lckJ0bi5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIHN5c1JlbW92ZUJ0bi5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN5c0Jhbm5lckJ0bi5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIHN5c1JlbW92ZUJ0bi5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTdHlsZShlKSB7XG4gICAgICAgIHZhciBzeXNTdHlsZSA9IHN5c1N0eWxlTWVudS5maW5kKFwiOnNlbGVjdGVkXCIpLmRhdGEoXCJjbGFzc1wiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHN5c0Jhbm5lci5zaG93KCkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKS5yZW1vdmVDbGFzcyh0eXBlQ2xhc3NlcykuYWRkQ2xhc3Moc3lzU3R5bGUpO1xuICAgICAgICBzZXRTaG93SGlkZUJ0bnModHJ1ZSk7XG5cbiAgICAgICAgLy8gUGluIGJhbm5lclxuICAgICAgICBpZiAoc3lzUG9zLmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgIHRvcG5hdi5yZW1vdmVDbGFzcyhcInQwXCIpLmNzcyhcInRvcFwiLCBzeXNCYW5uZXJIZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgc3lzQmFubmVyLmFkZENsYXNzKFwiaXMtcGlubmVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wbmF2LmFkZENsYXNzKFwidDBcIikuY3NzKFwidG9wXCIsIFwiXCIpO1xuICAgICAgICAgICAgc3lzQmFubmVyLnJlbW92ZUNsYXNzKFwiaXMtcGlubmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBgaW1wb3J0YW50YCBtb2RpZmllclxuICAgICAgICBpZiAoc3lzVHlwZS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICBzeXNCYW5uZXIuYWRkQ2xhc3MoXCJzLWJhbm5lcl9faW1wb3J0YW50XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3lzQmFubmVyLnJlbW92ZUNsYXNzKFwicy1iYW5uZXJfX2ltcG9ydGFudFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRvcG5hdi5hZGRDbGFzcyhcInQwXCIpO1xuICAgICAgICBzeXNCYW5uZXIuaGlkZSgpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTtcbiAgICAgICAgc2V0U2hvd0hpZGVCdG5zKGZhbHNlKTtcbiAgICB9XG5cbiAgICBzeXNCYW5uZXJCdG4ub24oXCJjbGlja1wiLCBzZXRTdHlsZSk7XG4gICAgc3lzU3R5bGVNZW51Lm9uKFwiY2hhbmdlXCIsIHNldFN0eWxlKTtcbiAgICBzeXNQb3Mub24oXCJjaGFuZ2VcIiwgc2V0U3R5bGUpO1xuICAgIHN5c1R5cGUub24oXCJjaGFuZ2VcIiwgc2V0U3R5bGUpO1xuICAgIHN5c1JlbW92ZUJ0bi5vbihcImNsaWNrXCIsIHJlc2V0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtYmFubmVyLW9wZW5cIikuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRTZWxlY3RvciA9IGVsLmRhdGFzZXQudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGJhbm5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIFN0YWNrcy5zaG93QmFubmVyKGJhbm5lckVsKTtcbiAgICAgICAgICAgIHNldFNob3dIaWRlQnRucyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWJhbm5lci1jbG9zZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRhcmdldFNlbGVjdG9yID0gZWwuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgYmFubmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcblxuICAgICAgICAgICAgU3RhY2tzLmhpZGVCYW5uZXIoYmFubmVyRWwpO1xuICAgICAgICAgICAgc2V0U2hvd0hpZGVCdG5zKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=
/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./assets/js/entry.toasts.js ***!
  \***********************************/
$(document).ready(function() {
    var toastOffset = $(".js-stacks-topbar").outerHeight() + 16 + "px";

    document.querySelectorAll(".js-toast-open").forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.stopPropagation();
            e.preventDefault();
            var targetSelector = el.dataset.target;
            var toastEl = document.querySelector(targetSelector);

            if (!toastEl.style.top) {
                toastEl.style.top = toastOffset;
            }

            Stacks.showToast(toastEl);
        });
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkudG9hc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3RhY2tvdmVyZmxvdy9zdGFja3MtZG9jcy8uL2Fzc2V0cy9qcy9lbnRyeS50b2FzdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRvYXN0T2Zmc2V0ID0gJChcIi5qcy1zdGFja3MtdG9wYmFyXCIpLm91dGVySGVpZ2h0KCkgKyAxNiArIFwicHhcIjtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtdG9hc3Qtb3BlblwiKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRhcmdldFNlbGVjdG9yID0gZWwuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgdG9hc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBpZiAoIXRvYXN0RWwuc3R5bGUudG9wKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RFbC5zdHlsZS50b3AgPSB0b2FzdE9mZnNldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU3RhY2tzLnNob3dUb2FzdCh0b2FzdEVsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=
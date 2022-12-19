$(document).ready(function() {
    var toastOffset = $(".js-stacks-topbar").outerHeight() + 16 + "px";

    document.querySelectorAll(".js-notice-open").forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.stopPropagation();
            e.preventDefault();
            var targetSelector = el.dataset.target;
            var noticeEl = document.querySelector(targetSelector);

            if (!noticeEl.style.top) {
                noticeEl.style.top = toastOffset;
            }

            Stacks.showNotice(noticeEl);
        });
    });
});

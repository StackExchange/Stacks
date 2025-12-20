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

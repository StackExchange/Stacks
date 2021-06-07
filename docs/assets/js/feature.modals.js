(function () {
    document.querySelectorAll(".js-modal-open").forEach(function (el) {
        el.addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            var targetSelector = el.dataset.target;
            Stacks.showModal(document.querySelector(targetSelector));
        });
    });

    document.querySelectorAll(".js-modal-close").forEach(function (el) {
        el.addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
        });
    });
})();

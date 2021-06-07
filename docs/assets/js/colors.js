var css = document.querySelectorAll(".js-css");
var less = document.querySelectorAll(".js-less");
var hex = document.querySelectorAll(".js-hex");

var cssButton = document.querySelector(".js-css-btn");
var lessButton = document.querySelector(".js-less-btn");
var hexButton = document.querySelector(".js-hex-btn");

var buttons = [cssButton, lessButton, hexButton];

cssButton.addEventListener("click", function () {
    resetSelection();

    this.classList.add("is-selected");

    for (var item of css) {
        item.classList.remove("d-none");
    }

    return false;
});

lessButton.addEventListener("click", function () {
    resetSelection();

    this.classList.add("is-selected");

    for (var item of less) {
        item.classList.remove("d-none");
    }

    return false;
});

hexButton.addEventListener("click", function () {
    resetSelection();

    this.classList.add("is-selected");

    for (var item of hex) {
        item.classList.remove("d-none");
    }

    return false;
});

function resetSelection() {
    for (var button of buttons) {
        button.classList.remove("is-selected");
    }

    for (var item of css) {
        item.classList.add("d-none");
    }

    for (var item of less) {
        item.classList.add("d-none");
    }

    for (var item of hex) {
        item.classList.add("d-none");
    }
}

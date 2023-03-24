$(document).ready(function() {
    var exampleContainer = document.querySelector(".js-truncation-example");
    var truncateToggle = document.querySelector(".js-truncation-toggle");
    var truncateLength = document.querySelector(".js-truncation-length");

    // Toggle truncation with the "Truncate" checkbox
    truncateToggle.addEventListener("click", (event) => {
        Stacks.toggleTruncation(exampleContainer, event.target.checked);
    });

    // Sets the s-truncation element's data-s-truncation-length attribute to the input's new value
    truncateLength.addEventListener("input", (event) => {
        exampleContainer.dataset.sTruncationLength = event.target.value;
    });
});

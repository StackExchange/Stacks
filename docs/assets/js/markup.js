$(document).ready(function() {
    // Cache some variables
    var markupBtn = $(".js-markup-btn");
    var helperBtn = $(".js-helper-btn");
    var markupContainer = $(".js-markup");
    var helperContainer = $(".js-helper");

    markupBtn.on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).addClass("is-selected");
        helperBtn.removeClass("is-selected");

        markupContainer.removeClass("d-none");
        helperContainer.addClass("d-none");
    });

    helperBtn.on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).addClass("is-selected");
        markupBtn.removeClass("is-selected");

        helperContainer.removeClass("d-none");
        markupContainer.addClass("d-none");
    });
});

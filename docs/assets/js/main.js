$(function() {
    var sections = $('.stacks-section > :header');
    if ( sections.length ) {
        $(".js-secondary-nav").buildMenu();
    }

    $(".js-autocomplete-trigger").on("focus", function () {
        $(".js-autocomplete-list").addClass("is-visible");
    });
    $(".js-autocomplete-trigger").on("blur", function () {
        $(".js-autocomplete-list").removeClass("is-visible");
    });
});

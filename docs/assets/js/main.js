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
    
    var search = docsearch({
        apiKey: '09d35fa9def5c025244d5b217778a652',
        indexName: 'stackoverflow_design',
        inputSelector: '#searchbox',
        debug: false
    });

    search.autocomplete.on('autocomplete:opened', function(e) {
        $(".stacks-nav-secondary").addClass("z-hide");
    });

    search.autocomplete.on('autocomplete:closed', function(e) {
        $(".stacks-nav-secondary").removeClass("z-hide");
    });
});
$(function() {
    var sections = $('.stacks-section > :header');
    if ( sections.length ) {
        $(".js-secondary-nav").buildMenu();
    }

    var search = docsearch({
        apiKey: '09d35fa9def5c025244d5b217778a652',
        indexName: 'stackoverflow_design',
        inputSelector: '#searchbox',
        debug: false
    });

    // Kill default behavior on empty links
    $("a[href='#']").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
});
$(document).ready(function() {
    $(function() {
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

    //  Focus on the search bar
    function focusSearch(e) {
        if (e.which == 191) {
            e.preventDefault();
            $(".js-stacks-search-bar").focus();
        }

        $(".js-stacks-search-bar").keydown(function(e) {
            e.stopPropagation();

            if (e.which == 27) {
                $(this).blur();
            }
        });
    }

    $(this).keydown(function(e) {
        focusSearch(e);
    });
});

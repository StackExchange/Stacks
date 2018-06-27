$(document).ready(function() {
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

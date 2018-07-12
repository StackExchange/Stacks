$(document).ready(function() {
    docsearch({
        apiKey: '09d35fa9def5c025244d5b217778a652',
        indexName: 'stackoverflow_design',
        inputSelector: '#searchbox'
    });

    // Kill default behavior on empty links
    $("a[href='#']").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Show or hide search
    var searchContainer = $(".js-search");
    var searchCloseIcon = $(".js-search-close-icon");
    var searchIcon = $(".js-search-icon");
    var searchBtn = $(".js-search-btn");
    var hamburgerBtn = $(".js-hamburger-btn");
    var logo = $(".js-logo");

    searchBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        searchIcon.toggleClass("d-none");
        searchCloseIcon.toggleClass("d-none");
        searchContainer.toggleClass("sm:d-none");
        hamburgerBtn.toggleClass("md:d-block");
        logo.toggleClass("sm:d-none");
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

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
    var searchBar = $(".js-stacks-search-bar");
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

        if ( searchIcon.hasClass("d-none") ) {
            searchBar.focus();
        }
    });
});

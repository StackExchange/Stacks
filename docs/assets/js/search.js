$(document).ready(function() {
    docsearch({
        apiKey: '09d35fa9def5c025244d5b217778a652',
        indexName: 'stackoverflow_design',
        inputSelector: '#searchbox'
    });

    // Show or hide search
    var searchContainer = $(".js-search");
    var searchCloseIcon = $(".js-search-close-icon");
    var searchIcon = $(".js-search-icon");
    var searchBtn = $(".js-search-btn");

    searchBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        searchIcon.toggleClass("d-none");
        searchCloseIcon.toggleClass("d-none");
        searchContainer.toggleClass("s-topbar--searchbar__open");

        if (searchContainer.hasClass("s-topbar--searchbar__open") ) {
            searchContainer.find("input").focus();
        }
    });
});

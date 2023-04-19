// TODO docsearch expects `process.env`, as if it were a nodejs file, so polyfill it here
// usually these are stripped out before they make it into the distributable, but I guess not this one...
// @ts-expect-error
global.process = {
    env: {}
};
const docsearch = require("docsearch.js");

$(document).ready(function () {
    // Algolia search index configuration and stats:
    // https://www.algolia.com/apps/J0LOVOL3W6/explorer/browse/stackoverflow_design
    docsearch({
        appId: "J0LOVOL3W6",
        apiKey: "7c82233c09f195c775eca63b6407d0fd",
        indexName: "stackoverflow_design",
        inputSelector: "#searchbox",
    });

    // Show or hide search
    var searchContainer = $(".js-search");
    var searchCloseIcon = $(".js-search-close-icon");
    var searchIcon = $(".js-search-icon");
    var searchBtn = $(".js-search-btn");

    searchBtn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        searchIcon.toggleClass("d-none");
        searchCloseIcon.toggleClass("d-none");
        searchContainer.toggleClass("s-topbar--searchbar__open");

        if (searchContainer.hasClass("s-topbar--searchbar__open")) {
            searchContainer.find("input").focus();
        }
    });
});

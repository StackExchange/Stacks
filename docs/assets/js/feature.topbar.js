// TODO cleanup
$(".js-search-button").on("click", function() {
    $(this).closest(".s-topbar")
        .find(".s-topbar--searchbar")
        .toggleClass("s-topbar--searchbar__open");
});
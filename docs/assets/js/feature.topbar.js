$(".js-topbar-example .js-search-button").on("click", function() {
    $(this).closest(".s-topbar")
        .find(".s-topbar--searchbar")
        .toggleClass("s-topbar--searchbar__open");
});

$(".js-topbar-example .s-topbar--menu-btn").on("click", function() {
    $(this).toggleClass("is-selected");
});

$(".js-topbar-example .s-topbar--notice").on("click", function() {
    $(this).toggleClass("is-unread");
});
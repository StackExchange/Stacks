$(document).ready(function() {
    var popoverBtn = $(".js-popover-btn");
    var popoverExample = $(".js-popover-example");

    popoverBtn.click(function(e) {
        popoverExample.toggleClass("is-visible");
    });
});

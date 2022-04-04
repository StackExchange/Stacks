$(document).ready(function() {
    // Disable any empty links
    $("a[href='#']").on("click", function(e) {
        e.preventDefault();
    });
});

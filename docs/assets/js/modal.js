$(document).ready(function() {
    var modal             = $(".js-modal-overlay");
    var body              = $("body");

    function trapEscapeKey(e) {
        // if escape pressed
        if (e.which == 27) {
            closeModal();
        }
    }

    function openModal(obj, evt) {
        var modalTarget = obj.attr("data-target");

        //  Clear all open modals just in case
        modal.attr({
            "aria-hidden": "true",
            "tabindex": "-1"
        });

        //  Make the main page non-scrollable and hidden to screen readers
        body.attr({
            "aria-hidden": "true",
            "tabindex": "-1"
        });

        //  Set modal focus
        //  Show modal and viewable by screen readers
        $(modalTarget).attr({
            "aria-hidden": "false",
            "tabindex": "0"
        });
    }

    function closeModal() {
        //  Reset everything
        body.attr({
            "aria-hidden": "false",
            "tabindex": "0"
        });
        $(".js-modal-overlay").attr({
            "aria-hidden": "true",
            "tabindex": "-1"
        });
    }


    $(".js-modal-open").click(function(e) {
        openModal($(this), e);
    });

    $(".js-modal-cancel-btn").click(function(e) {
        closeModal();
    })

    $(".js-modal-close").click(function() {
        closeModal();
    }).find(".js-modal-dialog").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        return;
    });

    $(this).keydown(function(e) {
        trapEscapeKey(e);
    });
});

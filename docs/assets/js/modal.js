$(document).ready(function() {
    var focusSelectors    = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
    var modal             = $(".js-modal-overlay");
    var body              = $("body");

    function trapEscapeKey(e) {
        // if escape pressed
        if (e.which == 27) {
            alert("Pressed");
        }
    }

    function openModal(obj, evt) {
        var modalTarget = obj.attr("data-target");

        //  Clear all open modals just in case
        modal.removeClass("is-visible");

        //  Make the main page non-scrollable and hidden to screen readers
        body.addClass("overflow-hidden").attr("aria-hidden", "true");

        //  Set modal focus
        //  Show modal and viewable by screen readers
        $(modalTarget).on("focusin", function() {
            $(".js-modal-dialog *").filter(focusSelectors).first().focus();
        });
        $(modalTarget).addClass("is-visible").attr("aria-hidden", "false");
    }

    function closeModal() {
        //  Reset everything
        body.removeClass("overflow-hidden").attr("aria-hidden", "false");
        $(".js-modal-overlay").removeClass("is-visible").attr("aria-hidden", "true");

        //restoreInitialFocus();
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

    $(".js-modal-dialog").keydown(function(e) {
        trapEscapeKey(e);
    });
});

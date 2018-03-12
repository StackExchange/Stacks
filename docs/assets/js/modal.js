const focusSelectors    = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var modal               = $(".js-modal-overlay");
var body                = $("body");

$(document).ready(function() {
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

    modal.keydown(function(e) {
        trapEscapeKey(e);
    });
});

function trapEscapeKey(e) {
    // if escape pressed
    if (e.which == 27) {
        alert("Pressed");
    }
}

function setInitialFocus(obj) {
    var val = 0;

    // Focus the first element within the modal.
    $(obj).find(".js-modal-dialog *").filter(focusSelectors).attr("tabindex", (parseInt(val + 1), 1));

    var focusableItems = body.find(focusSelectors).not(".js-modal-overlay *");

    // Trap the tab focus by disable tabbing on all elements outside of the modal.
    focusableItems.each(function() {
        $(this).attr("tabindex", "-1");
    });
}

function restoreInitialFocus() {
    var focusableItems = body.find(focusSelectors).not(modal + "*");

    // Trap the tab focus by disable tabbing on all elements outside of the modal.
    focusableItems.each(function() {
        $(this).removeAttr("tabindex");
    });
}

function openModal(obj, evt) {
    var modalTarget = obj.attr("data-target");

    //  Clear all open modals just in case
    modal.removeClass("is-visible");
    //  Set modal focus
    setInitialFocus(modalTarget);
    //  Make the main page non-scrollable and hidden to screen readers
    body.addClass("overflow-hidden").attr("aria-hidden", "true");
    //  Show modal and viewable by screen readers
    $(modalTarget).addClass("is-visible").attr("aria-hidden", "false");
}

function closeModal() {
    //  Reset everything
    body.removeClass("overflow-hidden").attr("aria-hidden", "false");
    $(".js-modal-overlay").removeClass("is-visible").attr("aria-hidden", "true");

    restoreInitialFocus();
}

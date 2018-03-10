// jQuery formatted selector to search for focusable items
var focusElementString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

// store the item that has focus before opening the modal window
var previousFocus;
var bodyTag = $(document.body);
var modalWrapper = $(".s-modal");
var modalTarget;

$(document).ready(function() {
    $(".js-modal-open").click(function(e) {
        openModal($(this), e);
    });

    $(".js-modal-cancel-btn").click(function(e) {
        closeModal(e);
    })

    $(".js-modal-close").click(function(e) {
        closeModal(e);
    }).find(".js-modal-dialog").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        return;
    });

    modalWrapper.keydown(function(e) {
        trapEscapeKey(e);
    });
});

function trapEscapeKey(e) {
    // if escape pressed
    if (e.keyCode == 27) {
        alert("Pressed");
    }
}

function setInitialFocus(obj) {
    var o = obj.find("*");

    var focusableItems;
    focusableItems = o.filter(focusElementString).filter(":visible").first().focus();
}

function setFocus(obj) {
    obj.find("*").filter(focusElementString).filter(":visible").first().focus();
}

function openModal(obj, evt) {
    var modalTarget = obj.attr("data-target");

    modalWrapper.removeClass("is-visible");         //  Clear all open modals just in case
    bodyTag.addClass("overflow-hidden");            //  Make the main <body> unscrollable
    bodyTag.attr("aria-hidden", "true");            //  Make the main page hidden
    $(modalTarget).addClass("is-visible");          //  Animate in modal dialog
    $(modalTarget).attr("aria-hidden", "false");    //  Make the modal window visible

    bodyTag.on("focusin", ".stacks-wrapper", function(e) {
        setFocus($(modalTarget));
    });

    previousFocus = $(":focus");

    setFocus(obj);
}

function closeModal(e) {
    bodyTag.removeClass("overflow-hidden");         //  Make the main <body> scrollable
    bodyTag.attr("aria-hidden", "false");           //  Make the main page visible
    $(".js-modal-overlay").removeClass("is-visible");       //  Animate in modal dialog
    $(".js-modal-overlay").attr("aria-hidden", "true");     //  Make the modal window visible

    bodyTag.off("focusin", ".js-modal-overlay");

    previousFocus.focus();
}

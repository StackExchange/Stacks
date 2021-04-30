var copyButtons = document.querySelectorAll('.js-clipboard');
var copyNotice = document.querySelector('.js-clipboard-toast');

for (var button of copyButtons) {
    button.addEventListener('click', copyToClipboard)
}

function copyToClipboard(evt) {
    var target = evt.currentTarget;

    var currentRange;
    if (document.getSelection().rangeCount > 0) {
        currentRange = document.getSelection().getRangeAt(0);
        window.getSelection().removeRange(currentRange);
    }
    else {
        currentRange = false;
    }

    var CopyRange = document.createRange();

    CopyRange.selectNode(target);
    window.getSelection().addRange(CopyRange);
    document.execCommand("copy");

    copyNotice.setAttribute("aria-hidden", "false")

    setTimeout(function () {
        copyNotice.setAttribute("aria-hidden", "true")
    }, 3000);

    window.getSelection().removeRange(CopyRange);

    if (currentRange) {
        window.getSelection().addRange(currentRange);
    }
}
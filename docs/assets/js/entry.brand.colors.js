var copyButtons = document.querySelectorAll('.js-clipboard');
var copyNotice = document.querySelector('.js-clipboard-toast');

for (var button of copyButtons) {
    button.addEventListener('click', copyToClipboard)
}

function copyToClipboard(evt) {
    var target = evt.currentTarget;
    var selection = window.getSelection();
    var range = document.createRange();

    // Grad the text
    range.selectNodeContents(target);
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy to clipboard
    document.execCommand('copy');
    selection.removeAllRanges();

    // Open a toaster
    copyNotice.setAttribute("aria-hidden", "false");
    setTimeout(function () {
        copyNotice.setAttribute("aria-hidden", "true");
    }, 3000);
}
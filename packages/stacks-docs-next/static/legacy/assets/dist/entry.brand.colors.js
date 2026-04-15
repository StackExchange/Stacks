/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./assets/js/entry.brand.colors.js ***!
  \*****************************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuYnJhbmQuY29sb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdGFja292ZXJmbG93L3N0YWNrcy1kb2NzLy4vYXNzZXRzL2pzL2VudHJ5LmJyYW5kLmNvbG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29weUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xpcGJvYXJkJyk7XG52YXIgY29weU5vdGljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jbGlwYm9hcmQtdG9hc3QnKTtcblxuZm9yICh2YXIgYnV0dG9uIG9mIGNvcHlCdXR0b25zKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29weVRvQ2xpcGJvYXJkKVxufVxuXG5mdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoZXZ0KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2dC5jdXJyZW50VGFyZ2V0O1xuICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgIC8vIEdyYWQgdGhlIHRleHRcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGFyZ2V0KTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgIC8vIENvcHkgdG8gY2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICAvLyBPcGVuIGEgdG9hc3RlclxuICAgIGNvcHlOb3RpY2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29weU5vdGljZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgfSwgMzAwMCk7XG59Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==
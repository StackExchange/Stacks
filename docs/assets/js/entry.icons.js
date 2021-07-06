const List = require("list.js");

var monkeyList = new List('js-sortable-list', {
    valueNames: ['js-name']
});

var icons = document.querySelectorAll('.js-icon-list .js-svg');
var button = document.querySelector('.js-color-toggle-btn');

if (button) {
    button.addEventListener('click', function() {
        for (var icon of icons) {
            icon.classList.toggle('native');
        }

        return false;
    });
}
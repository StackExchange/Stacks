var monkeyList = new List('js-sortable-list', {
    valueNames: ['js-name']
});

var icons = document.querySelectorAll('.js-icon-list .svg-icon');
var buttons = document.querySelectorAll('.js-color-toggle-btn');
for (var button of buttons) {
    button.addEventListener('click', function(event) {
        for (var icon of icons) {
            icon.classList.toggle('native');
        }
    });
}
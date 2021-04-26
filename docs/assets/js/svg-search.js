var monkeyList = new List('js-sortable-list', {
    valueNames: ['js-name']
});

var icons = document.querySelectorAll('.js-icon-list .js-svg');
var button = document.querySelector('.js-color-toggle-btn');
button.addEventListener('click', function() {
    for (var icon of icons) {
        icon.classList.toggle('native');
    }

    return false;
});
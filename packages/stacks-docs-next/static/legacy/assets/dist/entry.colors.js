/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./assets/js/entry.colors.js ***!
  \***********************************/
var css = document.querySelectorAll('.js-css');
var less = document.querySelectorAll('.js-less');
var hex = document.querySelectorAll('.js-hex');

var cssButton = document.querySelector('.js-css-btn');
var lessButton = document.querySelector('.js-less-btn');
var hexButton = document.querySelector('.js-hex-btn');

var buttons = [cssButton, lessButton, hexButton];

cssButton.addEventListener('click', function() {
    resetSelection();

    this.classList.add("is-selected");

    for (var item of css) {
        item.classList.remove('d-none');
    }

    return false;
});

lessButton.addEventListener('click', function() {
    resetSelection();

    this.classList.add("is-selected");

    for (var item of less) {
        item.classList.remove('d-none');
    }

    return false;
});

hexButton.addEventListener('click', function() {
    resetSelection();

    this.classList.add("is-selected");

    for (var item of hex) {
        item.classList.remove('d-none');
    }

    return false;
});

function resetSelection() {
    for (var button of buttons) {
        button.classList.remove('is-selected');
    }

    for (var item of css) {
        item.classList.add('d-none');
    }

    for (var item of less) {
        item.classList.add('d-none');
    }

    for (var item of hex) {
        item.classList.add('d-none');
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuY29sb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdGFja292ZXJmbG93L3N0YWNrcy1kb2NzLy4vYXNzZXRzL2pzL2VudHJ5LmNvbG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWNzcycpO1xudmFyIGxlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbGVzcycpO1xudmFyIGhleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1oZXgnKTtcblxudmFyIGNzc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jc3MtYnRuJyk7XG52YXIgbGVzc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sZXNzLWJ0bicpO1xudmFyIGhleEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1oZXgtYnRuJyk7XG5cbnZhciBidXR0b25zID0gW2Nzc0J1dHRvbiwgbGVzc0J1dHRvbiwgaGV4QnV0dG9uXTtcblxuY3NzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcmVzZXRTZWxlY3Rpb24oKTtcblxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImlzLXNlbGVjdGVkXCIpO1xuXG4gICAgZm9yICh2YXIgaXRlbSBvZiBjc3MpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59KTtcblxubGVzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHJlc2V0U2VsZWN0aW9uKCk7XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJpcy1zZWxlY3RlZFwiKTtcblxuICAgIGZvciAodmFyIGl0ZW0gb2YgbGVzcykge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5oZXhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICByZXNldFNlbGVjdGlvbigpO1xuXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaXMtc2VsZWN0ZWRcIik7XG5cbiAgICBmb3IgKHZhciBpdGVtIG9mIGhleCkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5mdW5jdGlvbiByZXNldFNlbGVjdGlvbigpIHtcbiAgICBmb3IgKHZhciBidXR0b24gb2YgYnV0dG9ucykge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpdGVtIG9mIGNzcykge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGl0ZW0gb2YgbGVzcykge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGl0ZW0gb2YgaGV4KSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=
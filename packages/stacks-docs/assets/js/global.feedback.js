var feedbackForms = document.querySelectorAll('.js-feedback-form');
var feedbackToast = document.querySelector('.js-feedback-toast');

for (var form of feedbackForms) {
    form.addEventListener('submit', handleFeedback)
}

function handleFeedback(evt) {
    evt.preventDefault();

    var formData = new FormData(evt.target);
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => openToast())
    .catch((error) => alert(error))
}

function openToast() {
    feedbackToast.setAttribute("aria-hidden", "false");

    for (var form of feedbackForms) {
        form.classList.add("pe-none", "o50");
    }

    setTimeout(function () {
        feedbackToast.setAttribute("aria-hidden", "true");

        for (var form of feedbackForms) {
            form.classList.remove("pe-none", "o50");
        }
    }, 5000);
}
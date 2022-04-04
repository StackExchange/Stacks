import * as Stimulus from "stimulus";

(function(){
    var application = Stimulus.Application.start();
    application.register("clipboard", class extends Stimulus.Controller {
        static targets = ["source"];
        sourceTarget!: HTMLElement;

        connect() {
            super.connect();
        };

        copy() {
            const text = this.sourceTarget.innerText;
            navigator.clipboard.writeText(text);
            this.handleVisible();
        }

        private handleVisible() {
            const { scope } = this.targets;

            const hideElements = scope.findAllElements('[data-hide-on-copy]');
            const showElements = scope.findAllElements('[data-show-on-copy]');

            hideElements.map(el => el.classList.add("d-none"));
            showElements.map(el => el.classList.remove("d-none"));

            setTimeout(function () {
                hideElements.map(el => el.classList.remove("d-none"));
                showElements.map(el => el.classList.add("d-none"));
            }, 3000);
        }
    });
})();
import * as Stacks from '../../../../lib/ts/stacks';

Stacks.application.register("clipboard", class extends Stacks.StacksController {
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

        hideElements.forEach(el => {
            el.classList.add("d-none");
        });
        showElements.forEach(el => {
            el.classList.remove("d-none");
        });

        setTimeout(function () {
            hideElements.forEach(el => {
                el.classList.remove("d-none");
            });
            showElements.forEach(el => {
                el.classList.add("d-none");
            });
        }, 3000);
    }
});

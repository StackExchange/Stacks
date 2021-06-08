(function(){
    Stacks.application.register("s-uploader", class extends Stacks.StacksController {
        static targets = ["input", "output"];
        private inputTarget: any;
        private outputTarget: any;

        add() {
            var controller = this;
            var input = controller.inputTarget;
            var output = controller.outputTarget;

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = () => output.src = reader.result;
                this.handleValidInput(true);
                reader.readAsDataURL(input.files[0]);
            }
        }
        handleValidInput(validInputValue: boolean) {
            var controller = this;
            var scope = controller.targets.scope;
            // TODO: This feels gross. Find a better way.
            var hideElements = scope.findAllElements('[data-s-uploader-show-when-valid="false"]');
            var showElements = scope.findAllElements('[data-s-uploader-show-when-valid="true"]');
            var enableElements = scope.findAllElements('[data-s-uploader-enable-when-valid="true"]');

            if (validInputValue) {
                hideElements.map(el => el.classList.add('d-none'));
                showElements.map(el => el.classList.remove('d-none'));
                enableElements.map(el => el.removeAttribute('disabled'))
            } else {
                hideElements.map(el => el.classList.remove('d-none'));
                showElements.map(el => el.classList.add('d-none'));
                enableElements.map(el => el.setAttribute('disabled', "true"))
            }
        }
        reset() {
            var controller = this;
            var input = controller.inputTarget;
            var output = controller.outputTarget;
            input.value = null;
            output.src = '';
            this.handleValidInput(false);
        }
        // On add()
            // show
                // ✅ image preview
                // cancel button?
            // hide
                // input inner CTA
            // enable
                // Upload button
    });
})();

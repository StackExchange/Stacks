(function(){
    // TODO: (all over) get rid of those `any`s!!!

    // TODO: add /** */ JSDoc
    // TODO: generalize this function to return an array
    const fileToDataURL = ({ file, controller }: { file: File; controller: any }) => {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = evt => {
                const res = evt?.target?.result;
                if (res) {
                    const data = file.type.indexOf('image') > -1 ? res : null;
                    const item = { data, name: file.name, type: file.type };
                    controller.files = [...controller.files, item];
                    resolve(res);
                } else {
                    reject();
                }
            }
            reader.readAsDataURL(file);
        })
    }

    // TODO: add /** */ JSDoc
    const getDataURLs = ({ files, controller }: { files: FileList; controller: any }) => {
        // `files` is spread her to map over FileList... though it doesn't support iterators
        // TODO: remove need for this ts-ignore. May require rethinging of iterator.
        // @ts-ignore
        return Promise.all([...files].map((file: any) => fileToDataURL({ file, controller })));
    }

    Stacks.application.register("s-uploader", class extends Stacks.StacksController {
        static targets = ["input", "preview", "container"];
        private inputTarget: any;
        private previewTarget: any;
        private containerTarget!: HTMLElement;
        private files: any;

        initialize() {
            this.files = [];
        }

        connect() {
            super.connect();

            this.handleDragActive = this.inputTarget.bind(this);
            this.inputTarget.addEventListener("dragenter", () => this.handleDragActive(true));
            this.inputTarget.addEventListener("dragexit", () => this.handleDragActive(false));
        }

        disconnect() {
            this.inputTarget.removeEventListener("dragenter", this.handleDragActive);
            super.disconnect();
        }

        // TODO: add /** */ JSDoc
        handleInput() {
            var controller = this;
            getDataURLs({ files: controller.inputTarget.files, controller })
                .then(() => {
                    controller.handleVisible(true);
                    controller.files.map((file: any) => {
                        if (file.data) this.addFilePreview(file.data);
                    })
                });
        }

        // TODO: add /** */ JSDoc
        handleVisible(validInputValue: boolean) {
            var controller = this;
            var scope = controller.targets.scope;
            // TODO: This feels gross. Find a better way.
            var hideElements = scope.findAllElements('[data-s-uploader-show-when-valid="false"]');
            var showElements = scope.findAllElements('[data-s-uploader-show-when-valid="true"]');
            var enableElements = scope.findAllElements('[data-s-uploader-enable-when-valid="true"]');

            if (validInputValue) {
                hideElements.map(el => el.classList.add('d-none'));
                showElements.map(el => el.classList.remove('d-none'));
                enableElements.map(el => el.removeAttribute('disabled'));
                controller.handleDragActive(false);
            } else {
                hideElements.map(el => el.classList.remove('d-none'));
                showElements.map(el => el.classList.add('d-none'));
                enableElements.map(el => el.setAttribute('disabled', "true"))
            }
        }

        // TODO: add /** */ JSDoc
        addFilePreview(src: string) {
            var controller = this;
            var preview = controller.previewTarget;
            // TODO: I feel like accessing `document` is a no-no in Stimulus land
            // consider handing it with a template tag
            const img = document.createElement('img');
            img.src = src;
            preview.appendChild(img);
        }

        // TODO: add /** */ JSDoc
        handleDragActive(shouldHighlight: boolean) {
            var controller = this;
            var container = controller.containerTarget;

            if (shouldHighlight) {
                container.classList.add('is-active');
            } else {
                container.classList.remove('is-active');
            }
        }

        // TODO: add /** */ JSDoc
        reset() {
            var controller = this;
            controller.inputTarget.value = null;
            controller.previewTarget.innerHTML = '';
            controller.handleVisible(false);
            controller.files = [];
        }

    });
})();

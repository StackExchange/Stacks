(function(){
    interface FilePreview {
        data?: Blob;
        name: string;
        type: MimeType;
    };

    /**
     * @param  {File} file
     * @returns an object containing a FilePreview object
     */
    const fileToDataURL = (file: File) => {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = evt => {
                const res = evt?.target?.result;
                if (res) {
                    const { name, type } = file;
                    const data = type.indexOf("image") > -1 ? res : null;
                    resolve({ data, name, type });
                } else {
                    reject();
                }
            }
            reader.readAsDataURL(file);
        })
    }

    /**
     * @param  {FileList|[]} files
     * @returns an array of FilePreview objects from a FileList
     */
    const getDataURLs = (files: FileList | []) => {
        const indexes = Array.from(Array(files?.length).keys());
        return Promise.all(indexes.map(i => fileToDataURL(files[i])));
    }

    Stacks.application.register("s-uploader", class extends Stacks.StacksController {
        static targets = ["input", "previews", "uploader"];
        private inputTarget!: HTMLInputElement;
        private previewsTarget!: HTMLElement;
        private uploaderTarget!: HTMLElement;

        connect() {
            super.connect();

            this.inputTarget.addEventListener("dragenter", () => this.handleUploaderActive(true));
            this.inputTarget.addEventListener("dragleave", () => this.handleUploaderActive(false));
        }

        disconnect() {
            this.inputTarget.removeEventListener("dragenter", () => this.handleUploaderActive);
            super.disconnect();
        }

        /**
         * Handles rendering the file preview state on input change
         */
        handleInput() {
            this.previewsTarget.innerHTML = "";
            if (this.inputTarget.files) {
                getDataURLs(this.inputTarget.files)
                    .then((res: any) => {
                        this.handleVisible(true);
                        res?.slice(0, 5).map((file: FilePreview) => {
                            if (file) this.addFilePreview(file);
                        });
                        this.handleUploaderActive(true);
                    });
            }
        }
        /**
         * @param  {boolean} shouldPreview - Uploader is entering a preview state
         */
        private handleVisible(shouldPreview: boolean) {
            const { scope } = this.targets;
            const hideElements = scope.findAllElements('[data-s-uploader-hide-on-input]');
            const showElements = scope.findAllElements('[data-s-uploader-show-on-input]');
            const enableElements = scope.findAllElements('[data-s-uploader-enable-on-input]');

            if (shouldPreview) {
                hideElements.map(el => el.classList.add("d-none"));
                showElements.map(el => el.classList.remove("d-none"));
                enableElements.map(el => el.removeAttribute("disabled"));
            } else {
                hideElements.map(el => el.classList.remove("d-none"));
                showElements.map(el => el.classList.add("d-none"));
                enableElements.map(el => el.setAttribute("disabled", "true"))
                this.handleUploaderActive(false);
            }
        }

        /**
         * Adds a DOM element to preview a selected file
         * @param  {FilePreview} file
         */
        private addFilePreview(file: FilePreview) {
            let element;
            if (file.type.toString().match('image/*')) {
                element = document.createElement("img");
                element.src = file.data?.toString() || "";
                element.alt = file.name;
            } else {
                element = document.createElement("div");
                element.innerHTML = file.name;
            }
            element.classList.add("s-uploader--preview")
            this.previewsTarget.appendChild(element);
        }

        /**
         * Toggles display and disabled state for select elements on valid input
         * @param  {boolean} active - Uploader is in active state (typically on 'dragenter')
         */
        private handleUploaderActive(active: boolean) {
            if (active) {
                this.uploaderTarget.classList.add("is-active");
            } else {
                this.uploaderTarget.classList.remove("is-active");
            }
        }

        /**
         * Resets the Uploader to initial state
         */
        reset() {
            this.inputTarget.value = '';
            this.previewsTarget.innerHTML = "";
            this.handleVisible(false);
        }

    });
})();

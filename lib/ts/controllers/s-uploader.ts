(function(){
    interface FilePreview {
        data?: Blob;
        name: string;
        type: MimeType;
    };

    /**
     * Returns a FilePreview object from a File type
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
     * Returns an array of FilePreview objects from a FileList
     */
    const getDataURLs = (files: FileList | []) => {
        const indexes = Array.from(Array(files?.length).keys());
        return Promise.all(indexes.map(i => fileToDataURL(files[i])));
    }

    Stacks.application.register("s-uploader", class extends Stacks.StacksController {
        static targets = ["input", "previews", "container"];
        private inputTarget!: HTMLInputElement;
        private previewsTarget!: HTMLElement;
        private containerTarget!: HTMLElement;

        connect() {
            super.connect();

            this.inputTarget.addEventListener("dragenter", () => this.handleContainerActive(true));
            this.inputTarget.addEventListener("dragleave", () => this.handleContainerActive(false));
        }

        disconnect() {
            this.inputTarget.removeEventListener("dragenter", () => this.handleContainerActive);
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
                        this.handleContainerActive(true);
                    });
            }
        }

        /**
         * Toggles display and disabled state for select elements on valid input
         * @param shouldPreview - A boolean indicating whether Uploader should enter/exit preview state
         */
         private handleVisible(shouldPreview: boolean) {
            const { scope } = this.targets;
            // TODO: This feels gross. Find a better way.
            const hideElements = scope.findAllElements('[data-s-uploader-show-on-preview="false"]');
            const showElements = scope.findAllElements('[data-s-uploader-show-on-preview="true"]');
            const enableElements = scope.findAllElements('[data-s-uploader-enable-on-preview="true"]');

            if (shouldPreview) {
                hideElements.map(el => el.classList.add("d-none"));
                showElements.map(el => el.classList.remove("d-none"));
                enableElements.map(el => el.removeAttribute("disabled"));
            } else {
                hideElements.map(el => el.classList.remove("d-none"));
                showElements.map(el => el.classList.add("d-none"));
                enableElements.map(el => el.setAttribute("disabled", "true"))
                this.handleContainerActive(false);
            }
        }

        /**
         * Adds a DOM element to preview a selected file
         * @param file - An object that contains name, type, and data (blob of image)
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
         * @param active - A boolean indicating whether container is active (typically on 'dragenter')
         */
         private handleContainerActive(active: boolean) {
            if (active) {
                this.containerTarget.classList.add("s-uploader__active");
            } else {
                this.containerTarget.classList.remove("s-uploader__active");
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

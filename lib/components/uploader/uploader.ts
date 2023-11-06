import * as Stacks from "../../stacks";

interface FilePreview {
    data?: string | ArrayBuffer;
    name: string;
    type: string;
}

export class UploaderController extends Stacks.StacksController {
    static targets = ["input", "previews", "uploader"];

    declare readonly inputTarget: HTMLInputElement;
    declare readonly previewsTarget: HTMLElement;
    declare readonly uploaderTarget: HTMLElement;

    private boundDragEnter!: () => void;
    private boundDragLeave!: () => void;

    private static readonly FILE_DISPLAY_LIMIT = 10;
    private static readonly MAX_FILE_SIZE = 1024 * 1024 * 10; // 10 MB

    connect() {
        super.connect();
        this.boundDragEnter = this.handleUploaderActive.bind(this, true);
        this.boundDragLeave = this.handleUploaderActive.bind(this, false);

        this.inputTarget.addEventListener("dragenter", this.boundDragEnter);
        this.inputTarget.addEventListener("dragleave", this.boundDragLeave);
    }

    disconnect() {
        this.inputTarget.removeEventListener("dragenter", this.boundDragEnter);
        this.inputTarget.removeEventListener("dragleave", this.boundDragLeave);
        super.disconnect();
    }

    /**
     * Handles rendering the file preview state on input change
     */
    handleInput() {
        this.previewsTarget.innerHTML = "";

        if (!this.inputTarget.files) {
            return;
        }

        const count = this.inputTarget.files.length;
        this.getDataURLs(
            this.inputTarget.files,
            UploaderController.FILE_DISPLAY_LIMIT
        )
            .then((res: FilePreview[]) => {
                this.handleVisible(true);
                const hasMultipleFiles = res.length > 1;

                if (hasMultipleFiles) {
                    const headingElement = document.createElement("div");
                    headingElement.classList.add(
                        "s-uploader--previews-heading"
                    );
                    headingElement.innerText =
                        res.length < count
                            ? `Showing ${res.length} of ${count} files`
                            : `${count} items`;
                    this.previewsTarget.appendChild(headingElement);
                    this.previewsTarget.classList.add("has-multiple");
                } else {
                    this.previewsTarget.classList.remove("has-multiple");
                }
                res.forEach((file) => this.addFilePreview(file));
                this.handleUploaderActive(true);
            })
            // TODO consider rendering an error message
            .catch(() => null);
    }

    /**
     * Resets the Uploader to initial state
     */
    reset() {
        this.inputTarget.value = "";
        this.previewsTarget.innerHTML = "";
        this.handleVisible(false);
    }

    /**
     * Set hide/show and disabled state on elements depending on preview state
     * @param  {boolean} shouldPreview - Uploader is entering a preview state
     */
    private handleVisible(shouldPreview: boolean) {
        const { scope } = this.targets;
        const hideElements = scope.findAllElements(
            "[data-s-uploader-hide-on-input]"
        );
        const showElements = scope.findAllElements(
            "[data-s-uploader-show-on-input]"
        );
        const enableElements = scope.findAllElements(
            "[data-s-uploader-enable-on-input]"
        );

        if (shouldPreview) {
            hideElements.forEach((el) => {
                el.classList.add("d-none");
            });
            showElements.forEach((el) => {
                el.classList.remove("d-none");
            });
            enableElements.forEach((el) => {
                el.removeAttribute("disabled");
            });
        } else {
            hideElements.forEach((el) => {
                el.classList.remove("d-none");
            });
            showElements.forEach((el) => {
                el.classList.add("d-none");
            });
            enableElements.forEach((el) => {
                el.setAttribute("disabled", "true");
            });
            this.handleUploaderActive(false);
        }
    }

    /**
     * Adds a DOM element to preview a selected file
     * @param  {FilePreview} file
     */
    private addFilePreview(file: FilePreview) {
        if (!file) {
            return;
        }

        const previewElement = document.createElement("div");
        let thumbElement;

        if (file.type.match("image/*") && file.data) {
            thumbElement = document.createElement("img");
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            thumbElement.src = file.data.toString();
            thumbElement.alt = file.name;
        } else {
            thumbElement = document.createElement("div");
            thumbElement.innerText = file.name;
        }

        thumbElement.classList.add("s-uploader--preview-thumbnail");
        previewElement.appendChild(thumbElement);
        previewElement.classList.add("s-uploader--preview");
        previewElement.setAttribute("data-filename", file.name);
        this.previewsTarget.appendChild(previewElement);
    }

    /**
     * Toggles display and disabled state for select elements on valid input
     * @param  {boolean} active - Uploader is in active state (typically on 'dragenter')
     */
    private handleUploaderActive(active: boolean) {
        this.uploaderTarget.classList.toggle("is-active", active);
    }

    /**
     * Converts the file data into a data URL
     * @param  {File} file
     * @returns an object containing a FilePreview object
     */
    private fileToDataURL(file: File): Promise<FilePreview> {
        const reader = new FileReader();
        const { name, size, type } = file;

        if (
            size < UploaderController.MAX_FILE_SIZE &&
            type.indexOf("image") > -1
        ) {
            return new Promise((resolve, reject) => {
                reader.onload = (evt) => {
                    const res = evt?.target?.result;
                    if (res) {
                        resolve({ data: res, name, type });
                    } else {
                        reject();
                    }
                };
                reader.readAsDataURL(file);
            });
        } else {
            return Promise.resolve({ name, type });
        }
    }

    /**
     * Gets an array of FilePreviews from a FileList
     * @param  {FileList|[]} files
     * @returns an array of FilePreview objects from a FileList
     */
    private getDataURLs(
        files: FileList,
        limit: number
    ): Promise<FilePreview[]> {
        const promises = Array.from(files)
            .slice(0, Math.min(limit, files.length))
            .map((f) => this.fileToDataURL(f));

        return Promise.all(promises);
    }
}

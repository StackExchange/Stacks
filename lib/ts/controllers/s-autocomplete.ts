(function () {
    "use strict";
    Stacks.application.register("s-autocomplete", class extends Stacks.StacksController {
        static targets = ["query", "results", "loading", "error"];

        declare readonly queryTarget!: HTMLInputElement;
        declare readonly queryTargets!: HTMLInputElement[];
        declare readonly resultsTarget!: HTMLInputElement;
        declare readonly resultsTargets!: HTMLInputElement[];
        declare readonly loadingTarget!: HTMLInputElement;
        declare readonly loadingTargets!: HTMLInputElement[];
        declare readonly hasLoadingTarget!: boolean;
        declare readonly errorTarget!: HTMLInputElement;
        declare readonly errorTargets!: HTMLInputElement[];
        declare readonly hasErrorTarget!: boolean;

        private timeouts: number[] = [];

        private _boundKeypressFn!: any;

        connect() {
            this._clearResults();
            this._hideLoadingIndicator();
            this._hideErrorState();
            this._bindDocumentEvents();
        };

        disconnect() {
            this._unbindDocumentEvents();
        };

        /**
         * Sends a query after a given delay
         */
        query() {
            this._hideErrorState();
            if (this._query === "") {
                this._clearResults();
                // todo: stop running queries
                return;
            }

            this._showLoadingIndicator();

            fetch(this._url)
                .then(response => this._handleResponse(response))
                .then(responseText => this._displayResults(responseText))
                .catch(error => this._showErrorState());
            // todo: debounce
        }

        private _handleResponse(response: Response): Promise<string> {
            if(!response.ok) {
                throw Error(response.statusText);
            }
            return response.text();
        }

        /**
         * Display autocomplete results in the result element
         * @param results
         */
        private _displayResults(results: string): void {
            this._hideLoadingIndicator();
            this._resultElement.innerHTML = results;
        }

        /**
         * Show the loading indicator element, if present
         */
        private _showLoadingIndicator(): void {
            if (this.hasLoadingTarget) {
                this.loadingTarget.classList.remove("d-none");
            }
        }

        /**
         * Hide the loading indicator element, if present
         */
        private _hideLoadingIndicator(): void {
            if (this.hasLoadingTarget) {
                this.loadingTarget.classList.add("d-none");
            }
        }

        /**
         * Show the error state element if present
         */
        private _showErrorState(): void {
            this._hideLoadingIndicator();
            if (!this.hasErrorTarget) {
                return;
            }
            this.errorTarget.classList.remove("d-none");
        }

        /**
         * Hide the error state element, if present
         */
        private _hideErrorState(): void {
            if (!this.hasErrorTarget) {
                return
            };
            this.errorTarget.classList.add("d-none");
        }

        /**
         * Get the entered search query
         */
        private get _query(): string {
            return this.queryTarget.value;
        }

        /**
         * Get the specified delay in ms before firing a query
         * Defaults to 250ms
         */
        private get _delay(): number {
            return parseInt(this.data.get("delay") || "250");
        }

        /**
         * Get the URL that shuold be queried
         *
         */
        private get _url(): string {
            let url = this.data.get("url");
            if (!url) {
                throw "no data-s-autocomplete-url attribute specified!"
            }
            return url;
        }

        /**
         * Get the element which should display the autocomplete result
         */
        private get _resultElement(): Element {
            return this.resultsTarget;
        }

        private _debounce(fun: () => void, wait: number) {
            this.timeouts.forEach(timeout => window.clearInterval(timeout));
            this.timeouts.push(window.setTimeout(fun, wait));
        }

        /**
         * Clear all autocomplete results
         */
        private _clearResults() {
            this._hideLoadingIndicator();
            this._resultElement.innerHTML = ""
        }

        /**
         * Binds global events to the document to enable keyboard interaction
         */
        private _bindDocumentEvents() {
            // in order for removeEventListener to remove the right event, this bound function needs a constant reference
            this._boundKeypressFn = this._boundKeypressFn || this._blurOnEscapePress.bind(this);

            document.addEventListener("keyup", this._boundKeypressFn);
        };

        /**
         * Unbinds global events from the document
         */
        private _unbindDocumentEvents() {
            document.removeEventListener("keyup", this._boundKeypressFn);
        };

        /**
         * Blurs the input element if the user presses escape while it is focused
         * @param {Event} e - The document keyup event
         */
        private _blurOnEscapePress(e: KeyboardEvent) {
            // if the ESC key (27) was pressed, blur
            // todo: is this really good behavior?
            if (e.which === 27) {
                this.queryTarget.blur();
            }
        };
    });
})();

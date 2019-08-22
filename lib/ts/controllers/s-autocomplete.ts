(function () {
    "use strict";
    Stacks.application.register("s-autocomplete", class extends Stacks.StacksController {
        static targets = ["query", "results", "loading"];

        declare readonly queryTarget!: HTMLInputElement;
        declare readonly queryTargets!: HTMLInputElement[];
        declare readonly resultsTarget!: HTMLInputElement;
        declare readonly resultsTargets!: HTMLInputElement[];
        declare readonly loadingTarget!: HTMLInputElement;
        declare readonly loadingTargets!: HTMLInputElement[];
        declare readonly hasLoadingTarget!: boolean;

        timeouts: number[] = [];

        connect() {
            this._clearResults();
        };

        disconnect() {
            console.log("disconnected autocomplete");
        };

        /**
         * Sends a query after a given delay
         */
        query() {
            if (this._query === "") {
                this._clearResults();
                // todo: stop running queries
                return;
            }

            this._showLoadingIndicator();
            this._displayResults(this._stubResponse());
            // todo: debounce
        }

        /**
         * Display autocomplete results in the result element
         * @param results 
         */
        private _displayResults(results: string): void {
            console.log("displaying")
            setTimeout(() => {
                this._hideLoadingIndicator();
                this._resultElement.innerHTML = results;
            }, 1500);
        }

        private _showLoadingIndicator(): void {
            if (this.hasLoadingTarget) {
                this.loadingTarget.classList.remove("d-none");
            }
        }

        private _hideLoadingIndicator(): void {
            if (this.hasLoadingTarget) {
                this.loadingTarget.classList.add("d-none");
            }
        }

        private _stubResponse(): string {
            return `
                <a href="#" class="s-tag grid--cell">typescript</a>
                <a href="#" class="s-tag grid--cell">clojure</a>
                <a href="#" class="s-tag grid--cell">rust</a>
                <a href="#" class="s-tag grid--cell">html</a>
                <a href="#" class="s-tag grid--cell">php</a>
            `;
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

        private _initializeKeyboardNavigation() {

        }
    });
})();

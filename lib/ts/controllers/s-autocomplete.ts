(function () {
    "use strict";
    Stacks.application.register("s-autocomplete", class extends Stacks.StacksController {
        static targets = ["query", "results"];

        declare readonly queryTarget!: HTMLInputElement;
        declare readonly queryTargets!: HTMLInputElement[];
        declare readonly resultsTarget!: HTMLInputElement;
        declare readonly resultsTargets!: HTMLInputElement[];

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
            let fun = () => {
                this._query === "" 
                    ? this._clearResults() 
                    : this._resultElement.innerHTML = this._stubResponse();
            };

            // todo: debounce

            fun();
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

        private _clearResults() {
            this._resultElement.innerHTML = ""
        }
    });
})();

(function () {
    "use strict";
    Stacks.application.register("s-autocomplete", class extends Stacks.StacksController {
        static targets = ["query"];

        declare readonly queryTarget!: HTMLInputElement;
        declare readonly queryTargets!: HTMLInputElement[];

        timeouts: number[] = [];

        connect() {
            console.log("Connected autocomplete");
        };

        disconnect() {
            console.log("disconnected autocomplete");
        };

        /**
         * Sends a query after a given delay
         */
        query() {
            let fun = () => {
                console.log("firing query", this._query);
                let response = "<div>1</div><div>2</div>";
                this._resultElement.innerHTML = response;
            };

            // todo: debounce

            let response = fun();
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
            let selector = this.data.get("result-element");
            if (selector === null) {
                throw "no result-element attribute given"
            }

            let element = document.querySelector(selector);
            if (element === null) {
                throw `no element found with selector ${element}`
            }

            return element;
        }

        private _debounce(fun: () => void, wait: number) {
            this.timeouts.forEach(timeout => window.clearInterval(timeout));
            this.timeouts.push(window.setTimeout(fun, wait));
        }
    });
})();

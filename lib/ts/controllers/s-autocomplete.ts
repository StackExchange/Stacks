

(function () {
    "use strict";
    Stacks.application.register("s-autocomplete", class extends Stacks.StacksController {
        static targets = [ "query" ];

        declare readonly queryTarget!: HTMLInputElement;
        declare readonly queryTargets!: HTMLInputElement[];

        connect() {
            console.log("Connected autocomplete");
        };

        disconnect() {
            console.log("disconnected autocomplete");
        };

        /**
         * Fires a query after a given delay
         */
        runQuery() {
            console.log("firing query", this.query)
        }

        get query() : string {
            return this.queryTarget.value;
        }
    });
})();


(function () {
    var application = Stimulus.Application.start();

    function createController(name, data) {
        var controller = function () {
            Stimulus.Controller.apply(this, arguments);
        };
        controller.prototype = Object.create(Stimulus.Controller.prototype, {
            constructor: { value: controller, enumerable: false }
        });
        Object.setPrototypeOf(controller, Stimulus.Controller);

        var targets;
        for (var prop in data) if (data.hasOwnProperty(prop)) {
            if (prop === "targets") {
                targets = data[prop];
                Object.defineProperty(controller, "targets", {
                    get: function () { return targets; },
                    enumerable: false
                });
            } else {
                controller.prototype[prop] = data[prop];
            }
        }
        return controller;
    }


    var modalController = createController("s-modal", {
        targets: ["container"],
        close: function(event) {
            this.containerTarget.setAttribute("aria-hidden", "true");
            this.containerTarget.setAttribute("tabindex", "-1");
        },
        save: function() {
            // we don't do anything by default yet
        },
    })

    application.register("s-modal", modalController);
})()

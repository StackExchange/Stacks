
(function () {
    var application = Stimulus.Application.start();

    window.Stacks = window.Stacks || Object.create(null);
    Stacks.controllers = Object.create(null);

    function StacksController () {
        Stimulus.Controller.apply(this, arguments);
    }
    StacksController.prototype = Object.create(Stimulus.Controller.prototype, {
        constructor: { value: StacksController, enumerable: false, writable: true }
    });
    StacksController.prototype.getElementData = function(element, key) {
        return element.getAttribute("data-" + this.identifier + "-" + key);
    }
    StacksController.prototype.setElementData = function(element, key, value) {
        element.setAttribute("data-" + this.identifier + "-" + key, value);
    }
    StacksController.prototype.removeElementData = function(element, key) {
        element.removeAttribute("data-" + this.identifier + "-" + key);
    }
    Object.setPrototypeOf(StacksController, Stimulus.Controller);

    function createController(name, data) {
        var Controller = function () {
            StacksController.apply(this, arguments);
        };
        Controller.prototype = Object.create(StacksController.prototype, {
            // This needs to be writable because Stimulus changes the constructor property
            // on the controller. This shouldn't be a problem, mind you -- because right here
            // were're defining the property on the *prototype*. But IE11 throws anyway.
            constructor: { value: Controller, enumerable: false, writable: true }
        });
        Object.setPrototypeOf(Controller, StacksController);

        var targets;
        for (var prop in data) if (data.hasOwnProperty(prop)) {
            if (prop === "targets") {
                targets = data[prop];
                Object.defineProperty(Controller, "targets", {
                    get: function () { return targets; },
                    enumerable: false
                });
            } else {
                Controller.prototype[prop] = data[prop];
            }
        }
        return Controller;
    }

    Stacks.addController = function addController(name, data) {
        if (!/^s-/.test(name)) {
            throw "Stacks-created Stimulus controller names must start with \"s-\".";
        }
        var Controller = createController(name, data);
        application.register(name, Controller);
        Stacks.controllers[name] = Controller;
    };
})()

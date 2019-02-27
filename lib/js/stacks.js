
(function () {
    window.Stacks = window.Stacks || Object.create(null);
    Stacks._initializing = true;
    var application = Stacks.stimulusApplication = Stimulus.Application.start();
    Stacks.controllers = Object.create(null);

    function StacksController () {
        Stimulus.Controller.apply(this, arguments);
    }
    StacksController.prototype = Object.create(Stimulus.Controller.prototype, {
        constructor: { value: StacksController, enumerable: false, writable: true }
    });
    StacksController.prototype.getElementData = function(element, key) {
        return element.getAttribute("data-" + this.identifier + "-" + key);
    };
    StacksController.prototype.setElementData = function(element, key, value) {
        element.setAttribute("data-" + this.identifier + "-" + key, value);
    };
    StacksController.prototype.removeElementData = function(element, key) {
        element.removeAttribute("data-" + this.identifier + "-" + key);
    };
    StacksController.prototype.triggerEvent = function(eventName, optionalElement) {
        var event;
        var namespacedName = this.identifier + ":" + eventName;
        try {
            event = new Event(namespacedName, {bubbles: true});
        } catch (ex) {
            // Internet Explorer
            event = document.createEvent("Event");
            event.initEvent(namespacedName, true, true);
        }
        (optionalElement || this.element).dispatchEvent(event);
    };
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
                Object.defineProperty(Controller.prototype, prop, Object.getOwnPropertyDescriptor(data, prop));
            }
        }
        return Controller;
    }

    Stacks.addController = function addController(name, data) {
        var hasPrefix = /^s-/.test(name);
        if (Stacks._initializing && !hasPrefix) {
            throw "Stacks-created Stimulus controller names must start with \"s-\".";
        }
        if (!Stacks._initializing && hasPrefix) {
            throw "The \"s-\" prefix on Stimulus controller names is reserved for Stacks-created controllers.";
        }
        var Controller = createController(name, data);
        application.register(name, Controller);
        if (Stacks._initializing) {
            Stacks.controllers[name] = Controller;
        }
    };
})()

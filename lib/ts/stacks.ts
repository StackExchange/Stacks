namespace Stacks {
    export const application = Stimulus.Application.start();
    export var _initializing = true;
    
    export class StacksController extends Stimulus.Controller {
        protected getElementData(element: Element, key: string) {
            return element.getAttribute("data-" + this.identifier + "-" + key);
        };
        protected setElementData(element: Element, key: string, value: string) {
            element.setAttribute("data-" + this.identifier + "-" + key, value);
        };
        protected removeElementData(element: Element, key: string) {
            element.removeAttribute("data-" + this.identifier + "-" + key);
        };
        protected triggerEvent<T>(eventName: string, detail?: T, optionalElement?: Element) {
            const namespacedName = this.identifier + ":" + eventName;
            var event : CustomEvent<T>;
            try {
                event = new CustomEvent(namespacedName, {bubbles: true, detail: detail});
            } catch (ex) {
                // Internet Explorer
                event = document.createEvent("CustomEvent");
                event.initCustomEvent(namespacedName, true, true, detail!);
            }
            (optionalElement || this.element).dispatchEvent(event);
        };
    }
    
    
    type ControllersDictionary = { [identifier: string]: Stimulus.ControllerConstructor };
    const _controllers : ControllersDictionary = {};
    export const controllers : Readonly<ControllersDictionary> = _controllers;
    
    
    export function addController(name: string, controller: Stimulus.ControllerConstructor) {
        var hasPrefix = /^s-/.test(name);
        if (_initializing && !hasPrefix) {
            throw "Stacks-created Stimulus controller names must start with \"s-\".";
        }
        if (!_initializing && hasPrefix) {
            throw "The \"s-\" prefix on Stimulus controller names is reserved for Stacks-created controllers.";
        }
        application.register(name, controller);
        if (_initializing) {
            _controllers[name] = controller;
        }
    };
}

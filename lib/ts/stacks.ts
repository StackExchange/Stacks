import { Application, Controller, ControllerConstructor } from "stimulus"

export const stimulusApplication = Application.start();
export var _internalData = { initializing: true };

export class StacksController extends Controller {
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


type ControllersDictionary = { [identifier: string]: ControllerConstructor };
const _controllers : ControllersDictionary = {};
export const controllers : Readonly<ControllersDictionary> = _controllers;


export function addController(name: string, controller: ControllerConstructor) {
    var hasPrefix = /^s-/.test(name);
    if (_internalData.initializing && !hasPrefix) {
        throw "Stacks-created Stimulus controller names must start with \"s-\".";
    }
    if (!_internalData.initializing && hasPrefix) {
        throw "The \"s-\" prefix on Stimulus controller names is reserved for Stacks-created controllers.";
    }
    stimulusApplication.register(name, controller);
    if (_internalData.initializing) {
        _controllers[name] = controller;
    }
};

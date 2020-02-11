namespace Stacks {
    class StacksApplication extends Stimulus.Application {
        load(...definitions: Stimulus.Definition[]): void
        load(definitions: Stimulus.Definition[]): void
        load(head: Stimulus.Definition | Stimulus.Definition[], ...rest: Stimulus.Definition[]) {
            const definitions = Array.isArray(head) ? head : [head, ...rest];

            for (const definition of definitions) {
                var hasPrefix = /^s-/.test(definition.identifier);
                if (_initializing && !hasPrefix) {
                    throw "Stacks-created Stimulus controller names must start with \"s-\".";
                }
                if (!_initializing && hasPrefix) {
                    throw "The \"s-\" prefix on Stimulus controller names is reserved for Stacks-created controllers.";
                }
            }
            
            super.load(definitions);
        }

        static start(element?: Element, schema?: Stimulus.Schema): StacksApplication {
            const application = new StacksApplication(element, schema);
            application.start();
            return application;
        }
    }

    export const application: Stimulus.Application = StacksApplication.start();
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
                event = new CustomEvent(namespacedName, {bubbles: true, cancelable: true, detail: detail});
            } catch (ex) {
                // Internet Explorer
                event = document.createEvent("CustomEvent");
                event.initCustomEvent(namespacedName, true, true, detail!);
            }
            (optionalElement || this.element).dispatchEvent(event);
            return event;
        };
    }

    // ControllerDefinition/createController/addController is here to make
    // it easier to consume Stimulus from ES5 files (without classes)
    export interface ControllerDefinition {
        [name: string]: any;
        targets?: string[];
    }
    export function createController(controllerDefinition: ControllerDefinition): typeof StacksController {
        const Controller = controllerDefinition.hasOwnProperty("targets")
            ? class Controller extends StacksController { static targets = controllerDefinition.targets! }
            : class Controller extends StacksController {};

        for (var prop in controllerDefinition) {
            if (prop !== "targets" && controllerDefinition.hasOwnProperty(prop)) {
                Object.defineProperty(
                    Controller.prototype,
                    prop,
                    Object.getOwnPropertyDescriptor(controllerDefinition, prop)!
                );
            }
        }

        return Controller;
    }

    export function addController(name: string, controller: ControllerDefinition) {
        application.register(name, createController(controller));
    }
}

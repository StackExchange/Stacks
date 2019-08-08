declare namespace Stacks {
    const application: Stimulus.Application;
    var _initializing: boolean;
    class StacksController extends Stimulus.Controller {
        protected getElementData(element: Element, key: string): string | null;
        protected setElementData(element: Element, key: string, value: string): void;
        protected removeElementData(element: Element, key: string): void;
        protected triggerEvent<T>(eventName: string, detail?: T, optionalElement?: Element): CustomEvent<T>;
    }
    interface ControllerDefinition {
        [name: string]: any;
        targets?: string[];
    }
    function createController(controllerDefinition: ControllerDefinition): typeof StacksController;
    function addController(name: string, controller: ControllerDefinition): void;
}

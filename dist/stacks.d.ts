import * as Stimulus from "stimulus";
export declare const application: Stimulus.Application;
export declare class StacksController extends Stimulus.Controller {
    protected getElementData(element: Element, key: string): string | null;
    protected setElementData(element: Element, key: string, value: string): void;
    protected removeElementData(element: Element, key: string): void;
    protected triggerEvent<T>(eventName: string, detail?: T, optionalElement?: Element): CustomEvent<T>;
}
export interface ControllerDefinition {
    [name: string]: any;
    targets?: string[];
}
export declare function createController(controllerDefinition: ControllerDefinition): typeof StacksController;
export declare function addController(name: string, controller: ControllerDefinition): void;

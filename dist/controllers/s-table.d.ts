import * as Stacks from '../stacks';
export default class StacksTable extends Stacks.StacksController {
    static targets: string[];
    readonly columnTarget: Element;
    readonly columnTargets: Element[];
    setCurrentSort(headElem: Element, direction: "asc" | "desc" | "none"): void;
    sort(evt: Event): void;
}

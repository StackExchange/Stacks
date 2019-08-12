import * as Stacks from '../stacks';
export default class StacksExpandableControl extends Stacks.StacksController {
    private isCollapsed;
    private events;
    private isCheckable;
    private isRadio;
    initialize(): void;
    _isCollapsedForClickable(): boolean;
    _isCollapsedForCheckable(): boolean;
    readonly controlledCollapsible: HTMLElement;
    _dispatchShowHideEvent(isShow: boolean): void;
    _toggleClass(doAdd: boolean): void;
    listener(e: Event): void;
    connect(): void;
    disconnect(): void;
}

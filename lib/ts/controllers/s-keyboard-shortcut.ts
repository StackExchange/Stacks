import { StacksController } from "../stacks";
import { shallowEquals } from "../shared/utilities";

interface Shortcut {
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;
    meta?: boolean;
    key: string;
}

type ClickableElement = HTMLAnchorElement | HTMLButtonElement | HTMLDetailsElement;
const clickableElements = ['a', 'button', 'details'];

type FocusableElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
const focusableElements = ['input', 'select', 'textarea'];

export class KeyboardShortcutController extends StacksController {
    declare ctrlValue: boolean;
    declare shiftValue: boolean;
    declare altValue: boolean;
    declare metaValue: boolean;
    declare keyValue: string;

    static values = {
        ctrl: Boolean,
        meta: Boolean,
        shift: Boolean,
        alt: Boolean,
        key: String,
    };

    private cachedShortcut: null | Shortcut = null;

    get shortcut(): Shortcut {
        if (this.cachedShortcut) {
            return this.cachedShortcut;
        }

        return this.cachedShortcut = {
            key: this.keyValue.toUpperCase(),
            ...(this.ctrlValue ? { ctrl: true } : {}),
            ...(this.metaValue ? { meta: true } : {}),
            ...(this.shiftValue ? { shift: true } : {}),
            ...(this.altValue ? { alt: true } : {}),
        };
    }

    connect() {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    disconnect() {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    //
    // Rebuild our shortcut cache if our shortcut definition changes
    //

    ctrlValueChanged() {
        this.cachedShortcut = null;
    }

    shiftValueChanged() {
        this.cachedShortcut = null;
    }

    altValueChanged() {
        this.cachedShortcut = null;
    }

    metaValueChanged() {
        this.cachedShortcut = null;
    }

    keyValueChanged() {
        this.cachedShortcut = null;
    }

    private handleKeyPress = (event: KeyboardEvent) => {
        // If we're inside a text field, ignore any custom keyboard shortcuts
        if (this.isInputInFocus()) {
            return;
        }

        const keyPress = {
            key: event.key.toUpperCase(),
            ...(event.ctrlKey ? { ctrl: true } : {}),
            ...(event.metaKey ? { meta: true } : {}),
            ...(event.shiftKey ? { shift: true } : {}),
            ...(event.altKey ? { alt: true } : {}),
        };

        if (shallowEquals(this.shortcut, keyPress)) {
            event.preventDefault();

            const tag = this.element.tagName.toLowerCase();

            if (clickableElements.indexOf(tag) >= 0) {
                (this.element as ClickableElement).click();
            } else if (focusableElements.indexOf(tag) >= 0) {
                (this.element as FocusableElement).focus();
            }
        }
    };

    private isInputInFocus = (): boolean => {
        const nodeName = document.activeElement?.nodeName.toLowerCase();

        if (!nodeName) {
            return false;
        }

        return ['input', 'textarea', 'select'].includes(nodeName);
    }
}

import { tick } from "svelte";

type ShortcutHandler = (params: {
    allFocusableItems: HTMLElement[];
    currentlyFocusedItem: HTMLElement | null;
}) => void;

const FOCUSABLE_ELEMENTS = [
    "a[href]",
    "area[href]",
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    "select:not([disabled]):not([aria-hidden])",
    "textarea:not([disabled]):not([aria-hidden])",
    "button:not([disabled]):not([aria-hidden])",
    "iframe",
    "object",
    "embed",
    "[contenteditable]",
    '[tabindex]:not([tabindex^="-"])',
];

const isElementVisible = (element: Element): boolean => {
    const computedStyle = document.defaultView?.getComputedStyle(element);

    return !!(
        computedStyle &&
        computedStyle.getPropertyValue("display") !== "none" &&
        computedStyle.getPropertyValue("visibility") !== "hidden"
    );
};

const getAllFocusableItems = async (node: HTMLElement) => {
    // wait for the DOM changes to be flushed by Svelte
    await tick();
    return [...node.querySelectorAll(FOCUSABLE_ELEMENTS.join(", "))].filter(
        isElementVisible
    ) as HTMLElement[];
};

const focusFirst = (allFocusableItems: HTMLElement[]) => {
    allFocusableItems[0] && allFocusableItems[0].focus();
};

const focusLast = (allFocusableItems: HTMLElement[]) => {
    allFocusableItems[allFocusableItems.length - 1] &&
        allFocusableItems[allFocusableItems.length - 1].focus();
};

const focusPrevious: ShortcutHandler = ({
    allFocusableItems,
    currentlyFocusedItem,
}) => {
    // If focus is not within the focusables, focus the last one
    if (!currentlyFocusedItem) {
        focusLast(allFocusableItems);
        return;
    }

    const currentlyFocusedIndex =
        allFocusableItems.indexOf(currentlyFocusedItem);

    // If we have focus on the first one, focus the last one
    if (currentlyFocusedIndex === 0) {
        focusLast(allFocusableItems);
        return;
    }

    // Focus the previous element
    const previousEl = allFocusableItems[currentlyFocusedIndex - 1];
    previousEl && previousEl.focus();
};

const focusNext: ShortcutHandler = ({
    allFocusableItems,
    currentlyFocusedItem,
}) => {
    // if focus is not within the focusables, focus the first one
    if (!currentlyFocusedItem) {
        focusFirst(allFocusableItems);
        return;
    }

    const currentlyFocusedIndex =
        allFocusableItems.indexOf(currentlyFocusedItem);

    // If we have focus on the last one, focus the first one
    if (allFocusableItems.length - 1 === currentlyFocusedIndex) {
        focusFirst(allFocusableItems);
        return;
    }

    // Focus the next element
    const nextEl = allFocusableItems[currentlyFocusedIndex + 1];
    nextEl && nextEl.focus();
};

type ActionParameter = {
    active: boolean;
    initialFocusElement?: HTMLElement;
    returnFocusElement?: HTMLElement;
};

const focusTrap = (
    node: HTMLElement,
    { active, initialFocusElement, returnFocusElement }: ActionParameter
) => {
    // element on focus before the trap was activated
    let previouslyFocusedElement: HTMLElement | null;

    const handleKeyboardShortcuts = async (event: KeyboardEvent) => {
        const { key, shiftKey } = event;
        if (key === "Tab") {
            event.preventDefault();
            event.stopPropagation();

            const allFocusableItems = await getAllFocusableItems(node);
            const currentlyFocusedItem =
                document.activeElement as HTMLElement | null;

            shiftKey
                ? focusPrevious({ allFocusableItems, currentlyFocusedItem })
                : focusNext({ allFocusableItems, currentlyFocusedItem });
        }
    };

    const initFocus = async () => {
        const allFocusableItems = await getAllFocusableItems(node);
        previouslyFocusedElement ??= document.activeElement as HTMLElement;
        initialFocusElement
            ? initialFocusElement.focus()
            : focusFirst(allFocusableItems);
        document.addEventListener("keydown", handleKeyboardShortcuts);
    };

    const returnFocus = () => {
        returnFocusElement
            ? returnFocusElement.focus()
            : previouslyFocusedElement?.focus();
        document.removeEventListener("keydown", handleKeyboardShortcuts);
        previouslyFocusedElement = null;
    };

    if (active) {
        initFocus();
    }

    return {
        update: ({ active }: ActionParameter) => {
            active ? initFocus() : returnFocus();
        },
        destroy: returnFocus,
    };
};

export { focusTrap };

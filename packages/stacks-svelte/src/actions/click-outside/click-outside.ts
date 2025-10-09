import type { Action } from "svelte/action";

interface Attributes {
    onoutclick: (e: CustomEvent<HTMLElement>) => void;
}

export const clickOutside: Action<HTMLElement, void, Attributes> = (node) => {
    const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!node.contains(target)) {
            node.dispatchEvent(new CustomEvent("outclick", { detail: target }));
        }
    };

    document.addEventListener("click", handleClick, true);

    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        },
    };
};

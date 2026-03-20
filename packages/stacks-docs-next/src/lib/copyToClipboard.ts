export function copyToClipboard(node: HTMLElement, value: string) {
    let current = value;

    async function copyText() {
        let text: string = current || node.textContent;

        try {
            await navigator.clipboard.writeText(text);

            node.dispatchEvent(
                new CustomEvent("copysuccess", {
                    bubbles: true,
                    detail: node,
                })
            );
        } catch (error) {
            node.dispatchEvent(
                new CustomEvent("copyerror", {
                    bubbles: true,
                    detail: error,
                })
            );
        }
    }

    node.addEventListener("click", copyText);

    return {
        update(newValue: string) {
            current = newValue;
        },
        destroy() {
            node.removeEventListener("click", copyText);
        },
    };
}

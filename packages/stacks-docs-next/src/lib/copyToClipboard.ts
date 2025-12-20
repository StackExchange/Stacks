export function copyToClipboard(node: HTMLElement, value: string) {
    async function copyText() {
        let text: string = value || node.textContent;

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
        destroy() {
            node.removeEventListener("click", copyText);
        },
    };
}

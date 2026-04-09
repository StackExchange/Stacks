import * as Stacks from "../../stacks";

export class CodeBlockController extends Stacks.StacksController {
    static targets = ["copyButton", "code"];

    declare readonly copyButtonTarget: HTMLButtonElement;
    declare readonly codeTarget: HTMLElement;

    connect() {
        console.log('CodeBlockController connected!', this.element);
        this.addCopyButton();
    }

    /**
     * Adds a copy button to the code block if it doesn't already exist
     */
    private addCopyButton() {
        console.log('Adding copy button...');
        
        // Check if copy button already exists
        try {
            this.copyButtonTarget;
            console.log('Copy button already exists, skipping');
            return; // Already exists
        } catch {
            // Button doesn't exist, create it
            console.log('Copy button does not exist, creating one');
        }

        // Create the copy button
        const copyButton = document.createElement("button");
        copyButton.className = "s-btn s-btn__muted s-btn__xs s-code-block--copy";
        copyButton.setAttribute("data-" + this.identifier + "-target", "copyButton");
        copyButton.setAttribute("data-" + this.identifier + "-action", "click->s-code-block#copy");
        copyButton.setAttribute("type", "button");
        copyButton.setAttribute("title", "Copy to clipboard");
        copyButton.innerHTML = `
            <svg aria-hidden="true" class="svg-icon iconCopy" width="14" height="14" viewBox="0 0 14 14">
                <path d="M5 1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5ZM3 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3Zm1 1v6h4V4H4Z"/>
                <path d="M1 2a1 1 0 0 1 1-1h4.5a.5.5 0 0 1 0 1H2v7.5a.5.5 0 0 1-1 0V2Z"/>
            </svg>
            Copy
        `;

        // Position the button absolutely in the top-right corner
        (this.element as HTMLElement).style.position = "relative";
        this.element.appendChild(copyButton);
        console.log('Copy button created and added:', copyButton);
    }

    /**
     * Copies the code content to the clipboard
     */
    copy() {
        const codeContent = this.getCodeContent();
        
        if (navigator.clipboard && window.isSecureContext) {
            // Use the modern clipboard API
            navigator.clipboard.writeText(codeContent).then(() => {
                this.showCopyFeedback();
            }).catch(() => {
                this.fallbackCopy(codeContent);
            });
        } else {
            // Fallback for older browsers or non-secure contexts
            this.fallbackCopy(codeContent);
        }
    }

    /**
     * Gets the text content of the code block, excluding line numbers
     */
    private getCodeContent(): string {
        // If there's a specific code target, use that
        try {
            return this.codeTarget.textContent || "";
        } catch {
            // No specific code target, get content from the main element
        }

        // Otherwise, get all text content from the element, but exclude line numbers
        const lineNumbers = this.element.querySelector(".s-code-block--line-numbers");
        if (lineNumbers) {
            // Clone the element and remove line numbers for clean text extraction
            const clone = this.element.cloneNode(true) as HTMLElement;
            const lineNumbersClone = clone.querySelector(".s-code-block--line-numbers");
            if (lineNumbersClone) {
                lineNumbersClone.remove();
            }
            return clone.textContent?.trim() || "";
        }

        return this.element.textContent?.trim() || "";
    }

    /**
     * Fallback copy method for older browsers
     */
    private fallbackCopy(text: string) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand("copy");
            this.showCopyFeedback();
        } catch (err) {
            console.error("Failed to copy text:", err);
        } finally {
            document.body.removeChild(textArea);
        }
    }

    /**
     * Shows visual feedback that the copy operation succeeded
     */
    private showCopyFeedback() {
        const originalContent = this.copyButtonTarget.innerHTML;
        
        // Update button to show success state
        this.copyButtonTarget.innerHTML = `
            <svg aria-hidden="true" class="svg-icon iconCheckmark" width="14" height="14" viewBox="0 0 14 14">
                <path d="M13 3.5 5.5 11 1 6.5l1-1L5.5 9 12 2.5l1 1Z"/>
            </svg>
            Copied!
        `;
        
        // Reset after 2 seconds
        setTimeout(() => {
            this.copyButtonTarget.innerHTML = originalContent;
        }, 2000);
    }
}
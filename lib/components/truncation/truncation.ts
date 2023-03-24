import * as Stacks from "../../stacks";

/**
 * Truncates the element's content length while respecting the original markup.
 * 
 * @description
 * Useful when dealing with nested elements that can't be easily truncated with
 * pure CSS, like `<pre>` blocks.
 * 
 * Note that whitespace-only text nodes between elements are hard hard to predict and handle
 * correctly.
 * 
 * As such, off-by-a-few errors in the final length are to be expected
 * 
 * @example Turns
 * ``` html
 *         <div>
 *            <p>Here's a <a href="…">Truncation</a> example<p>
 *         </div>
 * ```
 * into
 * ``` html
 *         <div data-controller="s-truncation" data-s-truncation-length="15" data-s-truncation-truncated="true">
 *            <p>Here's a <a href="…">Trunc…</a><p>
 *         </div>
 * ```
 */
export class TruncationController extends Stacks.StacksController {
    static targets = [];

    /**
     * Content length desired
     */
    private maxLength: number | undefined;

    /**
     * Content length after the last truncation
     */
    private truncatedLength: number | undefined;

    /**
     * The document [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range)
     * encompassing the element to be truncated
     */
    private parentRange: Range | undefined;

    /**
     * A [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
     * containing the original, untruncated content
     */
    private originalContent: DocumentFragment | undefined;

    /**
     * A [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
     * containing the results of the last truncation
     */
    private truncatedContent: DocumentFragment | undefined;

    /**
     * [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) tracking changes to the parent element's sttributes
     */
    private attributeObserver!: MutationObserver;

    /**
     * Current truncation state
     */
    private isTruncated = false;

    /**
     * Sets up the truncator properties, configures the {@link attributeObserver}
     * to track changes to the desired maximum length, and truncates the content if necessary
     */
    initialize() {
        this.parentRange = document.createRange();
        this.parentRange.selectNodeContents(this.element);
        this.originalContent = this.parentRange.cloneContents();
        this._parseMaxLengthAttribute();

        // Track changes to the desired maximum length and triggers a new truncation if necessary
        const config = { attributes: true };
        this.attributeObserver = new MutationObserver(this._updateMaxLengthAndTruncate);
        this.attributeObserver.observe(this.element, config);

        // If we have a set maximum length shorter than current content, start truncating
        if (this.maxLength) {
            const originalCopy = (<HTMLElement>this.element).innerText;
            if (originalCopy.length >= this.maxLength && this.data.get("truncated") === "true") {
                this.truncate();
            }
        }

    }

    /**
     * Reads and validates the `length` data attribute for the controlled element
     */
    private _parseMaxLengthAttribute() {
        const maxLengthAttr = this.data.get("length");
        this.maxLength = undefined;

        if (maxLengthAttr) {
            const parsedMaxLength = parseInt(maxLengthAttr, 10);

            if (isNaN(parsedMaxLength)) {
                throw `[${this.data.getAttributeNameForKey("length")}] attribute is invalid: "${maxLengthAttr}"`;
            }

            this.maxLength = parsedMaxLength;
        }
    }

    /**
     * Handles changes to the controlled element observed by {@link attributeObserver}. If the length has changed and we're truncated, triggers a new truncation for the new length
     * @param mutationList The list of recent changes to the observed element
     */
    private _updateMaxLengthAndTruncate = (mutationList:MutationRecord[]) => {
        for (const mutation of mutationList) {
            if (mutation.type === "attributes" && mutation.attributeName == this.data.getAttributeNameForKey("length")) {
                this._parseMaxLengthAttribute();

                if (this.maxLength && this.isTruncated)
                {
                    this.truncate();
                }
            }
        }
    };

    /**
     * Truncates the content
     */
    truncate() {
        this._toggle(true);
    }

    /**
     * Restores the original content
     */
    restore() {
        this._toggle(false);
    }

    /**
     * Toggles element's copy between full length or its truncated version
     * @param shouldTruncate Optional parameter that forces truncation on the element or toggles it if left undefined
     */
    private _toggle(shouldTruncate?: boolean | undefined) {
        if (!this.maxLength || !this.parentRange || !this.originalContent) {
            return;
        }

        // figure out the current state, from either the instance property or the element attribute
        const currentlyTruncated = this.isTruncated ?? this.data.get("truncated") === "true";

        // If we changed the desired length, our last truncation results should be discarded
        if (this.truncatedLength != this.maxLength) {
            this.truncatedContent = undefined;
        }

        if (typeof shouldTruncate === "undefined") {
            shouldTruncate = !currentlyTruncated;
        } else if (shouldTruncate == currentlyTruncated && !(shouldTruncate && !this.truncatedContent)) {
            // if we're already at the desired state, do nothing
            return;
        }

        let toInsert = this.originalContent;

        if (shouldTruncate) {
            if (!this.truncatedContent) {
                let truncatedRange :Range;

                // We're retruncating and can't use the original parent range, because it's pointing to
                // truncated content. So copy the stored original content and set the range to that
                if (currentlyTruncated) {
                    truncatedRange = document.createRange();
                    const originalContentNode = document.importNode(this.originalContent, true);
                    truncatedRange.selectNodeContents(originalContentNode);
                } else {
                    truncatedRange = this.parentRange.cloneRange();
                }


                let totalLen = 0;
                let node = truncatedRange.startContainer.firstChild;
    
                // Go through each child node until we find the one that takes us over the desired length
                // Once it's found, truncates its content to comply with the max length and set the range
                // boundary to that element
                while (node) {
                    if (node.textContent) {
                        const trimmed = node.textContent.replace(/(^\s{2,}|\s{2,}$)/g, "");
    
                        if (totalLen + trimmed.length >= this.maxLength) {
                            if (node.nodeType == Node.TEXT_NODE) {
                                const truncatePosition = this.maxLength - totalLen - 1;
                                node.textContent = trimmed.substring(0, truncatePosition).trimEnd() + "…";
    
                                truncatedRange.setEndAfter(node);
                                break;
                            } else {
                                node = node.firstChild;
    
                                continue;
                            }
                        }
    
                        totalLen = totalLen + trimmed.length;
                    }
    
                    node = node.nextSibling;
                }

                // The range now encompasses all the elements that fit in the desired content
                // Make a copy of those nodes, to set as the new content for the parent element
                this.truncatedContent = truncatedRange.cloneContents();
                this.truncatedLength = this.maxLength;
            }

            toInsert = this.truncatedContent;
        }

        // Set's the controlled element's content and properties to reflect the desired truncation state
        this.data.set("truncated", shouldTruncate.toString());
        this.isTruncated = shouldTruncate;
        this.parentRange.deleteContents();

        const newContent = document.importNode(toInsert, true);
        this.parentRange.insertNode(newContent);
}
}

/**
 * Helper to manually truncate an s-truncation element via external JS
 * @param element the element the `data-controller="s-truncation"` attribute is on
 */
export function truncateContent(element: HTMLElement) {
    toggleTruncation(element, true);
}

/**
 * Helper to manually restore the original content of an s-truncation element via external JS
 * @param element the element the `data-controller="s-truncation"` attribute is on
 */
export function restoreContent(element: HTMLElement) {
    toggleTruncation(element, false);
}

/**
 * Helper to manually toggle truncation on an s-truncation element via external JS
 * @param element the element the `data-controller="s-truncation"` attribute is on
 * @param show whether to force a truncation or a restore of the element's content; toggles truncation if left undefined
 */
export function toggleTruncation(element: HTMLElement, truncate?: boolean | undefined) {
    const controller = Stacks.application.getControllerForElementAndIdentifier(
        element,
        "s-truncation"
    ) as TruncationController;

    if (!controller) {
        throw "Unable to get s-truncation controller from element";
    }

    truncate ? controller.truncate() : controller.restore();
}

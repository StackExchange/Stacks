namespace Stacks {

    /**
     * A token list similar to DOMTokenList used for manipulating whitespace separated attributes.
     * When this list is modified, the associated attribute will also be changed.
     */
    export class TokenList {

        private element: Element;
        private attribute: string; 

        constructor(element: Element, attribute: string) {
            this.element = element;
            this.attribute = attribute;
        }

        private get tokens() {
            return (this.element.getAttribute(this.attribute) || "").trim().split(/\s+/).filter(content => content.length > 0);
        }

        private set tokens(tokens) {
            this.element.setAttribute(this.attribute, tokens.join(" "));
        }

        /**
         * Adds a value to the token list if it does not already exist.
         * @param value The value to add
         */
        public add(value: string) {
            const tokens = this.tokens;
            if (!tokens.includes(value)) {
                tokens.push(value);
                this.tokens = tokens;
            }
        }

        /**
         * Removes a value from the token list if it exists.
         * @param value The value to remove
         */
        public remove(value: string) {
            const tokens = this.tokens;
            if (tokens.includes(value)) {
                this.tokens = tokens.filter(content => content != value);
            }
        }

        /**
         * Checks whether or not the token list contains the value.
         * @param value The value to check for
         */
        public contains(value: string) {
            return this.tokens.includes(value);
        }
    }

    /**
     * Gets a token list for an element's `data-controller` attribute
     * @param element An element
     */
    export function getControllerList(element: Element) {
        return new TokenList(element, "data-controller");
    }

    /**
     * Gets a token list for an element's `data-target` attribute
     * @param element An element
     */
    export function getTargetList(element: Element) {
        return new TokenList(element, "data-target");
    }

    /**
     * Gets a token list for an element's `data-action` attribute
     * @param element An element
     */
    export function getActionList(element: Element) {
        return new TokenList(element, "data-action");
    }
}

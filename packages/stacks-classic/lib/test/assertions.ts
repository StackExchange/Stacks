import { expect } from "@open-wc/testing";
import Color from "colorjs.io";

type AdditionalAssertion = {
    description: string;
    assertion: (node: HTMLElement) => Promise<void> | void;
};

// TODO: evaluate if we can do this check against all the components
// automatically instead of having to add the assertion manually
const WCAGNonTextContrast: AdditionalAssertion = {
    description:
        "should pass WCAG22 1.4.11 non-text-contrast success criterion (https://www.w3.org/TR/WCAG22/#non-text-contrast)",
    assertion: (node) => {
        const selectedNode = node.querySelector(".is-selected") as HTMLElement;
        const selectedNodeStyles = window.getComputedStyle(selectedNode);
        const bodyStyles = window.getComputedStyle(document.body);
        const bgBodyColor = new Color(
            bodyStyles.getPropertyValue("background-color")
        );
        const bgSelectedNodeColor = new Color(
            selectedNodeStyles.getPropertyValue("background-color")
        );

        // If background is transparent, check box-shadow or border for contrast
        let contrastColor = bgSelectedNodeColor;
        if (bgSelectedNodeColor.alpha === 0 || bgSelectedNodeColor.alpha < 0.01) {
            const boxShadow = selectedNodeStyles.getPropertyValue("box-shadow");
            const borderColor = selectedNodeStyles.getPropertyValue("border-color");
            
            // Extract color from box-shadow (color is always the last value in each shadow)
            if (boxShadow && boxShadow !== "none") {
                // Get the last shadow if multiple shadows exist (comma-separated)
                const lastShadow = boxShadow.split(",").pop()?.trim() || boxShadow.trim();
                // Match color patterns at the end: rgb/rgba/hsl/hsla functions, hex codes, or color names
                const colorMatch = lastShadow.match(/(rgba?|hsla?)\([^)]+\)|#[0-9a-f]{3,8}|\b\w+(?:-\w+)*\b(?=\s*$)/i);
                if (colorMatch) {
                    try {
                        contrastColor = new Color(colorMatch[0]);
                    } catch {
                        // If parsing fails, fall back to background color
                    }
                }
            } else if (borderColor && borderColor !== "transparent" && borderColor !== "currentColor") {
                try {
                    contrastColor = new Color(borderColor);
                } catch {
                    // If parsing fails, fall back to background color
                }
            }
        }

        // we are specifing WCAG21 because of colorjs.io API
        // WCAG21 and WCAG22 algoirthms are the same
        const WCAGcontrast = contrastColor.contrast(
            bgBodyColor,
            "WCAG21"
        );
        expect(WCAGcontrast).to.be.at.least(3);
    },
};

export type { AdditionalAssertion };
export { WCAGNonTextContrast };

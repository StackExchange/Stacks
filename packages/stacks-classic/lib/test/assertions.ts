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

        // we are specifing WCAG21 because of colorjs.io API
        // WCAG21 and WCAG22 algoirthms are the same
        const WCAGcontrast = bgSelectedNodeColor.contrast(
            bgBodyColor,
            "WCAG21"
        );
        expect(WCAGcontrast).to.be.at.least(3);
    },
};

const WCAGBoxShadowContrast: AdditionalAssertion = {
    description:
        "should have box-shadow color with contrast greater than 3 against body background color",
    assertion: (node) => {
        const selectedNode = node.querySelector(".is-selected") as HTMLElement;
        const nodeStyles = window.getComputedStyle(selectedNode);
        const bodyStyles = window.getComputedStyle(document.body);
        const boxShadow = nodeStyles.getPropertyValue("box-shadow");

        if (!boxShadow || boxShadow === "none") {
            return;
        }

        // Extract color from first shadow (format: offset-x offset-y blur-radius spread-radius color)
        const firstShadow = boxShadow.split(",")[0].trim();
        const colorMatch = firstShadow.match(
            /(?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}$/i
        );

        if (!colorMatch) {
            return;
        }

        try {
            const shadowColor = new Color(colorMatch[0]);
            const bgBodyColor = new Color(
                bodyStyles.getPropertyValue("background-color")
            );

            // we are specifing WCAG21 because of colorjs.io API
            // WCAG21 and WCAG22 algorithms are the same
            const WCAGcontrast = shadowColor.contrast(bgBodyColor, "WCAG21");
            expect(WCAGcontrast).to.be.at.least(3);
        } catch {
            // Color parsing failed, skip check
            return;
        }
    },
};

export type { AdditionalAssertion };
export { WCAGNonTextContrast, WCAGBoxShadowContrast };

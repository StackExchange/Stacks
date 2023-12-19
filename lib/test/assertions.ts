import { expect } from "@open-wc/testing";
import Color from "colorjs.io";
import type { AdditionalAssertion } from "./test-utils";

// TODO: evaluate if we can do this check against all the components
// automatically instead of having to add the assertion manually
export const WCAGNonTextContrast: AdditionalAssertion = {
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

        // we are specificng WCAG21 because of colorjs.io API
        // WCAG21 and WCAG22 algoirthms are the same
        const WCAGcontrast = bgSelectedNodeColor.contrast(
            bgBodyColor,
            "WCAG21"
        );
        expect(WCAGcontrast).to.be.at.least(3);
    },
};

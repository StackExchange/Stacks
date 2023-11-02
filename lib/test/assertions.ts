import { expect } from "@open-wc/testing";
import Color from "colorjs.io";
import type { AdditionalAssertion } from "./test-utils";

export const WCAGNonTextContrast: AdditionalAssertion = {
    description:
        "should pass WCAG22 1.4.11 non-text-contrast success criterion (https://www.w3.org/TR/WCAG22/#non-text-contrast)",
    assertion: (node) => {
        const selectedNode = node.querySelector(".is-selected") as HTMLElement;
        const selectedNodeStyles = window.getComputedStyle(selectedNode);
        const fgColor = new Color(selectedNodeStyles.getPropertyValue("color"));
        const bgColor = new Color(
            selectedNodeStyles.getPropertyValue("background-color")
        );

        const WCAGcontrast = fgColor.contrast(bgColor, "WCAG21");
        expect(WCAGcontrast).to.be.at.least(3);
    },
};

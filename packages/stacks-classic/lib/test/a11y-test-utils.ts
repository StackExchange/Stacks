import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import axe from "axe-core";
import registerAPCACheck from "apca-check";
import { generateTestVariations, type TestVariationArgs } from "./test-utils";
import type { AdditionalAssertion } from "./assertions";

type A11yTestArgs = TestVariationArgs & {
    /**
     * Additional assertions to run against the test element
     */
    additionalAssertions?: AdditionalAssertion[];
};

// register Stack APCA conformance threshold function
// see also https://stackoverflow.design/product/foundation/accessibility/#visual-accessibility
const customConformanceThresholdFn = (fontSize: string): number | null => {
    // if the font size is 32px or larger, we use a 45Lc threshold
    // otherwise, we use a 60Lc threshold
    return parseFloat(fontSize) >= 32 ? 45 : 60;
};
registerAPCACheck("custom", customConformanceThresholdFn);

const scheduleA11yTest = ({
    element,
    testid,
    theme,
    additionalAssertions = [],
}: {
    element: ReturnType<typeof html>;
    testid: string;
    theme: string[];
    additionalAssertions?: AdditionalAssertion[];
}) => {
    it(`a11y: ${testid} should be accessible`, async () => {
        await fixture(element);
        const el = screen.getByTestId(testid);

        document.body.className = "";

        if (theme?.length) {
            const prefixedThemes = theme.map((t) => `theme-${t}`);
            document.body.classList.add(...prefixedThemes);
        }

        const highcontrast = theme?.includes("highcontrast");

        axe.configure({
            rules: [
                // for non-high contrast, we disable WCAG 2.1 AA (4.5:1)
                // and use a Stacks-specific APCA custom level instead
                { id: "color-contrast", enabled: false },
                {
                    id: "color-contrast-apca-custom",
                    enabled: !highcontrast,
                },
                // for high contrast, we check against WCAG 2.1 AAA (7:1)
                { id: "color-contrast-enhanced", enabled: highcontrast },
            ],
        });

        await expect(el).to.be.accessible();
        el.remove();
    });

    additionalAssertions.forEach((assertion) => {
        it(`a11y: ${testid} ${assertion.description}`, async () => {
            await fixture(element);
            const el = screen.getByTestId(testid);
            await assertion.assertion(el);
            el.remove();
        });
    });
};

const runA11yTests = (args: A11yTestArgs) => {
    const testVariations = generateTestVariations(args);
    testVariations.forEach((variation) => {
        if (variation.skipped) {
            it.skip(`a11y: ${variation.testid} (skipped)`, () => {
                return;
            });
            return;
        }

        scheduleA11yTest({
            ...variation,
            additionalAssertions: args.additionalAssertions,
        });
    });
};

export type { AdditionalAssertion };
export { runA11yTests };

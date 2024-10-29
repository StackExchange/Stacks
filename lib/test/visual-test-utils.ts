import { html, fixture } from "@open-wc/testing";
import { visualDiff } from "@web/test-runner-visual-regression";
import { screen } from "@testing-library/dom";
import { generateTestVariations, type TestVariationArgs } from "./test-utils";

type VisualTestArgs = TestVariationArgs;

const scheduleVisualTest = ({
    element,
    testid,
    theme,
}: {
    element: ReturnType<typeof html>;
    testid: string;
    theme: string[];
}) => {
    it(`visual: ${testid} should not introduce visual regressions`, async () => {
        document.body.className = "";

        if (theme?.length) {
            const prefixedThemes = theme.map((t) => `theme-${t}`);
            document.body.classList.add(...prefixedThemes);
        }

        let retryAttempts = 3;

        do {
            await fixture(element);
            const el = screen.getByTestId(testid);
            try {
                await (
                    visualDiff as (
                        element: HTMLElement,
                        name: string
                    ) => Promise<void>
                )(el, testid);
                return;
            } catch (error) {
                const e = error as Error;
                // if the error is not a visual diff failure, retry
                // this is to prevent flaky tests due to snapshot capturing
                if (
                    retryAttempts > 0 &&
                    !e.message.includes("Visual diff failed.")
                ) {
                    retryAttempts--;
                    continue;
                } else {
                    throw e;
                }
            } finally {
                el.remove();
            }
        } while (retryAttempts > 0);
    });
};

const runVisualTests = (args: VisualTestArgs) => {
    const testVariations = generateTestVariations(args);
    testVariations.forEach(scheduleVisualTest);
};

export { runVisualTests };

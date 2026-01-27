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
        let lastError: Error | null = null;

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
                lastError = e;
                // if the error is a visual diff failure, fail immediately
                if (e.message.includes("Visual diff failed.")) {
                    throw e;
                }
                // otherwise retry (to prevent flaky tests due to snapshot capturing)
                retryAttempts--;
            } finally {
                el.remove();
            }
        } while (retryAttempts > 0);

        // If we exhausted all retries without success, throw the last error
        if (lastError) {
            throw lastError;
        }
    });
};

const runVisualTests = (args: VisualTestArgs) => {
    const testVariations = generateTestVariations(args);
    testVariations.forEach(scheduleVisualTest);
};

const replaceHtml = (componentTemplateResult: unknown, textToReplace: string, replacementHtml: string) => {
    var component = (componentTemplateResult as any);
    if (!Array.isArray(component.strings) || !Array.isArray(component.values))
    {
        throw new Error("Expected Lit TemplateResult type");
    }

    // Replace placeholder with actual icon in the Lit template
    const originalStrings = (component as any).strings;
    const updatedStrings = originalStrings.map((str: string) =>
        str.replace(textToReplace, replacementHtml)
    );
    // Create a proper TemplateStringsArray with raw property
    Object.defineProperty(updatedStrings, 'raw', {
        value: updatedStrings.map((str: string) => str),
        enumerable: false
    });
    // Reconstruct the template with updated strings and original values
    const updatedComponent = {
        ...(component as any),
        strings: updatedStrings,
        values: (component as any).values
    };
    return updatedComponent;
};

export { runVisualTests, replaceHtml };

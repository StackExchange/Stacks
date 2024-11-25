import testArgs from "./button.test.setup";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("button", () => {
    // test disabled and non-disabled states
    [true, false].forEach((testDisabled) => {
        runA11yTests({
            ...testArgs(
                testDisabled
                    ? {
                          type: "button",
                          disabled: "true",
                      }
                    : undefined
            ),
            excludedTestids: [
                /^s-btn-(?=.*unset).*badge$/, // s-btn with badge and unset variant not supported
            ],
            skippedTestids: [
                // TODO resolve btn badge contrast issues
                // matches tests with a badge in light and dark modes
                /s-btn-(light|dark).*?badge/,
                // matches tests with a badge in highcontrast-light modes, excluding filled, danger, github, facebook, sm, or xs
                /s-btn-highcontrast-light-(?!.*(filled|danger|github|facebook|sm|xs)).*?badge/,
                // matches tests with a badge in highcontrast-light modes, are muted and/or outlined, and are sm or xs
                /s-btn-highcontrast-light-(?:muted-outlined-|muted-|outlined-)?(?:sm|xs).*?badge/,
            ],
        });
    });
});

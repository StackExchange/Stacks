import { defaultOptions, runComponentTests } from "../../test/test-utils";
import highlightedFixtures from "./code-block.fixtures";
import "../../index";

describe("code block", () => {
    Object.keys(highlightedFixtures).forEach((language) => {
        runComponentTests({
            type: "a11y",
            tag: "pre",
            baseClass: `s-code-block language-${language}`,
            children: {
                default: highlightedFixtures[language],
            },
            options: {
                ...defaultOptions,
                includeNullModifier: false,
            },
            attributes: {
                tabindex: "0",
            },
            // TODO revisit these skipped test ids
            skippedTestids: [
                /s-code-block-language-(html|css|javascript)-dark/,
                /s-code-block-language-html-highcontrast-(light|dark)/,
                "s-code-block-language-javascript-highcontrast-light",
            ],
        });
    });
});

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
            // TODO new colors should resolve this issue
            skippedTestids: [
                "s-code-block-language-html-light",
                "s-code-block-language-html-highcontrast-light",
                "s-code-block-language-html-highcontrast-dark",
                "s-code-block-language-html-dark",
                "s-code-block-language-css-dark",
                "s-code-block-language-javascript-dark",
                "s-code-block-language-javascript-highcontrast-light",
            ],
        });
    });
});

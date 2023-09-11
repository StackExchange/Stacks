import { defaultOptions, runComponentTests } from "../../test/test-utils";
import testHTML from "./code-block-test-html";
import type { Language } from "./code-block-test-html";
import "../../index";

// TODO should we test this many languages? More? Fewer?
const languages: Language[] = ["css", "html", "javascript"];

describe("code block", () => {
    languages.forEach((language: Language) => {
        runComponentTests({
            type: "a11y",
            tag: "pre",
            baseClass: `s-code-block language-${language}`,
            children: {
                default: testHTML[language],
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

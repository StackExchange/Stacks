import { defaultOptions, runComponentTests } from "../../test/test-utils";
import testHTML from "./code-block-test-html";
import type { Language } from "./code-block-test-html";
import "../../index";

// TODO should we test this many languages? More? Fewer?
const languages: Language[] = ["css", "html", "javascript"];

describe("code block", () => {
    languages.forEach((language: Language) => {
        runComponentTests({
            type: "visual",
            tag: "pre",
            baseClass: `s-code-block language-${language}`,
            children: {
                default: testHTML[language],
            },
            options: {
                ...defaultOptions,
                includeNullModifier: false,
            },
        });
    });
});

import { defaultOptions, runComponentTests } from "../../test/test-utils";
import highlightedFixtures from "./code-block.fixtures";
import "../../index";

describe("code block", () => {
    Object.keys(highlightedFixtures).forEach((language) => {
        runComponentTests({
            type: "visual",
            tag: "pre",
            baseClass: `s-code-block language-${language}`,
            children: {
                default: highlightedFixtures[language],
            },
            options: {
                ...defaultOptions,
                includeNullModifier: false,
            },
        });
    });
});

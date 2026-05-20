import { runVisualTests } from "../../test/visual-test-utils";
import highlightedFixtures from "./code-block.fixtures";
import "../../index";

describe("code block", () => {
    Object.keys(highlightedFixtures).forEach((language) => {
        runVisualTests({
            tag: "pre",
            baseClass: `s-code-block language-${language}`,
            children: {
                default: highlightedFixtures[language],
            },
            options: {
                includeNullModifier: false,
            },
        });
    });
});

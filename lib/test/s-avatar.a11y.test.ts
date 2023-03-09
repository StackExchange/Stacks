import {
    runComponentTest,
    buildTestElement,
    getComponentTestVariations,
} from "../ts/test-utils";
import "../ts/index";

const getChild = (child) => {
    const srEl = `<span class="v-visible-sr">Stack Overflow</span>`;
    switch (child) {
        case "image":
            return `<img
                class="s-avatar--image"
                src="https://picsum.photos/48"
                alt="team logo"
            />${srEl}`;
        case "letter":
            return `<div
                class="s-avatar--letter"
                aria-hidden="true">
                    S
            </div>${srEl}`;
        default:
            return srEl;
    }
};

describe("s-avatar", () => {
    getComponentTestVariations({
        baseClass: "s-avatar",
        variants: ["24", "32", "48", "64", "96", "128"],
    }).forEach(({ testid, classes, theme }) => {
        ["", "image", "letter"].forEach((child) => {
            const currentTestId = child ? `${testid}-${child}` : testid;

            runComponentTest({
                element: buildTestElement({
                    attributes: {
                        class: classes,
                    },
                    children: getChild(child),
                    tag: "span",
                    testid: currentTestId,
                }),
                testid: currentTestId,
                theme,
                type: "a11y",
            });
        });
    });
});

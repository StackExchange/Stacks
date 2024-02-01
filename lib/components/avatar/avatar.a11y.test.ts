import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

const getChild = (child?: string): string => {
    const srEl = `<span class="v-visible-sr">Stack Overflow</span>`;
    switch (child) {
        case "image":
            return `<img
                class="s-avatar--image"
                src="https://picsum.photos/id/1/48"
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

describe("avatar", () => {
    runA11yTests({
        baseClass: "s-avatar",
        variants: ["24", "32", "48", "64", "96", "128"],
        children: {
            default: getChild(),
            image: getChild("image"),
            letter: getChild("letter"),
        },
        tag: "span",
    });
});

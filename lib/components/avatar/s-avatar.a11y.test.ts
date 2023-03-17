import { runComponentTests } from "./test-utils";
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
    runComponentTests({
        type: "a11y",
        baseClass: "s-avatar",
        variants: ["24", "32", "48", "64", "96", "128"],
        children: {
            default: getChild(""),
            image: getChild("image"),
            letter: getChild("letter"),
        },
        tag: "span",
    });
});

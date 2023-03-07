import { makeA11yTest, getTestVariations } from "../ts/test-utils";
import "../ts/index";

const getChild = (child) => {
    switch (child) {
        case "image":
            return `<img
                class="s-avatar--image"
                src="https://picsum.photos/48"
                alt="team logo"
            />`;
        case "letter":
            return `<div class="s-avatar--letter" aria-hidden="true">S</div>`;
        default:
            return "";
    }
};

describe("s-avatar", () => {
    getTestVariations({
        baseClass: "s-avatar",
        variants:["24", "32", "48", "64", "96", "128"],
    }).forEach(({testid, classes, theme}) => {
        ["", "image", "letter"].forEach((child) => {
            makeA11yTest({
                attributes: {
                    class: classes,
                },
                children: `
                    ${getChild(child)}
                    <span class="v-visible-sr">Stack Overflow</span>
                `,
                tag: "span",
                testid: child ? `${testid}-${child}` : testid,
                theme
            });
        });
    });
});

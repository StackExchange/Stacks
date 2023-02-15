import { buildTestid, makeTest } from "../ts/test-utils";
import "../ts/index";

// TODO abstract to a helper file… maybe create a helper function to test in all themes
const colorThemes = ["theme-dark", "theme-light"];
const baseThemes = ["", "theme-highcontrast"];

const avatarStyles = {
    sizes: ["24", "32", "48", "64", "96", "128"],
    children: ["image", "letter"],
};

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
}

describe("s-avatar", () => {
    // Test default, high contrast themes
    baseThemes.forEach((baseTheme) => {
        // Test light, dark theme
        colorThemes.forEach((colorTheme) => {
            const theme = [baseTheme, colorTheme].filter(Boolean);
            const testidBase = buildTestid(["s-avatar", ...theme]);

            // Test each size
            ["", ...avatarStyles.sizes].forEach((size) => {
                const sizeClasses = size ? ` s-avatar__${size}` : "";
                const classesSize = ` ${sizeClasses}`;
                const testidSize = buildTestid([testidBase, size]);

                // Test each size with each child
                ["", ...avatarStyles.children].forEach((child) => {
                    makeTest({
                        testid: buildTestid([testidSize, `with-${child}`]),
                        tag: "a",
                        theme,
                        attributes: {
                            class: `s-avatar${classesSize}`,
                            href: "#",
                        },
                        children: `
                            ${getChild(child)}
                            <span class="v-visible-sr">Stack Overflow</span>
                        `,
                    });
                });
            });
        });
    });
});

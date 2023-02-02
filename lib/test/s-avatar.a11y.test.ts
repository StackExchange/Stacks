import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import "../ts/index";

// TODO abstract to a helper file… maybe create a helper function to test in all themes
const colorThemes = ["theme-dark", "theme-light"];
const baseThemes = ["", "theme-highcontrast"];

const avatarStyles = {
    sizes: ["24", "32", "48", "64", "96", "128"],
    children: ["image", "letter"],
};

const makeTest = ({ testid, theme, classes, child = "" }) => {
    it(`a11y: ${testid} should be accessible`, async () => {
        await fixture(html`<a
            href="#"
            class="s-avatar${classes}"
            data-testid="${testid}"
        >
            <div
                class="${child === "letter" ? "s-avatar--letter" : "d-none"}"
                aria-hidden="true"
            >
                S
            </div>
            <img
                class="${child === "image" ? "s-avatar--image" : "d-none"}"
                src="https://picsum.photos/48"
                alt="team logo"
            />
            <span class="v-visible-sr">Stack Overflow</span>
        </a>`);

        document.body.className = "";
        document.body.classList.add(...theme);
        const avatar = screen.getByTestId(testid);
        // TODO add conditional option for high contrast mode to test against AAA
        await expect(avatar).to.be.accessible();
    });
};

// TODO move to test utils
const buildTestid = (arr) => arr.filter(Boolean).join("-");

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
                    const testidChildren = buildTestid([
                        testidSize,
                        `with-${child}`,
                    ]);

                    makeTest({
                        child,
                        classes: classesSize,
                        testid: testidChildren,
                        theme,
                    });
                });
            });
        });
    });
});

import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import "../ts/index";

// TODO abstract to a helper file…
// TODO reinstate "theme-dark" test once we add ability to skip tests or resolve dark mode contrast issues
// const colorThemes = ["theme-dark", "theme-light"];
const colorThemes = ["theme-light"];
const baseThemes = ["", "theme-highcontrast"];

const btnStyles = {
    variants: ["danger", "muted", "primary"],
    modifiers: ["filled", "outlined", "filled-outlined"],
    secondaryModifiers: ["dropdown", "icon"],
    globalModifiers: ["is-loading"],
    sizes: ["xs", "sm", "md"],
    resets: ["link", "unset"],
    social: ["facebook", "github", "google"],
    // TODO reinstate children test once we add ability to skip tests or resolve badge contrast issues
    // children: ["badge"],
};

const makeTest = ({ testid, theme, classes, child = "" }) => {
    it(`a11y: ${testid} should be accessible`, async () => {
        await fixture(html`<button
            class="s-btn${classes}"
            role="button"
            data-testid="${testid}"
        >
            Ask question
            <span class="${child === "badge" ? "s-btn--badge" : "d-none"}">
                <span class="s-btn--number">198</span>
            </span>
        </button>`);

        document.body.className = "";
        document.body.classList.add(...theme);
        const button = screen.getByTestId(testid);
        // TODO add conditional option for high contrast mode to test against AAA
        await expect(button).to.be.accessible();
    });
};

const buildTestid = (arr) => arr.filter(Boolean).join("-");

describe("s-btn", () => {
    // Test default, high contrast themes
    baseThemes.forEach((baseTheme) => {
        // Test light, dark theme
        colorThemes.forEach((colorTheme) => {
            const theme = [baseTheme, colorTheme].filter(Boolean);
            const testidBase = buildTestid(["s-btn", ...theme]);

            // Test each combination of base modifiers
            ["", ...btnStyles.modifiers].forEach((modifier) => {
                const modifierClasses = modifier
                    ? ` s-btn__${modifier.replace("-", " s-btn__")}`
                    : "";

                // Test each variant
                ["", ...btnStyles.variants].forEach((variant) => {
                    const variantClasses = variant ? ` s-btn__${variant}` : "";
                    const classesVariant = ` ${variantClasses}${modifierClasses}`;
                    const testidVariant = buildTestid([
                        testidBase,
                        variant,
                        modifier,
                    ]);

                    // Test each variant with each child
                    // TODO reinstate children test once we add ability to skip tests or resolve badge contrast issues
                    // [...btnStyles.children].forEach((child) => {
                    //     const testidChildren = `${testidVariant}${
                    //         child ? `-with-${child}` : ""
                    //     }`;
                    //     makeTest({
                    //         child,
                    //         classes: classesVariant,
                    //         testid: testidChildren,
                    //         theme,
                    //     });
                    // });

                    [
                        "", // Test no additional classes
                        ...btnStyles.sizes, // Test each size
                        ...btnStyles.resets, // Test each reset
                        ...btnStyles.social, // Test each social style
                    ].forEach((style) => {
                        const testidStyle = buildTestid([testidVariant, style]);
                        const classesStyle = `${classesVariant}${
                            style ? ` s-btn__${style}` : ""
                        }`;

                        makeTest({
                            classes: classesStyle,
                            testid: testidStyle,
                            theme,
                        });
                    });

                    // Test each globalModifier
                    [...btnStyles.globalModifiers].forEach((globalModifier) => {
                        const testidGlobal = buildTestid([
                            testidVariant,
                            globalModifier,
                        ]);
                        const classesGlobal = `${classesVariant}${
                            globalModifier ? ` ${globalModifier}` : ""
                        }`;

                        makeTest({
                            classes: classesGlobal,
                            testid: testidGlobal,
                            theme,
                        });
                    });
                });
            });
        });
    });
});

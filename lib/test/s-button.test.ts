import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import "../ts/index";

// TODO abstract to a helper file… maybe create a helper function to test in all themes
const colorThemes = ["theme-dark", "theme-light"];
const baseThemes = ["", "theme-highcontrast"];

const btnStyles = {
    variants: ["danger", "muted", "primary"],
    modifiers: ["filled", "outlined"],
    secondaryModifiers: ["dropdown", "icon"],
    globalModifiers: ["is-loading"],
    sizes: ["xs", "sm", "md"],
    resets: ["link", "unset"],
    social: ["facebook", "github", "google"],
    children: ["badge"],
};

const modifierCombos = [
    ...btnStyles.modifiers,
    btnStyles.modifiers.flatMap((v, i) => {
        btnStyles.modifiers.slice(i + 1).map((w) => v + " " + w);
    }),
];

const makeTest = ({ testid, theme, classes, child = "" }) => {
    it(`a11y: ${testid} styles in should be accessible`, async () => {
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

describe("s-btn", () => {
    // Test default, high contrast themes
    baseThemes.forEach((baseTheme) => {
        // Test light, dark theme
        colorThemes.forEach((colorTheme) => {
            const testidBase = `s-btn-${
                baseTheme ? `${baseTheme}-` : ""
            }${colorTheme}`;
            const theme = [baseTheme, colorTheme].filter(Boolean);

            // Test each combination of base modifiers
            ["", ...modifierCombos].forEach((modifier) => {
                const castModifier = <string>modifier;
                const testidModifier = castModifier
                    ? `-${castModifier.replace(" ", "-")}`
                    : "";
                const modifierClasses = castModifier
                    ? ` s-btn__${castModifier.replace(" ", " s-btn__")}`
                    : "";

                // Test each variant
                ["", ...btnStyles.variants].forEach((variant) => {
                    const variantClasses = variant ? ` s-btn__${variant}` : "";
                    const classesVariant = ` ${variantClasses}${modifierClasses}`;
                    const testidVariant = `${testidBase}-${variant}${testidModifier}`;

                    // Test each variant with each child
                    [...btnStyles.children].forEach((child) => {
                        const testidChildren = `${testidVariant}${
                            child ? `-with-${child}` : ""
                        }`;
                        makeTest({
                            child,
                            classes: classesVariant,
                            testid: testidChildren,
                            theme,
                        });
                    });

                    [
                        "", // Test no additional classes
                        ...btnStyles.sizes, // Test each size
                        ...btnStyles.resets, // Test each reset
                        ...btnStyles.social, // Test each social style
                    ].forEach((style) => {
                        const testidStyle = `${testidVariant}${
                            style ? `-${style}` : ""
                        }`;
                        const classesStyle = `${classesVariant}${
                            style ? ` s-btn__${style}` : ""
                        }}`;

                        makeTest({
                            classes: classesStyle,
                            testid: testidStyle,
                            theme,
                        });
                    });

                    // Test each globalModifier
                    [...btnStyles.globalModifiers].forEach((globalModifier) => {
                        const testidGlobal = `${testidVariant}${
                            globalModifier ? `-${globalModifier}` : ""
                        }`;
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

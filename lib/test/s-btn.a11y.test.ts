import { buildTestid, makeTest } from "../ts/test-utils";
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
                        makeTest({
                            attributes: {
                                class: `s-btn${classesVariant}${
                                    style ? ` s-btn__${style}` : ""
                                }`,
                                role: "button",
                            },
                            children: "Ask question",
                            tag: "button",
                            testid: buildTestid([testidVariant, style]),
                            theme,
                        });
                    });

                    // Test each globalModifier
                    [...btnStyles.globalModifiers].forEach((globalModifier) => {
                        makeTest({
                            attributes: {
                                class: `s-btn${classesVariant}${
                                    globalModifier ? ` ${globalModifier}` : ""
                                }`,
                                role: "button",
                            },
                            children: "Ask question",
                            tag: "button",
                            testid: buildTestid([testidVariant, globalModifier]),
                            theme,
                        });
                    });
                });
            });
        });
    });
});

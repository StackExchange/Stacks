import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import "../ts/index";

const colorThemes = ["theme-dark", "theme-light"];
const baseThemes = ["", "theme-highcontrast"];

const btnStyles = {
    variants: ["danger", "muted", "primary"],
    modifiers: ["filled", "outlined", "dropdown", "icon"],
    sizes: ["xs", "sm", "md"],
    resets: ["link", "unset"],
    social: ["facebook", "github", "google"],
};

const makeTest = ({ testid, theme, classes }) => {
    it(`a11y: ${classes} styles in ${theme.join(
        " + "
    )} should be accessible`, async () => {
        await fixture(html`<button
            class="s-btn ${classes}"
            role="button"
            data-testid="${testid}"
        >
            Ask question
        </button>`);

        document.body.className = "";
        document.body.classList.add(...theme);
        const button = screen.getByTestId(testid);
        // TODO add conditional option for high contrast mode to test against AAA
        await expect(button).to.be.accessible();
    });
};

describe("s-btn", () => {
    // Test s-btn in each theme
    baseThemes.forEach((baseTheme) => {
        colorThemes.forEach((colorTheme) => {
            const baseTestid = `s-btn-${baseTheme ? `${baseTheme}-` : ""
                }${colorTheme}`;
            const theme = [baseTheme, colorTheme].filter(Boolean);

            // Test each s-btn variant
            btnStyles.variants.forEach((variant) => {
                const testid = `${baseTestid}-${variant}`;
                makeTest({
                    testid,
                    theme,
                    classes: `s-btn__${variant}`,
                });

                // Test each s-btn variant with each (standard) modifier
                btnStyles.modifiers.forEach((modifier) => {
                    const testid = `${baseTestid}-${variant}-${modifier}`;
                    makeTest({
                        testid,
                        theme,
                        classes: `s-btn__${variant} s-btn__${modifier}`,
                    });
                });
            });

            // Test each standalone s-btn style
            [
                ...btnStyles.modifiers,
                ...btnStyles.sizes,
                ...btnStyles.resets,
                ...btnStyles.social,
            ].forEach((style) => {
                const testid = `${baseTestid}-${style}`;
                makeTest({
                    testid,
                    theme,
                    classes: `s-btn__primary s-btn__${style}`,
                });
            });

            // TODO test with child elements
            // badge
            // number
            // radio
            // &.is-loading
            // with child icon?
        });
    });

    // Add tests for .s-btn-group
});

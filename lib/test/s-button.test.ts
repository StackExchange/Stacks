import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import "../ts/index";

const themes = ["theme-dark", "theme-light", "theme-highcontrast"];

const btnStyles = {
    variants: ["danger", "muted", "primary"],
    modifiers: ["filled", "outlined", "dropdown", "icon"],
    sizes: ["xs", "sm", "md"],
    resets: ["link", "unset"],
    social: ["facebook", "github", "google"],
};

// TODO use theme class on the body of the fixture
const generateBtn = ({ theme = "", classes = "", testid }) => {
    return html`<button
        class="s-btn ${classes}"
        role="button"
        data-testid="${testid}"
    >
        Ask question
    </button>`;
};

describe("s-btn", () => {
    // Test s-btn in each theme
    // TODO get that theme class on the body of the fixture
    themes.forEach((theme) => {
        // Test each s-btn variant
        btnStyles.variants.forEach((variant) => {
            const testid = `s-btn-${theme}-${variant}`;
            it(`a11y: base ${variant} styles in ${theme} mode should be accessible`, async () => {
                await fixture(
                    generateBtn({
                        theme,
                        testid,
                        classes: `s-btn__${variant}`,
                    })
                );
                const button = screen.getByTestId(testid);
                // TODO add conditional option for high contrast mode to test against AAA
                await expect(button).to.be.accessible();
            });

            // Test each s-btn variant with each (standard) modifier
            btnStyles.modifiers.forEach((modifier) => {
                const testid = `s-btn-${theme}-${variant}-${modifier}`;
                it(`a11y: ${variant} + ${modifier} styles in ${theme} mode should be accessible`, async () => {
                    await fixture(
                        generateBtn({
                            theme,
                            testid,
                            classes: `s-btn__${variant} s-btn__${modifier}`,
                        })
                    );
                    const button = screen.getByTestId(testid);
                    // TODO add conditional option for high contrast mode to test against AAA
                    await expect(button).to.be.accessible();
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
            const testid = `s-btn-${theme}-${style}`;
            it(`a11y: primary + ${style} styles in ${theme} mode should be accessible`, async () => {
                await fixture(
                    generateBtn({
                        theme,
                        testid,
                        classes: `s-btn__primary s-btn__${style}`,
                    })
                );
                const button = screen.getByTestId(testid);
                // TODO add conditional option for high contrast mode to test against AAA
                await expect(button).to.be.accessible();
            });
        });

        // TODO test with child elements
        // badge
        // number
        // radio
        // &.is-loading
        // with child icon?
    });

    // Add tests for .s-btn-group
});

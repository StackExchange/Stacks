import testArgs from "./button.test.setup";
import { runA11yTests } from "../../test/a11y-test-utils";
import { expect, fixture, html } from "@open-wc/testing";
import { resetMouse, sendMouse } from "@web/test-runner-commands";
import axe from "axe-core";
import Color from "colorjs.io";
import "../../index";

describe("button", () => {
    runA11yTests({
        ...testArgs,
        excludedTestids: [
            /^s-btn-(?=.*unset).*badge$/, // s-btn with badge and unset variant not supported
        ],
    });

    [
        "theme-light",
        "theme-dark",
        "theme-light theme-highcontrast",
        "theme-dark theme-highcontrast",
    ].forEach((theme) => {
        it(`measures ordinary and selected backgrounds in ${theme}, including hover`, async () => {
            const originalTheme = document.body.className;
            try {
                document.body.className = theme;
                const el = await fixture<HTMLElement>(html`
                    <div class="bg-white p16 d-flex fd-column ai-start g8">
                        <button class="s-btn" type="button">
                            <span>Ordinary</span>
                        </button>
                        ${[
                            "",
                            "s-btn__danger",
                            "s-btn__featured",
                            "s-btn__tonal",
                            "s-btn__clear",
                            "s-btn__danger s-btn__clear",
                        ].map(
                            (variant) => html`
                                <button
                                    class="s-btn is-selected ${variant}"
                                    type="button"
                                    aria-pressed="true"
                                >
                                    <span>Selected</span>
                                </button>
                            `
                        )}
                        <input
                            class="s-btn--radio"
                            id="selected-radio"
                            type="radio"
                            checked
                        />
                        <label class="s-btn" for="selected-radio"
                            ><span>Selected radio</span></label
                        >
                    </div>
                `);
                for (const hovered of [false, true]) {
                    for (const button of el.querySelectorAll<HTMLElement>(
                        ".s-btn"
                    )) {
                        if (hovered) {
                            const before = getComputedStyle(
                                button,
                                "::before"
                            ).backgroundImage;
                            const { x, y, width, height } =
                                button.getBoundingClientRect();
                            await sendMouse({
                                type: "move",
                                position: [
                                    Math.round(x + width / 2),
                                    Math.round(y + height / 2),
                                ],
                            });
                            if (button.matches("label")) {
                                expect(
                                    getComputedStyle(button, "::before")
                                        .backgroundImage
                                ).not.to.equal(before);
                            }
                        }
                        expect(
                            getComputedStyle(button).backgroundImage
                        ).to.equal("none");
                        const rule = "color-contrast-apca-custom";
                        const results = await axe.run(button, {
                            runOnly: [rule],
                            rules: { [rule]: { enabled: true } },
                        });
                        expect(results.incomplete).to.be.empty;
                        expect(results.violations).to.be.empty;
                        expect(results.passes).to.have.lengthOf(1);
                        expect(results.passes[0].nodes).to.have.lengthOf(1);

                        if (!button.matches(".is-selected, label")) {
                            continue;
                        }
                        // Axe measures the solid base, so check both visible gradient colors separately.
                        const stops = getComputedStyle(
                            button,
                            "::before"
                        ).backgroundImage.match(/(?:rgba?|color)\([^)]*\)/g);
                        expect(stops).to.have.lengthOf(4);
                        const foreground = new Color(
                            getComputedStyle(button).color
                        );
                        const highcontrast = theme.includes("highcontrast");
                        for (const stop of stops!.slice(0, 2)) {
                            const background = new Color(stop);
                            const contrast = Math.abs(
                                background.contrast(
                                    foreground,
                                    highcontrast ? "WCAG21" : "APCA"
                                )
                            );
                            expect(
                                contrast,
                                `${theme}: ${button.className} against ${stop}`
                            ).to.be.at.least(highcontrast ? 7 : 60);
                        }
                    }
                }
            } finally {
                document.body.className = originalTheme;
                await resetMouse();
            }
        });
    });
});

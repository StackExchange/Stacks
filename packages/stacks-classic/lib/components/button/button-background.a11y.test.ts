import { expect, fixture, html } from "@open-wc/testing";
import { sendMouse } from "@web/test-runner-commands";
import axe from "axe-core";
import "../../test/a11y-test-utils";
import "../../index";

const apcaRule = "color-contrast-apca-custom";
const themes = [
    "theme-light",
    "theme-dark",
    "theme-light theme-highcontrast",
    "theme-dark theme-highcontrast",
];

const hover = async (el: HTMLElement) => {
    const { x, y, width, height } = el.getBoundingClientRect();
    await sendMouse({
        type: "move",
        position: [Math.round(x + width / 2), Math.round(y + height / 2)],
    });
    expect(el.matches(":hover")).to.equal(true);
};

const measureContrast = (el: HTMLElement, rule: string) =>
    axe.run(el, {
        runOnly: { type: "rule", values: [rule] },
        rules: { [rule]: { enabled: true } },
    });

describe("button backgrounds", () => {
    let originalTheme: string;

    beforeEach(() => {
        originalTheme = document.body.className;
    });

    afterEach(async () => {
        document.body.className = originalTheme;
        await sendMouse({ type: "move", position: [0, 0] });
    });

    themes.forEach((theme) => {
        describe(theme, () => {
            beforeEach(() => {
                document.body.className = theme;
            });

            [
                "s-btn",
                "s-btn s-btn__danger",
                "s-btn s-btn__featured",
                "s-btn s-btn__tonal",
                "s-btn s-btn__clear",
                "s-btn s-btn__danger s-btn__clear",
            ].forEach((classes) => {
                [false, true].forEach((hovered) => {
                    it(`measures ${classes}${hovered ? " on hover" : ""}`, async () => {
                        const el = await fixture<HTMLElement>(html`
                            <div class="bg-white p16">
                                <button class=${classes} type="button">
                                    <span>Ask question</span>
                                </button>
                            </div>
                        `);
                        const button = el.querySelector("button")!;
                        if (hovered) {
                            await hover(button);
                        }

                        expect(
                            getComputedStyle(button).backgroundImage
                        ).to.equal("none");
                        const rule = theme.includes("highcontrast")
                            ? "color-contrast-enhanced"
                            : apcaRule;
                        const results = await measureContrast(el, rule);

                        // Absence of violations alone also accepts unmeasurable gradients.
                        expect(results.incomplete).to.be.empty;
                        expect(results.violations).to.be.empty;
                        expect(results.passes).to.have.lengthOf(1);
                        expect(results.passes[0].nodes).to.have.lengthOf(1);
                        if (rule === apcaRule) {
                            expect(
                                results.passes[0].nodes[0].all[0].data
                                    .apcaContrast
                            )
                                .to.be.a("number")
                                .and.greaterThan(0);
                        }
                    });
                });
            });

            ["s-btn__link", "s-btn__unset"].forEach((modifier) => {
                it(`keeps ${modifier} backgrounds transparent`, async () => {
                    const button = await fixture<HTMLButtonElement>(html`
                        <button class="s-btn ${modifier}" type="button">
                            Ask question
                        </button>
                    `);
                    for (const hovered of [false, true]) {
                        if (hovered) {
                            await hover(button);
                        }
                        const style = getComputedStyle(button);
                        expect(style.backgroundImage).to.equal("none");
                        expect(style.backgroundColor).to.equal(
                            "rgba(0, 0, 0, 0)"
                        );
                    }
                });
            });

            ["disabled", "aria-disabled", "fieldset"].forEach((kind) => {
                it(`preserves ${kind} backgrounds on hover`, async () => {
                    const el = await fixture<HTMLElement>(html`
                        <fieldset ?disabled=${kind === "fieldset"}>
                            <button
                                class="s-btn"
                                type="button"
                                ?disabled=${kind === "disabled"}
                                aria-disabled=${kind === "aria-disabled"}
                            >
                                Ask question
                            </button>
                        </fieldset>
                    `);
                    const button = el.querySelector("button")!;
                    const background = getComputedStyle(button).backgroundColor;
                    await hover(button);
                    expect(getComputedStyle(button).backgroundImage).to.equal(
                        "none"
                    );
                    expect(getComputedStyle(button).backgroundColor).to.equal(
                        background
                    );
                });
            });

            it("keeps disabled fieldset styles above checked radio hover styles", async () => {
                const el = await fixture<HTMLElement>(html`
                    <fieldset disabled>
                        <input
                            id="disabled-selected-button"
                            class="s-btn--radio"
                            type="radio"
                            checked
                        />
                        <label class="s-btn" for="disabled-selected-button">
                            Ask question
                        </label>
                    </fieldset>
                `);
                const button = el.querySelector<HTMLElement>(".s-btn")!;
                await hover(button);
                expect(getComputedStyle(button).backgroundImage).to.equal(
                    "none"
                );
            });
        });
    });
});

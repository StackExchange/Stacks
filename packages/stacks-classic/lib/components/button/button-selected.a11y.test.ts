import { expect, fixture, html } from "@open-wc/testing";
import {
    emulateMedia,
    resetMouse,
    sendKeys,
    sendMouse,
} from "@web/test-runner-commands";
import axe from "axe-core";
import Color from "colorjs.io";
import "../../test/a11y-test-utils";
import "../../index";

const themes = [
    "theme-light",
    "theme-dark",
    "theme-light theme-highcontrast",
    "theme-dark theme-highcontrast",
];
const variants = [
    "",
    "s-btn__danger",
    "s-btn__featured",
    "s-btn__tonal",
    "s-btn__clear",
    "s-btn__danger s-btn__clear",
];

const selectedFixture = (kind: string, variant = "") =>
    fixture<HTMLElement>(html`
        <div class="bg-white p16">
            ${
                kind === "radio"
                    ? html`
                          <input
                              id="selected-button"
                              class="s-btn--radio"
                              type="radio"
                              checked
                          />
                          <label class="s-btn ${variant}" for="selected-button"
                              ><span>Ask question</span></label
                          >
                      `
                    : html`
                          <button
                              class="s-btn is-selected ${variant}"
                              type="button"
                              aria-pressed="true"
                          >
                              <span>Ask question</span>
                          </button>
                      `
            }
        </div>
    `);

const moveMouse = async (el: HTMLElement, type: "move" | "click" = "move") => {
    const { x, y, width, height } = el.getBoundingClientRect();
    await sendMouse({
        type,
        position: [Math.round(x + width / 2), Math.round(y + height / 2)],
    });
};

const measureBaseContrast = async (el: HTMLElement) => {
    // APCA measures the solid base. Axe's built-in WCAG rules detect the pseudo-element
    // and remain incomplete; checkDecorativeContrast verifies AAA against both colors instead.
    const rule = "color-contrast-apca-custom";
    const results = await axe.run(el, {
        runOnly: { type: "rule", values: [rule] },
        rules: { [rule]: { enabled: true } },
    });
    expect(results.incomplete).to.be.empty;
    expect(results.violations).to.be.empty;
    expect(results.passes).to.have.lengthOf(1);
    expect(results.passes[0].nodes).to.have.lengthOf(1);
};

const checkDecorativeContrast = (
    button: HTMLElement,
    highcontrast: boolean
) => {
    const style = getComputedStyle(button);
    const decoration = getComputedStyle(button, "::before");
    expect(style.backgroundImage).to.equal("none");
    expect(decoration.content).to.equal('""');
    expect(decoration.pointerEvents).to.equal("none");

    // Read the rendered colors, not the variables or the solid base that axe measures.
    // Computed gradients resolve color-mix() to rgb()/color(), including on WebKit.
    const stops = decoration.backgroundImage.match(/(?:rgba?|color)\([^)]*\)/g);
    expect(stops).to.have.lengthOf(4);
    expect(stops![0]).to.equal(stops![2]);
    expect(stops![1]).to.equal(stops![3]);
    const foreground = new Color(style.color);
    expect(foreground.alpha).to.equal(1);

    stops!.slice(0, 2).forEach((stop) => {
        const background = new Color(stop);
        expect(background.alpha).to.equal(1);
        const contrast = Math.abs(
            background.contrast(foreground, highcontrast ? "WCAG21" : "APCA")
        );
        const threshold = highcontrast
            ? 7
            : parseFloat(style.fontSize) >= 32
              ? 45
              : 60;
        expect(contrast, `${style.color} against ${stop}`).to.be.at.least(
            threshold
        );
    });
};

describe("selected button backgrounds", () => {
    let originalTheme: string;

    beforeEach(() => {
        originalTheme = document.body.className;
    });
    afterEach(async () => {
        document.body.className = originalTheme;
        await resetMouse();
    });

    themes.forEach((theme) => {
        describe(theme, () => {
            beforeEach(() => {
                document.body.className = theme;
            });

            ["button", "radio"].forEach((kind) => {
                variants.forEach((variant) => {
                    [false, true].forEach((hovered) => {
                        it(`measures both visible colors of ${kind} ${variant || "base"}${hovered ? " on hover" : ""}`, async () => {
                            const el = await selectedFixture(kind, variant);
                            const button =
                                el.querySelector<HTMLElement>(".s-btn")!;
                            if (hovered) {
                                await moveMouse(button);
                            }
                            const highcontrast = theme.includes("highcontrast");
                            await measureBaseContrast(el);
                            checkDecorativeContrast(button, highcontrast);
                        });
                    });
                });
            });

            it("rejects insufficient contrast in either decorative color", async () => {
                const el = await selectedFixture("button");
                const button = el.querySelector<HTMLElement>(".s-btn")!;
                const foreground = getComputedStyle(button).color;
                for (const property of [
                    "--_bu-bg-gradient-top",
                    "--_bu-bg-gradient-bottom",
                ]) {
                    button.style.setProperty(property, foreground);
                    expect(() =>
                        checkDecorativeContrast(
                            button,
                            theme.includes("highcontrast")
                        )
                    ).to.throw();
                    button.style.removeProperty(property);
                }
            });

            it("preserves custom checked-radio hover colors", async () => {
                const el = await selectedFixture("radio");
                const button = el.querySelector<HTMLElement>(".s-btn")!;
                button.style.setProperty(
                    "--theme-button-hover-color",
                    "rgb(0, 128, 0)"
                );
                button.style.setProperty(
                    "--theme-button-hover-background-color",
                    "rgb(200, 220, 240)"
                );
                const background = getComputedStyle(
                    button,
                    "::before"
                ).backgroundImage;
                await moveMouse(button);
                expect(getComputedStyle(button).color).to.equal(
                    "rgb(0, 128, 0)"
                );
                expect(getComputedStyle(button).backgroundColor).to.equal(
                    "rgb(200, 220, 240)"
                );
                expect(getComputedStyle(button, "::before").backgroundImage)
                    .to.contain("rgb(200, 220, 240)")
                    .and.not.equal(background);
            });

            ["baw0", "baw1", "baw2", "baw3", "btw0 brw2 bbw3 blw1"].forEach(
                (borders) => {
                    it(`keeps decoration inside ${borders} borders`, async () => {
                        const el = await selectedFixture("button", borders);
                        const button = el.querySelector<HTMLElement>(".s-btn")!;
                        const style = getComputedStyle(button);
                        const decoration = getComputedStyle(button, "::before");
                        const bounds = button.getBoundingClientRect();
                        for (const edge of [
                            "top",
                            "right",
                            "bottom",
                            "left",
                        ] as const) {
                            expect(decoration[edge]).to.equal("0px");
                        }
                        expect(decoration.borderWidth).to.equal("0px");
                        expect(parseFloat(decoration.width)).to.be.closeTo(
                            bounds.width -
                                parseFloat(style.borderLeftWidth) -
                                parseFloat(style.borderRightWidth),
                            0.1
                        );
                        expect(parseFloat(decoration.height)).to.be.closeTo(
                            bounds.height -
                                parseFloat(style.borderTopWidth) -
                                parseFloat(style.borderBottomWidth),
                            0.1
                        );
                    });
                }
            );

            ["disabled", "aria-disabled", "fieldset"].forEach((kind) => {
                it(`does not decorate ${kind} selected buttons`, async () => {
                    const el = await fixture<HTMLElement>(html`
                        <fieldset ?disabled=${kind === "fieldset"}>
                            <button
                                class="s-btn is-selected"
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
                    for (const hovered of [false, true]) {
                        if (hovered) {
                            await moveMouse(button);
                        }
                        expect(
                            getComputedStyle(button).backgroundImage
                        ).to.equal("none");
                        expect(
                            getComputedStyle(button).backgroundColor
                        ).to.equal(background);
                        expect(
                            getComputedStyle(button, "::before").content
                        ).to.equal("none");
                    }
                });
            });

            it("removes checked-radio decoration when disabled fieldset hover styles apply", async () => {
                const el = await fixture<HTMLElement>(html`
                    <fieldset disabled>
                        <input
                            id="selected-disabled-radio"
                            class="s-btn--radio"
                            type="radio"
                            checked
                        />
                        <label class="s-btn" for="selected-disabled-radio"
                            >Ask question</label
                        >
                    </fieldset>
                `);
                const button = el.querySelector<HTMLElement>(".s-btn")!;
                await moveMouse(button);
                expect(getComputedStyle(button, "::before").content).to.equal(
                    "none"
                );
                expect(getComputedStyle(button).backgroundImage).to.equal(
                    "none"
                );
            });

            it("allows pointer and keyboard activation while selected and after deselection", async () => {
                const el = await selectedFixture("button");
                const button = el.querySelector<HTMLButtonElement>("button")!;
                let activations = 0;
                button.addEventListener("click", () => {
                    activations++;
                    button.classList.toggle("is-selected");
                    button.setAttribute(
                        "aria-pressed",
                        String(button.classList.contains("is-selected"))
                    );
                });
                await moveMouse(button, "click");
                expect(activations).to.equal(1);
                expect(getComputedStyle(button, "::before").content).to.equal(
                    "none"
                );
                // WebKit does not focus native buttons on pointer activation.
                button.focus();
                expect(document.activeElement).to.equal(button);
                await sendKeys({ press: "Space" });
                expect(activations).to.equal(2);
                expect(getComputedStyle(button, "::before").content).to.equal(
                    '""'
                );
            });

            it("selects a radio with the keyboard and by clicking its decorated label", async () => {
                const el = await selectedFixture("radio");
                const input = el.querySelector<HTMLInputElement>("input")!;
                const label = el.querySelector<HTMLElement>("label")!;
                input.checked = false;
                input.focus();
                await sendKeys({ press: "Space" });
                expect(input.checked).to.equal(true);
                expect(getComputedStyle(label, "::before").content).to.equal(
                    '""'
                );
                input.checked = false;
                await moveMouse(label, "click");
                expect(input.checked).to.equal(true);
                expect(getComputedStyle(label, "::before").content).to.equal(
                    '""'
                );
            });
        });
    });

    it("lets forced-colors mode paint selected buttons without decoration", async function () {
        // Playwright does not support forced-colors emulation in WebKit.
        if (
            navigator.userAgent.includes("AppleWebKit") &&
            !navigator.userAgent.includes("Chrome")
        ) {
            this.skip();
        }
        try {
            await emulateMedia({ forcedColors: "active" });
            const el = await selectedFixture("button");
            const button = el.querySelector("button")!;
            expect(matchMedia("(forced-colors: active)").matches).to.equal(
                true
            );
            expect(getComputedStyle(button, "::before").display).to.equal(
                "none"
            );
            expect(getComputedStyle(button).backgroundImage).to.equal("none");
        } finally {
            await emulateMedia({ forcedColors: "none" });
        }
    });
});

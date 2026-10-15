import { fixture, html } from "@open-wc/testing";
import { resetMouse, sendKeys, sendMouse } from "@web/test-runner-commands";
import { visualDiff } from "@web/test-runner-visual-regression";
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

describe("selected button visuals", () => {
    let originalTheme: string;
    beforeEach(() => {
        originalTheme = document.body.className;
    });
    afterEach(async () => {
        document.body.className = originalTheme;
        await resetMouse();
    });

    themes.forEach((theme) => {
        ["rest", "hover-radio", "focus"].forEach((state) => {
            it(`preserves ${theme} selected backgrounds on ${state}`, async () => {
                document.body.className = theme;
                const el = await fixture<HTMLElement>(html`
                    <div class="bg-white p16 d-flex fd-column g16">
                        ${variants.map(
                            (variant, i) => html`
                                <div class="d-flex ai-center g16">
                                    <button
                                        class="s-btn is-selected ${variant}"
                                        type="button"
                                        aria-pressed="true"
                                    >
                                        Selected
                                    </button>
                                    <button
                                        class="s-btn is-selected s-btn__dropdown ${variant}"
                                        type="button"
                                        aria-pressed="true"
                                    >
                                        Selected
                                        <span class="s-btn--badge"
                                            ><span class="s-btn--number"
                                                >198</span
                                            ></span
                                        >
                                    </button>
                                    <input
                                        id="selected-visual-radio-${i}"
                                        class="s-btn--radio"
                                        type="radio"
                                        checked
                                    />
                                    <label
                                        class="s-btn ${variant}"
                                        for="selected-visual-radio-${i}"
                                        >Selected radio</label
                                    >
                                    <button
                                        class="s-btn is-selected ${variant}"
                                        type="button"
                                        disabled
                                    >
                                        Disabled
                                    </button>
                                </div>
                            `
                        )}
                        <div class="d-flex ai-center g16">
                            ${[
                                "baw0",
                                "baw1",
                                "baw2",
                                "baw3",
                                "btw0 brw2 bbw3 blw1",
                            ].map(
                                (borders) => html`
                                    <button
                                        class="s-btn is-selected ${borders}"
                                        type="button"
                                        aria-pressed="true"
                                    >
                                        ${borders}
                                    </button>
                                `
                            )}
                        </div>
                        <div class="d-flex ai-center g16">
                            <button
                                class="s-btn is-selected wmn0 w128"
                                type="button"
                                aria-pressed="true"
                            >
                                Selected button with wrapped text
                            </button>
                            <button
                                class="s-btn is-selected"
                                type="button"
                                aria-pressed="true"
                            >
                                <div class="s-loader s-loader__sm">
                                    <div class="s-loader--sr-text">Loading</div>
                                </div>
                                Selected
                            </button>
                        </div>
                    </div>
                `);
                if (state === "hover-radio") {
                    const { x, y, width, height } = el
                        .querySelector("label")!
                        .getBoundingClientRect();
                    await sendMouse({
                        type: "move",
                        position: [
                            Math.round(x + width / 2),
                            Math.round(y + height / 2),
                        ],
                    });
                } else if (state === "focus") {
                    await sendKeys({ press: "Tab" });
                    if (document.activeElement !== el.querySelector("button")) {
                        throw new Error(
                            "Expected the first selected button to receive keyboard focus"
                        );
                    }
                }
                await (
                    visualDiff as (
                        element: HTMLElement,
                        name: string
                    ) => Promise<void>
                )(el, `s-btn-selected-${theme.split(" ").join("-")}-${state}`);
            });
        });
    });
});

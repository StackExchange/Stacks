import testArgs from "./button.test.setup";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";
import { html } from "@open-wc/testing";

describe("button", () => {
    runVisualTests({
        ...testArgs,
        template: ({ component, testid }) => html`
            <div
                class="bg-black-225 d-inline-flex ai-center jc-center hs1 ws2 p8"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
    });

    runVisualTests({
        baseClass: "s-btn-selected",
        template: ({ testid }) => html`
            <div class="bg-white p16 d-flex fw-wrap g8" data-testid="${testid}">
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
                            Selected
                        </button>
                    `
                )}
                <input
                    class="s-btn--radio"
                    id="selected-visual-radio"
                    type="radio"
                    checked
                />
                <label class="s-btn" for="selected-visual-radio"
                    >Selected radio</label
                >
            </div>
        `,
    });
});

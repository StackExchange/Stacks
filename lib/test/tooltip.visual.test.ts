import { html, fixture } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { visualDiff } from "@web/test-runner-visual-regression";
import "../ts/index";

const user = userEvent.setup();

describe("tooltip", () => {
    it("should not introduce visual regressions", async () => {
        const wrapper = await fixture(html`
            <div style="height: 100px; display: inline-block;">
                <button
                    class="s-btn s-btn__filled"
                    role="button"
                    data-controller="s-tooltip"
                    title="tooltip content"
                    data-s-tooltip-placement="bottom-start"
                >
                    Hover tooltip popover
                </button>
            </div>
        `);

        const trigger = screen.getByRole("button");
        await user.hover(trigger);
        await screen.findByRole("tooltip");

        await visualDiff(wrapper, "tooltip");
    });
});

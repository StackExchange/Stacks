import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";

const user = userEvent.setup();

describe("expandable-control", () => {
    it("should focus on expandable content only when expanded", async () => {
        const trigger = await fixture(html`
            <button
                data-controller="s-expandable-control"
                aria-expanded="false"
                aria-controls="expandable-example"
            >
                expandable trigger
            </button>
            <div class="s-expandable" id="expandable-example">
                <div class="s-expandable--content">
                    <button>inside expandable</button>
                </div>
            </div>
        `);

        // expandable is not expanded
        let expandableTrigger = screen.getByRole("button", {
            name: "expandable trigger",
            expanded: false,
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        expect(
            screen.queryByRole("button", {
                name: "inside expandable",
            })
        ).to.be.null;

        await userEvent.click(expandableTrigger);

        // expandable is now expanded
        expandableTrigger = screen.getByRole("button", {
            name: "expandable trigger",
            expanded: true,
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        expect(
            screen.getByRole("button", {
                name: "inside expandable",
            })
        ).to.be.visible;
    });
});

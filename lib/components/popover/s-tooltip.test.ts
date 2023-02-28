import { html, fixture, expect } from "@open-wc/testing";
import { screen, waitForElementToBeRemoved } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";

const user = userEvent.setup();

describe("s-tooltip", () => {
    it("should make the tooltip element visible on hover (after a delay)", async () => {
        const trigger = await fixture(html`
            <button
                class="s-btn s-btn__filled"
                role="button"
                data-controller="s-tooltip"
                title="tooltip content"
                data-s-tooltip-placement="bottom-start"
            >
                Hover tooltip popover
            </button>
        `);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        expect(screen.queryByRole("tooltip")).to.be.null;

        await user.hover(trigger);
        const tooltip = await screen.findByRole("tooltip");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        expect(tooltip).to.be.visible;

        await user.unhover(trigger);
        await waitForElementToBeRemoved(() => screen.queryByRole("tooltip"));
    });

    it("should not flicker when the host contains an SVG and the user hover on it", async () => {
        await fixture(html`
            <button
                class="s-btn"
                role="button"
                title="tooltip content"
                data-controller="s-tooltip"
                data-s-tooltip-placement="bottom-start"
            >
                <svg
                    data-testid="svg"
                    aria-hidden="true"
                    class="bg-red-500"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                ></svg>
                👈 Shouldn't flicker 🤷‍
            </button>
        `);
        const button = screen.getByRole("button");
        const svg = screen.getByTestId("svg");

        await user.hover(button);
        const tooltip = await screen.findByRole("tooltip");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        expect(tooltip).to.be.visible;

        await user.hover(svg);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        expect(tooltip).to.be.visible;
    });
});

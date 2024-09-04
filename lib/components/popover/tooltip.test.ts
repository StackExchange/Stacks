import { html, fixture, expect } from "@open-wc/testing";
import { screen, waitForElementToBeRemoved } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";

const user = userEvent.setup();

describe("tooltip", () => {
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

        expect(screen.queryByRole("tooltip")).to.be.null;

        await user.hover(trigger);
        const tooltip = await screen.findByRole("tooltip");
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
                    class="bg-red-400"
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
        expect(tooltip).to.be.visible;

        await user.hover(svg);
        expect(tooltip).to.be.visible;
    });

    // TODO write this test so it works
    it.skip("should not hide the tooltip if focus is moved to the tooltip", async () => {
        const tooltip = await fixture(html`
            <div
                class="s-popover s-popover__tooltip"
                id="tooltip-example"
                role="tooltip"
            >
                <div class="s-popover--arrow"></div>
                <div class="s-popover--content">
                    <a href="#">View more</a>
                </div>
            </div>
        `);

        const trigger = await fixture(html`
            <button
                class="s-btn s-btn__filled"
                role="button"
                aria-describedby="tooltip-example"
                data-controller="s-tooltip"
            >
                Hover tooltip popover
            </button>
        `);

        await user.tab();
        expect(tooltip).to.be.visible;
        await expect(document.activeElement).to.equal(trigger);

        const link = screen.getByRole("link");
        await expect(document.activeElement).to.be.equal(link);
        await user.tab();

        expect(tooltip).not.to.be.visible;
    });
});

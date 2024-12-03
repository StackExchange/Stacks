import { html, fixture, expect } from "@open-wc/testing";
import {
    screen,
    waitForElementToBeRemoved,
    waitFor,
} from "@testing-library/dom";
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

    it("should continue to show the tooltip if focus is moved to an element within the tooltip", async () => {
        await fixture(html`
            <button
                class="s-btn s-btn__filled"
                role="button"
                aria-describedby="tooltip-example"
                data-controller="s-tooltip"
            >
                Hover tooltip popover
            </button>
            <div
                class="s-popover s-popover__tooltip"
                id="tooltip-example"
                role="tooltip"
                data-testid="tooltip"
            >
                <div class="s-popover--arrow"></div>
                <div class="s-popover--content">
                    <a href="#" data-testid="link">View more</a>
                </div>
            </div>
        `);

        const tooltip = screen.getByTestId("tooltip");
        const link = screen.getByTestId("link");

        await user.tab();
        await waitFor(() => expect(tooltip).to.have.class("is-visible")); // wait for the tooltip to appear
        await user.tab(); // tab to nested link within tooltip
        expect(link).to.have.focus; // link within tooltip is focused
        expect(tooltip).to.be.visible; // link within tooltip is focused, tooltip is visible
    });

    it("should hide the tooltip if focus is moved to an element outside the tooltip and trigger", async () => {
        await fixture(html`
            <button
                class="s-btn s-btn__filled"
                role="button"
                aria-describedby="tooltip-example"
                data-controller="s-tooltip"
            >
                Hover tooltip popover
            </button>
            <div
                class="s-popover s-popover__tooltip"
                id="tooltip-example"
                role="tooltip"
                data-testid="tooltip"
            >
                <div class="s-popover--arrow"></div>
                <div class="s-popover--content">
                    <a href="#">View more</a>
                </div>
            </div>
            <button data-testid="neutral-btn">Another button</button>
        `);

        const tooltip = screen.getByTestId("tooltip");
        const neutralBtn = screen.getByTestId("neutral-btn");

        await user.tab();
        await waitFor(() => expect(tooltip).to.have.class("is-visible")); // wait for the tooltip to appear
        await user.tab(); // tab to nested link within tooltip
        await user.tab(); // tab to button after tooltip
        expect(neutralBtn).to.have.focus; // button after tooltip is focused
        await waitForElementToBeRemoved(() => screen.queryByRole("tooltip")); // wait for the tooltip to hide
        expect(tooltip).not.to.have.class("is-visible"); // check that .is-visible class is removed
    });
});

import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../ts/index";
import * as Stacks from "../ts/index";

const user = userEvent.setup();

describe("s-banner", () => {
    it("should make banner visible", async () => {
        await fixture(html`
            <button
                class="s-btn js-banner-open"
                data-toggle="s-banner"
                data-target="#test-banner"
            >
                Show test banner
            </button>
            <aside
                data-testid="test-banner"
                class="s-banner"
                id="test-banner"
                aria-hidden="true"
                role="alert"
                aria-labelledby="banner-message"
                data-controller="s-banner"
                data-s-banner-target="banner"
            >
                Test banner
            </aside>
        `);

        const button = screen.getByRole("button");
        const banner = screen.getByTestId("test-banner");

        expect(banner.getAttribute("aria-hidden")).to.equal("true");
        button.addEventListener('click', () => Stacks.showBanner(banner));

        expect(banner).to.have.attribute('aria-hidden', 'false');
        await user.click(button);
    });
});

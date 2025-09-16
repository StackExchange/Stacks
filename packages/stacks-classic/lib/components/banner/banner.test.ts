import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";
import { showBanner, hideBanner } from "../../controllers";

const user = userEvent.setup();

describe("banner", () => {
    it("trigger should make banner visible", async () => {
        await fixture(html`
            <button data-toggle="s-banner" data-target="#test-banner">
                Show test banner
            </button>
            <aside
                role="alert"
                id="test-banner"
                class="s-banner"
                aria-labelledby="banner-message"
                aria-hidden="true"
                data-controller="s-banner"
                data-s-banner-target="banner"
                data-testid="test-banner"
            >
                Test banner
            </aside>
        `);

        const button = screen.getByRole("button");
        const banner = screen.getByTestId("test-banner");

        expect(banner).to.have.attribute("aria-hidden", "true");
        button.addEventListener("click", () => showBanner(banner));

        await user.click(button);
        expect(banner).to.have.attribute("aria-hidden", "false");
    });

    it("trigger should hide banner", async () => {
        await fixture(html`
            <aside
                role="alert"
                id="test-banner"
                class="s-banner"
                aria-labelledby="banner-message"
                aria-hidden="false"
                data-controller="s-banner"
                data-s-banner-target="banner"
                data-testid="test-banner"
            >
                Test banner
                <button
                    type="button"
                    class="s-btn s-banner--btn"
                    aria-label="Dismiss"
                    data-toggle="s-banner"
                    data-target="#test-banner"
                >
                    Close banner
                </button>
            </aside>
        `);

        const button = screen.getByRole("button");
        const banner = screen.getByTestId("test-banner");

        expect(banner).to.have.attribute("aria-hidden", "false");
        button.addEventListener("click", () => hideBanner(banner));

        await user.click(button);
        expect(banner).to.have.attribute("aria-hidden", "true");
    });
});

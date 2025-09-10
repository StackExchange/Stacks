import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";
import { showToast, hideToast } from "../../controllers";

const user = userEvent.setup();

const testToast = (hidden = true) =>
    html` <button
            class="js-open-test-toast"
            data-toggle="s-toast"
            data-target="#test-toast"
        >
            Show test toast
        </button>
        <button type="button" aria-label="Dismiss">Close toast</button>
        <div
            role="alertdialog"
            id="test-toast"
            class="s-toast"
            aria-hidden="${hidden}"
            aria-labelledby="toast-message"
            data-controller="s-toast"
            data-s-toast-target="toast"
            data-s-toast-return-element=".js-open-test-toast[data-target='#test-toast']"
            data-testid="test-toast"
        >
            <aside class="s-notice s-notice__success">
                <div id="notice-message">Test toast</div>
            </aside>
        </div>`;

describe("toast", () => {
    it("trigger should make toast visible", async () => {
        await fixture(testToast(true));

        const button = screen.getAllByRole("button")[0]; // Trigger button
        const toast = screen.getByTestId("test-toast");

        expect(toast).to.have.attribute("aria-hidden", "true");
        button.addEventListener("click", () => showToast(toast));

        await user.click(button);
        expect(toast).to.have.attribute("aria-hidden", "false");
    });

    it("trigger should hide toast", async () => {
        await fixture(testToast(false));

        const button = screen.getAllByRole("button")[1]; // Close button
        const toast = screen.getByTestId("test-toast");

        expect(toast).to.have.attribute("aria-hidden", "false");
        button.addEventListener("click", () => hideToast(toast));

        await user.click(button);
        expect(toast).to.have.attribute("aria-hidden", "true");
    });

    // TODO: add test for refocus trigger

    // TODO: add test for removing toast from DOM
});

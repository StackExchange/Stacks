import { html, fixture, expect } from "@open-wc/testing";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";

const user = userEvent.setup();

const modalControllerEl = (hidden = true) => html`
    <div data-controller="s-modal">
        <button
            class="s-btn s-btn__outlined"
            data-action="s-modal#toggle"
            data-target="#launch-modal-base"
            data-testid="trigger">
            Launch example modal
        </button>

        <aside
            class="s-modal"
            id="launch-modal-base"
            tabindex="-1"
            role="dialog"
            aria-labelledby="launch-modal-base-title"
            aria-describedby="launch-modal-base-description"
            aria-hidden="${hidden}"
            data-s-modal-target="modal"
            data-testid="modal">
            <div class="s-modal--dialog" role="document">
                <h1 class="s-modal--header" id="launch-modal-base-title">Title</h1>
                <p class="s-modal--body">
                    <span id="launch-modal-base-description">Description</span>
                    <form>
                        <input type="text" data-testid="input-1"/>
                        <input type="text" data-testid="input-2"/>
                    </form>
                </p>
                <div class="d-flex gx8 s-modal--footer">
                    <button class="flex--item s-btn s-btn__primary" type="button">Save changes</button>
                    <input class="s-input" id="example-input" type="text" />
                    <button class="flex--item s-btn" type="button" data-action="s-modal#hide">Cancel</button>
                </div>
                <button
                    class="s-modal--close"
                    type="button"
                    aria-label="Close"
                    data-action="s-modal#hide"
                    data-testid="close-btn">
                    Close
                </button>
            </div>
        </aside>
    </div>
`;

describe("modal", () => {
    it("should make the modal visible when toggle button is clicked", async () => {
        await fixture(modalControllerEl());

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");
        expect(modal).not.to.be.visible;

        await user.click(trigger);
        await waitFor(() => expect(modal).to.be.visible);
    });

    it("should hide the modal when hide button is clicked", async () => {
        await fixture(modalControllerEl(false));

        const modal = await screen.findByTestId("modal");
        const closeBtn = await screen.findByTestId("close-btn");
        expect(modal).to.be.visible;

        await user.click(closeBtn);
        await waitFor(() => expect(modal).not.to.be.visible);
    });

    it("should focus the first focusable element when modal is shown", async () => {
        await fixture(modalControllerEl());

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");
        const focusableEl = await screen.findByTestId("input-1");
        expect(modal).not.to.be.visible;
        await expect(document.activeElement).not.to.equal(focusableEl);

        await user.click(trigger);
        await waitFor(() => expect(modal).to.be.visible);
        await expect(document.activeElement).to.equal(focusableEl);
    });

    it("should not change set focus when an element within the modal is already focused", async () => {
        await fixture(modalControllerEl());

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");
        const focusableEl1 = await screen.findByTestId("input-1");
        const focusableEl2 = await screen.findByTestId("input-2");
        expect(modal).not.to.be.visible;
        await expect(document.activeElement).not.to.equal(focusableEl1);

        await user.click(trigger);
        await waitFor(() => expect(modal).to.be.visible);
        focusableEl2.focus();
        await expect(document.activeElement).to.equal(focusableEl2);
    });
});

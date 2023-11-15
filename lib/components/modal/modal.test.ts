import { html, fixture, expect } from "@open-wc/testing";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";

const user = userEvent.setup();

const createModal = ({
    hidden = true,
    initialFocusEl,
}: { hidden?: boolean; initialFocusEl?: ReturnType<typeof html> } = {}) => html`
    <div data-controller="s-modal">
        <button
            class="s-btn"
            data-action="s-modal#show"
            data-testid="trigger">
            Show Modal
        </button>

        <aside
            class="s-modal"
            id="modal-base"
            tabindex="-1"
            role="dialog"
            aria-labelledby="modal-base-title"
            aria-describedby="modal-base-description"
            aria-hidden="${hidden}"
            data-s-modal-target="modal"
            data-testid="modal">
            <div class="s-modal--dialog" role="document">
                <h1 class="s-modal--header" id="modal-base-title">Title</h1>

                <p class="s-modal--body">
                    <span id="modal-base-description">Description</span>
                    <form>
                        <input type="text" data-testid="first-focusable-element" />
                        ${initialFocusEl}
                    </form>
                </p>

                <div class="d-flex gx8 s-modal--footer">
                    <button class="flex--item s-btn s-btn__primary" type="button">Save changes</button>
                    <button class="flex--item s-btn" type="button" data-action="s-modal#hide">Cancel</button>
                </div>

                <button
                    class="s-btn s-btn__muted s-modal--close"
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
        await fixture(createModal());

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");

        expect(modal).not.to.be.visible;

        await user.click(trigger);

        expect(modal).to.be.visible;
    });

    it("should hide the modal when the close button is clicked", async () => {
        await fixture(createModal({ hidden: false }));

        const modal = await screen.findByTestId("modal");
        const closeBtn = await screen.findByTestId("close-btn");

        expect(modal).to.be.visible;

        await user.click(closeBtn);

        await waitFor(() => expect(modal).not.to.be.visible);
    });

    it('should focus on the first element with `data-s-modal-target"initialFocus"` when modal is shown', async () => {
        await fixture(
            createModal({
                initialFocusEl: html`<input
                    type="text"
                    data-testid="initialFocus"
                    data-s-modal-target="initialFocus"
                />`,
            })
        );

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");
        const initialFocusEl = await screen.findByTestId("initialFocus");

        expect(modal).not.to.be.visible;

        await user.click(trigger);
        expect(modal).to.be.visible;

        await waitFor(() => expect(initialFocusEl).to.have.focus);
    });

    it("should focus on the first focusable element when modal is shown and no initialFocus is specified", async () => {
        await fixture(createModal());

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");
        const focusableEl = await screen.findByTestId(
            "first-focusable-element"
        );

        expect(modal).not.to.be.visible;
        expect(focusableEl).not.to.have.focus;

        await user.click(trigger);
        expect(modal).to.be.visible;

        await waitFor(() => expect(focusableEl).to.have.focus);
    });

    it("should not change set focus when an element within the modal is already focused", async () => {
        await fixture(createModal());

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");
        const firstFocusableEl = await screen.findByTestId(
            "first-focusable-element"
        );
        const closeButton = await screen.findByTestId("close-btn");

        expect(modal).not.to.be.visible;
        expect(firstFocusableEl).not.to.have.focus;

        await user.click(trigger);
        expect(modal).to.be.visible;

        // manually focus on an element within the modal
        closeButton.focus();

        // wait for s-modal:shown css transition to complete
        await new Promise((resolve) =>
            modal.addEventListener("s-modal:shown", resolve)
        );

        // check that focus stayed on the manually focused element and
        // has not changed to the first focusable element
        expect(closeButton).to.have.focus;
    });
});

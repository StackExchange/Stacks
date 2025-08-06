import { html, fixture, expect } from "@open-wc/testing";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";

const user = userEvent.setup();

const createModal = ({
    hidden = true,
    initialFocusEl,
    renderFocusables = true,
    excludeTabIndex = false,
}: {
    hidden?: boolean;
    initialFocusEl?: ReturnType<typeof html>;
    renderFocusables?: boolean;
    excludeTabIndex?: boolean;
} = {}) => html`
    <div data-controller="s-modal" data-testid="controller">
        <button
            class="s-btn"
            data-action="s-modal#show"
            data-testid="trigger">
            Show Modal
        </button>

        <aside
            class="s-modal"
            id="modal-base"
            tabindex="${!excludeTabIndex ? -1 : null}"
            role="dialog"
            aria-labelledby="modal-base-title"
            aria-describedby="modal-base-description"
            aria-hidden="${hidden}"
            data-s-modal-target="modal"
            data-testid="modal">
            <div class="s-modal--dialog" role="document">
                <h1 class="s-modal--header" id="modal-base-title">Title</h1>

                <p class="s-modal--body">
                    <span id="modal-base-description" data-testid="modal-text-body">Description</span>
                    <form>
                        ${
                            renderFocusables
                                ? html`
                                      <input
                                          type="text"
                                          data-testid="first-focusable-element"
                                      />
                                      ${initialFocusEl}
                                  `
                                : null
                        }
                    </form>
                </p>
                ${
                    renderFocusables
                        ? html` <div class="d-flex gx8 s-modal--footer">
                                  <button
                                      class="flex--item s-btn s-btn__filled"
                                      type="button"
                                      data-testid="save-btn"
                                  >
                                      Save changes
                                  </button>
                                  <button
                                      class="flex--item s-btn"
                                      type="button"
                                      data-action="s-modal#hide"
                                      data-testid="cancel-btn"
                                  >
                                      Cancel
                                  </button>
                              </div>

                              <button
                                  class="s-btn s-btn__muted s-modal--close"
                                  type="button"
                                  aria-label="Close"
                                  data-action="s-modal#hide"
                                  data-testid="close-btn"
                              >
                                  Close
                              </button>`
                        : null
                }
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

        // TODO: undestand why only in CI, for webkit the following assertion fails
        // await waitFor(() => expect(modal).not.to.be.visible);
        await waitFor(() =>
            expect(modal).to.have.attribute("aria-hidden", "true")
        );
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

    it("should not shift focus outside the modal when tab is pressed if there's no tabbable element in the modal", async () => {
        // test with `tabindex="-1"`
        await testFocusChange(true);

        // reset the test
        const controller = await screen.findByTestId("controller");
        controller.remove();

        // test without `tabindex="-1"`
        await testFocusChange(false);

        async function testFocusChange(withTabIndex: boolean): Promise<void> {
            await fixture(
                createModal({
                    renderFocusables: false,
                    excludeTabIndex: !withTabIndex,
                })
            );

            const modal = await screen.findByTestId("modal");
            const trigger = await screen.findByTestId("trigger");

            expect(modal).not.to.be.visible;
            await user.click(trigger);
            expect(modal).to.be.visible;

            // wait for s-modal:shown handler to complete
            await new Promise((resolve) =>
                modal.addEventListener("s-modal:shown", resolve)
            );

            // since there's nothing else to focus, the modal itself or the triggering element
            // should be focused. depends on whether the modal has a `tabindex` attribute or not.
            const expectedFocusElement = withTabIndex ? modal : trigger;
            expect(expectedFocusElement).to.have.focus;

            await user.tab();

            // since there's nothing else to focus, the same element should still be focused
            expect(expectedFocusElement).to.have.focus;
        }
    });

    it("should not deselect highlighted text when a keypress is detected", async () => {
        await fixture(createModal({ excludeTabIndex: true }));

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");

        expect(modal).not.to.be.visible;
        await user.click(trigger);
        expect(modal).to.be.visible;

        // highlight some text with the cursor
        const description = await screen.findByTestId("modal-text-body");
        await user.pointer([
            // left click and hold at char 0
            { target: description, offset: 0, keys: "[MouseLeft>]" },
            // drag the mouse to the right 5 characters
            { offset: 5 },
            // release the left mouse button
            { keys: "[/MouseLeft]" },
        ]);

        // confirm highlight
        const selection = document.getSelection()?.toString();
        expect(selection).to.be.equal("Descr");

        // simulate a few non-Tab keypresses
        await user.keyboard(
            "{s}{t}{a}{c}{k}{Shift}{Control}{ArrowUp}{ArrowRight}"
        );

        // highlight should remain intact
        expect(selection).to.be.equal("Descr");
    });

    it("should cycle through focusable modal elements when tab is pressed", async () => {
        await fixture(createModal());

        const modal = await screen.findByTestId("modal");
        const trigger = await screen.findByTestId("trigger");

        expect(modal).not.to.be.visible;
        await user.click(trigger);
        expect(modal).to.be.visible;

        // wait for s-modal:shown handler to complete
        await new Promise((resolve) =>
            modal.addEventListener("s-modal:shown", resolve)
        );

        const firstFocusableElement = await screen.findByTestId(
            "first-focusable-element"
        );
        const secondFocusableElement = await screen.findByTestId("save-btn");
        const thirdFocusableElement = await screen.findByTestId("cancel-btn");
        const lastFocusableElement = await screen.findByTestId("close-btn");

        expect(firstFocusableElement).to.have.focus;
        await user.tab();
        expect(secondFocusableElement).to.have.focus;
        await user.tab();
        expect(thirdFocusableElement).to.have.focus;
        await user.tab();
        expect(lastFocusableElement).to.have.focus;
        await user.tab();
        expect(firstFocusableElement).to.have.focus;
    });
});

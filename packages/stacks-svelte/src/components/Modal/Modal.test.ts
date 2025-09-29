import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import Modal from "./Modal.svelte";

const expectModalVisible = (visible: boolean) => {
    if (visible) {
        expect(screen.queryByRole("dialog")).to.exist;
    } else {
        expect(screen.queryByRole("dialog")).to.not.exist;
    }
};

const snippet = createRawSnippet(() => ({
    render: () => `<span>test snippet</span>`,
}));

describe("Modal", () => {
    describe("Rendering", () => {
        it("should render the header slot", async () => {
            render(Modal, {
                id: "test-modal",
                visible: true,
                // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
                $$slots: { header: snippet },
            });
            const dialog = screen.getByRole("dialog", {
                name: "test snippet", // header content is used as label for the dialog
            });
            expect(dialog).to.exist;
            expect(screen.getByText("test snippet")).to.exist;
        });

        it("should render the body slot", async () => {
            render(Modal, {
                id: "test-modal",
                visible: true,
                // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
                $$slots: { body: snippet },
            });
            const dialog = screen.getByRole("dialog", {
                description: "test snippet", // body content is used as description for the dialog
            });
            expect(dialog).to.exist;
            expect(screen.getByText("test snippet")).to.exist;
        });

        it("should render the footer slot", async () => {
            render(Modal, {
                id: "test-modal",
                visible: true,
                // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
                $$slots: { footer: snippet },
            });
            expectModalVisible(true);
            expect(screen.getByText("test snippet")).to.exist;
        });

        it("should add the passed classes", async () => {
            render(Modal, {
                id: "test-modal",
                visible: true,
                class: "wmn4 w75",
            });

            expect(screen.getByRole("document")).to.have.class("wmn4");
            expect(screen.getByRole("document")).to.have.class("w75");
        });

        it("should adjust the classes on prop updates", async () => {
            const { rerender } = render(Modal, {
                id: "test-modal",
                visible: true,
                class: "wmn4 w75",
            });

            await rerender({ class: "w76" });

            expect(screen.getByRole("document")).not.to.have.class("wmn4");
            expect(screen.getByRole("document")).not.to.have.class("w75");
            expect(screen.getByRole("document")).to.have.class("w76");
        });

        it("should hide the close button when hideCloseButton is true", async () => {
            render(Modal, {
                id: "test-modal",
                visible: true,
                hideCloseButton: true,
            });

            expect(
                screen.queryByRole("button", {
                    name: "Close",
                })
            ).to.not.exist;
        });
    });

    describe("Visibility Control", () => {
        it("should not be visible by default", async () => {
            render(Modal, { id: "test-modal" });
            expectModalVisible(false);
        });

        it("should close on click outside modal by default", async () => {
            render(Modal, { id: "test-modal", visible: true });
            expectModalVisible(true);

            const outsideModal = await screen.findByRole("dialog");
            await userEvent.click(outsideModal);

            expectModalVisible(false);
        });

        it("should not close on click outside modal when preventCloseOnClickOutside is true", async () => {
            render(Modal, {
                id: "test-modal",
                preventCloseOnClickOutside: true,
                visible: true,
            });
            expectModalVisible(true);

            const outsideModal = await screen.findByRole("dialog");
            await userEvent.click(outsideModal);

            expectModalVisible(true);
        });

        it("should close when close button clicked", async () => {
            render(Modal, { id: "test-modal", visible: true });
            expectModalVisible(true);

            const closeButton = await screen.getByRole("button", {
                name: "Close",
            });
            await userEvent.click(closeButton);

            expectModalVisible(false);
        });

        it("should close on esc press", async () => {
            render(Modal, { id: "test-modal", visible: true });
            expectModalVisible(true);

            await userEvent.keyboard("{Escape}");
            expectModalVisible(false);
        });

        it("should emit close event on close when modal is visible", async () => {
            const onClose = sinon.spy();
            render(Modal, {
                id: "test-modal",
                visible: true,
                // @ts-expect-error events are not yet typed in the component
                $$events: {
                    close: onClose,
                },
            });

            const closeButton = await screen.getByRole("button");
            await userEvent.click(closeButton);

            expect(onClose).to.have.been.calledOnce;
        });

        it("should not emit close events when modal is not visible", async () => {
            const onClose = sinon.spy();
            render(Modal, {
                id: "test-modal",
                visible: false,
                // @ts-expect-error events are not yet typed in the component
                $$events: {
                    close: onClose,
                },
            });

            const outsideModal = document.body;
            await userEvent.click(outsideModal);

            expect(onClose).not.to.have.been.called;
        });

        it("should close when visible prop changed externally", async () => {
            const { rerender } = render(Modal, {
                id: "test-modal",
                visible: true,
            });
            expectModalVisible(true);

            await rerender({ visible: false });

            expectModalVisible(false);
        });
    });

    describe("Focus", () => {
        it("should trap the focus correctly", async () => {
            const ExternalButton = createRawSnippet(() => ({
                render: () => `<button>show modal</button>`,
            }));
            render(ExternalButton);

            const { rerender } = render(Modal, {
                id: "test-modal",
                visible: false,
                // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
                $$slots: {
                    body: createRawSnippet(() => ({
                        render: () => `
                            <span>
                                <button>inside modal first</button>
                                <button>inside modal second</button>
                            </span>
                        `,
                    })),
                },
            });

            expectModalVisible(false);

            const externalButton = screen.getByText("show modal");
            await userEvent.click(externalButton);
            await rerender({ visible: true });
            expectModalVisible(true);

            const insideModalFirstButton = screen.getByRole("button", {
                name: "inside modal first",
            });
            const insideModalSecondButton = screen.getByRole("button", {
                name: "inside modal second",
            });
            const closeModalButton = screen.getByRole("button", {
                name: "Close",
            });
            await waitFor(() => expect(insideModalFirstButton).to.have.focus);

            await userEvent.tab();
            await waitFor(() => expect(insideModalSecondButton).to.have.focus);

            await userEvent.tab();
            await waitFor(() => expect(closeModalButton).to.have.focus);

            await userEvent.tab();
            await waitFor(() => expect(insideModalFirstButton).to.have.focus);

            await userEvent.tab({ shift: true });
            await waitFor(() => expect(closeModalButton).to.have.focus);

            await userEvent.click(closeModalButton);
            expectModalVisible(false);
            expect(externalButton).to.have.focus;
        });
    });

    describe("i18n", () => {
        it("should localize the close button aria label when dedicated prop is specified", async () => {
            render(Modal, {
                id: "test-modal",
                visible: true,
                i18nCloseButtonLabel: "Chiudi",
            });
            expectModalVisible(true);

            expect(
                screen.getByRole("button", {
                    name: "Chiudi",
                })
            ).to.exist;
        });
    });
});

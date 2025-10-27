import { expect } from "@open-wc/testing";
import { render, screen, waitFor } from "@testing-library/svelte";
import { IconAlert } from "@stackoverflow/stacks-icons-legacy/icons";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";
import { createRawSnippet, mount, unmount } from "svelte";
import NoticeAction from "../Notice/NoticeAction.svelte";

import Toaster, { showToast, hideToast } from "./Toast.svelte";

describe("showToast", () => {
    it("should render a default toast component", async () => {
        render(Toaster);
        showToast("Test Toast");
        await waitFor(() => expect(screen.getByText("Test Toast")).to.exist);
    });

    it("should be able to render an html message", async () => {
        const htmlMsg = createRawSnippet(() => ({
            render: () => '<span>Toast with a <a href="#">link</a></span>',
        }));
        render(Toaster);
        showToast(htmlMsg);
        await waitFor(() => expect(screen.getByRole("link")).to.exist);
    });

    it("should render a toast with the 's-notice__success' class for a success variant", async () => {
        render(Toaster);
        showToast("Test Toast", { variant: "success" });
        const toastEl = await screen.findByRole("status");
        expect(toastEl).to.have.class("s-notice__success");
    });

    it("should render a toast with the 's-notice__important' class when important is true", async () => {
        render(Toaster);
        showToast("Test Toast", { important: true });
        const toastEl = await screen.findByRole("status");
        expect(toastEl).to.have.class("s-notice__important");
    });

    it("should render a toast with an Icon when an icon is set", async () => {
        render(Toaster);
        showToast("Test Toast", { icon: IconAlert, iconTitle: "Alert" });
        await waitFor(() => expect(screen.getByTitle("Alert")).to.exist);
    });

    it("should render the close button by default", async () => {
        render(Toaster);
        showToast("Test Toast");
        const closeButton = await screen.findByRole("button", {
            name: "Close",
        });
        expect(closeButton).to.exist;
    });

    it("should not render the close button when dismissible is false", async () => {
        render(Toaster);
        showToast("Test Toast", { dismissible: false });
        await waitFor(() => expect(screen.getByText("Test Toast")).to.exist);
        expect(screen.queryByRole("button", { name: "Close" })).to.not.exist;
    });

    it("should close the toast automatically after 10s by default", async () => {
        const clock = sinon.useFakeTimers({
            shouldAdvanceTime: true,
            shouldClearNativeTimers: true,
        });
        render(Toaster);
        showToast("Test Toast");
        await waitFor(() => expect(screen.getByText("Test Toast")).to.exist);
        await clock.tickAsync(10000);
        await waitFor(
            () => expect(screen.queryByText("Test Toast")).to.not.exist
        );
        clock.restore();
    });

    it("should never close automatically when transient is false", async () => {
        const clock = sinon.useFakeTimers({
            shouldAdvanceTime: true,
            shouldClearNativeTimers: true,
        });
        render(Toaster);
        showToast("Test Toast", { transient: false });
        await waitFor(() => expect(screen.getByText("Test Toast")).to.exist);
        await clock.tickAsync(15000);
        expect(screen.getByText("Test Toast")).to.exist;
        clock.restore();
    });

    it("should close the toast based on the duration option when provided", async () => {
        const clock = sinon.useFakeTimers({
            shouldAdvanceTime: true,
            shouldClearNativeTimers: true,
        });
        render(Toaster);
        showToast("Test Toast", { duration: 5000 });
        await waitFor(() => expect(screen.getByText("Test Toast")).to.exist);
        await clock.tickAsync(5000);
        await waitFor(
            () => expect(screen.queryByText("Test Toast")).to.not.exist
        );
        clock.restore();
    });

    it("should render other actions in the toast when provided", async () => {
        const onClickSpy = sinon.spy();
        const actionSnip = createRawSnippet(() => ({
            render: () => `<span />`,
            setup: (target) => {
                const comp = mount(NoticeAction, {
                    target,
                    props: {
                        children: createRawSnippet(() => ({
                            render: () => "<span>Action</span>",
                        })),
                        onclick: onClickSpy,
                    },
                });
                return () => unmount(comp);
            },
        }));
        render(Toaster);
        showToast("Test Toast", {
            actions: actionSnip,
        });
        const actionButton = await screen.findByRole("button", {
            name: "Action",
        });
        expect(actionButton).to.exist;
        await userEvent.click(actionButton);
        expect(onClickSpy).to.have.been.called;
    });

    it("should call onClose and onAutoClose callbacks when the toast closes automatically", async () => {
        const clock = sinon.useFakeTimers({
            shouldAdvanceTime: true,
            shouldClearNativeTimers: true,
        });
        const onCloseSpy = sinon.spy();
        const onAutoCloseSpy = sinon.spy();
        const onUserCloseSpy = sinon.spy();
        render(Toaster);
        showToast("Test Toast", {
            duration: 5000,
            onClose: onCloseSpy,
            onAutoClose: onAutoCloseSpy,
            onUserClose: onUserCloseSpy,
        });
        await waitFor(() => expect(screen.getByText("Test Toast")).to.exist);
        await clock.tickAsync(5000);
        await waitFor(
            () => expect(screen.queryByText("Test Toast")).to.not.exist
        );
        expect(onCloseSpy).to.have.been.called;
        expect(onAutoCloseSpy).to.have.been.called;
        expect(onUserCloseSpy).to.not.have.been.called;
        clock.restore();
    });

    it("should call onClose and onUserClose callbacks when the toast is closed by the user", async () => {
        const onCloseSpy = sinon.spy();
        const onUserCloseSpy = sinon.spy();
        const onAutoCloseSpy = sinon.spy();
        render(Toaster);
        showToast("Test Toast", {
            onClose: onCloseSpy,
            onUserClose: onUserCloseSpy,
            onAutoClose: onAutoCloseSpy,
        });
        await waitFor(() => expect(screen.getByText("Test Toast")).to.exist);
        const closeButton = screen.getByRole("button", { name: "Close" });
        expect(closeButton).to.exist;
        await userEvent.click(closeButton);
        await waitFor(
            () => expect(screen.queryByText("Test Toast")).to.not.exist
        );
        expect(onCloseSpy).to.have.been.called;
        expect(onUserCloseSpy).to.have.been.called;
        expect(onAutoCloseSpy).to.not.have.been.called;
    });

    it("should render with a role of 'alert' when variant is danger", async () => {
        render(Toaster);
        showToast("Test Toast", { variant: "danger" });
        const toastEl = await screen.findByRole("alert");
        expect(toastEl).to.exist;
    });

    it("should render with a role of 'alertdialog' when actions are provided", async () => {
        const actionsSnip = createRawSnippet(() => ({
            render: () => `<span />`,
        }));
        render(Toaster);
        showToast("Test Toast", { actions: actionsSnip });
        const toastEl = await screen.findByRole("alertdialog");
        expect(toastEl).to.exist;
    });
});

describe("hideToast", () => {
    it("should close a toast programmatically", async () => {
        render(Toaster);
        const toastId = showToast("Test Toast", { transient: false });
        showToast("Another Toast");
        await waitFor(() => expect(screen.getByText("Test Toast")).to.exist);
        hideToast(toastId);
        await waitFor(
            () => expect(screen.queryByText("Test Toast")).to.not.exist
        );
        expect(screen.getByText("Another Toast")).to.exist;
    });
});

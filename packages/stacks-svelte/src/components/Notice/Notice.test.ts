import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createSvelteComponentsSnippet } from "../../../test-utils";
import sinon from "sinon";
import userEvent from "@testing-library/user-event";

import Notice from "./Notice.svelte";
import NoticeAction from "./NoticeAction.svelte";

const text = "test notice";

const children = createRawSnippet(() => ({
    render: () => `<span>${text}</span>`,
}));

describe("Notice", () => {
    it("should render the notice with the child value", () => {
        render(Notice, { children });
        expect(screen.getByRole("status")).to.exist;
    });

    it("should render the icon", () => {
        render(Notice, {
            children,
        });
        const icon = document.querySelector("svg.svg-icon");
        expect(icon).to.exist;
        expect(screen.getByRole("status")).to.exist;
    });

    it("should render variant notice", () => {
        render(Notice, { variant: "danger", children });
        const notice = screen.getByRole("status");
        expect(notice).to.have.class("s-notice__danger");
    });

    it("should render important notice", () => {
        render(Notice, { important: true, children });
        const notice = screen.getByRole("status");
        expect(notice).to.have.class("s-notice__important");
    });

    it("should render the notice with artbirary classes", () => {
        render(Notice, { class: "bg-red-400", children });
        const notice = screen.getByRole("status");
        expect(notice).to.have.class("bg-red-400");
    });

    it("should render the notice with passed role", () => {
        render(Notice, { role: "alert", children });
        expect(screen.getByRole("alert")).to.exist;
    });

    it("should render dismissable notice", async () => {
        const onDismissMock = sinon.spy();
        render(Notice, {
            children: createRawSnippet(() => ({
                render: () => `<span>Dismiss Me</span>`,
            })),
            dismissible: true,
            onDismiss: onDismissMock,
            i18nDismissButtonLabel: "Chiudi",
        });

        // Assert that the button exists
        const closeButton = screen.getByRole("button", { name: /Chiudi/i });
        expect(closeButton).to.exist;

        // Assert that the IconCross is rendered inside the button
        const closeIcon = closeButton.querySelector("svg.iconCross");
        expect(closeIcon).to.exist;

        // Assert that the button has the s-notice--dismiss class
        expect(closeButton).to.have.class("s-notice--dismiss");

        // Confirm the text is on-screen
        expect(screen.getByText("Dismiss Me")).to.be.visible;

        // Check dismiss is clicked correctly
        await userEvent.click(closeButton);
        expect(onDismissMock).to.have.been.called;

        // Confirm the notice was hidden
        expect(screen.queryByText(text)).to.not.exist;
    });

    it("should render the notice with a user provided notice action", async () => {
        const onclickMock = sinon.spy();
        render(Notice, {
            children,
            actions: createSvelteComponentsSnippet([
                {
                    component: NoticeAction,
                    props: {
                        children: createRawSnippet(() => ({
                            render: () => "<span>test notice action</span>",
                        })),
                        onclick: onclickMock,
                    },
                },
            ]),
        });

        // Assert that the button exists
        const noticeAction = screen.getByRole("button", {
            name: /test notice action/i,
        });
        expect(noticeAction).to.exist;

        // Check notice alert is clicked correctly
        await userEvent.click(noticeAction);
        expect(onclickMock).to.have.been.called;
    });
});

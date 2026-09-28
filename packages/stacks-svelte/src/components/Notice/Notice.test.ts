import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createSvelteComponentsSnippet } from "../../../test-utils";
import sinon from "sinon";
import userEvent from "@testing-library/user-event";
import { IconInfo } from "@stackoverflow/stacks-icons/icons";

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

    it("should render the default icon and title", () => {
        render(Notice, { children });
        const icon = screen.getByRole("status").querySelector("svg")!;
        expect(icon).to.have.class("IconHelp");
        expect(icon.querySelector("title")).to.have.text("Help");
        expect(icon).not.to.have.attribute("aria-hidden");
        expect(icon.parentElement).not.to.have.attribute("aria-hidden");
    });

    it("renders a neutral notice with an information icon", async () => {
        render(Notice, { icon: IconInfo, children });
        const notice = screen.getByRole("status");
        const icon = notice.querySelector(".s-notice--icon svg")!;

        expect(notice).to.have.attribute("class", "s-notice");
        expect(icon).to.have.class("IconInfo");
        expect(icon.querySelector("title")).not.to.exist;
        expect(icon.parentElement).to.have.attribute("aria-hidden", "true");
        await expect(notice).to.be.accessible();
    });

    it("exposes a custom icon with its explicit title", () => {
        render(Notice, {
            icon: `<svg role="img"></svg>`,
            iconTitle: "Custom status",
            children,
        });
        expect(screen.getByRole("img", { name: "Custom status" })).to.exist;
    });

    it("restores the variant icon and title when the override is removed", async () => {
        const component = render(Notice, {
            variant: "danger",
            icon: `<svg class="CustomIcon"></svg>`,
            children,
        });
        const notice = screen.getByRole("status");
        expect(notice).to.have.class("s-notice__danger");
        expect(notice.querySelector(".CustomIcon")).to.exist;
        expect(notice.querySelector(".IconAlertFill")).not.to.exist;
        expect(notice.querySelector(".s-notice--icon")).to.have.attribute(
            "aria-hidden",
            "true"
        );
        expect(notice.querySelector("title")).not.to.exist;

        await component.rerender({ icon: undefined });
        const icon = notice.querySelector(".s-notice--icon svg")!;
        expect(icon).to.have.class("IconAlertFill");
        expect(icon.querySelector("title")).to.have.text("Danger");
        expect(icon.parentElement).not.to.have.attribute("aria-hidden");
        expect(notice).to.have.class("s-notice__danger");
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
            icon: `<svg class="CustomIcon"></svg>`,
            onDismiss: onDismissMock,
            i18nDismissButtonLabel: "Chiudi",
        });

        // Assert that the button exists
        const closeButton = screen.getByRole("button", { name: /Chiudi/i });
        expect(closeButton).to.exist;

        // Assert that the IconCross is rendered inside the button
        const closeIcon = closeButton.querySelector("svg.IconCross");
        expect(closeIcon).to.exist;

        // Assert that the button has the s-notice--dismiss class
        expect(closeButton).to.have.class("s-notice--dismiss");

        // Confirm the text is on-screen
        expect(screen.getByText("Dismiss Me")).to.be.visible;

        // Check dismiss is clicked correctly
        closeButton.focus();
        await userEvent.keyboard("{Enter}");
        expect(onDismissMock).to.have.been.calledOnce;

        // Confirm the notice was hidden
        expect(screen.queryByText("Dismiss Me")).to.not.exist;
        expect(screen.queryByRole("status")).to.not.exist;
    });

    it("should render the notice with a user provided notice action", async () => {
        const onclickMock = sinon.spy();
        render(Notice, {
            children,
            icon: `<svg class="CustomIcon"></svg>`,
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

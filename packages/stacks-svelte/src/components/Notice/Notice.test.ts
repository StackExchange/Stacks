import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { IconAlert } from "@stackoverflow/stacks-icons/icons";
import { createSvelteComponentsSnippet } from "../../../test-utils";
import sinon from "sinon";
import userEvent from "@testing-library/user-event";

import Notice from "./Notice.svelte";
import NoticeAction from "./NoticeAction.svelte";

const children = createRawSnippet(() => ({
    render: () => "<span>test notice</span>",
}));

describe("Notice", () => {
    it("should render the notice with the child value", () => {
        render(Notice, { children });
        expect(screen.getByRole("status")).to.exist;
    });

    it("should render the icon", () => {
        render(Notice, { icon: IconAlert, iconTitle: "test title", children });
        const icon = document.querySelector("svg.iconAlert");
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

    it("should render the notice with a notice action of type close", async () => {
        render(Notice, {
            children,
            actions: createSvelteComponentsSnippet([
                {
                    component: NoticeAction,
                    props: {
                        type: "close",
                        i18nCloseButtonLabel: "Chiudi",
                    },
                },
            ]),
        });

        // Assert that the button exists
        const closeButton = screen.getByRole("button", { name: /Chiudi/i });
        expect(closeButton).to.exist;

        // Assert that the IconClear is rendered inside the button
        const closeIcon = closeButton.querySelector("svg.iconClear");
        expect(closeIcon).to.exist;

        // Assert that the button has the s-notice--btn class
        expect(closeButton).to.have.class("s-notice--btn");
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

        // Assert that the button has the s-notice--btn class
        expect(noticeAction).to.have.class("s-notice--btn");

        // Check notice alert is clicked correctly
        await userEvent.click(noticeAction);
        expect(onclickMock).to.have.been.called;
    });
});

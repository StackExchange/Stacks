import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import Tag from "./Tag.svelte";

const snippet = createRawSnippet(() => ({
    render: () => "<span>test snippet</span>",
}));

describe("Tag", () => {
    it("should render the tag", () => {
        render(Tag, { children: snippet });
        expect(screen.getByText("test snippet")).to.exist;
    });

    it("should render as an anchor when href is provided", () => {
        render(Tag, { href: "#", children: snippet });
        expect(screen.getByRole("link").textContent?.trim()).to.equal(
            "test snippet"
        );
    });

    it("should render the appropriate size class", () => {
        render(Tag, { size: "sm", children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__sm"
        );
    });

    it("should render the all variant class", () => {
        let rendered = render(Tag, { variant: "moderator", children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__moderator"
        );
        expect(screen.getByText("Moderator tag")).to.exist.and.to.have.class(
            "v-visible-sr"
        );

        rendered.unmount();
        rendered = render(Tag, { variant: "required", children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__required"
        );
        expect(screen.getByText("Required tag")).to.exist.and.to.have.class(
            "v-visible-sr"
        );
    });

    it("should render the tag as a span when dismissable is true", () => {
        render(Tag, { dismissable: true, children: snippet });
        const childElement = screen.getByText("test snippet");
        expect(childElement).to.exist;

        const tagElement = childElement.parentElement;
        expect(tagElement?.tagName).to.equal("SPAN");

        expect(screen.getByRole("button")).to.have.class("s-tag--dismiss");
        expect(screen.getByText("Dismiss tag")).to.exist.and.have.class(
            "v-visible-sr"
        );
    });

    it("should render the tag as a span when both href has value and dismissable is true", () => {
        render(Tag, { href: "#link", dismissable: true, children: snippet });
        const childElement = screen.getByText("test snippet");
        expect(childElement).to.exist;

        const tagElement = childElement.closest(".s-tag");
        expect(tagElement?.tagName).to.equal("SPAN");
        expect(tagElement).not.to.have.attribute("href", "#link");
        expect(tagElement).not.to.have.attribute("role", "link");

        const anchorElement = tagElement?.querySelector("a");
        expect(anchorElement).to.have.attribute("href", "#link");

        expect(screen.getByRole("button")).to.have.class("s-tag--dismiss");
    });

    it("should render including the ignored class", () => {
        render(Tag, { ignored: true, children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__ignored"
        );
        expect(screen.getByText("Ignored tag")).to.exist.and.to.have.class(
            "v-visible-sr"
        );
    });

    it("should render including the watched class", () => {
        render(Tag, { watched: true, children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__watched"
        );
        expect(screen.getByText("Watched tag")).to.exist.and.to.have.class(
            "v-visible-sr"
        );
    });

    it("should render the sponsor element", () => {
        const sponsor = createRawSnippet(() => ({
            render: () => `<span>sponsor</span>`,
        }));
        render(Tag, {
            children: snippet,
            sponsor,
        });
        expect(screen.getByText("sponsor").parentElement).to.have.class(
            "s-tag--sponsor"
        );
        expect(screen.getByText("Sponsored tag")).to.exist.and.to.have.class(
            "v-visible-sr"
        );
    });

    // events
    it("should call the on:dismiss callback when the user triggers it", async () => {
        const onDismissSpy = sinon.spy();
        render(Tag, {
            dismissable: true,
            ondismiss: onDismissSpy,
            children: snippet,
        });
        await userEvent.click(screen.getByRole("button"));
        expect(onDismissSpy).to.have.been.calledOnce;
    });

    it("should call the onfocus callback when the user triggers it", async () => {
        const onFocusSpy = sinon.spy();
        render(Tag, {
            href: "#",
            onfocus: onFocusSpy,
            children: snippet,
        });
        await userEvent.click(screen.getByRole("link"));
        expect(onFocusSpy).to.have.been.calledOnce;
    });

    it("should call the onblur callback when the user triggers it", async () => {
        const onBlurSpy = sinon.spy();
        render(Tag, {
            href: "#",
            onblur: onBlurSpy,
            children: snippet,
        });
        await userEvent.click(screen.getByRole("link"));
        await userEvent.tab(); // Trigger blur by tabbing away
        expect(onBlurSpy).to.have.been.calledOnce;
    });

    it("should call the onclick callback when the user clicks on it", async () => {
        const onClickSpy = sinon.spy();
        render(Tag, {
            href: "#",
            onclick: onClickSpy,
            children: snippet,
        });
        await userEvent.click(screen.getByRole("link"));
        expect(onClickSpy).to.have.been.calledOnce;
    });

    it("should call the onmouseenter callback when the user hovers over it", async () => {
        //HACK: This test is flaky because the tag often times gets rendered under the cursor
        //causing the onmouseenter event to fire an additional time. We inject another element
        //into the dom and make sure the mouse if hovering over that instead before rendering
        //the Tag to address this issue.
        document.body.innerHTML = `<div data-testid="focus-me">Dummy Element</div>`;
        await userEvent.hover(screen.getByTestId("focus-me"));

        const onMouseEnterSpy = sinon.spy();
        render(Tag, {
            href: "#",
            onmouseenter: onMouseEnterSpy,
            children: snippet,
        });
        await userEvent.hover(screen.getByRole("link"));
        expect(onMouseEnterSpy).to.have.been.calledOnce;
    });

    it("should call the onmouseleave callback when the user stops hovering over it", async () => {
        const onMouseLeaveSpy = sinon.spy();
        render(Tag, {
            href: "#",
            onmouseleave: onMouseLeaveSpy,
            children: snippet,
        });
        await userEvent.hover(screen.getByRole("link"));
        await userEvent.unhover(screen.getByRole("link"));
        expect(onMouseLeaveSpy).to.have.been.calledOnce;
    });

    // i18n
    it("should localize all text when dedicated prop is specified", () => {
        let rendered = render(Tag, {
            dismissable: true,
            i18nDismissButtonText: "Chidui tag",
            children: snippet,
        });

        expect(screen.getByText("Chidui tag")).to.exist.and.have.class(
            "v-visible-sr"
        );

        rendered.unmount();
        rendered = render(Tag, {
            i18nSponsorTagText: "Sponsoredo tago",
            sponsor: createRawSnippet(() => ({
                render: () => `<span>sponsor</span>`,
            })),
            children: snippet,
        });
        expect(screen.getByText("Sponsoredo tago")).to.exist.and.have.class(
            "v-visible-sr"
        );

        rendered.unmount();
        rendered = render(Tag, {
            i18nWatchedTagText: "Vatchita tago",
            children: snippet,
            watched: true,
        });
        expect(screen.getByText("Vatchita tago")).to.exist.and.have.class(
            "v-visible-sr"
        );

        rendered.unmount();
        rendered = render(Tag, {
            i18nIgnoredTagText: "Ignorita tago",
            children: snippet,
            ignored: true,
        });
        expect(screen.getByText("Ignorita tago")).to.exist.and.have.class(
            "v-visible-sr"
        );

        rendered.unmount();
        rendered = render(Tag, {
            i18nModeratorTagText: "Moderatita tago",
            children: snippet,
            variant: "moderator",
        });
        expect(screen.getByText("Moderatita tago")).to.exist.and.have.class(
            "v-visible-sr"
        );

        rendered.unmount();
        rendered = render(Tag, {
            i18nRequiredTagText: "Requisite tago",
            children: snippet,
            variant: "required",
        });
        expect(screen.getByText("Requisite tago")).to.exist.and.have.class(
            "v-visible-sr"
        );
    });
});

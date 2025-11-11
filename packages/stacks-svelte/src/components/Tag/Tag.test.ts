import { createRawSnippet, tick } from "svelte";
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
        // text renders with a leading space in to include storybook slot description
        expect(screen.getByRole("link")).to.have.text(" test snippet");
    });

    it("should render the appropriate size class", () => {
        render(Tag, { size: "sm", children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__sm"
        );
    });

    it("should render the appropriate variant class", () => {
        render(Tag, { variant: "moderator", children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__moderator"
        );
    });

    it("should render the dismiss element", () => {
        render(Tag, { dismissable: true, children: snippet });
        expect(screen.getByRole("button")).to.have.class("s-tag--dismiss");
    });

    it("should not render the dismiss element if href prop is set", () => {
        render(Tag, { href: "#", dismissable: true, children: snippet });
        expect(screen.queryByRole("button")).to.be.null;
    });

    it("should render including the ignored class", () => {
        render(Tag, { ignored: true, children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__ignored"
        );
    });

    it("should render including the watched class", () => {
        render(Tag, { watched: true, children: snippet });
        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-tag__watched"
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
        const onMouseEnterSpy = sinon.spy((event) => {
            console.log("onmouseenter called at " + Date.now(), JSON.stringify(event));
        });
        render(Tag, {
            href: "#",
            onmouseenter: onMouseEnterSpy,
            children: snippet,
        });
        await new Promise(r => setTimeout(r, 500)); //give render time to complete otherwise this test flakes.
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
    it("should localize the dismiss button text when dedicated prop is specified", () => {
        render(Tag, {
            dismissable: true,
            i18nDismissButtonText: "Chidui tag",
            children: snippet,
        });
        expect(screen.getByRole("button")).to.have.text("Chidui tag");
    });
});

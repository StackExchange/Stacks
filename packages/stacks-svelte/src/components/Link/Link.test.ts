import { createRawSnippet, tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import Link from "./Link.svelte";

const children = createRawSnippet(() => ({
    render: () => "<span>test link</span>",
}));

describe("Link", () => {
    it("should render the link", () => {
        render(Link, { href: "#", children });
        expect(screen.getByRole("link")).to.have.text("test link");
    });

    it("should render including the dropdown class", () => {
        render(Link, {
            dropdown: true,
            href: "#",
            children,
        });
        expect(screen.getByRole("link")).to.have.class("s-link__dropdown");
    });

    it("should render including the underlined class", () => {
        render(Link, {
            underlined: true,
            href: "#",
            children,
        });
        expect(screen.getByRole("link")).to.have.class("s-link__underlined");
    });

    it("should render the appropriate variant class", () => {
        render(Link, {
            variant: "muted",
            href: "#",
            children,
        });
        expect(screen.getByRole("link")).to.have.class("s-link__muted");
    });

    it("should render with the disabled attribute", () => {
        render(Link, {
            disabled: true,
            children,
        });
        expect(screen.getByRole("button")).to.have.attribute("disabled");
    });

    it("should render with the aria-disabled attribute", () => {
        render(Link, {
            disabled: true,
            href: "#",
            children,
        });
        expect(screen.getByRole("link")).to.have.attribute(
            "aria-disabled",
            "true"
        );
    });

    it("should spread additional props as attributes to the underlying HTML element", () => {
        render(Link, {
            download: true,
            href: "#",
            children,
        });

        expect(screen.getByRole("link")).to.have.attribute("download", "true");
    });

    it("should adjust the classes on prop updates", async () => {
        const { rerender } = render(Link, {
            class: "fc-theme-primary-400",
            children,
        });
        rerender({ class: "fc-theme-secondary-400", children });
        await tick();
        expect(screen.getByRole("button")).not.to.have.class(
            "fc-theme-primary-400"
        );
        expect(screen.getByRole("button")).to.have.class(
            "fc-theme-secondary-400"
        );
    });

    it("should call the on:click callback when the user clicks on it", async () => {
        const onClickSpy = sinon.spy();
        render(Link, { onclick: onClickSpy, children });
        await userEvent.click(screen.getByRole("button"));
        expect(onClickSpy).to.have.been.calledOnce;
    });
});

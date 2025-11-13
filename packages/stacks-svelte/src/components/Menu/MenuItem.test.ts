import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";
import { IconHome } from "@stackoverflow/stacks-icons/icons";

import MenuItem from "./MenuItem.svelte";

const user = userEvent.setup();

const children = createRawSnippet(() => ({
    render: () => "<span>Menu Item</span>",
}));

describe("MenuItem", () => {
    it("should render the menu item link", () => {
        render(MenuItem, {
            children,
        });
        expect(screen.getByRole("menuitem")).to.exist;
        expect(screen.getByText("Menu Item")).to.exist;
    });

    it("should render as an anchor when href is provided", () => {
        render(MenuItem, {
            href: "#test",
            children,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.exist;
        expect(link).to.have.attr("href", "#test");
        expect(link).to.have.class("s-menu--action");
    });

    it("should render as a button when href is not provided", () => {
        render(MenuItem, {
            children,
        });
        const button = screen.getByRole("menuitem").querySelector("button");
        expect(button).to.exist;
        expect(button).to.have.class("s-menu--action");
    });

    it("should render with danger styling", () => {
        render(MenuItem, {
            href: "#",
            danger: true,
            children,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.have.class("s-menu--action__danger");
    });

    it("should render with selected styling", () => {
        render(MenuItem, {
            href: "#",
            selected: true,
            children,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.have.class("is-selected");
    });

    it("should render with icon", () => {
        render(MenuItem, {
            href: "#",
            icon: IconHome,
            iconTitle: "Home icon",
            children,
        });
        const icon = document.querySelector("svg.s-menu--icon");
        expect(icon).to.exist;
        expect(icon).to.have.class("s-menu--icon");
    });

    it("should render with arbitrary classes", () => {
        render(MenuItem, {
            href: "#",
            class: "custom-class",
            children,
        });
        const item = screen.getByRole("menuitem");
        expect(item).to.have.class("s-menu--item");
        expect(item).to.have.class("custom-class");
    });

    it("should have role='menuitem' on the li element", () => {
        render(MenuItem, {
            href: "#",
            children,
        });
        const item = screen.getByRole("menuitem");
        expect(item.tagName).to.equal("LI");
        expect(item).to.have.class("s-menu--item");
    });

    it("should call onclick handler when clicked", async () => {
        const onClickSpy = sinon.spy();
        render(MenuItem, {
            href: "#",
            children,
            onclick: onClickSpy,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        await user.click(link!);
        expect(onClickSpy).to.have.been.calledOnce;
    });

    it("should pass through additional props to the link/button", () => {
        render(MenuItem, {
            "href": "#",
            "data-testid": "menu-item-link",
            children,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.have.attr("data-testid", "menu-item-link");
    });
});

import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";
import { IconHome } from "@stackoverflow/stacks-icons/icons";

import MenuItemLink from "./MenuItemLink.svelte";

const user = userEvent.setup();

const children = createRawSnippet(() => ({
    render: () => "<span>Menu Item</span>",
}));

describe("MenuItemLink", () => {
    it("should render the menu item link", () => {
        render(MenuItemLink, {
            children,
        });
        expect(screen.getByRole("menuitem")).to.exist;
        expect(screen.getByText("Menu Item")).to.exist;
    });

    it("should render as an anchor when href is provided", () => {
        render(MenuItemLink, {
            href: "#test",
            children,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.exist;
        expect(link).to.have.attr("href", "#test");
        expect(link).to.have.class("s-menu--link");
    });

    it("should render as a button when href is not provided", () => {
        render(MenuItemLink, {
            children,
        });
        const button = screen.getByRole("menuitem").querySelector("button");
        expect(button).to.exist;
        expect(button).to.have.class("s-menu--link");
    });

    it("should render with danger styling", () => {
        render(MenuItemLink, {
            href: "#",
            danger: true,
            children,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.have.class("s-menu--link__danger");
    });

    it("should render with selected styling", () => {
        render(MenuItemLink, {
            href: "#",
            selected: true,
            children,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.have.class("is-selected");
    });

    it("should render with icon", () => {
        render(MenuItemLink, {
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
        render(MenuItemLink, {
            href: "#",
            class: "custom-class",
            children,
        });
        const item = screen.getByRole("menuitem");
        expect(item).to.have.class("s-menu--item");
        expect(item).to.have.class("custom-class");
    });

    it("should have role='menuitem' on the li element", () => {
        render(MenuItemLink, {
            href: "#",
            children,
        });
        const item = screen.getByRole("menuitem");
        expect(item.tagName).to.equal("LI");
        expect(item).to.have.class("s-menu--item");
    });

    it("should call onclick handler when clicked", async () => {
        const onClickSpy = sinon.spy();
        render(MenuItemLink, {
            href: "#",
            children,
            onclick: onClickSpy,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        await user.click(link!);
        expect(onClickSpy).to.have.been.calledOnce;
    });

    it("should pass through additional props to the link/button", () => {
        render(MenuItemLink, {
            href: "#",
            "data-testid": "menu-item-link",
            children,
        });
        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.have.attr("data-testid", "menu-item-link");
    });
});


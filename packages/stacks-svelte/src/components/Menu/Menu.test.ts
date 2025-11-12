import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createSvelteComponentsSnippet } from "../../../test-utils";

import Menu from "./Menu.svelte";
import MenuItemLink from "./MenuItemLink.svelte";
import MenuTitle from "./MenuTitle.svelte";
import MenuDivider from "./MenuDivider.svelte";

const childrenSnippet = createRawSnippet(() => ({
    render: () => "<span></span>",
}));

const menuItemsSnippet = createSvelteComponentsSnippet([
    {
        component: MenuItemLink,
        props: {
            href: "#",
            children: createRawSnippet(() => ({
                render: () => "<span>Share</span>",
            })),
        },
    },
    {
        component: MenuItemLink,
        props: {
            href: "#",
            children: createRawSnippet(() => ({
                render: () => "<span>Edit</span>",
            })),
        },
    },
]);

describe("Menu", () => {
    it("should render the menu with children", () => {
        render(Menu, {
            children: menuItemsSnippet,
        });
        expect(screen.getByRole("menu")).to.exist;
        expect(screen.getByText("Share")).to.exist;
        expect(screen.getByText("Edit")).to.exist;
    });

    it("should render as a ul by default", () => {
        render(Menu, {
            children: childrenSnippet,
        });
        const menu = screen.getByRole("menu");
        expect(menu.tagName).to.equal("UL");
        expect(menu).to.have.class("s-menu");
    });

    it("should render with role='menu' when tag is ul", () => {
        render(Menu, {
            tag: "ul",
            children: childrenSnippet,
        });
        expect(screen.getByRole("menu")).to.exist;
    });

    it("should render as a div when tag is div", () => {
        render(Menu, {
            tag: "div",
            children: childrenSnippet,
        });
        const menu = document.querySelector(".s-menu");
        expect(menu).to.exist;
        expect(menu?.tagName).to.equal("DIV");
    });

    it("should not have role attribute when tag is div", () => {
        render(Menu, {
            tag: "div",
            children: childrenSnippet,
        });
        const menu = document.querySelector(".s-menu");
        expect(menu).to.exist;
        expect(menu).not.to.have.attribute("role");
    });

    it("should render with arbitrary classes", () => {
        render(Menu, {
            class: "custom-class",
            children: childrenSnippet,
        });
        const menu = screen.getByRole("menu");
        expect(menu).to.have.class("s-menu");
        expect(menu).to.have.class("custom-class");
    });

    it("should render menu with title and divider", () => {
        const menuWithTitleAndDivider = createSvelteComponentsSnippet([
            {
                component: MenuTitle,
                props: {
                    children: createRawSnippet(() => ({
                        render: () => "<span>Section Title</span>",
                    })),
                },
            },
            {
                component: MenuItemLink,
                props: {
                    href: "#",
                    children: createRawSnippet(() => ({
                        render: () => "<span>Item</span>",
                    })),
                },
            },
            {
                component: MenuDivider,
                props: {},
            },
        ]);

        render(Menu, {
            children: menuWithTitleAndDivider,
        });

        expect(screen.getByRole("menu")).to.exist;
        expect(screen.getByText("Section Title")).to.exist;
        expect(screen.getByText("Item")).to.exist;
        expect(document.querySelector(".s-menu--divider")).to.exist;
    });
});


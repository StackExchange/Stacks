import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import {
    createSvelteComponentsSnippet,
    type ComponentMeta,
} from "../../../test-utils";
import type { Component } from "svelte";

import Menu from "./Menu.svelte";
import MenuItem from "./MenuItem.svelte";
import MenuTitle from "./MenuTitle.svelte";
import MenuDivider from "./MenuDivider.svelte";
import { IconSettings } from "@stackoverflow/stacks-icons/icons";

describe("Menu", () => {
    const createMenuItem = (props: Record<string, unknown>) =>
        ({
            component: MenuItem,
            props,
        }) as ComponentMeta<Component>;

    const createMenuTitle = (props: Record<string, unknown>) =>
        ({
            component: MenuTitle,
            props,
        }) as ComponentMeta<Component>;

    const createMenuDivider = (props: Record<string, unknown> = {}) =>
        ({
            component: MenuDivider,
            props,
        }) as ComponentMeta<Component>;

    const children = (text?: string) =>
        createRawSnippet(() => ({
            render: () => `<span>${text ?? ""}</span>`,
        }));

    // Menu
    it("should render the menu with menu items", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({ href: "#", children: children("Share") }),
            createMenuItem({ href: "#", children: children("Edit") }),
        ]);

        render(Menu, { children: menuItems });

        expect(screen.getByRole("menu")).to.exist;
        expect(screen.getByText("Share")).to.exist;
        expect(screen.getByText("Edit")).to.exist;
        expect(screen.getAllByRole("menuitem")).to.have.length(2);
    });

    it("should render with arbitrary classes", () => {
        render(Menu, { class: "custom-class", children: children() });

        const menu = screen.getByRole("menu");
        expect(menu).to.have.class("s-menu");
        expect(menu).to.have.class("custom-class");
    });

    // Menu Item
    it("should render menu item as anchor when href is provided", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({ href: "#share", children: children("Share") }),
        ]);

        render(Menu, { children: menuItems });

        const menuItem = screen.getByRole("menuitem");
        const link = menuItem.querySelector("a");
        expect(link).to.exist;
        expect(link).to.have.attribute("href", "#share");
        expect(link).to.have.class("s-menu--action");
    });

    it("should render menu item as label with input when href is not provided", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                name: "menu-filter",
                value: "delete",
                children: children("Delete"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const menuItem = screen.getByRole("menuitem");
        const label = menuItem.querySelector("label");
        const input = menuItem.querySelector("input");
        expect(label).to.exist;
        expect(label).to.have.class("s-menu--action");
        expect(label).to.have.class("s-check-control");
        expect(label).to.have.class("s-check-control__checkmark");
        expect(input).to.exist;
        expect(input).to.have.attribute("type", "radio");
        expect(input).to.have.attribute("name", "menu-filter");
        expect(input).to.have.attribute("value", "delete");
    });

    it("should render menu item with danger styling when danger prop is true", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                href: "#",
                danger: true,
                children: children("Delete"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.have.class("s-menu--action__danger");
    });

    it("should render menu item with selected styling when selected prop is true", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                name: "menu-filter",
                value: "delete",
                danger: true,
                children: children("Delete"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const label = screen.getByRole("menuitem").querySelector("label");
        expect(label).to.have.class("s-menu--action__danger");
    });

    it("should render menu item with checked state when checked prop is true", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                name: "menu-filter",
                value: "current",
                checked: true,
                children: children("Current Item"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const menuItem = screen.getByRole("menuitem");
        const label = menuItem.querySelector("label");
        const input = menuItem.querySelector("input");
        expect(label).to.have.class("is-selected");
        expect(input).to.have.property("checked", true);
    });

    it("should render menu item with custom i18nSelectedLabel when checked", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                name: "menu-filter",
                value: "current",
                checked: true,
                i18nSelectedLabel: "Sélectionné",
                children: children("Current Item"),
            }),
        ]);

        render(Menu, { children: menuItems });

        expect(screen.getByText("Sélectionné")).to.exist;
        const selectedLabel = screen.getByText("Sélectionné");
        expect(selectedLabel).to.have.class("v-visible-sr");
    });

    it("should render menu item with checkbox type when type is checkbox", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                type: "checkbox",
                name: "menu-filter",
                value: "option1",
                children: children("Option 1"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const input = screen.getByRole("menuitem").querySelector("input");
        expect(input).to.have.attribute("type", "checkbox");
        expect(input).to.have.class("s-checkbox");
    });

    it("should render menu item with radio type by default", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                name: "menu-filter",
                value: "option1",
                children: children("Option 1"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const input = screen.getByRole("menuitem").querySelector("input");
        expect(input).to.have.attribute("type", "radio");
        expect(input).to.have.class("s-radio");
    });

    it("should render menu item with icon when icon prop is provided (anchor)", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                href: "#",
                icon: IconSettings,
                children: children("Share"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const icon = document.querySelector(".s-menu--icon");
        expect(icon).to.exist;
    });

    it("should render menu item with icon when icon prop is provided (input)", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                name: "menu-filter",
                value: "share",
                icon: IconSettings,
                children: children("Share"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const icon = document.querySelector(".s-menu--icon");
        expect(icon).to.exist;
    });

    it("should render menu item with arbitrary classes", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                class: "bg-blue-400",
                children: children("Item"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const menuItem = screen.getByRole("menuitem");
        expect(menuItem).to.have.class("s-menu--item");
        expect(menuItem).to.have.class("bg-blue-400");
    });

    // Title
    it("should render menu title with role='separator'", () => {
        const menuWithTitle = createSvelteComponentsSnippet([
            createMenuTitle({ children: children("Section Title") }),
        ]);

        render(Menu, { children: menuWithTitle });

        const title = screen.getByRole("separator");
        expect(title).to.exist;
        expect(title).to.have.class("s-menu--title");
        expect(screen.getByText("Section Title")).to.exist;
    });

    it("should render menu title with arbitrary classes", () => {
        const menuWithTitle = createSvelteComponentsSnippet([
            createMenuTitle({ class: "fw-bold", children: children("Title") }),
        ]);

        render(Menu, { children: menuWithTitle });

        const title = screen.getByRole("separator");
        expect(title).to.have.class("s-menu--title");
        expect(title).to.have.class("fw-bold");
    });

    // Divider
    it("should render menu divider with role='separator'", () => {
        const menuWithDivider = createSvelteComponentsSnippet([
            createMenuDivider({}),
        ]);

        render(Menu, { children: menuWithDivider });

        const divider = screen.getByRole("separator");
        expect(divider).to.exist;
        expect(divider).to.have.class("s-menu--divider");
    });

    it("should render menu divider with arbitrary classes", () => {
        const menuWithDivider = createSvelteComponentsSnippet([
            createMenuDivider({ class: "bg-red-400" }),
        ]);

        render(Menu, { children: menuWithDivider });

        const divider = screen.getByRole("separator");
        expect(divider).to.have.class("s-menu--divider");
        expect(divider).to.have.class("bg-red-400");
    });
});

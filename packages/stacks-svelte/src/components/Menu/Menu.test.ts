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
import MenuCheckItem from "./MenuCheckItem.svelte";
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

    const createMenuCheckItem = (props: Record<string, unknown>) =>
        ({
            component: MenuCheckItem,
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

        const menu = screen.getByRole("menu");
        expect(menu).to.exist;
        expect(menu.tagName).to.equal("UL");
        expect(menu).to.have.attribute("role", "menu");
        expect(screen.getByText("Share")).to.exist;
        expect(screen.getByText("Edit")).to.exist;
        expect(screen.getAllByRole("menuitem")).to.have.length(2);
    });

    it("should render as a fieldset when type is fieldset", () => {
        render(Menu, { type: "fieldset", children: children() });

        const fieldset = document.querySelector("fieldset.s-menu");
        expect(fieldset).to.exist;
        expect(fieldset).to.have.class("s-menu");
        expect(fieldset!.tagName).to.equal("FIELDSET");
        expect(fieldset).not.to.have.attribute("role");
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

    it("should render menu item as button when href is not provided", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                children: children("Delete"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const menuItem = screen.getByRole("menuitem");
        const button = menuItem.querySelector("button");
        expect(button).to.exist;
        expect(button).to.have.class("s-menu--action");
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

    it("should render with arbitrary link classes", () => {
        const menuItems = createSvelteComponentsSnippet([
            createMenuItem({
                href: "#",
                linkClass: "custom-link-class",
                children: children("Delete"),
            }),
        ]);

        render(Menu, { children: menuItems });

        const link = screen.getByRole("menuitem").querySelector("a");
        expect(link).to.have.class("custom-link-class");
    });

    // Menu Check Item
    it("should render menu check item with required props", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-name",
                label: "Option 1",
                type: "checkbox",
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        expect(screen.getByText("Option 1")).to.exist;
        expect(screen.getByRole("checkbox")).to.exist;
        const container = screen.getByText("Option 1").closest(".s-menu--item");
        expect(container).to.exist;
    });

    it("should render menu check item as checkbox type", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-name",
                label: "Option 1",
                type: "checkbox",
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.attribute("type", "checkbox");
        expect(input).to.have.id("test-checkbox-1");
        expect(input).to.have.attribute("name", "test-name");
    });

    it("should render menu check item as radio type", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-radio-1",
                name: "test-radio-group",
                label: "Option 1",
                type: "radio",
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        const input = screen.getByRole("radio");
        expect(input).to.have.attribute("type", "radio");
        expect(input).to.have.id("test-radio-1");
        expect(input).to.have.attribute("name", "test-radio-group");
    });

    it("should render menu check item with checked state when checked is true", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-name",
                label: "Option 1",
                type: "checkbox",
                checked: true,
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.property("checked", true);
    });

    it("should render menu check item with description when provided", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-name",
                label: "Option 1",
                type: "checkbox",
                description: "Test description",
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        const description = screen.getByText("Test description");
        expect(description).to.exist;
        expect(description).to.have.class("s-description");
    });

    it("should render menu check item disabled when disabled is true", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-name",
                label: "Option 1",
                type: "checkbox",
                disabled: true,
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.attribute("disabled");
    });

    it("should render menu check item with icon when icon prop is provided", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-name",
                label: "Option 1",
                type: "checkbox",
                icon: IconSettings,
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        const icon = document.querySelector(".s-menu--icon");
        expect(icon).to.exist;
    });

    it("should render menu check item with value attribute", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-name",
                label: "Option 1",
                type: "checkbox",
                value: 42,
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.attribute("value", "42");
    });

    it("should render menu check item with arbitrary classes", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-name",
                label: "Option 1",
                type: "checkbox",
                class: "custom-class",
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        const container = screen.getByText("Option 1").closest(".s-menu--item");
        expect(container).to.have.class("custom-class");
        expect(container).to.have.class("s-menu--item");
    });

    it("should render multiple menu check items", () => {
        const menuCheckItems = createSvelteComponentsSnippet([
            createMenuCheckItem({
                id: "test-checkbox-1",
                name: "test-group",
                label: "Option 1",
                type: "checkbox",
            }),
            createMenuCheckItem({
                id: "test-checkbox-2",
                name: "test-group",
                label: "Option 2",
                type: "checkbox",
            }),
            createMenuCheckItem({
                id: "test-checkbox-3",
                name: "test-group",
                label: "Option 3",
                type: "checkbox",
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuCheckItems });

        expect(screen.getAllByRole("checkbox")).to.have.length(3);
        expect(screen.getByText("Option 1")).to.exist;
        expect(screen.getByText("Option 2")).to.exist;
        expect(screen.getByText("Option 3")).to.exist;
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

    it("should render menu title as legend when type is legend", () => {
        const menuWithTitle = createSvelteComponentsSnippet([
            createMenuTitle({
                type: "legend",
                children: children("Section Title"),
            }),
        ]);

        render(Menu, { type: "fieldset", children: menuWithTitle });

        const legend = document.querySelector("legend.s-menu--title");
        expect(legend).to.exist;
        expect(legend).to.have.class("s-menu--title");
        expect(legend!.tagName).to.equal("LEGEND");
        expect(legend).not.to.have.attribute("role");
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

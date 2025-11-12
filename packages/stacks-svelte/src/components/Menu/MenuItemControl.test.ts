import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import MenuItemControl from "./MenuItemControl.svelte";

const user = userEvent.setup();

const labelSnippet = createRawSnippet(() => ({
    render: () => "<span>Option Label</span>",
}));

const descriptionSnippet = createRawSnippet(() => ({
    render: () => "<span>Option description text</span>",
}));

describe("MenuItemControl", () => {
    it("should render the menu item control", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
        });
        expect(screen.getByRole("menuitemradio")).to.exist;
        expect(screen.getByText("Option Label")).to.exist;
    });

    it("should render as a radio button when type is radio", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
        });
        const input = screen.getByRole("menuitemradio") as HTMLInputElement;
        expect(input).to.exist;
        expect(input.type).to.equal("radio");
        expect(input).to.have.class("s-radio");
        expect(input).to.have.id("test-radio");
        expect(input).to.have.attr("name", "test-group");
    });

    it("should render as a checkbox when type is checkbox", () => {
        render(MenuItemControl, {
            type: "checkbox",
            id: "test-checkbox",
            name: "test-group",
            label: labelSnippet,
        });
        const input = screen.getByRole("menuitemcheckbox") as HTMLInputElement;
        expect(input).to.exist;
        expect(input.type).to.equal("checkbox");
        expect(input).to.have.class("s-checkbox");
        expect(input).to.have.id("test-checkbox");
        expect(input).to.have.attr("name", "test-group");
    });

    it("should have role='menuitemradio' for radio buttons", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
        });
        expect(screen.getByRole("menuitemradio")).to.exist;
    });

    it("should have role='menuitemcheckbox' for checkboxes", () => {
        render(MenuItemControl, {
            type: "checkbox",
            id: "test-checkbox",
            name: "test-group",
            label: labelSnippet,
        });
        expect(screen.getByRole("menuitemcheckbox")).to.exist;
    });

    it("should render with checked state", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            checked: true,
            label: labelSnippet,
        });
        const input = screen.getByRole("menuitemradio") as HTMLInputElement;
        expect(input.checked).to.be.true;
    });

    it("should render with disabled state", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            disabled: true,
            label: labelSnippet,
        });
        const input = screen.getByRole("menuitemradio") as HTMLInputElement;
        expect(input.disabled).to.be.true;
    });

    it("should render the label text wrapped in s-label div", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
        });
        const labelDiv = document.querySelector(".s-label");
        expect(labelDiv).to.exist;
        expect(labelDiv).to.contain.text("Option Label");
    });

    it("should render the description when provided", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
            description: descriptionSnippet,
        });
        const descriptionDiv = document.querySelector(".s-description");
        expect(descriptionDiv).to.exist;
        expect(descriptionDiv).to.contain.text("Option description text");
        expect(descriptionDiv).to.have.class("mt2");
    });

    it("should not render description when not provided", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
        });
        const descriptionDiv = document.querySelector(".s-description");
        expect(descriptionDiv).not.to.exist;
    });

    it("should have correct for attribute on label matching input id", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
        });
        const label = document.querySelector("label");
        expect(label).to.have.attr("for", "test-radio");
    });

    it("should render with s-menu--item and s-check-control classes", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
        });
        const label = document.querySelector("label");
        expect(label).to.have.class("s-menu--item");
        expect(label).to.have.class("s-check-control");
    });

    it("should render with arbitrary classes", () => {
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            class: "custom-class",
            label: labelSnippet,
        });
        const label = document.querySelector("label");
        expect(label).to.have.class("s-menu--item");
        expect(label).to.have.class("s-check-control");
        expect(label).to.have.class("custom-class");
    });

    it("should call onchange handler when input changes", async () => {
        const onChangeSpy = sinon.spy();
        render(MenuItemControl, {
            type: "radio",
            id: "test-radio",
            name: "test-group",
            label: labelSnippet,
            onchange: onChangeSpy,
        });
        const input = screen.getByRole("menuitemradio") as HTMLInputElement;
        await user.click(input);
        expect(onChangeSpy).to.have.been.calledOnce;
    });

    it("should pass through additional props to the label element", () => {
        render(MenuItemControl, {
            "type": "radio",
            "id": "test-radio",
            "name": "test-group",
            "label": labelSnippet,
            "data-testid": "menu-item-control",
        });
        const label = document.querySelector("label");
        expect(label).to.have.attr("data-testid", "menu-item-control");
    });
});

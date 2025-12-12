import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import CheckControl from "./CheckControl.svelte";

const user = userEvent.setup();

type CheckControlProps = {
    id: string;
    name: string;
    label: string;
    type: "checkbox" | "radio";
};

const baseCheckControlProps = (suffix: string | number): CheckControlProps => ({
    id: `test-checkbox-${suffix}`,
    label: `Option ${suffix}`,
    name: "test-name",
    type: "checkbox",
});

describe("CheckControl", () => {
    // Basic rendering
    it("should render the CheckControl", () => {
        render(CheckControl, baseCheckControlProps("basic"));

        const input = screen.getByRole("checkbox");
        expect(input).to.exist;
        expect(input).to.have.id("test-checkbox-basic");
        expect(input).to.have.attribute("name", "test-name");
        expect(input).to.have.attribute("type", "checkbox");
        expect(input).to.have.class("s-checkbox");
        expect(screen.getByText("Option basic")).to.exist;
    });

    it("should render as a radio input", () => {
        render(CheckControl, {
            ...baseCheckControlProps("radio"),
            type: "radio",
        });

        const input = screen.getByRole("radio");
        expect(input).to.have.attribute("type", "radio");
        expect(input).to.have.class("s-radio");
    });

    it("should render checked input when checked is true", () => {
        render(CheckControl, {
            ...baseCheckControlProps("checked"),
            checked: true,
        });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.property("checked", true);
    });

    it("should render unchecked input when checked is false", () => {
        render(CheckControl, {
            ...baseCheckControlProps("unchecked"),
            checked: false,
        });

        const input = screen.getByRole("checkbox");
        expect(input).not.to.have.property("checked", true);
    });

    it("should set indeterminate state when checked is 'indeterminate'", async () => {
        render(CheckControl, {
            ...baseCheckControlProps("indeterminate"),
            checked: "indeterminate",
        });

        await tick();

        const input = screen.getByRole("checkbox") as HTMLInputElement;
        expect(input.indeterminate).to.be.true;
        expect(input).not.to.have.property("checked", true);
    });

    // Checkmark prop
    it("should render as div wrapper when checkmark is false", () => {
        render(CheckControl, {
            ...baseCheckControlProps("checkmark-false"),
            checkmark: false,
        });

        const container = screen.getByText("Option checkmark-false").closest("div");
        expect(container).to.exist;
        expect(container).to.have.class("s-check-control");
        expect(container).not.to.have.class("s-check-control__checkmark");
    });

    it("should render as label wrapper when checkmark is true", () => {
        render(CheckControl, {
            ...baseCheckControlProps("checkmark-true"),
            checkmark: true,
        });

        const container = screen.getByText("Option checkmark-true").closest("label");
        expect(container).to.exist;
        expect(container).to.have.class("s-check-control");
        expect(container).to.have.class("s-check-control__checkmark");
        expect(container).to.have.attribute("for", "test-checkbox-checkmark-true");
    });

    it("should not apply s-checkbox or s-radio classes when checkmark is true", () => {
        render(CheckControl, {
            ...baseCheckControlProps("checkmark-true"),
            checkmark: true,
        });

        const input = screen.getByRole("checkbox");
        expect(input).not.to.have.class("s-checkbox");
        expect(input).not.to.have.class("s-radio");
    });

    // Description prop
    it("should render description when provided", () => {
        render(CheckControl, {
            ...baseCheckControlProps("description"),
            description: "Test description",
        });

        const description = screen.getByText("Test description");
        expect(description).to.exist;
        expect(description).to.have.class("s-description");
    });

    // Disabled prop
    it("should render disabled input when disabled is true", () => {
        render(CheckControl, {
            ...baseCheckControlProps("disabled"),
            disabled: true,
        });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.attribute("disabled");
    });

    // State prop
    it("should apply the appropriate state class", () => {
        render(CheckControl, {
            ...baseCheckControlProps("state"),
            state: "error",
        });

        const container = screen.getByText("Option state").closest(".s-check-control");
        expect(container).to.have.class("has-error");
    });

    // Value prop
    it("should render input value", () => {
        render(CheckControl, {
            ...baseCheckControlProps("value"),
            value: 42,
        });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.attribute("value", "42");
    });

    // Class prop
    it("should apply arbitrary classes to container", () => {
        render(CheckControl, {
            ...baseCheckControlProps("class"),
            class: "custom-class",
        });

        const container = screen.getByText("Option class").closest(".s-check-control");
        expect(container).to.have.class("custom-class");
        expect(container).to.have.class("s-check-control");
    });

    it("should adjust classes on prop updates", async () => {
        const { rerender } = render(CheckControl, {
            ...baseCheckControlProps("class-change"),
            class: "custom-class-1",
        });

        rerender({
            ...baseCheckControlProps("class-change"),
            class: "custom-class-2",
        });

        await tick();

        const container = screen.getByText("Option class-change").closest(".s-check-control");
        expect(container).not.to.have.class("custom-class-1");
        expect(container).to.have.class("custom-class-2");
    });

    // Label association
    it("should associate label with input", () => {
        render(CheckControl, {
            ...baseCheckControlProps("label"),
        });

        const label = screen.getByText("Option label").closest("label");
        expect(label).to.exist;
        expect(label).to.have.attribute("for", "test-checkbox-label");
    });

    // Interaction
    it("should be clickable and toggle checked state", async () => {
        render(CheckControl, {
            ...baseCheckControlProps("interaction"),
        });

        const input = screen.getByRole("checkbox") as HTMLInputElement;
        expect(input.checked).to.be.false;

        await user.click(input);
        expect(input.checked).to.be.true;

        await user.click(input);
        expect(input.checked).to.be.false;
    });
});

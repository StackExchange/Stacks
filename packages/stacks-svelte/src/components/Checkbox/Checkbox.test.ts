import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Checkbox from "./Checkbox.svelte";

type CheckboxProps = {
    id: string;
    name: string;
    label: string;
};

const baseCheckboxProps = (suffix: string | number): CheckboxProps => ({
    id: `test-checkbox-${suffix}`,
    label: `Option ${suffix}`,
    name: "test-name",
});

describe("Checkbox", () => {
    it("should render the Checkbox", () => {
        render(Checkbox, baseCheckboxProps("basic"));

        const input = screen.getByRole("checkbox");
        expect(input).to.exist;
        expect(input).to.have.id("test-checkbox-basic");
        expect(input).to.have.attribute("name", "test-name");
        expect(input).to.have.attribute("type", "checkbox");
        expect(screen.getByText("Option basic")).to.exist;
    });

    it("should render checked input when checked is true", () => {
        render(Checkbox, {
            ...baseCheckboxProps("checked"),
            checked: true,
        });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.property("checked", true);
    });

    it("should set indeterminate state when checked is 'indeterminate'", async () => {
        render(Checkbox, {
            ...baseCheckboxProps("indeterminate"),
            checked: "indeterminate",
        });

        await tick();

        const input = screen.getByRole("checkbox") as HTMLInputElement;
        expect(input.indeterminate).to.be.true;
        expect(input).not.to.have.property("checked", true);
    });

    it("should render as div wrapper when checkmark is false", () => {
        render(Checkbox, {
            ...baseCheckboxProps("checkmark-false"),
            checkmark: false,
        });

        const container = screen
            .getByText("Option checkmark-false")
            .closest("div");
        expect(container).to.exist;
        expect(container).to.have.class("s-checkbox");
        expect(container).not.to.have.class("s-checkbox__checkmark");
    });

    it("should render as label wrapper when checkmark is true", () => {
        render(Checkbox, {
            ...baseCheckboxProps("checkmark-true"),
            checkmark: true,
        });

        const container = screen
            .getByText("Option checkmark-true")
            .closest("label");
        expect(container).to.exist;
        expect(container).to.have.class("s-checkbox");
        expect(container).to.have.class("s-checkbox__checkmark");
        expect(container).to.have.attribute(
            "for",
            "test-checkbox-checkmark-true"
        );
    });

    it("should render description when provided", () => {
        render(Checkbox, {
            ...baseCheckboxProps("description"),
            description: "Test description",
        });

        const description = screen.getByText("Test description");
        expect(description).to.exist;
        expect(description).to.have.class("s-description");
    });

    it("should render disabled input when disabled is true", () => {
        render(Checkbox, {
            ...baseCheckboxProps("disabled"),
            disabled: true,
        });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.attribute("disabled");
    });

    it("should apply the appropriate state class", () => {
        render(Checkbox, {
            ...baseCheckboxProps("state"),
            state: "error",
        });

        const container = screen
            .getByText("Option state")
            .closest(".s-checkbox");
        expect(container).to.have.class("has-error");
    });

    it("should render input value", () => {
        render(Checkbox, {
            ...baseCheckboxProps("value"),
            value: 42,
        });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.attribute("value", "42");
    });

    it("should apply arbitrary classes to container", () => {
        render(Checkbox, {
            ...baseCheckboxProps("class"),
            class: "custom-class",
        });

        const container = screen
            .getByText("Option class")
            .closest(".s-checkbox");
        expect(container).to.have.class("custom-class");
    });

    it("should adjust classes on prop updates", async () => {
        const { rerender } = render(Checkbox, {
            ...baseCheckboxProps("class-change"),
            class: "custom-class-1",
        });

        rerender({
            ...baseCheckboxProps("class-change"),
            class: "custom-class-2",
        });

        await tick();

        const container = screen
            .getByText("Option class-change")
            .closest(".s-checkbox");
        expect(container).not.to.have.class("custom-class-1");
        expect(container).to.have.class("custom-class-2");
    });

    it("should associate label with input", () => {
        render(Checkbox, {
            ...baseCheckboxProps("label"),
        });

        const label = screen.getByText("Option label").closest("label");
        expect(label).to.exist;
        expect(label).to.have.attribute("for", "test-checkbox-label");
    });
});

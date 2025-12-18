import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import Checkbox from "./Checkbox.svelte";
import CheckboxGroup, { type CheckboxOption } from "./CheckboxGroup.svelte";

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

    it("should set indeterminate state when indeterminate is true", async () => {
        render(Checkbox, {
            ...baseCheckboxProps("indeterminate"),
            indeterminate: true,
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

    it("should call onchange callback when checkbox is clicked", async () => {
        const onChangeSpy = sinon.spy();
        render(Checkbox, {
            ...baseCheckboxProps("onchange"),
            onchange: onChangeSpy,
        });

        const input = screen.getByRole("checkbox");
        await userEvent.click(input);

        await tick();
        expect(onChangeSpy).to.have.been.calledOnce;
        expect(onChangeSpy).to.have.been.calledWithMatch({
            currentTarget: { checked: true },
        });
    });

    it("should update checked state when checkbox is clicked", async () => {
        render(Checkbox, {
            ...baseCheckboxProps("bindable"),
        });

        const input = screen.getByRole("checkbox");
        expect(input).not.to.have.property("checked", true);

        await userEvent.click(input);
        await tick();

        expect(input).to.have.property("checked", true);
    });

    it("should not update checked state when indeterminate is true", async () => {
        render(Checkbox, {
            ...baseCheckboxProps("indeterminate-no-update"),
            indeterminate: true,
        });

        await tick();

        const input = screen.getByRole("checkbox") as HTMLInputElement;
        expect(input.indeterminate).to.be.true;
        expect(input).not.to.have.property("checked", true);

        await userEvent.click(input);
        await tick();

        expect(input).not.to.have.property("checked", true);
        expect(input.indeterminate).to.be.true;
    });

    it("should apply all state classes", () => {
        const states = ["error", "success", "warning"] as const;

        states.forEach((state) => {
            const { unmount } = render(Checkbox, {
                ...baseCheckboxProps(`state-${state}`),
                state,
            });

            const container = screen
                .getByText(`Option state-${state}`)
                .closest(".s-checkbox");
            expect(container).to.have.class(`has-${state}`);

            unmount();
        });
    });

    it("should render string value", () => {
        render(Checkbox, {
            ...baseCheckboxProps("value-string"),
            value: "test-value",
        });

        const input = screen.getByRole("checkbox");
        expect(input).to.have.attribute("value", "test-value");
    });

    it("should render description in checkmark mode", () => {
        render(Checkbox, {
            ...baseCheckboxProps("checkmark-description"),
            checkmark: true,
            description: "Checkmark description",
        });

        const description = screen.getByText("Checkmark description");
        expect(description).to.exist;
        expect(description).to.have.class("s-description");

        const container = screen
            .getByText("Option checkmark-description")
            .closest("label");
        expect(container).to.exist;
    });

    it("should render description in non-checkmark mode", () => {
        render(Checkbox, {
            ...baseCheckboxProps("non-checkmark-description"),
            checkmark: false,
            description: "Non-checkmark description",
        });

        const description = screen.getByText("Non-checkmark description");
        expect(description).to.exist;
        expect(description).to.have.class("s-description");
    });

    it("should update indeterminate state when prop changes", async () => {
        const { rerender } = render(Checkbox, {
            ...baseCheckboxProps("indeterminate-update"),
            indeterminate: false,
        });

        await tick();

        let input = screen.getByRole("checkbox") as HTMLInputElement;
        expect(input.indeterminate).to.be.false;

        rerender({
            ...baseCheckboxProps("indeterminate-update"),
            indeterminate: true,
        });

        await tick();

        input = screen.getByRole("checkbox") as HTMLInputElement;
        expect(input.indeterminate).to.be.true;
    });

    it("should update checked state when prop changes externally", async () => {
        const { rerender } = render(Checkbox, {
            ...baseCheckboxProps("checked-external"),
            checked: false,
        });

        let input = screen.getByRole("checkbox");
        expect(input).not.to.have.property("checked", true);

        rerender({
            ...baseCheckboxProps("checked-external"),
            checked: true,
        });

        await tick();

        input = screen.getByRole("checkbox");
        expect(input).to.have.property("checked", true);
    });
});

describe("CheckboxGroup", () => {
    const baseCheckboxGroupOptions: CheckboxOption[] = [
        { id: "checkbox-1", label: "Option 1", value: "option1" },
        { id: "checkbox-2", label: "Option 2", value: "option2" },
        { id: "checkbox-3", label: "Option 3", value: "option3" },
    ];

    it("should render the CheckboxGroup", () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
        });

        expect(screen.getByText("Test Checkbox Group")).to.exist;
        expect(screen.getByText("Test Checkbox Group").tagName).to.equal(
            "LEGEND"
        );

        const checkboxes = screen.getAllByRole("checkbox");
        expect(checkboxes).to.have.length(3);
        expect(checkboxes[0]).to.have.attribute("name", "test-checkbox-group");
        expect(checkboxes[1]).to.have.attribute("name", "test-checkbox-group");
        expect(checkboxes[2]).to.have.attribute("name", "test-checkbox-group");
    });

    it("should render checkbox options with correct values", () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
        });

        const checkboxes = screen.getAllByRole("checkbox");
        expect(checkboxes[0]).to.have.attribute("value", "option1");
        expect(checkboxes[1]).to.have.attribute("value", "option2");
        expect(checkboxes[2]).to.have.attribute("value", "option3");
    });

    it("should render checkbox options with correct labels", () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
        });

        expect(screen.getByText("Option 1")).to.exist;
        expect(screen.getByText("Option 2")).to.exist;
        expect(screen.getByText("Option 3")).to.exist;
    });

    it("should check checkbox options when value array includes them", () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
            value: ["option1", "option3"],
        });

        const checkboxes = screen.getAllByRole("checkbox");
        expect(checkboxes[0]).to.have.property("checked", true);
        expect(checkboxes[1]).not.to.have.property("checked", true);
        expect(checkboxes[2]).to.have.property("checked", true);
    });

    it("should update checked state when checkboxes are clicked", async () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
        });

        const checkboxes = screen.getAllByRole("checkbox");
        await userEvent.click(checkboxes[0]);
        await tick();
        await userEvent.click(checkboxes[2]);
        await tick();

        expect(checkboxes[0]).to.have.property("checked", true);
        expect(checkboxes[1]).not.to.have.property("checked", true);
        expect(checkboxes[2]).to.have.property("checked", true);
    });

    it("should render disabled fieldset when disabled is true", () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
            disabled: true,
        });

        const fieldset = screen
            .getByText("Test Checkbox Group")
            .closest("fieldset");
        expect(fieldset).to.have.attribute("disabled");
    });

    it("should render horizontal layout when horizontal is true", () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
            horizontal: true,
        });

        const fieldset = screen
            .getByText("Test Checkbox Group")
            .closest("fieldset");
        expect(fieldset).to.have.class("s-form-group__horizontal");
    });

    it("should apply state classes", async () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
            state: "error",
        });

        const fieldset = screen
            .getByText("Test Checkbox Group")
            .closest("fieldset");
        expect(fieldset).to.have.class("has-error");
    });

    it("should apply custom classes", () => {
        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: baseCheckboxGroupOptions,
            class: "custom-class",
        });

        const fieldset = screen
            .getByText("Test Checkbox Group")
            .closest("fieldset");
        expect(fieldset).to.have.class("s-form-group");
        expect(fieldset).to.have.class("custom-class");
    });

    it("should render checkbox options with descriptions", () => {
        const optionsWithDescriptions: CheckboxOption[] = [
            {
                ...baseCheckboxGroupOptions[0],
                description: "Description for option 1",
            },
            baseCheckboxGroupOptions[1],
            baseCheckboxGroupOptions[2],
        ];

        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: optionsWithDescriptions,
        });

        expect(screen.getByText("Description for option 1")).to.exist;
    });

    it("should assign name and id to options without them", () => {
        const optionsWithoutId = [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
        ] as CheckboxOption[];

        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: optionsWithoutId,
        });

        const checkboxes = screen.getAllByRole("checkbox");
        expect(checkboxes[0]).to.have.id("test-checkbox-group-0");
        expect(checkboxes[1]).to.have.id("test-checkbox-group-1");
        expect(checkboxes[0]).to.have.attribute("name", "test-checkbox-group");
        expect(checkboxes[1]).to.have.attribute("name", "test-checkbox-group");
    });

    it("should call option onchange callback when provided", async () => {
        const onChangeSpy1 = sinon.spy();
        const onChangeSpy2 = sinon.spy();
        const optionsWithOnChange: CheckboxOption[] = [
            { ...baseCheckboxGroupOptions[0], onchange: onChangeSpy1 },
            { ...baseCheckboxGroupOptions[1], onchange: onChangeSpy2 },
            baseCheckboxGroupOptions[2],
        ];

        render(CheckboxGroup, {
            label: "Test Checkbox Group",
            name: "test-checkbox-group",
            options: optionsWithOnChange,
        });

        const checkboxes = screen.getAllByRole("checkbox");
        await userEvent.click(checkboxes[0]);

        await tick();
        expect(onChangeSpy1).to.have.been.calledOnce;
        expect(onChangeSpy2).not.to.have.been.called;
    });
});

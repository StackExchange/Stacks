import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import FormGroup from "./FormGroup.svelte";
import type { CheckboxOption, RadioOption } from "./FormGroup.svelte";

const baseRadioOptions: RadioOption[] = [
    { id: "radio-1", label: "Option 1", value: "option1" },
    { id: "radio-2", label: "Option 2", value: "option2" },
    { id: "radio-3", label: "Option 3", value: "option3" },
];

const baseCheckboxOptions: CheckboxOption[] = [
    { id: "checkbox-1", label: "Checkbox 1", value: "cb1" },
    { id: "checkbox-2", label: "Checkbox 2", value: "cb2" },
    { id: "checkbox-3", label: "Checkbox 3", value: "cb3" },
];

describe("FormGroup", () => {
    describe("RadioGroup", () => {
        it("should render the radio form group", () => {
            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
            });

            expect(screen.getByText("Test Radio Group")).to.exist;
            expect(screen.getByText("Test Radio Group").tagName).to.equal(
                "LEGEND"
            );

            const radios = screen.getAllByRole("radio");
            expect(radios).to.have.length(3);
            expect(radios[0]).to.have.attribute("name", "test-radio");
            expect(radios[1]).to.have.attribute("name", "test-radio");
            expect(radios[2]).to.have.attribute("name", "test-radio");
        });

        it("should render radio options with correct values", () => {
            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
            });

            const radios = screen.getAllByRole("radio");
            expect(radios[0]).to.have.attribute("value", "option1");
            expect(radios[1]).to.have.attribute("value", "option2");
            expect(radios[2]).to.have.attribute("value", "option3");
        });

        it("should assign name and id to options without them", () => {
            const optionsWithoutId = [
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
            ] as RadioOption[];

            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: optionsWithoutId,
            });

            const radios = screen.getAllByRole("radio");
            expect(radios[0]).to.have.id("test-radio-0");
            expect(radios[1]).to.have.id("test-radio-1");
            expect(radios[0]).to.have.attribute("name", "test-radio");
            expect(radios[1]).to.have.attribute("name", "test-radio");
        });

        it("should check the radio option when value matches", () => {
            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                value: "option2",
            });

            const radios = screen.getAllByRole("radio");
            expect(radios[0]).not.to.have.property("checked", true);
            expect(radios[1]).to.have.property("checked", true);
            expect(radios[2]).not.to.have.property("checked", true);
        });

        it("should update checked state when radio option is clicked", async () => {
            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
            });

            const radios = screen.getAllByRole("radio");
            await userEvent.click(radios[1]);

            await tick();
            expect(radios[1]).to.have.property("checked", true);
            expect(radios[0]).not.to.have.property("checked", true);
            expect(radios[2]).not.to.have.property("checked", true);
        });

        it("should update checked state when value prop changes", async () => {
            const { rerender } = render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                value: "option1",
            });

            let radios = screen.getAllByRole("radio");
            expect(radios[0]).to.have.property("checked", true);

            rerender({
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                value: "option2",
            });

            await tick();
            radios = screen.getAllByRole("radio");
            expect(radios[0]).not.to.have.property("checked", true);
            expect(radios[1]).to.have.property("checked", true);
        });

        it("should call option onchange callback when provided", async () => {
            const onChangeSpy1 = sinon.spy();
            const onChangeSpy2 = sinon.spy();
            const optionsWithOnChange = [
                { ...baseRadioOptions[0], onchange: onChangeSpy1 },
                { ...baseRadioOptions[1], onchange: onChangeSpy2 },
                baseRadioOptions[2],
            ] as RadioOption[];

            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: optionsWithOnChange,
            });

            const radios = screen.getAllByRole("radio");
            await userEvent.click(radios[0]);

            await tick();
            expect(onChangeSpy1).to.have.been.calledOnce;
            expect(onChangeSpy2).not.to.have.been.called;
        });
    });

    describe("CheckboxGroup", () => {
        it("should render the checkbox form group", () => {
            render(FormGroup, {
                type: "checkbox",
                label: "Test Checkbox Group",
                name: "test-checkbox",
                options: baseCheckboxOptions,
            });

            expect(screen.getByText("Test Checkbox Group")).to.exist;
            expect(screen.getByText("Test Checkbox Group").tagName).to.equal(
                "LEGEND"
            );

            const checkboxes = screen.getAllByRole("checkbox");
            expect(checkboxes).to.have.length(3);
            expect(checkboxes[0]).to.have.attribute("name", "test-checkbox");
            expect(checkboxes[1]).to.have.attribute("name", "test-checkbox");
            expect(checkboxes[2]).to.have.attribute("name", "test-checkbox");
        });

        it("should render checkbox options with correct values", () => {
            render(FormGroup, {
                type: "checkbox",
                label: "Test Checkbox Group",
                name: "test-checkbox",
                options: baseCheckboxOptions,
            });

            const checkboxes = screen.getAllByRole("checkbox");
            expect(checkboxes[0]).to.have.attribute("value", "cb1");
            expect(checkboxes[1]).to.have.attribute("value", "cb2");
            expect(checkboxes[2]).to.have.attribute("value", "cb3");
        });

        it("should check checkbox options when value array includes them", () => {
            render(FormGroup, {
                type: "checkbox",
                label: "Test Checkbox Group",
                name: "test-checkbox",
                options: baseCheckboxOptions,
                value: ["cb1", "cb3"],
            });

            const checkboxes = screen.getAllByRole("checkbox");
            expect(checkboxes[0]).to.have.property("checked", true);
            expect(checkboxes[1]).not.to.have.property("checked", true);
            expect(checkboxes[2]).to.have.property("checked", true);
        });

        it("should update checked state when checkboxes are clicked", async () => {
            render(FormGroup, {
                type: "checkbox",
                label: "Test Checkbox Group",
                name: "test-checkbox",
                options: baseCheckboxOptions,
            });

            const checkboxes = screen.getAllByRole("checkbox");
            await userEvent.click(checkboxes[0]);
            await tick();
            await userEvent.click(checkboxes[2]);
            await tick();

            expect(checkboxes[0]).to.have.property("checked", true);
            expect(checkboxes[2]).to.have.property("checked", true);
        });

        it("should update checked state when value prop changes", async () => {
            const { rerender } = render(FormGroup, {
                type: "checkbox",
                label: "Test Checkbox Group",
                name: "test-checkbox",
                options: baseCheckboxOptions,
                value: ["cb1"],
            });

            let checkboxes = screen.getAllByRole("checkbox");
            expect(checkboxes[0]).to.have.property("checked", true);
            expect(checkboxes[1]).not.to.have.property("checked", true);

            rerender({
                type: "checkbox",
                label: "Test Checkbox Group",
                name: "test-checkbox",
                options: baseCheckboxOptions,
                value: ["cb1", "cb3"],
            });

            await tick();
            checkboxes = screen.getAllByRole("checkbox");
            expect(checkboxes[0]).to.have.property("checked", true);
            expect(checkboxes[1]).not.to.have.property("checked", true);
            expect(checkboxes[2]).to.have.property("checked", true);
        });

        it("should use option checked prop when provided", () => {
            const optionsWithChecked: CheckboxOption[] = [
                { ...baseCheckboxOptions[0], checked: true },
                { ...baseCheckboxOptions[1], checked: false },
                baseCheckboxOptions[2],
            ];

            render(FormGroup, {
                type: "checkbox",
                label: "Test Checkbox Group",
                name: "test-checkbox",
                options: optionsWithChecked,
            });

            const checkboxes = screen.getAllByRole("checkbox");
            expect(checkboxes[0]).to.have.property("checked", true);
            expect(checkboxes[1]).to.have.property("checked", false);
        });

        it("should call option onchange callback when provided", async () => {
            const onChangeSpy1 = sinon.spy();
            const onChangeSpy2 = sinon.spy();
            const optionsWithOnChange: CheckboxOption[] = [
                { ...baseCheckboxOptions[0], onchange: onChangeSpy1 },
                { ...baseCheckboxOptions[1], onchange: onChangeSpy2 },
                baseCheckboxOptions[2],
            ];

            render(FormGroup, {
                type: "checkbox",
                label: "Test Checkbox Group",
                name: "test-checkbox",
                options: optionsWithOnChange,
            });

            const checkboxes = screen.getAllByRole("checkbox");
            await userEvent.click(checkboxes[0]);

            await tick();
            expect(onChangeSpy1).to.have.been.calledOnce;
            expect(onChangeSpy2).not.to.have.been.called;
        });
    });

    describe("FormGroup", () => {
        it("should render disabled fieldset when disabled is true", () => {
            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                disabled: true,
            });

            const fieldset = screen
                .getByText("Test Radio Group")
                .closest("fieldset");
            expect(fieldset).to.have.attribute("disabled");
        });

        it("should render horizontal layout when horizontal is true", () => {
            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                horizontal: true,
            });

            const fieldset = screen
                .getByText("Test Radio Group")
                .closest("fieldset");
            expect(fieldset).to.have.class("s-form-group__horizontal");
        });

        it("should apply state classes", async () => {
            const { rerender } = render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                state: "error",
            });

            let fieldset = screen
                .getByText("Test Radio Group")
                .closest("fieldset");
            expect(fieldset).to.have.class("has-error");

            rerender({
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                state: "success",
            });

            await tick();
            fieldset = screen.getByText("Test Radio Group").closest("fieldset");
            expect(fieldset).to.have.class("has-success");
            expect(fieldset).not.to.have.class("has-error");
        });

        it("should apply custom classes", () => {
            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                class: "custom-class",
            });

            const fieldset = screen
                .getByText("Test Radio Group")
                .closest("fieldset");
            expect(fieldset).to.have.class("s-form-group");
            expect(fieldset).to.have.class("custom-class");
        });

        it("should update classes on prop changes", async () => {
            const { rerender } = render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                class: "custom-class-1",
            });

            rerender({
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: baseRadioOptions,
                class: "custom-class-2",
            });

            await tick();

            const fieldset = screen
                .getByText("Test Radio Group")
                .closest("fieldset");
            expect(fieldset).not.to.have.class("custom-class-1");
            expect(fieldset).to.have.class("custom-class-2");
        });

        it("should handle numeric values", () => {
            const numericOptions: RadioOption[] = [
                { id: "radio-1", label: "Option 1", value: 1 },
                { id: "radio-2", label: "Option 2", value: 2 },
            ];

            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: numericOptions,
                value: 1,
            });

            const radios = screen.getAllByRole("radio");
            expect(radios[0]).to.have.property("checked", true);
            expect(radios[1]).not.to.have.property("checked", true);
        });

        it("should not check option when option value is undefined", () => {
            const optionsWithUndefined: RadioOption[] = [
                { id: "radio-1", label: "Option 1", value: "option1" },
                { id: "radio-2", label: "Option 2" },
            ];

            render(FormGroup, {
                type: "radio",
                label: "Test Radio Group",
                name: "test-radio",
                options: optionsWithUndefined,
            });

            const radios = screen.getAllByRole("radio");
            expect(radios[0]).not.to.have.property("checked", true);
            expect(radios[1]).not.to.have.property("checked", true);
        });
    });
});

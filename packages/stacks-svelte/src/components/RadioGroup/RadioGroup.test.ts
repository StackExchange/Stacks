import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import Radio from "./Radio.svelte";
import type { Props as RadioProps } from "./Radio.svelte";
import RadioGroup, { type RadioOption } from "./RadioGroup.svelte";

const baseRadioProps = (suffix: string | number): RadioProps => ({
    id: `test-radio-${suffix}`,
    label: `Option ${suffix}`,
    name: "test-name",
});

describe("Radio", () => {
    it("should render the Radio", () => {
        render(Radio, baseRadioProps("basic"));

        const input = screen.getByRole("radio");
        expect(input).to.exist;
        expect(input).to.have.id("test-radio-basic");
        expect(input).to.have.attribute("name", "test-name");
        expect(input).to.have.attribute("type", "radio");
        expect(screen.getByText("Option basic")).to.exist;
    });

    it("should render checked input when checked is true", () => {
        render(Radio, {
            ...baseRadioProps("checked"),
            checked: true,
        });

        const input = screen.getByRole("radio");
        expect(input).to.have.property("checked", true);
    });

    it("should render as div wrapper when checkmark is false", () => {
        render(Radio, {
            ...baseRadioProps("checkmark-false"),
            checkmark: false,
        });

        const container = screen
            .getByText("Option checkmark-false")
            .closest("div");
        expect(container).to.exist;
        expect(container).to.have.class("s-radio");
        expect(container).not.to.have.class("s-radio__checkmark");
    });

    it("should render as label wrapper when checkmark is true", () => {
        render(Radio, {
            ...baseRadioProps("checkmark-true"),
            checkmark: true,
        });

        const container = screen
            .getByText("Option checkmark-true")
            .closest("label");
        expect(container).to.exist;
        expect(container).to.have.class("s-radio");
        expect(container).to.have.class("s-radio__checkmark");
        expect(container).to.have.attribute("for", "test-radio-checkmark-true");
    });

    it("should render description when provided", () => {
        render(Radio, {
            ...baseRadioProps("description"),
            description: "Test description",
        });

        const description = screen.getByText("Test description");
        expect(description).to.exist;
        expect(description).to.have.class("s-description");
    });

    it("should render disabled input when disabled is true", () => {
        render(Radio, {
            ...baseRadioProps("disabled"),
            disabled: true,
        });

        const input = screen.getByRole("radio");
        expect(input).to.have.attribute("disabled");
    });

    it("should apply the appropriate state class", () => {
        render(Radio, {
            ...baseRadioProps("state"),
            state: "error",
        });

        const container = screen.getByText("Option state").closest(".s-radio");
        expect(container).to.have.class("has-error");
    });

    it("should render input value", () => {
        render(Radio, {
            ...baseRadioProps("value"),
            value: "option-1",
        });

        const input = screen.getByRole("radio");
        expect(input).to.have.attribute("value", "option-1");
    });

    it("should apply arbitrary classes to container", () => {
        render(Radio, {
            ...baseRadioProps("class"),
            class: "custom-class",
        });

        const container = screen.getByText("Option class").closest(".s-radio");
        expect(container).to.have.class("custom-class");
    });

    it("should adjust classes on prop updates", async () => {
        const { rerender } = render(Radio, {
            ...baseRadioProps("class-change"),
            class: "custom-class-1",
        });

        rerender({
            ...baseRadioProps("class-change"),
            class: "custom-class-2",
        });

        await tick();

        const container = screen
            .getByText("Option class-change")
            .closest(".s-radio");
        expect(container).not.to.have.class("custom-class-1");
        expect(container).to.have.class("custom-class-2");
    });
});

describe("RadioGroup", () => {
    const baseRadioGroupOptions: RadioOption[] = [
        { id: "radio-1", label: "Option 1", value: "option1" },
        { id: "radio-2", label: "Option 2", value: "option2" },
        { id: "radio-3", label: "Option 3", value: "option3" },
    ];

    it("should render the RadioGroup", () => {
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
        });

        expect(screen.getByText("Test Radio Group")).to.exist;
        expect(screen.getByText("Test Radio Group").tagName).to.equal("LEGEND");

        const radios = screen.getAllByRole("radio");
        expect(radios).to.have.length(3);
        expect(radios[0]).to.have.attribute("name", "test-radio-group");
        expect(radios[1]).to.have.attribute("name", "test-radio-group");
        expect(radios[2]).to.have.attribute("name", "test-radio-group");
    });

    it("should render radio options with correct values", () => {
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
        });

        const radios = screen.getAllByRole("radio");
        expect(radios[0]).to.have.attribute("value", "option1");
        expect(radios[1]).to.have.attribute("value", "option2");
        expect(radios[2]).to.have.attribute("value", "option3");
    });

    it("should render radio options with correct labels", () => {
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
        });

        expect(screen.getByText("Option 1")).to.exist;
        expect(screen.getByText("Option 2")).to.exist;
        expect(screen.getByText("Option 3")).to.exist;
    });

    it("should check the radio option when value matches", () => {
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
            value: "option2",
        });

        const radios = screen.getAllByRole("radio");
        expect(radios[0]).not.to.have.property("checked", true);
        expect(radios[1]).to.have.property("checked", true);
        expect(radios[2]).not.to.have.property("checked", true);
    });

    it("should update checked state when radio option is clicked", async () => {
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
        });

        const radios = screen.getAllByRole("radio");
        await userEvent.click(radios[1]);

        await tick();
        expect(radios[1]).to.have.property("checked", true);
        expect(radios[0]).not.to.have.property("checked", true);
        expect(radios[2]).not.to.have.property("checked", true);
    });

    it("should render disabled fieldset when disabled is true", () => {
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
            disabled: true,
        });

        const fieldset = screen
            .getByText("Test Radio Group")
            .closest("fieldset");
        expect(fieldset).to.have.attribute("disabled");
    });

    it("should render horizontal layout when horizontal is true", () => {
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
            horizontal: true,
        });

        const fieldset = screen
            .getByText("Test Radio Group")
            .closest("fieldset");
        expect(fieldset).to.have.class("s-form-group__horizontal");
    });

    it("should apply state classes", async () => {
        const { rerender } = render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
            state: "error",
        });

        let fieldset = screen
            .getByText("Test Radio Group")
            .closest("fieldset");
        expect(fieldset).to.have.class("has-error");
    });

    it("should apply custom classes", () => {
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
            class: "custom-class",
        });

        const fieldset = screen
            .getByText("Test Radio Group")
            .closest("fieldset");
        expect(fieldset).to.have.class("s-form-group");
        expect(fieldset).to.have.class("custom-class");
    });

    it("should render radio options with descriptions", () => {
        const optionsWithDescriptions: RadioOption[] = [
            {
                ...baseRadioGroupOptions[0],
                description: "Description for option 1",
            },
            baseRadioGroupOptions[1],
            baseRadioGroupOptions[2],
        ];

        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: optionsWithDescriptions,
        });

        expect(screen.getByText("Description for option 1")).to.exist;
    });

    it("should assign name and id to options without them", () => {
        const optionsWithoutId = [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
        ] as RadioOption[];

        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: optionsWithoutId,
        });

        const radios = screen.getAllByRole("radio");
        expect(radios[0]).to.have.id("test-radio-group-0");
        expect(radios[1]).to.have.id("test-radio-group-1");
        expect(radios[0]).to.have.attribute("name", "test-radio-group");
        expect(radios[1]).to.have.attribute("name", "test-radio-group");
    });

    it("should call option onchange callback when provided", async () => {
        const onChangeSpy1 = sinon.spy();
        const onChangeSpy2 = sinon.spy();
        const optionsWithOnChange = [
            { ...baseRadioGroupOptions[0], onchange: onChangeSpy1 },
            { ...baseRadioGroupOptions[1], onchange: onChangeSpy2 },
            baseRadioGroupOptions[2],
        ] as any as RadioOption[];

        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: optionsWithOnChange,
        });

        const radios = screen.getAllByRole("radio");
        await userEvent.click(radios[0]);

        await tick();
        expect(onChangeSpy1).to.have.been.calledOnce;
        expect(onChangeSpy2).not.to.have.been.called;
    });

    it("should call onValueChange callback when value changes", async () => {
        const onValueChangeSpy = sinon.spy();
        render(RadioGroup, {
            label: "Test Radio Group",
            name: "test-radio-group",
            options: baseRadioGroupOptions,
            onValueChange: onValueChangeSpy,
        });

        const radios = screen.getAllByRole("radio");
        await userEvent.click(radios[1]);
        await tick();

        expect(onValueChangeSpy).to.have.been.called;
    });
});

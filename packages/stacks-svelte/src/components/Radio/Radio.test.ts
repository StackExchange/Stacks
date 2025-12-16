import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import Radio from "./Radio.svelte";

const user = userEvent.setup();

type RadioProps = {
    id: string;
    name: string;
    label: string;
};

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

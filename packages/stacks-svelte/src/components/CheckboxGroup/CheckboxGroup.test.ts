import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";

import CheckboxGroup from "./CheckboxGroup.svelte";

const createChildrenSnippet = () =>
    createRawSnippet(() => ({
        render: () => "<span>Test content</span>",
    }));

describe("CheckboxGroup", () => {
    it("should render the CheckboxGroup", () => {
        const children = createChildrenSnippet();

        render(CheckboxGroup, {
            label: "Test Legend",
            children,
        });

        const legend = screen.getByText("Test Legend");
        const fieldset = legend.closest("fieldset");

        expect(screen.getByText("Test Legend")).to.exist;
        expect(screen.getByText("Test content")).to.exist;

        // Ensure it renders as a fieldset with the correct class
        expect(fieldset).to.exist;
        expect(fieldset).to.have.class("s-checkbox-group");

        //Ensure legend is present
        expect(legend).to.exist;
        expect(legend.tagName.toLowerCase()).to.equal("legend");
        expect(legend).to.have.class("s-label");
    });

    it("should render disabled fieldset when disabled is true", () => {
        const children = createChildrenSnippet();
        render(CheckboxGroup, {
            label: "Test Legend",
            disabled: true,
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.attribute("disabled");
    });

    it("should apply horizontal class when horizontal is true", () => {
        const children = createChildrenSnippet();

        render(CheckboxGroup, {
            label: "Test Legend",
            horizontal: true,
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("s-checkbox-group__horizontal");
    });

    it("should apply the appropriate state class", () => {
        const children = createChildrenSnippet();

        render(CheckboxGroup, {
            label: "Test Legend",
            state: "error",
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("has-error");
    });

    it("should apply arbitrary classes to fieldset", () => {
        const children = createChildrenSnippet();

        render(CheckboxGroup, {
            label: "Test Legend",
            class: "custom-class",
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("custom-class");
        expect(fieldset).to.have.class("s-checkbox-group");
    });

    it("should adjust classes on prop updates", async () => {
        const children = createChildrenSnippet();

        const { rerender } = render(CheckboxGroup, {
            label: "Test Legend",
            class: "custom-class-1",
            children,
        });

        rerender({
            label: "Test Legend",
            class: "custom-class-2",
            children,
        });

        await tick();

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).not.to.have.class("custom-class-1");
        expect(fieldset).to.have.class("custom-class-2");
    });
});

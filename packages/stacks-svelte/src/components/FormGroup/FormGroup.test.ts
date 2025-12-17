import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";

import FormGroup from "./FormGroup.svelte";

const createChildrenSnippet = () =>
    createRawSnippet(() => ({
        render: () => "<span>Test content</span>",
    }));

describe("FormGroup", () => {
    it("should render the form group", () => {
        const children = createChildrenSnippet();

        render(FormGroup, {
            label: "Test Legend",
            children,
        });

        const legend = screen.getByText("Test Legend");
        const fieldset = legend.closest("fieldset");

        expect(screen.getByText("Test Legend")).to.exist;
        expect(screen.getByText("Test content")).to.exist;

        expect(fieldset).to.exist;
        expect(fieldset).to.have.class("s-form-group");
        expect(legend).to.exist;
        expect(legend.tagName.toLowerCase()).to.equal("legend");
        expect(legend).to.have.class("s-label");
    });

    it("should render disabled fieldset when disabled is true", () => {
        const children = createChildrenSnippet();
        render(FormGroup, {
            label: "Test Legend",
            disabled: true,
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.attribute("disabled");
    });

    it("should apply horizontal class when horizontal is true", () => {
        const children = createChildrenSnippet();
        render(FormGroup, {
            label: "Test Legend",
            horizontal: true,
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("s-form-group__horizontal");
    });

    it("should apply the appropriate state class", () => {
        const children = createChildrenSnippet();
        render(FormGroup, {
            label: "Test Legend",
            state: "error",
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("has-error");
    });

    it("should apply arbitrary classes to fieldset", () => {
        const children = createChildrenSnippet();

        render(FormGroup, {
            label: "Test Legend",
            class: "custom-class",
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("custom-class");
        expect(fieldset).to.have.class("s-form-group");
    });
});

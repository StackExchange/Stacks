import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";

import CheckGroup from "./CheckGroup.svelte";

const createChildrenSnippet = () =>
    createRawSnippet(() => ({
        render: () => "<span>Test content</span>",
    }));

describe("CheckGroup", () => {
    it("should render as a checkbox group", () => {
        const children = createChildrenSnippet();

        render(CheckGroup, {
            label: "Test Legend",
            type: "checkbox",
            children,
        });

        const legend = screen.getByText("Test Legend");
        const fieldset = legend.closest("fieldset");

        expect(screen.getByText("Test Legend")).to.exist;
        expect(screen.getByText("Test content")).to.exist;

        expect(fieldset).to.exist;
        expect(fieldset).to.have.class("s-checkbox-group");
        expect(legend).to.exist;
        expect(legend.tagName.toLowerCase()).to.equal("legend");
        expect(legend).to.have.class("s-label");
    });

    it("should render as a radio group", () => {
        const children = createChildrenSnippet();

        render(CheckGroup, {
            label: "Test Legend",
            type: "radio",
            children,
        });

        const legend = screen.getByText("Test Legend");
        const fieldset = legend.closest("fieldset");

        expect(screen.getByText("Test Legend")).to.exist;
        expect(screen.getByText("Test content")).to.exist;

        expect(fieldset).to.exist;
        expect(fieldset).to.have.class("s-radio-group");
        expect(legend).to.exist;
        expect(legend.tagName.toLowerCase()).to.equal("legend");
        expect(legend).to.have.class("s-label");
    });
});

import { createRawSnippet, tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Label from "./Label.svelte";

const children = createRawSnippet(() => ({
    render: () => "<span>test label</span>",
}));

describe("Label", () => {
    it("should render the label", () => {
        render(Label, {
            id: "example-input",
            children,
        });
        expect(screen.getByText("test label")).to.exist;
    });

    it("should render the appropriate size class", () => {
        render(Label, {
            id: "example-input",
            size: "sm",
            children,
        });
        const label = screen.getByText("test label").parentElement;
        expect(label).to.exist;
        expect(label).to.have.class("s-label__sm");
    });

    it("should render the status element", () => {
        render(Label, {
            id: "example-input",
            optional: true,
            children,
        });
        expect(screen.getByText("Optional")).to.have.class("s-label--status");
    });

    it("should render the required status class on the status element", () => {
        render(Label, {
            id: "example-input",
            required: true,
            children,
        });

        const requiredSymbol = screen.getByText("*");
        expect(requiredSymbol).to.exist;
        expect(requiredSymbol).to.have.class("s-required-symbol");
        expect(requiredSymbol).to.have.attr("title", "Required");
    });

    it("should render the label with artbirary classes", () => {
        render(Label, {
            id: "example-input",
            class: "fc-theme-primary-400",
            children,
        });
        const label = screen.getByText("test label").parentElement;
        expect(label).to.have.class("fc-theme-primary-400");
    });

    it("should render the label with type of 'for' attribute", () => {
        render(Label, {
            id: "example-input",
            children,
        });
        const label = screen.getByText("test label").parentElement;
        expect(label).to.have.attribute("for", "example-input");
    });

    it("should adjust the classes on prop updates", async () => {
        const { rerender } = render(Label, {
            class: "fc-theme-primary-400",
            id: "example-input",
            children,
        });

        rerender({
            class: "fc-theme-secondary-400",
            id: "example-input",
            children,
        });

        await tick();

        const label = screen.getByText("test label").parentElement;
        expect(label).not.to.have.class("fc-theme-primary-400");
        expect(label).to.have.class("fc-theme-secondary-400");
    });

    // i18n
    it("should localize the required label status text when dedicated prop is specified", () => {
        render(Label, {
            id: "example-input",
            required: true,
            i18nRequiredText: "Obbligatorio",
            children,
        });

        const requiredSymbol = screen.getByText("*");
        expect(requiredSymbol).to.have.attr("title", "Obbligatorio");
    });

    it("should localize the optional label status text when dedicated prop is specified", () => {
        render(Label, {
            id: "example-input",
            optional: true,
            i18nOptionalText: "Facoltativo",
            children,
        });
        expect(screen.getByText("Facoltativo")).to.exist;
    });
});

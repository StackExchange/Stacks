import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import MenuTitle from "./MenuTitle.svelte";

const children = createRawSnippet(() => ({
    render: () => "<span>Section Title</span>",
}));

describe("MenuTitle", () => {
    it("should render the menu title", () => {
        render(MenuTitle, {
            children,
        });
        expect(screen.getByText("Section Title")).to.exist;
    });

    it("should render as a li element", () => {
        render(MenuTitle, {
            children,
        });
        const title = screen.getByText("Section Title").parentElement;
        expect(title?.tagName).to.equal("LI");
    });

    it("should have s-menu--title class", () => {
        render(MenuTitle, {
            children,
        });
        const title = screen.getByText("Section Title").parentElement;
        expect(title).to.have.class("s-menu--title");
    });

    it("should have role='separator'", () => {
        render(MenuTitle, {
            children,
        });
        const title = screen.getByText("Section Title").parentElement;
        expect(title).to.have.attr("role", "separator");
    });

    it("should render with arbitrary classes", () => {
        render(MenuTitle, {
            class: "custom-class",
            children,
        });
        const title = screen.getByText("Section Title").parentElement;
        expect(title).to.have.class("s-menu--title");
        expect(title).to.have.class("custom-class");
    });
});


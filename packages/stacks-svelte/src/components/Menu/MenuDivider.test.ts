import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import MenuDivider from "./MenuDivider.svelte";

describe("MenuDivider", () => {
    it("should render the menu divider", () => {
        render(MenuDivider);
        const divider = document.querySelector(".s-menu--divider");
        expect(divider).to.exist;
    });

    it("should render as a li element", () => {
        render(MenuDivider);
        const divider = document.querySelector(".s-menu--divider");
        expect(divider?.tagName).to.equal("LI");
    });

    it("should have s-menu--divider class", () => {
        render(MenuDivider);
        const divider = document.querySelector(".s-menu--divider");
        expect(divider).to.have.class("s-menu--divider");
    });

    it("should have role='separator'", () => {
        render(MenuDivider);
        const divider = document.querySelector(".s-menu--divider");
        expect(divider).to.have.attr("role", "separator");
    });

    it("should render with arbitrary classes", () => {
        render(MenuDivider, {
            class: "custom-class",
        });
        const divider = document.querySelector(".s-menu--divider");
        expect(divider).to.have.class("s-menu--divider");
        expect(divider).to.have.class("custom-class");
    });
});

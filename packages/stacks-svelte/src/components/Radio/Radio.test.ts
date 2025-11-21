import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Radio from "./Radio.svelte";

describe("Radio", () => {
    it("should render with correct attributes", () => {
        render(Radio, {
            id: "example-radio",
            name: "example-group",
            label: "Example radio",
        });
        const radio = screen.getByRole("radio", { name: "Example radio" });
        expect(radio).to.have.id("example-radio");
        expect(radio).to.have.attribute("name", "example-group");
        expect(radio).to.have.class("s-radio");
    });

    it("should render checked when checked is true", () => {
        render(Radio, {
            id: "example-radio",
            name: "example-group",
            label: "Example radio",
            checked: true,
        });
        const radio = screen.getByRole("radio", {
            name: "Example radio",
        }) as HTMLInputElement;
        expect(radio.checked).to.be.true;
    });

    it("should render disabled when disabled is true", () => {
        render(Radio, {
            id: "example-radio",
            name: "example-group",
            label: "Example radio",
            disabled: true,
        });
        expect(
            screen.getByRole("radio", { name: "Example radio" })
        ).to.have.attribute("disabled");
    });

    it("should render value attribute", () => {
        render(Radio, {
            id: "example-radio",
            name: "example-group",
            label: "Example radio",
            value: "option1",
        });
        expect(
            screen.getByRole("radio", { name: "Example radio" })
        ).to.have.attribute("value", "option1");
    });

    it("should apply custom classes", () => {
        render(Radio, {
            id: "example-radio",
            name: "example-group",
            label: "Example radio",
            class: "custom-class",
        });
        expect(
            screen.getByRole("radio", { name: "Example radio" })
        ).to.have.class("custom-class");
    });
});

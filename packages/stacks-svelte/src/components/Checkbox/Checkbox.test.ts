import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Checkbox from "./Checkbox.svelte";

describe("Checkbox", () => {
    it("should render with correct attributes", () => {
        render(Checkbox, {
            id: "example-checkbox",
            label: "Example checkbox",
        });
        const checkbox = screen.getByRole("checkbox", {
            name: "Example checkbox",
        });
        expect(checkbox).to.have.id("example-checkbox");
        expect(checkbox).to.have.class("s-checkbox");
    });

    it("should render checked when checked is true", () => {
        render(Checkbox, {
            id: "example-checkbox",
            label: "Example checkbox",
            checked: true,
        });
        expect(
            screen.getByRole("checkbox", { name: "Example checkbox" })
        ).to.have.attribute("checked");
    });

    it("should render disabled when disabled is true", () => {
        render(Checkbox, {
            id: "example-checkbox",
            label: "Example checkbox",
            disabled: true,
        });
        expect(
            screen.getByRole("checkbox", { name: "Example checkbox" })
        ).to.have.attribute("disabled");
    });

    it("should render value attribute", () => {
        render(Checkbox, {
            id: "example-checkbox",
            label: "Example checkbox",
            value: "option1",
        });
        expect(
            screen.getByRole("checkbox", { name: "Example checkbox" })
        ).to.have.attribute("value", "option1");
    });

    it("should render name attribute when provided", () => {
        render(Checkbox, {
            id: "example-checkbox",
            name: "example-group",
            label: "Example checkbox",
        });
        expect(
            screen.getByRole("checkbox", { name: "Example checkbox" })
        ).to.have.attribute("name", "example-group");
    });

    it("should work without name attribute", () => {
        render(Checkbox, {
            id: "example-checkbox",
            label: "Example checkbox",
        });
        const checkbox = screen.getByRole("checkbox", {
            name: "Example checkbox",
        });
        expect(checkbox).to.not.have.attribute("name");
    });

    it("should apply custom classes", () => {
        render(Checkbox, {
            id: "example-checkbox",
            label: "Example checkbox",
            class: "custom-class",
        });
        expect(
            screen.getByRole("checkbox", { name: "Example checkbox" })
        ).to.have.class("custom-class");
    });

    it("should set indeterminate state", async () => {
        render(Checkbox, {
            id: "example-checkbox",
            label: "Example checkbox",
            indeterminate: true,
        });
        const checkbox = screen.getByRole("checkbox", {
            name: "Example checkbox",
        }) as HTMLInputElement;
        expect(checkbox.indeterminate).to.be.true;
    });
});

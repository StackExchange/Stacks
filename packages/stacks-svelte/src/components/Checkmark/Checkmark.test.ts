import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Checkmark from "./Checkmark.svelte";

describe("Checkmark", () => {
    it("should render with correct attributes", () => {
        render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
        });
        const checkmark = screen.getByRole("radio", {
            name: "Example checkmark",
        });
        expect(checkmark).to.have.id("example-checkmark");
        expect(checkmark).to.have.class("s-checkmark");
    });

    it("should default to radio type", () => {
        render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
        });
        expect(screen.getByRole("radio", { name: "Example checkmark" })).to
            .exist;
    });

    it("should render as checkbox when type is checkbox", () => {
        render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
            type: "checkbox",
        });
        expect(screen.getByRole("checkbox", { name: "Example checkmark" })).to
            .exist;
    });

    it("should render checked when checked is true", () => {
        render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
            checked: true,
        });
        expect(
            screen.getByRole("radio", { name: "Example checkmark" })
        ).to.have.attribute("checked");
    });

    it("should render disabled when disabled is true", () => {
        render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
            disabled: true,
        });
        expect(
            screen.getByRole("radio", { name: "Example checkmark" })
        ).to.have.attribute("disabled");
    });

    it("should render value attribute", () => {
        render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
            value: "option1",
        });
        expect(
            screen.getByRole("radio", { name: "Example checkmark" })
        ).to.have.attribute("value", "option1");
    });

    it("should render name attribute when provided", () => {
        render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
        });
        expect(
            screen.getByRole("radio", { name: "Example checkmark" })
        ).to.have.attribute("name", "example-group");
    });

    it("should apply custom classes", () => {
        render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
            class: "custom-class",
        });
        expect(
            screen.getByRole("radio", { name: "Example checkmark" })
        ).to.have.class("custom-class");
    });

    it("should render icon when icon prop is provided", () => {
        const { container } = render(Checkmark, {
            id: "example-checkmark",
            name: "example-group",
            label: "Example checkmark",
            icon: "test-icon-src",
        });
        const icon = container.querySelector("svg");
        expect(icon).to.exist;
    });
});

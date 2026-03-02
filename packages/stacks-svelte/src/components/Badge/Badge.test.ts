import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Badge from "./Badge.svelte";

describe("Badge", () => {
    // Basic Rendering
    it("should render the badge with required text prop", () => {
        render(Badge, {
            text: "Test Badge",
        });
        expect(screen.getByText("Test Badge")).to.exist;
    });

    it("should apply the base s-badge class", () => {
        render(Badge, {
            text: "Test Badge",
        });
        expect(screen.getByText("Test Badge")).to.have.class("s-badge");
    });

    // Badge Types
    it("should render badge with type general and bling", () => {
        render(Badge, {
            text: "General Badge",
            type: "general",
        });
        const badge = screen.getByText("General Badge");
        expect(badge).to.have.class("s-badge");
        const blingElement = screen.getByText("badge").parentElement;
        expect(blingElement).to.have.class("s-bling");
    });

    it("should render badge with type reputation and reputation bling", () => {
        render(Badge, {
            text: "99 rep",
            type: "reputation",
        });
        const badge = screen.getByText("99 rep");
        expect(badge).to.have.class("s-badge");
        const blingElement = screen.getByText("badge").parentElement;
        expect(blingElement).to.have.class("s-bling__rep");
    });

    it("should render badge with type activity and s-bling__activity bling", () => {
        render(Badge, {
            text: "new message",
            type: "activity",
        });
        const badge = screen.getByText("new message");
        expect(badge).to.have.class("s-badge");
        const blingElement = screen.getByText("badge").parentElement;
        expect(blingElement).to.have.class("s-bling__activity");
    });

    it("should render badge with type achievement and award bling", () => {
        render(Badge, {
            text: "Great Question",
            type: "achievement",
            award: "gold",
        });
        const badge = screen.getByText("Great Question");
        expect(badge).to.have.class("s-badge");
        const blingElement = screen.getByText("badge").parentElement;
        expect(blingElement).to.have.class("s-bling__gold");
    });

    it("should render badge with type tag", () => {
        render(Badge, {
            text: "python",
            type: "tag",
            award: "gold",
        });
        const badge = screen.getByText("python");
        expect(badge).to.have.class("s-badge");
        expect(badge).to.have.class("s-badge__gold");
    });

    it("should render badge with type state", () => {
        render(Badge, {
            text: "Archived",
            type: "state",
            state: "info",
        });
        const badge = screen.getByText("Archived");
        expect(badge).to.have.class("s-badge");
        expect(badge).to.have.class("s-badge__info");
    });

    it("should render badge with type user", () => {
        render(Badge, {
            text: "Admin",
            type: "user",
            userType: "admin",
        });
        const badge = screen.getByText("Admin");
        expect(badge).to.have.class("s-badge");
        expect(badge).to.have.class("s-badge__admin");
    });

    // Size Variants
    it("should apply s-badge__sm class when size is sm", () => {
        render(Badge, {
            text: "Small Badge",
            size: "sm",
        });
        expect(screen.getByText("Small Badge")).to.have.class("s-badge__sm");
    });

    it("should not apply size modifier when size is empty string", () => {
        render(Badge, {
            text: "Default Badge",
            size: "",
        });
        const badge = screen.getByText("Default Badge");
        expect(badge).to.have.class("s-badge");
        expect(badge).not.to.have.class("s-badge__sm");
        expect(badge).not.to.have.class("s-badge__lg");
    });

    it("should apply s-badge__lg class when size is lg", () => {
        render(Badge, {
            text: "Large Badge",
            size: "lg",
        });
        expect(screen.getByText("Large Badge")).to.have.class("s-badge__lg");
    });

    // Custom label support for badge with bling child
    it("should render custom label when label prop is provided", () => {
        render(Badge, {
            text: "Badge with label",
            type: "general",
            label: "custom label",
        });
        expect(screen.getByText("custom label")).to.have.class("v-visible-sr");
    });

    // Icon Support
    it("should render icon when icon prop is provided", () => {
        render(Badge, {
            text: "Badge with icon",
            icon: "<svg>test-icon</svg>",
        });
        const badge = screen.getByText("Badge with icon");
        expect(badge).to.have.descendant("svg");
    });

    // Squared Variant
    it("should apply s-badge__squared class when squared is true", () => {
        render(Badge, {
            text: "Squared Badge",
            squared: true,
        });
        expect(screen.getByText("Squared Badge")).to.have.class(
            "s-badge__squared"
        );
    });

    it("should not apply squared class when squared is false (default)", () => {
        render(Badge, {
            text: "Regular Badge",
            squared: false,
        });
        const badge = screen.getByText("Regular Badge").parentElement;
        expect(badge).not.to.have.class("s-badge__squared");
    });

    // Important Variant
    it("should apply s-badge__important class when important is true", () => {
        render(Badge, {
            text: "Important Badge",
            important: true,
        });
        expect(screen.getByText("Important Badge")).to.have.class(
            "s-badge__important"
        );
    });

    it("should not apply important class when important is false (default)", () => {
        render(Badge, {
            text: "Regular Badge",
            important: false,
        });
        const badge = screen.getByText("Regular Badge");
        expect(badge).not.to.have.class("s-badge__important");
    });

    // Custom Classes
    it("should apply custom class prop to badge element", () => {
        render(Badge, {
            text: "Custom Badge",
            class: "custom-class",
        });
        expect(screen.getByText("Custom Badge")).to.have.class("custom-class");
    });
});

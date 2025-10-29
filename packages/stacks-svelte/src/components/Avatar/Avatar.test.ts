import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Avatar from "./Avatar.svelte";

describe("Avatar", () => {
    it("should render the avatar with the required name as screen reader text", () => {
        render(Avatar, { name: "test avatar" });
        expect(screen.getByText("test avatar")).to.exist;
    });

    it("should render the appropriate size class", () => {
        render(Avatar, { size: 64, name: "test avatar" });
        expect(screen.getByText("test avatar").parentElement).to.have.class(
            "s-avatar__64"
        );
    });

    it("should render as an anchor when href is provided", () => {
        render(Avatar, { href: "#", name: "test avatar" });
        expect(screen.getByRole("link")).to.exist;
        expect(screen.getByRole("link")).to.have.attr("href", "#");
    });

    it("should render the avatar with the provided image", () => {
        render(Avatar, {
            name: "test avatar",
            src: "https://picsum.photos/128",
        });
        const imageElement = screen
            .getByText("test avatar")
            .parentElement?.querySelector(".s-avatar--image");
        expect(imageElement).to.exist;

        expect(screen.getByText("test avatar")).to.exist;
    });

    it("should render the avatar with the provided letter", () => {
        render(Avatar, {
            name: "test avatar",
            letter: "T",
        });
        const letterElement = screen
            .getByText("test avatar")
            .parentElement?.querySelector(".s-avatar--letter");
        expect(letterElement).to.exist;
    });

    it("should render the badge when the badge prop is included", () => {
        render(Avatar, {
            name: "test avatar",
            badge: true,
        });
        const badgeElement = screen
            .getByText("test avatar")
            .parentElement?.querySelector(".s-avatar--badge");
        expect(badgeElement).to.exist;
    });

    it("should render the online status small indicator when status is online and size is 16", () => {
        render(Avatar, {
            name: "test avatar",
            status: "online",
        });
        const smallIndicatorEl = screen
            .getByText("test avatar")
            .parentElement?.querySelector(".s-avatar--indicator");
        expect(smallIndicatorEl).to.exist;
        expect(smallIndicatorEl).to.have.class("s-activity-indicator__sm");
        expect(screen.getByText("Online")).to.exist;
    });

    it("should render the online status large indicator when status is online and size is above 16", () => {
        render(Avatar, {
            name: "test avatar",
            status: "online",
            size: 24,
        });
        const largeIndicatorEl = screen
            .getByText("test avatar")
            .parentElement?.querySelector(".s-avatar--indicator");
        expect(largeIndicatorEl).to.exist;
        expect(largeIndicatorEl).not.to.have.class("s-activity-indicator__sm");
        expect(screen.getByText("Online")).to.exist;
    });

    it("should render the avatar with artbirary classes", () => {
        render(Avatar, {
            name: "test avatar",
            class: "bg-theme-primary-400",
        });
        expect(screen.getByText("test avatar").parentElement).to.have.class(
            "bg-theme-primary-400"
        );
    });
});

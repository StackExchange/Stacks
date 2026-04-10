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

    it("should set width and height on the image from size", () => {
        const { container } = render(Avatar, {
            name: "test avatar",
            src: "https://picsum.photos/128",
            size: 48,
        });
        const imageElement = container.querySelector(
            ".s-avatar--image"
        ) as HTMLImageElement | null;
        expect(imageElement).to.exist;
        expect(imageElement).to.have.attr("width", "48");
        expect(imageElement).to.have.attr("height", "48");
    });

    it("should default image width and height to 16 when size is omitted", () => {
        const { container } = render(Avatar, {
            name: "test avatar",
            src: "https://picsum.photos/128",
        });
        const imageElement = container.querySelector(
            ".s-avatar--image"
        ) as HTMLImageElement | null;
        expect(imageElement).to.exist;
        expect(imageElement).to.have.attr("width", "16");
        expect(imageElement).to.have.attr("height", "16");
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

    it("should use default i18nPrivateIconTitle for the badge icon", () => {
        const { container } = render(Avatar, {
            name: "test avatar",
            badge: true,
        });
        const title = container.querySelector(".s-avatar--badge title");
        expect(title).to.exist;
        expect(title?.textContent).to.equal("Private");
    });

    it("should use custom i18nPrivateIconTitle for the badge icon", () => {
        const { container } = render(Avatar, {
            name: "test avatar",
            badge: true,
            i18nPrivateIconTitle: "Community privée",
        });
        const title = container.querySelector(".s-avatar--badge title");
        expect(title).to.exist;
        expect(title?.textContent).to.equal("Community privée");
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

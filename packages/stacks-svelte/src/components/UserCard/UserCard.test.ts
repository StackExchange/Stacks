import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import UserCard from "./UserCard.svelte";

describe("UserCard", () => {
    it("should render the user name", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
        });
        expect(screen.getAllByText("John Doe")[1]).to.exist;
    });

    it("should render the avatar with the provided image", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
        });
        const avatarImg = screen.getByRole("presentation");
        expect(avatarImg.parentElement).to.have.class("s-user-card--avatar");
        expect(avatarImg).to.have.attr("src", "https://picsum.photos/128");
    });

    it("should render the user reputation", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            reputation: "1234",
        });
        expect(screen.getByText("1234")).to.exist;
    });

    it("should not render the user reputation", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
        });

        const reputation = document.querySelector(".s-user-card--rep");
        expect(reputation).not.to.exist;
    });

    it("should render the user awards", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            gold: 1,
            silver: 2,
            bronze: 3,
        });
        expect(screen.getByText("1 gold awards")).to.exist;
        expect(screen.getByText("2 silver awards")).to.exist;
        expect(screen.getByText("3 bronze awards")).to.exist;
    });

    it("should render the user card with the appropriate size class", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            size: "sm",
        });
        expect(
            screen.getAllByText("John Doe")[1].closest(".s-user-card")
        ).to.have.class("s-user-card__sm");
    });

    it("should render the avatar and name as links", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            href: "#",
        });
        const avatarImg = screen.getByRole("presentation").parentElement;
        const name = screen.getAllByText("John Doe")[1];
        expect(avatarImg).to.have.attr("href", "#");
        expect(name.parentElement).to.have.attr("href", "#");
    });

    it("should render the user card with arbitrary classes", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            class: "custom-class",
        });
        expect(
            screen.getAllByText("John Doe")[1].closest(".s-user-card")
        ).to.have.class("custom-class");
    });

    it("should render the user card with badges", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            admin: true,
            moderator: true,
            staff: true,
        });
        expect(screen.getByText("Admin")).to.exist;
        expect(screen.getByText("Mod")).to.exist;
        expect(screen.getByText("Staff")).to.exist;
    });

    it("should render the user card with large size class", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            size: "lg",
        });
        expect(
            screen.getAllByText("John Doe")[1].closest(".s-user-card")
        ).to.have.class("s-user-card__lg");
    });
});

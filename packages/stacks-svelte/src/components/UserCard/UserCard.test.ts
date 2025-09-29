import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import UserCard from "./UserCard.svelte";

const tags = createRawSnippet(() => ({
    render: () => '<a class="s-tag" href="#">JavaScript</a>',
}));

const type = createRawSnippet(() => ({
    render: () => "<span>Recognized by Hum</span>",
}));

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

    it("should render the user role", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            role: "Developer",
        });
        expect(screen.getByText("Developer")).to.exist;
    });

    it("should render the user location", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            location: "New York",
        });
        expect(screen.getByText("New York")).to.exist;
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
        expect(screen.getByText("1")).to.exist;
        expect(screen.getByText("2")).to.exist;
        expect(screen.getByText("3")).to.exist;
    });

    it("should render the user card with the appropriate size class", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            size: "full",
        });
        expect(
            screen.getAllByText("John Doe")[1].closest(".s-user-card")
        ).to.have.class("s-user-card__full");
    });

    it("should render the user card with the highlighted class", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            highlighted: true,
        });
        expect(
            screen.getAllByText("John Doe")[1].closest(".s-user-card")
        ).to.have.class("s-user-card__highlighted");
    });

    it("should render the user card with the deleted class", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            deleted: true,
        });
        expect(
            screen.getAllByText("John Doe")[1].closest(".s-user-card")
        ).to.have.class("s-user-card__deleted");
    });

    it("should render the avatar and name unlinked when deleted prop is true", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            deleted: true,
            href: "#",
        });
        const avatarImg = screen.getByRole("presentation").parentElement;
        const name = screen.getAllByText("John Doe")[1];
        expect(avatarImg).not.to.have.attr("href", "#");
        expect(name).not.to.have.attr("href", "#");
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
        expect(name).to.have.attr("href", "#");
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

    it("should render the user card with the tags slot within appropriate container", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            tags,
        });

        expect(screen.getByText("JavaScript").closest(".s-user-card--tags")).to
            .exist;
    });

    it("should render the user card with the type slot within appropriate container", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            type,
        });

        expect(
            screen.getByText("Recognized by Hum").closest(".s-user-card--type")
        ).to.exist;
    });
});

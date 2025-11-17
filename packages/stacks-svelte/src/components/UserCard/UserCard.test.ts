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
        expect(screen.getByText("1 gold awards")).to.exist;
        expect(screen.getByText("2 silver awards")).to.exist;
        expect(screen.getByText("3 bronze awards")).to.exist;
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

    it("should render the Icon Person instead of Avatar and name unlinked when deleted prop is true", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            deleted: true,
            href: "#",
        });
        const avatarImg = screen
            .getByTitle("John Doe")
            .closest(".s-user-card--avatar");
        expect(avatarImg).to.have.class("iconPerson");
    });

    it("should not render many properties when the deleted prop is true", () => {
        render(UserCard, {
            name: "John Doe",
            admin: true,
            avatar: "https://picsum.photos/128",
            bronze: 3333,
            gold: 1111,
            href: "#",
            location: "Calgary",
            moderator: true,
            reputation: 1234,
            role: "Staff Engineer",
            silver: 2222,
            staff: true,
            timestamp: "Asked 2 hours ago",
            deleted: true,
            size: "full",
            type,
            tags,
        });
        // Deleted user card should still render these properties
        expect(screen.getByTitle("John Doe")).to.exist; // name
        expect(screen.getByText("Asked 2 hours ago")).to.exist; // timestamp

        // Deleted user card should not render these properties
        expect(screen.queryByText("Admin")).not.to.exist; // admin badge
        expect(screen.queryByText("Mod")).not.to.exist; // moderator badge
        expect(screen.queryByText("Staff")).not.to.exist; // staff badge

        expect(screen.queryByText("1111")).not.to.exist; // gold
        expect(screen.queryByText("2222")).not.to.exist; // silver
        expect(screen.queryByText("3333")).not.to.exist; // bronze

        expect(screen.queryByText("1234")).not.to.exist; // reputation
        expect(screen.queryByText("Calgary")).not.to.exist; // location
        expect(screen.queryByText("Staff Engineer")).not.to.exist; // role

        expect(screen.queryByText("Recognized by Hum")).not.to.exist; // type snippet text
        expect(screen.queryByText("JavaScript")).not.to.exist; // tags snippet text
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

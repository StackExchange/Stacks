import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";

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
        expect(avatarImg.parentElement).to.have.class("s-avatar");
        expect(avatarImg).to.have.attr("src", "https://picsum.photos/128");
    });

    it("should render the user reputation in awards", () => {
        const awardsSnippet = createRawSnippet(() => ({
            render: () => `
                <ul class="s-user-card--group">
                    <li class="s-user-card--rep">
                        <span class="s-bling s-bling__rep s-bling__sm">
                            <span class="v-visible-sr">reputation bling</span>
                        </span>
                        1234
                    </li>
                </ul>
            `,
        }));

        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            awards: awardsSnippet,
        });
        expect(screen.getByText("1234")).to.exist;
    });

    it("should not render the user reputation when awards are not provided", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
        });

        const reputation = document.querySelector(".s-user-card--rep");
        expect(reputation).not.to.exist;
    });

    it("should render the user awards", () => {
        const awardsSnippet = createRawSnippet(() => ({
            render: () => `
                <ul class="s-user-card--group">
                    <li class="s-user-card--rep">
                        <span class="s-bling s-bling__rep s-bling__sm">
                            <span class="v-visible-sr">reputation bling</span>
                        </span>
                        1234
                    </li>
                    <li>
                        <span class="s-bling s-bling__gold s-bling__sm">
                            <span class="v-visible-sr">gold bling</span>
                        </span>
                        1
                    </li>
                    <li>
                        <span class="s-bling s-bling__silver s-bling__sm">
                            <span class="v-visible-sr">silver bling</span>
                        </span>
                        2
                    </li>
                    <li>
                        <span class="s-bling s-bling__bronze s-bling__sm">
                            <span class="v-visible-sr">bronze bling</span>
                        </span>
                        3
                    </li>
                </ul>
            `,
        }));

        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            awards: awardsSnippet,
        });
        expect(screen.getByText("1")).to.exist;
        expect(screen.getByText("2")).to.exist;
        expect(screen.getByText("3")).to.exist;
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
            profileUrl: "#",
        });
        const avatarLink = screen.getByRole("presentation").parentElement;
        const nameLink = screen.getByRole("link", { name: "John Doe" });
        expect(avatarLink).to.have.attr("href", "#");
        expect(nameLink).to.have.attr("href", "#");
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
        const badgesSnippet = createRawSnippet(() => ({
            render: () =>
                '<span class="s-badge s-badge__sm s-badge__admin">admin</span>',
        }));

        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            badges: badgesSnippet,
        });
        expect(screen.getByText("admin")).to.exist;
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

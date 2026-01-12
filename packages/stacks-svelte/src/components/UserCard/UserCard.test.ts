import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet, mount, unmount } from "svelte";

import UserCard from "./UserCard.svelte";
import Badge from "../Badge/Badge.svelte";

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
        const badgesSnippet = createRawSnippet(() => ({
            render: () => '<div class="s-user-card--group"></div>',
            setup: (target) => {
                const wrapper = target.firstElementChild as HTMLElement;

                const badge1 = mount(Badge, {
                    target: wrapper,
                    props: {
                        text: "admin",
                        type: "user",
                        userType: "admin",
                        size: "sm",
                    },
                });
                const badge2 = mount(Badge, {
                    target: wrapper,
                    props: {
                        text: "moderator",
                        type: "user",
                        userType: "moderator",
                        size: "sm",
                    },
                });
                const badge3 = mount(Badge, {
                    target: wrapper,
                    props: {
                        text: "staff",
                        type: "user",
                        userType: "staff",
                        size: "sm",
                    },
                });
                return () => {
                    unmount(badge1);
                    unmount(badge2);
                    unmount(badge3);
                };
            },
        }));

        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            badges: badgesSnippet,
        });
        expect(screen.getByText("admin")).to.exist;
        expect(screen.getByText("moderator")).to.exist;
        expect(screen.getByText("staff")).to.exist;
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

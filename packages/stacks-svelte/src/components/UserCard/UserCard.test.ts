import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet, mount, unmount, tick } from "svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import UserCard from "./UserCard.svelte";
import UserCardTime from "./UserCardTime.svelte";
import UserCardBadge from "./UserCardBadge.svelte";
import UserCardBling from "./UserCardBling.svelte";

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

    it("should not render the user reputation when blings are not provided", () => {
        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
        });

        const reputation = document.querySelector(".s-user-card--rep");
        expect(reputation).not.to.exist;
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

    it("should render the user card with UserCardTime subcomponent", () => {
        const timeSnippet = createRawSnippet(() => ({
            render: () => "<span></span>",
            setup: (target) => {
                const instance = mount(UserCardTime, {
                    target,
                    props: {
                        text: "asked 2 hr ago",
                        href: "#",
                        timestamp: "2026-01-09 12:15:39Z",
                    },
                });
                return () => {
                    unmount(instance);
                };
            },
        }));

        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            time: timeSnippet,
        });
        expect(screen.getByText("asked 2 hr ago")).to.exist;
    });

    it("should render the user card with UserCardBadge subcomponent", () => {
        const badgesSnippet = createRawSnippet(() => ({
            render: () => "<span></span>",
            setup: (target) => {
                const instance = mount(UserCardBadge, {
                    target,
                    props: {
                        type: "admin",
                    },
                });
                return () => {
                    unmount(instance);
                };
            },
        }));

        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            badges: badgesSnippet,
        });
        expect(screen.getByText("admin")).to.exist;
    });

    it("should render the user card with UserCardBling subcomponent", () => {
        const blingsSnippet = createRawSnippet(() => ({
            render: () => "<span></span>",
            setup: (target) => {
                const instance = mount(UserCardBling, {
                    target,
                    props: {
                        type: "rep",
                        name: "reputation bling",
                        text: "1234",
                    },
                });
                return () => {
                    unmount(instance);
                };
            },
        }));

        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            blings: blingsSnippet,
        });
        expect(screen.getByText("1234")).to.exist;
    });

    it("should render the user card with multiple UserCardBling subcomponents", () => {
        const blingsSnippet = createRawSnippet(() => ({
            render: () => "<span></span>",
            setup: (target) => {
                const instances = [
                    mount(UserCardBling, {
                        target,
                        props: {
                            type: "rep",
                            name: "reputation bling",
                            text: "1234",
                        },
                    }),
                    mount(UserCardBling, {
                        target,
                        props: {
                            type: "gold",
                            name: "gold bling",
                            text: "1",
                        },
                    }),
                    mount(UserCardBling, {
                        target,
                        props: {
                            type: "silver",
                            name: "silver bling",
                            text: "2",
                        },
                    }),
                    mount(UserCardBling, {
                        target,
                        props: {
                            type: "bronze",
                            name: "bronze bling",
                            text: "3",
                        },
                    }),
                ];
                return () => {
                    instances.forEach((instance) => unmount(instance));
                };
            },
        }));

        render(UserCard, {
            name: "John Doe",
            avatar: "https://picsum.photos/128",
            blings: blingsSnippet,
        });
        expect(screen.getByText("1234")).to.exist;
        expect(screen.getByText("1")).to.exist;
        expect(screen.getByText("2")).to.exist;
        expect(screen.getByText("3")).to.exist;
    });
});

describe("UserCardTime", () => {
    it("should render the time text", () => {
        render(UserCardTime, {
            text: "asked 2 hr ago",
        });
        expect(screen.getByText("asked 2 hr ago")).to.exist;
    });

    it("should render the time as a link when href is provided", () => {
        render(UserCardTime, {
            text: "asked 2 hr ago",
            href: "#",
        });
        const link = screen.getByRole("link");
        expect(link).to.have.attr("href", "#");
        expect(link).to.have.class("s-user-card--time");
    });

    it("should render the timestamp in the popover content", async () => {
        const clock = sinon.useFakeTimers({
            shouldAdvanceTime: true,
            shouldClearNativeTimers: true,
        });
        render(UserCardTime, {
            text: "asked 2 hr ago",
            timestamp: "2026-01-09 12:15:39Z",
        });

        const timeLink = screen.getByText("asked 2 hr ago");
        await userEvent.hover(timeLink);
        await clock.runAllAsync();
        await tick();

        expect(screen.getByText("2026-01-09 12:15:39Z")).to.exist;
        clock.restore();
    });
});

describe("UserCardBadge", () => {
    it("should render the admin badge", () => {
        render(UserCardBadge, {
            type: "admin",
        });
        expect(screen.getByText("admin")).to.exist;
    });

    it("should render the moderator badge", () => {
        render(UserCardBadge, {
            type: "moderator",
        });
        expect(screen.getByText("moderator")).to.exist;
    });

    it("should render the staff badge", () => {
        render(UserCardBadge, {
            type: "staff",
        });
        expect(screen.getByText("staff")).to.exist;
    });

    it("should render the badge within a list item", () => {
        const { container } = render(UserCardBadge, {
            type: "admin",
        });
        const listItem = container.querySelector("li");
        expect(listItem).to.exist;
    });
});

describe("UserCardBling", () => {
    it("should render the reputation bling", () => {
        render(UserCardBling, {
            type: "rep",
            name: "reputation bling",
            text: "1234",
        });
        expect(screen.getByText("1234")).to.exist;
        expect(screen.getByText("reputation bling")).to.exist;
    });

    it("should render the gold bling", () => {
        render(UserCardBling, {
            type: "gold",
            name: "gold bling",
            text: "1",
        });
        expect(screen.getByText("1")).to.exist;
        expect(screen.getByText("gold bling")).to.exist;
    });

    it("should render the silver bling", () => {
        render(UserCardBling, {
            type: "silver",
            name: "silver bling",
            text: "2",
        });
        expect(screen.getByText("2")).to.exist;
        expect(screen.getByText("silver bling")).to.exist;
    });

    it("should render the bronze bling", () => {
        render(UserCardBling, {
            type: "bronze",
            name: "bronze bling",
            text: "3",
        });
        expect(screen.getByText("3")).to.exist;
        expect(screen.getByText("bronze bling")).to.exist;
    });

    it("should render the bling with numeric text", () => {
        render(UserCardBling, {
            type: "rep",
            name: "reputation bling",
            text: 1234,
        });
        expect(screen.getByText("1234")).to.exist;
    });

    it("should render the reputation bling with the correct class", () => {
        const { container } = render(UserCardBling, {
            type: "rep",
            name: "reputation bling",
            text: "1234",
        });
        const listItem = container.querySelector("li.s-user-card--rep");
        expect(listItem).to.exist;
    });

    it("should render non-reputation blings without the rep class", () => {
        const { container } = render(UserCardBling, {
            type: "gold",
            name: "gold bling",
            text: "1",
        });
        const listItem = container.querySelector("li");
        expect(listItem).to.exist;
        expect(listItem).not.to.have.class("s-user-card--rep");
    });

    it("should render the bling within a list item", () => {
        const { container } = render(UserCardBling, {
            type: "rep",
            name: "reputation bling",
            text: "1234",
        });
        const listItem = container.querySelector("li");
        expect(listItem).to.exist;
    });
});

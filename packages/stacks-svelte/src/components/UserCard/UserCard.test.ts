import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet, mount, unmount, tick } from "svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";
import {
    IconStarVerifiedSm,
    IconAchievementsSm,
} from "@stackoverflow/stacks-icons-legacy/icons";

import UserCard from "./UserCard.svelte";
import UserCardTime from "./UserCardTime.svelte";
import UserCardBadge from "./UserCardBadge.svelte";
import UserCardBling from "./UserCardBling.svelte";
import UserCardAdditionalBling from "./UserCardAdditionalBling.svelte";

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
        const nameLink = screen.getByRole("link", { name: "John Doe" });
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

    describe("avatarAndName snippet nested conditions", () => {
        it("should not render the group when neither avatar nor name is provided", () => {
            const { container } = render(UserCard, {
                name: "",
                size: "sm",
            });
            const group = container.querySelector(".s-user-card--group");
            expect(group).not.to.exist;
        });

        it("should render only avatar when only avatar is provided", () => {
            const { container } = render(UserCard, {
                name: "",
                avatar: "https://picsum.photos/128",
                size: "sm",
            });
            const group = container.querySelector(".s-user-card--group");
            expect(group).to.exist;
            const avatarImg = screen.getByRole("presentation");
            expect(avatarImg).to.exist;
            expect(avatarImg).to.have.attr("src", "https://picsum.photos/128");
            const username = container.querySelector(".s-user-card--username");
            expect(username).not.to.exist;
        });

        it("should render only name when only name is provided", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                size: "sm",
            });
            const group = container.querySelector(".s-user-card--group");
            expect(group).to.exist;
            expect(screen.getByText("John Doe")).to.exist;
            const avatarImg = screen.queryByRole("presentation");
            expect(avatarImg).not.to.exist;
        });

        it("should render as a div when profileUrl is not provided", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "sm",
            });
            const link = screen.queryByRole("link", { name: "John Doe" });
            expect(link).not.to.exist;
            const username = container.querySelector(".s-user-card--username");
            expect(username).to.exist;
            expect(username?.textContent).to.equal("John Doe");
        });
    });

    describe("large size branch nested conditions", () => {
        it("should not render avatar when avatar is not provided in large size", () => {
            render(UserCard, {
                name: "John Doe",
                size: "lg",
            });
            const avatarImg = screen.queryByRole("presentation");
            expect(avatarImg).not.to.exist;
        });

        it("should render avatar when avatar is provided in large size", () => {
            render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
            });
            const avatarImg = screen.getByRole("presentation");
            expect(avatarImg).to.exist;
            expect(avatarImg).to.have.attr("src", "https://picsum.photos/128");
        });

        it("should not render name when name is not provided in large size", () => {
            const { container } = render(UserCard, {
                name: "",
                avatar: "https://picsum.photos/128",
                size: "lg",
            });
            const username = container.querySelector(".s-user-card--username");
            expect(username).not.to.exist;
        });

        it("should render name when name is provided in large size", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
            });
            const username = container.querySelector(".s-user-card--username");
            expect(username).to.exist;
            expect(username?.textContent).to.equal("John Doe");
        });

        it("should render name as a div when profileUrl is not provided in large size", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
            });
            const link = screen.queryByRole("link", { name: "John Doe" });
            expect(link).not.to.exist;
            const username = container.querySelector(".s-user-card--username");
            expect(username).to.exist;
            expect(username?.textContent).to.equal("John Doe");
        });

        it("should render name as a link when profileUrl is provided in large size", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                profileUrl: "#",
                size: "lg",
            });
            const usernameLink = container.querySelector(
                ".s-user-card--username"
            );
            expect(usernameLink).to.exist;
            expect(usernameLink?.tagName.toLowerCase()).to.equal("a");
            expect(usernameLink).to.have.attr("href", "#");
        });

        it("should not render badges when badges are not provided in large size", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
            });
            const badgesGroup = container.querySelectorAll(
                ".s-user-card--group"
            );
            const hasBadges = Array.from(badgesGroup).some((group) => {
                const listItems = group.querySelectorAll("li");
                return Array.from(listItems).some((li) =>
                    li.textContent?.includes("admin")
                );
            });
            expect(hasBadges).to.be.false;
        });

        it("should render badges when badges are provided in large size", () => {
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
                size: "lg",
                badges: badgesSnippet,
            });
            expect(screen.getByText("admin")).to.exist;
        });

        it("should not render blings when blings are not provided in large size", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
            });
            const blingsGroup = container.querySelectorAll(
                ".s-user-card--group"
            );
            const hasBlings = Array.from(blingsGroup).some((group) => {
                const listItems = group.querySelectorAll("li");
                return Array.from(listItems).some((li) =>
                    li.textContent?.includes("1234")
                );
            });
            expect(hasBlings).to.be.false;
        });

        it("should render blings when blings are provided in large size", () => {
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
                size: "lg",
                blings: blingsSnippet,
            });
            expect(screen.getByText("1234")).to.exist;
        });
    });

    describe("large size nested conditions", () => {
        it("should not render the column div when recognition, designation, location, and bio are not provided", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
            });
            const columns = container.querySelectorAll(".s-user-card--column");
            expect(columns).to.have.length(1);
            const recognitionRow = container.querySelector(
                ".s-user-card--recognition"
            );
            expect(recognitionRow).not.to.exist;
            const splitGroup = container.querySelector(
                ".s-user-card--group__split"
            );
            expect(splitGroup).not.to.exist;
        });

        it("should render the recognition row with icon when recognition is provided", () => {
            const recognitionSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const span = document.createElement("span");
                    span.textContent = "Verified User";
                    target.appendChild(span);
                    return () => {
                        target.removeChild(span);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
                recognition: recognitionSnippet,
            });

            const recognitionRow = container.querySelector(
                ".s-user-card--recognition"
            );
            expect(recognitionRow).to.exist;
            expect(recognitionRow).to.have.class("s-user-card--row");
            expect(screen.getByText("Verified User")).to.exist;
        });

        it("should render the designation in a list item when only designation is provided", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
                designation: "Software Engineer",
            });

            const column = container.querySelector(".s-user-card--column");
            expect(column).to.exist;

            const list = screen.getByRole("list");
            expect(list).to.exist;

            const listItems = screen.getAllByRole("listitem");
            const designationLi = listItems.find(
                (li) => li.textContent === "Software Engineer"
            );
            expect(designationLi).to.exist;
        });

        it("should render the location in a list item when only location is provided", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
                location: "New York, NY",
            });

            const column = container.querySelector(".s-user-card--column");
            expect(column).to.exist;

            const list = screen.getByRole("list");
            expect(list).to.exist;

            const listItems = screen.getAllByRole("listitem");
            const locationLi = listItems.find(
                (li) => li.textContent === "New York, NY"
            );
            expect(locationLi).to.exist;
        });

        it("should render both designation and location in list items when both are provided", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
                designation: "Software Engineer",
                location: "New York, NY",
            });

            const column = container.querySelector(".s-user-card--column");
            expect(column).to.exist;

            const list = screen.getByRole("list");
            expect(list).to.exist;

            const listItems = screen.getAllByRole("listitem");
            expect(listItems).to.have.length(2);
            expect(listItems[0].textContent).to.equal("Software Engineer");
            expect(listItems[1].textContent).to.equal("New York, NY");
        });

        it("should render the bio snippet when bio is provided", () => {
            const bioSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const span = document.createElement("span");
                    span.textContent = "I am a software engineer";
                    target.appendChild(span);
                    return () => {
                        target.removeChild(span);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
                bio: bioSnippet,
            });

            const column = container.querySelector(".s-user-card--column");
            expect(column).to.exist;
            expect(screen.getByText("I am a software engineer")).to.exist;
        });

        it("should render all fields together: recognition, designation, location, and bio", () => {
            const recognitionSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const span = document.createElement("span");
                    span.textContent = "Verified User";
                    target.appendChild(span);
                    return () => {
                        target.removeChild(span);
                    };
                },
            }));

            const bioSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const span = document.createElement("span");
                    span.textContent = "I am a software engineer";
                    target.appendChild(span);
                    return () => {
                        target.removeChild(span);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "lg",
                recognition: recognitionSnippet,
                designation: "Software Engineer",
                location: "New York, NY",
                bio: bioSnippet,
            });

            const column = container.querySelector(".s-user-card--column");
            expect(column).to.exist;

            const recognitionRow = container.querySelector(
                ".s-user-card--recognition"
            );
            expect(recognitionRow).to.exist;
            expect(screen.getByText("Verified User")).to.exist;

            const listItems = screen.getAllByRole("listitem");
            const designationLi = listItems.find(
                (li) => li.textContent === "Software Engineer"
            );
            expect(designationLi).to.exist;
            const locationLi = listItems.find(
                (li) => li.textContent === "New York, NY"
            );
            expect(locationLi).to.exist;

            expect(screen.getByText("I am a software engineer")).to.exist;
        });
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
});

describe("UserCard states", () => {
    let clock: sinon.SinonFakeTimers | null = null;

    afterEach(() => {
        if (clock) {
            clock.restore();
            clock = null;
        }
    });

    describe("Original Poster", () => {
        it("should render the original poster class on the username", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                originalPoster: true,
            });
            const username = container.querySelector(
                ".s-user-card--username.s-user-card--username__op"
            );
            expect(username).to.exist;
            expect(username?.textContent).to.equal("John Doe");
        });

        it("should show tooltip when hovering over the username", async () => {
            clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                profileUrl: "#",
                originalPoster: true,
            });

            const username = container.querySelector(
                ".s-user-card--username.s-user-card--username__op"
            );
            expect(username).to.exist;

            await userEvent.hover(username!);
            await clock.runAllAsync();
            await tick();

            expect(screen.getByText(/is the original poster/)).to.exist;
        });

        it("should show custom tooltip text when i18nOpTooltipText is provided", async () => {
            clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                profileUrl: "#",
                originalPoster: true,
                i18nOpTooltipText: "est l'auteur original.",
            });

            const username = container.querySelector(
                ".s-user-card--username.s-user-card--username__op"
            );
            expect(username).to.exist;

            await userEvent.hover(username!);
            await clock.runAllAsync();
            await tick();

            expect(screen.getByText(/est l'auteur original/)).to.exist;
        });
    });

    describe("New Contributor", () => {
        it("should render the new contributor badge with tooltip", async () => {
            clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            const tooltipSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const span = document.createElement("span");
                    span.textContent = "New contributor tooltip";
                    target.appendChild(span);
                    return () => {
                        target.removeChild(span);
                    };
                },
            }));

            const badgesSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const instance = mount(UserCardBadge, {
                        target,
                        props: {
                            type: "new",
                            tooltip: tooltipSnippet,
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

            const badge = screen.getByText("new");
            expect(badge).to.exist;

            await userEvent.hover(badge);
            await clock.runAllAsync();
            await tick();

            expect(screen.getByText("New contributor tooltip")).to.exist;
        });
    });

    describe("Deleted User", () => {
        it("should render the deleted user class", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                deleted: true,
            });
            const userCard = container.querySelector(".s-user-card");
            expect(userCard).to.have.class("s-user-card__deleted");
        });

        it("should render the deleted avatar SVG", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                deleted: true,
            });
            const avatarSvg = container.querySelector("svg");
            expect(avatarSvg).to.exist;
            expect(avatarSvg).to.have.attr("width", "24");
            expect(avatarSvg).to.have.attr("height", "24");
        });

        it("should render the deleted username with deleted class", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                deleted: true,
            });
            const username = container.querySelector(
                ".s-user-card--username.s-user-card--deleted"
            );
            expect(username).to.exist;
            expect(username?.textContent).to.equal("John Doe");
        });

        it("should render small deleted avatar when size is sm", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                deleted: true,
                size: "sm",
            });
            const avatarSvg = container.querySelector("svg");
            expect(avatarSvg).to.exist;
            expect(avatarSvg).to.have.attr("width", "16");
            expect(avatarSvg).to.have.attr("height", "16");
        });

        it("should render time snippet when provided for deleted user", () => {
            const timeSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const instance = mount(UserCardTime, {
                        target,
                        props: {
                            text: "asked 2 hr ago",
                            href: "#",
                        },
                    });
                    return () => {
                        unmount(instance);
                    };
                },
            }));

            render(UserCard, {
                name: "John Doe",
                deleted: true,
                time: timeSnippet,
            });
            expect(screen.getByText("asked 2 hr ago")).to.exist;
        });

        it("should show popover tooltip when hovering over deleted avatar", async () => {
            clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            const { container } = render(UserCard, {
                name: "John Doe",
                deleted: true,
            });

            const avatarSvg = container.querySelector("svg");
            expect(avatarSvg).to.exist;

            await userEvent.hover(avatarSvg!);
            await clock.runAllAsync();
            await tick();

            expect(screen.getByText("Deleted user")).to.exist;
        });

        it("should show custom tooltip text when i18nDeletedTooltipText is provided", async () => {
            clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            const { container } = render(UserCard, {
                name: "John Doe",
                deleted: true,
                i18nDeletedTooltipText: "Utilisateur supprimé",
            });

            const avatarSvg = container.querySelector("svg");
            expect(avatarSvg).to.exist;

            await userEvent.hover(avatarSvg!);
            await clock.runAllAsync();
            await tick();

            expect(screen.getByText("Utilisateur supprimé")).to.exist;
        });
    });

    describe("Recognized Member (small)", () => {
        it("should render the additional bling snippet when size is sm", () => {
            const additionalBlingsSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const instance = mount(UserCardAdditionalBling, {
                        target,
                        props: {
                            class: "s-user-card--recognition-additional-bling",
                            tooltipText:
                                "This user is recognized by AudioBubble",
                            id: "user-card-recognized-member-popover",
                            icon: IconStarVerifiedSm,
                            href: "#",
                        },
                    });
                    return () => {
                        unmount(instance);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "sm",
                additionalBlings: additionalBlingsSnippet,
            });

            const recognitionBling = container.querySelector(
                ".s-user-card--recognition-additional-bling"
            );
            expect(recognitionBling).to.exist;
        });

        it("should show popover tooltip when hovering over additional bling", async () => {
            clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            const additionalBlingsSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const instance = mount(UserCardAdditionalBling, {
                        target,
                        props: {
                            class: "s-user-card--recognition-additional-bling",
                            tooltipText:
                                "This user is recognized by AudioBubble",
                            id: "user-card-recognized-member-popover",
                            icon: IconStarVerifiedSm,
                            href: "#",
                        },
                    });
                    return () => {
                        unmount(instance);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                size: "sm",
                additionalBlings: additionalBlingsSnippet,
            });

            const recognitionBling = container.querySelector(
                ".s-user-card--recognition-additional-bling"
            );
            expect(recognitionBling).to.exist;

            await userEvent.hover(recognitionBling!);
            await clock.runAllAsync();
            await tick();

            expect(screen.getByText("This user is recognized by AudioBubble"))
                .to.exist;
        });
    });

    describe("Recognized Member (default)", () => {
        it("should render the recognition row with icon when size is not sm", () => {
            const recognitionSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const span = document.createElement("span");
                    span.textContent = "Recognized by AudioBubble";
                    target.appendChild(span);
                    return () => {
                        target.removeChild(span);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                recognition: recognitionSnippet,
            });

            const recognitionRow = container.querySelector(
                ".s-user-card--recognition"
            );
            expect(recognitionRow).to.exist;
            expect(recognitionRow).to.have.class("s-user-card--row");
            expect(screen.getByText("Recognized by AudioBubble")).to.exist;
        });

        it("should render recognition in a column layout when size is not sm", () => {
            const recognitionSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const span = document.createElement("span");
                    span.textContent = "Recognized by AudioBubble";
                    target.appendChild(span);
                    return () => {
                        target.removeChild(span);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                recognition: recognitionSnippet,
            });

            const column = container.querySelector(".s-user-card--column");
            expect(column).to.exist;
            const recognitionRow = column?.querySelector(
                ".s-user-card--recognition"
            );
            expect(recognitionRow).to.exist;
        });
    });

    describe("Additional Blings", () => {
        it("should render the additionalBlings snippet", () => {
            const additionalBlingsSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const instance = mount(UserCardAdditionalBling, {
                        target,
                        props: {
                            class: "fc-yellow-400",
                            tooltipText:
                                "This user is first on the weekly leaderboard.",
                            id: "user-card-award-popover-first",
                            icon: IconAchievementsSm,
                            href: "#",
                        },
                    });
                    return () => {
                        unmount(instance);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                additionalBlings: additionalBlingsSnippet,
            });

            const awardedFirst = container.querySelector(
                ".s-user-card--group.fc-yellow-400"
            );
            expect(awardedFirst).to.exist;
        });

        it("should apply fc-yellow-400 class when using UserCardAdditionalBling with first class", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                additionalBlings: createRawSnippet(() => ({
                    render: () => "<span></span>",
                    setup: (target) => {
                        const instance = mount(UserCardAdditionalBling, {
                            target,
                            props: {
                                class: "fc-yellow-400",
                                tooltipText:
                                    "This user is first on the weekly leaderboard.",
                                id: "user-card-award-popover-first",
                                icon: IconAchievementsSm,
                                href: "#",
                            },
                        });
                        return () => {
                            unmount(instance);
                        };
                    },
                })),
            });

            const awardedFirst = container.querySelector(
                ".s-user-card--group.fc-yellow-400"
            );
            expect(awardedFirst).to.exist;
        });

        it("should apply fc-blue-400 class when using UserCardAdditionalBling with second class", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                additionalBlings: createRawSnippet(() => ({
                    render: () => "<span></span>",
                    setup: (target) => {
                        const instance = mount(UserCardAdditionalBling, {
                            target,
                            props: {
                                class: "fc-blue-400",
                                tooltipText:
                                    "This user is second on the weekly leaderboard.",
                                id: "user-card-award-popover-second",
                                icon: IconAchievementsSm,
                                href: "#",
                            },
                        });
                        return () => {
                            unmount(instance);
                        };
                    },
                })),
            });

            const awardedSecond = container.querySelector(
                ".s-user-card--group.fc-blue-400"
            );
            expect(awardedSecond).to.exist;
        });

        it("should apply fc-orange-400 class when using UserCardAdditionalBling with third class", () => {
            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                additionalBlings: createRawSnippet(() => ({
                    render: () => "<span></span>",
                    setup: (target) => {
                        const instance = mount(UserCardAdditionalBling, {
                            target,
                            props: {
                                class: "fc-orange-400",
                                tooltipText:
                                    "This user is third on the weekly leaderboard.",
                                id: "user-card-award-popover-third",
                                icon: IconAchievementsSm,
                                href: "#",
                            },
                        });
                        return () => {
                            unmount(instance);
                        };
                    },
                })),
            });

            const awardedThird = container.querySelector(
                ".s-user-card--group.fc-orange-400"
            );
            expect(awardedThird).to.exist;
        });

        it("should show popover tooltip when hovering over additionalBlings", async () => {
            clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            const additionalBlingsSnippet = createRawSnippet(() => ({
                render: () => "<span></span>",
                setup: (target) => {
                    const instance = mount(UserCardAdditionalBling, {
                        target,
                        props: {
                            class: "fc-yellow-400",
                            tooltipText:
                                "This user is first on the weekly leaderboard.",
                            id: "user-card-award-popover-first",
                            icon: IconAchievementsSm,
                            href: "#",
                        },
                    });
                    return () => {
                        unmount(instance);
                    };
                },
            }));

            const { container } = render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
                additionalBlings: additionalBlingsSnippet,
            });

            const awardedFirst = container.querySelector(
                ".s-user-card--group.fc-yellow-400"
            );
            expect(awardedFirst).to.exist;

            await userEvent.hover(awardedFirst!);
            await clock.runAllAsync();
            await tick();

            expect(
                screen.getByText(
                    "This user is first on the weekly leaderboard."
                )
            ).to.exist;
        });

        it("should not render additionalBlings when not provided", () => {
            render(UserCard, {
                name: "John Doe",
                avatar: "https://picsum.photos/128",
            });

            const awardedFirst = document.querySelector(
                ".s-user-card--group.fc-yellow-400"
            );
            expect(awardedFirst).not.to.exist;
        });
    });
});

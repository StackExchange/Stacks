import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { createRawSnippet } from "svelte";
import sinon from "sinon";
import {
    IconHome,
    IconHomeFill,
    IconJobs,
    IconJobsFill,
    IconTagStack,
    IconTagStackFill,
    IconSettings,
    IconSettingsFill,
} from "@stackoverflow/stacks-icons/icons";
import { createSvelteComponentsSnippet } from "../../../test-utils";

import Navigation from "./Navigation.svelte";
import NavigationItem from "./NavigationItem.svelte";
import NavigationTitle from "./NavigationTitle.svelte";

describe("Navigation", () => {
    it("should render navigation with multiple items and handle selection with links", async () => {
        render(Navigation, {
            props: {
                label: "Main navigation",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationItem,
                        props: {
                            text: "Item 1",
                            href: "#item1",
                            selected: true,
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Item 2",
                            href: "#item2",
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Item 3",
                            href: "#item3",
                        },
                    },
                ]),
            },
        });

        const nav = screen.getByRole("navigation", {
            name: "Main navigation",
        });
        expect(nav).to.exist;

        const item1 = screen.getByRole("link", { name: "Item 1" });
        const item2 = screen.getByRole("link", { name: "Item 2" });
        const item3 = screen.getByRole("link", { name: "Item 3" });

        expect(item1).to.have.attribute("aria-current", "true");
        expect(item2).not.to.have.attribute("aria-current");
        expect(item3).not.to.have.attribute("aria-current");
    });

    it("should render navigation with button items and handle click events", async () => {
        const onButton1Click = sinon.spy();
        const onButton2Click = sinon.spy();

        render(Navigation, {
            props: {
                label: "Button navigation",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationItem,
                        props: {
                            text: "Button 1",
                            selected: true,
                            onclick: onButton1Click,
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Button 2",
                            onclick: onButton2Click,
                        },
                    },
                ]),
            },
        });

        const button1 = screen.getByRole("button", { name: "Button 1" });
        const button2 = screen.getByRole("button", { name: "Button 2" });

        expect(button1).to.have.attribute("aria-current", "true");
        expect(button2).not.to.have.attribute("aria-current");

        await userEvent.click(button1);
        expect(onButton1Click).to.have.been.calledOnce;

        await userEvent.click(button2);
        expect(onButton2Click).to.have.been.calledOnce;
    });

    it("should render vertical navigation with proper class and icon switching on selection", () => {
        render(Navigation, {
            props: {
                label: "Vertical navigation",
                orientation: "vertical",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationItem,
                        props: {
                            text: "Home",
                            icon: IconHome,
                            iconSelected: IconHomeFill,
                            selected: true,
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Jobs",
                            icon: IconJobs,
                            iconSelected: IconJobsFill,
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Saves",
                            icon: IconTagStack,
                            iconSelected: IconTagStackFill,
                        },
                    },
                ]),
            },
        });

        const list = screen.getByRole("list");
        expect(list).to.have.class("s-navigation__vertical");

        const homeButton = screen.getByRole("button", { name: "Home" });
        expect(homeButton).to.have.attribute("aria-current", "true");

        // selected item should show iconSelected (IconHomeFill)
        const homeIcon = homeButton.querySelector(".s-navigation--icon");
        expect(homeIcon).to.have.class("iconHomeFill");
        expect(homeIcon).not.to.have.class("iconHome");

        // Non-selected items should show regular icon (not the selected variant)
        const jobsButton = screen.getByRole("button", { name: "Jobs" });
        const jobsIcon = jobsButton.querySelector(".s-navigation--icon");
        expect(jobsIcon).to.have.class("iconJobs");
        expect(jobsIcon).not.to.have.class("iconJobsFill");

        const savesButton = screen.getByRole("button", { name: "Saves" });
        const savesIcon = savesButton.querySelector(".s-navigation--icon");
        expect(savesIcon).to.have.class("iconTagStack");
        expect(savesIcon).not.to.have.class("iconTagStackFill");
    });

    it("should render horizontal navigation with dropdown indicators on specific items", () => {
        render(Navigation, {
            props: {
                label: "Horizontal navigation",
                orientation: "horizontal",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationItem,
                        props: {
                            text: "Content",
                            icon: IconHome,
                            iconSelected: IconHomeFill,
                            selected: true,
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Topics",
                            icon: IconTagStack,
                            iconSelected: IconTagStackFill,
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Settings",
                            icon: IconSettings,
                            iconSelected: IconSettingsFill,
                            dropdown: true,
                        },
                    },
                ]),
            },
        });

        const list = screen.getByRole("list");
        expect(list).not.to.have.class("s-navigation__vertical");

        const contentButton = screen.getByRole("button", {
            name: "Content",
        });
        const topicsButton = screen.getByRole("button", { name: "Topics" });
        const settingsButton = screen.getByRole("button", {
            name: "Settings",
        });

        expect(contentButton).not.to.have.class("s-navigation--item__dropdown");
        expect(topicsButton).not.to.have.class("s-navigation--item__dropdown");
        expect(settingsButton).to.have.class("s-navigation--item__dropdown");
    });

    it("should render navigation with title sections separating groups", () => {
        render(Navigation, {
            props: {
                label: "Grouped navigation",
                orientation: "vertical",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationTitle,
                        props: {
                            title: "Group 1",
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Item 1",
                            selected: true,
                        },
                    },
                    {
                        component: NavigationTitle,
                        props: {
                            title: "Group 2",
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Item 2",
                        },
                    },
                ]),
            },
        });

        // TODO: is role separator semantically correct here? should titles be heading instead?
        const separators = screen.getAllByRole("separator");
        expect(separators.length).to.equal(2);

        expect(separators[0]).to.have.text("Group 1 ");
        expect(separators[1]).to.have.text("Group 2 ");
    });

    it("should render navigation items and navigation titles with trailing content", () => {
        render(Navigation, {
            props: {
                label: "Navigation items with trailing content",
                orientation: "vertical",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationTitle,
                        props: {
                            title: "Title",
                            trailing: createRawSnippet(() => ({
                                render: () => "<button>Toggle</button>",
                            })),
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Home",
                            icon: IconHome,
                            iconSelected: IconHomeFill,
                            selected: true,
                            trailing: createRawSnippet(() => ({
                                render: () => "<span>New</span>",
                            })),
                        },
                    },
                ]),
            },
        });

        expect(screen.getByRole("button", { name: "Toggle" })).to.exist;
        expect(screen.getByText("New")).to.exist;
    });

    it("should apply scroll class when overflow is set to scroll", () => {
        render(Navigation, {
            props: {
                label: "Scroll navigation",
                overflow: "scroll",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationItem,
                        props: { text: "Item 1", selected: true },
                    },
                    {
                        component: NavigationItem,
                        props: { text: "Item 2" },
                    },
                    {
                        component: NavigationItem,
                        props: { text: "Item 3" },
                    },
                ]),
            },
        });

        const list = screen.getByRole("list");
        expect(list).to.have.class("s-navigation__scroll");
    });

    it("should apply small size class when the related prop is passed", () => {
        render(Navigation, {
            props: {
                label: "Small horizontal navigation",
                size: "sm",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationItem,
                        props: { text: "Item 1", selected: true },
                    },
                    {
                        component: NavigationItem,
                        props: { text: "Item 2" },
                    },
                ]),
            },
        });

        const list = screen.getByRole("list");
        expect(list).to.have.class("s-navigation__sm");
    });

    it("should render navigation items with avatar", () => {
        render(Navigation, {
            props: {
                label: "Navigation items with avatar",
                orientation: "vertical",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationItem,
                        props: {
                            text: "Item 1",
                            avatar: "https://picsum.photos/32",
                        },
                    },
                ]),
            },
        });

        // TODO: should we have a version of the avatar decorative only?
        const item = screen.getByRole("button", { name: "Item 1 Item 1" });
        expect(item).to.exist;
        const img = screen.getByRole("presentation");
        expect(img).to.have.attribute("src", "https://picsum.photos/32");
    });

    it("should allow custom classes to be applied", () => {
        render(Navigation, {
            props: {
                label: "Custom styled navigation",
                class: "custom-nav-class",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationTitle,
                        props: {
                            title: "Title",
                            class: "custom-title-class",
                        },
                    },
                    {
                        component: NavigationItem,
                        props: {
                            text: "Item",
                            class: "custom-item-class",
                            selected: true,
                        },
                    },
                ]),
            },
        });

        const list = screen.getByRole("list");
        expect(list).to.have.class("custom-nav-class");

        const title = screen.getByText("Title");
        expect(title).to.have.class("custom-title-class");

        const item = screen.getByRole("button", { name: "Item" });
        expect(item).to.have.class("custom-item-class");
    });
});

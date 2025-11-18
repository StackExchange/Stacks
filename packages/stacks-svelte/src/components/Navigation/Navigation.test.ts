import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createSvelteComponentsSnippet } from "../../../test-utils";
import type { Component } from "svelte";

import Navigation from "./Navigation.svelte";
import NavigationItem from "./NavigationItem.svelte";

// TODO: write unit tests
describe("Navigation", () => {
    it("should render a navigation element with the correct label and items", () => {
        render(Navigation, {
            props: {
                label: "Main navigation",
                children: createSvelteComponentsSnippet([
                    {
                        component: NavigationItem as Component,
                        props: {
                            text: "Item 1",
                            href: "#",
                            selected: true,
                        },
                    },
                    {
                        component: NavigationItem as Component,
                        props: {
                            text: "Item 2",
                            href: "#",
                        },
                    },
                ]),
            },
        });

        const nav = screen.getByRole("navigation", { name: "Main navigation" });
        expect(nav).to.exist;
        expect(screen.getByRole("link", { name: "Item 1" })).to.exist;
        expect(screen.getByRole("link", { name: "Item 1" })).to.have.attribute("aria-current", "true");
        expect(screen.getByRole("link", { name: "Item 2" })).to.exist;
    });
});

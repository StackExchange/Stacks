import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Icon from "./Icon.svelte";

describe("Icon", () => {
    it("should render the element passed in the src prop", async () => {
        render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon"></svg>`,
        });
        expect(screen.getByTestId("icon")).to.be.visible;
    });

    it("should add the 'native' class to the svg element when native is set to true", async () => {
        render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon"></svg>`,
            native: true,
        });
        expect(screen.getByTestId("icon")).to.have.class("native");
    });

    it("should remove the aria-hidden property and add a title tag when the title prop is provided", async () => {
        render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon" aria-hidden="true"></svg>`,
            title: "My title",
        });
        expect(screen.getByTestId("icon")).not.to.have.attribute("aria-hidden");
        expect(screen.getByTestId("icon")).to.have.descendant("title");
        expect(screen.getByTestId("icon").querySelector("title")).to.have.text(
            "My title"
        );
    });

    it("should proxies any additional class to the svg element", async () => {
        render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon"></svg>`,
            class: "additional-class",
        });
        expect(screen.getByTestId("icon")).to.have.class("additional-class");
    });

    it("should adjust the svg content on prop updates", async () => {
        const component = render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon"></svg>`,
            class: "additional-class",
        });

        component.rerender({ class: "updated-class" });

        await tick();

        expect(screen.getByTestId("icon")).not.to.have.class(
            "additional-class"
        );
        expect(screen.getByTestId("icon")).to.have.class("updated-class");
    });
});

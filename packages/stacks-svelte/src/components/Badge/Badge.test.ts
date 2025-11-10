import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { IconAlert } from "@stackoverflow/stacks-icons-legacy/icons";

import Badge from "./Badge.svelte";

const children = createRawSnippet(() => ({
    render: () => "<span>test badge</span>",
}));

describe("Badge", () => {
    it("should render the badge with the slot value", () => {
        render(Badge, { children });
        expect(screen.getByText("test badge")).to.exist;
    });

    it("should render the award as a bling component", () => {
        render(Badge, { award: "gold", children });
        const badge = screen.getByText("test badge").closest(".s-badge");
        const bling = badge?.querySelector(".s-bling");
        expect(bling).to.exist;
    });

    it("should apply the filled class when filled is true", () => {
        render(Badge, { filled: true, children });
        const badge = screen.getByText("test badge").closest(".s-badge");
        expect(badge).to.have.class("s-badge__filled");
    });

    it("should apply the appropriate size class", () => {
        render(Badge, { size: "sm", children });
        const badge = screen.getByText("test badge").closest(".s-badge");
        expect(badge).to.have.class("s-badge__sm");
    });

    it("should apply the appropriate variant class", () => {
        render(Badge, { variant: "answered", children });
        const badge = screen.getByText("test badge").closest(".s-badge");
        expect(badge).to.have.class("s-badge__answered");
    });

    it("should render the icon when provided", () => {
        render(Badge, { icon: IconAlert, children });
        const icon = document.querySelector("svg.iconAlert");
        const badge = icon?.closest(".s-badge");
        expect(icon).to.exist;
        expect(badge).to.have.class("s-badge__icon");
    });

    it("should render the badge with artbirary classes", () => {
        render(Badge, { class: "bg-red-400", children });
        const badge = screen.getByText("test badge").closest(".s-badge");
        expect(badge).to.have.class("bg-red-400");
    });
});

import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummaryStateBadge from "./PostSummaryStateBadge.svelte";

describe("PostSummaryStateBadge", () => {
    it("should render the state badge with base class", () => {
        render(PostSummaryStateBadge, { state: "archived" });

        const badge = screen.getByText("Archived");
        expect(badge).to.exist;
        expect(badge).to.have.class("s-badge");
    });

    it("should render the state badge with state variant class when state has a badge variant", () => {
        render(PostSummaryStateBadge, { state: "closed" });

        const badge = screen.getByText("Closed");
        expect(badge).to.exist;
        expect(badge).to.have.class("s-badge");
        expect(badge).to.have.class("s-badge__danger");
    });

    it("should render the state badge with an icon", () => {
        render(PostSummaryStateBadge, { state: "archived" });

        const badge = screen.getByText("Archived");
        const icon = badge.querySelector("svg");
        expect(icon).to.exist;
    });

    it("should render the i18nText if provided", () => {
        const i18nText = "Localized Text";
        render(PostSummaryStateBadge, { state: "archived", i18nText });

        const textElement = screen.getByText(i18nText);
        expect(textElement).to.exist;
    });
});

import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummaryStateBadge from "./PostSummaryStateBadge.svelte";

describe("PostSummaryStateBadge", () => {
    it("should render the state badge with appropriate badge classes", () => {
        render(PostSummaryStateBadge, { state: "archived" });

        const badge = screen.getByText("Archived");
        expect(badge).to.exist;
        expect(badge).to.have.class("s-badge");
        expect(badge).to.have.class("s-badge__muted");
        expect(badge).to.have.class("s-badge__icon");
    });

    it("should render the state badge with the appropriate icon", () => {
        render(PostSummaryStateBadge, { state: "archived" });

        const badge = screen.getByText("Archived");
        const iconElement = badge.firstElementChild;
        expect(iconElement).to.exist;
        expect(iconElement).to.have.class("iconArchiveSm");
    });

    it("should render the i18nText if provided", () => {
        const i18nText = "Localized Text";
        render(PostSummaryStateBadge, { state: "archived", i18nText });

        const textElement = screen.getByText(i18nText);
        expect(textElement).to.exist;
    });
});

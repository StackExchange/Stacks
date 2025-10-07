import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummaryStatsItem from "./PostSummaryStatsItem.svelte";

describe("PostSummaryStatsItem", () => {
    it("should render the unit and number", () => {
        render(PostSummaryStatsItem, {
            number: 123,
            unit: "views",
            variant: "views",
        });

        const itemText = screen
            .getByText("views")
            .closest(".s-post-summary--stats-item");
        expect(itemText).to.exist;
        expect(itemText?.textContent).to.equal("123 views");
    });

    it("should apply the correct class for variant", () => {
        render(PostSummaryStatsItem, {
            number: 50,
            unit: "",
            variant: "bounty",
        });

        const item = screen
            .getByText("+50")
            .closest(".s-post-summary--stats-item");
        ["s-badge", "s-badge__bounty"].forEach((className) => {
            expect(item).to.have.class(className);
        });
    });

    it("should apply the `has-answers` class when appropriate", () => {
        render(PostSummaryStatsItem, {
            number: 5,
            unit: "answers",
            variant: "answers",
        });

        const item = screen
            .getByText("answers")
            .closest(".s-post-summary--stats-item");
        expect(item).to.have.class("has-answers");
    });

    it("should apply the correct class for hotness", () => {
        render(PostSummaryStatsItem, {
            hotness: "hot",
            number: 123,
            unit: "views",
        });

        const item = screen
            .getByText("views")
            .closest(".s-post-summary--stats-item");
        expect(item).to.have.class("is-hot");
    });

    it("should apply emphasis to the votes variant", () => {
        render(PostSummaryStatsItem, {
            number: 5,
            unit: "votes",
            variant: "votes",
        });

        const item = screen
            .getByText("votes")
            .closest(".s-post-summary--stats-item");
        expect(item).to.have.class("s-post-summary--stats-item__emphasized");
    });
});

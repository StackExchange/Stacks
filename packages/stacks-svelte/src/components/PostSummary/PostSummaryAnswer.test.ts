import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummaryAnswer from "./PostSummaryAnswer.svelte";

const baseArgs = {
    href: "#",
    excerpt:
        "I wanted to see how different tags related to each other. The below graph depicts associations between popular tags on our site.",
    timestamp: "2024-01-15T12:00:00.000Z",
    userAvatar: "https://avatars.githubusercontent.com/u/2",
    userName: "Jane Smith",
    userReputation: "1,000",
    userProfileUrl: "#jane-smith",
    votes: 5,
};

describe("PostSummaryAnswer", () => {
    it("should render the excerpt", () => {
        render(PostSummaryAnswer, { ...baseArgs });

        const excerpt = screen.getByText(baseArgs.excerpt);
        expect(excerpt).to.exist;
        expect(excerpt).to.have.class("s-post-summary--excerpt");
        expect(excerpt).to.have.text(baseArgs.excerpt);
    });

    it("should render the accepted answer stats when accepted is true", () => {
        render(PostSummaryAnswer, { ...baseArgs, accepted: true });

        const acceptedItem = screen.getByText("Accepted answer", {
            selector: ".s-post-summary--stats-answers",
        });
        expect(acceptedItem).to.exist;
        expect(acceptedItem?.textContent?.trim()).to.equal("Accepted answer");
        expect(acceptedItem).to.have.class("s-post-summary--stats-answers");
    });

    it("should render the user card with the correct props", () => {
        render(PostSummaryAnswer, { ...baseArgs });

        const userCard = document.querySelector(".s-user-card");
        expect(userCard).to.exist;

        const name = document.querySelector(".s-user-card--username");
        expect(name?.parentElement).to.have.attr(
            "href",
            baseArgs.userProfileUrl
        );

        const avatarImg = screen.getByRole("presentation");
        const avatar = avatarImg?.parentElement;
        expect(avatarImg).to.have.attr("src", baseArgs.userAvatar);
        expect(avatar).to.have.class("s-avatar");
        expect(avatar?.parentElement).to.have.attr(
            "href",
            baseArgs.userProfileUrl
        );

        const reputation = screen.getByText(baseArgs.userReputation);
        expect(reputation).to.exist;

        const timeLink = document.querySelector(".s-user-card--time");
        expect(timeLink).to.exist;
        expect(timeLink?.querySelector("time")).to.exist;
    });

    it("should render the votes count", () => {
        render(PostSummaryAnswer, { ...baseArgs });

        const votesEl = document.querySelector(".s-post-summary--stats-votes");
        expect(votesEl).to.exist;
        expect(votesEl?.textContent?.trim()).to.include("5");
    });

    // i18n
    it("should render the accepted answer stats with the localized text", () => {
        render(PostSummaryAnswer, {
            ...baseArgs,
            accepted: true,
            i18nAcceptedAnswerText: "Respuesta aceptada",
        });

        const acceptedStats = screen.getByText("Respuesta aceptada", {
            selector: ".s-post-summary--stats-answers",
        });
        expect(acceptedStats).to.exist;
        expect(acceptedStats).to.have.class("s-post-summary--stats-answers");
    });
});

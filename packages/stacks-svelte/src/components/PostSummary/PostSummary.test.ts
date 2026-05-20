import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummary from "./PostSummary.svelte";

const baseArgs = {
    answers: 10,
    href: "#",
    readableTimestamp: "asked 2 hr ago",
    utcTimestamp: "2024-01-15T12:00:00.000Z",
    title: "Network graph of popular tags on Stack Overflow",
    userAvatar: "https://avatars.githubusercontent.com/u/1",
    userName: "Jane Smith",
    userProfileUrl: "#jane-smith",
    userReputation: 1000,
    views: 100,
    votes: 1,
    excerpt:
        "I wanted to see how different tags related to each other. The below graph depicts associations between popular tags on our site. Description of analysis: I started looking at the 1000 most popular tags on questions in 2021. I created a list of tags cross joined by the question ID (so if a question contains tags for both Python and Numpy, it would show up in my list). I scaled up by the number of answers each question received (noting that some tag combos had 0 answers) -and then counted each distinct combination of each tag. Due to limitations in graphing, I only displayed the top ~2500 tag combinations - which accounts for tags combos that had more than 40 answers over the entire year.",
};

const snippet = createRawSnippet(() => ({
    render: () => "<span>test snippet</span>",
}));

describe("PostSummary", () => {
    it("should render the title as a link with the passed href", () => {
        render(PostSummary, { ...baseArgs });

        const titleLink = screen.getByRole("link", { name: baseArgs.title });
        expect(titleLink).to.exist;
        expect(titleLink).to.have.attr("href", baseArgs.href);
        expect(titleLink.textContent?.trim()).to.equal(baseArgs.title);
    });

    // classes
    it("should render the excerpt with expected number of lines", () => {
        render(PostSummary, { ...baseArgs, excerptLines: 2 });

        const excerpt = screen.getByText(baseArgs.excerpt);
        expect(excerpt).to.exist;
        expect(excerpt).to.have.class("s-post-summary--excerpt");
        expect(excerpt).to.have.class("v-truncate2");
    });

    it("should not render the excerpt when excerptLines is 0", () => {
        render(PostSummary, { ...baseArgs, excerptLines: 0 });

        const excerptContainer = document.querySelector(
            ".s-post-summary--excerpt"
        );
        expect(excerptContainer).not.to.exist;
    });

    it("should include the answered class when acceptedAnswer is true", () => {
        render(PostSummary, { ...baseArgs, acceptedAnswer: true });

        const postSummary = document.querySelector(".s-post-summary");
        expect(postSummary).to.exist;
        expect(postSummary).to.have.class("s-post-summary__answered");
    });

    it("should include the appropriate state class when state is deleted", () => {
        render(PostSummary, { ...baseArgs, state: "deleted" });

        const postSummary = document.querySelector(".s-post-summary");
        expect(postSummary).to.exist;
        expect(postSummary).to.have.class("s-post-summary__deleted");
    });

    it("should apply the class prop to the root element", () => {
        render(PostSummary, { ...baseArgs, class: "my-custom-class" });

        const postSummary = document.querySelector(".s-post-summary");
        expect(postSummary).to.exist;
        expect(postSummary).to.have.class("s-post-summary");
        expect(postSummary).to.have.class("my-custom-class");
    });

    // stats items
    it("should render the state badge", () => {
        render(PostSummary, { ...baseArgs, state: "pinned" });

        const stateBadges = screen.getAllByText("Pinned");
        expect(stateBadges.length).to.be.at.least(1);
        expect(stateBadges[0]).to.exist;
    });

    it("should render the votes stats item", () => {
        render(PostSummary, { ...baseArgs });

        const votesContainer = document.querySelector(
            ".s-post-summary--stats-votes"
        );
        expect(votesContainer).to.exist;
        expect(votesContainer?.textContent).to.include("1");
        expect(votesContainer?.textContent).to.include("vote");
    });

    it("should render the answers stats item", () => {
        render(PostSummary, { ...baseArgs });

        const answersContainers = document.querySelectorAll(
            ".s-post-summary--stats-answers"
        );
        expect(answersContainers.length).to.be.at.least(1);
        expect(answersContainers[0]?.textContent).to.include("10");
        expect(answersContainers[0]?.textContent).to.include("answers");
    });

    it("should render the views stats item", () => {
        render(PostSummary, { ...baseArgs });

        const viewsItem = screen.getByText((content, el) => {
            return (
                el?.classList.contains("s-post-summary--stats-item") === true &&
                content.includes("views")
            );
        });
        expect(viewsItem).to.exist;
        expect(viewsItem.textContent).to.include("100");
        expect(viewsItem.textContent).to.include("views");
    });

    it("should render the read time", () => {
        render(PostSummary, { ...baseArgs, readTime: "5 min read" });

        const readTime = screen.getByText("5 min read");
        expect(readTime).to.exist;
    });

    it("should render the bounty", () => {
        render(PostSummary, { ...baseArgs, bounty: 50 });

        const bountyContainer = document.querySelector(
            ".s-post-summary--stats-bounty"
        );
        expect(bountyContainer).to.exist;
        expect(bountyContainer?.textContent).to.include("+");
        expect(bountyContainer?.textContent).to.include("50");
    });

    it("should render the comments stats item when comments is provided", () => {
        render(PostSummary, { ...baseArgs, comments: 5 });

        const commentsItem = screen.getByText((content, el) => {
            return (
                el?.classList.contains("s-post-summary--stats-item") === true &&
                content.includes("comments")
            );
        });
        expect(commentsItem).to.exist;
        expect(commentsItem.textContent).to.include("5");
        expect(commentsItem.textContent).to.include("comments");
    });

    // gated
    it("should render the shield icon before the title when gated", () => {
        render(PostSummary, { ...baseArgs, gated: true });

        const titleLink = screen.getByRole("link", { name: baseArgs.title });
        const icon = titleLink.querySelector("svg");
        expect(icon).to.exist;
    });

    // content type
    it("should render the content type with the correct props", () => {
        render(PostSummary, {
            ...baseArgs,
            contentType: {
                name: "announcement",
                url: "#announcement",
            },
        });

        const contentTypeLink = screen.getByText("Announcement");
        const contentType = contentTypeLink.closest(
            ".s-post-summary--content-type"
        );
        expect(contentType).to.exist;
        expect(contentTypeLink).to.have.attr("href", "#announcement");
    });

    // snippets
    it("should render the answerPreviews snippet", () => {
        const answerPreviewsSnippet = createRawSnippet(() => ({
            render: () => `<div id="answerPreviews">answers</div>`,
        }));
        render(PostSummary, {
            ...baseArgs,
            answerPreviews: answerPreviewsSnippet,
        });

        const answerPreviewsContainer = document.querySelector(
            ".s-post-summary--answers"
        );
        expect(answerPreviewsContainer).to.exist;
        const answerPreviews = document.querySelector("#answerPreviews");
        expect(answerPreviews).to.exist;
        expect(answerPreviews).to.have.text("answers");
    });

    it("should render the tags snippet", () => {
        render(PostSummary, { ...baseArgs, tags: snippet });

        const tagsContainer = document.querySelector(".s-post-summary--tags");
        expect(tagsContainer).to.exist;
        expect(tagsContainer?.textContent?.trim()).to.include("test snippet");
    });

    // i18n
    it("should render the accepted answer icon with i18nAcceptedAnswerIconTitle", () => {
        render(PostSummary, {
            ...baseArgs,
            acceptedAnswer: true,
            i18nAcceptedAnswerIconTitle: "Respuesta aceptada",
        });

        const titleText = screen.getByText("Respuesta aceptada");
        expect(titleText).to.exist;
    });

    it("should render the answers unit with i18nAnswersUnit", () => {
        render(PostSummary, {
            ...baseArgs,
            i18nAnswersUnit: "respuestas",
        });

        const answersUnit = screen.getAllByText("respuestas");
        expect(answersUnit.length).to.be.at.least(1);
    });

    it("should render the bounty unit with i18nBountyUnit", () => {
        render(PostSummary, {
            ...baseArgs,
            bounty: 50,
            i18nBountyUnit: "recompensa",
        });

        const bountyUnits = screen.getAllByText("recompensa");
        expect(bountyUnits.length).to.be.at.least(1);
    });

    it("should render the comments unit with i18nCommentsUnit", () => {
        render(PostSummary, {
            ...baseArgs,
            comments: 5,
            i18nCommentsUnit: "comentarios",
        });

        const commentsItem = screen.getByText((content, el) => {
            return (
                el?.classList.contains("s-post-summary--stats-item") === true &&
                content.includes("comentarios")
            );
        });
        expect(commentsItem).to.exist;
        expect(commentsItem?.textContent).to.include("comentarios");
    });

    it("should render the content type with i18nContentTypeText", () => {
        render(PostSummary, {
            ...baseArgs,
            contentType: {
                name: "announcement",
                url: "#announcement",
            },
            i18nContentTypeText: "Anuncio",
        });

        const contentTypeLink = screen.getByText("Anuncio");
        expect(contentTypeLink).to.exist;
    });

    it("should render the shield icon with i18nGatedTitle", () => {
        render(PostSummary, {
            ...baseArgs,
            gated: true,
            i18nGatedTitle: "bloqueado",
        });

        const titleText = screen.getByText("bloqueado");
        expect(titleText).to.exist;
    });

    it("should render the reputation bling with i18nReputationBlingName", () => {
        render(PostSummary, {
            ...baseArgs,
            i18nReputationBlingName: "puntos de reputación",
        });

        const blingName = screen.getByText("puntos de reputación");
        expect(blingName).to.exist;
    });

    it("should render the state badge with i18nStateBadgeText", () => {
        render(PostSummary, {
            ...baseArgs,
            state: "pinned",
            i18nStateBadgeText: "Fijado",
        });

        const stateBadgeText = screen.getAllByText("Fijado");
        expect(stateBadgeText.length).to.be.at.least(1);
    });

    it("should render the views unit with i18nViewsUnit", () => {
        render(PostSummary, {
            ...baseArgs,
            i18nViewsUnit: "vistas",
        });

        const viewsUnit = screen.getByText((content, el) => {
            return (
                el?.classList.contains("s-post-summary--stats-item") === true &&
                content.includes("vistas")
            );
        });
        expect(viewsUnit).to.exist;
        expect(viewsUnit?.textContent).to.include("vistas");
    });

    it("should render the votes unit with i18nVotesUnit", () => {
        render(PostSummary, {
            ...baseArgs,
            i18nVotesUnit: "voto",
        });

        const votesUnit = screen.getByText("voto");
        expect(votesUnit).to.exist;
    });
});

import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummary from "./PostSummary.svelte";

const baseArgs = {
    answers: 10,
    href: "#",
    timestamp: "10 minutes ago",
    title: "Network graph of popular tags on Stack Overflow",
    userAvatar: "https://avatars.githubusercontent.com/u/1",
    userName: "Jane Smith",
    userProfileUrl: "#jane-smith",
    userReputation: "1,000",
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
        render(PostSummary, { props: baseArgs });

        const titleLink = screen.getByRole("link", { name: baseArgs.title });
        expect(titleLink).to.exist;
        expect(titleLink).to.have.attr("href", baseArgs.href);
        expect(titleLink).to.have.text(` ${baseArgs.title}`);
    });

    // classes
    it("should render the excerpt with the appropriate size class", () => {
        render(PostSummary, { props: { ...baseArgs, excerptSize: "md" } });

        const excerpt = screen.getByText(baseArgs.excerpt);
        expect(excerpt).to.exist;
        expect(excerpt).to.have.class("s-post-summary--content-excerpt__md");
        expect(excerpt).to.have.text(`${baseArgs.excerpt}`);
    });

    it("should include the minimal class", () => {
        render(PostSummary, { props: { ...baseArgs, minimal: true } });

        const postSummary = document.querySelector(".s-post-summary");
        expect(postSummary).to.exist;
        expect(postSummary).to.have.class("s-post-summary__minimal");
    });

    it("should include the appropriate state class", () => {
        render(PostSummary, { props: { ...baseArgs, state: "deleted" } });

        const postSummary = document.querySelector(".s-post-summary");
        expect(postSummary).to.exist;
        expect(postSummary).to.have.class("s-post-summary__deleted");
    });

    it("should include the watched class when ignored is true", () => {
        render(PostSummary, { props: { ...baseArgs, ignored: true } });

        const postSummary = document.querySelector(".s-post-summary");
        expect(postSummary).to.exist;
        expect(postSummary).to.have.class("s-post-summary__ignored");
    });

    it("should include the watched class when watched is true", () => {
        render(PostSummary, { props: { ...baseArgs, watched: true } });

        const postSummary = document.querySelector(".s-post-summary");
        expect(postSummary).to.exist;
        expect(postSummary).to.have.class("s-post-summary__watched");
    });

    it("should render the views stats item with the appropriate hotness class", () => {
        render(PostSummary, {
            props: { ...baseArgs, hotness: "hot" },
        });

        const views = document.querySelector(".is-hot");
        expect(views).to.exist;
    });

    // stats items
    it("should render the state badge", () => {
        render(PostSummary, { props: { ...baseArgs, state: "pinned" } });

        const stateBadge = screen.getByText("Pinned");
        expect(stateBadge).to.exist;
    });

    it("should render the votes stats item", () => {
        render(PostSummary, { props: baseArgs });

        const votes = screen.getByText("vote").parentElement;
        expect(votes).to.have.text("1 vote");
    });

    it("should render the answers stats item", () => {
        render(PostSummary, { props: baseArgs });

        const answers = screen.getByText("answers").parentElement;
        expect(answers).to.have.text("10 answers");
    });

    it("should render the views stats item", () => {
        render(PostSummary, { props: baseArgs });

        const views = screen.getByText("views").parentElement;
        expect(views).to.have.text("100 views");
    });

    it("should render the read time", () => {
        render(PostSummary, { props: { ...baseArgs, readTime: "5 min read" } });

        const readTime = screen.getByText("5 min read");
        expect(readTime).to.exist;
    });

    it("should render the bounty", () => {
        render(PostSummary, { props: { ...baseArgs, bounty: 50 } });

        const bounty = screen.getByText("+50");
        expect(bounty).to.exist;
    });

    // title-adjacent
    it("should render the activity indicator before the title", () => {
        render(PostSummary, {
            props: { ...baseArgs, activityIndicator: true },
        });

        const title = document.querySelector("h3");
        const activityIndicator = title?.querySelector(".s-activity-indicator");
        expect(activityIndicator).to.exist;
        expect(activityIndicator).to.have.text(`New activity`);
    });

    it("should render the shield icon before the title", () => {
        render(PostSummary, {
            props: { ...baseArgs, gated: true },
        });

        const title = document.querySelector("h3");
        const shield = title?.querySelector(".iconShield");
        expect(shield).to.exist;
    });

    // slots
    it("should render the tags slot", () => {
        // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
        render(PostSummary, { ...baseArgs, $$slots: { tags: snippet } });

        const tags = document.querySelector(".s-post-summary--meta-tags");
        expect(tags).to.exist;
        expect(tags).to.have.text(`test snippet`);
    });

    it("should render the actionMenu slot", () => {
        // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
        render(PostSummary, { ...baseArgs, $$slots: { actionMenu: snippet } });

        const contentMenuBtn = document.querySelector(
            ".s-post-summary--content-menu-button"
        );
        expect(contentMenuBtn).to.exist;
    });

    it("should render the answer previews slot", () => {
        render(PostSummary, {
            ...baseArgs,
            // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
            $$slots: {
                answerPreviews: createRawSnippet(() => ({
                    render: () => `<div id="answerPreviews">answers</div>`,
                })),
            },
        });

        const answerPreviews = document.querySelector("#answerPreviews");
        expect(answerPreviews).to.exist;
        expect(answerPreviews).to.have.text(`answers`);
    });

    // i18n
    it("should render the activity indicator with the localized text", () => {
        render(PostSummary, {
            props: {
                ...baseArgs,
                activityIndicator: true,
                i18nActivityIndicatorText: "Nueva actividad",
            },
        });

        const activityIndicator = screen.getByText("Nueva actividad");
        expect(activityIndicator).to.exist;
    });

    it("should render the action menu button with the localized text", () => {
        render(PostSummary, {
            ...baseArgs,
            i18nActionMenuButtonText: "Menú",
            // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
            $$slots: {
                actionMenu: snippet,
            },
        });

        const menuButton = screen.getByRole("button", { name: "Menú" });
        expect(menuButton).to.exist;
    });

    it("should render the shield icon with the localized text", () => {
        render(PostSummary, {
            props: {
                ...baseArgs,
                gated: true,
                i18nGatedTitle: "bloqueado",
            },
        });

        const shield = screen.getByText("bloqueado");
        expect(shield).to.exist;
    });

    it("should render the content type component with the correct props", () => {
        render(PostSummary, {
            props: {
                ...baseArgs,
                contentType: {
                    name: "announcement",
                    url: "#announcement",
                },
            },
        });

        const contentTypeLink = screen.getByText("Announcement");
        const contentType = contentTypeLink.parentElement;
        expect(contentType).to.exist;
        expect(contentType).to.have.class("s-post-summary--content-type");
        expect(contentTypeLink).to.have.attr("href", "#announcement");
    });

    it("should render the content type with the localized text", () => {
        render(PostSummary, {
            props: {
                ...baseArgs,
                contentType: {
                    name: "announcement",
                    url: "#announcement",
                },
                i18nContentTypeText: "Anuncio",
            },
        });

        const contentTypeLink = screen.getByText("Anuncio");
        expect(contentTypeLink).to.exist;
    });
});

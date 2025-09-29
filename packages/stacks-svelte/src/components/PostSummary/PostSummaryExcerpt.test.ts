import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummaryExcerpt from "./PostSummaryExcerpt.svelte";

const baseArgs = {
    excerpt: "This is a brief excerpt of the post content.",
};

describe("PostSummaryExcerpt", () => {
    it("should render the excerpt", () => {
        render(PostSummaryExcerpt, {
            excerpt: "This is a brief excerpt of the post content.",
        });

        const excerpt = screen.getByText(baseArgs.excerpt);
        expect(excerpt).to.exist;
        expect(excerpt).to.have.class("s-post-summary--content-excerpt");
    });

    it("should render the excerpt with the appropriate size class", () => {
        render(PostSummaryExcerpt, {
            excerpt: "This is a brief excerpt of the post content.",
            size: "md",
        });

        const excerpt = screen.getByText(baseArgs.excerpt);
        expect(excerpt).to.exist;
        expect(excerpt).to.have.class("s-post-summary--content-excerpt__md");
    });
});

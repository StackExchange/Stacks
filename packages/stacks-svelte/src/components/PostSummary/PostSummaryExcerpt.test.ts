import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummaryExcerpt from "./PostSummaryExcerpt.svelte";

const baseExcerpt = "This is a brief excerpt of the post content.";

describe("PostSummaryExcerpt", () => {
    it("should render the excerpt with base class", () => {
        render(PostSummaryExcerpt, {
            excerpt: baseExcerpt,
        });

        const excerpt = screen.getByText(baseExcerpt);
        expect(excerpt).to.exist;
        expect(excerpt).to.have.class("s-post-summary--excerpt");
        expect(excerpt.tagName).to.equal("P");
    });

    it("should apply v-truncate class when truncate is true", () => {
        render(PostSummaryExcerpt, {
            excerpt: baseExcerpt,
            lines: 2,
            truncate: true,
        });

        const excerpt = screen.getByText(baseExcerpt);
        expect(excerpt).to.have.class("s-post-summary--excerpt");
        expect(excerpt).to.have.class("v-truncate2");
    });

    it("should not apply v-truncate class when truncate is false", () => {
        render(PostSummaryExcerpt, {
            excerpt: baseExcerpt,
            truncate: false,
        });

        const excerpt = screen.getByText(baseExcerpt);
        expect(excerpt).to.have.class("s-post-summary--excerpt");
        expect(excerpt).not.to.have.class("v-truncate3");
    });

    it("should apply d-none when lines is 0", () => {
        render(PostSummaryExcerpt, {
            excerpt: baseExcerpt,
            lines: 0,
        });

        const excerpt = screen.getByText(baseExcerpt);
        expect(excerpt).to.have.class("d-none");
        expect(excerpt).not.to.have.class("s-post-summary--excerpt");
    });
});

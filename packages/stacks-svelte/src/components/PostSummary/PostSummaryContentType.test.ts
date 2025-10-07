import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import PostSummaryContentType from "./PostSummaryContentType.svelte";

const snippet = createRawSnippet(() => ({
    render: () => "<span>test content</span>",
}));

describe("PostSummaryContentType", () => {
    it("should render the content type", () => {
        render(PostSummaryContentType, {
            href: "#",
            name: "announcement",
            // @ts-expect-error $$slots is used to pass children while component is still using Svelte 4 syntax
            $$slots: { default: snippet },
        });

        const contentType = screen.getByText("Announcement").parentElement;
        expect(contentType).to.exist;
        expect(contentType).to.have.class("s-post-summary--content-type");
    });

    it("should render the link with the passed href", () => {
        render(PostSummaryContentType, {
            href: "#",
            name: "announcement",
        });

        const link = screen.getByRole("link");
        expect(link).to.exist;
        expect(link).to.have.attr("href", "#");
    });

    it("should render the default content type text if i18nContentTypeText is not provided", () => {
        render(PostSummaryContentType, {
            href: "#",
            name: "policy",
        });

        const defaultText = screen.getByText("Policy");
        expect(defaultText).to.exist;
    });

    it("should render the content type with the localized text", () => {
        render(PostSummaryContentType, {
            href: "#",
            name: "announcement",
            i18nContentTypeText: "Anuncio",
        });

        const defaultText = screen.getByText("Anuncio");
        expect(defaultText).to.exist;
    });
});

import { expect } from "@open-wc/testing";
import sinon from "sinon";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import Pagination from "./PaginationController.svelte";

describe("PaginationController", () => {
    const urlGenerator = (page: number) => `/page/${page}`;

    it("renders pagination items correctly", () => {
        render(Pagination, {
            props: {
                page: 2,
                totalPages: 5,
                urlGenerator,
            },
        });

        expect(screen.getByText("Prev")).to.exist;
        expect(screen.getByText("Next")).to.exist;
        for (let i = 1; i <= 5; i++) {
            expect(screen.getByText(String(i))).to.exist;
        }
    });

    it("should render long pagination correctly", async () => {
        const { rerender } = render(Pagination, {
            props: {
                page: 5,
                totalPages: 10,
                urlGenerator,
            },
        });

        expect(screen.getByText("1")).to.exist;
        expect(screen.queryByText("2")).not.to.exist;
        expect(screen.getByText("3")).to.exist;
        expect(screen.getByText("4")).to.exist;
        expect(screen.getByText("5")).to.exist;
        expect(screen.getByText("6")).to.exist;
        expect(screen.getByText("7")).to.exist;
        expect(screen.queryByText("8")).not.to.exist;
        expect(screen.queryByText("9")).not.to.exist;
        expect(screen.getByText("10")).to.exist;

        await rerender({ page: 2 });

        expect(screen.getByText("1")).to.exist;
        expect(screen.getByText("2")).to.exist;
        expect(screen.getByText("3")).to.exist;
        expect(screen.getByText("4")).to.exist;
        expect(screen.getByText("5")).to.exist;
        expect(screen.queryByText("6")).not.to.exist;
        expect(screen.queryByText("7")).not.to.exist;
        expect(screen.queryByText("8")).not.to.exist;
        expect(screen.queryByText("9")).not.to.exist;
        expect(screen.getByText("10")).to.exist;

        await rerender({ page: 9 });

        expect(screen.getByText("1")).to.exist;
        expect(screen.queryByText("2")).not.to.exist;
        expect(screen.queryByText("3")).not.to.exist;
        expect(screen.queryByText("4")).not.to.exist;
        expect(screen.queryByText("5")).not.to.exist;
        expect(screen.getByText("6")).to.exist;
        expect(screen.getByText("7")).to.exist;
        expect(screen.getByText("8")).to.exist;
        expect(screen.getByText("9")).to.exist;
        expect(screen.getByText("10")).to.exist;
    });

    it("should always show first and last page", () => {
        render(Pagination, {
            props: {
                page: 5,
                totalPages: 10,
                urlGenerator,
            },
        });

        expect(screen.getByText("1")).to.exist;
        expect(screen.getByText("10")).to.exist;
    });

    it("should follow the generated link by default", async () => {
        render(Pagination, {
            props: {
                page: 2,
                totalPages: 5,
                urlGenerator,
            },
        });

        const link = screen.getByText("3").closest("a");
        expect(link).to.have.attribute("href", "/page/3");
    });

    it("dispatches pagechange event on item click when followLink is false", async () => {
        const mockHandler = sinon.spy();
        render(Pagination, {
            props: {
                page: 2,
                totalPages: 5,
                urlGenerator,
                followLink: false,
                onpagechange: mockHandler,
            },
        });

        await userEvent.click(screen.getByText("3"));
        expect(mockHandler).to.have.been.calledWith(3);

        await userEvent.click(screen.getByText("Prev"));
        expect(mockHandler).to.have.been.calledWith(1);

        await userEvent.click(screen.getByText("Next"));
        expect(mockHandler).to.have.been.calledWith(3);
    });

    it("disables previous button on first page", () => {
        render(Pagination, {
            props: {
                page: 1,
                totalPages: 5,
                urlGenerator,
            },
        });

        expect(screen.queryByText("Prev")).not.to.exist;
    });

    it("disables next button on last page", () => {
        render(Pagination, {
            props: {
                page: 5,
                totalPages: 5,
                urlGenerator,
            },
        });

        expect(screen.queryByText("Next")).not.to.exist;
    });

    it("applies nav class to navigation buttons", () => {
        render(Pagination, {
            props: {
                page: 2,
                totalPages: 5,
                urlGenerator,
            },
        });

        // Find the Next button by its role and accessible name
        const nextLink = screen.getByRole("link", { name: /Next/i });
        expect(nextLink).to.have.class("s-pagination--item__nav");

        // Verify the correct icon is rendered with the correct title
        const titleElement = screen.getByTitle("Next");
        expect(titleElement).to.exist;
        const icon = titleElement.closest("svg");
        expect(icon).to.exist;
        expect(icon?.tagName).to.equal("svg");
        expect(nextLink).to.contain(icon);

        // Verify Prev button also has nav class
        const prevLink = screen.getByRole("link", { name: /Prev/i });
        expect(prevLink).to.have.class("s-pagination--item__nav");

        // Verify regular page number items do NOT have nav class
        const page2Link = screen.getByRole("link", { name: /2/ });
        expect(page2Link).not.to.have.class("s-pagination--item__nav");
    });

    it("highlights the correct selected page", () => {
        render(Pagination, {
            props: {
                page: 3,
                totalPages: 5,
                urlGenerator,
            },
        });

        const selectedPage = screen.getByText("3");
        expect(selectedPage).to.have.attribute("aria-current", "page");
    });

    it("should use localized copy correctly", () => {
        render(Pagination, {
            props: {
                page: 2,
                totalPages: 5,
                urlGenerator,
                i18nNextText: "Siguiente",
                i18nPrevText: "Anterior",
                i18nPageText: "página",
                i18nNavigationLabel: "Paginación",
            },
        });

        expect(screen.getByRole("link", { name: "Anterior página" })).to.exist;
        expect(screen.getByRole("link", { name: "página 1" })).to.exist;
        expect(screen.getByRole("link", { name: "página 2" })).to.exist;
        expect(screen.getByRole("link", { name: "página 3" })).to.exist;
        expect(screen.getByRole("link", { name: "página 4" })).to.exist;
        expect(screen.getByRole("link", { name: "página 5" })).to.exist;
        expect(screen.getByRole("link", { name: "Siguiente página" })).to.exist;
        expect(screen.getByRole("navigation")).to.have.attribute(
            "aria-label",
            "Paginación"
        );

        // Verify the icon uses the localized title
        const titleElement = screen.getByTitle("Siguiente");
        expect(titleElement).to.exist;
        const icon = titleElement.closest("svg");
        expect(icon).to.exist;
        expect(icon?.tagName).to.equal("svg");
    });
});

import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import EmptyState from "./EmptyState.svelte";

describe("EmptyState", () => {
    it("should render an empty state with the description content", () => {
        render(EmptyState, {
            description: createRawSnippet(() => ({
                render: () => "There are no items to display at this time.",
            })),
        });
        expect(screen.getByText("There are no items to display at this time."))
            .to.exist;
    });

    it("should render an empty state with the description and call-to-action content", () => {
        render(EmptyState, {
            description: createRawSnippet(() => ({
                render: () => "There are no items to display at this time.",
            })),
            callToAction: createRawSnippet(() => ({
                render: () =>
                    '<button class="s-btn s-btn__filled">Click Me!</button>',
            })),
        });
        expect(screen.getByText("There are no items to display at this time."))
            .to.exist;
        expect(screen.getByRole("button")).to.exist;
    });

    it("should render an empty state with the description and title content", () => {
        render(EmptyState, {
            description: createRawSnippet(() => ({
                render: () => "There are no items to display at this time.",
            })),
            title: "No results found",
        });
        expect(screen.getByText("There are no items to display at this time."))
            .to.exist;
        expect(screen.getByText("No results found")).to.exist;
    });
});

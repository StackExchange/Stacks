import { createRawSnippet } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import AwardBling from "./AwardBling.svelte";

const children = createRawSnippet(() => ({
    render: () => "<span>23</span>",
}));

describe("AwardBling", () => {
    it("should render the award bling with the required name as screen reader text", () => {
        render(AwardBling, {
            name: "test award bling",
            type: "gold",
            children,
        });
        expect(screen.getByText("test award bling")).to.exist;
    });

    it("should render the award bling as the specified type", async () => {
        render(AwardBling, {
            name: "test award bling",
            type: "silver",
            children,
        });
        expect(
            screen.getByText("test award bling").parentElement
        ).to.have.class("s-award-bling__silver");
    });

    it("should render the award bling with the specified content", async () => {
        render(AwardBling, {
            name: "test award bling",
            type: "bronze",
            children,
        });
        expect(screen.getByText("23")).to.exist;
    });
});

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
        });
        expect(screen.getByText("test award bling")).to.exist;
    });

    it("should render the award bling as the specified type", async () => {
        render(AwardBling, {
            name: "test silver award bling",
            type: "silver",
        });
        expect(
            screen.getByText("test silver award bling").parentElement
        ).to.have.class("s-award-bling__silver");
    });

    it("should render the award bling as filled", async () => {
        render(AwardBling, {
            name: "test filled award bling",
            filled: true,
        });
        expect(
            screen.getByText("test filled award bling").parentElement
        ).to.have.class("s-award-bling__filled");
    });

    it("should render the award bling as with the correct size", async () => {
        render(AwardBling, {
            name: "test lg award bling",
            size: "lg",
        });
        expect(
            screen.getByText("test lg award bling").parentElement
        ).to.have.class("s-award-bling__lg");
    });
});

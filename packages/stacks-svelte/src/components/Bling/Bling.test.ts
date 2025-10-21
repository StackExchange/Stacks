import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Bling from "./Bling.svelte";

describe("Bling", () => {
    it("should render the bling with the required name as screen reader text", () => {
        render(Bling, {
            name: "test bling",
        });
        expect(screen.getByText("test bling")).to.exist;
    });

    it("should render the bling as the specified type", async () => {
        render(Bling, {
            name: "test silver bling",
            type: "silver",
        });
        expect(
            screen.getByText("test silver bling").parentElement
        ).to.have.class("s-bling__silver");
    });

    it("should render the bling as filled", async () => {
        render(Bling, {
            name: "test filled bling",
            filled: true,
        });
        expect(
            screen.getByText("test filled bling").parentElement
        ).to.have.class("s-bling__filled");
    });

    it("should render the bling as with the correct size", async () => {
        render(Bling, {
            name: "test lg bling",
            size: "lg",
        });
        expect(
            screen.getByText("test lg bling").parentElement
        ).to.have.class("s-bling__lg");
    });
});

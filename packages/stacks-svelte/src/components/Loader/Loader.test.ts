import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Loader from "./Loader.svelte";

describe("Loader", () => {
    it("should render the loader with the default label", () => {
        render(Loader);
        expect(screen.getByText("Loading…")).to.exist;
    });

    it("should render the loader with a custom label", () => {
        render(Loader, { label: "Please wait..." });
        expect(screen.getByText("Please wait...")).to.exist;
    });

    it("should render the loader with the block variant class when variant is provided", () => {
        render(Loader, { variant: "block" });
        const loader = screen.getByText("Loading…").closest(".s-loader--block");
        expect(loader).to.exist;
    });

    it("should render the loader without size modifier class when size is undefined", () => {
        render(Loader, { size: undefined });
        const loader = screen.getByText("Loading…").closest(".s-loader--block");
        expect(loader).to.exist;
        expect(loader).not.to.have.class("s-loader--block__sm");
        expect(loader).not.to.have.class("s-loader--block__lg");
    });

    it("should render the loader with the small size class", () => {
        render(Loader, { size: "sm" });
        const loader = screen.getByText("Loading…").closest(".s-loader--block");
        expect(loader).to.exist;
        expect(loader).to.have.class("s-loader--block__sm");
    });

    it("should render the loader with the large size class", () => {
        render(Loader, { size: "lg" });
        const loader = screen.getByText("Loading…").closest(".s-loader--block");
        expect(loader).to.exist;
        expect(loader).to.have.class("s-loader--block__lg");
    });
});

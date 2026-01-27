import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Loading from "./Loading.svelte";

describe("Loading", () => {
    it("should render the loading with the default label", () => {
        render(Loading);
        expect(screen.getByText("Loading…")).to.exist;
    });

    it("should render the loading with a custom label", () => {
        render(Loading, { label: "Please wait..." });
        expect(screen.getByText("Please wait...")).to.exist;
    });

    it("should render the loading without size modifier class when size is undefined", () => {
        render(Loading);
        const loading = screen.getByText("Loading…").closest(".s-loading");
        expect(loading).to.exist;
    });

    it("should render the loading with the small size class", () => {
        render(Loading, { size: "sm" });
        const loading = screen.getByText("Loading…").closest(".s-loading");
        expect(loading).to.exist;
        expect(loading).to.have.class("s-loading__sm");
    });

    it("should render the loading with the large size class", () => {
        render(Loading, { size: "lg" });
        const loading = screen.getByText("Loading…").closest(".s-loading");
        expect(loading).to.exist;
        expect(loading).to.have.class("s-loading__lg");
    });
});

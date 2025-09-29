import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Spinner from "./Spinner.svelte";

describe("Spinner", () => {
    it("should render the spinner at the specified size", async () => {
        render(Spinner, {
            size: "lg",
        });
        expect(document.getElementsByClassName("s-spinner")[0]).to.have.class(
            "s-spinner__lg"
        );
    });

    it("should render the passed label text", async () => {
        render(Spinner, {
            label: "Saving…",
        });
        expect(screen.getByText("Saving…")).to.exist;
    });

    it("should add the passed classes", async () => {
        render(Spinner, {
            class: "fc-theme-primary-400",
        });
        expect(document.getElementsByClassName("s-spinner")[0]).to.have.class(
            "fc-theme-primary-400"
        );
    });

    it("should adjust the classes on prop updates", async () => {
        const { rerender } = render(Spinner, { class: "fc-theme-primary-400" });
        rerender({ class: "fc-theme-secondary-400" });
        await tick();
        expect(
            document.getElementsByClassName("s-spinner")[0]
        ).not.to.have.class("fc-theme-primary-400");
        expect(document.getElementsByClassName("s-spinner")[0]).to.have.class(
            "fc-theme-secondary-400"
        );
    });
});

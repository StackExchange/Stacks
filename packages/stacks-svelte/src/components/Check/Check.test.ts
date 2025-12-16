import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Check from "./Check.svelte";

type CheckProps = {
    id: string;
    name: string;
    label: string;
    type: "checkbox" | "radio";
};

const baseCheckProps = (suffix: string | number): CheckProps => ({
    id: `test-check-${suffix}`,
    label: `Option ${suffix}`,
    name: "test-name",
    type: "checkbox",
});

describe("Check", () => {
    // Basic rendering with both types
    it("should render as a checkbox input", () => {
        render(Check, baseCheckProps("checkbox"));

        const input = screen.getByRole("checkbox");
        expect(input).to.exist;
        expect(input).to.have.id("test-check-checkbox");
        expect(input).to.have.attribute("name", "test-name");
        expect(input).to.have.attribute("type", "checkbox");
        expect(screen.getByText("Option checkbox")).to.exist;
    });

    it("should render as a radio input", () => {
        render(Check, {
            ...baseCheckProps("radio"),
            type: "radio",
        });

        const input = screen.getByRole("radio");
        expect(input).to.exist;
        expect(input).to.have.id("test-check-radio");
        expect(input).to.have.attribute("name", "test-name");
        expect(input).to.have.attribute("type", "radio");
        expect(screen.getByText("Option radio")).to.exist;
    });
});

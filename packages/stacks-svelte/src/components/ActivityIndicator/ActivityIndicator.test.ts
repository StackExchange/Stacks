import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import ActivityIndicator from "./ActivityIndicator.svelte";

describe("ActivityIndicator", () => {
    it("should render the indicator with the required label as screen reader text", () => {
        render(ActivityIndicator, { label: "test activity" });
        expect(screen.getByText("test activity")).to.exist;
    });

    it("should render the content when provided", () => {
        render(ActivityIndicator, { label: "test activity", content: 3 });
        expect(screen.getByText("3")).to.exist;
    });

    it("should render text content when provided", () => {
        render(ActivityIndicator, {
            label: "test activity",
            content: "new",
        });
        expect(screen.getByText("new")).to.exist;
    });

    it("should apply the success variant class", () => {
        render(ActivityIndicator, {
            label: "test activity",
            variant: "success",
        });
        expect(screen.getByText("test activity").parentElement).to.have.class(
            "s-activity-indicator__success"
        );
    });

    it("should apply the warning variant class", () => {
        render(ActivityIndicator, {
            label: "test activity",
            variant: "warning",
        });
        expect(screen.getByText("test activity").parentElement).to.have.class(
            "s-activity-indicator__warning"
        );
    });

    it("should apply the danger variant class", () => {
        render(ActivityIndicator, {
            label: "test activity",
            variant: "danger",
        });
        expect(screen.getByText("test activity").parentElement).to.have.class(
            "s-activity-indicator__danger"
        );
    });

    it("should apply the small size class", () => {
        render(ActivityIndicator, { label: "test activity", size: "sm" });
        expect(screen.getByText("test activity").parentElement).to.have.class(
            "s-activity-indicator__sm"
        );
    });

    it("should not render content when size is sm", () => {
        render(ActivityIndicator, {
            label: "test activity",
            size: "sm",
            content: 3,
        });
        expect(screen.queryByText("3")).to.not.exist;
        expect(screen.getByText("test activity")).to.exist;
    });

    it("should render the indicator with arbitrary classes", () => {
        render(ActivityIndicator, {
            label: "test activity",
            class: "custom-class",
        });
        expect(screen.getByText("test activity").parentElement).to.have.class(
            "custom-class"
        );
    });
});

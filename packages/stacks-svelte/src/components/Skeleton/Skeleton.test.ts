import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";

import Skeleton from "./Skeleton.svelte";

describe("Skeleton", () => {
    it("should render the skeleton with the label content", () => {
        render(Skeleton, { label: "내용이 로드 중" });
        expect(screen.getByText("내용이 로드 중")).to.exist;
    });

    it("should render the skeleton with the ai variant class", () => {
        render(Skeleton, { variant: "ai" });
        const item = screen.getByText("Loading…").closest(".s-skeleton");
        expect(item).to.have.class("s-skeleton__ai");
    });
});

import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import ExpandingInput from "./ExpandingInput.svelte";

describe("ExpandingInput", () => {
    it("should spread all extra props on the textarea element", () => {
        render(ExpandingInput, { id: "test", placeholder: "Type some words!" });
        expect(screen.getByPlaceholderText("Type some words!")).to.exist;
    });

    it("should forward the textarea events to the consumer", async () => {
        const onInputSpy = sinon.spy();
        render(ExpandingInput, { id: "test", oninput: onInputSpy });
        await userEvent.type(screen.getByRole("textbox"), "test typing");
        expect(onInputSpy).to.have.been.called;
    });

    it("should adjust the classes on prop updates", async () => {
        const { rerender } = render(ExpandingInput, { id: "test" });
        expect(screen.getByRole("textbox")).not.to.have.class("hmn48");
        rerender({ id: "test", variant: "chat" });
        await tick();
        expect(screen.getByRole("textbox")).to.have.class("hmn48");
    });
});

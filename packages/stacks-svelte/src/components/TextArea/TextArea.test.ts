import { createRawSnippet, tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import TextArea from "./TextArea.svelte";

const user = userEvent.setup();

const snippet = createRawSnippet(() => ({
    render: () => "<span>test snippet</span>",
}));

describe("TextArea", () => {
    it("should render the TextArea", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
        });
        expect(screen.getByRole("textbox")).to.have.id("example-input");
        expect(screen.getByText("example label")).to.exist;
    });

    // props
    it("should render the appropriate classes to visually hide the label", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            hideLabel: true,
        });
        expect(screen.getByText("example label")).to.have.class("v-visible-sr");
    });

    it("should render the appropriate size class", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            size: "sm",
        });
        expect(screen.getByRole("textbox")).to.have.class("s-textarea__sm");
    });

    it("should render the appropriate state class and icon", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            state: "error",
        });
        expect(screen.getByText("example label").parentElement).to.have.class(
            "has-error"
        );
        expect(screen.getByRole("textbox")).to.have.attribute(
            "aria-invalid",
            "true"
        );
        expect(screen.getByRole("textbox").nextElementSibling).to.have.class(
            "s-input-icon"
        );
    });

    it('should render the "required" label status', () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            required: true,
        });

        const requiredSymbol = screen.getByText("*");
        expect(requiredSymbol).to.exist;
        expect(requiredSymbol).to.have.class("s-required-symbol");
        expect(requiredSymbol).to.have.attr("title", "Required");
    });

    it("should render the disabled attribute on the input", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            disabled: true,
        });
        expect(screen.getByRole("textbox")).to.have.attribute("disabled");
    });

    it("should render the readonly attribute on the input", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            readonly: true,
        });
        expect(screen.getByRole("textbox")).to.have.attribute("readonly");
    });

    it("should render the TextArea with artbirary classes", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            class: "fc-theme-primary-400",
        });

        expect(screen.getByRole("textbox")).to.have.class(
            "fc-theme-primary-400"
        );
    });

    it("should adjust the classes on prop updates", async () => {
        const { rerender } = render(TextArea, {
            class: "fc-theme-primary-400",
            id: "example-input",
            label: "example label",
        });
        rerender({
            class: "fc-theme-secondary-400",
            id: "example-input",
            label: "example label",
        });
        await tick();
        expect(screen.getByRole("textbox")).not.to.have.class(
            "fc-theme-primary-400"
        );
        expect(screen.getByRole("textbox")).to.have.class(
            "fc-theme-secondary-400"
        );
    });

    // slots
    it("should render the description slot", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            $$slots: {
                description: snippet,
            },
        });

        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-description"
        );
    });

    it("should render the message slot", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            $$slots: {
                message: snippet,
            },
        });

        expect(screen.getByText("test snippet").parentElement).to.have.class(
            "s-input-message"
        );
    });

    // events
    it("should call the on:change callback when the user changes the value", async () => {
        const onChangeSpy = sinon.spy();
        render(TextArea, {
            id: "example-input",
            label: "example label",
            onchange: onChangeSpy,
        });
        await user.type(screen.getByRole("textbox"), "test");
        await user.tab();
        expect(onChangeSpy).to.have.been.calledOnce;
        expect(onChangeSpy).to.have.been.calledWithMatch({
            target: { value: "test" },
        });
    });

    it("should call the on:input callback when the user changes the value", async () => {
        const onInputSpy = sinon.spy();
        render(TextArea, {
            id: "example-input",
            label: "example label",
            oninput: onInputSpy,
        });
        await user.type(screen.getByRole("textbox"), "a");
        await user.tab();
        expect(onInputSpy).to.have.been.calledOnce;
        expect(onInputSpy).to.have.been.calledWithMatch({
            target: { value: "a" },
        });
    });

    it("should call the on:keydown callback when the user changes the value", async () => {
        const onKeydownSpy = sinon.spy();
        render(TextArea, {
            id: "example-input",
            label: "example label",
            onkeydown: onKeydownSpy,
        });
        await user.type(screen.getByRole("textbox"), "123");
        expect(onKeydownSpy).to.have.been.calledThrice;
        expect(onKeydownSpy).to.have.been.calledWithMatch({
            target: { value: "123" },
        });
    });

    it("should call the on:keyup callback when the user changes the value", async () => {
        const onKeyupSpy = sinon.spy();
        render(TextArea, {
            id: "example-input",
            label: "example label",
            onkeyup: onKeyupSpy,
        });
        await user.type(screen.getByRole("textbox"), "123");
        expect(onKeyupSpy).to.have.been.calledThrice;
        expect(onKeyupSpy).to.have.been.calledWithMatch({
            target: { value: "123" },
        });
    });

    it("should call the on:focus callback when the user changes the value", async () => {
        const onFocusSpy = sinon.spy();
        render(TextArea, {
            id: "example-input",
            label: "example label",
            onfocus: onFocusSpy,
        });
        await user.click(screen.getByRole("textbox"));

        expect(onFocusSpy).to.have.been.calledOnce;
    });

    it("should call the on:blur callback when the user changes the value", async () => {
        const onBlurSpy = sinon.spy();
        render(TextArea, {
            id: "example-input",
            label: "example label",
            onblur: onBlurSpy,
        });
        await user.click(screen.getByRole("textbox"));
        await user.tab();
        expect(onBlurSpy).to.have.been.calledOnce;
    });

    it("should call the on:paste callback when the user changes the value", async () => {
        const onPasteSpy = sinon.spy();
        render(TextArea, {
            id: "example-input",
            label: "example label",
            onpaste: onPasteSpy,
        });
        await user.click(screen.getByRole("textbox"));
        await user.paste("test");
        expect(onPasteSpy).to.have.been.calledOnce;
        expect(onPasteSpy).to.have.been.calledWithMatch({
            target: { value: "test" },
        });
    });

    // i18n
    it("should localize the required label status text when dedicated prop is specified", () => {
        render(TextArea, {
            id: "example-input",
            label: "example label",
            required: true,
            i18nRequiredText: "Obbligatorio",
        });

        const requiredSymbol = screen.getByText("*");
        expect(requiredSymbol).to.have.attr("title", "Obbligatorio");
    });
});

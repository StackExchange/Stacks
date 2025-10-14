import { expect } from "@open-wc/testing";
import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { createRawSnippet, mount, unmount } from "svelte";
import sinon from "sinon";

import Select from "./Select.svelte";
import SelectItem from "./SelectItem.svelte";

const user = userEvent.setup();

const selectItemsSnippet = createRawSnippet(() => ({
    render: () => "<span></span>",
    setup: (target) => {
        const selectItem1 = mount(SelectItem, {
            target,
            props: {
                value: "1",
                text: "Option 1",
            },
        });
        const selectItem2 = mount(SelectItem, {
            target,
            props: {
                value: "2",
                text: "Option 2",
            },
        });
        return () => {
            unmount(selectItem1);
            unmount(selectItem2);
        };
    },
}));

describe("Select", () => {
    it("should render the Select", () => {
        render(Select, {
            id: "example-select",
            label: "example label",
            children: selectItemsSnippet,
        });
        expect(screen.getByRole("combobox")).to.have.id("example-select");
        expect(screen.getByText("example label")).to.exist;
    });

    // props
    it("should render the appropriate classes to visually hide the label", () => {
        render(Select, {
            id: "example-select",
            label: "example label",
            hideLabel: true,
        });
        expect(screen.getByText("example label")).to.have.class("v-visible-sr");
    });

    it("should select the option matching the value passed in the selected prop", () => {
        render(Select, {
            id: "example-select",
            label: "example label",
            selected: "2",
            children: selectItemsSnippet,
        });
        expect(screen.getByRole("combobox")).to.have.value("2");
    });

    it("should sync internal state when selected prop changes externally", async () => {
        const { rerender } = render(Select, {
            id: "example-select",
            label: "example label",
            selected: "1",
            children: selectItemsSnippet,
        });

        const selectElement = screen.getByRole("combobox") as HTMLSelectElement;
        expect(selectElement).to.have.value("1");

        rerender({ selected: "2" });
        await waitFor(() => {
            expect(selectElement).to.have.value("2");
        });
    });

    it("should render the appropriate size class", () => {
        render(Select, {
            id: "example-select",
            label: "example label",
            size: "sm",
        });
        const label = screen.getByText("example label");
        expect(label).to.have.class("s-label__sm");
        const selectWrapper = screen.getByRole("combobox").parentElement;
        expect(selectWrapper).to.have.class("s-select__sm");
    });

    it("should render the appropriate state class and icon", () => {
        render(Select, {
            id: "example-select",
            label: "example label",
            state: "error",
        });
        expect(screen.getByText("example label").parentElement).to.have.class(
            "has-error"
        );
        expect(screen.getByRole("combobox")).to.have.attribute(
            "aria-invalid",
            "true"
        );
        expect(screen.getByRole("combobox").nextElementSibling).to.have.class(
            "s-input-icon"
        );
    });

    it("should render the disabled attribute on the select", () => {
        render(Select, {
            id: "example-select",
            label: "example label",
            disabled: true,
        });
        expect(screen.getByRole("combobox")).to.have.attribute("disabled");
    });

    // snippets
    it("should render the description snippet when the label is not hidden and placed on top", () => {
        const descriptionSnippet = createRawSnippet(() => ({
            render: () => "<span>example description</span>",
        }));

        render(Select, {
            id: "example-select",
            label: "example label",
            description: descriptionSnippet,
        });

        expect(
            screen.getByText("example description").parentElement
        ).to.have.class("s-description");
    });

    it("should not render the description snippet when the label is hidden", () => {
        const descriptionSnippet = createRawSnippet(() => ({
            render: () => "<span>example description</span>",
        }));

        render(Select, {
            id: "example-select",
            label: "example label",
            hideLabel: true,
            description: descriptionSnippet,
        });

        expect(screen.queryByText("example description")).not.to.exist;
    });

    it("should not render the description snippet when the label placement is left", () => {
        const descriptionSnippet = createRawSnippet(() => ({
            render: () => "<span>example description</span>",
        }));

        render(Select, {
            id: "example-select",
            label: "example label",
            labelPlacement: "left",
            description: descriptionSnippet,
        });

        expect(screen.queryByText("example description")).not.to.exist;
    });

    it("should render the message snippet", () => {
        const messageSnippet = createRawSnippet(() => ({
            render: () => "<span>example message</span>",
        }));

        render(Select, {
            id: "example-select",
            label: "example label",
            message: messageSnippet,
        });

        expect(screen.getByText("example message").parentElement).to.have.class(
            "s-input-message"
        );
    });

    // events
    it("should call the onchange callback when the user changes the value", async () => {
        const onChangeSpy = sinon.spy();
        render(Select, {
            id: "example-select",
            label: "example label",
            children: selectItemsSnippet,
            onchange: onChangeSpy,
        });
        const selectElement = screen.getByRole("combobox");
        await user.selectOptions(selectElement, "2");
        expect(onChangeSpy).to.have.been.calledOnce;
        expect(onChangeSpy).to.have.been.calledWithMatch({
            target: { value: "2" },
        });
    });

    it("should call the onfocus callback when the user focus on the select", async () => {
        const onFocusSpy = sinon.spy();
        render(Select, {
            id: "example-select",
            label: "example label",
            children: selectItemsSnippet,
            onfocus: onFocusSpy,
        });
        await user.click(screen.getByRole("combobox"));
        expect(onFocusSpy).to.have.been.calledOnce;
    });

    it("should call the onblur callback when the user focus away from the select", async () => {
        const onBlurSpy = sinon.spy();
        render(Select, {
            id: "example-select",
            label: "example label",
            children: selectItemsSnippet,
            onblur: onBlurSpy,
        });
        await user.click(screen.getByRole("combobox"));
        await user.tab();
        expect(onBlurSpy).to.have.been.calledOnce;
    });

    it("should throw an error if a SelectItem is rendered outside the Select component", () => {
        expect(() =>
            render(SelectItem, {
                value: "1",
                text: "Option 1",
            })
        ).to.throw("<SelectItem /> is missing a parent <Select /> component.");
    });
});

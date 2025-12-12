import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet, mount, unmount } from "svelte";

import CheckGroup from "./CheckGroup.svelte";
import Check from "../Check/Check.svelte";

type CheckProps = {
    id: string;
    name: string;
    label: string;
    type: "checkbox" | "radio";
};

const createChecksSnippet = (controls: Array<CheckProps>) =>
    createRawSnippet(() => ({
        render: () => "<span></span>",
        setup: (target) => {
            const instances = controls.map((props) => {
                return mount(Check, {
                    target,
                    props,
                });
            });
            return () => {
                instances.forEach((instance) => unmount(instance));
            };
        },
    }));

const baseCheckProps = (suffix: string | number): CheckProps => ({
    id: `test-checkbox-${suffix}`,
    label: `Option ${suffix}`,
    name: "test-name",
    type: "checkbox",
});

describe("CheckGroup", () => {
    it("should render the CheckGroup", () => {
        const children = createChecksSnippet([baseCheckProps("base")]);

        render(CheckGroup, {
            label: "Test Legend",
            children,
        });

        const legend = screen.getByText("Test Legend");
        const fieldset = legend.closest("fieldset");

        expect(screen.getByText("Test Legend")).to.exist;
        expect(screen.getByText("Option base")).to.exist;
        expect(screen.getByRole("checkbox")).to.exist;

        // Ensure it renders as a fieldset with the correct class
        expect(fieldset).to.exist;
        expect(fieldset).to.have.class("s-check-group");

        //Ensure legend is present
        expect(legend).to.exist;
        expect(legend.tagName.toLowerCase()).to.equal("legend");
        expect(legend).to.have.class("s-label");
    });

    it("should render multiple check controls", () => {
        const children = createChecksSnippet(
            [1, 2, 3].map((num) => baseCheckProps(num))
        );

        render(CheckGroup, {
            label: "Test Legend",
            children,
        });

        expect(screen.getAllByRole("checkbox")).to.have.length(3);
        expect(screen.getByText("Option 1")).to.exist;
        expect(screen.getByText("Option 2")).to.exist;
        expect(screen.getByText("Option 3")).to.exist;
    });

    it("should render disabled fieldset when disabled is true", () => {
        const children = createChecksSnippet([baseCheckProps("disabled")]);
        render(CheckGroup, {
            label: "Test Legend",
            disabled: true,
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.attribute("disabled");
    });

    it("should apply horizontal class when horizontal is true", () => {
        const children = createChecksSnippet([baseCheckProps("horizontal")]);

        render(CheckGroup, {
            label: "Test Legend",
            horizontal: true,
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("s-check-group__horizontal");
    });

    it("should apply the appropriate state class", () => {
        const children = createChecksSnippet([baseCheckProps("state")]);

        render(CheckGroup, {
            label: "Test Legend",
            state: "error",
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("has-error");
    });

    it("should apply arbitrary classes to fieldset", () => {
        const children = createChecksSnippet([baseCheckProps("classes")]);

        render(CheckGroup, {
            label: "Test Legend",
            class: "custom-class",
            children,
        });

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).to.have.class("custom-class");
        expect(fieldset).to.have.class("s-check-group");
    });

    it("should adjust classes on prop updates", async () => {
        const children = createChecksSnippet([baseCheckProps("update")]);

        const { rerender } = render(CheckGroup, {
            label: "Test Legend",
            class: "custom-class-1",
            children,
        });

        rerender({
            label: "Test Legend",
            class: "custom-class-2",
            children,
        });

        await tick();

        const fieldset = screen.getByText("Test Legend").closest("fieldset");
        expect(fieldset).not.to.have.class("custom-class-1");
        expect(fieldset).to.have.class("custom-class-2");
    });
});

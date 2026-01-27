import { createRawSnippet, mount, unmount, tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import Button from "./Button.svelte";
import Loading from "../Loading/Loading.svelte";

const children = createRawSnippet(() => ({
    render: () => "<span>test btn</span>",
}));

describe("Button", () => {
    it("should render the button", () => {
        render(Button, { children });
        expect(screen.getByRole("button")).to.have.text("test btn");
    });

    it("should render as an anchor when href is provided", () => {
        render(Button, { href: "#", children });
        expect(screen.getByRole("link")).to.have.text("test btn");
    });

    it("should render the badge within the button", () => {
        render(Button, {
            children,
            badge: createRawSnippet(() => ({
                render: () => "<span>123</span>",
            })),
        });
        render(Button, {
            children,
            badge: createRawSnippet(() => ({
                render: () => "<span>456</span>",
            })),
        });

        // Default button
        expect(screen.getByText("123")).to.exist;
        // Button rendered as anchor
        expect(screen.getByText("456")).to.exist;
    });

    it("should allocate the correct spacing between button text and badge", () => {
        render(Button, {
            children: createRawSnippet(() => ({
                render: () => "<span>test</span>",
            })),
            badge: createRawSnippet(() => ({
                render: () => "<span>198</span>",
            })),
        });

        expect(screen.getByRole("button")).to.have.text("test 198");
    });

    // props
    it("should render the button with artbirary classes", () => {
        render(Button, {
            class: "fc-theme-primary-400",
            children,
        });
        expect(screen.getByRole("button")).to.have.class(
            "fc-theme-primary-400"
        );
    });

    it("should render the button with type of 'submit'", () => {
        render(Button, {
            type: "submit",
            children,
        });
        expect(screen.getByRole("button")).to.have.attribute("type", "submit");
    });

    it("should render the appropriate brand class", () => {
        render(Button, {
            branding: "github",
            children,
        });
        expect(screen.getByRole("button")).to.have.class("s-btn__github");
    });

    it("should render the appropriate size class", () => {
        render(Button, {
            size: "xs",
            children,
        });
        expect(screen.getByRole("button")).to.have.class("s-btn__xs");
    });

    it("should render the appropriate variant class", () => {
        render(Button, {
            variant: "tonal",
            children,
        });
        expect(screen.getByRole("button")).to.have.class("s-btn__tonal");
    });

    it("should render the appropriate weight class", () => {
        render(Button, {
            weight: "clear",
            children,
        });
        expect(screen.getByRole("button")).to.have.class("s-btn__clear");
    });

    it("should render including the dropdown class", () => {
        render(Button, {
            dropdown: true,
            children,
        });
        expect(screen.getByRole("button")).to.have.class("s-btn__dropdown");
    });

    it("should render including the icon class", () => {
        render(Button, {
            icon: true,
            children,
        });
        expect(screen.getByRole("button")).to.have.class("s-btn__icon");
    });

    it("should render including the link class", () => {
        render(Button, {
            link: true,
            children,
        });
        expect(screen.getByRole("button")).to.have.class("s-btn__link");
    });

    it("should render the loading component when loading prop is provided", () => {
        const loadingSnippet = createRawSnippet(() => ({
            render: () => "<span></span>",
            setup: (target) => {
                const instance = mount(Loading, {
                    target,
                    props: {
                        size: "sm",
                    },
                });
                return () => {
                    unmount(instance);
                };
            },
        }));

        render(Button, {
            loading: loadingSnippet,
            children,
        });
        expect(screen.getByText("Loading…")).to.exist;
        expect(screen.getByText("Loading…").closest(".s-loading")).to
            .exist;
    });

    it("should render including the selected class", () => {
        render(Button, {
            selected: true,
            children,
        });
        expect(screen.getByRole("button")).to.have.class("is-selected");
    });

    it("should render including the unset class", () => {
        render(Button, {
            unset: true,
            children,
        });
        expect(screen.getByRole("button")).to.have.class("s-btn__unset");
    });

    it("should render with the disabled attribute", () => {
        render(Button, {
            disabled: true,
            children,
        });
        expect(screen.getByRole("button")).to.have.attribute("disabled");
    });

    it("should render with the aria-disabled attribute", () => {
        render(Button, {
            href: "#",
            disabled: true,
            children,
        });
        expect(screen.getByRole("link")).to.have.attribute(
            "aria-disabled",
            "true"
        );
    });

    it("should adjust the classes on prop updates", async () => {
        const { rerender } = render(Button, {
            class: "fc-theme-primary-400",
            children,
        });
        rerender({ class: "fc-theme-secondary-400" });
        await tick();
        expect(screen.getByRole("button")).not.to.have.class(
            "fc-theme-primary-400"
        );
        expect(screen.getByRole("button")).to.have.class(
            "fc-theme-secondary-400"
        );
    });

    it("should call the onclick call back when the user click on it", async () => {
        const onClickSpy = sinon.spy();
        render(Button, { onclick: onClickSpy, children });
        await userEvent.click(screen.getByRole("button"));
        expect(onClickSpy).to.have.been.calledOnce;
    });
});

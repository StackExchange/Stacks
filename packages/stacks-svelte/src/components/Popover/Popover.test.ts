import { mount, unmount, tick, createRawSnippet } from "svelte";
import type { Strategy } from "@floating-ui/core";
import sinon from "sinon";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { setViewport } from "@web/test-runner-commands";
import { createSvelteComponentsSnippet } from "../../../test-utils";

import {
    Popover,
    PopoverContent,
    PopoverReference,
    PopoverCloseButton,
} from "..";

const defaultProps = {
    id: "test",
};

const defaultChildren = {
    reference: {
        component: PopoverReference,
        props: {
            children: createRawSnippet(() => ({
                render: () => "<button>Trigger</button>",
            })),
        },
    },
    content: {
        component: PopoverContent,
        props: {
            children: createRawSnippet(() => ({
                render: () => "<span>Popover Content</span>",
            })),
        },
    },
    closeButton: {
        component: PopoverCloseButton,
        props: {
            label: "Close",
        },
    },
};

describe("Popover", () => {
    it("should show/hide the popover content when the user click on the reference", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    defaultChildren.content,
                ]),
            },
        });

        expect(screen.queryByRole("dialog")).not.to.exist;

        const button = screen.getByRole("button");
        await userEvent.click(button);
        expect(screen.getByRole("dialog")).to.exist;

        await userEvent.click(button);
        expect(screen.queryByRole("dialog")).not.to.exist;
    });

    it("should work as expected also with external references specified via element id", async () => {
        const externalButtonSnippet = createRawSnippet(() => ({
            render: () =>
                "<div><button id='external-reference'>External Reference</button></div>",
            setup: (target) => {
                const popover = mount(Popover, {
                    target,
                    props: {
                        ...defaultProps,
                        children: createSvelteComponentsSnippet([
                            {
                                component: PopoverReference,
                                props: {
                                    elementId: "external-reference",
                                },
                            },
                            defaultChildren.content,
                        ]),
                    },
                });
                return () => {
                    unmount(popover);
                };
            },
        }));
        render(externalButtonSnippet);

        const externalReference = screen.getByRole("button", {
            name: "External Reference",
        });
        expect(screen.queryByRole("dialog")).not.to.exist;

        await userEvent.click(externalReference);
        expect(screen.getByRole("dialog")).to.exist;

        await userEvent.click(externalReference);
        expect(screen.queryByRole("dialog")).not.to.exist;
    });

    it("should render popover content on mount if autoshow is set", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    defaultChildren.content,
                ]),
            },
        });

        expect(screen.getByRole("dialog")).to.exist;
    });

    it("should allow to change the aria role of the popover content when appropriate", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    {
                        component: PopoverContent,
                        props: {
                            role: "menu",
                            children: createRawSnippet(() => ({
                                render: () => "<span>Popover Content</span>",
                            })),
                        },
                    },
                ]),
            },
        });

        expect(screen.getByRole("menu")).to.exist;
    });

    it("add classes to the popover content when the class prop is provided", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    {
                        component: PopoverContent,
                        props: {
                            class: "custom-class",
                            children: createRawSnippet(() => ({
                                render: () => "<span>Popover Content</span>",
                            })),
                        },
                    },
                ]),
            },
        });

        expect(screen.getByRole("dialog")).to.have.class("custom-class");
    });

    it("add classes to the popover close button component when the class prop is provided", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    {
                        component: PopoverContent,
                        props: {
                            children: createSvelteComponentsSnippet([
                                {
                                    component: PopoverCloseButton,
                                    props: {
                                        label: "Close",
                                        class: "custom-class",
                                    },
                                },
                            ]),
                        },
                    },
                ]),
            },
        });

        expect(screen.getByRole("button", { name: "Close" })).to.have.class(
            "custom-class"
        );
    });

    it("override classes to the popover content inner div when the innerContentClassOverride prop is provided", async () => {
        const { container } = render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    {
                        component: PopoverContent,
                        props: {
                            innerContentClassOverride: "custom-class",
                            children: createRawSnippet(() => ({
                                render: () => "<span>Popover Content</span>",
                            })),
                        },
                    },
                ]),
            },
        });

        const innerContentElement = container.querySelector(
            ".s-popover--content"
        );

        expect(innerContentElement).to.exist;
        expect(innerContentElement).to.have.class("custom-class");
        expect(innerContentElement).not.to.have.class("p12");
        expect(innerContentElement).not.to.have.class("mn12");
    });

    it("popover content inner div should contain default classes when innerContentClassOverride prop is not provided", async () => {
        const { container } = render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    defaultChildren.content,
                ]),
            },
        });

        const innerContentElement = container.querySelector(
            ".s-popover--content"
        );

        expect(innerContentElement).to.exist;
        expect(innerContentElement).to.have.class("p12");
        expect(innerContentElement).to.have.class("mn12");
    });

    it("should hide the popover content when the user click outside the popover", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    defaultChildren.content,
                ]),
            },
        });

        expect(screen.getByRole("dialog")).to.exist;

        await userEvent.click(document.body);
        expect(screen.queryByRole("dialog")).not.to.exist;
    });

    it("should hide the popover content when the user click on the close button", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    {
                        component: PopoverContent,
                        props: {
                            children: createSvelteComponentsSnippet([
                                defaultChildren.closeButton,
                            ]),
                        },
                    },
                ]),
            },
        });

        await userEvent.click(screen.getByRole("button", { name: "Trigger" }));
        expect(screen.getByRole("dialog")).to.exist;

        await userEvent.click(screen.getByRole("button", { name: "Close" }));
        expect(screen.queryByRole("dialog")).not.to.exist;
        expect(screen.queryByRole("button", { name: "Trigger" })).to.have.focus;
    });

    it("should hide the popover content when the user press the escape key", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    defaultChildren.content,
                ]),
            },
        });

        expect(screen.getByRole("dialog")).to.exist;

        await userEvent.keyboard("{Escape}");
        expect(screen.queryByRole("dialog")).not.to.exist;
    });

    it("should control popover visibility externally when the visible prop is provided", async () => {
        const { rerender } = render(Popover, {
            props: {
                ...defaultProps,
                visible: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    defaultChildren.content,
                ]),
            },
        });

        expect(screen.getByRole("dialog")).to.exist;

        rerender({ visible: false });
        await tick();
        expect(screen.queryByRole("dialog")).not.to.exist;
    });

    it("should dispatch close event when popover is controlled and user clicks on the close button", async () => {
        const onCloseButtonClick = sinon.spy();
        render(Popover, {
            props: {
                ...defaultProps,
                visible: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    {
                        component: PopoverContent,
                        props: {
                            children: createSvelteComponentsSnippet([
                                {
                                    component: PopoverCloseButton,
                                    props: {
                                        label: "Close",
                                        onclick: onCloseButtonClick,
                                    },
                                },
                            ]),
                        },
                    },
                ]),
            },
        });

        await userEvent.click(screen.getByRole("button", { name: "Close" }));
        expect(onCloseButtonClick).to.have.been.calledOnce;
    });

    it("should throw an error if subcomponents like popover content are rendered outside the popover component", () => {
        expect(() => render(PopoverContent)).to.throw(
            "<PopoverContent /> is missing a parent <Popover /> component."
        );

        expect(() => render(PopoverReference)).to.throw(
            "<PopoverReference /> is missing a parent <Popover /> component."
        );

        expect(() => render(PopoverCloseButton)).to.throw(
            "<PopoverCloseButton /> is missing a parent <Popover /> component."
        );
    });

    it("should correctly fire open and close events when the popover opens or closes respectively", async () => {
        const onOpenSpy = sinon.spy();
        const onCloseSpy = sinon.spy();

        render(Popover, {
            props: {
                ...defaultProps,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    defaultChildren.content,
                ]),
                onopen: onOpenSpy,
                onclose: onCloseSpy,
            },
        });

        await userEvent.click(screen.getByRole("button"));
        expect(onOpenSpy).to.have.been.calledOnce;

        await userEvent.click(document.body);
        expect(onCloseSpy).to.have.been.calledOnce;
    });

    it("should not close the popover when the dismissable prop is set to false", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                dismissible: false,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    {
                        component: PopoverContent,
                        props: {
                            children: createSvelteComponentsSnippet([
                                defaultChildren.closeButton,
                            ]),
                        },
                    },
                ]),
            },
        });

        expect(screen.getByRole("dialog")).to.exist;

        await userEvent.click(document.body);
        expect(screen.getByRole("dialog")).to.exist;

        await userEvent.click(screen.getByRole("button", { name: "Trigger" }));
        expect(screen.getByRole("dialog")).to.exist;

        await userEvent.click(screen.getByRole("button", { name: "Close" }));
        expect(screen.queryByRole("dialog")).not.to.exist;
    });

    it("should trap focus within the popover content when the trapFocus prop is set to true", async () => {
        render(Popover, {
            props: {
                ...defaultProps,
                trapFocus: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    {
                        component: PopoverContent,
                        props: {
                            children: createRawSnippet(() => ({
                                render: () =>
                                    '<span><input type="text" /></span>',
                                setup: (target) => {
                                    const closeButton = mount(
                                        PopoverCloseButton,
                                        {
                                            target,
                                            props: {
                                                label: "Close",
                                            },
                                        }
                                    );
                                    return () => {
                                        unmount(closeButton);
                                    };
                                },
                            })),
                        },
                    },
                ]),
            },
        });

        // To keep the test suite stable We need a delay before asserting on the focus
        // (10ms is an euristic value that seems to be enough for the focus to be set by the browser)
        const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));

        await userEvent.click(screen.getByRole("button", { name: "Trigger" }));
        await delay(10);
        expect(screen.getByRole("textbox")).to.have.focus;

        await userEvent.tab();
        await delay(10);
        expect(screen.getByRole("button", { name: "Close" })).to.have.focus;

        await userEvent.tab();
        await delay(10);
        expect(screen.getByRole("textbox")).to.have.focus;

        await userEvent.tab({ shift: true });
        await delay(10);
        expect(screen.getByRole("button", { name: "Close" })).to.have.focus;

        await userEvent.click(screen.getByRole("button", { name: "Close" }));
        await delay(10);
        expect(screen.getByRole("button", { name: "Trigger" })).to.have.focus;
    });

    it("should render the popover content in the correct placement", async () => {
        // TODO: placement should be tested with visual regression tests
        // need to provide a large enough viewport size to prevent the flip
        // middleware from changing the placement
        await setViewport({ width: 640, height: 640 });

        const viewportSnippet = createRawSnippet(() => ({
            render: () => "<div class='w100 h100 d-flex flex__center'></div>",
            setup: (target) => {
                const popover = mount(Popover, {
                    target,
                    props: {
                        ...defaultProps,
                        placement: "top",
                        children: createSvelteComponentsSnippet([
                            defaultChildren.reference,
                            defaultChildren.content,
                        ]),
                    },
                });
                return () => {
                    unmount(popover);
                };
            },
        }));

        render(viewportSnippet);

        await userEvent.click(screen.getByRole("button"));

        expect(screen.getByRole("dialog")).to.have.attribute(
            "data-popper-placement",
            "top"
        );
    });

    it("should not throw any error if the component is unmounted while the popover is open", async () => {
        const { unmount } = render(Popover, {
            props: {
                ...defaultProps,
                autoshow: true,
                children: createSvelteComponentsSnippet([
                    defaultChildren.reference,
                    defaultChildren.content,
                ]),
            },
        });

        expect(screen.getByRole("dialog")).to.exist;

        unmount();

        expect(screen.queryByRole("dialog")).not.to.exist;
    });

    const strategies = ["absolute", "fixed"] as Strategy[];

    strategies.forEach((strategy) => {
        it("should render the popover content with the correct position strategy", async () => {
            render(Popover, {
                props: {
                    ...defaultProps,
                    strategy,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        defaultChildren.content,
                    ]),
                },
            });

            await userEvent.click(screen.getByRole("button"));

            const style = expect(screen.getByRole("dialog")).to.have.attribute(
                "style"
            );
            expect(style.to.contain(`position: ${strategy};`));
        });
    });

    describe("when not in tooltip mode", () => {
        it("should throw an error if the reference element provided is not of role button", () => {
            expect(() =>
                render(Popover, {
                    props: {
                        ...defaultProps,
                        children: createSvelteComponentsSnippet([
                            {
                                component: PopoverReference,
                                props: {
                                    children: createRawSnippet(() => ({
                                        render: () =>
                                            "<span>non-button-role element</span>",
                                    })),
                                },
                            },
                            defaultChildren.content,
                        ]),
                    },
                })
            ).to.throw(
                "Reference element must have a role of 'button' for uncontrolled popovers."
            );
        });

        it("should automatically apply the correct aria attributes to the elements", async () => {
            render(Popover, {
                props: {
                    ...defaultProps,
                    autoshow: true,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        defaultChildren.content,
                    ]),
                },
            });

            const reference = screen.getByRole("button");

            expect(reference).to.have.attribute(
                "aria-controls",
                "test-popover"
            );
            expect(reference).to.have.attribute("aria-expanded", "true");

            await userEvent.click(reference);
            expect(reference).to.have.attribute("aria-expanded", "false");
        });

        it("should not show/hide the tooltip content when the user hovers on the reference", async () => {
            render(Popover, {
                props: {
                    ...defaultProps,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        defaultChildren.content,
                    ]),
                },
            });

            expect(screen.queryByRole("dialog")).not.to.exist;

            const button = screen.getByRole("button");
            await userEvent.hover(button);
            expect(screen.queryByRole("tooltip")).not.to.exist;

            await userEvent.unhover(button);
            expect(screen.queryByRole("tooltip")).not.to.exist;
        });
    });

    describe("when in tooltip mode", () => {
        it("should add an extra s-popover__tooltip class to the popover content", async () => {
            render(Popover, {
                props: {
                    ...defaultProps,
                    autoshow: true,
                    tooltip: true,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        defaultChildren.content,
                    ]),
                },
            });

            expect(screen.getByRole("tooltip")).to.have.class(
                "s-popover__tooltip"
            );
        });

        it("should not throw an error if the reference element provided is not of role button", async () => {
            let error = "";
            try {
                render(Popover, {
                    props: {
                        ...defaultProps,
                        tooltip: true,
                        children: createSvelteComponentsSnippet([
                            {
                                component: PopoverReference,
                                props: {
                                    children: createRawSnippet(() => ({
                                        render: () =>
                                            "<span>non-button-role element</span>",
                                    })),
                                },
                            },
                            defaultChildren.content,
                        ]),
                    },
                });
            } catch (e) {
                if (e instanceof Error) {
                    error = e.message;
                }
            }
            expect(error).to.be.empty;
        });

        it("should automatically apply the correct aria attributes to the elements", async () => {
            const clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            render(Popover, {
                props: {
                    ...defaultProps,
                    tooltip: true,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        defaultChildren.content,
                    ]),
                },
            });

            const reference = screen.getByRole("button");
            await userEvent.hover(reference);
            await clock.runAllAsync();
            await tick();

            expect(reference).not.to.have.attribute("aria-controls");
            expect(reference).not.to.have.attribute("aria-expanded");
            expect(reference).to.have.attribute(
                "aria-describedby",
                "test-popover"
            );

            await userEvent.unhover(reference);
            await clock.runAllAsync();
            await tick();
            clock.restore();
        });

        it("should show/hide the tooltip content when the user hovers on the reference", async () => {
            const clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            render(Popover, {
                props: {
                    ...defaultProps,
                    tooltip: true,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        defaultChildren.content,
                    ]),
                },
            });

            expect(screen.queryByRole("dialog")).not.to.exist;

            const button = screen.getByRole("button");
            await userEvent.hover(button);
            await clock.runAllAsync();
            await tick();
            expect(screen.getByRole("tooltip")).to.exist;

            await userEvent.unhover(button);
            await clock.runAllAsync();
            await tick();
            expect(screen.queryByRole("tooltip")).not.to.exist;
            clock.restore();
        });

        it("should show/hide the tooltip when the reference get focused via keyboard navigation", async () => {
            const clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            render(Popover, {
                props: {
                    ...defaultProps,
                    tooltip: true,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        defaultChildren.content,
                    ]),
                },
            });

            await userEvent.tab();
            await clock.runAllAsync();
            await tick();
            expect(screen.getByRole("button")).to.have.focus;
            expect(screen.getByRole("tooltip")).to.exist;
            await userEvent.tab();
            await clock.runAllAsync();
            await tick();
            expect(screen.queryByRole("tooltip")).not.to.exist;
            clock.restore();
        });

        it("should keep the tooltip content visible when the user hovers from the reference to the tooltip content", async () => {
            const clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            render(Popover, {
                props: {
                    ...defaultProps,
                    tooltip: true,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        defaultChildren.content,
                    ]),
                },
            });

            const button = screen.getByRole("button");
            await userEvent.hover(button);
            await clock.runAllAsync();
            await tick();
            expect(screen.getByRole("tooltip")).to.exist;

            // simulate the mouse transition from the reference to the tooltip content
            await userEvent.unhover(button);
            // user has 100ms max to transition from the reference to the tooltip content
            // here we simulate it takes them 50ms
            await clock.tickAsync(50);
            await tick();

            await userEvent.hover(screen.getByRole("tooltip"));
            await clock.runAllAsync();
            await tick();
            expect(screen.getByRole("tooltip")).to.exist;
            clock.restore();
        });

        it("keep the tooltip content visible when the user tab from the reference to a focusable element within the content", async () => {
            const clock = sinon.useFakeTimers({
                shouldAdvanceTime: true,
                shouldClearNativeTimers: true,
            });
            render(Popover, {
                props: {
                    ...defaultProps,
                    tooltip: true,
                    children: createSvelteComponentsSnippet([
                        defaultChildren.reference,
                        {
                            component: PopoverContent,
                            props: {
                                children: createRawSnippet(() => ({
                                    render: () =>
                                        '<span><input type="text" /></span>',
                                })),
                            },
                        },
                    ]),
                },
            });

            await userEvent.tab();
            await clock.runAllAsync();
            await tick();
            expect(screen.getByRole("button")).to.have.focus;
            expect(screen.getByRole("tooltip")).to.exist;

            await userEvent.tab();
            await clock.runAllAsync();
            await tick();
            expect(screen.getByRole("textbox")).to.have.focus;
            expect(screen.getByRole("tooltip")).to.exist;

            await userEvent.tab();
            await clock.runAllAsync();
            await tick();
            expect(screen.queryByRole("tooltip")).not.to.exist;
            clock.restore();
        });
    });
});

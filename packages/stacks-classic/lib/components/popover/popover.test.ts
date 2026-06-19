import { html, fixture, expect } from "@open-wc/testing";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../../index";

const user = userEvent.setup();

const createPopover = ({
    content = html`<a href="#" data-testid="popover-link">View more</a>`,
    hideOnOutsideClick = "always",
    renderOutsideButton = true,
    role = "menu",
}: {
    content?: ReturnType<typeof html>;
    hideOnOutsideClick?: string;
    renderOutsideButton?: boolean;
    role?: string;
} = {}) => html`
    <button
        class="s-btn"
        aria-controls="popover-example"
        data-controller="s-popover"
        data-action="s-popover#toggle"
        data-s-popover-hide-on-outside-click="${hideOnOutsideClick}"
        data-testid="popover-trigger"
    >
        Toggle popover
    </button>
    <div
        class="s-popover"
        id="popover-example"
        role="${role}"
        data-testid="popover"
    >
        <div class="s-popover--content">${content}</div>
    </div>
    ${renderOutsideButton
        ? html`<button data-testid="outside-button">Outside button</button>`
        : null}
`;

describe("popover", () => {
    it('should set aria-expanded="true" when shown and "false" when hidden', async () => {
        await fixture(createPopover({ renderOutsideButton: false }));

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");

        await waitFor(() =>
            expect(trigger).to.have.attribute("aria-expanded", "false")
        );

        await user.click(trigger);

        await waitFor(() => expect(popover).to.have.class("is-visible"));
        expect(trigger).to.have.attribute("aria-expanded", "true");

        await user.click(trigger);

        await waitFor(() => expect(popover).not.to.have.class("is-visible"));
        expect(trigger).to.have.attribute("aria-expanded", "false");
    });

    it("should stay open when focus moves from the trigger into the popover", async () => {
        await fixture(createPopover());

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");
        const link = screen.getByTestId("popover-link");

        await user.click(trigger);
        await waitFor(() => expect(popover).to.have.class("is-visible"));

        await user.tab();

        expect(link).to.have.focus;
        expect(popover).to.have.class("is-visible");
        expect(trigger).to.have.attribute("aria-expanded", "true");
    });

    it("should stay open when focus moves from the popover back to the trigger", async () => {
        await fixture(createPopover());

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");
        const link = screen.getByTestId("popover-link");

        await user.click(trigger);
        await waitFor(() => expect(popover).to.have.class("is-visible"));

        await user.tab();
        expect(link).to.have.focus;

        await user.tab({ shift: true });

        expect(trigger).to.have.focus;
        expect(popover).to.have.class("is-visible");
        expect(trigger).to.have.attribute("aria-expanded", "true");
    });

    it("should hide when focus moves from the popover to an outside button", async () => {
        await fixture(createPopover());

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");
        const outsideButton = screen.getByTestId("outside-button");

        await user.click(trigger);
        await waitFor(() => expect(popover).to.have.class("is-visible"));

        await user.tab();
        await user.tab();

        expect(outsideButton).to.have.focus;
        await waitFor(() => expect(popover).not.to.have.class("is-visible"));
        expect(trigger).to.have.attribute("aria-expanded", "false");
    });

    it("should hide when focus leaves a popover containing a menu", async () => {
        await fixture(
            createPopover({
                content: html`
                    <ul class="s-menu" role="menu">
                        <li class="s-menu--item" role="menuitem">
                            <button
                                class="s-menu--action"
                                data-testid="popover-link"
                            >
                                View more
                            </button>
                        </li>
                    </ul>
                `,
                role: "dialog",
            })
        );

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");
        const outsideButton = screen.getByTestId("outside-button");

        await user.click(trigger);
        await waitFor(() => expect(popover).to.have.class("is-visible"));

        await user.tab();
        await user.tab();

        expect(outsideButton).to.have.focus;
        await waitFor(() => expect(popover).not.to.have.class("is-visible"));
        expect(trigger).to.have.attribute("aria-expanded", "false");
    });

    it("should stay open when focus moves outside a non-menu popover", async () => {
        await fixture(createPopover({ role: "dialog" }));

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");
        const outsideButton = screen.getByTestId("outside-button");

        await user.click(trigger);
        await waitFor(() => expect(popover).to.have.class("is-visible"));

        await user.tab();
        await user.tab();

        expect(outsideButton).to.have.focus;
        expect(popover).to.have.class("is-visible");
        expect(trigger).to.have.attribute("aria-expanded", "true");
    });

    it("should stay open when focus leaves a menu popover that disables auto-dismissal", async () => {
        await fixture(createPopover({ hideOnOutsideClick: "never" }));

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");
        const outsideButton = screen.getByTestId("outside-button");

        await user.click(trigger);
        await waitFor(() => expect(popover).to.have.class("is-visible"));

        await user.tab();
        await user.tab();

        expect(outsideButton).to.have.focus;
        expect(popover).to.have.class("is-visible");
        expect(trigger).to.have.attribute("aria-expanded", "true");
    });

    it("should hide when focus moves from the trigger to an outside button", async () => {
        await fixture(createPopover({ content: html`<span>View more</span>` }));

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");
        const outsideButton = screen.getByTestId("outside-button");

        await user.click(trigger);
        await waitFor(() => expect(popover).to.have.class("is-visible"));

        await user.tab();

        expect(outsideButton).to.have.focus;
        await waitFor(() => expect(popover).not.to.have.class("is-visible"));
        expect(trigger).to.have.attribute("aria-expanded", "false");
    });

    it("should hide when focus leaves with no related target", async () => {
        await fixture(createPopover());

        const trigger = screen.getByTestId("popover-trigger");
        const popover = screen.getByTestId("popover");

        await user.click(trigger);
        await waitFor(() => expect(popover).to.have.class("is-visible"));

        trigger.dispatchEvent(
            new FocusEvent("focusout", {
                bubbles: true,
                relatedTarget: null,
            })
        );

        expect(popover).not.to.have.class("is-visible");
        expect(trigger).to.have.attribute("aria-expanded", "false");
    });
});

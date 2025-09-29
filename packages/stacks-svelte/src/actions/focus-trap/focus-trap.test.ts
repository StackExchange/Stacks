import { expect } from "@open-wc/testing";
import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { createRawComponent } from "../../../test-utils";

// import { focusTrap } from "./focus-trap";

describe("action: focus-trap", () => {
    it("should trap focus inside the element when active is true", async () => {
        const component = await createRawComponent(`
            <script>
                import { focusTrap } from "$root/actions/focus-trap/focus-trap";
            </script>
            <div>
                <button>Before</button>
                <div use:focusTrap={{ active: true }}>
                    <button>First</button>
                    <button>Second</button>
                    <button class="d-none">Not Visible (skip)</button>
                    <button>Last</button>
                </div>
                <button>After</button>
            </div>
        `);
        render(component);

        const firstButton = screen.getByRole("button", { name: "First" });
        const secondButton = screen.getByRole("button", { name: "Second" });
        const lastButton = screen.getByRole("button", { name: "Last" });

        await waitFor(() => expect(firstButton).to.have.focus);

        await userEvent.tab();
        await waitFor(() => expect(secondButton).to.have.focus);

        await userEvent.tab();
        await waitFor(() => expect(lastButton).to.have.focus);

        await userEvent.tab();
        await waitFor(() => expect(firstButton).to.have.focus);

        await userEvent.tab({ shift: true });
        await waitFor(() => expect(lastButton).to.have.focus);
    });

    it("should focus on initialFocusElement when it is specified", async () => {
        const component = await createRawComponent(`
            <script>
                import { focusTrap } from "$root/actions/focus-trap/focus-trap";
                let initialFocusElement = $state();
            </script>
            <div>
                <div use:focusTrap={{ active: true, initialFocusElement }}>
                    <button>First</button>
                    <button bind:this={initialFocusElement}>Second</button>
                    <button>Last</button>
                </div>
            </div>
        `);
        render(component);

        const secondButton = screen.getByRole("button", { name: "Second" });
        await waitFor(() => expect(secondButton).to.have.focus);
    });

    it("should focus on first focusable element when initialFocusElement is not specified", async () => {
        const component = await createRawComponent(`
            <script>
                import { focusTrap } from "$root/actions/focus-trap/focus-trap";
            </script>
            <div>
                <div use:focusTrap={{ active: true, initialFocusElement: undefined }}>
                    <button>First</button>
                    <button>Second</button>
                    <button>Last</button>
                </div>
            </div>
        `);
        render(component);

        const firstButton = screen.getByRole("button", { name: "First" });
        await waitFor(() => expect(firstButton).to.have.focus);
    });

    it("should focus back on returnFocusElement when it is specified", async () => {
        const component = await createRawComponent(`
            <script>
                import { focusTrap } from "$root/actions/focus-trap/focus-trap";
                let active = $state(true);
                let returnFocusElement = $state();
            </script>
            <div>
                <button>Before</button>
                 <button bind:this={returnFocusElement}>
                    Return Focus Element
                </button>
                <div use:focusTrap={{ active, returnFocusElement }}>
                    <button onclick={() => { active = false }}>
                        Exit Trap
                    </button>
                </div>
                <button>After</button>
            </div>
        `);
        render(component);

        const exitTrapButton = screen.getByRole("button", {
            name: "Exit Trap",
        });
        await waitFor(() => expect(exitTrapButton).to.have.focus);

        await userEvent.click(exitTrapButton);
        const returnFocusButton = screen.getByRole("button", {
            name: "Return Focus Element",
        });
        await waitFor(() => expect(returnFocusButton).to.have.focus);
    });

    it("should focus back on the previously focused element when returnFocusElement is not specified", async () => {
        const component = await createRawComponent(`
            <script>
                import { focusTrap } from "$root/actions/focus-trap/focus-trap";
                let active = $state(false);
            </script>
            <div>
                <button>Before</button>
                 <button>
                    Return Focus Element
                </button>
                <div use:focusTrap={{ active, returnFocusElement: undefined }}>
                    <button onclick={() => { active = false }}>
                        Exit Trap
                    </button>
                </div>
                <button>After</button>
                <button onclick={() => { active = true }}>
                    Previously Focused
                </button>
            </div>
        `);
        render(component);

        const previouslyFocusedButton = screen.getByRole("button", {
            name: "Previously Focused",
        });
        await userEvent.click(previouslyFocusedButton);

        const exitTrapButton = screen.getByRole("button", {
            name: "Exit Trap",
        });
        await waitFor(() => expect(exitTrapButton).to.have.focus);

        await userEvent.click(exitTrapButton);
        await waitFor(() => expect(previouslyFocusedButton).to.have.focus);
    });
});

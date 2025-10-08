import sinon from "sinon";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { createRawComponent } from "../../../test-utils";

// import { clickOutside } from "./click-outside";

const component = await createRawComponent(`
    <script>
        import { clickOutside } from "$root/actions/click-outside/click-outside";
        const { onoutclick } = $props();
    </script>
    <button>Outside</button>
    <button use:clickOutside {onoutclick}>
        Inside
    </button>
`);

describe("action: click-outside", () => {
    it("should trigger the onoutclick callback with the clicked element when the user click outside the element", async () => {
        const onClickOutsideMock = sinon.spy();
        render(component, {
            props: {
                onoutclick: onClickOutsideMock,
            },
        });

        await userEvent.click(screen.getByText("Outside"));

        expect(onClickOutsideMock).to.be.calledOnce;
        expect(onClickOutsideMock).to.be.calledWith(
            sinon.match({
                detail: screen.getByText("Outside"),
            })
        );
    });

    it("should NOT trigger the onoutclick callback when the user click inside the element", async () => {
        const onClickOutsideMock = sinon.spy();
        render(component, {
            props: {
                onoutclick: onClickOutsideMock,
            },
        });

        await userEvent.click(screen.getByText("Inside"));

        expect(onClickOutsideMock).not.to.be.called;
    });

    it("should cleanup the event listener when the component is unmounted", async () => {
        const spy = sinon.spy(document, "addEventListener");
        sinon.spy(document, "removeEventListener");
        const { unmount } = render(component);
        const handleClick = spy.firstCall.args[1];

        unmount();

        expect(document.removeEventListener).to.be.calledWith(
            "click",
            handleClick,
            true
        );
    });
});

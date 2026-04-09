import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { stub } from "sinon";
import "../../index";

const user = userEvent.setup();

describe("code block", () => {
    it("should add a copy button when controller is connected", async () => {
        const element = await fixture(html`
            <pre class="s-code-block" data-controller="s-code-block">
                <code>console.log('Hello, World!');</code>
            </pre>
        `);

        // The copy button should be added automatically
        const copyButton = element.querySelector(".s-code-block--copy");
        expect(copyButton).to.exist;
        expect(copyButton).to.have.attribute("title", "Copy to clipboard");
    });

    it("should copy code content when copy button is clicked", async () => {
        // Mock the clipboard API
        const writeTextStub = stub().resolves();
        Object.assign(navigator, {
            clipboard: {
                writeText: writeTextStub,
            },
        });

        const element = await fixture(html`
            <pre class="s-code-block" data-controller="s-code-block">
                <code>console.log('Hello, World!');</code>
            </pre>
        `);

        const copyButton = element.querySelector(".s-code-block--copy") as HTMLButtonElement;
        expect(copyButton).to.exist;

        await user.click(copyButton);

        expect(writeTextStub).to.have.been.calledWith("console.log('Hello, World!');");
        
        writeTextStub.restore();
    });

    it("should handle code blocks with line numbers", async () => {
        const writeTextStub = stub().resolves();
        Object.assign(navigator, {
            clipboard: {
                writeText: writeTextStub,
            },
        });

        const element = await fixture(html`
            <pre class="s-code-block" data-controller="s-code-block">
                <div class="s-code-block--line-numbers">1\n2\n3</div>
                <code>console.log('line 1');\nconsole.log('line 2');\nconsole.log('line 3');</code>
            </pre>
        `);

        const copyButton = element.querySelector(".s-code-block--copy") as HTMLButtonElement;
        expect(copyButton).to.exist;

        await user.click(copyButton);

        // Should exclude line numbers from copied content
        expect(writeTextStub).to.have.been.called;
        const copiedText = writeTextStub.getCall(0).args[0];
        expect(copiedText).to.not.include("1\n2\n3");
        
        writeTextStub.restore();
    });

    it("should show feedback when copy succeeds", async () => {
        const writeTextStub = stub().resolves();
        Object.assign(navigator, {
            clipboard: {
                writeText: writeTextStub,
            },
        });

        const element = await fixture(html`
            <pre class="s-code-block" data-controller="s-code-block">
                <code>console.log('Hello, World!');</code>
            </pre>
        `);

        const copyButton = element.querySelector(".s-code-block--copy") as HTMLButtonElement;
        expect(copyButton).to.exist;

        const originalContent = copyButton.innerHTML;

        await user.click(copyButton);

        // Button should show success feedback
        expect(copyButton.innerHTML).to.include("Copied!");

        // Should restore original content after timeout
        await new Promise(resolve => setTimeout(resolve, 2100));
        expect(copyButton.innerHTML).to.equal(originalContent);
        
        writeTextStub.restore();
    });
});
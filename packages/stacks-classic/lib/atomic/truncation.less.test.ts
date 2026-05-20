import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: truncation", () => {
    it("should output all atomic truncation classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/truncation.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

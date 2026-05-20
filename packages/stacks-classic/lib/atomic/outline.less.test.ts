import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: outline", () => {
    it("should output all atomic outline classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/outline.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

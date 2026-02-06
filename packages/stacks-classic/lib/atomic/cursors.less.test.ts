import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: cursors", () => {
    it("should output all atomic cursors classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/cursors.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

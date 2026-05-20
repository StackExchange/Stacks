import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: grid", () => {
    it("should output all atomic grid classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/grid.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

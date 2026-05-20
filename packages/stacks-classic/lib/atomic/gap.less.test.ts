import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: gap", () => {
    it("should output all atomic gap classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/gap.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: flex", () => {
    it("should output all atomic flex css classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/flex.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

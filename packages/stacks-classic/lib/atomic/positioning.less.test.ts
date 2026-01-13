import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: positioning", () => {
    it("should output all atomic css classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/positioning.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

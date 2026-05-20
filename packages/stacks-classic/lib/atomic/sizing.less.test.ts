import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: sizing", () => {
    it("should output all sizing custom properties", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/sizing.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

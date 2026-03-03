import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: opacity", () => {
    it("should output all atomic opacity classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/opacity.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

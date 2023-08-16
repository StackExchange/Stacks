import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: color", () => {
    it("should output v2 atomic css classes for colors", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/color.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

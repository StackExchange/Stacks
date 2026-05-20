import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: color", () => {
    it("should output all atomic color classes and custom properties", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/color.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

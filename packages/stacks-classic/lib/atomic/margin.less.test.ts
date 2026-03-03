import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: margin", () => {
    it("should output all atomic margin classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/margin.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: width", () => {
    it("should output all atomic width classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/width.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

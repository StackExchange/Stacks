import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: height", () => {
    it("should output all height atomic classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/height.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

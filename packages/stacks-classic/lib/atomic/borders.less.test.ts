import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: borders", () => {
    it("should output all atomic borders classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/borders.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

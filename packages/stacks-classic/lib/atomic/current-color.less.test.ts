import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: current-color", () => {
    it("should output all atomic current-color classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/current-color.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

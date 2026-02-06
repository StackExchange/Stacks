import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: display", () => {
    it("should output all atomic display classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/display.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

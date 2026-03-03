import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: box-sizing", () => {
    it("should output all atomic box-sizing classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/box-sizing.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

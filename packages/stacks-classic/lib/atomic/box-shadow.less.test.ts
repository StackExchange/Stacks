import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: box-shadow", () => {
    it("should output all atomic box-shadow classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/box-shadow.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

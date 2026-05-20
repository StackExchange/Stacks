import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: border-radius", () => {
    it("should output all atomic border-radius classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/border-radius.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

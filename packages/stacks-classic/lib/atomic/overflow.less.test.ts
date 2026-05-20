import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: overflow", () => {
    it("should output all atomic overflow classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/overflow.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

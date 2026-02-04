import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: lists", () => {
    it("should output all atomic lists classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/lists.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

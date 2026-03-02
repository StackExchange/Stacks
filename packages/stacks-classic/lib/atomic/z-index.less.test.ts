import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: z-index", () => {
    it("should output all atomic z-index classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/z-index.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: backgrounds", () => {
    it("should output all atomic backgrounds classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/backgrounds.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

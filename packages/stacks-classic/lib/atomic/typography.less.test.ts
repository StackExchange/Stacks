import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: typography", () => {
    it("should output all atomic typography classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/typography.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

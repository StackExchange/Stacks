import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: padding", () => {
    it("should output all atomic padding classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/padding.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

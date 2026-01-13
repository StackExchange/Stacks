import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: spacing", () => {
    it("should output all spacing classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/spacing.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

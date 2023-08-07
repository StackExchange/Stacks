import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: color-new", () => {
    it("should output all new atomic css classes for colors", async () => {
        const css = await renderLess(`
            @import "color-new.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

import { describe, it, expect } from "vitest";
import { renderLess } from "../../test/less-test-utils";

describe("atomic: color v1", () => {
    it("should output all old atomic css classes for colors", async () => {
        const css = await renderLess(`
            @import (reference) "./lib/exports/v1/constants-colors.less";
            @import (reference) "./lib/exports/mixins.less";
            @import "./lib/atomic/v1/color.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

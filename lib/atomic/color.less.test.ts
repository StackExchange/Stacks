import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: color", () => {
    it("should output all old atomic css classes for colors", async () => {
        const css = await renderLess(`
            @import (reference) "v1/constants-colors.less";
            @import (reference) "mixins.less";
            @import "color.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

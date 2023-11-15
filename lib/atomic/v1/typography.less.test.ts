import { describe, it, expect } from "vitest";
import { renderLess } from "../../test/less-test-utils";

describe("atomic: border v1", () => {
    it("should output all v1 atomic css classes for colors", async () => {
        const css = await renderLess(`
            @import (reference) "./lib/exports/v1/constants-colors.less";
            @import (reference) "./lib/exports/mixins.less";
            @import "./lib/atomic/v1/typography.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

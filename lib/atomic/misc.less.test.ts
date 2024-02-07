import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: misc v1", () => {
    it("should output all atomic css classes", async () => {
        const css = await renderLess(`
            @import (reference) "./lib/base/internal.less";
            @import (reference) "./lib/exports/color-mixins.less";
            @import (reference) "./lib/exports/constants-helpers.less";
            @import (reference) "./lib/exports/mixins.less";
            @import "./lib/atomic/misc.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

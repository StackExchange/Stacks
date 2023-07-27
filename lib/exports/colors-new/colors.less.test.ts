import { describe, it, expect } from "vitest";
import { renderLess } from "../../test/less-test-utils";

describe("colors", () => {
    it("default", async () => {
        const css = await renderLess(`
            @import "colors-new/colors.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

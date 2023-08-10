import { describe, it, expect } from "vitest";
import { renderLess } from "../../test/less-test-utils";

describe("constants-colors", () => {
    it("should output all the css generated by the old colors/theming generation mixins", async () => {
        const css = await renderLess(`
            @import "./lib/exports/v1/constants-colors.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

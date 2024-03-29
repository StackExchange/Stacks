import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("colors", () => {
    it("should output all the css generated by the v2 colors/theming generation mixins", async () => {
        const css = await renderLess(`
            @import "./lib/exports/color.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

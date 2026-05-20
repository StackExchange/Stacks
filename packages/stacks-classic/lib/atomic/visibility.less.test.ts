import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: visibility", () => {
    it("should output all atomic visibility classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/visibility.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

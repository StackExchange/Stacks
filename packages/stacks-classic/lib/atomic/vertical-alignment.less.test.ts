import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: vertical-alignment", () => {
    it("should output all atomic vertical-alignment classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/vertical-alignment.less";
        `);

        expect(css).toMatchSnapshot();
    });
});

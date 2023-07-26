import { describe, it, expect } from "vitest";
import { renderLess } from "../../test/less-test-utils";

describe("color-mixins", () => {
    describe("colors", () => {
        describe("generate-colors", () => {
            it("default", async () => {
                const css = await renderLess(`
                    @import (reference) "color-mixins.less";

                    // TODO: figure out how to simplify sets to reduce output

                    /* .generate-colors(default) */
                    body {
                        .generate-colors(default);
                    }
                `);

                expect(css).toMatchSnapshot();
            });
            it("light", async () => {
                const css = await renderLess(`
                    @import (reference) "color-mixins.less";

                    // TODO: figure out how to simplify sets to reduce output

                    /* .generate-colors(light) */
                    body {
                        .generate-colors(light);
                    }
                `);

                expect(css).toMatchSnapshot();
            });
        });
        it("create-colors", async () => {
            const css = await renderLess(`
                @import (reference) "color-mixins.less";

                /*
                .set-test-emerald() {
                    default: hsl(150, 60%, 55%);
                }
                .set-test-ruby() {
                    100: hsl(350, 70%, 97%);
                    600: hsl(350, 70%, 29%);
                }
                .sets-test() {
                    emerald: .set-test-emerald();
                    ruby: .set-test-ruby();
                }
                */
                .set-test-emerald() {
                    default: hsl(150, 60%, 55%);
                }
                .set-test-ruby() {
                    100: hsl(350, 70%, 97%);
                    600: hsl(350, 70%, 29%);
                }
                .sets-test() {
                    emerald: .set-test-emerald();
                    ruby: .set-test-ruby();
                }

                /* .create-colors(.sets-test(), variables) */
                body {
                    .create-colors(.sets-test(), variables);
                }

                /* .create-colors(.sets-test(), classes) */
                body {
                    .create-colors(.sets-test(), classes);
                }
            `);

            expect(css).toMatchSnapshot();
        });
        it("create-color-classes", async () => {
            const css = await renderLess(`
                @import (reference) "color-mixins.less";
                /* .create-color-classes(red-500, var(--red-500)) */
                body {
                    .create-color-classes(red-500, var(--red-500));
                }
            `);

            expect(css).toMatchSnapshot();
        });
    });
    describe("theming", () => {
        it("create-custom-theme-hsl-rgb-variables", async () => {
            const css = await renderLess(`
                @import (reference) "color-mixins.less";
                create-custom-theme-hsl-rgb-variables(#ff1100, primary, base) {
                    .create-custom-theme-hsl-rgb-variables(#ff1100, primary, base);
                }
                create-custom-theme-hsl-rgb-variables(#29ff53, secondary, base) {
                    .create-custom-theme-hsl-rgb-variables(#29ff53, secondary, base);
                }
                create-custom-theme-hsl-rgb-variables(#1c091d, primary, dark) {
                    .create-custom-theme-hsl-rgb-variables(#1c091d, primary, dark);
                }
                create-custom-theme-hsl-rgb-variables(#49281f, secondary, dark) {
                    .create-custom-theme-hsl-rgb-variables(#49281f, secondary, dark);
                }
            `);

            expect(css).toMatchSnapshot();
        });

        it("create-theme-hsl-rgb-variables", async () => {
            const css = await renderLess(`
                @import (reference) "color-mixins.less";
                create-theme-hsl-rgb-variables(light) {
                    .create-theme-hsl-rgb-variables(light);
                }
                create-theme-hsl-rgb-variables(dark) {
                    .create-theme-hsl-rgb-variables(dark);
                }
            `);

            expect(css).toMatchSnapshot();
        });

        it("create-custom-theme-variables", async () => {
            const css = await renderLess(`
                @import (reference) "color-mixins.less";
                create-custom-theme-variables(light) {
                    .create-custom-theme-variables(light);
                }
                create-custom-theme-variables(dark) {
                    .create-custom-theme-variables(dark);
                }
            `);

            expect(css).toMatchSnapshot();
        });
    });
});

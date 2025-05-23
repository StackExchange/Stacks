import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("skeleton", () => {
    runA11yTests({
        baseClass: "s-skeleton",
        variants: ["ai"]
    });
});

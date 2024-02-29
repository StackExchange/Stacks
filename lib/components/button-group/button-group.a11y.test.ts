import { testArgs } from "./button-group.test.setup";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("button group", () => {
    runA11yTests(testArgs);
});

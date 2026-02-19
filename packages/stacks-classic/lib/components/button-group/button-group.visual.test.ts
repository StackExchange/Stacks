import { testArgs } from "./button-group.test.setup";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe.skip("button group", () => {
    runVisualTests(testArgs);
});

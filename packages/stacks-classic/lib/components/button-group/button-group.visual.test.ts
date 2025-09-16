import { testArgs } from "./button-group.test.setup";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("button group", () => {
    runVisualTests(testArgs);
});

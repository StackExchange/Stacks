import { runVisualTests } from "../../test/visual-test-utils";
import testArgs from "./post-summary.test.setup";
import "../../index";

describe("post-summary", () => {
    runVisualTests(testArgs);
});

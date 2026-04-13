import { runA11yTests } from "../../test/a11y-test-utils";
import testArgs from "./post-summary.test.setup";
import "../../index";

describe("post-summary", () => {
    runA11yTests(testArgs);
});

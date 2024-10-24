import testArgs from "./sidebar-widget.test.setup";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("sidebar widget", () => {
    runA11yTests(testArgs);
});

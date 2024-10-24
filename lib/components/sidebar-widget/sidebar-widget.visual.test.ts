import testArgs from "./sidebar-widget.test.setup";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("sidebar widget", () => {
    runVisualTests(testArgs);
});

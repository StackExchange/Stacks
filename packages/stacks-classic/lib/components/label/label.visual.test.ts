import { runVisualTests } from "../../test/visual-test-utils";
import getTestArgs from "./label.test.setup";

describe("label", () => {
    [true, false].forEach((disabled) => {
        runVisualTests(getTestArgs(disabled));
    });
});

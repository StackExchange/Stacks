import { runA11yTests } from "../../test/a11y-test-utils";
import { children } from "./vote.test.setup";
import "../../index";

describe("vote", () => {
    runA11yTests({
        baseClass: "s-vote",
        modifiers: {
            primary: ["expanded", "horizontal"],
        },
        children,
    });
});

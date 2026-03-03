import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";
import proseTestHTML from "./prose.test.setup";

describe("prose", () => {
    runA11yTests({
        baseClass: "s-prose",
        modifiers: {
            primary: ["sm"],
        },
        children: {
            default: proseTestHTML,
        },
        tag: "article",
    });
});

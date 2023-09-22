import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("post summary", () => {
    // States
        // default, watched, ignored, deleted
    // modifiers
        // minimal
    // child elements
        // answer
        // answer excerpt
        // content
        // content excerpt
            // default, sm, md, lg
        // content menu button
        // content title
        // content type
        // meta
            // user card
        // meta tags
            // tag
        // stats
        // stats item
            // votes
            // answers
                // default, answered, accepted
            // views
                // default, warm, hot, supernova
            // bounty
        // stats item number

    // default, sizes
    runComponentTests({
        type: "visual",
        baseClass: "s-post-summary",
        // children: {
        //     default: child(),
        // },
        // template,
    });
});

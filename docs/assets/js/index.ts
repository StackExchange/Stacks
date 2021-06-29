import "@highlightjs/cdn-assets/highlight.min.js";
import "../../../lib/ts/index";
import "../less/stacks-documentation.less";
import "./controllers/docs-resizer";

// @ts-expect-error
global.$ = require("jquery");

// @ts-expect-error
global.process = {
    env: {}
};
// @ts-expect-error
global.docsearch = require("docsearch.js");

// @ts-expect-error
global.List = require("list.js");

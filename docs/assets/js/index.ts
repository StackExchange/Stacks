import "@highlightjs/cdn-assets/highlight.min.js";
import "../../../lib/ts/index";
import "../less/stacks-documentation.less";
import "./controllers/docs-resizer";
import "@stackoverflow/stacks-editor/dist/styles.css";

// @ts-expect-error
global.$ = require("jquery");

import "./global.search";
import "./global.navigation";
import "./global.hamburger";
import "./global.darkmode";

// @ts-expect-error
global.process = {
    env: {}
};
// @ts-expect-error
global.docsearch = require("docsearch.js");

// @ts-expect-error
global.List = require("list.js");

// @ts-expect-error
global.stacksEditor = require("@stackoverflow/stacks-editor/dist/app.bundle");

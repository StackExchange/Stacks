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

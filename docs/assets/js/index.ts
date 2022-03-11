import "../../../lib/ts/index";
import "../less/stacks-documentation.less";
import "./controllers/docs-resizer";

// @ts-expect-error
global.$ = require("jquery");
// @ts-expect-error
global.Stacks = require("../../../lib/ts/index").Stacks;

import "./global.search";
import "./global.navigation";
import "./global.hamburger";
import "./global.theming";
import "./global.feedback";

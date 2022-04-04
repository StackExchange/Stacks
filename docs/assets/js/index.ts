import "../../../lib/ts/index";
import "../less/stacks-documentation.less";
import "./controllers/docs-resizer";
import * as Stacks from "../../../lib/ts/index";

// @ts-expect-error
global.$ = require("cash-dom");
// @ts-expect-error
global.Stacks = Stacks;

import "./global.search";
import "./global.navigation";
import "./global.hamburger";
import "./global.theming";
import "./global.feedback";

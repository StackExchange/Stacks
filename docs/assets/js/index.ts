import "../../../lib/index";
import "../less/stacks-documentation.less";
import "./controllers/docs-resizer";
import * as Stacks from "../../../lib/index";

// @ts-expect-error
global.Stacks = Stacks;

import "./global.jquery";
import "./global.search";
import "./global.navigation";
import "./global.hamburger";
import "./global.theming";
import "./global.feedback";

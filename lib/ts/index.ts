import '../css/stacks.less';

import * as Stacks from './stacks';
import StacksExpandableControl from  './controllers/s-expandable-control';
import StacksPopover from  './controllers/s-popover';
import StacksTable from  './controllers/s-table';

Stacks.application.register("s-expandable-control", StacksExpandableControl);
Stacks.application.register("s-popover", StacksPopover);
Stacks.application.register("s-table", StacksTable);
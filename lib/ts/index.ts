import '../css/stacks.less';

import { ExpandableController } from './controllers/s-expandable-control';
import { ModalController } from './controllers/s-modal';
import { TabListController } from './controllers/s-navigation-tablist';
import { PopoverController } from './controllers/s-popover';
import { TableController } from './controllers/s-table';
import { TooltipController } from './controllers/s-tooltip';
import { UploaderController } from './controllers/s-uploader';
import * as Stacks from './stacks';

Stacks.application.register("s-expandable-control", ExpandableController);
Stacks.application.register("s-modal", ModalController);
Stacks.application.register("s-navigation-tablist", TabListController);
Stacks.application.register("s-popover", PopoverController);
Stacks.application.register("s-table", TableController);
Stacks.application.register("s-tooltip", TooltipController);
Stacks.application.register("s-uploader", UploaderController);

//TODO
//Stacks.application._initializing = false;
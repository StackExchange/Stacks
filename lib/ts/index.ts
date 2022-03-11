import '../css/stacks.less';

import { ExpandableController } from './controllers/s-expandable-control';
import { hideModal, ModalController, showModal } from './controllers/s-modal';
import { TabListController } from './controllers/s-navigation-tablist';
import { attachPopover, detachPopover, hidePopover, PopoverController, showPopover } from './controllers/s-popover';
import { TableController } from './controllers/s-table';
import { setTooltipHtml, setTooltipText, TooltipController } from './controllers/s-tooltip';
import { UploaderController } from './controllers/s-uploader';
import * as Stacks from './stacks';

Stacks.application.register("s-expandable-control", ExpandableController);
Stacks.application.register("s-modal", ModalController);
Stacks.application.register("s-navigation-tablist", TabListController);
Stacks.application.register("s-popover", PopoverController);
Stacks.application.register("s-table", TableController);
Stacks.application.register("s-tooltip", TooltipController);
Stacks.application.register("s-uploader", UploaderController);

// @ts-expect-error
Stacks.showModal = showModal;
// @ts-expect-error
Stacks.hideModal = hideModal;
// @ts-expect-error
Stacks.showPopover = showPopover;
// @ts-expect-error
Stacks.hidePopover = hidePopover;
// @ts-expect-error
Stacks.attachPopover = attachPopover;
// @ts-expect-error
Stacks.detachPopover = detachPopover;
// @ts-expect-error
Stacks.setTooltipHtml = setTooltipHtml;
// @ts-expect-error
Stacks.setTooltipText = setTooltipText;

export { Stacks };

//TODO
//Stacks.application._initializing = false;
import { application } from "./application";
import { ExpandableController } from "./controllers/s-expandable-control";
import { hideModal, showModal, ModalController } from "./controllers/s-modal";
import { TabListController } from "./controllers/s-navigation-tablist";
import { attachPopover, BasePopoverController, detachPopover, hidePopover, PopoverController, showPopover } from "./controllers/s-popover";
import { TableController } from "./controllers/s-table";
import { setTooltipHtml, setTooltipText, TooltipController } from "./controllers/s-tooltip";
import { UploaderController } from './controllers/s-uploader';
import { addController, createController, StacksController } from "./controller";

addController("s-expandable-control", ExpandableController);
addController("s-modal", ModalController);
addController("s-navigation-tablist", TabListController);
addController("s-popover", PopoverController);
addController("s-table", TableController);
addController("s-tooltip", TooltipController);
addController("s-uploader", UploaderController);

application.finalize();

export {
    StacksController,
    addController,
    createController,
    ExpandableController,
    ModalController,
    hideModal,
    showModal,
    BasePopoverController,
    PopoverController,
    showPopover,
    hidePopover,
    attachPopover,
    detachPopover,
    TableController,
    TabListController,
    TooltipController,
    setTooltipHtml,
    setTooltipText,
    UploaderController,
}
export * from 'stimulus';

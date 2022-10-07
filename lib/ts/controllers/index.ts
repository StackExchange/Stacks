// export all controllers *with helpers* so they can be bulk re-exported by the package entry point
export { ExpandableController } from "./s-expandable-control";
export { hideModal, ModalController, showModal } from "./s-modal";
export { TabListController } from "./s-navigation-tablist";
export {
    attachPopover,
    detachPopover,
    hidePopover,
    BasePopoverController,
    PopoverController,
    showPopover,
} from "./s-popover";
export { TableController } from "./s-table";
export { setTooltipHtml, setTooltipText, TooltipController } from "./s-tooltip";
// uncomment and comment the line above to run the tests against version 1.3.0 of the tooltip and see them failing
// export {
//     setTooltipHtml,
//     setTooltipText,
//     TooltipController,
// } from "./s-tooltip-1.3.0";
export { UploaderController } from "./s-uploader";

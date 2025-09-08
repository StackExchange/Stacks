import "./stacks.less";
import {
    BannerController,
    ExpandableController,
    ModalController,
    PopoverController,
    TableController,
    TabListController,
    ToastController,
    TooltipController,
    UploaderController,
} from "./controllers";
import { application, StacksApplication } from "./stacks";

// register all built-in controllers
application.register("s-banner", BannerController);
application.register("s-expandable-control", ExpandableController);
application.register("s-modal", ModalController);
application.register("s-toast", ToastController);
application.register("s-navigation-tablist", TabListController);
application.register("s-popover", PopoverController);
application.register("s-table", TableController);
application.register("s-tooltip", TooltipController);
application.register("s-uploader", UploaderController);

// finalize the application to guard our controller namespace
StacksApplication.finalize();

// export all controllers w/ helpers
export * from "./controllers";
// export the entirety of the contents of stacks.ts
export * from "./stacks";

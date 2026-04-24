// ESM entry for bundlers that need named exports (e.g. Vite/Rollup).
// Mirrors lib/index.ts but omits the CSS side-effect import;
// consumers should import the stylesheet separately.
import {
    BannerController,
    ModalController,
    PopoverController,
    TableController,
    TabListController,
    ToastController,
    TooltipController,
} from "./controllers";
import { application, StacksApplication } from "./stacks";

application.register("s-banner", BannerController);
application.register("s-modal", ModalController);
application.register("s-toast", ToastController);
application.register("s-navigation-tablist", TabListController);
application.register("s-popover", PopoverController);
application.register("s-table", TableController);
application.register("s-tooltip", TooltipController);

StacksApplication.finalize();

export * from "./controllers";
export * from "./stacks";

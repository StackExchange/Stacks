import {
    listEmailComponents,
    type EmailComponentCatalogItem,
} from "./components";
import { listEmailTemplates, type EmailTemplateCatalogItem } from "./templates";

export type EmailCatalog = {
    components: EmailComponentCatalogItem[];
    templates: EmailTemplateCatalogItem[];
};

export const getEmailCatalog = (): EmailCatalog => ({
    components: listEmailComponents(),
    templates: listEmailTemplates(),
});

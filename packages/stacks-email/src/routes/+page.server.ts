import type { PageServerLoad } from "./$types";

import { listEmailTemplates } from "#lib/api/templates.js";

export const load: PageServerLoad = async () => ({
    templates: listEmailTemplates(),
});

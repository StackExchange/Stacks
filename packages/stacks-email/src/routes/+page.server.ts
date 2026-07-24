import type { PageServerLoad } from "./$types";

import { listEmailTemplates } from "$lib/api/templates";

export const load: PageServerLoad = async () => ({
    templates: listEmailTemplates(),
});

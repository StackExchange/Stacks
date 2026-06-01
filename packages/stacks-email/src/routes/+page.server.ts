import type { PageServerLoad } from "./$types";

import { listEmailTemplates } from "$lib/public/templates";

export const load: PageServerLoad = async () => ({
    templates: listEmailTemplates(),
});

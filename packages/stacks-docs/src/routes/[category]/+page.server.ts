import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
    const parent = await event.parent();
    if (!parent.active) {
        throw error(404, `No content found for /${event.params.category}`);
    }
};

import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import { getEmailCatalog } from "@stackoverflow/stacks-email";

export const GET: RequestHandler = async () => json(getEmailCatalog());

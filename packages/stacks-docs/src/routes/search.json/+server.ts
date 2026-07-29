import { json } from "@sveltejs/kit";
import YAML from "yaml";

import structureRaw from "$src/structure.yaml?raw";
import { getSearchDocumentsPromise } from "$lib/searchDocuments";

export const prerender = true;

const searchDocumentsPromise = getSearchDocumentsPromise(
    YAML.parse(structureRaw)
);

export async function GET() {
    return json(await searchDocumentsPromise);
}

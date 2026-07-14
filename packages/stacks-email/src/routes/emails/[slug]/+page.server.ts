import { error } from "@sveltejs/kit";
import { dev } from "$app/environment";
import type { PageServerLoad } from "./$types";

import { highlightCode } from "$lib/highlight";
import { targetNames, type CompileTarget } from "$lib/tokens";
import {
    compileEmailTemplate,
    getEmailTemplateMeta,
    listEmailTemplates,
} from "$lib/api/templates";

export const load: PageServerLoad = async ({ params, url }) => {
    const template = getEmailTemplateMeta(params.slug);

    if (!template) {
        throw error(404, "Template not found");
    }

    // Locally, keep image srcs root-relative so they load from the dev server
    // rather than production. In prod, fall through to the default asset host.
    const assetBaseUrl = dev ? "" : undefined;

    const requestedTarget = url.searchParams.get("target");
    const target = (
        requestedTarget &&
        targetNames.includes(requestedTarget as CompileTarget)
            ? requestedTarget
            : "preview"
    ) as CompileTarget;

    const compiledByTargetEntries = await Promise.all(
        targetNames.map(async (compileTarget) => {
            const compiled = compileEmailTemplate({
                slug: params.slug,
                target: compileTarget,
                assetBaseUrl,
            });

            const highlightedHtml = await highlightCode(compiled.html, "html");

            return [
                compileTarget,
                {
                    html: compiled.html,
                    highlightedHtml,
                    errors: compiled.errors,
                },
            ] as const;
        })
    );

    const renderedMjml = compileEmailTemplate({
        slug: params.slug,
        target: "preview",
        assetBaseUrl,
    }).renderedMjml;

    const highlightedMjml = await highlightCode(renderedMjml, "xml");

    return {
        templates: listEmailTemplates(),
        template,
        target,
        renderedMjml,
        highlightedMjml,
        compiledByTarget: Object.fromEntries(compiledByTargetEntries) as Record<
            CompileTarget,
            {
                html: string;
                highlightedHtml: string;
                errors: {
                    line: number | undefined;
                    message: string;
                    tagName?: string;
                }[];
            }
        >,
    };
};

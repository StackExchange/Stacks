import { error } from "@sveltejs/kit";
import { dev } from "$app/env";
import type { PageServerLoad } from "./$types";

import { highlightCode } from "#lib/highlight.js";
import { targetNames, type CompileTarget } from "#lib/tokens.js";
import {
    compileEmailTemplate,
    getEmailTemplateMeta,
    listEmailTemplates,
} from "#lib/api/templates.js";

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
            const compiled = await compileEmailTemplate({
                slug: params.slug,
                target: compileTarget,
                assetBaseUrl,
            });

            const highlightedHtml = await highlightCode(compiled.html, "html");
            const highlightedMjml = await highlightCode(
                compiled.renderedMjml,
                "xml"
            );

            return [
                compileTarget,
                {
                    html: compiled.html,
                    highlightedHtml,
                    renderedMjml: compiled.renderedMjml,
                    highlightedMjml,
                    errors: compiled.errors,
                },
            ] as const;
        })
    );

    return {
        templates: listEmailTemplates(),
        template,
        target,
        compiledByTarget: Object.fromEntries(compiledByTargetEntries) as Record<
            CompileTarget,
            {
                html: string;
                highlightedHtml: string;
                renderedMjml: string;
                highlightedMjml: string;
                errors: {
                    line: number | undefined;
                    message: string;
                    tagName?: string;
                }[];
            }
        >,
    };
};

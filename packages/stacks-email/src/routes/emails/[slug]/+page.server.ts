import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { highlightCode } from "$lib/highlight/highlight";
import { targetNames, type CompileTarget } from "../../../../tokens";
import {
    compileEmailTemplate,
    getEmailTemplateMeta,
    listEmailTemplates,
} from "$lib/public/templates";

export const load: PageServerLoad = async ({ params, url }) => {
    const template = getEmailTemplateMeta(params.slug);

    if (!template) {
        throw error(404, "Template not found");
    }

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

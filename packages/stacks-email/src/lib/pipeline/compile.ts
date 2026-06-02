import mjml2html from "mjml";

import {
    applyTemplateProps,
    extractBetweenMarkers,
    extractTagMarkup,
    hasMjmlDocument,
    injectHeadContent,
    wrapComponentWithMarkers,
    wrapTagWithMarkers,
} from "./template";

import { mjmlConfig } from "../mjml/config";
import { targets, tokens, type CompileTarget } from "../tokens";
import { transformTokens } from "./transform";

type MjmlCompileResult = {
    html: string;
    errors: {
        line: number | undefined;
        message: string;
        tagName?: string;
    }[];
};

const mjml2htmlSync = mjml2html as unknown as (
    mjml: string,
    options?: {
        validationLevel?: "strict" | "soft" | "skip";
        keepComments?: boolean;
        minify?: boolean;
    }
) => MjmlCompileResult;

const escapePreviewText = (value: string) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

const buildPreviewHeadNode = (previewText: string | undefined) => {
    const normalizedPreviewText = previewText?.trim();
    if (!normalizedPreviewText) {
        return "";
    }

    return `<mj-preview>${escapePreviewText(normalizedPreviewText)}</mj-preview>\n`;
};

const wrapInDocument = (
    mjmlSource: string,
    previewText: string | undefined
) => `
<mjml>
    <mj-head>
        ${buildPreviewHeadNode(previewText)}${mjmlConfig}
    </mj-head>
    <mj-body background-color="${tokens.color.bodyBackground}">
        <mj-wrapper padding-top="20px" padding-bottom="20px">
            ${mjmlSource}
        </mj-wrapper>
    </mj-body>
</mjml>
`;

const injectConfigIntoDocument = (
    documentSource: string,
    previewText: string | undefined
) => {
    const headContent = `${buildPreviewHeadNode(previewText)}${mjmlConfig}`;

    return (
        injectHeadContent(documentSource, headContent) ??
        wrapInDocument(documentSource, previewText)
    );
};

export type CompileMjmlInput = {
    mjml: string;
    target: CompileTarget;
    props?: Record<string, string>;
    previewText?: string;
    extractComponentName?: string;
    extractComponentTag?: string;
};

export type CompileMjmlOutput = {
    html: string;
    componentHtml: string | null;
    componentMjml: string | null;
    mjml: string;
    renderedMjml: string;
    errors: {
        line: number | undefined;
        message: string;
        tagName?: string;
    }[];
};

export const compileMjml = ({
    mjml,
    target,
    props = {},
    previewText,
    extractComponentName,
    extractComponentTag,
}: CompileMjmlInput): CompileMjmlOutput => {
    const renderedMjml = applyTemplateProps(mjml, props);
    const mjmlForCompile = extractComponentName
        ? extractComponentTag
            ? wrapTagWithMarkers(
                  renderedMjml,
                  extractComponentName,
                  extractComponentTag
              )
            : wrapComponentWithMarkers(renderedMjml, extractComponentName)
        : renderedMjml;

    const fullMjml = hasMjmlDocument(mjmlForCompile)
        ? injectConfigIntoDocument(mjmlForCompile, previewText)
        : wrapInDocument(mjmlForCompile, previewText);

    const compileResult = mjml2htmlSync(fullMjml, {
        validationLevel: "soft",
        keepComments: true,
        minify: false,
    });

    const replacements = targets[target].tokens;
    const targetRenderedMjml = transformTokens(renderedMjml, replacements);
    const html = transformTokens(compileResult.html, replacements);
    const componentMjml = extractComponentName
        ? extractComponentTag
            ? extractTagMarkup(targetRenderedMjml, extractComponentTag)
            : targetRenderedMjml.trim()
        : null;
    const componentHtml = extractComponentName
        ? extractBetweenMarkers(html, extractComponentName)
        : null;

    return {
        html,
        componentMjml,
        componentHtml,
        mjml: fullMjml,
        renderedMjml: targetRenderedMjml,
        errors: compileResult.errors.map((issue) => ({
            line: issue.line,
            message: issue.message,
            tagName: issue.tagName,
        })),
    };
};

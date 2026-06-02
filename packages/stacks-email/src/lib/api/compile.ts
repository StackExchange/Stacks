import {
    compileEmailComponent,
    getEmailComponentMeta,
    type CompileComponentOutput,
} from "./components";
import {
    compileEmailTemplate,
    getEmailTemplateMeta,
    type CompileTemplateOutput,
} from "./templates";
import type { CompileTarget } from "../tokens";
import { compileEmailRenderableInputSchema } from "./request-schemas";

export type EmailRenderableKind = "component" | "template";

export type CompileEmailRenderableInput = {
    kind: EmailRenderableKind;
    slug: string;
    target: CompileTarget;
    props?: Record<string, string>;
};

export type CompileEmailRenderableOutput =
    | CompileComponentOutput
    | CompileTemplateOutput;

export const compileEmailRenderable = ({
    kind,
    slug,
    target,
    props = {},
}: CompileEmailRenderableInput): CompileEmailRenderableOutput => {
    const parsedInput = compileEmailRenderableInputSchema.parse({
        kind,
        slug,
        target,
        props,
    });

    if (parsedInput.kind === "component") {
        return compileEmailComponent({
            slug: parsedInput.slug,
            target: parsedInput.target,
        });
    }

    return compileEmailTemplate({
        slug: parsedInput.slug,
        target: parsedInput.target,
        props: parsedInput.props,
    });
};

export const getEmailRenderableMeta = (
    kind: EmailRenderableKind,
    slug: string
) => {
    if (kind === "component") {
        return getEmailComponentMeta(slug);
    }

    return getEmailTemplateMeta(slug);
};

export {
    tokens,
    targets,
    targetNames,
    isCompileTarget,
    type Tokens,
    type CompileTarget,
} from "../../../tokens";
export {
    transformTokens,
} from "../pipeline/transform";
export {
    compileMjml,
    type CompileMjmlInput,
    type CompileMjmlOutput,
} from "../pipeline/compile";

export {
    listEmailComponents,
    getEmailComponentMeta,
    getEmailComponentOptions,
    compileEmailComponent,
    type EmailComponentCatalogItem,
    type CompileComponentInput,
    type CompileComponentOutput,
} from "./components";

export {
    listEmailTemplates,
    getEmailTemplateMeta,
    compileEmailTemplate,
    type EmailTemplateCatalogItem,
    type CompileTemplateInput,
    type CompileTemplateOutput,
} from "./templates";

export { getEmailCatalog, type EmailCatalog } from "./catalog";

export {
    compileEmailRenderable,
    getEmailRenderableMeta,
    type EmailRenderableKind,
    type CompileEmailRenderableInput,
    type CompileEmailRenderableOutput,
} from "./compile";

export {
    compileTargetSchema,
    emailRenderableKindSchema,
    compileComponentInputSchema,
    compileTemplateInputSchema,
    compileEmailRenderableInputSchema,
} from "./validation";

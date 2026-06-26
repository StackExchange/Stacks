import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { z } from "zod/v4";
import { env } from "$env/dynamic/private";

import { compileMjml } from "$lib/pipeline/compile";
import { compileTargetSchema } from "$lib/api/request-schemas";
import { compileEmailTemplate } from "$lib/api/templates";
import button from "../../../../components/button";
import footer from "../../../../components/footer";
import headline from "../../../../components/headline";
import header from "../../../../components/header";
import spacer from "../../../../components/spacer";
import text from "../../../../components/text";
import title from "../../../../components/title";
import { Section } from "$lib/mjml";
import { tokens } from "$lib/tokens";
import type { EmailComponentMeta, MjmlNode } from "$lib/types";

const getVariantIds = (meta: EmailComponentMeta) =>
    meta.variants.map((variant) => variant.id) as [string, ...string[]];

const componentVariantSchema = (meta: EmailComponentMeta) =>
    z
        .enum(getVariantIds(meta))
        .optional()
        .default(meta.defaultVariant ?? meta.variants[0].id);

type RenderableBlock = {
    variant?: string;
    size?: string;
    props?: unknown;
};

type BlockDefinition = {
    type: string;
    schema: z.ZodObject;
    render: (block: RenderableBlock) => MjmlNode;
};

const blockDefinitions = {
    headline: {
        type: "headline",
        schema: z.object({
            type: z.literal("headline"),
            variant: componentVariantSchema(headline.meta),
            props: headline.optionsSchema.optional(),
        }),
        render: (block) =>
            headline.component(
                block.variant as keyof typeof headline.variants & string,
                (block.props ?? {}) as z.output<typeof headline.optionsSchema>
            ) as MjmlNode,
    },
    text: {
        type: "text",
        schema: z.object({
            type: z.literal("text"),
            variant: componentVariantSchema(text.meta),
            props: text.optionsSchema.optional(),
        }),
        render: (block) =>
            text.component(
                block.variant as keyof typeof text.variants & string,
                (block.props ?? {}) as z.output<typeof text.optionsSchema>
            ) as MjmlNode,
    },
    button: {
        type: "button",
        schema: z.object({
            type: z.literal("button"),
            variant: componentVariantSchema(button.meta),
            props: button.optionsSchema
                .extend({
                    sectionClass: z.string().optional(),
                })
                .optional(),
        }),
        render: (block) => {
            const props = (block.props ?? {}) as z.output<
                typeof button.optionsSchema
            > & {
                sectionClass?: string;
            };
            const sectionClass = props.sectionClass ?? "bg-block";
            const buttonProps: z.output<typeof button.optionsSchema> = {
                align: props.align,
                className: props.className,
                cssClass: props.cssClass,
                href: props.href,
                text: props.text,
            };
            return Section(
                [
                    button.component(
                        block.variant as keyof typeof button.variants & string,
                        buttonProps
                    ) as MjmlNode,
                ],
                {
                    sectionClass,
                }
            );
        },
    },
    title: {
        type: "title",
        schema: z.object({
            type: z.literal("title"),
            variant: componentVariantSchema(title.meta),
            props: title.optionsSchema.optional(),
        }),
        render: (block) =>
            title.component(
                block.variant as keyof typeof title.variants & string,
                (block.props ?? {}) as z.output<typeof title.optionsSchema>
            ) as MjmlNode,
    },
    spacer: {
        type: "spacer",
        schema: z.object({
            type: z.literal("spacer"),
            size: z.enum(["medium", "large"]).optional().default("medium"),
            props: spacer.optionsSchema.optional(),
        }),
        render: (block) =>
            spacer.component(
                block.size as keyof typeof spacer.variants & string,
                (block.props ?? {}) as z.output<typeof spacer.optionsSchema>
            ) as MjmlNode,
    },
} satisfies Record<string, BlockDefinition>;

const blockDefinitionList = Object.values(blockDefinitions);

const composeBlockSchema = z.discriminatedUnion(
    "type",
    blockDefinitionList.map((definition) => definition.schema) as [
        (typeof blockDefinitionList)[number]["schema"],
        (typeof blockDefinitionList)[number]["schema"],
        ...(typeof blockDefinitionList)[number]["schema"][],
    ]
);

const composeRequestSchema = z.object({
    template: z.literal("transactional"),
    target: compileTargetSchema,
    previewText: z.string().optional(),
    blocks: z
        .array(composeBlockSchema)
        .min(1, { error: "`blocks` must contain at least one block." }),
});

const templateRequestSchema = z.object({
    template: z
        .string({ error: "`template` must be a non-empty string." })
        .trim()
        .min(1, { error: "`template` must be a non-empty string." }),
    target: compileTargetSchema,
    props: z.record(z.string(), z.string()).optional(),
});

type ComposeBlock = z.infer<typeof composeBlockSchema>;
type ComposeBlockType = ComposeBlock["type"];

const blockRenderers = Object.fromEntries(
    blockDefinitionList.map((definition) => [
        definition.type as ComposeBlockType,
        definition.render,
    ])
) as {
    [Type in ComposeBlockType]: (block: RenderableBlock) => MjmlNode;
};

const hasValidBearerToken = (request: Request): boolean => {
    const expectedToken = env.STACKS_EMAIL_AUTH_TOKEN?.trim();
    if (!expectedToken) {
        return true;
    }

    const authorization = request.headers.get("authorization");
    if (!authorization) {
        return false;
    }

    const [scheme, token] = authorization.trim().split(/\s+/, 2);
    return scheme?.toLowerCase() === "bearer" && token === expectedToken;
};

const renderTransactionalBlock = (block: ComposeBlock): MjmlNode => {
    return blockRenderers[block.type](block);
};

const buildTransactionalDocument = (blocks: ComposeBlock[]): MjmlNode => ({
    tagName: "mjml",
    children: [
        {
            tagName: "mj-body",
            attributes: {
                "background-color": tokens.color.bodyBackground,
            },
            children: [
                spacer.component("large", {
                    sectionClass: "bg-page",
                }) as MjmlNode,
                header.component("transactional") as MjmlNode,
                ...blocks.map((block) => renderTransactionalBlock(block)),
                spacer.component("medium", {
                    sectionClass: "bg-block",
                }) as MjmlNode,
                footer.component("default", {
                    unsubscribeUrl: "[[UNSUBSCRIBE_URL]]",
                }) as MjmlNode,
                spacer.component("large", {
                    sectionClass: "bg-page",
                }) as MjmlNode,
            ],
        },
    ],
});

const invalidRequest = (error: z.ZodError) =>
    json(
        {
            error: error.issues.map((issue) => issue.message).join(" "),
        },
        { status: 400 }
    );

export const POST: RequestHandler = async ({ request }) => {
    if (!hasValidBearerToken(request)) {
        return json({ error: "Unauthorized." }, { status: 401 });
    }

    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return json(
            { error: "Request body must be valid JSON." },
            { status: 400 }
        );
    }

    const isBlockComposeRequest =
        typeof body === "object" && body !== null && "blocks" in body;

    if (!isBlockComposeRequest) {
        const parsed = templateRequestSchema.safeParse(body);
        if (!parsed.success) {
            return invalidRequest(parsed.error);
        }

        try {
            const compiled = compileEmailTemplate({
                slug: parsed.data.template,
                target: parsed.data.target,
                props: parsed.data.props,
            });

            return json({
                ...compiled,
                template: parsed.data.template,
                target: parsed.data.target,
            });
        } catch (error) {
            return json(
                {
                    error:
                        error instanceof Error
                            ? error.message
                            : "Failed to compile email template.",
                },
                { status: 500 }
            );
        }
    }

    const parsed = composeRequestSchema.safeParse(body);
    if (!parsed.success) {
        return invalidRequest(parsed.error);
    }

    try {
        const document = buildTransactionalDocument(parsed.data.blocks);
        const compiled = compileMjml({
            source: document,
            target: parsed.data.target,
            props: {},
            previewText: parsed.data.previewText,
        });

        return json({
            ...compiled,
            template: parsed.data.template,
            target: parsed.data.target,
            blockCount: parsed.data.blocks.length,
        });
    } catch (error) {
        return json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Failed to compose and compile transactional email.",
            },
            { status: 500 }
        );
    }
};

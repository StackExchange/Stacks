import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { z } from "zod/v4";
import { env } from "$env/dynamic/private";

import { compileMjml } from "$lib/pipeline/compile";
import { compileTargetSchema } from "$lib/public/validation";
import { Button } from "../../../../components/button";
import { Footer } from "../../../../components/footer";
import { Headline } from "../../../../components/headline";
import { Header } from "../../../../components/header";
import { Text } from "../../../../components/text";
import { Title } from "../../../../components/title";
import { Section } from "../../../../components/section";
import { Spacer } from "../../../../components/spacer";
import { mjmlJsonToString } from "../../../../mjml-json";
import { tokens } from "../../../../tokens";
import type { MjmlNode } from "../../../../types";

const headlineBlockSchema = z.object({
    type: z.literal("headline"),
    variant: z.enum(["default", "highlight"]).optional().default("default"),
    props: z
        .object({
            sectionClass: z.string().optional(),
            textClass: z.string().optional(),
            textAlign: z.string().optional(),
            textContent: z.string().optional(),
            textHighlight: z.union([z.boolean(), z.string()]).optional(),
        })
        .optional(),
});

const textBlockSchema = z.object({
    type: z.literal("text"),
    variant: z.enum(["body", "centered"]).optional().default("body"),
    props: z
        .object({
            columnClass: z.string().optional(),
            sectionClass: z.string().optional(),
            textAlign: z.string().optional(),
            textClass: z.string().optional(),
            textContent: z.string().optional(),
        })
        .optional(),
});

const buttonBlockSchema = z.object({
    type: z.literal("button"),
    variant: z
        .enum(["primary", "secondary", "inverted"])
        .optional()
        .default("primary"),
    props: z
        .object({
            sectionClass: z.string().optional(),
            align: z.string().optional(),
            className: z.string().optional(),
            cssClass: z.string().optional(),
            href: z.string().optional(),
            text: z.string().optional(),
        })
        .optional(),
});

const titleBlockSchema = z.object({
    type: z.literal("title"),
    variant: z.enum(["default", "invert"]).optional().default("default"),
    props: z
        .object({
            sectionClass: z.string().optional(),
            textClass: z.string().optional(),
            textAlign: z.string().optional(),
            textContent: z.string().optional(),
        })
        .optional(),
});

const spacerBlockSchema = z.object({
    type: z.literal("spacer"),
    size: z.enum(["medium", "large"]).optional().default("medium"),
    props: z
        .object({
            sectionClass: z.string().optional(),
            height: z.string().optional(),
        })
        .optional(),
});

const composeBlockSchema = z.discriminatedUnion("type", [
    headlineBlockSchema,
    textBlockSchema,
    buttonBlockSchema,
    titleBlockSchema,
    spacerBlockSchema,
]);

const composeRequestSchema = z.object({
    template: z.literal("transactional"),
    target: compileTargetSchema,
    previewText: z.string().optional(),
    blocks: z
        .array(composeBlockSchema)
        .min(1, { error: "`blocks` must contain at least one block." }),
});

type ComposeBlock = z.infer<typeof composeBlockSchema>;

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
    switch (block.type) {
        case "headline":
            return Headline(block.variant, block.props ?? {});
        case "text":
            return Text(block.variant, block.props ?? {});
        case "button": {
            const sectionClass = block.props?.sectionClass ?? "bg-block";
            const buttonProps = {
                align: block.props?.align,
                className: block.props?.className,
                cssClass: block.props?.cssClass,
                href: block.props?.href,
                text: block.props?.text,
            };
            return Section([Button(block.variant, buttonProps)], {
                sectionClass,
            });
        }
        case "title":
            return Title(block.variant, block.props ?? {});
        case "spacer":
            return Spacer(block.size, block.props ?? {});
    }
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
                Spacer("large", {
                    sectionClass: "bg-page",
                }),
                Header("transactional"),
                ...blocks.map((block) => renderTransactionalBlock(block)),
                Spacer("medium", {
                    sectionClass: "bg-block",
                }),
                Footer("default", {
                    unsubscribeUrl: "[[UNSUBSCRIBE_URL]]",
                }),
                Spacer("large", {
                    sectionClass: "bg-page",
                }),
            ],
        },
    ],
});

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

    const parsed = composeRequestSchema.safeParse(body);
    if (!parsed.success) {
        return json(
            {
                error: parsed.error.issues.map((issue) => issue.message).join(" "),
            },
            { status: 400 }
        );
    }

    try {
        const document = buildTransactionalDocument(parsed.data.blocks);
        const mjml = mjmlJsonToString(document);
        const compiled = compileMjml({
            mjml,
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

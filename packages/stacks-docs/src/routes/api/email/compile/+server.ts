import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { env } from "$env/dynamic/private";

import {
    compileEmailRenderable,
    compileEmailRenderableInputSchema,
} from "@stackoverflow/stacks-email";

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

    const parsed = compileEmailRenderableInputSchema.safeParse(body);
    if (!parsed.success) {
        return json(
            {
                error: parsed.error.issues.map((issue) => issue.message).join(" "),
            },
            { status: 400 }
        );
    }

    try {
        const compiled = compileEmailRenderable(parsed.data);

        return json(compiled);
    } catch (error) {
        return json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Failed to compile email renderable.",
            },
            { status: 404 }
        );
    }
};

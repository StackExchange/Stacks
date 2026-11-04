import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
    AUTH_SECRET: { schema: (value) => value },
    BETTER_AUTH_SECRET: { schema: (value) => value },
    AUTH_OKTA_ID: { schema: (value) => value },
    AUTH_OKTA_SECRET: { schema: (value) => value },
    AUTH_OKTA_ISSUER: { schema: (value) => value },
});

import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
    STACKS_EMAIL_AUTH_TOKEN: { schema: (value) => value },
});

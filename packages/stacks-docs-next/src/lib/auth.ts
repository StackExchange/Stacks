import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";
import { sveltekitCookies } from "better-auth/svelte-kit";

import { env } from "$env/dynamic/private";
import { getRequestEvent } from "$app/server";

// TODO: Make dynamic once we figure out Netlify env vars at runtime
const baseURL = "https://alpha.stackoverflow.design";

export const auth = betterAuth({
    baseURL,

    trustedOrigins: [baseURL, "https://*.stackoverflow.design"],

    // Secret for signing cookies and tokens
    // openssl rand -base64 32
    secret: env.AUTH_SECRET || "",

    // Cookie configuration
    advanced: {
        cookiePrefix: "auth",
    },

    // Plugins
    plugins: [
        // Okta OAuth via genericOAuth plugin
        genericOAuth({
            config: [
{
                    providerId: "okta",
                    clientId: env.AUTH_OKTA_ID || "",
                    clientSecret: env.AUTH_OKTA_SECRET || "",
                    discoveryUrl: `${env.AUTH_OKTA_ISSUER}/.well-known/openid-configuration`,
                    scopes: ["openid", "email", "profile"],
                },
            ],
        }),

        // SvelteKit cookies plugin (should be last)
        sveltekitCookies(getRequestEvent),
    ],
});

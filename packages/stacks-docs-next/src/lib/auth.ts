import { betterAuth } from "better-auth";
import { genericOAuth, okta } from "better-auth/plugins";
import { sveltekitCookies } from "better-auth/svelte-kit";

import { env } from "$env/dynamic/private";
import { getRequestEvent } from "$app/server";

const baseURL = process.env.URL || "http://localhost:5173";

export const auth = betterAuth({
    // Comes from Netlify
    // https://docs.netlify.com/build/configure-builds/environment-variables/#deploy-urls-and-metadata
    baseURL,

    // Secret for signing cookies and tokens
    // openssl rand -base64 32
    secret: env.AUTH_SECRET || "",

    // Trust the host for OAuth redirects (important for Netlify)
    trustedOrigins: [baseURL],

    // Cookie configuration
    advanced: {
        cookiePrefix: "auth",
    },

    // Plugins
    plugins: [
        // Okta OAuth via genericOAuth plugin
        genericOAuth({
            config: [
                okta({
                    clientId: env.AUTH_OKTA_ID || "",
                    clientSecret: env.AUTH_OKTA_SECRET || "",
                    issuer: env.AUTH_OKTA_ISSUER || "",
                }),
            ],
        }),

        // SvelteKit cookies plugin (should be last)
        sveltekitCookies(getRequestEvent),
    ],
});

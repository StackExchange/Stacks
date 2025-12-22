import { createAuthClient } from "better-auth/client";
import { genericOAuthClient } from "better-auth/client/plugins";
import { browser } from '$app/environment';

export const authClient = createAuthClient({
	baseURL: browser ? window.location.origin : "http://localhost:5173",
	plugins: [
		genericOAuthClient(),
	],
});
import { auth } from "$lib/auth";
import { toSvelteKitHandler } from "better-auth/svelte-kit";
import type { RequestEvent } from "@sveltejs/kit";

const handler = toSvelteKitHandler(auth);

export { handler as GET, handler as POST };

import { SvelteKitAuth } from "@auth/sveltekit";
import Okta from "@auth/sveltekit/providers/okta";

export const { handle, signIn } = SvelteKitAuth({
    providers: [Okta],
    trustHost: true,
});

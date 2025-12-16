import type { Actions } from "./$types";
import { signIn } from "$src/auth";

export const actions: Actions = { default: signIn };

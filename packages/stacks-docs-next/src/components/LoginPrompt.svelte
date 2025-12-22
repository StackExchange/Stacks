<script lang="ts">
	import { authClient } from "$lib/auth-client";

	import { Button, Icon } from "@stackoverflow/stacks-svelte";
	import { SpotLock } from "@stackoverflow/stacks-icons/spots";

	let { returnUrl = "/" }: { returnUrl?: string } = $props();

	async function handleSignIn() {
		try {
			console.log('Attempting sign in with:', {
				providerId: 'okta',
				callbackURL: returnUrl,
				baseURL: window.location.origin
			});

			const result = await authClient.signIn.oauth2({
				providerId: "okta",
				callbackURL: returnUrl,
			});

			console.log('Sign in result:', result);
		} catch (error) {
			console.error('Sign in error:', error);
		}
	}
</script>

<div class="d-flex ai-center jc-center fd-column py64">
	<div class="box p32 sm:p24 br8 bg-white ta-center wmx4">
		<Icon src={SpotLock} class="native mb24" />

		<h1 class="fs-headline2 mb12">Access required</h1>

		<p class="fs-body2 fc-black-500 mb24">Only employees can access what's here. It's not that interesting unless you work here, honestly.</p>

		<Button onclick={handleSignIn} class="w100">
			Login with Okta
		</Button>
	</div>
</div>

<style>
	.box {
		box-shadow:0 0 0 1px rgba(0,0,0,0.1)
	}
</style>

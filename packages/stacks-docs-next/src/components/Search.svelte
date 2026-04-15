<script>
	import { untrack } from 'svelte';
	import docsearch from '@docsearch/js';
	import '@docsearch/css';

	import { env } from '$env/dynamic/public';

	import { Link, Icon } from '@stackoverflow/stacks-svelte';
	import { IconSearch } from '@stackoverflow/stacks-icons';

	let docSearchButton = $state();

	// Check if all required env vars are available
	const searchEnabled = env.PUBLIC_ALGOLIA_APP_ID && env.PUBLIC_ALGOLIA_API_KEY && env.PUBLIC_ALGOLIA_INDEX_NAME;

	$effect(() => {
		if (!searchEnabled) return;

		const container = document.createElement('div');
		container.style.display = 'none';
		document.body.appendChild(container);

		try {
			docsearch({
				container,
				appId: env.PUBLIC_ALGOLIA_APP_ID,
				apiKey: env.PUBLIC_ALGOLIA_API_KEY,
				indexName: env.PUBLIC_ALGOLIA_INDEX_NAME,
			});

			// Store reference to the DocSearch button
			docSearchButton = untrack(() => container.querySelector('.DocSearch-Button'));
		} catch (error) {
			console.warn('Search initialization failed:', error);
		}

		return () => {
			container.remove();
		};
	});

	function openSearch() {
		docSearchButton?.click();
	}
</script>

<Link onclick={openSearch}>
	<Icon src={IconSearch} />
</Link>
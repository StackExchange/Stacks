<script>
	import { untrack } from 'svelte';
	import docsearch from '@docsearch/js';
	import '@docsearch/css';

	import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_API_KEY, PUBLIC_ALGOLIA_INDEX_NAME } from '$env/static/public';

	import { Button, Icon } from '@stackoverflow/stacks-svelte';
	import { IconSearch } from '@stackoverflow/stacks-icons';

	let hiddenContainer = $state();
	let docSearchButton = $state();

	$effect(() => {
		const container = document.createElement('div');
		container.style.display = 'none';
		document.body.appendChild(container);

		hiddenContainer = container;

		docsearch({
			container,
			appId: PUBLIC_ALGOLIA_APP_ID,
			apiKey: PUBLIC_ALGOLIA_API_KEY,
			indexName: PUBLIC_ALGOLIA_INDEX_NAME,
		});

		// Store reference to the DocSearch button
		docSearchButton = untrack(() => container.querySelector('.DocSearch-Button'));

		return () => {
			container.remove();
		};
	});

	function openSearch() {
		docSearchButton?.click();
	}
</script>

<Button icon size="sm" variant="tonal" onclick={openSearch}>
	<Icon src={IconSearch} native />
</Button>
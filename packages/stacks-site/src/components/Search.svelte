<script lang="ts">
	import { onMount } from 'svelte';
	import docsearch from '@docsearch/js';
	import '@docsearch/css';
	import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_API_KEY, PUBLIC_ALGOLIA_INDEX_NAME } from '$env/static/public';
	import { Icon } from '@stackoverflow/stacks-svelte';
	import { IconSearch } from '@stackoverflow/stacks-icons';

	let searchButton: HTMLInputElement;
	let docSearchInstance: any;

	onMount(() => {
		// Create a hidden container for DocSearch to initialize
		const hiddenContainer = document.createElement('div');
		hiddenContainer.style.display = 'none';
		document.body.appendChild(hiddenContainer);

		// Initialize DocSearch
		docSearchInstance = docsearch({
			container: hiddenContainer,
			appId: PUBLIC_ALGOLIA_APP_ID,
			apiKey: PUBLIC_ALGOLIA_API_KEY,
			indexName: PUBLIC_ALGOLIA_INDEX_NAME,
		});

		// Attach click handler to our custom button
		if (searchButton) {
			searchButton.addEventListener('click', () => {
				// Trigger the DocSearch modal
				const docSearchButton = hiddenContainer.querySelector('.DocSearch-Button') as HTMLButtonElement;
				if (docSearchButton) {
					docSearchButton.click();
				}
			});
		}

		return () => {
			hiddenContainer.remove();
		};
	});
</script>

<div class="ps-relative w100">
	<input
		bind:this={searchButton}
		type="text"
		class="s-input s-input__search w100"
		placeholder="Search Stacks…"
		readonly
	/>
	<Icon src={IconSearch} native class="s-input-icon s-input-icon__search" />
</div>

<style>
	input[readonly] {
		cursor: pointer;
	}

	/* DocSearch Modal Styling using Stacks brand colors */
	:global(:root) {
		--docsearch-primary-color: var(--brand-color-blue);
		--docsearch-text-color: var(--brand-color-black);
		--docsearch-spacing: 12px;
		--docsearch-icon-stroke-width: 1.4;
		--docsearch-highlight-color: var(--brand-color-orange);
		--docsearch-muted-color: var(--brand-color-gray);
		--docsearch-container-background: rgba(32, 28, 29, 0.8);
		--docsearch-logo-color: var(--brand-color-gray);
		--docsearch-searchbox-focus-background: var(--brand-color-white);
		--docsearch-searchbox-background: var(--brand-color-off-white);
		--docsearch-searchbox-shadow: inset 0 0 0 2px var(--brand-color-blue);
		--docsearch-hit-color: var(--brand-color-black);
		--docsearch-hit-active-color: var(--brand-color-white);
		--docsearch-hit-background: var(--brand-color-white);
		--docsearch-hit-shadow: 0 1px 3px 0 rgba(32, 28, 29, 0.1);
		--docsearch-key-gradient: linear-gradient(-225deg, var(--brand-color-off-white) 0%, var(--brand-color-white) 100%);
		--docsearch-key-shadow: inset 0 -2px 0 0 var(--brand-color-gray-200), inset 0 0 1px 1px var(--brand-color-white), 0 1px 2px 1px rgba(32, 28, 29, 0.1);
		--docsearch-footer-background: var(--brand-color-off-white);
		--docsearch-footer-shadow: 0 -1px 0 0 var(--brand-color-gray-200), 0 -3px 6px 0 rgba(32, 28, 29, 0.05);
		--docsearch-modal-background: var(--brand-color-white);
		--docsearch-modal-shadow: inset 1px 1px 0 0 var(--brand-color-gray-200), 0 3px 8px 0 rgba(32, 28, 29, 0.2);
	}

	:global(.DocSearch-Modal) {
		font-family: inherit;
	}

	:global(.DocSearch-Form) {
		border-radius: 4px;
	}

	:global(.DocSearch-Input) {
		font-family: inherit;
		font-size: 16px;
	}

	:global(.DocSearch-Hit-icon) {
		color: var(--brand-color-blue);
	}

	:global(.DocSearch-Hit[aria-selected='true'] .DocSearch-Hit-icon) {
		color: var(--brand-color-white);
	}

	:global(.DocSearch-Hit mark) {
		color: inherit;
		background: var(--brand-color-orange);
		padding: 0 2px;
	}

	:global(.DocSearch-Hit[aria-selected='true'] mark) {
		background: var(--brand-color-orange);
		color: var(--brand-color-black);
	}

	:global(.DocSearch-Hits mark) {
		background: var(--brand-color-orange);
		color: var(--brand-color-black);
		padding: 1px 3px;
		border-radius: 2px;
	}

	:global(.DocSearch-Footer) {
		font-size: 12px;
		margin: 0;
	}
</style>

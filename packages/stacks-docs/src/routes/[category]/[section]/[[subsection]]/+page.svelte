<script lang="ts">
  import { IconServiceGitHub } from '@stackoverflow/stacks-icons/icons';
  import { Icon, Button } from '@stackoverflow/stacks-svelte';

  import Contents from '$src/components/Contents.svelte';

  let { data } = $props();

  const lastUpdated = $derived(new Date(data?.metadata?.updated).toLocaleDateString());
  const toc = $derived(data?.metadata?.toc || []);

  const pageTitle = $derived(data.active.title ? `${data.active.title} - Stack Overflow Design System` : 'Stack Overflow Design System');
  const pageDescription = $derived(data?.metadata?.description || `Documentation for ${data.active.title} in the Stack Overflow Design System`);
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
</svelte:head>

{#if data?.active?.image}
  <img class="w100 h-auto" width="1030" height="540" alt="" src={data.active.image} />
{/if}

<div class="d-flex md:fd-column mx-auto pl32 md:pr32 sm:pl24 sm:pr24">
  <div class="doc flex--item9 wmn1 s-prose fs-body2 pt32">
    <div class="d-flex gs12 ai-start mb128">
      {#if data?.metadata?.updated}
        <div class="flex--item s-badge s-badge__new">
          <strong>Last updated:</strong> {lastUpdated}
        </div>
      {/if}
      {#if data?.metadata?.figma}
        <a class="flex--item" href="{data?.metadata?.figma}">
          <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon native">
            <path d="M7.00119 19C8.65719 19 10.0012 17.656 10.0012 16V13H7.00119C5.34519 13 4.00119 14.344 4.00119 16C4.00119 17.656 5.34519 19 7.00119 19Z" fill="#0ACF83"/>
            <path d="M4.00119 10C4.00119 8.34403 5.34519 7.00003 7.00119 7.00003H10.0012V13H7.00119C5.34519 13 4.00119 11.656 4.00119 10Z" fill="#A259FF"/>
            <path d="M4.00122 4C4.00122 2.344 5.34522 1 7.00122 1H10.0012V7H7.00122C5.34522 7 4.00122 5.656 4.00122 4Z" fill="#F24E1E"/>
            <path d="M10.0012 1H13.0012C14.6572 1 16.0012 2.344 16.0012 4C16.0012 5.656 14.6572 7 13.0012 7H10.0012V1Z" fill="#FF7262"/>
            <path d="M16.0012 10C16.0012 11.656 14.6572 13 13.0012 13C11.3452 13 10.0012 11.656 10.0012 10C10.0012 8.34403 11.3452 7.00003 13.0012 7.00003C14.6572 7.00003 16.0012 8.34403 16.0012 10Z" fill="#1ABCFE"/>
          </svg>
          Figma
        </a>
      {/if}
       {#if data?.metadata?.svelte}
        <a class="flex--item" href="{data?.metadata?.svelte}">
          <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon native">
            <path d="M9.17276 1.79495C11.5518 0.285382 14.8609 0.986878 16.5233 3.38089C17.3316 4.49421 17.6518 5.89795 17.3925 7.27054C17.2857 7.91098 17.0417 8.52138 16.6757 9.07034C17.2094 10.0616 17.3778 11.2051 17.1796 12.3184C16.9508 13.6452 16.1574 14.8194 15.0136 15.5362L10.8192 18.2051C8.4401 19.7148 5.14622 19.0135 3.46866 16.6192C2.67563 15.5059 2.3555 14.1025 2.59952 12.7451C2.7063 12.1047 2.95035 11.4943 3.31631 10.9453C2.78266 9.9541 2.61514 8.8105 2.81338 7.6973C3.04217 6.37057 3.83472 5.1963 4.97842 4.47952L9.17276 1.79495ZM14.8007 4.47952C14.0076 3.33569 12.5887 2.8016 11.2314 3.15237C10.9264 3.24387 10.6371 3.36649 10.3778 3.53421L6.1835 6.20218C5.4972 6.62921 5.00924 7.34662 4.87198 8.13968C4.71951 8.96317 4.91781 9.80168 5.39053 10.4727C6.18355 11.6165 7.60161 12.1505 8.95889 11.7998C9.26391 11.7236 9.55412 11.6014 9.81338 11.4336L11.4149 10.4121C11.4912 10.3665 11.5823 10.3352 11.6737 10.3047C12.0855 10.198 12.5127 10.3514 12.7567 10.7022C12.8938 10.9004 12.9548 11.1595 12.9091 11.4034C12.8633 11.6473 12.726 11.8452 12.5126 11.9825L8.33389 14.6514C8.25764 14.6972 8.16563 14.7283 8.07413 14.7588C7.66256 14.8653 7.23604 14.6972 6.99209 14.3467C6.87014 14.1638 6.80895 13.9351 6.82413 13.7217L6.83877 13.5694L6.68643 13.5235C6.09173 13.3405 5.54317 13.0652 5.03995 12.6992L4.82608 12.5469L4.74991 12.791C4.71941 12.9283 4.68861 13.0503 4.65811 13.1875C4.52085 14.0111 4.70426 14.8505 5.19229 15.5215C5.98538 16.665 7.40351 17.1984 8.76065 16.8477C9.06567 16.7562 9.35587 16.6346 9.61514 16.4668L13.8085 13.7979C14.4948 13.3709 14.9828 12.6534 15.12 11.8604C15.2572 11.0369 15.0748 10.1983 14.5868 9.52737C13.7939 8.3837 12.3756 7.84973 11.0185 8.20023C10.7134 8.29173 10.4232 8.4143 10.164 8.58206L8.56241 9.60355C8.48628 9.64921 8.39496 9.67954 8.30362 9.70999C7.89184 9.81675 7.46463 9.66428 7.22061 9.31351C7.08344 9.11527 7.02253 8.85628 7.06827 8.61233C7.11403 8.36835 7.25126 8.17048 7.46475 8.03323L11.6435 5.36429C11.7197 5.31857 11.8108 5.28735 11.9023 5.25687C12.3139 5.15013 12.7412 5.30274 12.9853 5.65335C13.1073 5.83636 13.1685 6.06581 13.1532 6.27933L13.1376 6.43167L13.2899 6.47757C13.8847 6.66058 14.4341 6.93479 14.9374 7.30081L15.1513 7.45316L15.2274 7.20901C15.2732 7.07186 15.3034 6.94971 15.3339 6.81253C15.4711 5.98917 15.2885 5.15047 14.8007 4.47952Z" fill="#FF3E00"/>
          </svg>
          Svelte
        </a>
      {/if}
    </div>  

    <h1 class="fs-display2 ff-stack-sans-headline-notch mb32">
      {data.active.title}
    </h1>

    {#if data?.metadata?.description}
      <p class="fc-dark fs-body3 mtn16 wmx5">
        {@html data.metadata.description}
      </p>
    {/if}

    {#if data.source === 'md'}
      <data.Content />
    {/if}

    {#if data.filename}
      <Button size="sm" variant="tonal" href={`https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs${data.filename}`}>
        <Icon src={IconServiceGitHub} /> Edit on GitHub
      </Button>
    {/if}
  </div>

  <Contents {toc} />
</div>

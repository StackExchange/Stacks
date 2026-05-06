---
title: Object fit
description: Atomic classes that control the sizing of an <code>img</code> or <code>video</code> relative to its container.
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        {
            class: '.of-contain',
            output: 'object-fit: contain',
            define: 'Fit the content to the content box while preserving its aspect ratio. This may result in empty space in the content box.'
        },
        {
            class: '.of-cover',
            output: 'object-fit: cover',
            define: 'Cover the entire content box with the content while preserving its aspect ratio. This may crop the content.'
        },
        {
            class: '.of-fill',
            output: 'object-fit: fill',
            define: "Stretch and scale the content's dimensions to match its content box. <em>This is the default browser value.</em>"
        },
        {
            class: '.of-none',
            output: 'object-fit: none',
            define: 'Prevent the content from being resized.'
        },
        {
            class: '.of-scale-down',
            output: 'object-fit: scale-down',
            define: "When larger than the content box, resize the content to fill its content box. Otherwise, maintain the content's original dimensions."
        },
        {
            class: '.op-center',
            output: 'object-position: center',
            define: 'Center the content within its content box.'
        }
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

```html
<img class="of-contain" src="…" />
<img class="of-cover" src="…" />
<img class="of-fill" src="…" />
<img class="of-none" src="…" />
<img class="of-scale-down" src="…" />
<img class="of-none op-center" src="…" />
```

<Example>
    <div class="d-flex g32 fw-wrap ff-mono">
        <div class="flex--item">
            <div class="mb8">.of-contain</div>
            <img
                class="of-contain ba bc-black-225 hs1 ws1"
                src="/images/object-fit-wide.svg"
                alt="placeholder for .of-contain"
            />
            <img
                class="of-contain ba bc-black-225 hs1 ws1"
                src="/images/object-fit-small.svg"
                alt="placeholder for .of-contain"
            />
        </div>
        <div class="flex--item">
            <div class="mb8">.of-cover</div>
            <img
                class="of-cover ba bc-black-225 hs1 ws1"
                src="/images/object-fit-wide.svg"
                alt="placeholder for .of-cover"
            />
            <img
                class="of-cover ba bc-black-225 hs1 ws1"
                src="/images/object-fit-small.svg"
                alt="placeholder for .of-cover"
            />
        </div>
        <div class="flex--item">
            <div class="mb8">.of-fill</div>
            <img
                class="of-fill ba bc-black-225 hs1 ws1"
                src="/images/object-fit-wide.svg"
                alt="placeholder for .of-fill"
            />
            <img
                class="of-fill ba bc-black-225 hs1 ws1"
                src="/images/object-fit-small.svg"
                alt="placeholder for .of-fill"
            />
        </div>
        <div class="flex--item">
            <div class="mb8">.of-none</div>
            <img
                class="of-none ba bc-black-225 hs1 ws1"
                src="/images/object-fit-wide.svg"
                alt="placeholder for .of-none"
            />
            <img
                class="of-none ba bc-black-225 hs1 ws1"
                src="/images/object-fit-small.svg"
                alt="placeholder for .of-none"
            />
        </div>
        <div class="flex--item">
            <div class="mb8">.of-scale-down</div>
            <img
                class="of-scale-down ba bc-black-225 hs1 ws1"
                src="/images/object-fit-wide.svg"
                alt="placeholder for .of-scale-down"
            />
            <img
                class="of-scale-down ba bc-black-225 hs1 ws1"
                src="/images/object-fit-small.svg"
                alt="placeholder for .of-scale-down"
            />
        </div>
        <div class="flex--item">
            <div class="mb8">.op-center.of-none</div>
            <img
                class="op-center of-none ba bc-black-225 hs1 ws1"
                src="/images/object-fit-wide.svg"
                alt="placeholder for .op-center.of-none"
            />
            <img
                class="op-center of-none ba bc-black-225 hs1 ws1"
                src="/images/object-fit-small.svg"
                alt="placeholder for .op-center.of-none"
            />
        </div>
    </div>
</Example>

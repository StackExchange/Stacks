---
title: "Toggle switch"
description: "A toggle is used to quickly switch between two or more possible states. They are most commonly used for simple \"on/off\" switches."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=1943-848"
---

<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import {
        IconAssistant, IconSearch,
        IconCodeDocument, IconDocument, IconComposeDocument,
    } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-toggle-switch',            parent: 'N/A', modifies: 'N/A',                description: 'Base toggle switch style.' },
        { class: '.s-toggle-switch__multiple',  parent: 'N/A', modifies: '.s-toggle-switch',   description: 'Used to style toggle switches with three or more options.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Styles

### Basic toggle

Toggle switches take up less space than an "on/off" radio button group and communicate their intended purpose more clearly than a checkbox that toggles functionality. They also provide consistency between desktop and mobile experiences.

```html
<div class="d-flex ai-center g8">
    <label class="s-label" for="toggle-example-default">…</label>
    <input class="s-toggle-switch" id="toggle-example-default" type="checkbox">
</div>
<div class="d-flex ai-center g8">
    <label class="s-label" for="toggle-example-checked">…</label>
    <input class="s-toggle-switch" id="toggle-example-checked" type="checkbox" checked>
</div>
<div class="d-flex ai-center g8">
    <label class="s-label" for="toggle-example-disabled">…</label>
    <input class="s-toggle-switch" id="toggle-example-disabled" type="checkbox" disabled>
</div>
<div class="d-flex ai-center g8">
    <label class="s-label" for="toggle-example-checked-disabled">…</label>
    <input class="s-toggle-switch" id="toggle-example-checked-disabled" type="checkbox" disabled checked>
</div>
```

<Example>
    <div class="d-flex fw-wrap g16">
        <div class="d-flex ai-center g8">
            <label class="s-label" for="toggle-example-default">Default</label>
            <input class="s-toggle-switch" id="toggle-example-default" type="checkbox" />
        </div>
        <div class="d-flex ai-center g8">
            <label class="s-label" for="toggle-example-checked">Checked</label>
            <input class="s-toggle-switch" id="toggle-example-checked" type="checkbox" checked />
        </div>
        <div class="d-flex ai-center g8">
            <label class="s-label" for="toggle-example-disabled">Disabled</label>
            <input class="s-toggle-switch" id="toggle-example-disabled" type="checkbox" disabled />
        </div>
        <div class="d-flex ai-center g8">
            <label class="s-label" for="toggle-example-checked-disabled">Checked and disabled</label>
            <input class="s-toggle-switch" id="toggle-example-checked-disabled" type="checkbox" disabled checked />
        </div>
    </div>
</Example>

### Two or more options with icons

Toggles switches can be extended to choose between two or more states where each state is represented by an icon. Using the `__multiple` toggle instead of a radio group and making sure labels follow their inputs in this case is important.

```html
<fieldset>
    <div class="d-flex ai-center g8">
        <legend class="s-label c-default">…</legend>
        <div class="s-toggle-switch s-toggle-switch__multiple">
            <input type="radio" name="group1" id="input-1" checked value="value1">
            <label for="input-1" aria-label="First value" title="First value">…</label>
            <input type="radio" name="group1" id="input-2" value="value2">
            <label for="input-2" aria-label="Second value" title="Second value">…</label>
            <input type="radio" name="group1" id="input-3" value="value3">
            <label for="input-3" aria-label="Third value" title="Third value">…</label>
        </div>
    </div>
</fieldset>
```

<Example>
    <div class="d-flex fd-column g24">
        <fieldset>
            <div class="d-flex ai-center g8">
                <legend class="c-default s-label">Search Style</legend>
                <div class="s-toggle-switch s-toggle-switch__multiple">
                    <input type="radio" name="example1" id="toggle-assistant" checked value="ai" />
                    <label for="toggle-assistant" aria-label="AI Search" title="AI Search"><Icon src={IconAssistant} /></label>
                    <input type="radio" name="example1" id="toggle-search" value="lexical" />
                    <label for="toggle-search" aria-label="Lexical Search" title="Lexical Search"><Icon src={IconSearch} /></label>
                </div>
            </div>
        </fieldset>
        <fieldset>
            <div class="d-flex ai-center g8">
                <legend class="c-default s-label">Export Type</legend>
                <div class="s-toggle-switch s-toggle-switch__multiple">
                    <input type="radio" name="example2" id="toggle-xml" value="xml" />
                    <label for="toggle-xml" aria-label="XML" title="XML"><Icon src={IconCodeDocument} /></label>
                    <input type="radio" name="example2" id="toggle-pdf" checked value="pdf" />
                    <label for="toggle-pdf" aria-label="PDF" title="PDF"><Icon src={IconDocument} /></label>
                    <input type="radio" name="example2" id="toggle-json" value="json" />
                    <label for="toggle-json" aria-label="JSON" title="JSON"><Icon src={IconComposeDocument} /></label>
                </div>
            </div>
        </fieldset>
    </div>
</Example>
